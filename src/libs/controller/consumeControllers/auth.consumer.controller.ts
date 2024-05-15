import { Request, Response } from "express";
import { UserData } from "../../../utils/interface";
import { Dependencies } from "../../../utils/dependencies.interface";

export const createUserController = async (
  dependencies: Dependencies,
  data: UserData
) => {
  const {
    consumeUsecase: { createUserUsecase },
  } = dependencies;
  const response = await createUserUsecase(dependencies).executeFunction(data);
  
};
