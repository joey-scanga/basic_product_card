import React from 'react'

export default function ItemNoCounter( {item_no} ) {
  return (
    <div className='item-no-counter'> 
        <button 
            className='minus-item'
            onClick={handleMinusItem}>-</button>
        <h4 className='num-item'>{item_no}</h4>
        <button 
            className='add-item'
            onClick={handleAddItem}>+</button>
    </div>
  )
}
