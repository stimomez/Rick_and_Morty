import React from "react";

const LocationInfo = ({id, name, type, dimension, numberResidents }) => {
  return (
    <>
    
    <div className="bg-two shadow-xl  shadow-zinc-800 rounded-lg w-2/4 my-5  mx-auto gap-3 p-3 flex justify-between min-w-min max-[360px]:text-sm max-[340px]:gap-0.5  max-[312px]:text-xs ">
      <p className="">
        <strong className="uppercase">Name</strong>
        <p>{name}</p>
      </p>
      <p className="cursor-pointer ">
        <strong className="uppercase ">Type</strong>
        <p className="">{type}</p>
      </p>
      <p className="cursor-pointer ">
        <strong className="uppercase">Dimension</strong>
        <p>{dimension}</p>
      </p>
      <p className="cursor-pointer">
        <strong className="uppercase">Population</strong>
        <p>{numberResidents}</p>
      </p>
    
    </div>
      <p className="uppercase text-xl font-extrabold text-cyan-600" >location {id}</p>
    </>
  );
};

export default LocationInfo;
