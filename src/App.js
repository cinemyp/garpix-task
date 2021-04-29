import { Route, Switch } from "react-router";
import Layout from "./components/Views/Layout";
import NotFoundPage from "./routes/NotFound";
import "./App.scss";
import PartnersPage from "./routes/Partners";
import KuponsPage from "./routes/Kupons";

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/404" component={NotFoundPage} />
        <Route path="/partners" component={PartnersPage} />
<<<<<<< HEAD
        <Route path="/coupons" component={KuponsPage} />
=======
        <Route path="/coupons" component ={KuponsPage}/>
>>>>>>> a9c7b26d7638899ecaf9eb06e4f0a2d23da2abe8
      </Layout>
    </Switch>
  );
};

export default App;
