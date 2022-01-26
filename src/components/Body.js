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
      // just in case of many elements to return , return GUID
      return  <Bobody key={i} cat={cat} onDel ={props.onDel}/> ;
    })}
    </div>
  );
};
