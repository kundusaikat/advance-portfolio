import { useEffect, useState } from "react";
import { AllRoutes } from "./allRoutes/AllRoutes";
import { ImageURL } from "./data";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className="h-screen w-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${ImageURL.front.small})` }}
      >
        <motion.div
          animate={{ rotate: "360deg" }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <FaReact color="white" size={200} />
        </motion.div>
      </div>
    );
  }

  return <AllRoutes />;
}

export default App;
