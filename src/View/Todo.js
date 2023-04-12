import React, { useEffect, useState } from "react";
import { TaskForm } from "../components/TaskForm";
import { VisibilityControl } from "../components/VisibilityControl";
import { Table } from "../components/Table";
import { useSelector } from "react-redux";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";

export const Todo = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const { list } = useSelector((state) => state.todo);
  const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, gaps, setPage, totalPages } = usePagination({
    contentPerPage: 2,
    count: list.length,
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setAllTasks(JSON.parse(data));
    }
  }, []);

  const toggleCheckBox = (task) => {
    setAllTasks(allTasks.map((t) => (t.value === task.value ? { ...t, done: !t.done } : t)));
  };

  const cleanTasks = () => {
    setAllTasks(allTasks.filter((task) => !task.done));
    setShowCompleted(false);
  };

  const editTodo = (val) => {
    setAllTasks(allTasks.map((todo) => (todo.id === val.id ? { ...todo, isEditing: !todo.isEditing } : todo)));
  };

  const editTask = (value, task) => {
    setAllTasks(allTasks.map((todo) => (todo.id === task.id ? { ...todo, value, isEditing: !todo.isEditing } : todo)));
  };

  return (
    <div className="todo-app">
      <TaskForm setAllTasks={setAllTasks} />
      <Table
        allTasks={list}
        editTodo={editTodo}
        editTask={editTask}
        showCompleted={showCompleted}
        toggleCheckBox={toggleCheckBox}
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}
      />
      <VisibilityControl
        setShowCompleted={(checked) => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
        isChecked={showCompleted}
      />
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
        gaps={gaps}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};
