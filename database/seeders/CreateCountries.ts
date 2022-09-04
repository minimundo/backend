import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Country'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await Country.createMany([
      {
        name: 'Brasil',
        continent: 'América do Sul',
      },
      {
        name: 'Estados Unidos',
        continent: 'América do Norte',
      },
      {
        name: 'França',
        continent: 'Europa',
      },
    ])
  }
}
