import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
    render(){
        const {user} = this.props
        if(user){
            return (
                
                <div className="row">
                    <div className=" col-12 page-header">
                    <Link to="/"><h1 className="logo">Horse Ranker</h1></Link>
                    {user.role !== null && user.role.role === "Admin" && <p><Link className="admin-dashboard-button" to="/Admin">Admin Dashboard</Link></p> }

                    <Link className="about-btn text-left" to="/about">About</Link>
                    <Link className="logout-btn text-right" to="/login">Logout</Link>
                    </div>
                </div>
            
            );
        }
        return (
            
            <div className="row">
                <div className=" col-12 page-header">
                <h1 className="logo">Horse Ranker</h1>
                </div>
            </div>
        
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };

