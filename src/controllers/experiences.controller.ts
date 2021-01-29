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
import {Experiences} from '../models';
import {ExperiencesRepository} from '../repositories';

export class ExperiencesController {
  constructor(
    @repository(ExperiencesRepository)
    public experiencesRepository : ExperiencesRepository,
  ) {}

  @post('/experiences', {
    responses: {
      '200': {
        description: 'Experiences model instance',
        content: {'application/json': {schema: getModelSchemaRef(Experiences)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiences, {
            title: 'NewExperiences',
            exclude: ['id'],
          }),
        },
      },
    })
    experiences: Omit<Experiences, 'id'>,
  ): Promise<Experiences> {
    return this.experiencesRepository.create(experiences);
  }

  @get('/experiences/count', {
    responses: {
      '200': {
        description: 'Experiences model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Experiences) where?: Where<Experiences>,
  ): Promise<Count> {
    return this.experiencesRepository.count(where);
  }

  @get('/experiences', {
    responses: {
      '200': {
        description: 'Array of Experiences model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Experiences, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Experiences) filter?: Filter<Experiences>,
  ): Promise<Experiences[]> {
    return this.experiencesRepository.find(filter);
  }

  @patch('/experiences', {
    responses: {
      '200': {
        description: 'Experiences PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiences, {partial: true}),
        },
      },
    })
    experiences: Experiences,
    @param.where(Experiences) where?: Where<Experiences>,
  ): Promise<Count> {
    return this.experiencesRepository.updateAll(experiences, where);
  }

  @get('/experiences/{id}', {
    responses: {
      '200': {
        description: 'Experiences model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Experiences, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Experiences, {exclude: 'where'}) filter?: FilterExcludingWhere<Experiences>
  ): Promise<Experiences> {
    return this.experiencesRepository.findById(id, filter);
  }

  @patch('/experiences/{id}', {
    responses: {
      '204': {
        description: 'Experiences PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Experiences, {partial: true}),
        },
      },
    })
    experiences: Experiences,
  ): Promise<void> {
    await this.experiencesRepository.updateById(id, experiences);
  }

  @put('/experiences/{id}', {
    responses: {
      '204': {
        description: 'Experiences PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() experiences: Experiences,
  ): Promise<void> {
    await this.experiencesRepository.replaceById(id, experiences);
  }

  @del('/experiences/{id}', {
    responses: {
      '204': {
        description: 'Experiences DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.experiencesRepository.deleteById(id);
  }
}
