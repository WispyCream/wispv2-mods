(function () {
    window.onload = () => {
        let e = document.createElement("div"),
            t = document.createElement("script");
        document.body.appendChild(e),
            document.body.appendChild(t),
            e.setAttribute("id", "badishavingfunfirework"),
            t.setAttribute("src", "https://cdn.jsdelivr.net/npm/fireworks-js@latest/dist/fireworks.js"),
            t.setAttribute("id", "badishavingfirework"),
            t.addEventListener("load", function () {
                let e = document.getElementById("badishavingfunfirework"),
                    t = new Fireworks(e, {});
                t.start();
                var i = document.createElement("switchdivfirework");
                i.setAttribute("id", "switchdivfirework");
                var s = document.createElement("label");
                s.setAttribute("class", "switch");
                var n = document.createElement("input");
                n.setAttribute("type", "checkbox"), n.setAttribute("checked", "true");
                var d = document.createElement("span");
                d.setAttribute("class", "slider round"),
                    n.setAttribute("onclick", "(toggler);"),
                    (n.onclick = function () {
                        var e;
                        (e = document.getElementById("badishavingfunfirework")), "none" === e.style.display ? (e.style.display = "block") : (e.style.display = "none"), "none" === e.style.display ? t.stop() : t.start();
                    }),
                    s.appendChild(n),
                    s.appendChild(d),
                    i.appendChild(s),
                    document.body.appendChild(i);
            });
    };
})();
