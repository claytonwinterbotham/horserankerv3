import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Header} from '../components';

class AboutPage extends Component {
    render() {
        const {user} = this.props
        return(
            <div id="about" className="about-content container-fluid">
            <Header />
            <p className="welcome-message">Welcome {user.email}!</p> 
                <div className="row about-text">
                    <div className="col-8 col-lg-offset-2">
                        <h5>Horse Ranker provides Horseplayers and Handicappers with a quick Visual Comparison of 
                            who the Top Ranked Horses are in each race, and which ones to watch out for when trying
                            to predict the outcomes of races. This Application helps Handicappers
                            compare and contrast the strengths and weaknesses of each horse in a Race. </h5> 
                           

                        <h5>Users can select a specific Race at a Specific Racetrack and view a list of the horses in the race.
                        Then, they can see the Rankings of each horse on a number of Ratings and Variables
                        which Experts have agreed are relevant to deciding how each horse is likely to behave
                        and perform in comparison to the other horses.</h5>
                        <hr/>
                        <ul>
                            <li>For example, handicappers can easily see which horse is Ranked Highest in  <strong>Average Pace 1 and Pace 2.</strong>
                            This suggests which horses will tend to seize the Early Lead in a Race, forcing the others to run
                            faster than they may be able to without getting tired in the "stretch run" or final segment of a race.</li>

                            <li>Conversely, each horse is ranked according to its ability to run fast in the <strong>"Late Pace"</strong> of a race.
                            Such horses have an advantage when all the other horses are likely to tire themselves out by
                            struggling to seize and maintain the Lead in the race. Horses who rank High on Late Pace
                            are likely to be able to run past all of the others Late in the race, or at least finish Second or Third.</li>

                            <li>Horses are also ranked in terms of how fast they ran in their most recent Three Races.</li>

                            <li>Horses are also ranked in terms of the Class or Level of Competition at which they have been 
                            most successful in their past history of races.</li>

                            <li>Users can also see where each horse Ranks on Ratings of <strong>Probability of Winning</strong>, or <strong>Power Rankings.</strong></li>

                            <li>For races which have already been run in the past, users can compare the Rankings of horses with
                            their Finish Positions in their races, to see whether there are any Patterns evident which show
                            which kinds of races are won by horses with specific patterns of strengths or weaknesses.</li>

                        </ul>
                        <hr/>
                        <h5>The Horse Ranker Application is currently in Beta development, and future plans will allow Users to compare
                        Trainers and Jockeys and Owners in terms of the characteristic rankings of horses which they Win races with.</h5>
                </div>        
              </div>  
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedAboutPage = connect(mapStateToProps)(AboutPage);
export { connectedAboutPage as AboutPage };
