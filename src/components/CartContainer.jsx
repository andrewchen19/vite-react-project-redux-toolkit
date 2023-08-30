import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <h2>your bag</h2>
        <h3 className="empty-cart">is currently empty</h3>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>your bag</h2>
      {cartItems.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
      <footer className="cart-footer">
        <hr />
        <div className="cart-total">
          <h4>
            total<span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => dispatch(openModal())}
        >
          clear all
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
