window.addEventListener("load", function () {
  buttons = {
    "Go to Bad's Site": "https://bad.is-having.fun",
    Krenny: "http://krenny.is-having.fun",
    WispyCream: "https://github.com/WispyCream/wispv2-mods/tree/main/custom%20nav%20redirect",
  };

  Object.keys(buttons).forEach((title) => {
    var s = setInterval(function () {
      try {
        let n = document.getElementsByClassName("absolute top-0 left-0 w-full");
        clearInterval(s);
        let a = document.createElement("li"),
          l = document.createElement("li");
        a.setAttribute("id", "yesBadCustomNav1" + buttons[title]),
          l.setAttribute("id", "yesBadCustomNav2" + buttons[title]),
          a.setAttribute("class", "px-6 py-3"),
          l.setAttribute("class", "px-6 py-3"),
          n[0].insertAdjacentElement("beforeend", a),
          n[1].insertAdjacentElement("beforeend", l),
          (document.getElementById(
            "yesBadCustomNav1" + buttons[title]
          ).innerHTML =
            "<span class='focus:outline-none' tabindex='0' githubyesbad=''><a href=" +
            buttons[title] +
            " class='cursor-pointer router-link flex justify-between'><p>" +
            title +
            "</p><p class='text-white'> • </p></a></span>"),
          (document.getElementById(
            "yesBadCustomNav2" + buttons[title]
          ).innerHTML =
            "<span class='focus:outline-none' tabindex='0' githubyesbad=''><a href=" +
            buttons[title] +
            " class='cursor-pointer router-link flex justify-between'><p>" +
            title +
            "</p><p class='text-white'> • </p></a></span>");
      } catch (i) {
        console.log(i);
      }
    }, 600);
  });
});
