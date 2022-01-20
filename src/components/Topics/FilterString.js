import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['this', 'is', 'string'],
            userInput: '',
            filteredArray: []
        }
    }


handleChange(e) {
    this.setState({userInput: e.target.value})
}

handleClick() {
    let filtered = []
    for (let i = 0; i < this.state.unFilteredArray.length; i++) {
        if (this.state.unFilteredArray[i].includes(this.state.userInput)) {
                filtered.push(this.state.unFilteredArray[i])
        }
    }
    this.setState({filteredArray: filtered})
}

render() {
    return (
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
            <input className='inputLine' onChange={this.handleChange.bind(this)}></input>
            <button className='confirmationButton' onClick={this.handleClick.bind(this)}></button>
            <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray)}</span>
        </div>
    )
    }
}


export default FilterString