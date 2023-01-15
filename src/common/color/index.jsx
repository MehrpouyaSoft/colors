import React from "react"
import classes from './style.module.scss'

export const ColorCard = ({ color, className }) => {
    return (
        <div style={{ backgroundColor: color }} className={`${classes.card} ${className || ''}`}></div>
    )
}

export default ColorCard