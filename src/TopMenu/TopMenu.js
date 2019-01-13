import React from 'react';
import { Grid, Menu, Input } from 'semantic-ui-react';
import { TrackDropdown } from './TrackDropdown';
import { connect } from 'react-redux';

class TopMenu extends React.Component {
    render() {
        const { tracks } = this.props.tracks
        return (
            <Grid columns="equal">
            <Grid.Column>
                <Menu>
                <Menu.Item>
                    <TrackDropdown />
                </Menu.Item>
                <Menu.Item>
                    <TrackDropdown />
                </Menu.Item>
                </Menu> 
            </Grid.Column>
            </Grid>
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

const connectedTopMenu = connect(mapStateToProps)(TopMenu);
export { connectedTopMenu as TopMenu  }; 