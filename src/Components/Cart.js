import React, { useState, useContext } from "react";
import Modal from "react-modal";
import ShoeContext from "../Context/ShoeContext";

const Cart = () => {
  const { cartInput } = useContext(ShoeContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Calculate the total count and total cost using reduce
  const { totalCount, totalCost } = cartInput.reduce(
    (accumulator, item) => {
      const itemCount = item.counts.reduce((sum, count) => sum + count, 0);
      const itemCost = item.Price * itemCount;

      return {
        totalCount: accumulator.totalCount + itemCount,
        totalCost: accumulator.totalCost + itemCost,
      };
    },
    { totalCount: 0, totalCost: 0 }
  );

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>
        <h2>Cart {totalCount}</h2>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Cart Modal"
        style={{
          content: {
            width: "800px",
            height: "400px",
            margin: "auto", // Center the modal
          },
        }}
      >
        <h2>Shopping Cart</h2>
        {cartInput.map((item, index) => (
          <div key={index}>
            <p>{item.ShoeName}</p>
            <p>Price: {item.Price}</p>
            {/* Display Sizes and Counts */}
            {item.sizes && item.counts && item.sizes.length > 0 && (
              <div>
                <span>Sizes: </span>

                {item.sizes.map((size, sizeIndex) => (
                  <span key={sizeIndex}>
                    {item.counts[sizeIndex]}{" "}
                    {size === "SizeLarge"
                      ? "L || "
                      : size === "SizeMedium"
                      ? "M || "
                      : "S || "}
                  </span>
                ))}
              </div>
            )}
            <hr />
          </div>
        ))}
        {totalCount !== 0 && (
          <>
            <button onClick={() => setModalIsOpen(false)}>Cancel</button>
            <h1>Total: ${totalCost.toFixed(2)}</h1>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Cart;
