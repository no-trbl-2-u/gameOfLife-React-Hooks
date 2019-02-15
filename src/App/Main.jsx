import React, { Component } from 'react';
import Grid from '../Components/Grid';


class Main extends Component {
  constructor (props) {
    super(props);
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  selectBox = (row, col) => {
    let gridCopy = [...this.state.gridFull]

    gridCopy[row][col] = !gridCopy[row][col]

    this.setState({
      gridFull: gridCopy
    })
  }

  seed = () => {
    // Copy the array
    let gridCopy = [...this.state.gridFull]

    // Go through each cell, if its random # *4 = 1, activate
    for (let i=0; i< this.rows; i++){
      for (let j=0; j< this.cols; j++){
        if (Math.floor(Math.random() * 4) === 1){
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy,
    })
  }

  componentDidMount() {
    this.seed();
  }

  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    )
  }
}

export default Main