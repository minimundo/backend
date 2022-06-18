import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Teacher from 'App/Models/Teacher'

export default class TeachersController {
  public async register({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])

    const teacher = await Teacher.create(data)

    response.status(201)

    return {
      message: 'successfully registered teacher',
    }
  }
}
