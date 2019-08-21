import { Car } from './car';

export interface Lead {
    id: number;
    firstName: string;
    lastName: string;
    cars: Array<Car>;
}