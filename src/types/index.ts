import { MouseEventHandler } from 'react'

export type ScrollPosition = {
  x: number
  y: number
}

export interface ButtonProps {
  /** Optional text to display on the button */
  text: string
  /** Event handler to be called when the button is clicked.
   *  Receives the MouseEvent that triggered the click. */
  onClick: MouseEventHandler<HTMLDivElement>
}
