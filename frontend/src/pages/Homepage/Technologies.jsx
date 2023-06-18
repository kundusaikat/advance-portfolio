import React, { useState } from "react";
import { docsDataList } from "../../data";
import { BiSubdirectoryRight } from "react-icons/bi";
import { motion } from "framer-motion";

import { LeftPointer } from "../../components/LeftPointer";

export const Technologies = () => {
  const [expandedLanguages, setExpandedLanguages] = useState([]);


  const toggleLanguage = (language) => {
    if (expandedLanguages.includes(language)) {
      setExpandedLanguages(
        expandedLanguages.filter((lang) => lang !== language)
      );
    } else {
      setExpandedLanguages([...expandedLanguages, language]);
    }
  };



  const renderSubList = (subList, level) => {
    return (
      <ul className={`list-disc pl-20 bg-gray-300 text-black`}>
        {subList.map((el) => (
          <li key={el.title}>
            <div className="flex items-center py-2" onClick={() => {}}>
              {el.title}
              <LeftPointer redirect={el.url}/>
            </div>
            {el.subList && renderSubList(el.subList, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-background2 p-10 text-text1 w-full">
      <p className="text-2xl text-center font-serif font-semibold">
        Technologies
      </p>
      <div className="w-full border border-black rounded-lg overflow-hidden">
        <ul>
          {docsDataList.map((el) => (
            <li key={el.title} className="block">
              <div
                className="flex items-center cursor-pointer bg-gray-700 p-2 pl-5"
                onClick={() => toggleLanguage(el.title)}
              >
                <motion.div
                  animate={{
                    rotate: expandedLanguages.includes(el.title)
                      ? "90deg"
                      : "0deg",
                  }}
                >
                  <BiSubdirectoryRight />
                </motion.div>
                <span>{el.title}</span>

                
                <LeftPointer redirect={el.url} />

               
              </div>
              {expandedLanguages.includes(el.title) && (
                <ul className="list-disc">
                  {el.subList.map((subEl) => (
                    <li key={subEl.title} className="block">
                      <div
                        className="flex items-center cursor-pointer p-2 pl-10 bg-gray-500"
                        onClick={() => toggleLanguage(subEl.title)}
                      >
                        <motion.div
                          animate={{
                            rotate: expandedLanguages.includes(subEl.title)
                              ? "90deg"
                              : "0deg",
                          }}
                        >
                          <BiSubdirectoryRight />
                        </motion.div>
                        <span
                          onClick={() => toggleLanguage(subEl.title)}
                          style={{ cursor: "pointer" }}
                          className={`bg-background-${el.title}`}
                        >
                          {subEl.title}
                        </span>
                        <LeftPointer redirect={subEl.url} />

                      </div>
                      {expandedLanguages.includes(subEl.title) &&
                        renderSubList(subEl.subList, 3)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
