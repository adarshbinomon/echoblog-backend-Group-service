import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";
import { HttpStatus } from "../../../utils/enums/http.statuscodes";

export default (dependencies: Dependencies) => {
  const {
    useCase: { getAllCommunities_useCase },
  } = dependencies;

  const getAllCommunitiesController = async (req: Request, res: Response) => {
    try {
      const userId = req.params.userId;
      const response = await getAllCommunities_useCase(
        dependencies
      ).executeFunction(userId);

      if (response.status) {
        res.status(HttpStatus.OK).json({
          status: true,
          message: response.message,
          communities: response.communities,
        });
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in get all community controller:", error);
      res
        .status(HttpStatus.NOT_FOUND)
        .json({ status: false, message: "error in finding communities" });
    }
  };
  return getAllCommunitiesController;
};
