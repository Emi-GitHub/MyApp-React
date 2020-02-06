import React from 'react';
import {useSelector, useDispatch, connect} from 'react-redux';
import {change_text, change_color} from '../actions';
import GetProps from './GetProps';
import ReduxForm from './ReduxForm';
import SecondForm from './SecondForm';

function App() {
    //instead of mapStateToProps
    //there is state:
    const changer = useSelector(state=> state.changer);
    const colorText = useSelector(state=>state.colorText);
    //this.setState (reducer)
    const dispatch = useDispatch();
    console.log(colorText)
    return (
        <div>
            <div className="ui segment container" style={{marginTop:"40px", backgroundColor:"pink"}}>
                <form className="ui form">
                    <div>Click on text bellow to change it!</div>
                    <div className="ui segment" onClick={()=>dispatch(change_color())}>
                        <h2 onClick={()=>dispatch(change_text())} style={{color:colorText}}>{changer} </h2>
                    </div>
                </form>
                <div className="ui segment" style={{backgroundColor:"pink"}} >
                    <GetProps />
                </div>
            </div>
            <div  className="ui segment container" style={{marginTop:"40px", backgroundColor:"pink"}}>
                <h2>REDUX FORM</h2>
                <ReduxForm />
            </div>
            <div  className="ui segment container" style={{marginTop:"40px", backgroundColor:"skyblue"}}>
                <h2>SECOND REDUX FORM</h2>
                <SecondForm />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        changer:state.changer,
        colorText: state.colorText
    }
}

export default connect(mapStateToProps)(App);
