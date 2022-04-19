import * as React from "react";
import { HiMenu, HiHome, HiPlus } from "react-icons/hi";
import { IoMdPersonAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { BiCheckCircle } from "react-icons/bi";
import { List } from "../models/List";
import { Colors } from "../models/Colors";
import ListCard from "../components/ListCard";
import BoardModel from "../models/Board";

const Board = () => {
  const board: BoardModel = {
    id: "12313",
    name: "uni project",
    members: [{ fullname: "Gal Gadot", avatar: "some if" }],
    lists: [
      {
        id: "Hello",
        name: "In progress",
        description: "sdnfnsdlsd",
        tasks: [
          {
            name: "UI",
            todos: [
              { name: "Home page", completed: true },
              { name: "Next", completed: false },
            ],
          },
        ],
        startDate: new Date(),
        dueDate: new Date(),
        assigned: [{ fullname: "Gal Gadot", avatar: "some if" }],
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-between py-2 px-3 bg-white border-b border-gray-200 shadow-sm">
        <p className="font-medium">{board.name}</p>
        <div className="flex items-center gap-2">
          {board.members.map((member) => (
            <img className="w-8 h-8 rounded-full bg-red-300" src="" alt="" />
          ))}
          <button className="h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-600 gap-1 p-2">
            <IoMdPersonAdd className="w-4 h-4" />
            <p className="text-sm ">Invite</p>
          </button>
        </div>
      </div>
      <div className="px-4 py-6">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4 ">
          {board.lists.map((list) => (
            <ListCard listCard={list} />
          ))}
          <div className="w-full col-span-1 place-self-start p-1 border border-dotted border-gray-300 hover:bg-gray-200 hover:border-none rounded-md">
            <div className="w-full flex justify-center items-center text-gray-500 gap-1 p-2 text-sm">
              <HiPlus className="w-4 h-4" />
              <p>Add a new list</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
