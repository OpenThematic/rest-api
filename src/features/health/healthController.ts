import { Request, Response } from "express";

const healthController = {
  alive: async (_req: Request, res: Response) => {
	res.status(200).send("I'm alive!");
  },
};

export default healthController;
