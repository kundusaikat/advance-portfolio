import React, { useState } from "react";
import { docsData } from "../../data";
import { Outlet } from "react-router-dom";

export const DocNavbar = () => {
  const [expandedLanguages, setExpandedLanguages] = useState([]);
  const [clickedLinks, setClickedLinks] = useState([]);

  const toggleLanguage = (language) => {
    if (expandedLanguages.includes(language)) {
      setExpandedLanguages(
        expandedLanguages.filter((lang) => lang !== language)
      );
    } else {
      setExpandedLanguages([...expandedLanguages, language]);
    }
  };

  const handleLinkClick = (title) => {
    setClickedLinks([...clickedLinks, title]);
  };

  const renderSubList = (subList) => {
    return (
      <ul className="list-disc ml-5">
        {subList.map((el) => (
          <li key={el.title}>
            <a href={el.url} onClick={() => handleLinkClick(el.title)}>
              {el.title}
            </a>
            {el.subList && renderSubList(el.subList)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex bg-background2 text-text1 ">
      <div className="min-h-screen max-w-xs w-6/12 border border-border1">
        <ul className="list-disc ml-5">
          Docs
          {docsData.map((el) => (
            <li key={el.title} className="ml-5">
              <span
                onClick={() => toggleLanguage(el.title)}
                style={{ cursor: "pointer" }}
              >
                {el.title}
              </span>
              {expandedLanguages.includes(el.title) && (
                <ul className="list-disc ml-5">
                  {el.subList.map((subEl) => (
                    <li key={subEl.title}>
                      <span
                        onClick={() => toggleLanguage(subEl.title)}
                        style={{ cursor: "pointer" }}
                      >
                        {subEl.title}
                      </span>
                      {expandedLanguages.includes(subEl.title) &&
                        renderSubList(subEl.subList)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div>
          <p>Docs &gt; {clickedLinks.join(" &gt; ")}</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
