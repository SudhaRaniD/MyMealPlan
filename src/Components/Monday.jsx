import React from 'react'
import ReactDOM from 'react-dom';
import menu from './menu.json';
import './MenuTable.css';

function Monday() {

  const handleChange = (e, week, mealtype, mealitem) => {
    if (e.target.checked) {
      mealitem.menuflag = true;
      console.log('The checkbox was toggled ' + week.weekday + "----" + mealtype.name + "----" + mealitem.food); 
    } else {
      console.log('The checkbox was un toggled ' + week.weekday + "----" + mealtype.name + "----" + mealitem.food); 
      mealitem.menuflag = false;
    }

    ReactDOM.render(<Monday />, document.getElementById('formMonday'));
  };


  return (
    <form id="formMonday">
      <div>

        <input type="text" />

        <br/><br/>
        {
        menu.map(record => {
          return(
            record.week.filter(week => week.weekday === "Monday")
            .map(week => {
              return (
                <div className= "box" key={week.weekday}>
                  <strong>{week.weekday} - {week.weekdate}</strong><br/>
                  {
                    week.mealtype.map(mealtype => {
                      return(
                        <div key={mealtype.mealid}>
                          {mealtype.name}   
                          <table id="menuitems">
                            <thead>
                              <tr>
                                <th>Item</th>
                                <th>Select</th>
                              </tr>
                            </thead>
                          {
                            mealtype.menuitems.map(mealitem =>{
                              return(
                                <tbody>
                                  <tr>
                                    <td id="mealidnone">{mealitem.id}</td>
                                    <td>{mealitem.food}</td>
                                    <td><input className="form-check-input" type="checkbox" value={mealitem.menuflag} checked={mealitem.menuflag}
                                        id="flexCheckChecked" onChange={(e) => handleChange(e, week, mealtype, mealitem)}></input>
                                    </td>
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

export default Monday;