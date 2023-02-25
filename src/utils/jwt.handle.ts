import "dotenv/config";
import Jwt from "jsonwebtoken";

const { sign, verify } = Jwt;

const JWT_SECRET = process.env.JWT_SECRET || "token.fake.1000";

const generateToken = async (id: string) => {
  const token = sign({ id }, JWT_SECRET, { expiresIn: "2h" });
  return token;
};

const verifyToken = (jwt: string) => {
  const verified = verify(jwt, JWT_SECRET);
  return verified;
};

export { generateToken, verifyToken };
