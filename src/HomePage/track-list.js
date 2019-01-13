import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataActions } from '../actions';
import TrackListItem from './track-list-item';

class TrackList extends Component {
    componentDidMount() {
        this.props.dispatch(

            dataActions.fetchTracks()
    );
    }

    renderList(){
        const { tracks } = this.props;
        return tracks.items.map(track =>{
            return (
                <div className="card" key={track.trackid}>
                <div className="card-header" role="tab" id={"heading" + track.trackid}>
                  <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse" + track.trackid} data-parent="#accordion" href={"#collapse" + track.trackid} aria-expanded="false" aria-controls={"collapse" + track.trackid}
                    onClick={() =>{
                        this.props.dispatch(
                            dataActions.selectTrack(track),
                            );
                        this.props.dispatch(
                            dataActions.fetchDates(track.trackid)
                            );    
                    }
                    }>
                    {track.name}
                    </button>
                  </h5>
                </div> 
                  <TrackListItem trackid = {track.trackid}/>
                </div>
            );
        });
    }

    render() {
        const { tracks } = this.props;
        return (
            <div className="loading" id="accordion" role="tablist" aria-multiselectable="true">
                {tracks.loading && <em>Loading tracks...</em>}
                {tracks.error && <span className="text-danger">ERROR: {tracks.error}</span>}
                {tracks.items && this.renderList()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { tracks } = state;
    return {
        //track: state.activeTrack,
        tracks
    }; 
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({
//         fetchDates, 
//         selectTrack
//      }, dispatch);
// }

export default connect(mapStateToProps)(TrackList);