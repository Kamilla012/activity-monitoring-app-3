import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";

function TodoList(props) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = async () => {
    if (newTodo.trim() !== "") {
      const { data, error } = await supabase
        .from("todo")
        .insert([{ user_id: props.props, todo: newTodo, completed: false }]);
      if (data) {
        setTodos([...todos, data[0]]);
        setNewTodo("");
      }
    }
  };

  const removeTodo = async (id) => {
    try {
      // Remove the todo item from the database (if necessary)
      const { data, error } = await supabase.from("todo").delete().eq("id", id);

      if (data) {
        // The todo item was successfully removed from the database
        // The todos state will be updated automatically by the useEffect below
      } else if (error) {
        console.error("Error removing todo from the database:", error);
      }
    } catch (error) {
      console.error("Error removing todo:", error);
    }
  };

  const toggleComplete = async (id) => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      const updatedTodos = [...todos];
      updatedTodos[index] = {
        ...updatedTodos[index],
        completed: !updatedTodos[index].completed,
      };
      setTodos(updatedTodos);

      // Perform the update in the database (if necessary)
      try {
        const { data, error } = await supabase
          .from("todo")
          .update({ completed: updatedTodos[index].completed })
          .eq("id", id);
        if (data) {
          // Update was successful
        } else if (error) {
          console.error("Error updating todo:", error);
        }
      } catch (error) {
        console.error("Error updating todo in database:", error);
      }
    } else {
      console.error("Todo not found with id:", id);
    }
  };

  async function fetchTodo() {
    try {
      let { data: todo, error } = await supabase
        .from("todo")
        .select("*")
        .eq("user_id", props.props);
      setTodos(todo || []);
    } catch (error) {
      console.error("Error fetching todo data:", error);
    }
  }

  useEffect(() => {
    fetchTodo();
  }, [props.props]);

  // Use this useEffect to refresh the todos list whenever todos state changes
  useEffect(() => {
    fetchTodo();
  }, [todos]);

  return (
    <div className="max-w-md mx-auto mt-4 p-2 bg-gray-100 rounded">
      <h1 className="text-xl font-semibold mb-2">Todo List</h1>
      <div className="flex">
        <input
          type="text"
          className="rounded-l w-full p-2 text-sm"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-r px-3 py-1 text-sm"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="mt-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center bg-white rounded p-2 mb-1 shadow text-sm ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-2"
            />
            {todo.todo}
            <button
              className="text-red-500 hover:text-red-600"
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
