import React from "react";
import Navbar from "./Components/NavBar";
import { BrowserRouter as Router} from 'react-router-dom';
import dateFormat from 'dateformat';
import menu from './Components/menu.json';

const handleChange = (menu) => {

  var curr = new Date();
  console.log("curr : " +curr);
  var d = new Date(curr);
  console.log("d : " + d);
  console.log("d : " + d.getDay());
  var diff = d.getDate() - 1;
  console.log("diff : " + diff);
  var newdate = new Date(d.setDate(diff));
  console.log("newdate : " + newdate);
  var date = dateFormat(newdate,"dd/mm/yyyy")
  console.log("date : " + dateFormat(newdate,"dd/mm/yyyy"));

  menu.map(record => {
    return(
      record.week.filter(week => week.weekday === "Monday")
      .map(week => {
        console.log(week.weekday);
        week.weekdate = date;
        return week;
      })
    )
  });

  menu.map(record => {
    return(
      record.week.filter(week => week.weekday === "Monday")
      .map(week => {
        console.log(week.weekday);
        return week;
      })
    )
  });

  menu.map(record => {
    return(
      record.week.filter(week => week.weekday === "Monday")
      .map(week => {
        console.log(week.weekday);
        return week;
      })
    )
  });

  menu.map(record => {
    return(
      record.week.filter(week => week.weekday === "Monday")
      .map(week => {
        console.log(week.weekday);
        return week;
      })
    )
  });

  menu.map(record => {
    return(
      record.week.filter(week => week.weekday === "Monday")
      .map(week => {
        console.log(week.weekday);
        return week;
      })
    )
  });


    // var curr = new Date();
    // var d = new Date(curr);
    // var diff = d.getDate() - 1;
    // var newdate = new Date(d.setDate(diff));
    // console.log("current diff : " + dateFormat(newdate,"dd/mm/yyyy"));
}



function App() {
  handleChange(menu);
  return (
    <Router basename="/">
      <Navbar />
    </Router>   
  );
}

export default App;