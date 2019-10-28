import React from 'react';

import Playground from '../Playground/Playground.jsx';
import Cell from '../Cell/Cell.jsx';

import { cloneDeep } from 'lodash-es';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: ['', '', '', '', '', '', '', '', ''],
      turn: 'x',
      win: {
        status: false,
        route: undefined,
        player: undefined,
      },
    };
  }

  handleClick(id) {
    const newState = cloneDeep(this.state);
    const { win, turn, grid } = this.state;
    if (win.status === false && grid[id] === '') {
      if (turn === 'x') {
        newState.grid[id] = 'x';
        newState.turn = 'o';
      } else if (turn === 'o') {
        newState.grid[id] = 'o';
        newState.turn = 'x';
      }
    }

    this.setState(newState, () => {
      const newState = cloneDeep(this.state);
      const { grid } = this.state;

      const winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i <= 7; i++) {
        if (
          grid[winStates[i][0]] === turn &&
          grid[winStates[i][1]] === turn &&
          grid[winStates[i][2]] === turn
        ) {
          newState.win.status = true;
          newState.win.route = winStates[i];
          newState.win.player = turn;
          this.setState(newState);
          return;
        }
      }
    });
  }

  render() {
    const { win } = this.state;
    return (
      <Playground>
        {this.state.grid.map((item, id) => {
          let isOnWonRoute = false;
          if (win.route !== undefined) {
            win.route.forEach(index => {
              if (index === id) {
                isOnWonRoute = true;
              }
            });
          }
          return (
            <Cell
              key={id}
              id={id}
              value={item}
              isGameOver={win.status}
              wonRoute={win.route}
              isOnWonRoute={isOnWonRoute}
              onClick={() => {
                this.handleClick(id);
              }}
            >
              {item ? item : 'empty'}
            </Cell>
          );
        })}
      </Playground>
    );
  }
}
