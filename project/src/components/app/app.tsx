import Main from '../main/main';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from '../not-found/not-found';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import PrivateRoute from '../private-route/private-route';
import { OfferType } from '../../types/offer';

type AppProps = {
  offers: OfferType[],
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main
            offers = {offers}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Login}>
          <Login />
        </Route>
        <Route exact path={AppRoute.Offer}>
          <Offer />
        </Route>
        <Route >
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
