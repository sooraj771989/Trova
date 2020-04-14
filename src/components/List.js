import React from "react";
import { connect } from "react-redux";
import { changeTaskStatus, removeTask } from "../actions";
import RequestCard from "./RequestCard";

const List = ({ status, children, task, changeStatus, remove }) => (
  <div className="mt-10">
    {task.map(task => (
      <RequestCard
        key={task.id}
        {...task}
        onChangeClick={changeStatus}
        onRemoveClick={remove}
      />
    ))}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  console.log(state.task.filter(t => t.status === ownProps.status));
  return {
    task: state.task.filter(t => t.status === ownProps.status)
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
)(List);
