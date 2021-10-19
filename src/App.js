
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Career from './Pages/Career/Career';
import Involve from './Pages/Involve/Involve';
import Details from './Pages/Details/Details';
import AuthProvider from './contexts/AuthProvider';
import Login from './Login/Login/Login';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Registration from './Login/Registration/Registration';
import useData from './hooks/useData';

function App() {

  const [data] = useData();

  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">

          <AuthProvider>

            <Router>

              <Header></Header>

              <Switch>

                <Route exact path="/">
                  <Home></Home>
                </Route>

                <Route path="/home">
                  <Home></Home>
                </Route>

                <Route path="/about">
                  <About></About>
                </Route>

                <PrivateRoute path="/career">
                  <Career></Career>
                </PrivateRoute>

                <PrivateRoute path="/involve">
                  <Involve></Involve>
                </PrivateRoute>

                <Route path="/login">
                  <Login></Login>
                </Route>

                <Route path="/register">
                  <Registration></Registration>
                </Route>

                <PrivateRoute path="/details/:serviceId">
                  <Details data={data}></Details>
                </PrivateRoute>


                <Route path="*">
                  <NotFound></NotFound>
                </Route>

              </Switch>
            </Router>

          </AuthProvider>

        </div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
