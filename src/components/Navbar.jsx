import { CartIcon } from "../data";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  //  console.log(amount);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <span className="total-amount">{amount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
