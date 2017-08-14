import React from 'react';

const style = {
  borderRadius: '10px'
};

export default function Button(props) {
  return (
    <button style={style} onClick={props.onClick}>{props.text}</button>
  );
}

