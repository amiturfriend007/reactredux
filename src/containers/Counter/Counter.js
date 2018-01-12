import React, { Component } from 'react';
import {connect} from 'react-redux'; //connect is a function, higher order component to be used in export

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {    //This is not managed by redux
        counter: 0
    }

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
                default:
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDerementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />

                <hr />
                <button onClick={this.props.onStoreResults}>STORE RESULT</button>
                <ul>
                    {this.props.storedResults.map(strResult=>(
                        <li key={strResult.id} onClick={this.props.onDeleteResults}>{strResult.value}</li>
                    ))}    
                </ul>
            </div>
        );
    }
}

//mapStateToProps  state stored in redux as input returns js object which is a map of prop names and slices of state stored in redux
// will be executed by react redux package
const mapStateToProps=(state)=>{   //State managed by react-redux will reach out to redux which of coartse inturn will reach out to react  (initial state in our casels)
    return{
        //We define prop names
        ctr: state.counter, //Please give the counter by global state manage by redux
        storedResults: state.results
    };
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrementCounter: () => dispatch({type:'INCREMENT'}),
        onDerementCounter: () => dispatch({type:'DECREMENT'}),
        onAddCounter: () => dispatch({type:'ADD',val:10}),
        onSubtractCounter: () => dispatch({type:'SUBTRACT',val:15}),
        onStoreResults: () => dispatch({type:'STORE_RESULT'}),
        onDeleteResults: () => dispatch({type:'DELETE_RESULT'}),
 

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter);  
//Connect is a function which returns a higher order component
//To the first function we can pass some configuration parameter
//connect itself is a function which returns a function which takes component as input. it returns a higher order component
//two paremeter which state you want to get, which action which you want to dispatch