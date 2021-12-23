import React from 'react';

function Button(props: any) {
  const { onClick, className } = props;
  return (
    <button onClick={() => onClick()} className={className}>
      {props.children}
    </button>
  );
}

export default Button;
