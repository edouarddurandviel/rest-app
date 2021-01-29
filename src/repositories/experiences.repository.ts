import {DefaultCrudRepository} from '@loopback/repository';
import {Experiences, ExperiencesRelations} from '../models';
import {MyDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ExperiencesRepository extends DefaultCrudRepository<
  Experiences,
  typeof Experiences.prototype.id,
  ExperiencesRelations
> {
  constructor(
    @inject('datasources.myDb') dataSource: MyDbDataSource,
  ) {
    super(Experiences, dataSource);
  }
}
