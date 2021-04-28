import SecondPage from "../../../pages/SecondPage";
import FooterNavigationContainer from "../../Containers/FooterNavigationContainer";
import NavigationContainer from "../../Containers/NavigationContainer";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationContainer />

      {children}
      <FooterNavigationContainer />
    </>
  );
};

export default Layout;
