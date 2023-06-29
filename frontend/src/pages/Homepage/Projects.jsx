import React, { useState } from "react";

import { projectsDataList } from "../../data";
import { SlidingImage } from "../../components/SlidingImage";

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectHover = (projectName) => {
    setHoveredProject(projectName);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);

    setShowProjectDetails(true);
  };

  const closeProjectDetails = () => {
    setShowProjectDetails(false);
    setSelectedProject(null);
  };

  return (
    <div className="bg-background1 text-center text-text1 p-10">
      <p className="text-3xl font-serif font-semibold mb-10">Projects</p>

      <div className="flex flex-wrap gap-5 justify-center">
        {projectsDataList.map((project) => (
          <div
            key={project.name}
            className={`w-[95%] md:w-[45%] lg:w-[20%] relative bg-white text-black rounded-xl outline-black outline-double outline-4 -outline-offset-4 transition duration-300 ${
              hoveredProject === project.name
                ? "brightness-75"
                : "brightness-100"
            }`}
            onMouseEnter={() => handleProjectHover(project.name)}
            onMouseLeave={handleProjectLeave}
            onClick={() => handleProjectClick(project)}
          >
            <div className="flex flex-wrap justify-center items-center w-full gap-2 p-2">
              {project.images.map((image, index) => (
                <img key={index} src={image} alt="" className="w-[30%]" />
              ))}
            </div>
            <div className="flex justify-center items-center gap-2 py-2 text-lg font-semibold font-mono">
              {project.logo} {project.name}
            </div>

            {hoveredProject === project.name && (
              <div className="absolute top-0 left-0 flex w-full h-full justify-center items-center backdrop-brightness-75">
                <div className="bg-black text-white rounded-lg p-2 cursor-pointer">
                  Click to see more details...
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showProjectDetails && selectedProject && (
        <div
          className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-[52]"
          // onClick={closeProjectDetails}
        >
          <div
            className="backdrop-brightness-[0.2] w-full h-full  "
            // onClick={(e) => e.stopPropagation()}
          >
            <div className="">
              <p className="text-2xl py-10 font-mono font-semibold">
                {selectedProject.name}
              </p>

              {selectedProject.subList.map((el) => (
                <div>
                  <SlidingImage data={el.previewImages} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
