import { Request, Response } from "express";
import community from ".";
import { Dependencies } from "../../../utils/dependencies.interface";
import { HttpStatus } from "../../../utils/enums/http.statuscodes";

export default (dependencies: Dependencies) => {
  const {
    useCase: { joinCommunity_useCase },
  } = dependencies;

  const joinCommunityController = async (req: Request, res: Response) => {
    try {
      const { userId, communityId } = req.body;
      

      const response = await joinCommunity_useCase(
        dependencies
      ).executeFunction(userId, communityId);

      if (response.status) {
        res.status(HttpStatus.CREATED).json({
          status: true,
          message: response.message,
          community: response.commuinity,
        });
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: true, message: response.message });
      }
    } catch (error) {
      console.log("error in jopin community controller:", error);
    }
  };
  return joinCommunityController;
};
