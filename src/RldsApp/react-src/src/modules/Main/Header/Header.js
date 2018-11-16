import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Header extends React.Component {
  render () {
    return (
        <nav>
            Navbar
        </nav>
    );
  }
}

const mapState = (state) => ({
    currentUser: state.currentUser.currentUser,
});

const mapDispatch = dispatch => ({
    logOut: () => dispatch.currentUser.logOut(),
});

export default withRouter(connect(mapState, mapDispatch)(Header));
