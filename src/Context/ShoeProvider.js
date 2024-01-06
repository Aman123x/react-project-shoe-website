import React, { useState } from "react";
import ShoeContext from "./ShoeContext";

const ShoeProvider = (props) => {
  const [addInput, setAddInput] = useState({
    ShoeName: "",
    ShoeDes: "",
    Price: "",
    SizeLarge: "",
    SizeMedium: "",
    SizeSmall: "",
  });

  const [btn, setBtn] = useState([]);
  const [cartInput, setCartInput] = useState([]);

  function handleInput(e) {
    e.preventDefault();
    const newData = { ...addInput };
    setBtn([...btn, newData]);
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
          const updatedItem = {
            ...item,
            [size]: item[size] - 1,
          };

          // Check if an item with the same name exists in the cart
          const existingCartItemIndex = cartInput.findIndex(
            (cartItem) => cartItem.ShoeName === updatedItem.ShoeName
          );

          if (existingCartItemIndex !== -1) {
            // If the item already exists in the cart, update its count and add size
            setCartInput((prevCartInput) => {
              const updatedCart = [...prevCartInput];
              const existingItem = updatedCart[existingCartItemIndex];

              // Check if the size is already present for the existing item
              const sizeIndex = existingItem.sizes.findIndex(
                (existingSize) => existingSize === size
              );

              if (sizeIndex !== -1) {
                // If size exists, update its count
                existingItem.counts[sizeIndex] += 1;
              } else {
                // If size doesn't exist, add size with count 1
                existingItem.sizes.push(size);
                existingItem.counts.push(1);
              }

              return updatedCart;
            });
          } else {
            // If the item is not in the cart, add it
            setCartInput((prevCartInput) => [
              ...prevCartInput,
              {
                ShoeName: updatedItem.ShoeName,
                Price: updatedItem.Price,
                sizes: [size],
                counts: [1],
              },
            ]);
          }

          return updatedItem;
        }
        return item;
      })
    );
  };

//   console.log(cartInput);

  return (
    <ShoeContext.Provider
      value={{
        addInput,
        setAddInput,
        handleInput,
        btn,
        handleDecrease,
        cartInput,
      }}
    >
      {props.children}
    </ShoeContext.Provider>
  );
};

export default ShoeProvider;
