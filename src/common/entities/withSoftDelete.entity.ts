import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity } from './base.entity'

@ObjectType({ isAbstract: true })
export abstract class withSoftDelete extends BaseEntity {
  @Field({
    description: 'Identifies the date and time when the object was deleted.',
    nullable: true,
  })
  deleted_at: Date
}
