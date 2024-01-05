import React, { useContext } from 'react'
import ShoeContext from '../Context/ShoeContext'

const ShoeDisplay = () => {

  let {btn,handleDecrease}=useContext(ShoeContext);

  return (
    <div>
        {btn.map((item, index) => (
            <div className='display' key={index}>
                <p>{item.ShoeName}</p>
                <p>{item.ShoeDes}</p>
                <p>{item.Price}</p>
                {item.SizeLarge > 0 && (
                    <>
                        <button onClick={() => handleDecrease('SizeLarge', index)}>Buy Large: {item.SizeLarge}</button>
                    </>
                )}
                {item.SizeMedium > 0 && (
                    <>
                        <button onClick={() => handleDecrease('SizeMedium', index)}>Buy Medium: {item.SizeMedium}</button>
                    </>
                )}
                {item.SizeSmall > 0 && (
                    <>
                        <button onClick={() => handleDecrease('SizeSmall', index)}>Buy Small: {item.SizeSmall}</button>
                    </>
                )}
            </div>
        ))}
    </div>
  );
}

export default ShoeDisplay