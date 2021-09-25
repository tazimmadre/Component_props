import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div>
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        <ApprovalCard>
          <div>
          <h4>Warning!</h4>
          Are you Sure?
          </div>
        </ApprovalCard>
        <ApprovalCard><CommentDetail text="Amazing Video want more" /></ApprovalCard>
        <ApprovalCard><CommentDetail text="I did't like it much" /></ApprovalCard>
        <ApprovalCard><CommentDetail text="Hello guys any one here" /></ApprovalCard>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
