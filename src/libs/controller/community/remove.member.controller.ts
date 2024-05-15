import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";
import { HttpStatus } from "../../../utils/enums/http.statuscodes";

export default (dependencies: Dependencies) => {
  const {
    useCase: { removeMemberUseCase },
  } = dependencies;

  const removeMemberController = async (req: Request, res: Response) => {
    try {
      const { communityId } = req.params;
      const { memberId } = req.body;
   

      const response = await removeMemberUseCase(dependencies).executeFunction(
        communityId,
        memberId
      );
      console.log("response:", response);

      if (response.status) {
        res.status(HttpStatus.OK).json({ status: true, message: response.message });
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in remove member controller:", error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ status: false, message: "error in removing member" });
    }
  };
  return removeMemberController;
};
