import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.scss";
export default class AnimateDemo extends Component {
 constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: 'Buy eggs' },
	      { id: 2, text: 'Pay bills' },
        { id: 3, text: 'Invite friends over' },
        { id: 4, text: 'Fix the TV' },
      ]
    }
  } 
  render() {
  	const {items} = this.state;
  	return (
  		 <p>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={500}
              classNames="fade"
            >
              <p>
                <button
                  onClick={() => {
                    this.setState(state => ({
                      items: state.items.filter(
                        item => item.id !== id
                      ),
                    }));
                  }}
                >
                  &times;
                </button>
                {text}
              </p>

            </CSSTransition>

          ))}

        </TransitionGroup>

        <button

          type="button"

          onClick={() => {
            const text = prompt('Enter some text');
            if (text) {
              this.setState(state => ({
                items: [
                  ...state.items,
                  { id: 1123, text },
                ],

              }));

            }

          }}

        >

          Add Item

        </button>

      </p>
  		)
  }
}