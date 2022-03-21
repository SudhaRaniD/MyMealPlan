import React from 'react'

import menu from './menu.json';

function Monday() {
 
  return (
    <div>Monday, Reading menu
      <br/><br/>
    {/* {
       menu.map(record => {
        return(
          record.week.map(week => { 
            return(
          <div className= "box" key={week.weekday}>
            <strong>{week.weekday}</strong><br/>
            </div>
            )
          })
        )
      })
      
    } */}

{
       menu.map(record => {
        return(
          record.week.filter(week => week.weekday === "Monday")
          .map(week => {
            return (
              <div className= "box" key={week.weekday}>
                <strong>{week.weekday}</strong><br/>

                {
                  week.mealtype.map(mealtype => {
                    return(
                      <div key ={mealtype.mealid}>
                        {mealtype.name} - {mealtype.calorie}
                        {
                          mealtype.menuitems.map(mealitem =>{
                            return(
                              <div key ={mealitem.id}>
                                {mealitem.food}
                                <div>
                                  <button id={mealitem.id} key ={mealitem.id}>Add</button>
                                </div>
                              </div>
                              
                            )
                          })
                        }
                      </div>
                    )
                  })
                }

              </div>
            )
          })
        )
      })
      
    }
    </div>
  );
}

export default Monday;