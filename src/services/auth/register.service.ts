import bcrypt from "bcryptjs";
import User from "../../models/userModel";

const register = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
};

export { register };
