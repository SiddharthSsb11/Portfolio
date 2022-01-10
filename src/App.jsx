import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./page/LandingPage/Main";
import Loading from "./animation/Loading";
import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import Skills from "./components/Skills/Skills";


function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3500);
  });

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title> | Siddharth S. Bhadoriya</title>
        <meta name="description" content="Naman Parashar Portfolio" />
        <meta
          name="keywords"
          content="Siddharth, Bhadoriya, Portfolio, SiddharthSsb11, Ssb, SiddharthBhadoriya"
        />
        <meta
          name="google-site-verification"
          content="i85RmtUSgXAufFNybjnUCqxvPbcMAQT-C3sjmDtewIo"
        />
      </Helmet>
      {loader === false ? (
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
          <Switch>
            <Route exact path="/skills" component={Skills} />
          </Switch>
        </Router>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
}

export default App;
