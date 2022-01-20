import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleInput(e) {
        this.setState({userInput: e.target.value})
    }

    hanldeClick() {
        let arrOfNums = this.state.userInput.split(',')
        let evens = []
        let odds = []
        for (let i = 0; i < arrOfNums.length; i++) {
            let curretNum = Number(arrOfNums[i])
            if (curretNum % 2 === 0) {
                evens.push(curretNum)
            } else {
                odds.push(curretNum)
            }
        }
        this.setState({evenArray: evens, oddArray: odds})
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>EvensAndOdds</h4>
                <input className='inputLine' onChange={this.handleInput.bind(this)}></input>
                <button className='confirmationButton' onClick={this.hanldeClick.bind(this)}></button>
                <span className='resultsBox'>Evens: {this.state.evenArray.join(', ')}</span>
                <span className='resultsBox'>Odds: {this.state.oddArray.join(', ')}</span>
            </div>
        )
    }
}

export default EvenAndOdd