import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    portfolioContainer: {
        minHeight: '700px',
        backgroundColor: '#37556a',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },

});

class Hero extends Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
    }

    render() {
        return (
            <div className={this.classes.portfolioContainer}>
                {/* <div className={this.classes.project}>
                    <img src={} alt="oops..."/>
                    <h2>Project Name</h2>
                    <p>Project Description</p>
                </div>
                <div className={this.classes.project}>
                    <img src={} alt="oops..."/>
                    <h2>Project Name</h2>
                    <p>Project Description</p>
                </div>
                <div className={this.classes.project}>
                    <img src={} alt="oops..."/>
                    <h2>Project Name</h2>
                    <p>Project Description</p>
                </div>
                <div className={this.classes.project}>
                    <img src={} alt="oops..."/>
                    <h2>Project Name</h2>
                    <p>Project Description</p>
                </div>
                <div className={this.classes.project}>
                    <img src={} alt="oops..."/>
                    <h2>Project Name</h2>
                    <p>Project Description</p>
                </div>
                <div className={this.classes.project}>
                    <img src={} alt="oops..."/>
                    <h2>Project Name</h2>
                    <p>Project Description</p>
                </div> */}
            </div>
        );
    }
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
