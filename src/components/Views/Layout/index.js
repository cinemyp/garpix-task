import NavigationContainer from "../../Containers/NavigationContainer";
import Footer from "../../Footer/Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationContainer />
      {children}
    </>
  );
};

export default Layout;
