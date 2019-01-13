import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import  { App }  from './App/index.js';
import { LoginPage } from './LoginPage/index.js';
import { RegisterPage } from './RegisterPage/index.js';
import { Provider } from 'react-redux';
import { store, history } from './helpers';
import registerServiceWorker from './registerServiceWorker';
import { connect } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import { alertActions } from './actions';
import { PrivateRoute } from './components';

class Root extends React.Component {

  constructor(props) {
    super(props);

    // const { dispatch } = this.props;
    // history.listen((location, action) => {
    //     // clear alert on location change
    //     dispatch(alertActions.clear());
    // });
  }

  render() {
    return(
        <Router history={history}>
            <Switch>
                {/* <PrivateRoute path="/about" component={AboutPage} />
                <PrivateRoute path="/admin" component={AdminPage} /> */}
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />   
                {/* <PrivateRoute path="/horsedetail" component={HorseDetailPage} />
                <PrivateRoute path="/horsedata" component={HorseListPage} /> */}
                <PrivateRoute exact path="/" component={App} />
            </Switch>    
        </Router>  
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
    return {
        alert
    };
}

const connectedRoot = connect(mapStateToProps)(Root);
export { connectedRoot as Root }; 


ReactDOM.render(
    
<Provider store={store}>
  <Root />
</Provider> ,

document.getElementById('root'));
registerServiceWorker();
