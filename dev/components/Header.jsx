/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 30/10/16
 * Licence: See Readme
 */
/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React from 'react';

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */


/* ************************************* */
/* ********      COMPONENT      ******** */
/* ************************************* */
function Header() {
    const style = {
        fontSize: '24px',
        color: 'rgb(255, 255, 255)',
        lineHeight: '64px',
        fontWeight: 300,
        paddingLeft: '24px',
        backgroundColor: 'rgb(0, 188, 212)',
        marginBottom: '15px',
    };
    return (<div style={style}>React Editable Json Tree</div>);
}

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default Header;
