import React, { CSSProperties } from 'react'
import { truncateText } from '../../utils/helper'
import { ButtonProps } from '../../types'

/**
 * Renders a button with the specified text and onClick handler.
 */
const Button = ({ text = 'default Text', onClick = () => {} }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    cursor: 'pointer',
    background: '#174cc8',
    color: 'white',
    display: 'inline-block',
    padding: '10px',
    borderRadius: '5px',
  }

  return (
    <div style={buttonStyle} onClick={onClick}>
      {truncateText(text, 10)}
    </div>
  )
}

export default Button
