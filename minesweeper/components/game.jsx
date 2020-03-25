import React from 'react';
import * as Minesweeper from "../minesweeper.js";
import Board from './board';
import Tile from './tile';

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(9, 10);
        this.state = {board: board};
        // debugger;
        this.updateGame = this.updateGame.bind(this);

    }


    updateGame(tileObj, flag) {
        if (flag) {
            tileObj.toggleFlag();
        } else {
            tileObj.explore();
        }
        this.setState({ board: this.state.board })
    }

    render() {


        return (
            <div>
                < Board board={this.state.board} updategame={this.updateGame} />
                
            </div>
        )
    }
}

export default Game;