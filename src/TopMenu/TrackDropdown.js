import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { dataActions } from '../actions';

class TrackDropdown extends React.Component {

    state = {
        trackOptions : [],
        value: ''
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.tracks !== prevProps.tracks) {
            this.addTrackOptions();
        }
      }

    addTrackOptions  = () => {
        const { tracks } = this.props;
        const trackOptions = []
        if(tracks.items){
             tracks.items.map(track =>{
                var trackOption = {};
                trackOption["text"] = track.name;
                trackOption["value"] = track.trackid;
                trackOptions.push(trackOption);
            })  
        }   
        this.setState({trackOptions: trackOptions})
    }

    handleChange = (e, { value }) => {
        this.setState({ value })
        this.props.dispatch(
            dataActions.fetchDates(value)
            );    
        console.log(value)
    }
    
    render () {
        {console.log(this.state.trackOptions)}
        const { trackOptions, value } = this.state;
        const { tracks } = this.props;
        return (
           <Dropdown 
            fluid 
            placeholder='Select Track' 
            fluid 
            selection 
            options={trackOptions} 
            value={value}
            onChange={this.handleChange}
            />
        )
    }
}


function mapStateToProps(state) {
    const { alert, tracks } = state;
    return {
        alert,
        tracks
    };
}

const connectedTrackDropdown = connect(mapStateToProps)(TrackDropdown);
export { connectedTrackDropdown as TrackDropdown  }; 
