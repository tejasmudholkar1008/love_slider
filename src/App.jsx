import { useState } from "react";
import {
  Timer,
  FilterSearchPagination,
  StopWatch,
  Pagination,
  LoveMessage,
  LoveSlider,
  ProgressBar,
  ScreenWidth,
  LoveSliderNew,
  ProductsApi,
  NavBar,
  HOC,
  HOCNew,
  useGetTodos,
} from "./Challenges";

export default function App() {
  const { data, error, loading, getTodos } = useGetTodos();
  console.log({ data });

  const [todo, setTodo] = useState(null);
  const [id, setId] = useState(null);
  const [status, setStatus] = useState(false);
  const [userId, setUserId] = useState(null);
  const [todoData, setTodoData] = useState();

  const [isAddItem, setIsAddItem] = useState(false);

  const add = () => {
    setIsAddItem(true);

    [
      ...data,
      {
        id,
        completed: status,
        todo,
        userId,
      },
    ];
  };

  return (
    <>
      <button onClick={getTodos}>Get Items</button>
      {data?.todos?.map((items) => {
        console.log({ items });
        return (
          <>
            <ul key={items.id}>
              <li>{items.todo}</li>
            </ul>
          </>
        );
      })}
      <button onClick={add}>Add Item</button>
      {isAddItem && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>id</label>
          <input name={id}></input>

          <label>todo</label>
          <input value={todo} onChange={(val) => setTodo(val)}></input>

          <label>status</label>
          <input value={status}></input>
        </div>
      )}
    </>
  );

  // return (
  //   <>
  //     {/* <FilterSearchPagination /> */}
  //     {/* <Timer /> */}
  //     {/* <StopWatch /> */}
  //     {/* <Pagination /> */}
  //     {/* <LoveMessage /> */}
  //     {/* <LoveSlider /> */}
  //     {/* <ProgressBar /> */}
  //     {/* <ScreenWidth /> */}
  //     {/* <LoveSliderNew /> */}
  //     {/* <ProductsApi /> */}
  //     {/* <NavBar /> */}
  //     {/* <HOC /> */}
  //     {/* <HOCNew /> */}
  //   </>
  // );
}
