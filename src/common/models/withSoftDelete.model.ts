import { Field, ObjectType } from '@nestjs/graphql'
import { BaseModel } from './base.model'

@ObjectType({ isAbstract: true })
export abstract class withSoftDelete extends BaseModel {
  @Field({
    description: 'Identifies the date and time when the object was deleted.',
    nullable: true,
  })
  deleted_at: Date
}
