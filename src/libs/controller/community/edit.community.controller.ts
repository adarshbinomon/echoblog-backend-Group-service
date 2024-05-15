import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";
import { HttpStatus } from "../../../utils/enums/http.statuscodes";

export default (dependencies: Dependencies) => {
  const {
    useCase: { editCommunity_useCase },
  } = dependencies;

  const editCommunityController = async (req: Request, res: Response) => {
    try {
      const data = req.body;

      const communityId = req.params.communityId;

      const response = await editCommunity_useCase(
        dependencies
      ).executeFunction(communityId, data);
      if (response.status) {
        res.status(HttpStatus.OK).json({
          status: true,
          message: response.message,
          community: response.community,
        });
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in edit community controller:", error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ status: false, message: "error in editing community" });
    }
  };
  return editCommunityController;
};
