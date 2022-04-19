import { Colors } from "./Colors";
import { Task } from "./Task";
import User from "./User";

export interface List {
  id: string;
  name: string;
  description: string;
  tasks: Task[];
  startDate: Date;
  dueDate: Date;
  assigned: User[];
}
