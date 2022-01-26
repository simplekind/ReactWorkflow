import React from 'react';
import {Bobody} from './Bobody'

export const Body = (props) => {
  return (
    <div className="cont">
    <h1>
      Say hi Joe
    </h1>
    {(props.cats.length == 0)?<h2>"YOU DESTROYED ALL THE CATS!!"</h2>:""}
    {props.cats.map((cat,i)=>{
      return <div key={i}>
      {[ 
      <h3 >Hi!</h3>,
      <Bobody cat={cat} onDel ={props.onDel}/>
      ]}
      </div>
    })}
    </div>
  );
};
