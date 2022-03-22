import dateFormat from 'dateformat';

export const handleChange = (menu) => {


  var currentDate = new Date();
  var monday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1)).toUTCString();
  var tuesday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 2)).toUTCString();
  var wednesday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 3)).toUTCString();
  var thursday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 4)).toUTCString();
  var friday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 5)).toUTCString();
  console.log(dateFormat(monday, "dd/mm/yyyy"), dateFormat(tuesday, "dd/mm/yyyy"), dateFormat(wednesday, "dd/mm/yyyy"), dateFormat(thursday, "dd/mm/yyyy"), dateFormat(friday, "dd/mm/yyyy"));



  menu.map(record => {
    return (
      record.week.filter(week => week.weekday === "Monday")
        .map(week => {
          console.log(week.weekday);
          week.weekdate = dateFormat(monday, "dd/mm/yyyy");
          return week;
        })
    );
  });

  menu.map(record => {
    return (
      record.week.filter(week => week.weekday === "Tuesday")
        .map(week => {
          console.log(week.weekday);
          week.weekdate = dateFormat(tuesday, "dd/mm/yyyy");
          return week;
        })
    );
  });

  menu.map(record => {
    return (
      record.week.filter(week => week.weekday === "Wednesday")
        .map(week => {
          console.log(week.weekday);
          week.weekdate = dateFormat(wednesday, "dd/mm/yyyy");
          return week;
        })
    );
  });

  menu.map(record => {
    return (
      record.week.filter(week => week.weekday === "Thursday")
        .map(week => {
          console.log(week.weekday);
          week.weekdate = dateFormat(thursday, "dd/mm/yyyy");
          return week;
        })
    );
  });

  menu.map(record => {
    return (
      record.week.filter(week => week.weekday === "Friday")
        .map(week => {
          console.log(week.weekday);
          week.weekdate = dateFormat(friday, "dd/mm/yyyy");
          return week;
        })
    );
  });
  console.log(menu);
};
