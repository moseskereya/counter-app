import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
// import App from './App';
import * as serviceWorker from './serviceWorker';

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
  
    renderSquare(i) {
      return <Square value={this.state.squares[i]} />;
    }
    
    render() {
      const status = 'Play now : X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{}</div>
            <ol>{}</ol>
          </div>
        </div>
      );
    }
  }
// my practise today
// this is where we render the whole thing 

// const element = (
//     <table>
//     <tr>
//       <th>Names</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// const element = (
// <ul>
//     <li>Apples</li>
//     <li>Banana</li>
//     <li>Mangoes</li>
//     <li>Avocado</li>
//     <li>Cheries</li>
// </ul>
// );

// const element = (
// <React.Fragment>
//     <h4>hello</h4>
// </React.Fragment>
// );
//Rjsx.. now lets see how thta works


//React components
// class Moses extends React.Component {
//     render() { 
//         return <span>hello world again</span>
//     }
// }
 
// export default Moses;
//Creating a function component

// function App(){
//     return <h4> hello moses its your time tobecome the most wanted programmer of all time</h4>
// }



// constructor function

//Props and how they work

// class Car extends React.Component {9
//     render() { 
//         return <h4>hello its day {this.props.num}</h4>
//     }
// }
 
// const myelement = < Car num = '5 in react tutarial'/>
// export default Car prop
// Passing data using 

// class Mycar extends React.Component {
//     render() { 
//         return  <h3>its is who own it {this.props.owner}</h3>
//     }
// }
// export default Mycar;
 

// class Meyou extends React.Component {
//     render() { 
//         return (
//             <div>
//                 <h3>who owns this car</h3>
//             <Mycar owner="Moses"/>
//             </div>
//         );
//     }
// }

// this is how we pass values/ data using a prop
// class Car extends Component{
//     render() { 
//         return <h3>its {this.props.brother} </h3>;
//     }
// }
 
// export default Car;


// class World extends Component {
//     render() { 
//  const name = <h5>Mangoes</h5>             
//         return ( 
//             <React.Fragment>
//             <h5>who's Moses brother</h5>
//             <Car brother = {name}/>
//             </React.Fragment>
//          );
//     }
// }


// react states
// how to create state

// class Car extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { brand: 'ford',
//         name: 'muzbarg',
//         color: 'yellowish-red',
//         year:1934
//      };
//     }
//     render() {
//         return (
//             <div className="hello">
//             <h6>My car</h6>
//             <p> is {this.state.name}
//             {this.state.color} 
//             form {this.state.year}
//             </p>
//             </div>
//         );
//     }
// }
// export default Car;
// changing the states

// class Car extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { color: "Red",
//         brand: 'carina',
//         year: 1930,
//         model: 'ford',
//      }
//     }

//     ChangeColor = () => {
// this.setState ({year:1})
//    }

//     render() { 
//         return (
//             <div>
//                 <h4>My car is {this.state.brand} </h4>
//                 <p>
//           It is a {this.state.color}
//           {this.state.model},
//           from {this.state.year}.
//         </p>
//         <button type="button" onClick={this.ChangeColor}>Change</button>
//             </div>
//         )
//     }
// }
 
// export default Car;
 //life circle

ReactDOM.render(<Game/>, document.getElementById('root'));

serviceWorker.unregister()