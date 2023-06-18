import React from "react";

export const About = () => {
  const aboutDataList = [
    {
      text: " Hello! I am Saikat Kundu, a full stack developer with 3 years of experience including 7 months of training. I have a solid background in both front-end and back-end development, allowing me to craft user-friendly interfaces and implement scalable solutions. From designing visually appealing websites to developing efficient server-side logic, I take pride in delivering high-quality code that meets client needs.",
    },
    {
      text: "I hold a Electronics and Communication Engineering degree, which has      provided me with a strong foundation in engineering principles. And then      I took a hands on training in MERN stack in Masai School. However, it's      my hands-on experience and continuous learning that have truly shaped my      skills. I stay up-to-date with the latest technologies, frameworks, and      best practices to ensure that I can provide modern and cutting-edge      solutions.",
    },
    {
      text: "Beyond my technical expertise, I am a strong advocate for collaboration      and teamwork. I believe in fostering an inclusive and supportive      environment where ideas are freely shared, and each team member's      contribution is valued. I thrive on learning from others, leveraging      collective strengths, and collectively pushing the boundaries of what's      possible.",
    },
    {
      text: "Collaboration is a vital aspect of my work. I have had the opportunity      to work with diverse teams and clients, understanding their unique      requirements and translating them into successful projects. Effective      communication and teamwork are essential for me, as they enable me to      deliver solutions that not only meet technical specifications but also      align with business goals.",
    },
    {
      text: "As a lifelong learner, I am constantly exploring emerging technologies,      frameworks, and best practices. This curiosity drives me to continually      expand my skill set and adapt to industry trends. I am comfortableworking with a wide range of tools and technologies such as MongoDB,      Express.js, Node.js, React.js, React Native, SQL. This versatility      allows me to choose the best tools for each project, ensuring optimal performance and scalability.",
    },
    {
      text: "Outside of work, I am an avid learner and enjoy exploring new technologies and tools. I believe in contributing to the development community through open-source projects and sharing knowledge with fellow developers. When I'm not coding, you can find me immersing myself in the latest tech blogs or challenging myself with outdoor activities.",
    },
    {
      text: "When I'm not coding, you can find me exploring the outdoors, reading up on the latest tech blogs, or contributing to the development community through open-source projects and mentorship initiatives.",
    },
    {
      text: " I'm excited about the possibility of working together and turning your   ideas into reality. Feel free to explore my portfolio to see some of my   past projects, and don't hesitate to reach out to discuss how we can   collaborate to achieve your vision. ",
    },
    {
      text:"Thank you for taking the time to learn a bit about me. I look forward to embarking on this exciting journey together!"
    }
  ];

  return (
    <div
      className={`flex flex-col bg-background2 text-text2 p-10 gap-5 font-serif text-justify`}
    >
      <p className="text-center text-3xl text-text1">About Me</p>

 {
  aboutDataList.map(el => (
    <div class="relative inline-block p-4 border-2 border-transparent rounded-md">
      <div class="absolute  top-0 left-0 w-0 h-0 border-solid border-[5px] border-t-[transparent] border-l-[transparent] border-current"></div>
      <div class="absolute bottom-0 right-0 w-0 h-0 border-solid border-[5px] border-b-[transparent] border-r-[transparent] border-current"></div>
      {
        el.text
      }
    </div>
  ))
 }
    </div>
  );
};
