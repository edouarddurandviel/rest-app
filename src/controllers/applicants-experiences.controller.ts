import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Applicants,
  Experiences,
} from '../models';
import {ApplicantsRepository} from '../repositories';

export class ApplicantsExperiencesController {
  constructor(
    @repository(ApplicantsRepository) protected applicantsRepository: ApplicantsRepository,
  ) { }

  @get('/applicants/{id}/experiences', {
    responses: {
      '200': {
        description: 'Array of Applicants has many Experiences',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Experiences)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Experiences>,
  ): Promise<Experiences[]> {
    return this.applicantsRepository.experiences(id).find(filter);
  }

  @post('/applicants/{id}/experiences', {
    responses: {
      '200': {
        description: 'Applicants model instance',
        content: {'application/json': {schema: getModelSchemaRef(Experiences)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Applicants.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiences, {
            title: 'NewExperiencesInApplicants',
            exclude: ['id'],
            optional: ['applicantsId']
          }),
        },
      },
    }) experiences: Omit<Experiences, 'id'>,
  ): Promise<Experiences> {
    return this.applicantsRepository.experiences(id).create(experiences);
  }

  @patch('/applicants/{id}/experiences', {
    responses: {
      '200': {
        description: 'Applicants.Experiences PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiences, {partial: true}),
        },
      },
    })
    experiences: Partial<Experiences>,
    @param.query.object('where', getWhereSchemaFor(Experiences)) where?: Where<Experiences>,
  ): Promise<Count> {
    return this.applicantsRepository.experiences(id).patch(experiences, where);
  }

  @del('/applicants/{id}/experiences', {
    responses: {
      '200': {
        description: 'Applicants.Experiences DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Experiences)) where?: Where<Experiences>,
  ): Promise<Count> {
    return this.applicantsRepository.experiences(id).delete(where);
  }
}
