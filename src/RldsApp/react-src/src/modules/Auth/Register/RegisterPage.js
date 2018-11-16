import React from 'react';
import { connect } from 'react-redux';
import history from '../../../redux/history';

class RegisterPage extends React.PureComponent {
    render() {
        console.log('register');

        return (
            <div>
                Register Page
            </div>
        )
    }
}


export default connect(
    state => ({
        currentUser: state.currentUser,
    }),
    dispatch => ({
        register: userData => dispatch.currentUser.register(userData),
        redirectToHomePage: () => {
            history.push('/');
        }
    }),
)(RegisterPage);
