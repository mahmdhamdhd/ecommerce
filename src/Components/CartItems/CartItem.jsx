import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
  const { all_product, cart, removeFromCart } = useContext(ShopContext);

  // Calculate subtotal and total price
  const subtotal = all_product.reduce((total, product) => {
    if (cart[product.id] > 0) {
      total += product.new_price * cart[product.id];
    }
    return total;
  }, 0);

  return (
    <div className="cartitems">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_product.map((e) => {
            if (cart[e.id] > 0) {
              return (
                <tr key={e.id}>
                  <td>
                    <img src={e.image} alt="" className="cartitems-product-icon" />
                  </td>
                  <td>{e.name}</td>
                  <td>${e.new_price}</td>
                  <td>
                    <button className="cartitems-quantity">{cart[e.id]}</button>
                  </td>
                  <td>${e.new_price * cart[e.id]}</td>
                  <td>
                    <img
                      src={remove_icon}
                      alt="remove"
                      className="cartitems-remove-icon"
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    />
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      {/* Move the totals and promo code section outside of tbody */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${subtotal}</h3>
            </div>
          </div>
          <button>Checkout</button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
