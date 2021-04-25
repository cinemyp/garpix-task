import NavigationContainer from "../../Containers/NavigationContainer";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationContainer />
      {children}
    </>
  );
};

export default Layout;
