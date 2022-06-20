import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Teacher from 'App/Models/Teacher'

export default class TeachersController {
  public async index() {
    const teachers = Teacher.all()

    return teachers
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password'])

    const teacher = await Teacher.create(data)

    response.status(201).send({ message: 'Teacher created successfully' })

    return teacher
  }

  public async show({ params }: HttpContextContract) {
    const teacher = await Teacher.findOrFail(params.id)

    return teacher
  }

  public async update({ request, params }: HttpContextContract) {
    const { name, email, password } = request.all()

    const teacher = await Teacher.findOrFail(params.id)

    teacher.name = name
    teacher.email = email
    teacher.password = password

    await teacher.save()

    return teacher
  }

  public async destroy({ response, params }) {
    const teacher = await Teacher.findOrFail(params.id)

    await teacher.delete()

    return response.status(200).send({ message: 'Teacher has been deleted' })
  }
}
