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
        <Route path="/kupons" component ={KuponsPage}/>
      </Layout>
    </Switch>
  );
};

export default App;
