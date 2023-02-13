import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateStatus } from "../store/todoSlice";
function Todo({ data, completed, category, id, handleEdit, todo }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 bg-white px-3 py-2 items-center justify-between">
      <div className="flex gap-2">
        <input type="checkbox" onClick={() => dispatch(updateStatus(id))} />
        <p className={`${completed === true ? "text-light" : ""} `}>{data}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-primary text-white p-1 rounded"
          onClick={() => handleEdit(id, todo)}
        >
          <FaEdit />
        </button>
        <button
          className="bg-danger text-white p-1 rounded"
          onClick={() => dispatch(deleteTodo(id))}
        >
          {" "}
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Todo;

/*
1) copyrights / copyright
2) title / title
3) Description / explanation


*/