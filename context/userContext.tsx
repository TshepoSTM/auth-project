import React, { useState, createContext } from "react";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";
import { cellphoneValidate } from "../src/components/utils/validation";

export const UserContext = createContext({
  /*id: null,
  firstName: null,
  surname: null,
  cellphone: null,
  email: null,*/
  isLoading: false,
  userToken: null,
  userLogin: (username: string, password: string) => {},
  userLogout: () => {},
  createUser: (
    firstName: string,
    surname: string,
    cellphone: string,
    username: string,
    password: string,
    conPassword: string,
    deviceToken: string
  ) => {},
  updateUser: (
    uid: string,
    firstName: string,
    surname: string,
    cellphone: string,
    username: string
  ) => {},
});

const ContextProvider = ({ children }) => {
  const [uid, setUid] = useState(null);
  const [userToken, setUserToken] = useState<string>(null);
  const [firstName, setFirstName] = useState<string>(null);
  const [surname, setSurname] = useState<string>(null);
  const [cellphone, setCellphone] = useState<string>(null);
  const [username, setUsername] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const [conPassword, setConPassword] = useState<string>(null);
  const [deviceToken, setDeviceToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const userLogin = (username: string, password: string) => {
    //setIsLoading(true);
    if (username === "") {
      showMessage({
        message: "Enter Email!",
        type: "danger",
      });
      return;
    }
    if (password === "") {
      showMessage({
        message: "Enter Password!",
        type: "danger",
      });
      return;
    }

    if (username && password) {
      console.log(username, password);
      setUserToken("hgvsvfjgf");
    }
  };

  const userLogout = () => {
    setUserToken(null);
    setIsLoading(true);
    //console.log("userToken", userToken);
  };

  const createUser = (
    firstName: string,
    surname: string,
    cellphone: string,
    username: string,
    password: string,
    conPassword: string
  ) => {
    //console.log(cellphoneValidate(cellphone));

    if (firstName === "") {
      showMessage({
        message: "Enter First Name!",
        type: "danger",
      });
      return;
    }
    if (surname === "") {
      showMessage({
        message: "Enter Surname!",
        type: "danger",
      });
      return;
    }
    if (cellphone === "" || !cellphoneValidate(cellphone)) {
      showMessage({
        message: "Enter Cellphone Number!",
        type: "danger",
      });
      return;
    }
    if (username === "") {
      showMessage({
        message: "Enter Email!",
        type: "danger",
      });
      return;
    }
    if (password === "") {
      showMessage({
        message: "Enter Password!",
        type: "danger",
      });
      return;
    }

    if (password !== conPassword) {
      showMessage({
        message: "Password does not match!",
        type: "danger",
      });
      return;
    }

    if (firstName && surname && cellphone && username && password) {
      console.log(username, password);
    }
  };

  const updateUser = (
    uid: string,
    firstName: string,
    surname: string,
    cellphone: string,
    username: string
  ) => {
    if (firstName === "") {
      showMessage({
        message: "Enter First Name!",
        type: "danger",
      });
      return;
    }
    if (surname === "") {
      showMessage({
        message: "Enter Surname!",
        type: "danger",
      });
      return;
    }
    if (cellphone === "" || !cellphoneValidate(cellphone)) {
      showMessage({
        message: "Enter Cellphone Number!",
        type: "danger",
      });
      return;
    }

    if (uid && firstName && surname && cellphone) {
      console.log(username, surname);
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
        userToken,
        userLogin: userLogin,
        userLogout,
        createUser: createUser,
        updateUser: updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
