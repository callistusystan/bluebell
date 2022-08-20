import React, { Component } from 'react';
import DeviceBar from '../components/react-mobile-hackathon/devices/DeviceBar';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { GridLoader } from 'react-spinners';
import Background from '../images/background.jpg';

class HomePage extends Component {

    state = {
        ready: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 500);
    }

    renderLoading = () => {
        return (
            <LoadingView>
                <GridLoader color='var(--bluebell)' loading={!this.state.ready} />
            </LoadingView>
        );
    };

    renderBody = () => {
        return (
            <ScrollView>
              <div style={{ height: '200%', display: 'flex', flexDirection: 'column' }}>
              </div>
            </ScrollView>
        );
    };

    render() {
        return (
            <div style={styles.container}>
              {this.state.ready ? this.renderBody() : this.renderLoading()}
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bark)',
    }
};

export default HomePage;
