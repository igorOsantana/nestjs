import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class users1645151096264 implements MigrationInterface {
  private readonly tableName = 'users'
  private readonly table = new Table({
    name: this.tableName,
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        unsigned: true,
        isGenerated: true,
        generationStrategy: 'increment',
        isNullable: false,
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'birth_date',
        type: 'date',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isUnique: true,
        isNullable: false,
      },
      {
        name: 'password',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'date',
        isNullable: false,
        isGenerated: true,
      },
      {
        name: 'updated_at',
        type: 'date',
        isNullable: false,
        isGenerated: true,
      },
      {
        name: 'deleted_at',
        type: 'date',
        isNullable: true,
      },
    ],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable(this.table)
  }
}
