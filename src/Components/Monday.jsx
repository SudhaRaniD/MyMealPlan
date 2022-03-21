import React from 'react'

import menu from './menu.json';
import './MenuTable.css';

function Monday() {
 
  const handleChange = (e, week, mealtype, mealitem) => { 

    if (e.target.checked){
      console.log('The checkbox was toggled ' + week.weekday + "----" + mealtype.name + "----" + mealitem.food); 
   } else {
    console.log('The checkbox was un toggled ' + week.weekday + "----" + mealtype.name + "----" + mealitem.food); 
   }
  }; 


  return (
    <div>Monday, Reading menu
      <br/><br/>
  

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
                        <table id="menuitems">
                          <tr>
                            <th>Item</th>
                            <th>Select</th>
                          </tr>
                        {
                          mealtype.menuitems.map(mealitem =>{
                            return(
                                <tr>
                                  <td id="mealidnone">{mealitem.id}</td>
                                  <td>{mealitem.food}</td>
                                  <td><input class="form-check-input" type="checkbox" value="" 
                                      id="flexCheckChecked" onChange={(e) => handleChange(e, week, mealtype, mealitem)}></input></td>
                                 
                                </tr>
                            )
                          })
                        }
                        </table>
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