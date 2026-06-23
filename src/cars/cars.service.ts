import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  create(createCarDto: CreateCarDto) {
    const car: Car = { id: randomUUID(), ...createCarDto };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(
        `O ID do carro não pode ser alterado no corpo da requisição.`,
      );
    }

    const car = this.findOneById(id);
    car.brand = updateCarDto.brand ?? car.brand;
    car.model = updateCarDto.model ?? car.model;

    return car;
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
