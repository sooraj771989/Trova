const initialState = [
  { id: "01", executor: "Jason", text: "Title 1", status: "PENDING" },
  { id: "02", executor: "Sam", text: "Title 2", status: "PENDING" },
  { id: "03", executor: "Kate", text: "Title 3", status: "PENDING" },
  { id: "04", executor: "All", text: "Title 4", status: "PENDING" },
  { id: "05", executor: "Sam", text: "Title 5", status: "PENDING" },
  { id: "06", executor: "Jason", text: "Title 6", status: "PENDING" }
];

const statuses = ["PENDING", "ACTIVE", "PAYMENT"];

const task = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        id: action.id,
        text: action.text,
        executor: action.executor,
        status: "PENDING"
      };
    case "REMOVE_TASK":
      if (state.id === action.id) {
        return false;
      }
      return true;
    case "CHANGE_TASK_STATUS":
      if (state.id !== action.id) {
        return state;
      }
      let statusNum = statuses.indexOf(state.status);
      const nextStatus =
        statusNum === 2 ? statuses[0] : statuses[statusNum + 1];

      return {
        ...state,
        status: nextStatus
      };
    default:
      return state;
  }
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, task(undefined, action)];
    case "REMOVE_TASK":
      return state.filter(t => task(t, action));
    case "CHANGE_TASK_STATUS":
      return state.map(t => task(t, action));
    default:
      return state;
  }
};

export default tasks;
