import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar" href="#">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a className="author" href="#">{faker.name.firstName()}</a>
        <div className="metadata">
          <span className="date">
            on {faker.date.recent().getDate()}/{faker.date.recent().getMonth()}/
            {faker.date.recent().getFullYear()} {faker.date.recent().getHours()}
            :{faker.date.recent().getMinutes()}
          </span>
        </div>
        <div className="text">
          {/* {props.text} */}
          {faker.lorem.sentence()}
        </div>
        <div className="actions">
          <a className="reply" href="#">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
