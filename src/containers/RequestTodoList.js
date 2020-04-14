import React from "react";
import { connect } from "react-redux";
import { changeTaskStatus, removeTask } from "../actions";
import RequestCard from "../components/RequestCard";
import { push } from "react-router-redux";

const RequestTodoList = ({ status, children, task, changeStatus, remove }) => (
  <div className="mt-10">
    {task.length ? (
      task.map(task => (
        <div>
          <RequestCard
            key={task.id}
            {...task}
            onChangeClick={changeStatus}
            onRemoveClick={remove}
          />
        </div>
      ))
    ) : (
      <div className="w-10/12 font-bold  mx-auto mb-5 text-center shadow project-card px-4 text-gray-600 py-4">
        No more service requests
      </div>
    )}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    task: state.task.filter(t => t.status === "PENDING")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeStatus: id => {
      dispatch(changeTaskStatus(id));
    },
    remove: id => {
      dispatch(removeTask(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestTodoList);
