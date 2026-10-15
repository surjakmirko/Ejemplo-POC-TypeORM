import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  nombre!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  precio!: number;

  @Column("int", { default: 0 })
  stock!: number;

  @CreateDateColumn()
  fechaDeAlta!: Date;
}
