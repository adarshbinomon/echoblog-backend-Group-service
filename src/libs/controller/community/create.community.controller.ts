import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";
import { HttpStatus } from "../../../utils/enums/http.statuscodes";

export default (dependencies: Dependencies) => {
  const {
    useCase: { createCommunity_usecase },
  } = dependencies;

  const createCommunityController = async (req: Request, res: Response) => {
    try {
      const data = { ...req.body };

      const response = await createCommunity_usecase(
        dependencies
      ).executeFunction(data);
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
      console.log("error in create community controler:", error);
      res
        .status(500)
        .json({ status: false, message: "error in creating community" });
    }
  };
  return createCommunityController;
};
