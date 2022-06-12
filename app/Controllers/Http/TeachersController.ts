import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Teacher from 'App/Models/Teacher'

export default class TeachersController {
  public async register({ request, response }: HttpContextContract) {
    const dataToCreate = request.body()

    const teacher = await Teacher.create(dataToCreate)

    response.status(201)

    return {
      message: 'successfully registered teacher',
    }
  }
}
