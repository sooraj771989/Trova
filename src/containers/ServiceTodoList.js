import React from "react";
import List from "../components/List";
import { connect } from "react-redux";
import { changeTaskStatus, removeTask } from "../actions";
import ServiceCard from "../components/ServiceCard";

const ServiceTodoList = ({ status, children, task, changeStatus, remove }) => (
  <div className="mt-10">
    {task.length ? (
      task.map(task => (
        <ServiceCard
          key={task.id}
          {...task}
          onChangeClick={changeStatus}
          onRemoveClick={remove}
        />
      ))
    ) : (
      <div className="w-10/12 font-bold  mx-auto mb-5 text-center shadow text-gray-600 project-card px-4 py-4">
        No more service requests
      </div>
    )}
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    task: state.task.filter(t => t.status === "ACTIVE")
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
)(ServiceTodoList);
