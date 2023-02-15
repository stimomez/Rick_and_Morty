import ResidentInfo from "./ResidentInfo";

const ResidentList = ({ residents }) => {
  return (
    <div className="max-w-full p-3 grid grid-cols-4 gap-x-4 gap-y-7  max-[900px]:grid-cols-3 max-[600px]:grid-cols-2  max-[400px]:grid-cols-1">
      {residents?.map((resident) => (
        <ResidentInfo residentUrl={resident} key={resident} />
      ))}
    </div>
  );
};

export default ResidentList;
