import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Teacher from 'App/Models/Teacher'

export default class TeachersController {
  public async register({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])

    const teacher = await Teacher.create(data)

    response.status(201).send({ message: 'Teacher created successfully' })

    return teacher
  }

  public async update({ request, response, params }: HttpContextContract) {
    const { name, email, password } = request.all()

    const teacher = await Teacher.find(params.id)

    if (!teacher) {
      response.status(404).send({ message: 'Teacher not found' })
    }

    teacher.name = name
    teacher.email = email
    teacher.password = password

    await teacher.save()

    return teacher
  }

  public async list({ request, response }: HttpContextContract) {
    const teachers = Teacher.all()

    return teachers
  }

  public async destroy({ response, params }) {
    const teacher = await Teacher.find(params.id)

    if (!teacher) {
      response.status(404).send({ message: 'Teacher not found' })
    }

    await teacher.delete()

    return response.status(200).send({ message: 'Teacher has been deleted' })
  }
}
