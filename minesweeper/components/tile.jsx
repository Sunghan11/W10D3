import React from 'react';
import * as Minesweeper from "../minesweeper";
import Game from './game';
import Board from './board';
// import { Tile } from '../minesweeper';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        
        this.status = 'tile';
        this.mark = '[ ]';
        // this.state = {
        //     status: 'tile',
        //     mark: '',

        this.tileState = this.tileState.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    tileState() {
        if (this.props.tile.bombed && this.props.tile.explored) {
            this.mark = "U+1F4A3";
            this.status = this.status.concat(" bombed");
        } else if (this.props.tile.flagged) {
            this.mark = "U+2691";
            this.status = this.status.concat(" flagged");
        } else if (this.props.tile.explored) {
            let bcount = this.props.tile.adjacentBombCount();
            if (bcount > 0) {
                this.mark = bcount;
                this.status = this.status.concat(" revealed");
            }
        }
        
        // this.setState({status: status, mark: mark})        
    }

    handleClick(e) {
        e.preventDefault();
        this.tileState();
        this.props.update(this.props.tile, e.altKey);
    }

    render () {
        // debugger;
        // console.log(this.props.tile);
        // console.log(this.tileState.status);
        return (
            // <div className="tile">[ ]</div>
            <div onClick={this.handleClick} className={this.status}>{this.mark}</div>
        )
    }
}





export default Tile;