import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Countries extends BaseSchema {
  protected tableName = 'countries'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable().unique()
      table
        .enu('continent', [
          'América do Norte',
          'América Central',
          'América do Sul',
          'Europa',
          'África',
          'Oceania',
          'Ásia',
          'Antártida',
        ])
        .notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
