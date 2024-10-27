import React from "react";
import Nav from "./Nav";
import { FaSearch } from "react-icons/fa";

const Header = ({ handleResponses, handleSearchInput }) => {
  return (
    <header className="h-20 w-full backdrop-blur-sm border-b flex justify-center items-center fixed top-0 z-20">
      <form
        onSubmit={handleResponses}
        autoComplete="off"
        className="flex justify-center items-center gap-4"
      >
        <input
          onChange={handleSearchInput}
          className="px-3 py-2.5 w-80 rounded-full text-gray-50 bg-[#ffffff47] outline-none focus:border-emerald-300 border-2 duration-500 border-transparent"
          type="search"
          name="search"
          placeholder="Search"
          required
        />
        <button
          // onClick={handleResponses}
          className=" p-3 rounded-full border hover:bg-white hover:text-black duration-500"
          type="submit"
        >
          <FaSearch />
        </button>
      </form>
      {/* <Nav /> */}
    </header>
  );
};

export default Header;
