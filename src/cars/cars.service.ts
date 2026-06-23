import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: randomUUID(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: randomUUID(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: randomUUID(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`Carro com id ${id} não encontrado.`);
    }

    return car;
  }

  create(dto: CreateCarDto) {
    const car: Car = { id: randomUUID(), ...dto };
    this.cars.push(car);
    return car;
  }

  update(id: string, dto: UpdateCarDto) {
    const car = this.findOneById(id);
    Object.assign(car, dto);
    return car;
  }

  deleteOneById(id: string) {
    const index = this.cars.findIndex((car) => car.id === id);

    if (index === -1) {
      throw new NotFoundException(`Carro com id ${id} não encontrado.`);
    }

    const deleted = this.cars.splice(index, 1)[0];
    return deleted;
  }
}
