import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Question from 'App/Models/Question'

export default class QuestionsController {
  public async index({}: HttpContextContract) {
    const questions = await Question.query().preload('creator').preload('country')

    return questions
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = request.all()

    const user = await auth.authenticate()

    const question = await Question.create({ creatorId: user.id, ...data })

    await question.preload('creator')
    await question.preload('country')

    return question
  }

  public async show({ params }: HttpContextContract) {
    const question = await Question.findOrFail(params.id)

    await question.preload('creator')
    await question.preload('country')

    return question
  }

  public async update({ request, params }: HttpContextContract) {
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

    return question
  }

  public async destroy({ params }: HttpContextContract) {
    const question = await Question.findOrFail(params.id)

    await question.delete()
  }
}
