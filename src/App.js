import { Redirect, Route, Switch } from "react-router";
import PartnersPage from "./pages/Partners";
import Layout from "./components/Views/Layout";
import "./App.scss";

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route path="/partners" component={PartnersPage} />
        <Route render={() => <Redirect />} />
      </Layout>
    </Switch>
  );
};

export default App;
