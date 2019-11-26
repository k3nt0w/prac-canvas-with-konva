import React, { useState } from 'react'
import { Stage, Layer, Rect, Text } from 'react-konva'
import Konva from 'konva'

const ColoredRect = () => {
  const [color, setColor] = useState('green')

  const handleClick = () => {
    setColor(Konva.Util.getRandomColor())
  }

  return (
    <Rect
      x={200}
      y={200}
      width={100}
      height={100}
      fill={color}
      shadowBlur={5}
      onClick={handleClick}
    />
  )
}

export const KonvaSample = () => (
  <Stage width={window.innerWidth} height={window.innerHeight}>
    <Layer>
      <Text text="Try click on rect" />
      <ColoredRect />
    </Layer>
  </Stage>
)
