const input = document.querySelector(".phone");
window.intlTelInput(input, {
  preferredCountries: ["ca", "us"],
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "us";
      callback(countryCode);
    });
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.min.js?1613236686837"
});