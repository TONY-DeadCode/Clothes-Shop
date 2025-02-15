import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/userModel";

const login = async (username: string, password: string) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );
  return token;
};

export { login };
