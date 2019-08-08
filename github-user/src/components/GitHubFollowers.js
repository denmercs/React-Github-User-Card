import React, { Components } from "react";

const GitHubFollowers = props => {
  console.log("FOLLOWERS", props);
  return (
    <>
      <img src={props.followers.avatar_url} width="200" />
      <p>{props.followers.login}</p>
    </>
  );
};
export default GitHubFollowers;
