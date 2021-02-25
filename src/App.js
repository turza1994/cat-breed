// import {robots} from'./robots';
import CardList from './CardList';
import Searchbox from './Searchbox';
import ColorPicker from './ColorPicker';
import RandomColor from './RandomColor';
import Scroll from './Scroll';
import './App.css';

import React, { Component } from 'react';
class App extends Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            filteredRobots: [],
            color1: 'rgb(235,230,230)',
            color2: 'rgb(255,204,204)'
        }

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onColorChange1 = this.onColorChange1.bind(this);
        this.onColorChange2 = this.onColorChange2.bind(this);
        this.onClickRandomColor = this.onClickRandomColor.bind(this);
    }

    componentDidMount(){
         const data = async () => {
           await  fetch('https://api.thecatapi.com/v1/breeds')
        .then(response => response.json())
        .then((json) => {
            this.setState({robots: json, filteredRobots: json});
            console.log(json)
        //   this.state.robots.map(element => console.log(element.image.url))
            // console.log(typeof(json[0].image.url))
        });
        }
        data();
    }

    onSearchChange(e){
        let name = e.target.value;
        let robots = this.state.robots;
        let filteredRobot = [];
        for(let i=0; i<robots.length; i++){
            if(robots[i].name.toLowerCase().includes(name.toLowerCase())){
                filteredRobot.push(robots[i]);
            }
        }
        console.log(filteredRobot);
        this.setState({filteredRobots: filteredRobot});
        
    }

    onColorChange1(e){
        console.log(e.target.value);
        this.setState({color1: e.target.value});
    }
    onColorChange2(e){
        console.log(e.target.value);
        this.setState({color2: e.target.value});
    }

    onClickRandomColor(e){
        let r1 = Math.floor(Math.random()*255);
        let g1 = Math.floor(Math.random()*255);
        let b1 = Math.floor(Math.random()*255);
        let r2 = Math.floor(Math.random()*255);
        let g2 = Math.floor(Math.random()*255);
        let b2 = Math.floor(Math.random()*255);
        // console.log(randomNumber);
        this.setState({
            color1: `rgb(${r1}, ${g1}, ${b1})`,
            color2: `rgb(${r2}, ${g2}, ${b2})`
        });
    }

    render(){
        
        return(
            <div className="App container-fluid tc" style={{background: `linear-gradient(to left, ${this.state.color1} , ${this.state.color2})`}} >
                <header className="d-flex flex-column flex-md-row justify-content-around align-items-center py-4 mb-5">
                    <h3 className="f1 fw9 b">Cat Friends</h3>
                    <Searchbox searchChange = { this.onSearchChange } />
                    {/* <h3>Change Background Color ?</h3> */}
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="pt-3">
                            <ColorPicker onColorChange = {this.onColorChange1} color = {this.state.color1} />
                            <ColorPicker onColorChange = {this.onColorChange2} color = {this.state.color2} />
                        </div>
                        <RandomColor onClickRandomColor = {this.onClickRandomColor} />
                    </div>
                    
                </header>
                    <CardList robots={this.state.filteredRobots} />
            </div>
        );
        
    }
}

export default App;