import React, {Component} from 'react'

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [{Rodney: true, Freeman: true, Corey: true}, {Rodney: false, Sabra: true, Scott: true}, {Corey: false, Freeman: false, Dale: false}],
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
            for (let key in this.state.unFilteredArray[i]) {
                if (key === this.state.userInput) {
                    filtered.push(this.state.unFilteredArray[i])
                    break
                }
            }
        }
        this.setState({filteredArray: filtered})
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={this.handleChange.bind(this)}></input>
                <button className='confirmationButton' onClick={this.handleClick.bind(this)}></button>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject