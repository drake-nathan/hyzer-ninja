import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Disc {
  @PrimaryKey()
  _id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  name!: string;
}
