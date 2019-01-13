import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { TopMenu } from  '../TopMenu';
import { DataTable } from '../DataTable';
import { dataActions } from '../actions';
import { Route, Switch, Router } from 'react-router-dom';
import { AdminPage } from '../AdminPage';
import { HorseListPage } from '../HorseListPage';
import { HorseDetailPage } from '../HorseDetailPage';
import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from '../components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { AboutPage } from '../AboutPage';

class App extends Component {
//     constructor(props) {
//         super(props);

//         const { dispatch } = this.props;
//         history.listen((location, action) => {
//             // clear alert on location change
//             dispatch(alertActions.clear());
//         });
//     }

    componentDidMount() {
        this.props.dispatch(dataActions.fetchTracks());
    }

   
    render() {
        const { tracks } = this.props;
        return(
            <Grid>
                <Grid.Column columns="equal" className="app">
                    <Grid.Row>
                        <TopMenu />
                    </Grid.Row>
                    <Grid.Row>
                        <DataTable />  
                    </Grid.Row>      
                </Grid.Column> 
            </Grid>
            );
    }
}

function mapStateToProps(state) {
    const { alert, tracks } = state;
    return {
        alert,
        tracks
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 

