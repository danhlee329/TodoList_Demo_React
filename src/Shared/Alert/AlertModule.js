import React, { Component } from 'react';

const ALERT_INFO = "alertInfo";
const ALERT_WARNING = "alertWarning";
const ALERT_ERROR = "alertError";

//Base template (DO NOT EXPORT)
const AlertModule_Base = props => {
    //Check for alertType of message
    let alertTypeClass = "";

    switch(props.alertType) {
        case ALERT_WARNING:
            alertTypeClass = "alertModule_warning";        
            break;
        case ALERT_ERROR:
            alertTypeClass = "alertModule_error";
            break;    
        //case ALERT_INFO:
        default:
            alertTypeClass = "alertModule_info";
            break;                                
    }

    return (
        <div className={alertTypeClass}>
            <div>{props.subject}</div>
            <div>{props.msg}</div>
        </div>
    );
}

AlertModule_Base.propTypes = {
    alertType: React.PropTypes.string,//ALERT_INFO,
    subject: React.PropTypes.string,
    msg: React.PropTypes.string.isRequired
}

//Info Module
const AlertModule_Info = props => {
    return (
        <AlertModule_Base alertType={ALERT_INFO} subject={props.subject} msg={props.msg} />
    );
}

//Warning Module
const AlertModule_Warning = props => {
    return (
        <AlertModule_Base alertType={ALERT_WARNING} subject={props.subject} msg={props.msg} />
    );
}

//Error Module
const AlertModule_Error = props => {
    return (
        <AlertModule_Base alertType={ALERT_ERROR} subject={props.subject} msg={props.msg} />
    );
}

export { AlertModule_Info, AlertModule_Warning, AlertModule_Error };