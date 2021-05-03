// const inputDateList = document.getElementsByClassName("input-date");

// for (let i = 0; i < inputDateList.length; i++) {
//   const calendarDatePicker = new dhx.Calendar(null, {dateFormat: "%d/%m/%Y"});
//   const popupDatePicker = new dhx.Popup();
  
//   popupDatePicker.attach(calendarDatePicker);

//   let inputDate = inputDateList[i];

//   inputDate.addEventListener("click", function() {
//     popupDatePicker.show(inputDate);
//   });

//   calendarDatePicker.events.on("change", function() {
//     inputDate.value = calendarDatePicker.getValue();
//     popupDatePicker.hide();
//   });
// }