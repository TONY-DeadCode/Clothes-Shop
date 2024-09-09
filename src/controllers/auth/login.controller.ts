import { Request, Response } from "express";
import { login } from "../../services/auth/login.service";
import ms from "ms";

const loginController = async (req: Request, res: Response) => {
  try {
    const token = await login(req.body.username, req.body.password);
    res.cookie("Authorization", token, { maxAge: Date.now() + ms("1h") });
    res.json({ message: "Login successfully" });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export { loginController };
