import { useEffect, useState } from "react";
import { PinCheck } from "./PinCheck";
import { popupError, popupSuccess } from "../../functions/toasts";

export const Admin = () => {
  const [pin, setPin] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  useEffect(() => {
    if (pin.join("") === process.env.REACT_API_PIN_ADMIN) {
      setShowAdmin(true);
    }
    console.log(pin.join(""));
  }, [pin]);

  const handleSubmit = () => {
    if (pin.join("") === process.env.REACT_APP_PIN_ADMIN) {
      popupSuccess("Welcome to Admin Page");
      setShowAdmin(true);
    } else {
      popupError("Wrong Pin");
    }
    setPin([]);
  };

  if (!showAdmin) {
    return <PinCheck setPin={setPin} pin={pin} handleSubmit={handleSubmit} />;
  } else {
    return <div>Hi you are in admin page</div>;
  }
};
