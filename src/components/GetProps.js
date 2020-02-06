import React from 'react';
import {connect} from 'react-redux';

function GetProps(props) {
    return (
        <div>
            ovo je props.changer: {props.changer} <br/>
            ovo je props.colorText: {props.colorText}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        changer:state.changer,
        colorText: state.colorText
    }
}

export default connect(mapStateToProps)(GetProps)