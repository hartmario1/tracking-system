import { Task } from "./task";

export interface User {
  username: string;
  email: string;
  password: string;
  role: Role;
  phone: string;
  firstName: string;
  lastName: string;
  deleted: boolean;
  tasks: Task
}

enum Role {
  student,
  admin
}