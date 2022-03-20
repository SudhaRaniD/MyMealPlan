import React from 'react'

import Records from './menu.json';

function Monday() {
 
  return (
    <div>Monday, Reading menu
      <br/><br/>
    {
      Records.map(record => {
        return(
          <div className= "box" key={record.id}>
            <strong>{record.name}</strong><br/>
           
            {record.Type.map(data =>{
              return(
                <div key ={record.id}>
                {data.food}
                </div>
              )
            })}
            </div>
        )
      })
    }
    </div>
  );
}

export default Monday;