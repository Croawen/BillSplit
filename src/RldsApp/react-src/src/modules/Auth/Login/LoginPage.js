import React, { Fragment } from 'react';
import { connect } from 'http2';

class LoginPage extends React.PureComponent {
    render() {
        console.log('login');

        return (
            <div>
                Login page

                <button onClick={this.props.logIn({ email: '', password: '' })}>Login</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        currentUser: state.currentUser,
    }),
    dispatch => ({
        logIn: logInData => dispatch.currentUser.logIn(logInData),
        redirectToHomePage: () => {
            history.push('/');
        },
        redirectToPasswordResetPage: () => {
            history.push('/reset-password');
        },
    }),
)(LoginPage);