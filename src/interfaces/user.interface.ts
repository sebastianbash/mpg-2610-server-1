import { Auth } from "./auth.interface.js";
import { Resume } from "./resume.interface.js";

export interface User extends Auth {
  name: string;
  role?: "superadmin" | "admin" | "superuser" | "user";
  resumes: Resume[];
  createdAt: Date;
  updatedAt: Date;
}
