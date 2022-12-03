import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    let users = User.query()

    users = users.orderBy('id', 'desc')

    return response.json(await users)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['email', 'password', 'name', 'role'])

    const user = User.create(data)

    return response.json(await user)
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    return user
  }

  public async me({ response, auth }: HttpContextContract) {
    const user = auth.user!

    return response.json(user)
  }

  public async update({ request, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['email', 'password', 'name', 'role'])

    user.merge(data)

    await user.save()

    return user
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}
