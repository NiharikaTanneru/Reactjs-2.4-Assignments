import React, { useState } from 'react';
import { FaRegWindowClose } from "react-icons/fa";


const List = ({ peoplelist }) => {
  const [data,setData]=useState(peoplelist)
 const deletePeople=(id)=>{
  console.log(id)
  
  console.log(data);
  let newList=data.filter((people)=>{return people.id !== id})
  console.log(newList);
  setData(newList);
 }

  return (
    <>
      <h3>{data.length} birthdays today</h3>
      {data.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>  
            <span><button onClick={()=>{deletePeople(id)}} id={id}><FaRegWindowClose /></button></span> 
          </article>
        );
      })}
       <button onClick={() => setData([])}>clear all</button>
    </>
  );
};

export default List;
