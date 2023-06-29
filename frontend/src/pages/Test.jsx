import React from "react";
import { SlidingImage } from "../components/SlidingImage";
import {
  image10001,
  image10002,
  image10003,
  image10004,
  image10005,
} from "../../src/assets/images/projects/advance-portfolio/index";

export const Test = () => {
  const imageArr = [image10001, image10002, image10003, image10004, image10005];
  return (
    <div>
      <SlidingImage data={imageArr} />
    </div>
  );
};
