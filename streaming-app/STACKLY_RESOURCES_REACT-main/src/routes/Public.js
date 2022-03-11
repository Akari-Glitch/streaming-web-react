import React from "react";
import { Redirect, Route } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { useWhoami } from "../services/User";
export const Public = ({ component: Component, ...rest }) => {
  const { isLoading, data } = useWhoami();
  let userLogged;
  if (isLoading) return <LoadingScreen />;
  if (data && !data?.error) {
    userLogged = true;
  }
  if (userLogged) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Route
      {...rest}
      render={() => <Component user_data={data}></Component>}
    ></Route>
  );
};
