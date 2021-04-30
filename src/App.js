import { Route, Switch } from "react-router";
import { StoreContext } from "storeon/react";
import Layout from "./components/Views/Layout";
import NotFoundPage from "./routes/NotFound";
import "./App.scss";
import PartnersPage from "./routes/Partners";
import KuponsPage from "./routes/Kupons";
import { store } from "./store";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <Switch>
        <Layout>
          <Route path="/404" component={NotFoundPage} />
          <Route path="/partners" component={PartnersPage} />

          <Route path="/coupons" component={KuponsPage} />
        </Layout>
      </Switch>
    </StoreContext.Provider>
  );
};

export default App;
