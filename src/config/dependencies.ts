import { communityRepository } from "../libs/app/repository";
import {
  createCommunity_usecase,
  getCommunity_useCase,
  getAllCommunities_useCase,
  joinCommunity_useCase,
  getUserCommunities_useCase,
  editCommunity_useCase,
  removeMemberUseCase,
  searchCommunityUseCase,
  getCommunity_useCaseWithUsers,
  makeAdminUseCase,
} from "../libs/usecase";
import {
  createUserUsecase,
  updateUserUsecase,
} from "../libs/usecase/consumerUseCases";
import { ConsumeUsecase, Repository, UseCase } from "../utils/dependencies.interface";

const useCase: UseCase = {
  createCommunity_usecase,
  getCommunity_useCase,
  getAllCommunities_useCase,
  joinCommunity_useCase,
  getUserCommunities_useCase,
  editCommunity_useCase,
  removeMemberUseCase,
  searchCommunityUseCase,
  getCommunity_useCaseWithUsers,
  makeAdminUseCase,
};

const consumeUsecase: ConsumeUsecase = { createUserUsecase, updateUserUsecase };

const repository: Repository = {
  communityRepository,
};

export default {
  useCase,
  consumeUsecase,
  repository,
};
