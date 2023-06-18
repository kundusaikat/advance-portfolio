import { useNavigate } from "react-router-dom";

export const LeftPointer = ({ redirect }) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer ml-5"
      onClick={(e) => {
        e.stopPropagation();
        navigate(redirect);
      }}
    >
      <div className=" flex items-center text-xs h-auto">
        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[20px] border-r-yellow-600"></div>

        <div className="border-2 flex items-center border-l-0 border-yellow-600  rounded-r-full  px-2 ">
          Check Documentation
        </div>
      </div>
    </div>
  );
};
