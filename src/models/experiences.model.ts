import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Experiences extends Entity {
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
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  desc: string;

  @property({
    type: 'date',
    required: true,
  })
  start: string;

  @property({
    type: 'date',
    required: true,
  })
  end: string;

  @property({
    type: 'number',
  })
  applicantsId?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Experiences>) {
    super(data);
  }
}

export interface ExperiencesRelations {
  // describe navigational properties here
}

export type ExperiencesWithRelations = Experiences & ExperiencesRelations;
