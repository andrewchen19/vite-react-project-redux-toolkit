// icons (set up as component, so this file should be .jsx)
export const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
};

export const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export const ChevronUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
};

// cartItems
export const cartItems = [
  {
    id: "rec1JZlfCIBOPdcT2",
    title: "Samsung Galaxy S8",
    price: "399.99",
    img: "https://images2.imgbox.com/c2/14/zedmXgs6_o.png",
    amount: 1,
  },
  {
    id: "recB6qcHPxb62YJ75",
    title: "google pixel",
    price: "499.99",
    img: "https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png",
    amount: 1,
  },
  {
    id: "recdRxBsE14Rr2VuJ",
    title: "Xiaomi Redmi Note 2",
    price: "699.99",
    img: "https://images2.imgbox.com/4f/3d/WN3GvciF_o.png",
    amount: 1,
  },
  {
    id: "recwTo160XST3PIoW",
    title: "Samsung Galaxy S7",
    price: "599.99 ",
    img: "https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png",
    amount: 1,
  },
];
