import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataActions } from '../actions';

class TrackListItem extends Component {
    renderListItem(){
        const { dates } = this.props;
        return dates.items.map(date =>{
                return (
                    <p className="date-item"
                        key={date.date}
                        onClick={() =>{
                            this.props.dispatch(
                                dataActions.selectDate(date),
                                );
                            this.props.dispatch(
                                dataActions.fetchRaces(date.trackid,
                                                           date.date)
                                );    
                        }}>
                        {date.date}
                    </p>
                );
            })
        }    
    render() {
        const { dates } = this.props;
        return (
            <div id={"collapse" + this.props.trackid} data-parent="#accordion" className="collapse" role="tabpanel" aria-labelledby={"heading" + this.props.trackid}>
            <div className="loading" className="card-block">
                {dates.error && <span className="text-danger">ERROR: {dates.error}</span>}
                {dates.items && this.renderListItem()}
            </div>
          </div>
        )
    }
}

function mapStateToProps(state) {
    const { dates } = state
    
    return { 
        dates,
        track: state.activeTrack
    };
}

export default connect(mapStateToProps)(TrackListItem);