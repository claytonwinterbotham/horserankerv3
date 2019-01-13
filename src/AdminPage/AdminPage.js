import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

class AdminPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(
            userActions.getAll(),
        )
         
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        if(user.role != null){
            if(user.role.role === "Admin"){
                return (
                        <div className="container-fluid admin-page">
                            <div className="row">
                        <div className=" col-12 page-header">
                        <Link to="/"><h1 className="logo">Horse Ranker</h1></Link>
                        <Link className="logout-btn text-right" to="/login">Logout</Link>
                        </div>
                        </div>
                        <div className="row admin-content">
                        <p className="welcome-message">Welcome {user.email}!</p>
                            <div className="loading">
                                <h3>All registered users:</h3>
                                {users.loading && <em>Loading users...</em>}
                                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                                {users.items &&
                                    <div>
                                        {users.items.map((user, index) =>
                                            
                                            <div key={user.id} className="card" style={{width: 25 +"rem"}}>
                                                <div className="card-body">
                                                <h5 className="card-title">{user.email}</h5>
                                                <p className="card-text"
                                                    onClick={() =>{
                                                        if(user.role === "Admin"){
                                                            this.props.dispatch(
                                                                // console.log("in remove role" + user.role),
                                                                // console.log("in remove role" + user.email),
                                                                userActions.removeRoles(user.email, "Admin", () =>{                                                            
                                                                    this.props.dispatch(
                                                                        userActions.getAll()
                                                                    )
                                                                })
                                                            )}
                                                        else{
                                                            this.props.dispatch(
                                                                userActions.assignRoles(user.email, "Admin", () =>{
                                                                    this.props.dispatch(
                                                                        userActions.getAll(),
                                                                        console.log("in assign role" + user.role)
                                                                    )
                                                                })
                                                            )}
                                                        }}
                                                >{user.role}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                }
                                <p>
                                    <Link to="/">Back to Home</Link>
                                </p>
                            </div>
                        </div>
                    </div>        
                );
            }    
    }
    return(
        <div>
            {this.props.history.push('/')}
        </div>
    )
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

const connectedAdminPage = connect(mapStateToProps)(AdminPage);
export { connectedAdminPage as AdminPage };
