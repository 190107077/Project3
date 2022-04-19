import * as React from "react";
import { RiTrelloFill } from "react-icons/ri";
import { BiTask } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex place-items-start p-10">
        <ul className="w-1/5 mr-6 flex flex-col items-start justify-start gap-1">
          <li className="flex items-center gap-2 bg-emerald-100 w-full p-2 rounded text-emerald-600">
            <RiTrelloFill className="w-6 h-6" />
            <p className="">Boards</p>
          </li>
          <li className="flex items-center gap-2 w-full p-2 rounded">
            <BiTask className="w-6 h-6" />
            <p className="">My tasks</p>
          </li>
        </ul>
        <section className="w-full">
          <h1 className="mb-8 font-bold text-3xl">My boards</h1>
          <div className="grid grid-cols-4 gap-4">
            <Link to="/board" className="w-full">
              <div className="bg-blue-400 w-full h-14 rounded mb-2"></div>
              <p className="font-medium">Uni porject</p>
            </Link>
            <div className="w-full">
              <div className="bg-red-400 w-full h-14 rounded mb-2"></div>
              <p className="font-medium">UI kit</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
