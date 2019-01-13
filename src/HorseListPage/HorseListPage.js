import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dataActions } from '../actions';
import {Header} from '../components';
import ReactTable from 'react-table'
import ReactTooltip from 'react-tooltip';


class HorseListPage extends Component {
    render() { 
        const {horses, user} = this.props
        return(  
        <div className=" horse-list-content container-fluid"> 
            <Header />  
            <p className="welcome-message">Welcome {user.email}!</p>  
            <div className="row">
                <div className="col-sm-2">    
                    <Link to="/" className="btn btn-info back-button">
                    Back
                    </Link> 
                </div>
            </div> 
            <div className="row">
                <div className="col-sm-12 loading">
                    <ul className="table_instructions">
                    <li>Click on the heading to re-rank the horses for a specific column.</li>
                        <li>Hover over the headings for details about each column.</li>
                        <li>Select a horse to view specific details.</li>
                    </ul>    
                    {horses.loading && <em>Loading Horses...</em>}
                    {horses.error && <span className="text-danger">ERROR: {horses.error}</span>}
                    {horses.items && 
                    <ReactTable
                    data={horses.items}
                    columns={[{
                        Header:  <span data-tip='Position in the Starting Gate, relative to the Rail'>Post<ReactTooltip /></span>,
                        accessor: 'possummary',
                        
                        Cell: (row) => {
                            let image = "";
                            if(row.value){
                                image = row.value;
                            }else{
                                image = 0; 
                            }
                            return <div><img height={34} src={require('../images/horsenumbers/' + image + '.png')}/></div>
                          },
                        },{
                        Header:  <span>Horse<br/>Name</span>,
                        accessor: 'name'
                        }, {
                        Header:  <span data-tip="Average Speed in running to the Second Call (usually half mile) E2 Brisnet">Average<br/>Pace 2<ReactTooltip /></span>,
                        accessor: 'e2AVGRANK'
                        }, {
                        Header:  <span data-tip="Rank of E2 rating for most recent race">Pace 2<br/>Last Race<ReactTooltip /></span>,
                        accessor: 'eprank'
                        }, {
                        Header: <span data-tip="Rank of most recent E2, compared to previous 10 races">Pace 2 Rank from<br/>Past Ten Races<ReactTooltip /></span>,
                        accessor: 'hE2RANK'
                        }, {
                        Header: <span data-tip="Average Speed for last quarter of a mile Brisnet Late">Average<br/>Late Pace<ReactTooltip /></span>, 
                        accessor: 'lpavgrank'
                        }, {
                        Header:  <span data-tip="Rating of Late Speed in most recent race">Last Race<br/>Late Pace<ReactTooltip /></span>,
                        accessor: 'lpRank'
                        }, {
                        Header: <span data-tip="Rank of most recent Late Pace compared to previous 10 races">Late Pace Rank<br/>Past Ten<ReactTooltip /></span>,
                        accessor: 'hlprank'
                        }, {
                        Header:  <span data-tip="Rank of Speed rating for most recent race">Last Race<br/>Speed Rank<ReactTooltip /></span>,
                        accessor: 'lR1RANK'
                        }, {
                        Header:  <span data-tip="Rank of Speed rating for Two races ago">Two Races Ago<br/>Speed Rank<ReactTooltip /></span>,
                        accessor: 'lR2RANK'
                        }, {
                        Header:  <span data-tip="Rank of Best Speed figure from past 10 races on this surface/distance">Rank Top Speed/<br/>Past 10<ReactTooltip /></span>,
                        accessor: 'backspeedrank'
                        }, {
                        Header:  <span data-tip="Rank of Best Class Level of Good Performance">Competitive<br/>Level Rank<ReactTooltip /></span>,
                        accessor: 'aclrank'
                        }, {
                        Header: <span data-tip="Rank of Current Class Level in Brisnet for this distance surface">Current Form<br/>Ranking<ReactTooltip /></span>,
                        accessor: 'curclassrank'
                        }, {
                        Header: <span data-tip="Rank of Brisnet Prime Power Figure">Power<br/>Rating Rank<ReactTooltip /></span>,
                        accessor: 'primepowerrank'
                        }, {
                        Header: <span data-tip="Morning line odds.">Morning<br/>Line Odds<ReactTooltip /></span>,
                        accessor: 'pP_ODDS'
                        }, {
                        Header: 'Finish',
                        accessor: 'fin'
                        }] }
                    defaultPageSize={10}
                    className="-striped -highlight"
                    getTdProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: (e, handleOriginal) => {
                        
                            this.props.dispatch(
                                dataActions.selectHorse(rowInfo.original, () => {

                                    this.props.dispatch(
                                        dataActions.fetchHorseDetail(
                                            rowInfo.original.raceid,
                                            rowInfo.original.horseid)
                                    )
                                    this.props.history.push("/horsedetail")
                                })
                            )      
                        if (handleOriginal) {
                            handleOriginal()
                        }
                        }
                    }
                    }}/>}
                    </div>
                </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    const { horses } = state
    return {
        horses,
        user
    }
}

const connectedHorseListPage = connect(mapStateToProps)(HorseListPage);
export { connectedHorseListPage as HorseListPage };
