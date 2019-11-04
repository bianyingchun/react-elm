import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.scss";
import Fade from './fade-animation'
let num = 1;

export default class AnimateDemo extends Component {

  state = {
    ins: true,
    current: 1,
    dom: <p>
            ceshi weizhi {num}
          </p>

  }

  handle = (bool) => {
    this.setState({
      test: !bool
    })

  }

  end = () => {
    const that = this;
    num = num + 1;
    setTimeout(function () {
      that.setState({
        test: true,
        dom: <p>
              888888 {num}
            </p>
      }) 
    }, 500)
  }

  render () {
    const { test } = this.state;
    return (
      <div>
        <button onClick={this.handle.bind(null, this.state.test)}>点击transition</button>
        <Fade in={this.state.test} self={this.end}>
          {this.state.dom}
        </Fade>

      </div>

    )

  }

}
