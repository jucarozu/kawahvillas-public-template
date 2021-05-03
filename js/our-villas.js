// Calendar Search Checkin

const calendarSearchCheckin = new dhx.Calendar(null, {dateFormat: "%d/%m/%Y"});
const popupSearchCheckin = new dhx.Popup();
popupSearchCheckin.attach(calendarSearchCheckin);

const inputSearchCheckin = document.querySelector("#search-checkin");

inputSearchCheckin.addEventListener("click", function() {
  popupSearchCheckin.show(inputSearchCheckin);
});

calendarSearchCheckin.events.on("change", function() {
  inputSearchCheckin.value = calendarSearchCheckin.getValue();
  popupSearchCheckin.hide();
});

// Calendar Search Checkout

const calendarSearchCheckout = new dhx.Calendar(null, {dateFormat: "%d/%m/%Y"});
const popupSearchCheckout = new dhx.Popup();
popupSearchCheckout.attach(calendarSearchCheckout);

const inputSearchCheckout = document.querySelector("#search-checkout");

inputSearchCheckout.addEventListener("click", function() {
  popupSearchCheckout.show(inputSearchCheckout);
});

calendarSearchCheckout.events.on("change", function() {
  inputSearchCheckout.value = calendarSearchCheckout.getValue();
  popupSearchCheckout.hide();
});

// Link Checkin and Checkout

calendarSearchCheckin.link(calendarSearchCheckout);