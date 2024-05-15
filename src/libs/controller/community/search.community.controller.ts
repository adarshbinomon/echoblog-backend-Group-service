import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";
import { HttpStatus } from "../../../utils/enums/http.statuscodes";

export default (dependencies: Dependencies) => {
  const {
    useCase: { searchCommunityUseCase },
  } = dependencies;

  const searchCommunityController = async (req: Request, res: Response) => {
    try {
      const { regex } = req.params;

      const response = await searchCommunityUseCase(
        dependencies
      ).executeFunction(regex);
      

      if (response.status) {
        res.status(HttpStatus.OK).json({
          status: true,
          message: response.message,
          communities: response.communities,
        });
      } else {
        res.status(HttpStatus.NOT_FOUND).json({
          status: false,
          message: response.message,
        });
      }
    } catch (error) {
      console.log("error in search community controller:", error);
      res.status(HttpStatus.NOT_FOUND).json({
        status: false,
        message: "error in finding community",
      });
    }
  };
  return searchCommunityController;
};
