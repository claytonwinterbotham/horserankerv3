import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../actions';
import {Header} from '../components';
import TrackList from './track-list';
import RaceList from './race-list';

class HomePage extends React.Component {
    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user } = this.props;
        return (
            <div id="home" className="home-content container-fluid">
                <Header />
                <p className="welcome-message">Welcome {user.email}!</p>    
                <div className="row main-content">
                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 track-list">
                        <TrackList />
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                        <RaceList />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
        track: state.activeTrack,
        date: state.activeDate,
        race: state.activeRace,
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
