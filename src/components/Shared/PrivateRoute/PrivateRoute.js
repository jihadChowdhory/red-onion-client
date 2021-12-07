import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  const loginInfo = JSON.parse(localStorage.getItem("loggedInUserInfo"));
  const userInfo = loginInfo ? loginInfo : {};
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userInfo.isSignedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
