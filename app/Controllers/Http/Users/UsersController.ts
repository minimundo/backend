import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Application from '@ioc:Adonis/Core/Application'
import fs from 'fs'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    let users = User.query()

    users = users.orderBy('id', 'desc')

    await users.preload('avatar')

    return response.json(await users)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['email', 'password', 'name', 'role'])

    const user = User.create(data)

    return response.json(await user)
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.load('avatar')

    return user
  }

  public async me({ response, auth }: HttpContextContract) {
    const user = auth.user!

    await user.load('avatar')

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

    await user.load('avatar')

    if (user.avatar) {
      fs.unlinkSync(Application.tmpPath('uploads', user.avatar.fileName))
    }

    await user.delete()
  }
}
