import { Request, Response } from "express";
import { register } from "../../services/auth/register.service";

const registerController = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    await register(req.body.username, req.body.password);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export { registerController };
