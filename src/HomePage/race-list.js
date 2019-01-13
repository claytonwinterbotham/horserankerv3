import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { dataActions } from '../actions';
import ReactTable from 'react-table'

class RaceList extends Component {
    render() { 
        const { races } = this.props;
        return(
            <div className="loading"> 
                {!races.loading && !races.items && <em>Please select a track and date to start.</em>}       
                {races.loading && <em>Loading Races...</em>}
                {races.error && <span className="text-danger">ERROR: {races.error}</span>}
                {races.items &&      
                <ReactTable
                    data={races.items}
                    columns={[{
                    Header: 'Racenum',
                    accessor: 'racenum'
                    }, {
                    Header: 'Racetype',
                    accessor: 'racetype',  
                    }, {
                    Header: 'Distance',
                    accessor: 'distance',  
                    }, { 
                    Header: 'PPturf', 
                    accessor: 'ppturf'
                    }, {
                    Header: 'Chartturf',
                    accessor: 'chartturf'
                    }, {
                    Header: 'Offturf', 
                    accessor: 'offturf'
                    }] }
                    defaultPageSize={10}
                    className="-striped -highlight"
                    getTdProps={(state, rowInfo, column, instance) => {
                    return {
                    onClick: (e, handleOriginal) => {
                        this.props.dispatch(
                            dataActions.selectRace(rowInfo.original, () => {
                                this.props.dispatch(
                                dataActions.fetchHorses(
                                    rowInfo.original.raceid,
                                    rowInfo.original.trackid,
                                    rowInfo.original.date)
                                )
                                this.props.history.push("/horsedata")
                            })
                        )
                        if (handleOriginal) {
                        handleOriginal()
                        }
                    }
                    }
                    }}
                    /> 
                    }
                     <ul className="table_instructions">
                        <li>Click on the heading to re-rank the horses for a specific column.</li>
                        <li>Select a race to view all horses for the specific race.</li>
                    </ul>
                    
           </div>   
        )
    }
}
function mapStateToProps(state) {
    const { races, authentication } = state;
    const { user } = authentication;
    return {
        user,
        races,
        track: state.activeTrack 
    }
}

export default withRouter(connect(mapStateToProps)(RaceList));