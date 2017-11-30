import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    profileContainer: {
        minHeight: '2000px',
        backgroundColor: 'yellow',
    }
});

class Hero extends Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
    }

    render() {
        return (
            <div className={this.classes.profileContainer}>
                <h1>Portfolio</h1>
            </div>
        );
    }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
