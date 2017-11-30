import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

import Scroll from 'react-scroll'; // Imports all Mixins
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;

    this.handleScroll = this.handleScroll.bind(this);
    this.onContactClick = this.onContactClick.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleScroll(e) {
    console.log('scrolling...', e);
  }

  onContactClick() {
    console.log('contact');
    scroll.scrollToBottom();
  }

  render() {
    return (
      <div className={this.classes.root}>
        <AppBar position="static">
          <Toolbar className={this.classes.toolbar}>
            <Button color="contrast" className={this.classes.button}>About</Button>
            <Button color="contrast" className={this.classes.button}>Portfolio</Button>
            <Button color="contrast" className={this.classes.button}>Resume</Button>
            <Button color="contrast" className={this.classes.button} onClick={this.onContactClick}>Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
