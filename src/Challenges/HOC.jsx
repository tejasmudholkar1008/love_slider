export const User = ({ user, age }) => {
  return (
    <div>
      <h1>Hello {user}</h1>
      <p>Age is {age}</p>
    </div>
  );
};

export const withLogger = (WrappedComponent) => {
  return function WithLogger(props) {
    console.log("props: ", props);
    return <WrappedComponent {...props} />;
  };
};

const UserWithLogger = withLogger(User);

export const HOC = () => {
  return (
    <>
      <div>HOC Logger Component</div>xw
      <UserWithLogger user="Tejas" age="24" />
    </>
  );
};
