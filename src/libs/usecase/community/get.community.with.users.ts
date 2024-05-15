import { Dependencies } from "../../../utils/dependencies.interface";

export const getCommunity_useCaseWithUsers = (dependencies: Dependencies) => {
  const {
    repository: { communityRepository },
  } = dependencies;

  const executeFunction = async (communityId: string) => {
    try {
      const response = await communityRepository.getCommunityWithUsers(
        communityId
      );

      if (response.status) {
        return {
          status: true,
          message: response.message,
          community: response.community,
        };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in get community usecase:", error);
      return { status: false, message: "error in finding community" };
    }
  };
  return { executeFunction };
};
