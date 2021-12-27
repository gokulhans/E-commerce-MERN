import React from "react";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
      <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>

        {/* <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/edit/:id" element={<EditTodo />} />
          <Route path="/create" element={<CreateTodo />} />
        </Routes> */}
        
      </div>
    </>
  );
}

export default App;
