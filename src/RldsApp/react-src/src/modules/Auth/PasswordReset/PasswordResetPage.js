import React from 'react';
import { connect } from 'react-redux';
import history from '../../../redux/history';

class PasswordResetPage extends React.PureComponent {
    render() {
        return (
            <div>
                Password Reset Page
            </div>
        )
    }
}

const mapState = state => ({
    currentUser: state.currentUser,
});

const mapDispatch = dispatch => ({
  passwordReset: email => dispatch.currentUser.passwordReset(email),
  redirectToLoginPage: () => {
      history.push('/login');
  },
});

export default connect(mapState, mapDispatch)(PasswordResetPage);