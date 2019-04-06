import React from 'react';

export default (props) => (
  <div>
    <h2>Hello {props.name}</h2>
    <p>jakiś paragraf</p>
    {props.children}
  </div>
);
