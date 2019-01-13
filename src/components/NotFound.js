import React from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component{


  render(){
    return(
      <div className="NotFound">
        <p>Not found.</p>
      </div>
    )
  }
} 

const connectedNotFound = connect(null)(NotFound);
export { connectedNotFound as NotFound }; 