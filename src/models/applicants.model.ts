import {Entity, model, property, hasMany} from '@loopback/repository';
import {Experiences} from './experiences.model';

@model()
export class Applicants extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  appTitle: string;

  @hasMany(() => Experiences)
  experiences: Experiences[];

  constructor(data?: Partial<Applicants>) {
    super(data);
  }
}

export interface ApplicantsRelations {
  // describe navigational properties here
}

export type ApplicantsWithRelations = Applicants & ApplicantsRelations;
