import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Applicants, ApplicantsRelations, Experiences} from '../models';
import {MyDbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ExperiencesRepository} from './experiences.repository';

export class ApplicantsRepository extends DefaultCrudRepository<
  Applicants,
  typeof Applicants.prototype.id,
  ApplicantsRelations
> {

  public readonly experiences: HasManyRepositoryFactory<Experiences, typeof Applicants.prototype.id>;

  constructor(
    @inject('datasources.myDb') dataSource: MyDbDataSource, @repository.getter('ExperiencesRepository') protected experiencesRepositoryGetter: Getter<ExperiencesRepository>,
  ) {
    super(Applicants, dataSource);
    this.experiences = this.createHasManyRepositoryFactoryFor('experiences', experiencesRepositoryGetter,);
    this.registerInclusionResolver('experiences', this.experiences.inclusionResolver);
  }
}
