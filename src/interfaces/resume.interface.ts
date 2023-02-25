import { User } from "./user.interface.js";

export interface Resume {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  goal: string;
  education: string[];
  experience: string[];
  skills: string[];
  achievements: string[];
  references: string[];
  owner: User;
  createdAt: Date;
  updatedAt: Date;
}
