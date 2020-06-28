/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBulletMooving: false,
      score: 0,
      bulletPosition: {
        top: 0,
        left: 0,
      },
      targetPosition: 0,
      verticalAngle: 10,
      message: '',
      addAngle: this.addAngle,
      removeAngle: this.removeAngle,
      launchBullet: this.launchBullet,
    };
  }

  componentDidMount = () => {
    this.initiateTarget();
  }

  initiateTarget = () => {
    const initialPosition = Math.floor(Math.random() * Math.floor(400));

    this.setState({ targetPosition: initialPosition });
  }

  addAngle = () => {
    const { isBulletMooving, verticalAngle } = this.state;

    if (verticalAngle < 20 && !isBulletMooving) {
      return this.setState({
        verticalAngle: verticalAngle + 1,
      });
    }

    return null;
  }

  removeAngle = () => {
    const { isBulletMooving, verticalAngle } = this.state;

    if (verticalAngle > 0 && !isBulletMooving) {
      return this.setState({
        verticalAngle: verticalAngle - 1,
      });
    }

    return null;
  }

  setScreenLimit(x, y, width, heigth) {
    return !(x >= 0 && x <= width && y <= heigth);
  }

  launchBullet = () => {
    const { bulletPosition, verticalAngle } = this.state;
    const { top, left } = bulletPosition;

    this.setState({
      isBulletMooving: true,
      bulletPosition: {
        top: (top + verticalAngle),
        left: left + 40,
      },
    });

    if (this.setScreenLimit(left, top, 760, 400)) {
      return this.checkCollision();
    }

    return setTimeout(this.launchBullet, 50);
  }

  checkCollision = () => {
    const {
      bulletPosition: { top }, targetPosition, verticalAngle, score,
    } = this.state;

    let isTargetTouched = false;
    let message = 'missed';

    if (top - verticalAngle >= (targetPosition - 20) && (top - verticalAngle <= targetPosition + 20)) {
      isTargetTouched = true;
      message = 'touched';
    }

    this.initiateTarget();

    return this.setState({
      isBulletMooving: false,
      message,
      bulletPosition: {
        top: 0,
        left: 0,
      },
      score: isTargetTouched ? score + 1 : score,
    });
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
