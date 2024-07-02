import React from 'react'


const filterNumbers = (numbers: number[]): number[] => {
    return numbers.filter(number => number % 2 === 0);
  };


const EvenNumbers = () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = filterNumbers(numbers);
    
  return (
    <div>
         <ul>
      {evenNumbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
      
    </div>
  )
}

export default EvenNumbers
