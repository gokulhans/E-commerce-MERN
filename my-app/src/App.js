import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";
import CreateTodo from "./CreateTodo";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/create" element={<CreateTodo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
