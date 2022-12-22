import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Country from 'App/Models/Country'

export default class CountriesController {
  public async index({ response }: HttpContextContract) {
    let countries = Country.query()

    await countries.preload('flag')

    countries = countries.orderBy('id', 'asc')

    return response.json(await countries)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.all()

    const country = Country.create(data)

    return response.json(await country)
  }

  public async show({ response, params }: HttpContextContract) {
    const country = await Country.findOrFail(params.id)

    await country.load('flag')

    return response.json(country)
  }

  public async update({ request, params }: HttpContextContract) {
    const country = await Country.findOrFail(params.id)
    const data = request.only(['name', 'continent', 'flag_image'])

    country.merge(data)

    await country.save()

    return country
  }

  public async destroy({ params }: HttpContextContract) {
    const country = await Country.findOrFail(params.id)

    await country.delete()
  }
}
