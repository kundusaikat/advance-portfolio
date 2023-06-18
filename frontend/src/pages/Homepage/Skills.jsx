import React from "react";
import { skillList } from "../../data";

export const Skills = () => {
  return (
    <div className="bg-background1 text-text1 flex flex-col items-center p-10 gap-10">
      <p className="text-center text-3xl text-text1">Skills</p>

      {skillList.map(({ title, subList }) => (
        <div className="w-full flex flex-col items-center relative">
          <div className="border-2 rounded-tr-2xl rounded-bl-2xl p-2 max-w-xs absolute -top-[25px] bg-background1">
            {title}
          </div>

          <table className="   max-w-3xl w-11/12 text-black">
            <tbody className=" border-2 flex flex-col pt-5 pb-5  bg-white rounded-2xl">
              {subList.map(({ title, rating }) => (
                <tr className="px-5" style={{width:"100%"}} key={title}>
                  <td className="pr-5" style={{width:"40%"}}>
                    <p className="text-right">{title}</p>
                  </td>
                  <td className="" style={{width:"40vw"}}>
                    <div className="relative border border-black">
                      <div className="w-full h-[10px] bg-gray-200"></div>
                      <div
                        className="absolute top-0 h-[10px] bg-black"
                        style={{ width: `${rating}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
