import { Dependencies } from "../../../utils/dependencies.interface";

export const searchCommunityUseCase = (dependencies: Dependencies) => {
    const {
      repository: { communityRepository },
    } = dependencies;
  
    const executeFunction = async (regex: string) => {
      try {
        const response = await communityRepository.searchCommunity(regex);
  
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
        console.log("error in search community usecase:", error);
        return { status: false, message: "error in finding communities" };
      }
    };
    return { executeFunction };
  };
  