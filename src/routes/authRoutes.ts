import { Router } from "express";
import { registerController } from "../controllers/auth/register.controller";
import { loginController } from "../controllers/auth/login.controller";
import authMiddleware from "../middleware/auth/auth.middleware";

const router = Router();

// Public routes
router.post("/register", registerController);
router.post("/login", loginController);

// Protected route example
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ user: (req as any).user });
});

export default router;
