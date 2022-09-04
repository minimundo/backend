import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Question from 'App/Models/Question'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await Question.createMany([
      {
        countryId: 1,
        grade: 7,
        wording: 'Enunciado da Questão 1',
        answer1: 'Resposta 1 | Correta',
        answer2: 'Resposta 2 | Incorreta',
        answer3: 'Resposta 3 | Incorreta',
        answer4: 'Resposta 4 | Incorreta',
        correct_answer: 'answer1',
      },
      {
        countryId: 2,
        grade: 7,
        wording: 'Enunciado da Questão 2',
        answer1: 'Resposta 1 | Incorreta',
        answer2: 'Resposta 2 | Correta',
        answer3: 'Resposta 3 | Incorreta',
        answer4: 'Resposta 4 | Incorreta',
        correct_answer: 'answer2',
      },
      {
        countryId: 3,
        grade: 7,
        wording: 'Enunciado da Questão 3',
        answer1: 'Resposta 1 | Incorreta',
        answer2: 'Resposta 2 | Incorreta',
        answer3: 'Resposta 3 | Correta',
        answer4: 'Resposta 4 | Incorreta',
        correct_answer: 'answer3',
      },
    ])
  }
}
