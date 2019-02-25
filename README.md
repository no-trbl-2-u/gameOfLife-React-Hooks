# Conway's Game of Life
#### *```Written in React using the new "hooks" API```*

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

It is an interesting attempt at simulating civilization. Using a hand full of rules, an infinite plane, and an arbitrary amount of time, Conway was able to simulate birth, death, and some weird patterns in the in-between.

># Rules
>* Any live cell with fewer than two live neighbors dies, as if by underpopulation.
>* Any live cell with two or three live neighbors lives on to the next generation.
>* Any live cell with more than three live neighbors dies, as if by overpopulation.
>* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## To give the simulation a try...
Either use the "Seed" button to generate your initial civilation
Or draw your own custom shapes and use the "Start" button to begin the simulation.
Use "Stop" to stop the simulation and "Clear" to clear both the board and the generation count.

## To play with the code...

```sh
git clone https://github.com/no-trbl-2-u/gameOfLife-React-Hooks.git
cd gameOfLife-React-Hooks
npm install
npm start
```

Future Plans:
> import Ramda and try to use some of their FP utility functions

> import fantasy-land and try to make my own types