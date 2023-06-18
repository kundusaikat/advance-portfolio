import { useState } from "react";

export const QueryForm = () => {

    const initialFormData = {
      fullName:"",
      file:[],
      images:[],
      queryType:""
    }

    const [formData,setFormData] = useState()
    return (
      <div className="">
        <p className="text-xs font-mono">
          <span className="text-red-500 font-extrabold">*</span>
          This section allows visitors to ask questions, seek assistance, or
          inquire about specific information regarding services, projects, or
          any other relevant topic.
        </p>

        <table className=" w-full m-auto mt-2">
          <tbody className="border-2 border-black flex flex-col p-2  bg-white rounded-2xl">
            <tr className="">
              <td>Full Name</td>
              <td><input type="text" placeholder="Enter your name here" className="border-b-2 border-black pl-2"/></td>
            </tr>
           
            <tr>
              <td>Query Type</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>Query</td>
              <td><input type="file" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };