import { Switch, Route, BrowserRouter } from "react-router-dom";

import InterviewPage from "../../pages/Interview/Interview";
import MainPage from "../../pages/Main/Main";
import NotFoundPage from "../../pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/interview">
          <InterviewPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
