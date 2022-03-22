import React from 'react'
import ReactDOM from 'react-dom';
import menu from './menu.json';
import './MenuTable.css';

function MealSummary() {

  return (
    <form id="formFriday">
      <div>
        <br/><br/>
        {
        menu.map(record => {
          return(
            record.week.filter(week => week.weekday !== "")
            .map(week => {
              return (
                <div className= "box" key={week.weekday}>
                  <strong>{week.weekday} - {week.weekdate}</strong><br/>
                  {
                    week.mealtype.map(mealtype => {
                      return(
                        <div key={mealtype.mealid}>
                          {mealtype.name} - {mealtype.calorie}
                          <table id="menuitems">
                            <thead>
                              <tr>
                                <th>Item</th>
                              </tr>
                            </thead>
                          {
                            mealtype.menuitems.filter(mealitems => mealitems.menuflag === true)
                            .map(mealitem =>{
                              return(
                                <tbody>
                                  <tr>
                                    <td id="mealidnone">{mealitem.id}</td>
                                    <td>{mealitem.food}</td>
                                   
                                  </tr>
                                </tbody>
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
    </form>
  );
}

export default MealSummary;