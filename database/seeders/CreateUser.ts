import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Kevin Almeida',
        email: 'janioklalmeida05@gmail.com',
        password: 'admin',
        role: 'admin',
      },
      {
        name: 'Gabriel Barbosa',
        email: 'gabriel@admin.com',
        password: 'admin',
        role: 'admin',
      },
      {
        name: 'Samantha Jolie',
        email: 'samanthoncia@teacher.com',
        password: '123456',
        role: 'normal',
      },
    ])
  }
}
