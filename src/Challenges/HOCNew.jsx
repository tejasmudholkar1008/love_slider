import React from "react";

export const NewUser = ({ user, email }) => {
  return (
    <>
      <div>User: {user}</div>
      <div>Email: {email}</div>
    </>
  );
};

export const withUserLogger = (WrappedComponent) => {
  return function WithUserLogger(props) {
    console.log(props);
    return <WrappedComponent {...props} />;
  };
};

const UserWithLogger = withUserLogger(NewUser);

export const HOCNew = () => {
  return (
    <>
      <h1>Tejas Mudholkar</h1>
      <UserWithLogger user="Tejas" email="tejas.mudholkar@gmail.com" />
    </>
  );
};
