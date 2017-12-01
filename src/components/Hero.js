import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import landingPageImage from '../images/landingPageImage.jpg';

const styles = theme => ({
    heroContainer: {
        backgroundImage: 'url(' + landingPageImage + ')',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        minHeight: '800px',
        height: 'calc(100vh + 40px)',
        filter: 'grayscale(10%) sepia(47%)',
        position: 'relative'
    },
    headline: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        fontFamily: '"Lobster", cursive',
        fontSize: '4.1em',
        letterSpace: '1px',
        textShadow: '2px 2px #5c4f3c',
        color: 'white',
        zIndex: 2,
    },
    subHeadline: {
        flex: 1,
        fontSize: '24px',
        lineHeight: '30px',
        color: 'white',
        zIndex: 2,
    },
    imageFade:{
        position:"absolute",
        width:"100%",
        height: "100%",
        backgroundColor:"black",
        opacity: 0.4,
        zIndex: 1,
    }
});

class Hero extends Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
    }

    render() {
        return (
            <div className={this.classes.heroContainer}>
                <div className={this.classes.imageFade}/>
                <div className={this.classes.headline}>
                    <h1>Hi, I'm Steven.</h1>
                </div>
                <div className={this.classes.subHeadline}>
                    <p>I'm a <b>software engineer</b> and <b>web developer</b>.</p>
                </div>
            </div>
        );
    }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
