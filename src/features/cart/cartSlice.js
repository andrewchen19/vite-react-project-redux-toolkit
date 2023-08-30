import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// import { openModal } from "../modal/modalSlice";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
  error: null,
};

// Create a Redux action that handles asynchronous operation
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (userId, thunkAPI) => {
    try {
      // console.log(userId);  // 312524
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState().modal.isOpen); // false
      // console.log(thunkAPI.dispatch(openModal()));

      const response = await axios.get(url);
      // console.log(response)

      return response.data;
    } catch (err) {
      // console.log(err); // AxiosError

      return thunkAPI.rejectWithValue(err.response.data.msg);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // we can mutate the state directly, don't have to return new state
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload;
      const newCarItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemId
      );
      state.cartItems = newCarItems;
    },
    increase: (state, action) => {
      const itemId = action.payload;
      // find() => return first element
      // 對該 element 的修改，會影響原本的 array (share the same object reference)
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );
      cartItem.amount += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === itemId
      );
      cartItem.amount -= 1;
    },
    calculateAll: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.map((cartItem) => {
        amount += cartItem.amount;
        total += cartItem.amount * cartItem.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// console.log(cartSlice);

// 輸出 slice.reducer
export default cartSlice.reducer;
// 輸出個別的 action
export const { clearCart, removeItem, increase, decrease, calculateAll } =
  cartSlice.actions;
