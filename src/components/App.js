import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, increment_5, decrement_5} from '../actions';

function App() {
    //instead of mapStateToProps
    //there is state:
    const counter = useSelector(state=> state.counter);
    const logged = useSelector(state => state.logged);
	//this.setState (reducer)
    const dispatch = useDispatch();
    return (
        <div className="ui container segment" style={{marginTop:'40px'}}>
            <div className="ui inverted segment">
                <i className="calculator icon" style={{float:"left", fontSize:"30px", marginRight:"50px", marginTop:"2px"}}></i>
                <b style={{fontSize:"30px", textAlign:"center"}}>REDUX Counter: <b style={{color:"red"}}>{counter}</b> </b>
            </div>
            <div className="ui inverted segment">
                <div className="two ui buttons">
                    <button onClick={()=>dispatch(increment())} className=" positive ui button">Up</button>
                    <button onClick={()=>dispatch(decrement())} className="negative ui button">Down</button>
                </div> 
                <br/> <br/>
                <div className="two ui buttons">
                    <button onClick={()=>dispatch(increment_5())} className="positive ui button">Up 5</button>
                    <button onClick={()=>dispatch(decrement_5())} className="negative ui button">Down 5</button>
                </div>
            </div>
            {logged ? "You're not logged in" : ""}
        </div>
    )
}

export default App
