(function () {
    window.onload = () => {
        let i = document.createElement("canvas");
        document.body.appendChild(i),
            i.setAttribute("id", "badishavingfun"),
            (window.animation_config = window.animation_config || { generatorDelay: { min: 1, max: 100 }, isRunning: !0, speed: 0.3, x_axis_rate: 0.005, weight: 0.6, size: 1.5, z_axis_rate: 0.005, color: { b: 255, a: 0.8 }, wind: 0 });
        let t = document.getElementById("badishavingfun"),
            n = t.getContext("2d");
        var e = document.createElement("switchdiv");
        e.setAttribute("id", "switchdiv");
        var a = document.createElement("label");
        a.setAttribute("class", "switch");
        var o = document.createElement("input");
        o.setAttribute("type", "checkbox"), o.setAttribute("checked", "true");
        var s = document.createElement("span");
        function r() {
            (t.width = window.innerWidth),
                (t.height = window.innerHeight),
                (function i() {
                    let e = { lower: 0, upper: t.width };
                    (window.onfocus = function () {
                        window.animation_config.isRunning = !0;
                    }),
                        (window.onblur = function () {
                            window.animation_config.isRunning = !0;
                        });
                    let a = [];
                    function o(i = 0, t = 1) {
                        return Math.floor(Math.random() * (t - i + 1) + i);
                    }
                    function s(i = 0, t = 1) {
                        return Math.random() * (t - i) + i;
                    }
                    class r {
                        constructor(i, t, n, e, a, o) {
                            (this.pos = i), (this.vector = t), (this.z_index = n % 5), (this.color = a), (this.size = e % 50), (this.weight = o % 50);
                        }
                        get displaySize() {
                            return Math.sqrt(this.z_index * this.size) * window.animation_config.size;
                        }
                        draw() {
                            !this.death && this.pos.x >= 0 && this.pos.x <= t.width && (n.beginPath(), n.arc(this.pos.x, this.pos.y, this.displaySize, 0, 2 * Math.PI), (n.fillStyle = this.color), n.fill());
                        }
                        update() {
                            if (
                                ((this.vector.z += s(-0.1, 0.1)),
                                (this.z_index += this.vector.z * window.animation_config.z_axis_rate),
                                this.z_index <= 0 && (this.z_index = Math.abs(this.z_index)),
                                this.pos.y > t.height - this.displaySize || !(this.pos.x >= e.lower && this.pos.x <= e.upper) || this.displaySize <= 0)
                            ) {
                                this.death = !0;
                                return;
                            }
                            (this.vector.x += s(-0.3, 0.3) * this.z_index * window.animation_config.x_axis_rate),
                                (this.vector.y = Math.sqrt(this.weight * this.size * this.z_index) * window.animation_config.speed),
                                (this.pos.x += this.vector.x + window.animation_config.wind),
                                (this.pos.y += this.vector.y);
                        }
                    }
                    (a = []),
                        (function i() {
                            if (window.animation_config.isRunning) {
                                var n, h;
                                window.animation_config.wind > 0
                                    ? ((e.lower = -200 * window.animation_config.wind), (e.upper = t.width))
                                    : window.animation_config.wind < 0 && ((e.lower = 0), (e.upper = t.width + -200 * window.animation_config.wind));
                                let c = { x: o(e.lower, e.upper), y: 0 },
                                    d = { x: s(-0.3, 0.3), y: s(-5, 5), z: s(-0.1, 0.1) },
                                    l = s(0.1, 5),
                                    g = s(0.2, 5),
                                    $ = ((n = window.animation_config.color.b), (h = window.animation_config.color.a), "rgba(" + o(n, 255) + "," + o(n, 255) + "," + o(n, 255) + "," + h + ")"),
                                    p = window.animation_config.weight;
                                a.push(new r(c, d, g, l, $, p));
                            }
                            setTimeout(i, o(window.animation_config.generatorDelay.min, window.animation_config.generatorDelay.max));
                        })(),
                        (function i() {
                            if (window.animation_config.isRunning) {
                                n.clearRect(0, 0, t.width, t.height), (a = a.filter((i) => !i.death));
                                for (let e = 0; e < a.length; e++) a[e].update(), a[e].draw();
                            }
                            requestAnimationFrame(i);
                        })();
                })(),
                (window.animation_config.isRunning = !0);
        }
        s.setAttribute("class", "slider round"),
            o.setAttribute("onclick", "(toggler);"),
            (o.onclick = function () {
                var i;
                (i = document.getElementById("badishavingfun")), "none" === i.style.display ? (i.style.display = "block") : (i.style.display = "none");
            }),
            a.appendChild(o),
            a.appendChild(s),
            e.appendChild(a),
            document.body.appendChild(e),
            window.addEventListener("resize", r, !1),
            r();
    };
})();
