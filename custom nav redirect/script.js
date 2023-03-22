window.addEventListener("load", function () {
  buttons = {
    // EDIT HERE
    //Example configuration:
    "Go to Bad's Site": {                         // title
      link: "https://bad.is-having.fun",          // link where it should redirect you(href)
      navbar: "Tools",                            // exactly named as the dropdown/navbar entry also case sensitive
      target: "_blank"                            // how should the link be opened? _blank for a new tab, also _bank will add rel="noopener noreferrer" attribut
    },
    Krenny: {
      link: "http://krenny.is-having.fun",
      navbar: "none",
      target: "_self"
    },
    WispyCream: {
      link: "https://github.com/WispyCream/wispv2-mods/tree/main/custom%20nav%20redirect",
      navbar: "none",
      target: "_blank"
    },
  };

  // STOP EDITING
  document.addEventListener(
    "click",
    function (e) {
      Object.keys(buttons).forEach((title) => {
        try {
          let bar = e.target.parentElement;
          if (
            !(
              bar.classList ==
              "bg-primary-900 border-t first:border-t-0 border-primary-500"
            )
          )
            throw "Clicked element isn't a navbar element";
          if (bar.children[0].children[0].innerHTML == buttons[title].navbar) {
            let listing =
              bar.children[1].children[0].children[0].cloneNode(true);
            listing.children[0].children[0].children[0].innerHTML = title;
            listing.children[0].children[0].href = buttons[title].link;
            listing.children[0].children[0].setAttribute("target",buttons[title].target);
            if(buttons[title].target == "_blank") listing.children[0].children[0].setAttribute("rel","noopener noreferrer");
            bar.children[1].children[0].appendChild(listing);
          }
        } catch (e) {
          console.debug(e);
        }
      });
    },
    false
  );

  Object.keys(buttons).forEach((title) => {
    var s = setInterval(function () {
      try {
        let n = document.getElementsByClassName("absolute top-0 left-0 w-full");
        let navbars = document.getElementsByClassName(
          "text-white text-opacity-75"
        );
        clearInterval(s);
        console.debug(buttons[title].navbar);
        console.debug(buttons[title].navbar == "none");
        if (buttons[title].navbar == "none") {
          let a = document.createElement("li");
          a.setAttribute("class", "px-6 py-3");
          span = document.createElement("span");
          span.setAttribute("class", "focus:outline-none");
          span.setAttribute("tabindex", "0");
          a.appendChild(span);
          link = document.createElement("a");
          link.setAttribute("href", buttons[title].link);
          link.setAttribute("target",buttons[title].target);
          if(buttons[title].target == "_blank") link.setAttribute("rel","noopener noreferrer");
          link.setAttribute(
            "class",
            "cursor-pointer router-link flex justify-between"
          );
          span.appendChild(link);
          p = document.createElement("p");
          p.innerHTML = title;
          link.appendChild(p);
          p = document.createElement("p");
          p.setAttribute("class", "text-white");
          p.innerHTML = " • ";
          link.appendChild(p);
          n[0].insertAdjacentElement("beforeend", a);
          n[1].insertAdjacentElement("beforeend", a);
        }
      } catch (i) {
        console.log(i);
      }
    }, 600);
  });
});
