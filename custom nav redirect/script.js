window.addEventListener("load", function () {
  buttons = {
    // EDIT HERE
    //Example configuration:
    "Go to Bad's Site": {                         // title
      link: "https://bad.is-having.fun",          // link where it should redirect you(href)
      navbar: "Tools",                            // exactly named as the dropdown/navbar entry also case sensitive
      target: "_blank"                            // how should the link be opened? _blank for a new tab, also _bank will add rel="noopener noreferrer" attribut
    },
    "Edit Server.Properties": {
      //Code wrapped between < and > will be executed when the navbar is loaded, in this example the code gets executed when the Tools navbar gets clicked
      // DO NOT paste code here you don't trust!
      link: '<if(window.location.href.match(new RegExp("server/.*/")) === null) window.location.href.substring(window.location.href.indexOf("/server/")) + "/"; else "/" + window.location.href.match(new RegExp("server/.*/"))[0];>files/edit#/server.properties',
      navbar: "Tools",
      target: "_blank",
    },
    Krenny: {
      link: "files/edit#/server.properties",
      navbar: "none",
      target: "_self",
    },
    WispyCream: {
      link: "https://github.com/WispyCream/wispv2-mods/tree/main/custom%20nav%20redirect",
      navbar: "none",
      target: "_blank",
    },
  };

  // STOP EDITING

  //splits strings based on a starting and ending char
  //returns array with substrings but ending char gets removed
  function extractString(template, initChar, finalChar) {
    let i = 0;
    let iOld = 0;
    let data = [];
    do {
      if (template[i] == initChar) {
        if (!(i == 0)) data[data.length] = template.slice(iOld, i);
        for (let j = i + 1; j < template.length; j++) {
          if (template[j] == finalChar) {
            data[data.length] = template.slice(i, j);
            i = j + 1;
            iOld = i;
            break;
          }
        }
      }
    } while (++i < template.length);
    data[data.length] = template.slice(iOld, i);
    return data;
  }

  document.addEventListener(
    "click",
    function (e) {
      Object.keys(buttons).forEach((title) => {
        try {
          let bar = e.target.parentElement;
          if(bar.classList == "flex justify-between cursor-pointer px-6 py-3") bar = bar.parentElement;
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
            try {
              let link = "";
              extractString(buttons[title].link, "<", ">").forEach(
                (commands) => {
                  if (commands.charAt(0) == "<")
                    link = link + eval(commands.substring(1));
                  else link = link + commands;
                }
              );
              listing.children[0].children[0].href = link;
            } catch (e) {
              console.debug(e);
              listing.children[0].children[0].href = buttons[title].link;
            }
            listing.children[0].children[0].setAttribute(
              "target",
              buttons[title].target
            );
            if (buttons[title].target == "_blank")
              listing.children[0].children[0].setAttribute(
                "rel",
                "noopener noreferrer"
              );
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
        clearInterval(s);
        if (buttons[title].navbar == "none") {
          let a = document.createElement("li");
          a.setAttribute("class", "px-6 py-3");
          span = document.createElement("span");
          span.setAttribute("class", "focus:outline-none");
          span.setAttribute("tabindex", "0");
          a.appendChild(span);
          link = document.createElement("a");
          link.setAttribute("href", buttons[title].link);
          link.setAttribute("target", buttons[title].target);
          if (buttons[title].target == "_blank")
            link.setAttribute("rel", "noopener noreferrer");
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
        console.debug(i);
      }
    }, 600);
  });
});