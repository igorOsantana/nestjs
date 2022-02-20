import { ObjectType, Field, ID } from '@nestjs/graphql'
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm'

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string

  @Column({ nullable: false })
  @Field(() => String)
  name: string

  @Column({ nullable: false, type: 'date' })
  @Field(() => Date)
  @CreateDateColumn()
  birth_date: Date

  @Column({ nullable: false })
  @Field(() => String)
  email: string

  @Column({ nullable: false })
  @Field(() => String)
  password: string

  @Column({ nullable: false, type: 'date' })
  @Field()
  @CreateDateColumn()
  created_at: Date

  @Column({ nullable: false, type: 'date' })
  @Field(() => Date)
  @UpdateDateColumn()
  updated_at: Date

  @Column({ nullable: true, type: 'date' })
  @Field(() => Date, { nullable: true })
  @DeleteDateColumn()
  deleted_at: Date
}
