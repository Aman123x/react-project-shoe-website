import React,{useContext, useState} from 'react'
import ShoeContext from '../Context/ShoeContext';

const ShoeInput = () => {

    let {addInput,setAddInput,handleInput}=useContext(ShoeContext);

    function updateUser(e){
        let key=e.target.name;
        setAddInput({...addInput,[key]:e.target.value});
    }

    
  return (
    <div className='form-div'>
        <form className='form' onSubmit={handleInput}>
            <label>Shoe Name: </label><br/>
            <input type='text' onChange={updateUser} name='ShoeName' value={addInput.ShoeName}/><br/>

            <label>Shoe Description: </label><br/>
            <input type='text' onChange={updateUser} name='ShoeDes' value={addInput.ShoeDes}/><br/>

            <label>Price: </label><br/>
            <input type='number' onChange={updateUser} name='Price' value={addInput.Price}/><br/>

            <label>L: </label><br/>
            <input type='number' onChange={updateUser} name='SizeLarge' value={addInput.SizeLarge}/><br/>

            <label>M: </label><br/>
            <input type='number' onChange={updateUser} name='SizeMedium' value={addInput.SizeMedium}/><br/>

            <label>S: </label><br/>
            <input type='number' onChange={updateUser} name='SizeSmall' value={addInput.SizeSmall}/><br/>

            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default ShoeInput