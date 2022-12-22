import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Database from '@ioc:Adonis/Lucid/Database'
import Question from 'App/Models/Question'
import { StoreValidator } from 'App/Validators/Question/Media/'
import { cuid } from '@ioc:Adonis/Core/Helpers'

export default class QuestionMediaController {
  public async store({ request, params }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      const { file } = await request.validate(StoreValidator)

      const question = await Question.findOrFail(params.id)

      question.useTransaction(trx)

      const media = await question.related('media').create({
        fileCategory: 'media',
        fileName: `${cuid()}.${file.extname}`,
      })

      await file.move(Application.tmpPath('uploads'), {
        name: media.fileName,
      })
    })
  }
}
