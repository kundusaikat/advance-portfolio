import React, { useEffect } from "react";
import { BsFillBackspaceFill } from "react-icons/bs";
import { CgEnter } from "react-icons/cg";
import { MdLockReset } from "react-icons/md";
import { AiTwotoneHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ImageURL } from "../../data";

export const PinCheck = ({ setPin, pin, handleSubmit }) => {
  const navigate = useNavigate();
  const pinButtonList = [
    {
      title: "1",
      method: () => {
        setPin((p) => [...p, "1"]);
      },
    },
    {
      title: "2",
      method: () => {
        setPin((p) => [...p, "2"]);
      },
    },
    {
      title: "3",
      method: () => {
        setPin((p) => [...p, "3"]);
      },
    },
    {
      title: "4",
      method: () => {
        setPin((p) => [...p, "4"]);
      },
    },
    {
      title: "5",
      method: () => {
        setPin((p) => [...p, "5"]);
      },
    },
    {
      title: "6",
      method: () => {
        setPin((p) => [...p, "6"]);
      },
    },
    {
      title: "7",
      method: () => {
        setPin((p) => [...p, "7"]);
      },
    },
    {
      title: "8",
      method: () => {
        setPin((p) => [...p, "8"]);
      },
    },
    {
      title: "9",
      method: () => {
        setPin((p) => [...p, "9"]);
      },
    },
    {
      title: "back",
      icon: <BsFillBackspaceFill />,
      method: () => {
        setPin((p) => p.slice(0, -1));
      },
    },
    {
      title: "0",
      method: () => {
        setPin((p) => [...p, "0"]);
      },
    },
    { title: "ok", icon: <CgEnter />, method: handleSubmit },
    {
      title: "Reset",
      icon: <MdLockReset color="white" />,
      method: () => setPin([]),
    },
    { title: "Home", icon: <AiTwotoneHome />, method: () => navigate("/") },
  ];

  useEffect(() => {
    if (pin.length === 6) {
      handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace" || e.keyCode === 8) {
        setPin((p) => p.slice(0, -1));
      } else if (e.key >= "0" && e.key <= "9") {
        setPin((p) => [...p, e.key]);
      } else if (e.key === "Enter" && pin.length > 0) {
        handleSubmit();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setPin,handleSubmit,pin]);

  return (
    <div
      className={`bg-cover bg-center h-screen w-screen flex justify-center items-center`}
      style={{
        backgroundImage: `url(${ImageURL.adminPin.small})`,
        "@media (min-width: 768px)": {
          backgroundImage: `url(${ImageURL.adminPin.mid})`,
        },
        "@media (min-width: 1024px)": {
          backgroundImage: `url(${ImageURL.adminPin.big})`,
        },
      }}
    >
      <div className="text-white h-full text-center backdrop-brightness-50 w-full  flex flex-col justify-center items-center gap-5">
        {pin.length > 0 ? (
          <div className="flex gap-2 min-h-[70px] items-center">
            {pin.map((el, index) => (
              <div key={index} className="w-4 h-4 rounded-lg bg-white"></div>
            ))}
          </div>
        ) : (
          <div div className=" flex flex-col gap-2 min-h-[70px]">
            <p className="text-2xl">Enter Pin for Admin Access</p>
            <p>Your PIN contains at least 4 digits</p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-10 max-w-xs">
          {pinButtonList.map((el, index) => (
            <button
              key={index}
              className="bg-gray-700 w-16 h-16 text-2xl flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-500 transform hover:scale-110 overflow-hidden"
              onClick={el.method}
              disabled={
                pin.length === 0 && el.icon !== undefined && el.title !== "Home"
              }
            >
              {el.icon ? el.icon : el.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
