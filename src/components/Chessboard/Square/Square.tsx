import * as React from "react";

interface Props {
  row?: number;
  column?: number;
  color?: string;
}

interface State {
  color?: string;
}

class Square extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
  }

  render() {
    return (
      <div
        className="h-[100px] w-[100px] text-[#FFFFFF]"
        style={{ background: this.props.color }}
      >
        {`${this.props.row}-${this.props.column}`}
      </div>
    );
  }
}

export default Square;
