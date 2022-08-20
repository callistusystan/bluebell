import React, { Component } from 'react';
import IPhoneX from './devices/IPhoneX';

let is_safari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
let is_chrome = /Chrome|CriOS/.test(navigator.userAgent);
is_safari = is_safari && ! is_chrome;

class MobileHackathon extends Component {

    render() {
        return (
            <div
                className='react-app-container'
                style={{
                    width: '100%',
                    height: is_safari ? 'calc(100vh - 72px)' : '100vh',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <IPhoneX>
                    {this.props.children}
                </IPhoneX>
                <div
                    className='react-app-link-container'
                    style={{
                        marginLeft: 226,
                        display: 'flex',
                        flexDirection: 'column',
                        color: 'var(--sunshine)', font: 'var(--feature)',
                        padding: 16
                    }}>
                  <img src="logo.svg" style={{width: 395,}} />
                  <span style={{color: 'var(--sunshine)', font: 'var(--feature)', marginTop: 64, marginBottom: 48}}>
                    Uncovering Canberra’s bushland.
                  </span>
                  <a target="_blank" href="https://github.com/callistusystan/cycl" style={{textDecoration: 'none', color: 'var(--sunshine)', display: 'flex', alignItems: 'center', marginBottom: 24,}}>
                    <span style={{borderBottom: '1px solid var(--sunshine)'}}>Git repo</span>
                    <span style={{marginLeft: 12}}>↗</span>
                  </a>
                  <a
                      target="_blank" href="https://www.figma.com/file/4G6REebpYfX2NsLUyF6R1T/cycl?node-id=921%3A389"
                      style={{textDecoration: 'none', color: 'var(--sunshine)', display: 'flex', alignItems: 'center', marginBottom: 24,}}>
                    <span style={{borderBottom: '1px solid var(--sunshine)'}}>Figma mock</span>
                    <span style={{marginLeft: 12}}>↗</span>
                  </a>
                  <a target="_blank" href="https://www.youtube.com" style={{textDecoration: 'none', color: 'var(--sunshine)', display: 'flex', alignItems: 'center', marginBottom: 24,}}>
                    <span style={{borderBottom: '1px solid var(--sunshine)'}}>Video pitch</span>
                    <span style={{marginLeft: 12}}>↗</span>
                  </a>
                  <a target="_blank" href="https://www.govhack.org" style={{textDecoration: 'none', color: 'var(--sunshine)', display: 'flex', alignItems: 'center'}}>
                    <span style={{borderBottom: '1px solid var(--sunshine)'}}>Govhack project page</span>
                    <span style={{marginLeft: 12}}>↗</span>
                  </a>
                  
                  <div style={{display: 'flex', alignItems: 'center', marginTop: 64,}}>
                    <span style={{color: 'var(--sunshine)', font: 'var(--feature)', }}>Built by</span>
                    <img src="milkbox.svg" style={{marginLeft: 12, width: 128}} />
                  </div>
                </div>
            </div>
        );
    }
}

export default MobileHackathon;