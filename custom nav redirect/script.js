window.addEventListener("load", function () {
    let e = "https://bad.is-having.fun",
        t = "Go to Bad's Site";
    var s = setInterval(function () {
        try {
            let n = document.getElementsByClassName("absolute top-0 left-0 w-full");
            clearInterval(s);
            let a = document.createElement("li"),
                l = document.createElement("li");
            a.setAttribute("id", "yesBadCustomNav1"),
                l.setAttribute("id", "yesBadCustomNav2"),
                a.setAttribute("class", "px-6 py-3"),
                l.setAttribute("class", "px-6 py-3"),
                n[0].insertAdjacentElement("beforeend", a),
                n[1].insertAdjacentElement("beforeend", l),
                (document.getElementById("yesBadCustomNav1").innerHTML =
                    "<span class='focus:outline-none' tabindex='0' githubyesbad=''><a href=" + e + " class='cursor-pointer router-link flex justify-between'><p>" + t + "</p><p class='text-white'> • </p></a></span>"),
                (document.getElementById("yesBadCustomNav2").innerHTML =
                    "<span class='focus:outline-none' tabindex='0' githubyesbad=''><a href=" + e + " class='cursor-pointer router-link flex justify-between'><p>" + t + "</p><p class='text-white'> • </p></a></span>");
        } catch (i) {}
    }, 600);
});
