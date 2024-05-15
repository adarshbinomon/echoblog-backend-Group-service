import groupRouter from "./group-router/group.router";
import express from "express";

export const routes = (dependencies: any) => {
  const routes = express.Router();

  routes.use("/group", groupRouter(dependencies));
  return routes;
};
