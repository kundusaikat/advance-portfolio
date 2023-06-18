import { useState, useEffect, useRef } from "react";
import { AiFillMessage, AiFillCloseCircle } from "react-icons/ai";
import {
  ConnectionForm,
  DonateForm,
  QueryForm,
  ServiceForm,
  TestimonyForm,
} from "./Forms";

export const ContactOption = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [selectedForm, setSelectedForm] = useState("");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const buttonList = [
    {
      title: "Raise a query",
      component: QueryForm,
    },
    {
      title: "Hire for Service",
      component: ServiceForm,
    },
    {
      title: "Give Testimony",
      component: TestimonyForm,
    },
    {
      title: "Request Connection",
      component: ConnectionForm,
    },
    {
      title: "Donate",
      component: DonateForm,
    },
  ];

  const SelectedComponent = buttonList.find(
    (button) => button.title === selectedForm
  )?.component;

  useEffect(() => {
    console.log(selectedForm);
  }, [selectedForm]);

  return (
    <>
      {!modalOpen && (
        <span onClick={handleOpenModal}>
          <div className="fixed bottom-5 left-5 border-2 border-black p-2 rounded-2xl bg-white shadow-inner shadow-gray-600 rounded-bl-none z-50 cursor-pointer brightness-100">
            <AiFillMessage size={32} />
          </div>
        </span>
      )}

      {modalOpen && (
        <>
          <div
            className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-brightness-[0.2] z-[52]"
            ref={modalRef}
            onClick={() => setModalOpen(false)}
          >
            {!selectedForm && (
              <div
                className="flex flex-col gap-5"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {buttonList.map((el) => (
                  <div
                    key={el.title}
                    className="bg-white shadow-inner shadow-gray-900 py-2 px-5 text-center cursor-pointer border-4 rounded-3xl border-gray-800 text-2xl hover:text-white hover:bg-gray-800 font-[cursive] overflow-hidden"
                    onClick={() => setSelectedForm(el.title)}
                  >
                    {el.title}
                  </div>
                ))}
              </div>
            )}

            {selectedForm && (
              <div
                className="border border-black bg-white max-w-lg w-11/12 p-5 rounded-xl shadow-inner shadow-gray-600"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-wrap justify-center gap-1">
                  {buttonList.map((el) => (
                    <div
                      key={el.title}
                      className={`${
                        selectedForm === el.title
                          ? "bg-gray-600 text-white scale-110 shadow-inner shadow-white border-0"
                          : ""
                      } border border-black px-5 py-2 rounded-l-full rounded-r-full cursor-pointer`}
                      onClick={() => setSelectedForm(el.title)}
                    >
                      {el.title}
                    </div>
                  ))}
                </div>
                <SelectedComponent />
                <button onClick={() => setSelectedForm("")}>
                  <AiFillCloseCircle />
                </button>
              </div>
            )}

            <div className="fixed bottom-5 left-5 border-2 border-black p-2 rounded-2xl bg-white shadow-inner shadow-gray-600 rounded-bl-none z-50 cursor-pointer brightness-100">
              <AiFillCloseCircle size={32} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
