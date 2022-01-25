import React from 'react';
import {Bobody} from './Bobody'

export const Body = (props) => {
  return (
    <div className="cont">
    <h1>
      Say hi Joe
    </h1>
    {props.cats.map((cat)=>{
      return (
      <>
      <h3>Hi!</h3>
      <Bobody key ={cat.n} cat={cat} onDel ={props.onDel}/>
      </>
    )})}
    </div>
  );
};
