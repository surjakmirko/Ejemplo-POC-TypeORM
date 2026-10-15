import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from "typeorm";

@Entity()
export class TipoProducto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  nombre!: string;
}