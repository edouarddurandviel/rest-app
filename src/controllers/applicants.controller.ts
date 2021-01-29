import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Applicants} from '../models';
import {ApplicantsRepository} from '../repositories';

export class ApplicantsController {
  constructor(
    @repository(ApplicantsRepository)
    public applicantsRepository : ApplicantsRepository,
  ) {}

  @post('/applicants', {
    responses: {
      '200': {
        description: 'Applicants model instance',
        content: {'application/json': {schema: getModelSchemaRef(Applicants)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Applicants, {
            title: 'NewApplicants',
            exclude: ['id'],
          }),
        },
      },
    })
    applicants: Omit<Applicants, 'id'>,
  ): Promise<Applicants> {
    return this.applicantsRepository.create(applicants);
  }

  @get('/applicants/count', {
    responses: {
      '200': {
        description: 'Applicants model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Applicants) where?: Where<Applicants>,
  ): Promise<Count> {
    return this.applicantsRepository.count(where);
  }

  @get('/applicants', {
    responses: {
      '200': {
        description: 'Array of Applicants model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Applicants, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Applicants) filter?: Filter<Applicants>,
  ): Promise<Applicants[]> {
    return this.applicantsRepository.find(filter);
  }

  @patch('/applicants', {
    responses: {
      '200': {
        description: 'Applicants PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Applicants, {partial: true}),
        },
      },
    })
    applicants: Applicants,
    @param.where(Applicants) where?: Where<Applicants>,
  ): Promise<Count> {
    return this.applicantsRepository.updateAll(applicants, where);
  }

  @get('/applicants/{id}', {
    responses: {
      '200': {
        description: 'Applicants model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Applicants, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Applicants, {exclude: 'where'}) filter?: FilterExcludingWhere<Applicants>
  ): Promise<Applicants> {
    return this.applicantsRepository.findById(id, filter);
  }

  @patch('/applicants/{id}', {
    responses: {
      '204': {
        description: 'Applicants PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Applicants, {partial: true}),
        },
      },
    })
    applicants: Applicants,
  ): Promise<void> {
    await this.applicantsRepository.updateById(id, applicants);
  }

  @put('/applicants/{id}', {
    responses: {
      '204': {
        description: 'Applicants PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() applicants: Applicants,
  ): Promise<void> {
    await this.applicantsRepository.replaceById(id, applicants);
  }

  @del('/applicants/{id}', {
    responses: {
      '204': {
        description: 'Applicants DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.applicantsRepository.deleteById(id);
  }
}
