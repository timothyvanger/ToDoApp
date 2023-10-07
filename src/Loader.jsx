import { FormContainer } from "./containers/FormContainer";
import { ToDoListContainer } from "./containers/ToDoListContainer";
import { EditContainer } from "./containers/EditContainer";

import { useState, useRef, useEffect } from "react";

export const Loader = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [toDo, setToDo] = useState(() => {
    const localItem = window.localStorage.getItem("ITEMS");
    if (!localItem) return [];
    return JSON.parse(localItem);
  });
  const [filterToDos, setFilterToDos] = useState(toDo);
  const editId = useRef();
  useEffect(() => {
    setFilterToDos(toDo);

    window.localStorage.setItem("ITEMS", JSON.stringify(toDo));
  }, [toDo]);

  const addToDo = (title, description, priority, color) => {
    setToDo((previousTodo) => {
      return [
        ...previousTodo,
        {
          title: title,
          description: description,
          priority: priority,
          id: crypto.randomUUID(),
          completed: false,
          color: color,
        },
      ];
    });
  };
  const handleDelete = (id) => {
    setToDo((previousTodo) => {
      return previousTodo.filter((todo) => todo.id !== id);
    });
  };
  const editToDo = (title, description, priority, color) => {
    setToDo((previousTodo) => {
      return previousTodo.map((todo) => {
        if (todo.id === editId.current) {
          if (title === "") title = todo.title;
          if (description === "") description = todo.description;
          if (priority === "") {
            priority = todo.priority;
            color = todo.color;
          }
          return { ...todo, title, description, priority, color };
        }
        return todo;
      });
    });
  };
  const toggleChecked = (id, completed) => {
    setToDo((previousTodo) => {
      return previousTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  };
  const toggleEdit = (id) => {
    editId.current = id;
    setIsEdit(true);
  };

  return (
    <>
      {isEdit && <EditContainer setIsEdit={setIsEdit} editToDo={editToDo} />}
      <FormContainer
        addToDo={addToDo}
        toDo={toDo}
        isFiltering={isFiltering}
        setIsFiltering={setIsFiltering}
        setFilterToDos={setFilterToDos}
        filterToDos={filterToDos}
      />
      <div className="content-container">
        <ToDoListContainer
          toggleEdit={toggleEdit}
          toDo={toDo}
          toggleChecked={toggleChecked}
          handleDelete={handleDelete}
          isFiltering={isFiltering}
          setIsFiltering={setIsFiltering}
          filterToDos={filterToDos}
        />
      </div>
    </>
  );
};
