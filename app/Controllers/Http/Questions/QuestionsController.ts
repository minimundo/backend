import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Question from 'App/Models/Question'

export default class QuestionsController {
  public async index({ request, response }: HttpContextContract) {
    let questions = Question.query()

    if (request.input('country')) {
      questions = questions.where('country_id', request.input('country'))
    }

    if (request.input('grade')) {
      questions = questions.where('grade', request.input('grade'))
    }

    if (request.input('wording')) {
      questions = questions.where('wording', 'LIKE', `%${request.input('wording')}%`)
    }

    questions.preload('creator').preload('country')

    return response.json(await questions)
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const data = request.all()

    const user = await auth.authenticate()

    const question = await Question.create({ creatorId: user.id, ...data })

    await question.preload('creator')
    await question.preload('country')

    return response.json(question)
  }

  public async show({ response, params }: HttpContextContract) {
    const question = await Question.findOrFail(params.id)

    await question.preload('creator')
    await question.preload('country')

    return response.json(question)
  }

  public async update({ request, response, params }: HttpContextContract) {
    const question = await Question.findOrFail(params.id)
    const data = request.only([
      'country_id',
      'grade',
      'wording',
      'answer1',
      'answer2',
      'answer3',
      'answer4',
      'correct_answer',
    ])

    question.merge(data)

    await question.save()

    await question.preload('creator')
    await question.preload('country')

    return response.json(question)
  }

  public async destroy({ params }: HttpContextContract) {
    const question = await Question.findOrFail(params.id)

    await question.delete()
  }
}
