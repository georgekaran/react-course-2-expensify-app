import React from 'react'

const ButtonPrimary = (props) => (
    <button className={props.buttonClassName} type={props.type}>
        <span className={props.spanClassName}>{props.text}</span>
    </button>
)

export default ButtonPrimary