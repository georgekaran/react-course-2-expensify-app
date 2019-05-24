import React from 'react'

const ButtonPrimary = (props) => (
    <button className={props.buttonClassName} type={props.type} onClick={props.onClick}>
        <span className={props.spanClassName}>{props.text}</span>
    </button>
)

export default ButtonPrimary