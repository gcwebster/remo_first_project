import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        state = {
            count: 0
        }
    }

    increment = () =>
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })

    render() {
        return (
            <div>
                <p>Current count: {this.state.count}</p>
                <button onClick={this.increment}>Increment count</button>
            </div>
        )
    }

}

export { Counter }