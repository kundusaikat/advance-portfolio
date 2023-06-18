import React from "react";

export const Experience = () => {
  const experienceDataList = [
    {
      company: "Nolan Edutech Private Limited - Masai School",
      companyUrl: "https://www.masaischool.com/",
      role: "Instructional Associate",
      timeLine: {
        joiningTime: "Mar 2022",
        leavingTime: "Jan 2023",
      },
      view: "Successfully delivered assigned responsibilities and thoroughly enjoyed working with such a remarkable organization. This opportunity allowed me to enhance my skills on a different level.",
      task: [
        "Conducted daily stand-ups and pair-programming sessions to resolve all technical queries.",
        "Periodically delivered one-on-one sessions through pair-programming.",
        "Provided personalized guidance to students in need regarding construct week project development.",
        "Supported the tech instructors through live assistance during ongoing lectures.",
      ],
      experienceCertificateRedirectLink:
        "https://drive.google.com/file/d/16ZLoez_RymMirgDWylM_DeCLfpbqCuKW/view?usp=sharing",

      experienceCertificatPreviewLink:
        "https://drive.google.com/file/d/16ZLoez_RymMirgDWylM_DeCLfpbqCuKW/preview",
    },
  ];

  return (
    <div className="bg-background2 text-text1 p-10 flex flex-col gap-5 items-center">
      <p className="text-center text-3xl font-semibold">Experience</p>

      {experienceDataList.map((el, index) => (
        <div
          key={index}
          className="bg-gray-100 border  border-gray-300 p-4 rounded-t-2xl rounded-br-2xl max-w-6xl w-full text-gray-800 lg:flex lg:items-start"
        >
          <table className="w-full ">
            <tbody>
              <tr>
                <td className="text-black font-bold">Company Name:</td>
                <td>
                  <a
                    href={el.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {el.company}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-black font-bold">Role:</td>
                <td>{el.role}</td>
              </tr>
              <tr>
                <td className="text-black font-bold">Timeline:</td>
                <td>
                  {el.timeLine.joiningTime} - {el.timeLine.leavingTime}
                </td>
              </tr>
              <tr>
                <td className="text-black font-bold">View:</td>
                <td>{el.view}</td>
              </tr>
              <tr>
                <td className="text-black font-bold">Tasks:</td>
                <td>
                  <ul className="list-disc ml-5">
                    {el.task.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="text-black font-bold">
                  Experience Certificate:
                </td>
                <td>
                  <div className="flex items-center">
                    <a
                      href={el.experienceCertificateRedirectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Certificate
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <iframe
            title="File Preview"
            src={el.experienceCertificatPreviewLink}
           
            className="w-full h-[480px] landscape:h-[560px] landscape:w-[620px] "
            
             allow="autoplay"
          />
        </div>
      ))}
    </div>
  );
};
