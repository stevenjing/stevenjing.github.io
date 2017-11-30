import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    heroContainer: {
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        minHeight: '500px',
        height: 'calc(100vh + 80px)',
    },
    headline: {
        flex: 1,
    },
    subHeadline: {
        flex: 1,
    },
});

class Hero extends Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
    }

    render() {
        return (
            <div className={this.classes.heroContainer}>
                <h2 className={this.classes.headline}>About Me</h2>
                <p className={this.classes.subHeadline}>Description about me</p>
            </div>
        );
    }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
