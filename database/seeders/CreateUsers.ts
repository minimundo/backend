import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'
export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    const firstUser = {
      email: Env.get('FIRST_EMAIL_SEED'),
      password: Env.get('FIRST_PASS_SEED'),
    }
    const secondUser = {
      email: Env.get('SECOND_EMAIL_SEED'),
      password: Env.get('SECOND_PASS_SEED'),
    }

    const userAdmin = User.findBy('email', firstUser.email)
    if (await userAdmin) {
      console.log('First User already exists')
    } else {
      await User.create({
        name: 'First User Mini Mundo',
        email: firstUser.email,
        password: firstUser.password,
        role: 'admin',
      })
    }

    const userNormal = User.findBy('email', secondUser.email)
    if (await userNormal) {
      console.log('Second User already exists')
    } else {
      await User.create({
        name: 'Second User Mini Mundo',
        email: secondUser.email,
        password: firstUser.password,
        role: 'normal',
      })
    }
  }
}
