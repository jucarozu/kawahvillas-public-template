document.addEventListener('tabby', function (event) {
  const tab = event.target;
  const content = event.detail.content;

  if (content.id == "kawahvillas-auth-sign-in") {
    history.pushState({}, "", "/auth/sign-in");
  } else {
    history.pushState({}, "", "/auth/sign-up");
  }

  if (window.matchMedia('(min-width: 1024px)').matches) {
    if (content.id == "kawahvillas-auth-sign-in") {
      $("#kawahvillas-auth-sign-in-slogan").css("display", "flex");
      $("#kawahvillas-auth-sign-up-slogan").hide();
      $("#kawahvillas-auth-sign-in .email").focus();
    } else {
      $("#kawahvillas-auth-sign-in-slogan").hide();
      $("#kawahvillas-auth-sign-up-slogan").css("display", "flex");
      $("#kawahvillas-auth-sign-up .name").focus();
    }
  }
}, false);