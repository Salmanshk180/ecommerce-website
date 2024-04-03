import React from "react";

interface Props {
  text: string;
  borderRadius?: string;
  border?: string | number;
  color?: string;
  backgroundColor?: string;
  padding?: string;
  fontSize?: number;
}

const Button = (props: Props) => {
  return (
    <React.Fragment>
      <button
        style={{
          fontSize: props.fontSize,
          color: props.color,
          backgroundColor: props.backgroundColor,
          padding: props.padding,
          borderRadius: props.borderRadius,
          border: props.border,
        }}
      >
        {props.text}
      </button>
    </React.Fragment>
  );
};

export default Button;
