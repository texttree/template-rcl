import React, { CSSProperties } from 'react'
import { truncateText } from '../../utils/helper'
import { ButtonProps } from '../../types'

/**
 * Renders a button with the specified text and onClick handler.
 *
 * @param {ButtonProps} props - The props for the button.
 * @param {string} [props.text='default Text'] - The text to display on the button.
 * @param {() => void} [props.onClick=()=>{}] - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered button.
 */
const Button = ({
  text = 'default Text',
  onClick = () => {},
}: ButtonProps): JSX.Element => {
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
