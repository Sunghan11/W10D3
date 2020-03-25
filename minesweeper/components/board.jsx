import React from 'react';
import Tile from './tile';


class Board extends React.Component {
    constructor(props) {
        super(props);

    }


    render () {
        // const tiles = this.props.board.grid.map( (row, idx1) => {
        //     return row.map( (tile, idx2) => {
        //         return (
        //             <Tile tile={this.props.board.grid.tile} key={Number(idx1+idx2)} update={this.props.board.updateGame} />
        //         );
        //     });
        // });
        // debugger;

        return (
            <>
            <h1>This is the Board</h1>
            <div>
                {
                this.props.board.grid.map((row, idx1) => {
                    return (
                        <div key={idx1} className="row"> {row.map((tile, idx2) => {
                            // debugger;
                        return <Tile tile={tile} key={Number(idx1 + idx2)} update={this.props.updategame} /> 
                        })
                    }
                    </div>
                    )}
                )}
            </div> 
            </>
        )
            
    }
}

export default Board;