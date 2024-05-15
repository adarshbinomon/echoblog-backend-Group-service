import { Dependencies } from "../../../utils/dependencies.interface";

export const getAllCommunities_useCase = (dependencies: Dependencies) => {
  const {
    repository: { communityRepository },
  } = dependencies;

  const executeFunction = async (userId: string) => {
    try {
      const response = await communityRepository.findAllCommunities(userId);

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
      console.log("errror in get all communities usecase:", error);
      return { status: false, message: "error in finding communities" };
    }
  };
  return { executeFunction };
};
