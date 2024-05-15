import createCommunity_controller from "./create.community.controller";
import getCommunity_controller from "./get.community.controller";
import getAllCommunities_controller from "./get.all.communities.controller";
import joinCommunity_controller from "./join.community.controller";
import getUserCommunities_controller from "./get.user.community.controller";
import editCommunity_controller from "./edit.community.controller";
import searchCommunityController from "./search.community.controller";
import removeMemberController from "./remove.member.controller";
import getCommunityWithUsersController from "./get.communitywith.user.controller";
import makeAdminController from "./make.admin.controller";
import { Dependencies } from "../../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  return {
    createCommunityController: createCommunity_controller(dependencies),
    getCommunityController: getCommunity_controller(dependencies),
    getAllCommunityController: getAllCommunities_controller(dependencies),
    joinCommunityController: joinCommunity_controller(dependencies),
    getUserCommunitiesController: getUserCommunities_controller(dependencies),
    editCommunityController: editCommunity_controller(dependencies),
    searchCommunityController: searchCommunityController(dependencies),
    removeMemberController: removeMemberController(dependencies),
    getCommunityWithUsersController:
      getCommunityWithUsersController(dependencies),
    makeAdminController: makeAdminController(dependencies),
  };
};
