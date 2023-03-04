import { useState } from "react";
import { api } from "../../services/api";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const nav = useNavigate();
  const [userToken, setUserToken] = useState(
    JSON.parse(localStorage.getItem("@userToken")) || ""
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@user")) || ""
  );

  const registerUser = (user) => {
    api
      .post("/register", user)
      .then((res) => {
        const { email, password } = user;
        loginUser({ email, password });
      })
      .catch((error) => console.log(error));
  };

  const loginUser = (user) => {
    console.log("aaaaa");
    api
      .post("/login", user)
      .then((res) => {
        setUserToken(res.data.accessToken);
        setUser(res.data.user);
        localStorage.setItem("@userToken", JSON.stringify(res.data.token));
        localStorage.setItem("@user", JSON.stringify(res.data.user));
        nav("/dashboard");
      })
      .catch((error) => {
        localStorage.removeItem("@userToken");
        localStorage.removeItem("@user");
      });
  };

  return (
    <UserContext.Provider
      value={{
        userToken,
        user,
        registerUser,
        loginUser,
        setUserToken,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
