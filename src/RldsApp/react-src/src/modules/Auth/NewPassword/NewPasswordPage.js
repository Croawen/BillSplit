import React from 'react';
import { connect } from 'react-redux';
import history from '../../../redux/history';

class NewPasswordPage extends React.PureComponent {
    render() {
        return (
            <div>
                New Password Page
            </div>
        )
    }
}

const mapState = state => ({
    currentUser: state.currentUser,
});

const mapDispatch = dispatch => ({
    setNewPassword: dataObj => dispatch.currentUser.setNewPassword(dataObj),
    logOut: () => dispatch.currentUser.logOut(),
    redirectToLoginPage: () => {
        history.push('/login');
    }
});

export default connect(mapState, mapDispatch)(NewPasswordPage);