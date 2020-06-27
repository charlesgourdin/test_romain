/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletPosition: {
        top: 400,
        left: 0,
      },
      launchBullet: this.launchBullet,
    };
  }

  launchBullet = () => {
    const { bulletPosition } = this.state;
    const { left } = bulletPosition;
    console.log('ici');

    this.setState({
      bulletPosition: {
        ...bulletPosition,
        left: left + 1,
      },
    });

    setTimeout(this.launchBullet, 1000);
  }

  render() {
    const { children } = this.props;

    return (
      <GlobalContext.Provider value={ this.state }>
        { children }
      </GlobalContext.Provider>
    );
  }
}

export default GlobalProvider;
