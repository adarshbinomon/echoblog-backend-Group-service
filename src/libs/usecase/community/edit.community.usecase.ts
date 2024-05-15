import { Dependencies } from "../../../utils/dependencies.interface";
import { CommunityData } from "../../../utils/interface";

export const editCommunity_useCase = (dependencies: Dependencies) => {
  const {
    repository: { communityRepository },
  } = dependencies;

  const executeFunction = async (communityId: string, data: CommunityData) => {
    try {
      const response = await communityRepository.editCommunitySettings(
        communityId,
        data
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
      console.log("error in edit commuinity usecase:", error);
      return { status: false, message: "error in editing community" };
    }
  };
  return { executeFunction };
};
