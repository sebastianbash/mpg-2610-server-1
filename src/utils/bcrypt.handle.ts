import Bcryptjs from "bcryptjs";

const { hash, compare } = Bcryptjs;

const encrypt = async (passwordRaw: string) => {
  const salt = 10;
  const passwordHash = await hash(passwordRaw, salt);
  return passwordHash;
};

const verified = async (passwordRaw: string, passHash: string) => {
  const isCorrect = await compare(passwordRaw, passHash);
  return isCorrect;
};

export { encrypt, verified };
