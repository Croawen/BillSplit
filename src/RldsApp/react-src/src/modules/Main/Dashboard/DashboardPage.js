import React from 'react';
import { connect } from 'http2';

class DashboardPage extends React.Component {
    componentDidMount() {
        console.log('dashboard mount');
    }

    componentDidUpdate() {
        console.log('dashboard update');
    }

    componentWillMount() {
        console.log('dashboard will mount');
    }

    render() {
        console.log('dashboard');
        return (
            <div>
                Dashboard Page
            </div>
        );
    }
}

const mapState = state => ({
  });
  
  const mapDispatch = dispatch => ({
  });

export default connect(
    mapState,
    mapDispatch
  )(DashboardPage);
  