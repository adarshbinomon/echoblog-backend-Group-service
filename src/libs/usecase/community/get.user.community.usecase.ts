import { Dependencies } from "../../../utils/dependencies.interface";

export const getUserCommunities_useCase = (dependencies: Dependencies) => {
  const {
    repository: { communityRepository },
  } = dependencies;

  const executeFunction = async (userId: string) => {
    try {
        
      const response = await communityRepository.getUserCommunities(userId);

      if (response.status) {
        return {
          status: true,
          message: response.message,
          communities: response.communities,
        };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in get user community usecase:", error);
      return { status: false, message: "error in finding community" };
    }
  };
  return { executeFunction };
};
