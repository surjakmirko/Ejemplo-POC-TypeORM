import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { TipoProducto } from "./TipoProducto";

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

  @ManyToOne(() => TipoProducto, (tipo) => tipo.productos, {
    nullable: false,
    eager: true,
    onDelete: "RESTRICT",
  })
  @JoinColumn({ name: "tipoId" })
  tipo!: TipoProducto;
}
