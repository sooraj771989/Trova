import React from "react";

const RequestCard = ({ id, text, executor, onChangeClick, onRemoveClick }) => {
  return (
    <div className="w-10/12 mx-auto mb-5 shadow project-card px-4 py-4">
      <p className="card-text font-bold text-orange-600 mb-4">
        Pending Requests
      </p>
      <p className="card-text font-bold text-blue-600 mb-0">{executor}</p>
      <p className="card-text font-bold ">{text}</p>
      <div className="w-8/12 lg:w-6/12 mx-auto flex py-4 items-center justify-between">
        <button
          className="btn btn-primary-outline mr-3"
          onClick={() => onRemoveClick(id)}
        >
          Reschedule
        </button>
        <button
          className="btn btn-primary mr-3"
          onClick={() => onChangeClick(id)}
        >
          Accept Request
        </button>
        <div className="flex flex-col text-blue-600 justify-center font-bold">
          <div className="text-center">. . .</div>
          <div className="text-center">More</div>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
