import React, { Component } from 'react';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { HashLoader } from 'react-spinners';
import BottomBar from '../components/bottom-bar/BottomBar';
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';
import Slide from '../components/slide/Slide';


const Stamp = ({stampName, date}) => {
  return (
    <div
        style={{
          boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)',
          borderRadius: 10,
          padding: '16px 24px',
          display: 'flex', 
          flexDirection: 'column',
        }}>
      <span style={{color: 'var(--dark)', font: 'var(--feature18)'}}>
        {stampName || 'Stamp Name'}
      </span>
      <span style={{marginTop: 4, color: 'var(--slate)', font: 'var(--copy12)'}}>
        Obtained {date || 'Jan 1 2022'}
      </span>
    </div>
  );
}

class ProfilePage extends Component {

    state = {
        ready: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 3000);
    }

    renderLoading = () => {
        return (
            <LoadingView
              style={{ background: "#fff", position: "absolute", zIndex: 100 }}>
              <HashLoader color='var(--bluebell)' loading={!this.state.ready} />
            </LoadingView>
        );
    };

    renderBody = () => {
        return (
          <div
            style={{
              flex: 1,
              maxHeight: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ScrollView>
              <div style={{background: 'var(--sunshine)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '60px 24px 26px',}}>
                <span style={{color: 'var(--dark)', font: 'var(--feature32)'}}>Bobby Ross</span>
                <img src="gear.svg" style={{width: 24, height: 24}} />
              </div>
              <div
                  style={{
                    background: 'var(--mist)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 24px'}}>
                <span style={{marginTop: 32, color: 'var(--dark)', font: 'var(--title)',}}>Recent Stamps</span>
                <div style={{marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
                  <Stamp />
                  <Stamp />
                  <Stamp />
                </div>
                <Button to="/collection" label="See full collection" style={{marginTop: 32, alignSelf: 'center'}} />

                <div style={{marginTop: 44, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                  <span style={{color: 'var(--dark)', font: 'var(--title)',}}>Stamps Near You</span>
                  <Link to="/stamps-near-you" style={{textDecoration: 'none', color: 'var(--bluebell)', font: 'var(--copy14)',}}>
                    See all
                  </Link>
                </div>

                <Slide style={{marginTop: 16}}>
                  <Stamp/>
                  <Stamp/>
                  <Stamp/>
                </Slide>

                <span style={{color: 'var(--dark)', font: 'var(--title)',}}>Article of the week</span>

                <div
                    style={{
                      boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)',
                      borderRadius: 10,
                      marginTop: 16, 
                      padding: '16px 24px',
                      display: 'flex', 
                      flexDirection: 'column',
                    }}>
                  <span style={{color: 'var(--dark)', font: 'var(--mini-title)'}}>
                    Article name
                  </span>
                  <span style={{marginTop: 4, color: 'var(--slate)', font: 'var(--copy14)'}}>
                    Author or publisher
                  </span>
                </div>
              </div>
            </ScrollView>
            <BottomBar />
          </div>
        );
    };

    render() {
        return (
            <div style={styles.container}>
              {this.renderBody()}
              {this.state.ready ? null : this.renderLoading()}
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
        background: 'var(--mist)',
    }
};

export default ProfilePage;
