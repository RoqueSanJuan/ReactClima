import React from "react";

const TestLoader = (props) => {
  return (
      <div class="ui active dimmer">
        <div class="ui big text loader">{props.message}</div>
      </div>
  );
};

TestLoader.defaultProps={
    message: 'Loading ...'
}

export default TestLoader;
