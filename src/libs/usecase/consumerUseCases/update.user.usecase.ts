import { Dependencies } from "../../../utils/dependencies.interface";
import { UserData } from "../../../utils/interface";

export const updateUserUsecase = (dependencies: Dependencies) => {
  const {
    repository: { communityRepository },
  } = dependencies;
  const executeFunction = async (data: UserData) => {
    const response = await communityRepository.updateUser(data);

    if (response.status) {
      return { message: "user updated", status: true };
    } else {
      return { message: "update failed", status: false };
    }
  };

  return { executeFunction };
};
