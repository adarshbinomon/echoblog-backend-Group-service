import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";
import { HttpStatus } from "../../../utils/enums/http.statuscodes";

export default (dependencies: Dependencies) => {
  
  const {
    useCase: { getCommunity_useCase },
  } = dependencies;

  const getCommunityController = async (req: Request, res: Response) => {
    try {
      const communityId = req.params.communityId;

      const response = await getCommunity_useCase(dependencies).executeFunction(
        communityId
      );
      if (response.status) {
        res.status(HttpStatus.OK).json({
          status: true,
          message: response.message,
          community: response.community,
        });
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ status: false, message: response.message });
      }
    } catch (error) {
      console.log("error in get community controller:", error);
      res
        .status(HttpStatus.NOT_FOUND)
        .json({ status: false, message: "error in finding community" });
    }
  };
  return getCommunityController;
};
