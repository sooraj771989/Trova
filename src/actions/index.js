export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const removeTask = id => {
  return {
    type: "REMOVE_TASK",
    id
  };
};

export const changeTaskStatus = id => {
  return {
    type: "CHANGE_TASK_STATUS",
    id
  };
};
