const tabs = new Tabby('[data-tabs]');

document.addEventListener('tabby', function (event) {
	const tab = event.target;
	const content = event.detail.content;

  if (window.matchMedia('(min-width: 1024px)').matches) {
    if (content.id == "kawahvillas-auth-sign-in") {
      $("#kawahvillas-auth-sign-in-slogan").css("display", "flex");
      $("#kawahvillas-auth-sign-up-slogan").hide();
    } else {
      $("#kawahvillas-auth-sign-in-slogan").hide();
      $("#kawahvillas-auth-sign-up-slogan").css("display", "flex");
    }
  }
}, false);