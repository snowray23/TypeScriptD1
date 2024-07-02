import React from 'react'

const ColorList = () => {
    const colors: string[] = ["Red", "Orange", "Blue", "Pink", "Lavender"];


  return (
    <div>
         <ul>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
      
    </div>
  )
}

export default ColorList
