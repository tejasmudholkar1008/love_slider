import { creatSlice } from "@reduxjs/toolkit";

//counterSlice.js
const counterSlice = creatSlice({
  name: "counter",
  initialState: { value: 0 },
  reducer: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;

//App.js
import { useDispatch, useSelector } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  const incrementCount = () => {
    dispatch(increment);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementCount}>increment</button>
    </>
  );
}
