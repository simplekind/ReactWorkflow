import React from 'react';

export const Bobody = ({cat,onDel}) => {
  return (<div>
    <h2>
      <p>
        {cat.dogs}
      </p>
      <button className="btn btn-sm btn-danger" onClick={function(){onDel(cat.dogs)}}>DELETO RED</button>
    </h2>
  </div>);
};
