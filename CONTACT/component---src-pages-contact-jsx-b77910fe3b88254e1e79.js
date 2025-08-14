"use strict";
(self.webpackChunktrinhminhtriet = self.webpackChunktrinhminhtriet || []).push([
    [755], {
        5907: function(e, t, a) {
            a.r(t), a.d(t, {
                Head: function() {
                    return f
                },
                default: function() {
                    return E
                }
            });
            var l = a(6540),
                r = a(6326),
                n = a(4156),
                c = a(538),
                s = a(9593);
            var m = e => {
                    let {
                        sliderRef: t
                    } = e;
                    return l.useEffect((() => {
                        (0, s.A)(document.querySelectorAll(".fixed-slider .capt .parlx"))
                    }), []), l.createElement("header", {
                        ref: t,
                        className: "works-header fixed-slider hfixd valign sub-bg"
                    }, l.createElement("div", {
                        className: "container"
                    }, l.createElement("div", {
                        className: "row justify-content-center"
                    }, l.createElement("div", {
                        className: "col-lg-7 col-md-9 static"
                    }, l.createElement("div", {
                        className: "capt mt-50"
                    }, l.createElement("div", {
                        className: "parlx text-center"
                    }, l.createElement("h1", {
                        className: "color-font"
                    }, "Let’s collaborate!"), l.createElement("p", null, "Feel free to ask me any question or let’s do to talk about our future collaboration.")), l.createElement("div", {
                        className: "bactxt custom-font valign"
                    }, l.createElement("span", {
                        className: "full-width contact-header-text"
                    }, "Contact")))))))
                },
                i = a(1083),
                o = a(7425),
                d = a(5572);
            var u = () => {
                const e = l.useRef(null);

                function t(e) {
                    let t;
                    return e ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e) || (t = "Invalid email address") : t = "Required", t
                }
                return l.createElement("section", {
                    className: "contact section-padding"
                }, l.createElement("div", {
                    className: "container"
                }, l.createElement("div", {
                    className: "row"
                }, l.createElement("div", {
                    className: "col-lg-6"
                }, l.createElement("div", {
                    className: "form md-mb50"
                }, l.createElement("h4", {
                    className: "fw-700 color-font mb-50"
                }, "Get in touch."), l.createElement(o.l1, {
                    initialValues: {
                        name: "",
                        phone: "",
                        email: "",
                        message: ""
                    },
                    onSubmit: async t => {
                        const a = JSON.stringify({
                            name: t.name,
                            phone: t.phone,
                            email: t.email,
                            message: t.message
                        });
                        await i.A.post("https://api.trinhminhtriet.com/contact", a, {
                            headers: {
                                "content-type": "application/json"
                            }
                        }).catch((e => console.log(e.message))) && (e.current.innerText = "Your message has been sent. I will inform you as soon as possible.", t.name = "", t.phone = "", t.email = "", t.message = "", setTimeout((() => {
                            e.current.innerText = ""
                        }), 3e3))
                    }
                }, (a => {
                    let {
                        errors: r,
                        touched: n
                    } = a;
                    return l.createElement(o.lV, {
                        id: "contact-form"
                    }, l.createElement("div", {
                        className: "controls"
                    }, l.createElement("div", {
                        className: "form-group"
                    }, l.createElement(o.D0, {
                        id: "form_name",
                        type: "text",
                        name: "name",
                        placeholder: "Name",
                        required: "required"
                    })), l.createElement("div", {
                        className: "form-group"
                    }, l.createElement(o.D0, {
                        id: "form_phone",
                        type: "text",
                        name: "phone",
                        placeholder: "Phone",
                        required: "required"
                    })), l.createElement("div", {
                        className: "form-group"
                    }, l.createElement(o.D0, {
                        validate: t,
                        id: "form_email",
                        type: "email",
                        name: "email",
                        placeholder: "Email"
                    }), r.email && n.email && l.createElement("div", null, r.email))), l.createElement("div", {
                        className: "form-group"
                    }, l.createElement(o.D0, {
                        as: "textarea",
                        id: "form_message",
                        name: "message",
                        placeholder: "Message",
                        rows: "4",
                        required: "required"
                    })), l.createElement("button", {
                        type: "submit",
                        className: "butn bord"
                    }, l.createElement("span", null, "Submit")), l.createElement("div", {
                        className: "messages",
                        ref: e
                    }))
                })))), l.createElement("div", {
                    className: "col-lg-5 offset-lg-1"
                }, l.createElement("div", {
                    className: "cont-info"
                }, l.createElement("h4", {
                    className: "fw-700 color-font mb-50"
                }, "Contact."), l.createElement("h3", {
                    className: "wow",
                    "data-splitting": !0
                }, d.DD), l.createElement("div", {
                    className: "item mb-40"
                }, l.createElement("h5", null, l.createElement("a", {
                    href: "#0"
                }, d.Rp)), l.createElement("h5", null, d.lZ)), l.createElement("h3", {
                    className: "wow",
                    "data-splitting": !0
                }, "Address"), l.createElement("div", {
                    className: "item"
                }, l.createElement("h6", null, d.C5.hl, l.createElement("br", null), d.C5.kc, l.createElement("br", null), d.C5.$T)), l.createElement("div", {
                    className: "social mt-50"
                }, l.createElement("a", {
                    className: "icon",
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://www.linkedin.com/in/triet-trinh/"
                }, l.createElement("i", {
                    className: "fab fa-linkedin"
                })), l.createElement("a", {
                    className: "icon",
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://github.com/trinhminhtriet"
                }, l.createElement("i", {
                    className: "fab fa-github"
                })), l.createElement("a", {
                    className: "icon",
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://x.com/trinhminhtriet"
                }, l.createElement("i", {
                    className: "fab fa-x-twitter"
                })), l.createElement("a", {
                    className: "icon",
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://www.facebook.com/trinhminhtriet"
                }, l.createElement("i", {
                    className: "fab fa-facebook-f"
                })), l.createElement("a", {
                    className: "icon",
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://www.instagram.com/triettrinh/"
                }, l.createElement("i", {
                    className: "fab fa-instagram"
                }))))))))
            };
            const f = () => l.createElement(l.Fragment, null, l.createElement("title", null, "Trinh Minh Triet | Contact"));
            var E = () => {
                const e = l.useRef(null),
                    t = l.useRef(null),
                    a = l.useRef(null),
                    s = l.useRef(null);
                return l.useEffect((() => {
                    setTimeout((() => {
                        if (e.current) var a = e.current.offsetHeight;
                        t.current && (t.current.style.marginTop = a + "px")
                    }), 1e3);
                    var l = a.current;
                    window.scrollY > 300 ? l.classList.add("nav-scroll") : l.classList.remove("nav-scroll"), window.addEventListener("scroll", (() => {
                        window.scrollY > 300 ? l.classList.add("nav-scroll") : l.classList.remove("nav-scroll")
                    }))
                }), [e, t, a]), l.createElement(r.A, null, l.createElement("div", {
                    className: "circle-bg"
                }, l.createElement("div", {
                    className: "circle-color fixed"
                }, l.createElement("div", {
                    className: "gradient-circle"
                }), l.createElement("div", {
                    className: "gradient-circle two"
                }))), l.createElement(n.A, {
                    nr: a,
                    lr: s
                }), l.createElement(m, {
                    sliderRef: e
                }), l.createElement("div", {
                    ref: t,
                    className: "main-content"
                }, l.createElement(u, null), l.createElement("div", {
                    className: "map",
                    id: "ieatmaps"
                }, l.createElement("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3955186108205!2d106.70341181531525!3d10.780988792318437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f492b77f0cd%3A0xf24a9a1de6ad611d!2zMTUgxJAuIEzDqiBUaMOhbmggVMO0biwgQuG6v24gTmdow6ksIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1678252074221!5m2!1sen!2s",
                    loading: "lazy"
                })), l.createElement(c.A, null)))
            }
        },
        9593: function(e, t) {
            t.A = e => {
                window.addEventListener("scroll", (() => {
                    var t = window.scrollY;
                    e && e.forEach((e => {
                        e.style.transform = "translate3d(0, " + -.2 * t + "px, 0)", e.style.opacity = 1 - t / 600
                    }))
                }))
            }
        }
    }
]);