import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Database from '@ioc:Adonis/Lucid/Database'
import Country from 'App/Models/Country'
import { StoreValidator } from 'App/Validators/Country/Flag/'
import { cuid } from '@ioc:Adonis/Core/Helpers'

export default class CountriesFlagController {
  public async store({ request, params }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      const { file } = await request.validate(StoreValidator)

      const country = await Country.findOrFail(params.id)

      country.useTransaction(trx)

      const flag = await country.related('flag').create({
        fileCategory: 'flag',
        fileName: `${cuid()}.${file.extname}`,
      })

      await file.move(Application.tmpPath('uploads'), {
        name: flag.fileName,
      })
    })
  }
}
