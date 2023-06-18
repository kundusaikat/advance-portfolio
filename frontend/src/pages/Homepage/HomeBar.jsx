import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { AiOutlineHome } from "react-icons/ai";
import { BsSun, BsFillShieldLockFill } from "react-icons/bs";
import { GiCrossedSabres } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { homeRoutesList } from "../../data";
import { Link } from "react-router-dom";
import { ContactOption } from "./ContactOption";
export const HomeBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [showContact, setShowContact] = useState(false);
  return (
    <>
      <div
        className={`bg-background1 text-headtext flex justify-between px-[5vh] py-2 items-center sticky top-0 z-50`}
      >
        <AiOutlineHome size={"4vh"} color="white" />
        <p className={` text-2xl font-bold font-[cursive] text-text1`}>
          Saikat Kundu
        </p>
        <div className="flex gap-2 justify-center items-center">
          <BsSun color="white" />
          <motion.button
            initial={{ y: "0vh" }}
            animate={{ y: "0vh", rotate: showMenu ? 90 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex flex-col h-8 justify-around border  p-2`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className={` h-px w-4 bg-border1`}></div>
            <div className={` h-px w-4 bg-border1`}></div>
            <div className={` h-px w-4 bg-border1`}></div>
          </motion.button>
          <Link to="/admin">
            {" "}
            <BsFillShieldLockFill color="white" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, dealy: 2 }}
            className="fixed top-0 right-0 bg-background1 h-screen w-11/12 max-w-md flex justify-center items-center z-50"
          >
            <div className="flex flex-col text-center gap-4 max-w-xs w-[300px]">
              {homeRoutesList.map((el, i) => (
                <Link to={el.path}>
                  <motion.div
                    initial={{ y: "1000px" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    key={uuid()}
                    onClick={() => setShowMenu(false)}
                  >
                    <p
                      className={`border text-border1 border-border1 rounded-xl p-2 hover:text-text1 hover:bg-gray-400 cursor-pointer shadow-xl shadow-border1 hover:shadow-inner hover:shadow-black font-bold`}
                    >
                      {el.name}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div
              className="fixed top-5 right-1 md:top-5 md:right-1 cursor-pointer hover:bg-gray-200 p-2 rounded-full"
              onClick={() => setShowMenu(false)}
            >
              <GiCrossedSabres size={30} color="white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactOption>
        
      </ContactOption>
    </>
  );
};


