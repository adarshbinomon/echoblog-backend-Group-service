import express from "express";
import { communityController } from "../../libs/controller";
import { verifyUser } from "../../utils/jwt/verify.user";
import { Dependencies } from "../../utils/dependencies.interface";

export default (dependencies: Dependencies) => {
  const router = express();

  const {
    createCommunityController,
    getCommunityController,
    getAllCommunityController,
    joinCommunityController,
    getUserCommunitiesController,
    editCommunityController,
    searchCommunityController,
    removeMemberController,
    getCommunityWithUsersController,
    makeAdminController,
  } = communityController(dependencies);

  router.post("/create-community", createCommunityController);
  router.get("/get-community/:communityId", verifyUser, getCommunityController);
  router.get(
    "/get-community-with-users/:communityId",
    verifyUser,
    getCommunityWithUsersController
  );
  router.get(
    "/get-all-communities/:userId",
    verifyUser,
    getAllCommunityController
  );
  router.put("/join-community", verifyUser, joinCommunityController);
  router.get(
    "/get-user-communities/:userId",
    // verifyUser,
    getUserCommunitiesController
  );
  router.put("/community-edit/:communityId", editCommunityController);
  router.get("/search-community/:regex", verifyUser, searchCommunityController);
  router.post(
    "/remove-member/:communityId",

    removeMemberController
  );
  router.post("/make-admin/:communityId", makeAdminController);

  return router;
};
