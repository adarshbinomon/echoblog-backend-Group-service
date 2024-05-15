export interface Dependencies {
  useCase: UseCase;
  consumeUsecase: ConsumeUsecase;
  repository: Repository;
}

export interface ConsumeUsecase {
  createUserUsecase: Function;
  updateUserUsecase: Function;
}

export interface Repository {
  communityRepository: CommunityRepository;
}

export interface CommunityRepository {
  makeAdmin: Function;
  getCommunityWithUsers: Function;
  removeMember: Function;
  createCommunity: Function;
  getCommunityWithId: Function;
  createUser: Function;
  updateUser: Function;
  findAllCommunities: Function;
  joinCommunity: Function;
  getUserCommunities: Function;
  editCommunitySettings: Function;
  searchCommunity: Function;
}

export interface UseCase {
  createCommunity_usecase: Function;
  getCommunity_useCase: Function;
  getAllCommunities_useCase: Function;
  joinCommunity_useCase: Function;
  getUserCommunities_useCase: Function;
  getCommunity_useCaseWithUsers: Function;
  editCommunity_useCase: Function;
  makeAdminUseCase: Function;
  removeMemberUseCase: Function;
  searchCommunityUseCase: Function;
}
