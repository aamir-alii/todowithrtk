import Category from "./components/Category";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, saveAll } from "./store/todoSlice";
const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  if (todos.length) localStorage.setItem("todos", JSON.stringify(todos));
  const [input, setInput] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [update, setUpdate] = useState({
    data: "",
    id: 0,
    category: "",
    state: false,
  });
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleEdit = (id, todo) => {
    setUpdate({ data: todo.data, id, category: todo.category, state: true });
    setInput(todo.data);
    setCheckbox(todo.category);
  };
  const handleSubmit = () => {
    const id = Date.now();
    if (input && checkbox) {
      if (update.state) {
        dispatch(
          editTodo({
            id: update.id,
            data: input,
            category: checkbox,
            completed: false,
          })
        );
      } else
        dispatch(
          addTodo({ id, data: input, category: checkbox, completed: false })
        );
      setInput("");
      setUpdate({ state: false });
      setCheckbox("");
    }
  };
  useEffect(() => {
    console.log("Effect Called");
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    dispatch(saveAll(localTodos));
  }, []);
  return (
    <div className="bg-white h-[100vh] flex items-center justify-center">
      <div className="md:w-[40%] sm:w-[100%] bg-light h-[80vh] py-3 px-5 rounded">
        <h3 className="font-bold text-lg mb-2">Hello</h3>
        <h4>CREATE A TODO</h4>
        <p>What's on your schedule?</p>
        <input
          type="text"
          value={input}
          onChange={(event) => handleInput(event)}
          className="bg-white px-2 py-2 mt-2 w-[100%] "
          placeholder="E.g: Read at 8PM today"
        />
        <p className="mt-3">Choose a category</p>
        <div className="flex gap-2 mt-2">
          <Category
            category="Business"
            checkbox={checkbox}
            setCheckbox={setCheckbox}
          />
          <Category
            category="Personal"
            checkbox={checkbox}
            setCheckbox={setCheckbox}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-primary my-3 w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray"
          disabled={!checkbox ? true : false}
        >
          {update.state ? "Update Todo" : "Add Todo"}
        </button>
        <p>Todo List</p>
        <div className="flex flex-col gap-1">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              handleEdit={handleEdit}
              id={todo.id}
              completed={todo.completed}
              data={todo.data}
              category={todo.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
