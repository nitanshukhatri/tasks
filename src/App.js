import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Todo } from "./View/Todo";

import { Header } from "./components/Header";
import configureStore from "./store";
import { Provider } from "react-redux";
import CompoundPattern from "./compound/compoundPattern";
import { ToDoRedux } from "./components/TodoRedux";
import { Tree } from "./View/tree-view";
import { SearchBar } from "./components/SearchBar";

const About = React.lazy(() => import("./View/About"));

function App() {
  const testList = [
    {
      id: 1,
      title: "Success",
      description: "This is a success toast component",
      backgroundColor: "#5cb85c",
      icon: "",
    },
    {
      id: 2,
      title: "Danger",
      description: "This is an error toast component",
      backgroundColor: "#d9534f",
      icon: "",
    },
  ];
  const store = configureStore();
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Todo />}></Route>
              <Route path="about" element={<About />} />
              <Route path="search" element={<CompoundPattern />} />
              <Route path="todo" element={<ToDoRedux />}></Route>
              <Route path="tree" element={<Tree />}></Route>
              <Route path="searchbar" element={<SearchBar />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
