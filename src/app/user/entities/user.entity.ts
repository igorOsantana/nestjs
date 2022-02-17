import { ObjectType, Field } from '@nestjs/graphql'
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: string

  @Field()
  @Column({ nullable: false })
  name: string

  @Field()
  @Column({ name: 'birth_date', nullable: false })
  @CreateDateColumn()
  birthDate: Date

  @Field()
  @Column({ nullable: false })
  email: string

  @Field()
  @Column({ nullable: false })
  password: string

  @Field()
  @Column({ nullable: false })
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @Column({ nullable: false })
  @UpdateDateColumn()
  updatedAt: Date
}
