import { ChevronUp, ChevronDown } from "../data";

import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      {/* img */}
      <img src={img} alt={title} />
      {/* info */}
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          type="button"
          className="remove-btn"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      {/* amount */}
      <div>
        <button
          type="button"
          className="amount-btn"
          onClick={() => dispatch(increase(id))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          type="button"
          className="amount-btn"
          onClick={() => {
            // 如果 item 數量等於 1 時 (按下去就會變成 0)，移除該 item
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
