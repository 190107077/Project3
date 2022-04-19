import { List } from "./List";

export default interface BoardModel {
  id: string;
  name: string;
  lists: List[];
  members: User[];
}
