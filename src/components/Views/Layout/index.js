import SecondPage from "../../../pages/SecondPage";
import FooterNavigationContainer from "../../Containers/FooterNavigationContainer";
import NavigationContainer from "../../Containers/NavigationContainer";
<<<<<<< HEAD
const Layout = () => {
 
  return (
    <>
    <NavigationContainer />
   
  <FooterNavigationContainer/>
  </>
)
=======
import Footer from "../../Footer/Footer.js";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationContainer />
      {children}
    </>
  );
>>>>>>> c3973436f8d09b23e70cd19e6be39f340a521942
};

export default Layout;
