import React, { Component } from "react";

type Props = {};

type State = {};

class Square extends React.Component<Props, State> {
  state = {};

  render() {
    return <div className="h-[100px] w-[100px] bg-red-500">Square</div>;
  }
}

export default Square;
