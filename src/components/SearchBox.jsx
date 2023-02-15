import React, { useState } from "react";
import axios from "axios";
const SearchBox = ({ setLocations }) => {
  const [search, setSearch] = useState("");
  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}`)
      .then((res) => setLocations(res.data));
    setSearch("");
  };
  const validation = (e) => {
    e.preventDefault();

    e.target.value > 126
      ? alert("Location does not exist")
      : e.target.value === 0
      ? alert("Location does not exist")
      : e.target.value < 0
      ? alert("Location does not exist")
      : setSearch(e.target.value);
  };

  return (
    <div className="max-[340px]:p-3">
      <input
        type="number"
        min={1}
        max={127}
        placeholder="Write the ID of the location from 1 to 126"
        onChange={(e) => validation(e)}
        value={search}
        className="w-2/4 mx-auto mt-2 placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-cyan-500 focus:ring-cyan-500 focus:ring-1 max-[340px]:w-full"
      />
      <input
        type="submit"
        className="rounded-md shadow-inner uppercase shadow-cyan-300  cursor-pointer py-2 px-8 my-1 text-cyan-500 hover:bg-cyan-500 hover:text-white  "
        disabled={!search}
        onClick={() => searchLocation()}
        value=" Search"
      />
    </div>
  );
};

export default SearchBox;
