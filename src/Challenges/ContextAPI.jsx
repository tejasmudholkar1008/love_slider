import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={{ name: "Tejas", age: "23" }}>
      <Profil />
    </UserContext.Provider>
  );
}

function Profil() {
  const user = useContext(UserContext);
  return (
    <h1>
      Name: {user.name}, Age: {user.age}
    </h1>
  );
}
