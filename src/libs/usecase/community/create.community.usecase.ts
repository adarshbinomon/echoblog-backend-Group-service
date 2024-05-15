import { Dependencies } from "../../../utils/dependencies.interface";
import { CommunityData } from "../../../utils/interface";

export const createCommunity_usecase = (dependencies: Dependencies) => {
  const {
    repository: { communityRepository },
  } = dependencies;

  const executeFunction = async (data: CommunityData) => {
    try {
      const response = await communityRepository.createCommunity(data);

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
      console.error("error in create community usecase:", error);
      return {
        status: false,
        message: "An error occurred while creating the community.",
      };
    }
  };
  return { executeFunction };
};
