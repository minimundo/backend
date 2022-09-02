import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Questions extends BaseSchema {
  protected tableName = 'questions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('teacher_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('country_id').unsigned().references('countries.id').onDelete('CASCADE')
      table.integer('grade').notNullable()
      table.text('wording').notNullable()
      table.text('answer1').notNullable()
      table.text('answer2').notNullable()
      table.text('answer3').notNullable()
      table.text('answer4').notNullable()
      table.string('correct_answer').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
