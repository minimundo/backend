import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Country from 'App/Models/Country'

export default class CountriesController {
  public async index({}: HttpContextContract) {
    const countries = await Country.query().orderBy('id', 'asc')

    return countries
  }

  public async store({ request }: HttpContextContract) {
    const data = request.all()

    const country = await Country.create(data)

    return country
  }

  public async show({ params }: HttpContextContract) {
    const country = await Country.findOrFail(params.id)

    return country
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
