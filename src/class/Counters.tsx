import { Component } from "react";

type CounterProps = {
    message: string
}

type Counterstate = {
    count: number
}

// the count value is 5
export class Counters extends Component<CounterProps, Counterstate>{
    state={
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}