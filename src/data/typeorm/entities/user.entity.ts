
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../../domain/entities/user";

@Entity({
    name: 'user',
  })

  export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;

    toDomain(): User {
        return new User({
            id: this.id,
            name: this.name,
            email: this.email
        });
    }
  }