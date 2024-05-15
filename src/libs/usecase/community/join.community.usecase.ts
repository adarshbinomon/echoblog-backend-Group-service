import { communityProducer } from "../../../events/communityProducer";
import { Dependencies } from "../../../utils/dependencies.interface";

export const joinCommunity_useCase = (dependencies: Dependencies) => {
  const {
    repository: { communityRepository },
  } = dependencies;

  const executeFunction = async (userId: string, communityId: string) => {
    try {
      const community = await communityRepository.getCommunityWithId(
        communityId
      );

      if (community.community.members.includes(userId)) {
        return { status: true, message: "user already a member" };
      }

      const response = await communityRepository.joinCommunity(
        userId,
        communityId
      );
      if (response.status) {
        const dataForKafka = {
          userId,
          communityId,
        };
        communityProducer(dataForKafka, "communityTopic", "joinCommunity");
        return {
          status: true,
          message: response.message,
          community: response.commuinity,
        };
      } else {
        return { status: false, message: response.message };
      }
    } catch (error) {
      console.log("error in join community usecase:", error);
      return { status: false, message: "error in joining community" };
    }
  };
  return { executeFunction };
};
