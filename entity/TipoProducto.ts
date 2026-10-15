import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Producto } from "./Producto";

@Entity()
export class TipoProducto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar", { unique: true })
  nombre!: string;

  @OneToMany(() => Producto, (producto) => producto.tipo)
  productos!: Producto[];
}
