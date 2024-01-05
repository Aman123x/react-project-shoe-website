import React,{useState} from "react"
import ShoeContext from "./ShoeContext"



const ShoeProvider=(props)=>{

    const[addInput,setAddInput]=useState({
        ShoeName:"",
        ShoeDes:"",
        Price:"",
        SizeLarge:"",
        SizeMedium:"",
        SizeSmall:""
    })

    const[btn,setBtn]=useState([]);

    

    function handleInput(e){
        e.preventDefault();
        const newData={...addInput}
        setBtn([...btn,newData]);
        setAddInput({
            ShoeName: "",
            ShoeDes: "",
            Price: "",
            SizeLarge: "",
            SizeMedium: "",
            SizeSmall: "",
        });
        
    }

    const handleDecrease = (size, index) => {
        setBtn((prevBtn) =>
            prevBtn.map((item, i) => {
                if (i === index && item[size] > 0) {
                    // Decrease the quantity of the selected size by one
                    return {
                        ...item,
                        [size]: item[size] - 1,
                    };
                }
                return item;
            })
        );
    };


    return(
        <ShoeContext.Provider value={{addInput,setAddInput,handleInput,btn,handleDecrease}}>
            {props.children}
        </ShoeContext.Provider>
    )
}

export default ShoeProvider