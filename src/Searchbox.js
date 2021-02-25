import React, { Component } from 'react';

class Searchbox extends Component{
    render(){
        let onSearchChange = this.props.searchChange;
        return(
            <div className="input-group input-group-lg w-50 px-md-5">
                <input 
                className="input-reset ba b--black-20 pa2 mb2 w-100 tc form-control"
                type = "search"
                placeholder="Search for breed name"
                onChange={onSearchChange}
                />
            </div>
        );
    }
}

export default Searchbox;