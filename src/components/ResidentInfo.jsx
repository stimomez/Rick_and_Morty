import axios from "axios";
import { useEffect, useState } from "react";

const ResidentInfo = ({ residentUrl }) => {
  const [resident, setResident] = useState({});

  useEffect(() => {
    axios.get(residentUrl).then((res) => setResident(res.data));
  }, [residentUrl]);

  return (
    <div className="mx-auto relative bg-two rounded-b-2xl ">
      <li
        className={`${
          resident.status === "Alive"
            ? "text-red-600"
            : resident.status === "Dead"
            ? "text-black"
            : "text-slate-600"
        } absolute bg-one top-8 px-5 rounded-r-lg`}
      >
        <strong> {resident.status}</strong>
      </li>

      <img className="w-full" src={resident.image} alt="" />
      <div className="p-2 text-start rounded-b-2xl ">
        <h4 className="uppercase text-center  border-b border-slate-500 text-slate-100 font-extrabold ">
          {resident.name}
        </h4>
        <div className="px-2">
          <p className="uppercase  text-slate-400">spacies</p>
          <strong className="text-slate-100 font-bold">
            {" "}
            {resident.species}
          </strong>
        </div>
        <div className="px-2">
          <p className="uppercase  text-slate-400">origin</p>{" "}
          <strong className="text-slate-100 font-bold">
            {" "}
            {resident.origin?.name}
          </strong>
        </div>
        <div className="px-2">
          <p className="uppercase  text-slate-400">episodes</p>{" "}
          <strong className="text-slate-100 font-bold">
            {" "}
            {resident.episode?.length}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default ResidentInfo;
