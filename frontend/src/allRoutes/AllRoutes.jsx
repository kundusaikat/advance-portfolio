import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { v4 as uuidv4 } from "uuid";
import { homeRoutesList } from "../data";
import { Admin } from "../pages/Admin/Admin";
import { BlogCreate } from "../pages/BlogApp/BlogCreate";
import { Test } from "../pages/Test";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      {homeRoutesList.map((route) => (
        <Route
          key={uuidv4()}
          path={route.path}
          element={<Homepage section={route.name} />}
        />
      ))}
      <Route path="admin" element={<Admin />}></Route>
      <Route path="blog/create" element={<BlogCreate />}></Route>
      <Route path="test" element={<Test />}></Route>
    </Routes>
  );
};
