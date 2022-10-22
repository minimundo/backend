import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Question from 'App/Models/Question'

export default class QuestionsController {
  public async index({ request }: HttpContextContract) {
    const country = request.input('country')
    const grade = request.input('grade')
    const wording = request.input('wording')

    let questions

    if (country && !grade && !wording) {
      questions = await Question.query()
        .where('country_id', country)
        .preload('creator')
        .preload('country')
    } else if (grade && !country && !wording) {
      questions = await Question.query().where('grade', grade).preload('creator').preload('country')
    } else if (wording && !country && !grade) {
      questions = await Question.query()
        .where('wording', 'LIKE', `%${wording}%`)
        .preload('creator')
        .preload('country')
    } else if (country && grade) {
      questions = await Question.query()
        .where('country_id', country)
        .where('grade', grade)
        .preload('creator')
        .preload('country')
    } else if (country && wording) {
      questions = await Question.query()
        .where('country_id', country)
        .where('wording', 'LIKE', `%${wording}%`)
        .preload('creator')
        .preload('country')
    } else if (grade && wording) {
      questions = await Question.query()
        .where('grade', grade)
        .where('wording', 'LIKE', `%${wording}%`)
        .preload('creator')
        .preload('country')
    } else if (country && grade && wording) {
      questions = await Question.query()
        .where('country_id', country)
        .where('grade', grade)
        .where('wording', 'LIKE', `%${wording}%`)
        .preload('creator')
        .preload('country')
    } else {
      questions = await Question.query().preload('creator').preload('country')
    }

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
