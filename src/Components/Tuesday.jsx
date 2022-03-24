import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import menu from './menu.json';
import './MenuTable.css';

function Tuesday() {

  const [data,setData]= useState(null);
  const [menutypevalue,setMenutypevalue]=useState('Select');

  const getData = (e) =>
  {
    setData(e.target.value)
  }

  const getMenutypevalue = (e) =>
  {
    e.preventDefault();
    setMenutypevalue({ menutypevalue: e.target.value });
  }

  let mtype;
  let mvalue;
  const handleMenuItemRequest = (e, week) => {
    e.preventDefault();

    console.log("handle request ");
    let newMenuItem = {
      "id": 1,
      "food": "Bread and Butterfdfdfdf",
      "menuflag": false
    };
    console.log("-------------------")
    console.log(menutypevalue)

    week.mealtype.filter(mealtype => mealtype.name === menutypevalue.menutypevalue)
    .map(mealtype => {
      return(
        mtype = mealtype.menuitems,
        mvalue = mtype.filter( x => x["id"] === Math.max(...mtype.map(x => x["id"])) ),
        newMenuItem.id = mvalue[0].id + 1,
        newMenuItem.food = data,
        mtype.push(newMenuItem),
        ReactDOM.render(<Tuesday />, document.getElementById('formTuesday'))
      );
    });
  }
 
  const handleChange = (e, week, mealtype, mealitem) => {
    if (e.target.checked){
      mealitem.menuflag = true;
      console.log('The checkbox was toggled ' + week.weekday + "----" + mealtype.name + "----" + mealitem.food); 
    } else {
      console.log('The checkbox was un toggled ' + week.weekday + "----" + mealtype.name + "----" + mealitem.food); 
      mealitem.menuflag = false;
    }
    ReactDOM.render(<Tuesday />, document.getElementById('formTuesday'));
  }; 


  return (
    <div>
    <form id="formTuesday">
      <div>
        <br/><br/>
        {
        menu.map(record => {
          return(
            record.week.filter(week => week.weekday === "Tuesday")
            .map(week => {
              return (
                <div>
                    <div className="float-container">
                        <div className="float-child">
                            <label>Select Menu Type: </label>
                            <select onChange={getMenutypevalue}>
                              <option value="Select">--Select--</option>
                              <option value="BreakFast">BreakFast</option>
                              <option value="Lunch">Lunch</option>
                              <option value="Dinner">Dinner</option>
                            </select>
                        </div>
                          
                        <div className="float-child">
                          <label>Add Menu Item: </label>
                          <input type="text" onChange={getData} />
                        </div>
                        <div className="float-child">
                          <button onClick={(e) => handleMenuItemRequest(e, week)}>Add</button>
                        </div> 
                      </div>
                      <br/><br/>
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
                </div>
              )
            })
          )
        })
        
      }
      </div>
    </form>
    </div>
  );
}

export default Tuesday;