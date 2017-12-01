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
    boxShadow: 'none',
    transition: 'background-color 0.2s ease-out, top 0.2s ease-in-out',
    backgroundColor: 'transparent',
  },
  navColor: {
    backgroundColor: '#5c4f3c',
  },
  scrollUp: {
    top: '-64px',
  },
  button: {
    flex: 1,
    fontFamily: '"Raleway", sans-serif',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    padding: '2px 3px',
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.classes = props.classes;

    this.state = {
      scrollY: 0,
      navColor: false,
      navHide: false,
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
    const scrollPosition = window.scrollY;


    // show/hide navbar
    if (scrollPosition > this.state.scrollY && !this.state.navHide) {
      this.setState({
        navHide: true,
      })
    } else if (scrollPosition < this.state.scrollY && this.state.navHide) {
      this.setState({
        navHide: false,
      });
    }

    this.setState({
      scrollY: scrollPosition,
    });

    // add/remove color
    if (scrollPosition > 64 && !this.state.navColor) {
      this.setState({
        navColor: true,
      });
    } else if (scrollPosition < 64 && this.state.navColor) {
      this.setState({
        navColor: false,
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
      [this.classes.navColor]: this.state.navColor,
      [this.classes.scrollUp]: this.state.navHide,
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
              className={this.classes.button}>Resume</Button>
            <Button
              color="contrast"
              className={this.classes.button}>Portfolio</Button>
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
