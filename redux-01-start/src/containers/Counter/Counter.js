import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreator from '../../store/actions/index';
import {connect} from 'react-redux';

class Counter extends Component {
    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <button onClick={() =>this.props.onAddResultCounter(this.props.ctr)} >Store Result</button>
                <ul>
                {this.props.results.map(result => (
                    <li key={result.id} onClick={() =>this.props.onSubResultCounter(result.id)}>{result.value}</li>
                )

                )}
                    
                </ul>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        ctr:state.ctr.counter,
        results:state.res.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter:() => dispatch(actionCreator.increment()),
        onDecrementCounter:() => dispatch(actionCreator.decrement()),
        onAddCounter:() => dispatch(actionCreator.add(5)),
        onSubtractCounter:() => dispatch(actionCreator.sub(5)),
        onAddResultCounter:(result) => dispatch(actionCreator.addResult(result)),
        onSubResultCounter:(id) => dispatch(actionCreator.subResult(id))
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Counter);