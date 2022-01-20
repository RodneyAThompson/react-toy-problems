import React, {Component} from 'react'

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(e) {
        this.setState({userInput: e.target.value})
    }

    handleClick() {
        let result = ''
        let reverseStr = this.state.userInput.split('').reverse().join('')

        if (reverseStr === this.state.userInput) {
            result = `${this.state.userInput} is a palindrome!` 
        } else {
            result = `${this.state.userInput} is not a palindrome!`
        }
        this.setState({palindrome: result})
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={this.handleChange.bind(this)}></input>
                <button className='confirmationButton' onClick={this.handleClick.bind(this)}></button>
                <span className='resultsBox'>{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome