import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  name!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;

  @Column("int", { default: 0 })
  stock!: number;

  @CreateDateColumn()
  createdAt!: Date;
}
