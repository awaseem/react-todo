import React from 'react';

export default function Input(props) {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
}