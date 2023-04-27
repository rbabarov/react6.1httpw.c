import React, { Component } from 'react';
import turnArrowsF from './utils/turnArrows';
import propTypes from 'prop-types'; 

export class RenderArrows extends Component {
  constructor(props) {
    super(props);
    const { hVstart, mVstart, sVstart } = this.props.data;
    this.hS = hVstart;
    this.mS = mVstart;
    this.sS = sVstart;
    this.state = { posVh: 0, posVm: 0, posVs: 0 };
    this.interval = undefined;
  }
  
  render() {
    return (
      <React.Fragment>
        <div id="hr" className='hour' style={{transform: `rotate(${this.state.posVh}deg)`}}></div>
        <div id="mn"  className='min' style={{transform: `rotate(${this.state.posVm}deg)`}}></div>
        <div id="sc"  className='sec' style={{transform: `rotate(${this.state.posVs}deg)`}}></div>
        <div className='center'></div>
      </React.Fragment>
    )
  }
  
  componentDidMount() {
    this.setState({ posVh: this.hS, posVm: this.mS, posVs: this.sS },
      () =>{ this.getCurrent(); }
    )
  }

  getCurrent() {
    this.interval = setInterval(()=> {
      const turn = turnArrowsF(this.state.posVh, this.state.posVm, this.state.posVs);
      this.setState({posVh: turn.hC, posVm: turn.mC, posVs: turn.sC});
    }, 1000) 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

RenderArrows.prpoTypes = {
  data: propTypes.object,
  getCurrent: propTypes.func,
  interval: propTypes.func
}

export default RenderArrows;
