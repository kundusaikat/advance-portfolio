import React from "react";

export const Projects = () => {
  const projectsDataList = [
    {
      name: "Self Project",
      images: [
        {
          url: "https://drive.google.com/file/d/1J1INtn0uY59_CbNdsSIvEKsfv35q_uYO/view?usp=sharing",
        },
        {
          url: "https://drive.google.com/file/d/1J1INtn0uY59_CbNdsSIvEKsfv35q_uYO/view?usp=sharing",
        },
        // ... add more image objects here
      ],
      subList: [
        {
          name: "",
          previewURL: [],
          githubFrontEndURL: "",
          githubBackendURL: "",
          deploymentURL: "",
        },
      ],
    },
    // ... add more projects here
  ];

  return (
    <div className="bg-background1 text-center text-text1 p-10">
      <p className="text-3xl font-serif font-semibold">Projects</p>

      <div>
        {projectsDataList.map((project) => (
          <div key={project.name}>
            {project.images.map((image) => (
              // <iframe
              //   key={image.url}
              //   title={project.name}
              //   src={image.url}
              //   width="640"
              //   height="480"
              //   frameBorder="0"
              //   allow="autoplay"
              //   scrolling="no"
              //   className="border mt-2"
              // ></iframe>

              <img src={"https://firebasestorage.googleapis.com/v0/b/portfolio-e6455.appspot.com/o/Self%20Project%2FScreenshot%20(307).png?alt=media&token=2d6b5534-12b6-4f0f-8128-0f867226cf94"} alt="" className="w-30 h-40"/>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
