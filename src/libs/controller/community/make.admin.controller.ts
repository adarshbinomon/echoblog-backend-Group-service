import { Request, Response } from "express";
import { Dependencies } from "../../../utils/dependencies.interface";
import { HttpStatus } from "../../../utils/enums/http.statuscodes";

export default (dependencies: Dependencies) => {
  const {
    useCase: { makeAdminUseCase },
  } = dependencies;

  const makeAdminController = async (req: Request, res: Response) => {
    try {
      const { communityId } = req.params;
      const { memberId } = req.body;

      const response = await makeAdminUseCase(dependencies).executeFunction(
        communityId,
        memberId
      );

      if (response.status) {
        res.status(HttpStatus.CREATED).json({ status: true, message: response.message });
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: true, message: response.message });
      }
    } catch (error) {
      console.log("error in make admin controller:", error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ status: true, message: "error in making user admin" });
    }
  };
  return makeAdminController;
};
