import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

import classNames from 'classnames';

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
  navBar: {
    position: 'fixed',
    transition: 'background-color 0.4s ease-out',
    backgroundColor: 'red',
  },
  scrollActive: {
    backgroundColor: 'blue',
  },
  button: {
    flex: 1,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;

    this.state = {
      scrollActive: false,
    };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');

    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    if (window.scrollY > 10 && !this.state.scrollActive) {
      this.setState({
        scrollActive: true,
      });
    } else if (window.scrollY < 10 && this.state.scrollActive) {
      this.setState({
        scrollActive: false,
      })
    }
  }

  onAboutClick = (e) => {
    scroll.scrollToTop();
  }

  onContactClick = (e) => {
    console.log('contact');
    scroll.scrollToBottom();
  }

  render() {
    const navBarClasses = classNames({
      [this.classes.navBar]: true,
      [this.classes.scrollActive]: this.state.scrollActive,
    });

    return (
      <div className={this.classes.root}>
        <AppBar className={navBarClasses}>
          <Toolbar className={this.classes.toolbar}>
            <Button
              color="contrast"
              className={this.classes.button}
              onClick={this.onAboutClick}>About</Button>
            <Button
              color="contrast"
              className={this.classes.button}>Portfolio</Button>
            <Button
              color="contrast"
              className={this.classes.button}>Resume</Button>
            <Button
              color="contrast"
              className={this.classes.button}
              onClick={this.onContactClick}>Contact</Button>
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
