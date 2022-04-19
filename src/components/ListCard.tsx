import * as React from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";
import { HiMenu, HiHome, HiPlus } from "react-icons/hi";
import { List } from "../models/List";

interface ListCardProps {
  listCard: List;
}

const ListCard: React.FC<ListCardProps> = ({ listCard }) => {
  return (
    <div className="w-full col-span-1 place-self-start bg-gray-200 rounded-md p-2">
      <div className="w-full flex items-center justify-between bg-white p-3 mb-2 rounded-t border-b border-gray-300">
        <p className="font-medium">{listCard.name}</p>
        <div className="flex gap-x-3 text-gray-500 hover:bg-gray-200 p-2 rounded">
          <BsThreeDots className="w-4 h-4" />
        </div>
      </div>
      {listCard.tasks.map((task) => (
        <div className="w-full rounded bg-white p-3 mb-2 shadow">
          <p className="mb-4 font-light">{task.name}</p>
          <div className="w-1/4 h-2 bg-indigo-500 rounded-full mb-2"></div>
          <div className="flex items-center gap-1 w-full text-gray-500">
            <p className="text-sm">
              {task.todos.filter((todo) => todo.completed).length}/
              {task.todos.length}
            </p>
            <BiCheckCircle className="w-4 h-4" />
          </div>
        </div>
      ))}
      <div className="w-full flex text-sm p-2 hover:bg-gray-300 rounded items-center text-gray-500 gap-1 pl-2">
        <HiPlus className="w-4 h-4" />
        <p>Add a new card</p>
      </div>
    </div>
  );
};

export default ListCard;
