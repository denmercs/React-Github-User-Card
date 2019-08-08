import React, { Components } from "react";

const GithubList = props => {
  return (
    <div>
      <img src={props.user.avatar_url} alt="img profile" width="200" />
      <h2>{props.user.name}</h2>
      <p>{props.user.bio}</p>
      <p>{props.user.blog}</p>
    </div>
  );
};
export default GithubList;
