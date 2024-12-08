import React from "react";
import { IoMdSearch } from "react-icons/io";

function SearchInput() {
  return (
    <div>
      <form className="flex items-center gap-2 justify-center p-2">
        <input
          type="text "
          placeholder="Search"
          className="input input-bordered input-info rounded-full"
        />
        <button type="submit" className="btn btn-border btn-circle bg-sky-600">
          <IoMdSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;


/*
function SearchInput() {
  return (
    <div>
      <form className="flex items-center gap-2 justify-center p-2">
        <input
          type="text "
          placeholder="Search"
          className="input input-bordered input-info rounded-full"
        />
        <button type="submit" className="btn btn-border btn-circle bg-sky-600">
          <IoMdSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
*/