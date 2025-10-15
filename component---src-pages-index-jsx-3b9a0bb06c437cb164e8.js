/*! For license information please see component---src-pages-index-jsx-3b9a0bb06c437cb164e8.js.LICENSE.txt */
(self.webpackChunktrinhminhtriet = self.webpackChunktrinhminhtriet || []).push([
    [279], {
        34: function (e, t, n) {
            "use strict";
            var i = n(4901);
            e.exports = function (e) {
                return "object" == typeof e ? null !== e : i(e)
            }
        },
        181: function (e, t, n) {
            var i = /^\s+|\s+$/g,
                r = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                o = parseInt,
                l = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                c = "object" == typeof self && self && self.Object === Object && self,
                u = l || c || Function("return this")(),
                d = Object.prototype.toString,
                p = Math.max,
                f = Math.min,
                h = function () {
                    return u.Date.now()
                };

            function m(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function g(e) {
                if ("number" == typeof e) return e;
                if (function (e) {
                    return "symbol" == typeof e || function (e) {
                        return !!e && "object" == typeof e
                    }(e) && "[object Symbol]" == d.call(e)
                }(e)) return NaN;
                if (m(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = m(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(i, "");
                var n = a.test(e);
                return n || s.test(e) ? o(e.slice(2), n ? 2 : 8) : r.test(e) ? NaN : +e
            }
            e.exports = function (e, t, n) {
                var i, r, a, s, o, l, c = 0,
                    u = !1,
                    d = !1,
                    v = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function b(t) {
                    var n = i,
                        a = r;
                    return i = r = void 0, c = t, s = e.apply(a, n)
                }

                function y(e) {
                    var n = e - l;
                    return void 0 === l || n >= t || n < 0 || d && e - c >= a
                }

                function w() {
                    var e = h();
                    if (y(e)) return E(e);
                    o = setTimeout(w, function (e) {
                        var n = t - (e - l);
                        return d ? f(n, a - (e - c)) : n
                    }(e))
                }

                function E(e) {
                    return o = void 0, v && i ? b(e) : (i = r = void 0, s)
                }

                function S() {
                    var e = h(),
                        n = y(e);
                    if (i = arguments, r = this, l = e, n) {
                        if (void 0 === o) return function (e) {
                            return c = e, o = setTimeout(w, t), u ? b(e) : s
                        }(l);
                        if (d) return o = setTimeout(w, t), b(l)
                    }
                    return void 0 === o && (o = setTimeout(w, t)), s
                }
                return t = g(t) || 0, m(n) && (u = !!n.leading, a = (d = "maxWait" in n) ? p(g(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v), S.cancel = function () {
                    void 0 !== o && clearTimeout(o), c = 0, i = l = r = o = void 0
                }, S.flush = function () {
                    return void 0 === o ? s : E(h())
                }, S
            }
        },
        283: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(9039),
                a = n(4901),
                s = n(9297),
                o = n(3724),
                l = n(350).CONFIGURABLE,
                c = n(3706),
                u = n(1181),
                d = u.enforce,
                p = u.get,
                f = String,
                h = Object.defineProperty,
                m = i("".slice),
                g = i("".replace),
                v = i([].join),
                b = o && !r((function () {
                    return 8 !== h((function () { }), "length", {
                        value: 8
                    }).length
                })),
                y = String(String).split("String"),
                w = e.exports = function (e, t, n) {
                    "Symbol(" === m(f(t), 0, 7) && (t = "[" + g(f(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!s(e, "name") || l && e.name !== t) && (o ? h(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), b && n && s(n, "arity") && e.length !== n.arity && h(e, "length", {
                        value: n.arity
                    });
                    try {
                        n && s(n, "constructor") && n.constructor ? o && h(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (r) { }
                    var i = d(e);
                    return s(i, "source") || (i.source = v(y, "string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = w((function () {
                return a(this) && p(this).source || c(this)
            }), "toString")
        },
        298: function (e, t, n) {
            "use strict";
            var i = n(2195),
                r = n(5397),
                a = n(8480).f,
                s = n(7680),
                o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function (e) {
                return o && "Window" === i(e) ? function (e) {
                    try {
                        return a(e)
                    } catch (t) {
                        return s(o)
                    }
                }(e) : a(r(e))
            }
        },
        350: function (e, t, n) {
            "use strict";
            var i = n(3724),
                r = n(9297),
                a = Function.prototype,
                s = i && Object.getOwnPropertyDescriptor,
                o = r(a, "name"),
                l = o && "something" === function () { }.name,
                c = o && (!i || i && s(a, "name").configurable);
            e.exports = {
                EXISTS: o,
                PROPER: l,
                CONFIGURABLE: c
            }
        },
        382: function (e, t, n) {
            "use strict";

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }
            n(6099), n(825), n(5700), n(9572), n(2675), n(9463), n(2259), n(3792), n(7764), n(2953), t.A = void 0, n(8706), n(2892), n(875);
            var r = s(n(6540)),
                a = s(n(4373));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, (a = r.key, s = void 0, s = function (e, t) {
                        if ("object" !== i(e) || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, t || "default");
                            if ("object" !== i(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(a, "string"), "symbol" === i(s) ? s : String(s)), r)
                }
                var a, s
            }

            function l(e, t) {
                return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                }, l(e, t)
            }

            function c(e) {
                var t = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = d(e);
                    if (t) {
                        var a = d(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === i(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return u(e)
                    }(this, n)
                }
            }

            function u(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }
            var p = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && l(e, t)
                }(d, e);
                var t, n, i, s = c(d);

                function d(e) {
                    var t;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), (t = s.call(this, e)).state = {
                        isOpen: !1,
                        modalVideoWidth: "100%"
                    }, t.closeModal = t.closeModal.bind(u(t)), t.updateFocus = t.updateFocus.bind(u(t)), t.timeout, t
                }
                return t = d, i = [{
                    key: "getDerivedStateFromProps",
                    value: function (e) {
                        return {
                            isOpen: e.isOpen
                        }
                    }
                }], (n = [{
                    key: "openModal",
                    value: function () {
                        this.setState({
                            isOpen: !0
                        })
                    }
                }, {
                    key: "closeModal",
                    value: function () {
                        this.setState({
                            isOpen: !1
                        }), "function" == typeof this.props.onClose && this.props.onClose()
                    }
                }, {
                    key: "keydownHandler",
                    value: function (e) {
                        27 === e.keyCode && this.closeModal()
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        document.addEventListener("keydown", this.keydownHandler.bind(this)), window.addEventListener("resize", this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this)), this.setState({
                            modalVideoWidth: this.getWidthFulfillAspectRatio(this.props.ratio, window.innerHeight, window.innerWidth)
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        document.removeEventListener("keydown", this.keydownHandler.bind(this)), window.removeEventListener("resize", this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function () {
                        this.state.isOpen && this.modal && this.modal.focus()
                    }
                }, {
                    key: "updateFocus",
                    value: function (e) {
                        this.state.isOpen && (e.preventDefault(), e.stopPropagation(), 9 === e.keyCode && (this.modal === document.activeElement ? this.modaliflame.focus() : this.modalbtn === document.activeElement && this.modal.focus()))
                    }
                }, {
                    key: "resizeModalVideoWhenHeightGreaterThanWindowHeight",
                    value: function () {
                        var e = this;
                        clearTimeout(this.timeout), this.timeout = setTimeout((function () {
                            var t = e.getWidthFulfillAspectRatio(e.props.ratio, window.innerHeight, window.innerWidth);
                            e.state.modalVideoWidth != t && e.setState({
                                modalVideoWidth: t
                            })
                        }), 10)
                    }
                }, {
                    key: "getQueryString",
                    value: function (e) {
                        var t = "";
                        for (var n in e) e.hasOwnProperty(n) && null !== e[n] && (t += "".concat(n, "=").concat(e[n], "&"));
                        return t.substr(0, t.length - 1)
                    }
                }, {
                    key: "getYoutubeUrl",
                    value: function (e, t) {
                        var n = this.getQueryString(e);
                        return "//www.youtube.com/embed/".concat(t, "?").concat(n)
                    }
                }, {
                    key: "getVimeoUrl",
                    value: function (e, t) {
                        var n = this.getQueryString(e);
                        return "//player.vimeo.com/video/".concat(t, "?").concat(n)
                    }
                }, {
                    key: "getYoukuUrl",
                    value: function (e, t) {
                        var n = this.getQueryString(e);
                        return "//player.youku.com/embed/".concat(t, "?").concat(n)
                    }
                }, {
                    key: "getVideoUrl",
                    value: function (e, t) {
                        return "youtube" === e.channel ? this.getYoutubeUrl(e.youtube, t) : "vimeo" === e.channel ? this.getVimeoUrl(e.vimeo, t) : "youku" === e.channel ? this.getYoukuUrl(e.youku, t) : "custom" === e.channel ? e.url : void 0
                    }
                }, {
                    key: "getPadding",
                    value: function (e) {
                        var t = e.split(":"),
                            n = Number(t[0]),
                            i = Number(t[1]);
                        return "".concat(100 * i / n, "%")
                    }
                }, {
                    key: "getWidthFulfillAspectRatio",
                    value: function (e, t, n) {
                        var i = e.split(":"),
                            r = Number(i[0]),
                            a = Number(i[1]);
                        return t < n * (a / r) ? Math.floor(r / a * t) : "100%"
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = {
                                width: this.state.modalVideoWidth
                            },
                            n = {
                                paddingBottom: this.getPadding(this.props.ratio)
                            };
                        return r.default.createElement(a.default, {
                            classNames: this.props.classNames.modalVideoEffect,
                            timeout: this.props.animationSpeed
                        }, (function () {
                            return e.state.isOpen ? r.default.createElement("div", {
                                className: e.props.classNames.modalVideo,
                                tabIndex: "-1",
                                role: "dialog",
                                "area-modal": "true",
                                "aria-label": e.props.aria.openMessage,
                                onClick: e.closeModal,
                                ref: function (t) {
                                    e.modal = t
                                },
                                onKeyDown: e.updateFocus
                            }, r.default.createElement("div", {
                                className: e.props.classNames.modalVideoBody
                            }, r.default.createElement("div", {
                                className: e.props.classNames.modalVideoInner,
                                style: t
                            }, r.default.createElement("div", {
                                className: e.props.classNames.modalVideoIframeWrap,
                                style: n
                            }, e.props.children || r.default.createElement("iframe", {
                                width: "460",
                                height: "230",
                                src: e.getVideoUrl(e.props, e.props.videoId),
                                frameBorder: "0",
                                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: e.props.allowFullScreen,
                                onKeyDown: e.updateFocus,
                                ref: function (t) {
                                    e.modaliflame = t
                                },
                                tabIndex: "-1"
                            }), r.default.createElement("button", {
                                className: e.props.classNames.modalVideoCloseBtn,
                                "aria-label": e.props.aria.dismissBtnMessage,
                                ref: function (t) {
                                    e.modalbtn = t
                                },
                                onKeyDown: e.updateFocus
                            }))))) : null
                        }))
                    }
                }]) && o(t.prototype, n), i && o(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }(r.default.Component);
            t.A = p, p.defaultProps = {
                channel: "youtube",
                isOpen: !1,
                youtube: {
                    autoplay: 1,
                    cc_load_policy: 1,
                    color: null,
                    controls: 1,
                    disablekb: 0,
                    enablejsapi: 0,
                    end: null,
                    fs: 1,
                    h1: null,
                    iv_load_policy: 1,
                    list: null,
                    listType: null,
                    loop: 0,
                    modestbranding: null,
                    origin: null,
                    playlist: null,
                    playsinline: null,
                    rel: 0,
                    showinfo: 1,
                    start: 0,
                    wmode: "transparent",
                    theme: "dark",
                    mute: 0
                },
                ratio: "16:9",
                vimeo: {
                    api: !1,
                    autopause: !0,
                    autoplay: !0,
                    byline: !0,
                    callback: null,
                    color: null,
                    height: null,
                    loop: !1,
                    maxheight: null,
                    maxwidth: null,
                    player_id: null,
                    portrait: !0,
                    title: !0,
                    width: null,
                    xhtml: !1
                },
                youku: {
                    autoplay: 1,
                    show_related: 0
                },
                allowFullScreen: !0,
                animationSpeed: 300,
                classNames: {
                    modalVideoEffect: "modal-video-effect",
                    modalVideo: "modal-video",
                    modalVideoClose: "modal-video-close",
                    modalVideoBody: "modal-video-body",
                    modalVideoInner: "modal-video-inner",
                    modalVideoIframeWrap: "modal-video-movie-wrap",
                    modalVideoCloseBtn: "modal-video-close-btn"
                },
                aria: {
                    openMessage: "You just opened the modal video",
                    dismissBtnMessage: "Close the modal by clicking here"
                }
            }
        },
        397: function (e, t, n) {
            "use strict";
            var i = n(7751);
            e.exports = i("document", "documentElement")
        },
        421: function (e) {
            "use strict";
            e.exports = {}
        },
        511: function (e, t, n) {
            "use strict";
            var i = n(9167),
                r = n(9297),
                a = n(1951),
                s = n(4913).f;
            e.exports = function (e) {
                var t = i.Symbol || (i.Symbol = {});
                r(t, e) || s(t, e, {
                    value: a.f(e)
                })
            }
        },
        566: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(9306),
                a = n(34),
                s = n(9297),
                o = n(7680),
                l = n(616),
                c = Function,
                u = i([].concat),
                d = i([].join),
                p = {};
            e.exports = l ? c.bind : function (e) {
                var t = r(this),
                    n = t.prototype,
                    i = o(arguments, 1),
                    l = function () {
                        var n = u(i, o(arguments));
                        return this instanceof l ? function (e, t, n) {
                            if (!s(p, t)) {
                                for (var i = [], r = 0; r < t; r++) i[r] = "a[" + r + "]";
                                p[t] = c("C,a", "return new C(" + d(i, ",") + ")")
                            }
                            return p[t](e, n)
                        }(t, n.length, n) : t.apply(e, n)
                    };
                return a(n) && (l.prototype = n), l
            }
        },
        597: function (e, t, n) {
            "use strict";
            var i = n(9039),
                r = n(8227),
                a = n(9519),
                s = r("species");
            e.exports = function (e) {
                return a >= 51 || !i((function () {
                    var t = [];
                    return (t.constructor = {})[s] = function () {
                        return {
                            foo: 1
                        }
                    }, 1 !== t[e](Boolean).foo
                }))
            }
        },
        616: function (e, t, n) {
            "use strict";
            var i = n(9039);
            e.exports = !i((function () {
                var e = function () { }.bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }))
        },
        655: function (e, t, n) {
            "use strict";
            var i = n(6955),
                r = String;
            e.exports = function (e) {
                if ("Symbol" === i(e)) throw new TypeError("Cannot convert a Symbol value to a string");
                return r(e)
            }
        },
        687: function (e, t, n) {
            "use strict";
            var i = n(4913).f,
                r = n(9297),
                a = n(8227)("toStringTag");
            e.exports = function (e, t, n) {
                e && !n && (e = e.prototype), e && !r(e, a) && i(e, a, {
                    configurable: !0,
                    value: t
                })
            }
        },
        741: function (e) {
            "use strict";
            var t = Math.ceil,
                n = Math.floor;
            e.exports = Math.trunc || function (e) {
                var i = +e;
                return (i > 0 ? n : t)(i)
            }
        },
        757: function (e, t, n) {
            "use strict";
            var i = n(7751),
                r = n(4901),
                a = n(1625),
                s = n(7040),
                o = Object;
            e.exports = s ? function (e) {
                return "symbol" == typeof e
            } : function (e) {
                var t = i("Symbol");
                return r(t) && a(t.prototype, o(e))
            }
        },
        773: function (e, t, n) {
            "use strict";

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Dots = void 0;
            var r = o(n(6540)),
                a = o(n(6942)),
                s = n(9445);

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function c(e, t, n) {
                return (t = d(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, d(i.key), i)
                }
            }

            function d(e) {
                var t = function (e, t) {
                    if ("object" != i(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != i(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == i(t) ? t : String(t)
            }

            function p(e, t) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                }, p(e, t)
            }

            function f(e) {
                var t = h();
                return function () {
                    var n, r = m(e);
                    if (t) {
                        var a = m(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === i(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(this, n)
                }
            }

            function h() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { })))
                } catch (e) { }
                return (h = function () {
                    return !!e
                })()
            }

            function m(e) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, m(e)
            }
            t.Dots = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && p(e, t)
                }(d, e);
                var t, n, i, o = f(d);

                function d() {
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), o.apply(this, arguments)
                }
                return t = d, n = [{
                    key: "clickHandler",
                    value: function (e, t) {
                        t.preventDefault(), this.props.clickHandler(e)
                    }
                }, {
                    key: "render",
                    value: function () {
                        for (var e, t = this.props, n = t.onMouseEnter, i = t.onMouseOver, o = t.onMouseLeave, u = t.infinite, d = t.slidesToScroll, p = t.slidesToShow, f = t.slideCount, h = t.currentSlide, m = (e = {
                            slideCount: f,
                            slidesToScroll: d,
                            slidesToShow: p,
                            infinite: u
                        }).infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1, g = {
                            onMouseEnter: n,
                            onMouseOver: i,
                            onMouseLeave: o
                        }, v = [], b = 0; b < m; b++) {
                            var y = (b + 1) * d - 1,
                                w = u ? y : (0, s.clamp)(y, 0, f - 1),
                                E = w - (d - 1),
                                S = u ? E : (0, s.clamp)(E, 0, f - 1),
                                x = (0, a.default)({
                                    "slick-active": u ? h >= S && h <= w : h === S
                                }),
                                T = {
                                    message: "dots",
                                    index: b,
                                    slidesToScroll: d,
                                    currentSlide: h
                                },
                                O = this.clickHandler.bind(this, T);
                            v = v.concat(r.default.createElement("li", {
                                key: b,
                                className: x
                            }, r.default.cloneElement(this.props.customPaging(b), {
                                onClick: O
                            })))
                        }
                        return r.default.cloneElement(this.props.appendDots(v), function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? l(Object(n), !0).forEach((function (t) {
                                    c(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            className: this.props.dotsClass
                        }, g))
                    }
                }], n && u(t.prototype, n), i && u(t, i), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }(r.default.PureComponent)
        },
        825: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(7751),
                a = n(8745),
                s = n(566),
                o = n(5548),
                l = n(8551),
                c = n(34),
                u = n(2360),
                d = n(9039),
                p = r("Reflect", "construct"),
                f = Object.prototype,
                h = [].push,
                m = d((function () {
                    function e() { }
                    return !(p((function () { }), [], e) instanceof e)
                })),
                g = !d((function () {
                    p((function () { }))
                })),
                v = m || g;
            i({
                target: "Reflect",
                stat: !0,
                forced: v,
                sham: v
            }, {
                construct: function (e, t) {
                    o(e), l(t);
                    var n = arguments.length < 3 ? e : o(arguments[2]);
                    if (g && !m) return p(e, t, n);
                    if (e === n) {
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3])
                        }
                        var i = [null];
                        return a(h, i, t), new (a(s, e, i))
                    }
                    var r = n.prototype,
                        d = u(c(r) ? r : f),
                        v = a(e, d, t);
                    return c(v) ? v : d
                }
            })
        },
        875: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(9039),
                a = n(8981),
                s = n(2787),
                o = n(2211);
            i({
                target: "Object",
                stat: !0,
                forced: r((function () {
                    s(1)
                })),
                sham: !o
            }, {
                getPrototypeOf: function (e) {
                    return s(a(e))
                }
            })
        },
        1040: function (e, t, n) {
            var i = n(8404),
                r = n(2524).each;

            function a(e, t) {
                this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
                var n = this;
                this.listener = function (e) {
                    n.mql = e.currentTarget || e, n.assess()
                }, this.mql.addListener(this.listener)
            }
            a.prototype = {
                constuctor: a,
                addHandler: function (e) {
                    var t = new i(e);
                    this.handlers.push(t), this.matches() && t.on()
                },
                removeHandler: function (e) {
                    var t = this.handlers;
                    r(t, (function (n, i) {
                        if (n.equals(e)) return n.destroy(), !t.splice(i, 1)
                    }))
                },
                matches: function () {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function () {
                    r(this.handlers, (function (e) {
                        e.destroy()
                    })), this.mql.removeListener(this.listener), this.handlers.length = 0
                },
                assess: function () {
                    var e = this.matches() ? "on" : "off";
                    r(this.handlers, (function (t) {
                        t[e]()
                    }))
                }
            }, e.exports = a
        },
        1072: function (e, t, n) {
            "use strict";
            var i = n(1828),
                r = n(8727);
            e.exports = Object.keys || function (e) {
                return i(e, r)
            }
        },
        1088: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(9565),
                a = n(8776),
                s = n(350),
                o = n(4901),
                l = n(3994),
                c = n(2787),
                u = n(2967),
                d = n(687),
                p = n(6699),
                f = n(6840),
                h = n(8227),
                m = n(6269),
                g = n(7657),
                v = s.PROPER,
                b = s.CONFIGURABLE,
                y = g.IteratorPrototype,
                w = g.BUGGY_SAFARI_ITERATORS,
                E = h("iterator"),
                S = "keys",
                x = "values",
                T = "entries",
                O = function () {
                    return this
                };
            e.exports = function (e, t, n, s, h, g, k) {
                l(n, t, s);
                var C, P, _, M = function (e) {
                    if (e === h && A) return A;
                    if (!w && e && e in N) return N[e];
                    switch (e) {
                        case S:
                        case x:
                        case T:
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this)
                    }
                },
                    L = t + " Iterator",
                    j = !1,
                    N = e.prototype,
                    I = N[E] || N["@@iterator"] || h && N[h],
                    A = !w && I || M(h),
                    z = "Array" === t && N.entries || I;
                if (z && (C = c(z.call(new e))) !== Object.prototype && C.next && (a || c(C) === y || (u ? u(C, y) : o(C[E]) || f(C, E, O)), d(C, L, !0, !0), a && (m[L] = O)), v && h === x && I && I.name !== x && (!a && b ? p(N, "name", x) : (j = !0, A = function () {
                    return r(I, this)
                })), h)
                    if (P = {
                        values: M(x),
                        keys: g ? A : M(S),
                        entries: M(T)
                    }, k)
                        for (_ in P) (w || j || !(_ in N)) && f(N, _, P[_]);
                    else i({
                        target: t,
                        proto: !0,
                        forced: w || j
                    }, P);
                return a && !k || N[E] === A || f(N, E, A, {
                    name: h
                }), m[t] = A, P
            }
        },
        1098: function (e, t, n) {
            var i = n(1040),
                r = n(2524),
                a = r.each,
                s = r.isFunction,
                o = r.isArray;

            function l() {
                if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
            }
            l.prototype = {
                constructor: l,
                register: function (e, t, n) {
                    var r = this.queries,
                        l = n && this.browserIsIncapable;
                    return r[e] || (r[e] = new i(e, l)), s(t) && (t = {
                        match: t
                    }), o(t) || (t = [t]), a(t, (function (t) {
                        s(t) && (t = {
                            match: t
                        }), r[e].addHandler(t)
                    })), this
                },
                unregister: function (e, t) {
                    var n = this.queries[e];
                    return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
                }
            }, e.exports = l
        },
        1181: function (e, t, n) {
            "use strict";
            var i, r, a, s = n(8622),
                o = n(4576),
                l = n(34),
                c = n(6699),
                u = n(9297),
                d = n(7629),
                p = n(6119),
                f = n(421),
                h = "Object already initialized",
                m = o.TypeError,
                g = o.WeakMap;
            if (s || d.state) {
                var v = d.state || (d.state = new g);
                v.get = v.get, v.has = v.has, v.set = v.set, i = function (e, t) {
                    if (v.has(e)) throw new m(h);
                    return t.facade = e, v.set(e, t), t
                }, r = function (e) {
                    return v.get(e) || {}
                }, a = function (e) {
                    return v.has(e)
                }
            } else {
                var b = p("state");
                f[b] = !0, i = function (e, t) {
                    if (u(e, b)) throw new m(h);
                    return t.facade = e, c(e, b, t), t
                }, r = function (e) {
                    return u(e, b) ? e[b] : {}
                }, a = function (e) {
                    return u(e, b)
                }
            }
            e.exports = {
                set: i,
                get: r,
                has: a,
                enforce: function (e) {
                    return a(e) ? r(e) : i(e, {})
                },
                getterFor: function (e) {
                    return function (t) {
                        var n;
                        if (!l(t) || (n = r(t)).type !== e) throw new m("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        },
        1240: function (e, t, n) {
            "use strict";
            var i = n(9504);
            e.exports = i(1..valueOf)
        },
        1291: function (e, t, n) {
            "use strict";
            var i = n(741);
            e.exports = function (e) {
                var t = +e;
                return t != t || 0 === t ? 0 : i(t)
            }
        },
        1296: function (e, t, n) {
            "use strict";
            var i = n(4495);
            e.exports = i && !!Symbol.for && !!Symbol.keyFor
        },
        1327: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i, r = (i = n(6540)) && i.__esModule ? i : {
                default: i
            };
            var a = {
                accessibility: !0,
                adaptiveHeight: !1,
                afterChange: null,
                appendDots: function (e) {
                    return r.default.createElement("ul", {
                        style: {
                            display: "block"
                        }
                    }, e)
                },
                arrows: !0,
                autoplay: !1,
                autoplaySpeed: 3e3,
                beforeChange: null,
                centerMode: !1,
                centerPadding: "50px",
                className: "",
                cssEase: "ease",
                customPaging: function (e) {
                    return r.default.createElement("button", null, e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: null,
                nextArrow: null,
                onEdge: null,
                onInit: null,
                onLazyLoadError: null,
                onReInit: null,
                pauseOnDotsHover: !1,
                pauseOnFocus: !1,
                pauseOnHover: !0,
                prevArrow: null,
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "div",
                slidesPerRow: 1,
                slidesToScroll: 1,
                slidesToShow: 1,
                speed: 500,
                swipe: !0,
                swipeEvent: null,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0,
                asNavFor: null,
                unslick: !1
            };
            t.default = a
        },
        1441: function (e, t, n) {
            var i = n(8028),
                r = function (e) {
                    var t = "",
                        n = Object.keys(e);
                    return n.forEach((function (r, a) {
                        var s = e[r];
                        (function (e) {
                            return /[height|width]$/.test(e)
                        })(r = i(r)) && "number" == typeof s && (s += "px"), t += !0 === s ? r : !1 === s ? "not " + r : "(" + r + ": " + s + ")", a < n.length - 1 && (t += " and ")
                    })), t
                };
            e.exports = function (e) {
                var t = "";
                return "string" == typeof e ? e : e instanceof Array ? (e.forEach((function (n, i) {
                    t += r(n), i < e.length - 1 && (t += ", ")
                })), t) : r(e)
            }
        },
        1469: function (e, t, n) {
            "use strict";
            var i = n(7433);
            e.exports = function (e, t) {
                return new (i(e))(0 === t ? 0 : t)
            }
        },
        1510: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(7751),
                a = n(9297),
                s = n(655),
                o = n(5745),
                l = n(1296),
                c = o("string-to-symbol-registry"),
                u = o("symbol-to-string-registry");
            i({
                target: "Symbol",
                stat: !0,
                forced: !l
            }, {
                for: function (e) {
                    var t = s(e);
                    if (a(c, t)) return c[t];
                    var n = r("Symbol")(t);
                    return c[t] = n, u[n] = t, n
                }
            })
        },
        1625: function (e, t, n) {
            "use strict";
            var i = n(9504);
            e.exports = i({}.isPrototypeOf)
        },
        1828: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(9297),
                a = n(5397),
                s = n(9617).indexOf,
                o = n(421),
                l = i([].push);
            e.exports = function (e, t) {
                var n, i = a(e),
                    c = 0,
                    u = [];
                for (n in i) !r(o, n) && r(i, n) && l(u, n);
                for (; t.length > c;) r(i, n = t[c++]) && (~s(u, n) || l(u, n));
                return u
            }
        },
        1951: function (e, t, n) {
            "use strict";
            var i = n(8227);
            t.f = i
        },
        2106: function (e, t, n) {
            "use strict";
            var i = n(283),
                r = n(4913);
            e.exports = function (e, t, n) {
                return n.get && i(n.get, t, {
                    getter: !0
                }), n.set && i(n.set, t, {
                    setter: !0
                }), r.f(e, t, n)
            }
        },
        2140: function (e, t, n) {
            "use strict";
            var i = {};
            i[n(8227)("toStringTag")] = "z", e.exports = "[object z]" === String(i)
        },
        2195: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = i({}.toString),
                a = i("".slice);
            e.exports = function (e) {
                return a(r(e), 8, -1)
            }
        },
        2211: function (e, t, n) {
            "use strict";
            var i = n(9039);
            e.exports = !i((function () {
                function e() { }
                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            }))
        },
        2259: function (e, t, n) {
            "use strict";
            n(511)("iterator")
        },
        2360: function (e, t, n) {
            "use strict";
            var i, r = n(8551),
                a = n(6801),
                s = n(8727),
                o = n(421),
                l = n(397),
                c = n(4055),
                u = n(6119),
                d = "prototype",
                p = "script",
                f = u("IE_PROTO"),
                h = function () { },
                m = function (e) {
                    return "<" + p + ">" + e + "</" + p + ">"
                },
                g = function (e) {
                    e.write(m("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                },
                v = function () {
                    try {
                        i = new ActiveXObject("htmlfile")
                    } catch (a) { }
                    var e, t, n;
                    v = "undefined" != typeof document ? document.domain && i ? g(i) : (t = c("iframe"), n = "java" + p + ":", t.style.display = "none", l.appendChild(t), t.src = String(n), (e = t.contentWindow.document).open(), e.write(m("document.F=Object")), e.close(), e.F) : g(i);
                    for (var r = s.length; r--;) delete v[d][s[r]];
                    return v()
                };
            o[f] = !0, e.exports = Object.create || function (e, t) {
                var n;
                return null !== e ? (h[d] = r(e), n = new h, h[d] = null, n[f] = e) : n = v(), void 0 === t ? n : a.f(n, t)
            }
        },
        2386: function (e, t, n) {
            var i = n(1098);
            e.exports = new i
        },
        2524: function (e) {
            e.exports = {
                isFunction: function (e) {
                    return "function" == typeof e
                },
                isArray: function (e) {
                    return "[object Array]" === Object.prototype.toString.apply(e)
                },
                each: function (e, t) {
                    for (var n = 0, i = e.length; n < i && !1 !== t(e[n], n); n++);
                }
            }
        },
        2529: function (e) {
            "use strict";
            e.exports = function (e, t) {
                return {
                    value: e,
                    done: t
                }
            }
        },
        2675: function (e, t, n) {
            "use strict";
            n(6761), n(1510), n(7812), n(3110), n(9773)
        },
        2777: function (e, t, n) {
            "use strict";
            var i = n(9565),
                r = n(34),
                a = n(757),
                s = n(5966),
                o = n(4270),
                l = n(8227),
                c = TypeError,
                u = l("toPrimitive");
            e.exports = function (e, t) {
                if (!r(e) || a(e)) return e;
                var n, l = s(e, u);
                if (l) {
                    if (void 0 === t && (t = "default"), n = i(l, e, t), !r(n) || a(n)) return n;
                    throw new c("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), o(e, t)
            }
        },
        2787: function (e, t, n) {
            "use strict";
            var i = n(9297),
                r = n(4901),
                a = n(8981),
                s = n(6119),
                o = n(2211),
                l = s("IE_PROTO"),
                c = Object,
                u = c.prototype;
            e.exports = o ? c.getPrototypeOf : function (e) {
                var t = a(e);
                if (i(t, l)) return t[l];
                var n = t.constructor;
                return r(n) && t instanceof n ? n.prototype : t instanceof c ? u : null
            }
        },
        2796: function (e, t, n) {
            "use strict";
            var i = n(9039),
                r = n(4901),
                a = /#|\.prototype\./,
                s = function (e, t) {
                    var n = l[o(e)];
                    return n === u || n !== c && (r(t) ? i(t) : !!t)
                },
                o = s.normalize = function (e) {
                    return String(e).replace(a, ".").toLowerCase()
                },
                l = s.data = {},
                c = s.NATIVE = "N",
                u = s.POLYFILL = "P";
            e.exports = s
        },
        2839: function (e, t, n) {
            "use strict";
            var i = n(4576).navigator,
                r = i && i.userAgent;
            e.exports = r ? String(r) : ""
        },
        2892: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(8776),
                a = n(3724),
                s = n(4576),
                o = n(9167),
                l = n(9504),
                c = n(2796),
                u = n(9297),
                d = n(3167),
                p = n(1625),
                f = n(757),
                h = n(2777),
                m = n(9039),
                g = n(8480).f,
                v = n(7347).f,
                b = n(4913).f,
                y = n(1240),
                w = n(3802).trim,
                E = "Number",
                S = s[E],
                x = o[E],
                T = S.prototype,
                O = s.TypeError,
                k = l("".slice),
                C = l("".charCodeAt),
                P = function (e) {
                    var t, n, i, r, a, s, o, l, c = h(e, "number");
                    if (f(c)) throw new O("Cannot convert a Symbol value to a number");
                    if ("string" == typeof c && c.length > 2)
                        if (c = w(c), 43 === (t = C(c, 0)) || 45 === t) {
                            if (88 === (n = C(c, 2)) || 120 === n) return NaN
                        } else if (48 === t) {
                            switch (C(c, 1)) {
                                case 66:
                                case 98:
                                    i = 2, r = 49;
                                    break;
                                case 79:
                                case 111:
                                    i = 8, r = 55;
                                    break;
                                default:
                                    return +c
                            }
                            for (s = (a = k(c, 2)).length, o = 0; o < s; o++)
                                if ((l = C(a, o)) < 48 || l > r) return NaN;
                            return parseInt(a, i)
                        }
                    return +c
                },
                _ = c(E, !S(" 0o1") || !S("0b1") || S("+0x1")),
                M = function (e) {
                    var t, n = arguments.length < 1 ? 0 : S(function (e) {
                        var t = h(e, "number");
                        return "bigint" == typeof t ? t : P(t)
                    }(e));
                    return p(T, t = this) && m((function () {
                        y(t)
                    })) ? d(Object(n), this, M) : n
                };
            M.prototype = T, _ && !r && (T.constructor = M), i({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: _
            }, {
                Number: M
            });
            var L = function (e, t) {
                for (var n, i = a ? g(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), r = 0; i.length > r; r++) u(t, n = i[r]) && !u(e, n) && b(e, n, v(t, n))
            };
            r && x && L(o[E], x), (_ || r) && L(o[E], S)
        },
        2953: function (e, t, n) {
            "use strict";
            var i = n(4576),
                r = n(7400),
                a = n(9296),
                s = n(3792),
                o = n(6699),
                l = n(687),
                c = n(8227)("iterator"),
                u = s.values,
                d = function (e, t) {
                    if (e) {
                        if (e[c] !== u) try {
                            o(e, c, u)
                        } catch (i) {
                            e[c] = u
                        }
                        if (l(e, t, !0), r[t])
                            for (var n in s)
                                if (e[n] !== s[n]) try {
                                    o(e, n, s[n])
                                } catch (i) {
                                    e[n] = s[n]
                                }
                    }
                };
            for (var p in r) d(i[p] && i[p].prototype, p);
            d(a, "DOMTokenList")
        },
        2967: function (e, t, n) {
            "use strict";
            var i = n(6706),
                r = n(34),
                a = n(7750),
                s = n(3506);
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var e, t = !1,
                    n = {};
                try {
                    (e = i(Object.prototype, "__proto__", "set"))(n, []), t = n instanceof Array
                } catch (o) { }
                return function (n, i) {
                    return a(n), s(i), r(n) ? (t ? e(n, i) : n.__proto__ = i, n) : n
                }
            }() : void 0)
        },
        3110: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(7751),
                a = n(8745),
                s = n(9565),
                o = n(9504),
                l = n(9039),
                c = n(4901),
                u = n(757),
                d = n(7680),
                p = n(6933),
                f = n(4495),
                h = String,
                m = r("JSON", "stringify"),
                g = o(/./.exec),
                v = o("".charAt),
                b = o("".charCodeAt),
                y = o("".replace),
                w = o(1..toString),
                E = /[\uD800-\uDFFF]/g,
                S = /^[\uD800-\uDBFF]$/,
                x = /^[\uDC00-\uDFFF]$/,
                T = !f || l((function () {
                    var e = r("Symbol")("stringify detection");
                    return "[null]" !== m([e]) || "{}" !== m({
                        a: e
                    }) || "{}" !== m(Object(e))
                })),
                O = l((function () {
                    return '"\\udf06\\ud834"' !== m("\udf06\ud834") || '"\\udead"' !== m("\udead")
                })),
                k = function (e, t) {
                    var n = d(arguments),
                        i = p(t);
                    if (c(i) || void 0 !== e && !u(e)) return n[1] = function (e, t) {
                        if (c(i) && (t = s(i, this, h(e), t)), !u(t)) return t
                    }, a(m, null, n)
                },
                C = function (e, t, n) {
                    var i = v(n, t - 1),
                        r = v(n, t + 1);
                    return g(S, e) && !g(x, r) || g(x, e) && !g(S, i) ? "\\u" + w(b(e, 0), 16) : e
                };
            m && i({
                target: "JSON",
                stat: !0,
                arity: 3,
                forced: T || O
            }, {
                stringify: function (e, t, n) {
                    var i = d(arguments),
                        r = a(T ? k : m, null, i);
                    return O && "string" == typeof r ? y(r, E, C) : r
                }
            })
        },
        3167: function (e, t, n) {
            "use strict";
            var i = n(4901),
                r = n(34),
                a = n(2967);
            e.exports = function (e, t, n) {
                var s, o;
                return a && i(s = t.constructor) && s !== n && r(o = s.prototype) && o !== n.prototype && a(e, o), e
            }
        },
        3179: function (e, t, n) {
            "use strict";
            var i = n(2140),
                r = n(6955);
            e.exports = i ? {}.toString : function () {
                return "[object " + r(this) + "]"
            }
        },
        3392: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = 0,
                a = Math.random(),
                s = i(1..toString);
            e.exports = function (e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++r + a, 36)
            }
        },
        3506: function (e, t, n) {
            "use strict";
            var i = n(3925),
                r = String,
                a = TypeError;
            e.exports = function (e) {
                if (i(e)) return e;
                throw new a("Can't set " + r(e) + " as a prototype")
            }
        },
        3517: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(9039),
                a = n(4901),
                s = n(6955),
                o = n(7751),
                l = n(3706),
                c = function () { },
                u = o("Reflect", "construct"),
                d = /^\s*(?:class|function)\b/,
                p = i(d.exec),
                f = !d.test(c),
                h = function (e) {
                    if (!a(e)) return !1;
                    try {
                        return u(c, [], e), !0
                    } catch (t) {
                        return !1
                    }
                },
                m = function (e) {
                    if (!a(e)) return !1;
                    switch (s(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return f || !!p(d, l(e))
                    } catch (t) {
                        return !0
                    }
                };
            m.sham = !0, e.exports = !u || r((function () {
                var e;
                return h(h.call) || !h(Object) || !h((function () {
                    e = !0
                })) || e
            })) ? m : h
        },
        3591: function (e, t, n) {
            "use strict";
            n.r(t);
            var i = function () {
                if ("undefined" != typeof Map) return Map;

                function e(e, t) {
                    var n = -1;
                    return e.some((function (e, i) {
                        return e[0] === t && (n = i, !0)
                    })), n
                }
                return function () {
                    function t() {
                        this.__entries__ = []
                    }
                    return Object.defineProperty(t.prototype, "size", {
                        get: function () {
                            return this.__entries__.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.get = function (t) {
                        var n = e(this.__entries__, t),
                            i = this.__entries__[n];
                        return i && i[1]
                    }, t.prototype.set = function (t, n) {
                        var i = e(this.__entries__, t);
                        ~i ? this.__entries__[i][1] = n : this.__entries__.push([t, n])
                    }, t.prototype.delete = function (t) {
                        var n = this.__entries__,
                            i = e(n, t);
                        ~i && n.splice(i, 1)
                    }, t.prototype.has = function (t) {
                        return !!~e(this.__entries__, t)
                    }, t.prototype.clear = function () {
                        this.__entries__.splice(0)
                    }, t.prototype.forEach = function (e, t) {
                        void 0 === t && (t = null);
                        for (var n = 0, i = this.__entries__; n < i.length; n++) {
                            var r = i[n];
                            e.call(t, r[1], r[0])
                        }
                    }, t
                }()
            }(),
                r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                a = void 0 !== n.g && n.g.Math === Math ? n.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                s = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(a) : function (e) {
                    return setTimeout((function () {
                        return e(Date.now())
                    }), 1e3 / 60)
                };
            var o = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                l = "undefined" != typeof MutationObserver,
                c = function () {
                    function e() {
                        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (e, t) {
                            var n = !1,
                                i = !1,
                                r = 0;

                            function a() {
                                n && (n = !1, e()), i && l()
                            }

                            function o() {
                                s(a)
                            }

                            function l() {
                                var e = Date.now();
                                if (n) {
                                    if (e - r < 2) return;
                                    i = !0
                                } else n = !0, i = !1, setTimeout(o, t);
                                r = e
                            }
                            return l
                        }(this.refresh.bind(this), 20)
                    }
                    return e.prototype.addObserver = function (e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                    }, e.prototype.removeObserver = function (e) {
                        var t = this.observers_,
                            n = t.indexOf(e);
                        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                    }, e.prototype.refresh = function () {
                        this.updateObservers_() && this.refresh()
                    }, e.prototype.updateObservers_ = function () {
                        var e = this.observers_.filter((function (e) {
                            return e.gatherActive(), e.hasActive()
                        }));
                        return e.forEach((function (e) {
                            return e.broadcastActive()
                        })), e.length > 0
                    }, e.prototype.connect_ = function () {
                        r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), l ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                    }, e.prototype.disconnect_ = function () {
                        r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                    }, e.prototype.onTransitionEnd_ = function (e) {
                        var t = e.propertyName,
                            n = void 0 === t ? "" : t;
                        o.some((function (e) {
                            return !!~n.indexOf(e)
                        })) && this.refresh()
                    }, e.getInstance = function () {
                        return this.instance_ || (this.instance_ = new e), this.instance_
                    }, e.instance_ = null, e
                }(),
                u = function (e, t) {
                    for (var n = 0, i = Object.keys(t); n < i.length; n++) {
                        var r = i[n];
                        Object.defineProperty(e, r, {
                            value: t[r],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return e
                },
                d = function (e) {
                    return e && e.ownerDocument && e.ownerDocument.defaultView || a
                },
                p = b(0, 0, 0, 0);

            function f(e) {
                return parseFloat(e) || 0
            }

            function h(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.reduce((function (t, n) {
                    return t + f(e["border-" + n + "-width"])
                }), 0)
            }

            function m(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return p;
                var i = d(e).getComputedStyle(e),
                    r = function (e) {
                        for (var t = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
                            var r = i[n],
                                a = e["padding-" + r];
                            t[r] = f(a)
                        }
                        return t
                    }(i),
                    a = r.left + r.right,
                    s = r.top + r.bottom,
                    o = f(i.width),
                    l = f(i.height);
                if ("border-box" === i.boxSizing && (Math.round(o + a) !== t && (o -= h(i, "left", "right") + a), Math.round(l + s) !== n && (l -= h(i, "top", "bottom") + s)), ! function (e) {
                    return e === d(e).document.documentElement
                }(e)) {
                    var c = Math.round(o + a) - t,
                        u = Math.round(l + s) - n;
                    1 !== Math.abs(c) && (o -= c), 1 !== Math.abs(u) && (l -= u)
                }
                return b(r.left, r.top, o, l)
            }
            var g = "undefined" != typeof SVGGraphicsElement ? function (e) {
                return e instanceof d(e).SVGGraphicsElement
            } : function (e) {
                return e instanceof d(e).SVGElement && "function" == typeof e.getBBox
            };

            function v(e) {
                return r ? g(e) ? function (e) {
                    var t = e.getBBox();
                    return b(0, 0, t.width, t.height)
                }(e) : m(e) : p
            }

            function b(e, t, n, i) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: i
                }
            }
            var y = function () {
                function e(e) {
                    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = b(0, 0, 0, 0), this.target = e
                }
                return e.prototype.isActive = function () {
                    var e = v(this.target);
                    return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                }, e.prototype.broadcastRect = function () {
                    var e = this.contentRect_;
                    return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                }, e
            }(),
                w = function (e, t) {
                    var n, i, r, a, s, o, l, c = (i = (n = t).x, r = n.y, a = n.width, s = n.height, o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l = Object.create(o.prototype), u(l, {
                        x: i,
                        y: r,
                        width: a,
                        height: s,
                        top: r,
                        right: i + a,
                        bottom: s + r,
                        left: i
                    }), l);
                    u(this, {
                        target: e,
                        contentRect: c
                    })
                },
                E = function () {
                    function e(e, t, n) {
                        if (this.activeObservations_ = [], this.observations_ = new i, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
                    }
                    return e.prototype.observe = function (e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh())
                        }
                    }, e.prototype.unobserve = function (e) {
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof d(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                        }
                    }, e.prototype.disconnect = function () {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                    }, e.prototype.gatherActive = function () {
                        var e = this;
                        this.clearActive(), this.observations_.forEach((function (t) {
                            t.isActive() && e.activeObservations_.push(t)
                        }))
                    }, e.prototype.broadcastActive = function () {
                        if (this.hasActive()) {
                            var e = this.callbackCtx_,
                                t = this.activeObservations_.map((function (e) {
                                    return new w(e.target, e.broadcastRect())
                                }));
                            this.callback_.call(e, t, e), this.clearActive()
                        }
                    }, e.prototype.clearActive = function () {
                        this.activeObservations_.splice(0)
                    }, e.prototype.hasActive = function () {
                        return this.activeObservations_.length > 0
                    }, e
                }(),
                S = "undefined" != typeof WeakMap ? new WeakMap : new i,
                x = function e(t) {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = c.getInstance(),
                        i = new E(t, n, this);
                    S.set(this, i)
                };
            ["observe", "unobserve", "disconnect"].forEach((function (e) {
                x.prototype[e] = function () {
                    var t;
                    return (t = S.get(this))[e].apply(t, arguments)
                }
            }));
            var T = void 0 !== a.ResizeObserver ? a.ResizeObserver : x;
            t.default = T
        },
        3640: function (e, t, n) {
            "use strict";
            var i = n(8551),
                r = n(4270),
                a = TypeError;
            e.exports = function (e) {
                if (i(this), "string" === e || "default" === e) e = "string";
                else if ("number" !== e) throw new a("Incorrect hint");
                return r(this, e)
            }
        },
        3706: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(4901),
                a = n(7629),
                s = i(Function.toString);
            r(a.inspectSource) || (a.inspectSource = function (e) {
                return s(e)
            }), e.exports = a.inspectSource
        },
        3717: function (e, t) {
            "use strict";
            t.f = Object.getOwnPropertySymbols
        },
        3724: function (e, t, n) {
            "use strict";
            var i = n(9039);
            e.exports = !i((function () {
                return 7 !== Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    }
                })[1]
            }))
        },
        3792: function (e, t, n) {
            "use strict";
            var i = n(5397),
                r = n(6469),
                a = n(6269),
                s = n(1181),
                o = n(4913).f,
                l = n(1088),
                c = n(2529),
                u = n(8776),
                d = n(3724),
                p = "Array Iterator",
                f = s.set,
                h = s.getterFor(p);
            e.exports = l(Array, "Array", (function (e, t) {
                f(this, {
                    type: p,
                    target: i(e),
                    index: 0,
                    kind: t
                })
            }), (function () {
                var e = h(this),
                    t = e.target,
                    n = e.index++;
                if (!t || n >= t.length) return e.target = null, c(void 0, !0);
                switch (e.kind) {
                    case "keys":
                        return c(n, !1);
                    case "values":
                        return c(t[n], !1)
                }
                return c([n, t[n]], !1)
            }), "values");
            var m = a.Arguments = a.Array;
            if (r("keys"), r("values"), r("entries"), !u && d && "values" !== m.name) try {
                o(m, "name", {
                    value: "values"
                })
            } catch (g) { }
        },
        3802: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(7750),
                a = n(655),
                s = n(7452),
                o = i("".replace),
                l = RegExp("^[" + s + "]+"),
                c = RegExp("(^|[^" + s + "])[" + s + "]+$"),
                u = function (e) {
                    return function (t) {
                        var n = a(r(t));
                        return 1 & e && (n = o(n, l, "")), 2 & e && (n = o(n, c, "$1")), n
                    }
                };
            e.exports = {
                start: u(1),
                end: u(2),
                trim: u(3)
            }
        },
        3925: function (e, t, n) {
            "use strict";
            var i = n(34);
            e.exports = function (e) {
                return i(e) || null === e
            }
        },
        3994: function (e, t, n) {
            "use strict";
            var i = n(7657).IteratorPrototype,
                r = n(2360),
                a = n(6980),
                s = n(687),
                o = n(6269),
                l = function () {
                    return this
                };
            e.exports = function (e, t, n, c) {
                var u = t + " Iterator";
                return e.prototype = r(i, {
                    next: a(+!c, n)
                }), s(e, u, !1, !0), o[u] = l, e
            }
        },
        4055: function (e, t, n) {
            "use strict";
            var i = n(4576),
                r = n(34),
                a = i.document,
                s = r(a) && r(a.createElement);
            e.exports = function (e) {
                return s ? a.createElement(e) : {}
            }
        },
        4117: function (e) {
            "use strict";
            e.exports = function (e) {
                return null == e
            }
        },
        4270: function (e, t, n) {
            "use strict";
            var i = n(9565),
                r = n(4901),
                a = n(34),
                s = TypeError;
            e.exports = function (e, t) {
                var n, o;
                if ("string" === t && r(n = e.toString) && !a(o = i(n, e))) return o;
                if (r(n = e.valueOf) && !a(o = i(n, e))) return o;
                if ("string" !== t && r(n = e.toString) && !a(o = i(n, e))) return o;
                throw new s("Can't convert object to primitive value")
            }
        },
        4373: function (e, t, n) {
            "use strict";

            function i() {
                return i = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, i.apply(null, arguments)
            }

            function r(e, t) {
                if (null == e) return {};
                var n = {};
                for (var i in e)
                    if ({}.hasOwnProperty.call(e, i)) {
                        if (t.includes(i)) continue;
                        n[i] = e[i]
                    }
                return n
            }
            n.r(t), n.d(t, {
                default: function () {
                    return S
                }
            });
            var a = n(5540);

            function s(e, t) {
                return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            var o = n(6540),
                l = n(961),
                c = !1,
                u = o.createContext(null),
                d = function (e) {
                    return e.scrollTop
                },
                p = "unmounted",
                f = "exited",
                h = "entering",
                m = "entered",
                g = "exiting",
                v = function (e) {
                    function t(t, n) {
                        var i;
                        i = e.call(this, t, n) || this;
                        var r, a = n && !n.isMounting ? t.enter : t.appear;
                        return i.appearStatus = null, t.in ? a ? (r = f, i.appearStatus = h) : r = m : r = t.unmountOnExit || t.mountOnEnter ? p : f, i.state = {
                            status: r
                        }, i.nextCallback = null, i
                    } (0, a.A)(t, e), t.getDerivedStateFromProps = function (e, t) {
                        return e.in && t.status === p ? {
                            status: f
                        } : null
                    };
                    var n = t.prototype;
                    return n.componentDidMount = function () {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function (e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== h && n !== m && (t = h) : n !== h && n !== m || (t = g)
                        }
                        this.updateStatus(!1, t)
                    }, n.componentWillUnmount = function () {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function () {
                        var e, t, n, i = this.props.timeout;
                        return e = t = n = i, null != i && "number" != typeof i && (e = i.exit, t = i.enter, n = void 0 !== i.appear ? i.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, n.updateStatus = function (e, t) {
                        if (void 0 === e && (e = !1), null !== t)
                            if (this.cancelNextCallback(), t === h) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var n = this.props.nodeRef ? this.props.nodeRef.current : l.findDOMNode(this);
                                    n && d(n)
                                }
                                this.performEnter(e)
                            } else this.performExit();
                        else this.props.unmountOnExit && this.state.status === f && this.setState({
                            status: p
                        })
                    }, n.performEnter = function (e) {
                        var t = this,
                            n = this.props.enter,
                            i = this.context ? this.context.isMounting : e,
                            r = this.props.nodeRef ? [i] : [l.findDOMNode(this), i],
                            a = r[0],
                            s = r[1],
                            o = this.getTimeouts(),
                            u = i ? o.appear : o.enter;
                        !e && !n || c ? this.safeSetState({
                            status: m
                        }, (function () {
                            t.props.onEntered(a)
                        })) : (this.props.onEnter(a, s), this.safeSetState({
                            status: h
                        }, (function () {
                            t.props.onEntering(a, s), t.onTransitionEnd(u, (function () {
                                t.safeSetState({
                                    status: m
                                }, (function () {
                                    t.props.onEntered(a, s)
                                }))
                            }))
                        })))
                    }, n.performExit = function () {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            i = this.props.nodeRef ? void 0 : l.findDOMNode(this);
                        t && !c ? (this.props.onExit(i), this.safeSetState({
                            status: g
                        }, (function () {
                            e.props.onExiting(i), e.onTransitionEnd(n.exit, (function () {
                                e.safeSetState({
                                    status: f
                                }, (function () {
                                    e.props.onExited(i)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: f
                        }, (function () {
                            e.props.onExited(i)
                        }))
                    }, n.cancelNextCallback = function () {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function (e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, n.setNextCallback = function (e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function (i) {
                            n && (n = !1, t.nextCallback = null, e(i))
                        }, this.nextCallback.cancel = function () {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function (e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : l.findDOMNode(this),
                            i = null == e && !this.props.addEndListener;
                        if (n && !i) {
                            if (this.props.addEndListener) {
                                var r = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    a = r[0],
                                    s = r[1];
                                this.props.addEndListener(a, s)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function () {
                        var e = this.state.status;
                        if (e === p) return null;
                        var t = this.props,
                            n = t.children,
                            i = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, r(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return o.createElement(u.Provider, {
                            value: null
                        }, "function" == typeof n ? n(e, i) : o.cloneElement(o.Children.only(n), i))
                    }, t
                }(o.Component);

            function b() { }
            v.contextType = u, v.propTypes = {}, v.defaultProps = {
                in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: b,
                onEntering: b,
                onEntered: b,
                onExit: b,
                onExiting: b,
                onExited: b
            }, v.UNMOUNTED = p, v.EXITED = f, v.ENTERING = h, v.ENTERED = m, v.EXITING = g;
            var y = v,
                w = function (e, t) {
                    return e && t && t.split(" ").forEach((function (t) {
                        return i = t, void ((n = e).classList ? n.classList.remove(i) : "string" == typeof n.className ? n.className = s(n.className, i) : n.setAttribute("class", s(n.className && n.className.baseVal || "", i)));
                        var n, i
                    }))
                },
                E = function (e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(i)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, t.onEnter = function (e, n) {
                            var i = t.resolveArguments(e, n),
                                r = i[0],
                                a = i[1];
                            t.removeClasses(r, "exit"), t.addClass(r, a ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n)
                        }, t.onEntering = function (e, n) {
                            var i = t.resolveArguments(e, n),
                                r = i[0],
                                a = i[1] ? "appear" : "enter";
                            t.addClass(r, a, "active"), t.props.onEntering && t.props.onEntering(e, n)
                        }, t.onEntered = function (e, n) {
                            var i = t.resolveArguments(e, n),
                                r = i[0],
                                a = i[1] ? "appear" : "enter";
                            t.removeClasses(r, a), t.addClass(r, a, "done"), t.props.onEntered && t.props.onEntered(e, n)
                        }, t.onExit = function (e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e)
                        }, t.onExiting = function (e) {
                            var n = t.resolveArguments(e)[0];
                            t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
                        }, t.onExited = function (e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e)
                        }, t.resolveArguments = function (e, n) {
                            return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
                        }, t.getClassNames = function (e) {
                            var n = t.props.classNames,
                                i = "string" == typeof n,
                                r = i ? "" + (i && n ? n + "-" : "") + e : n[e];
                            return {
                                baseClassName: r,
                                activeClassName: i ? r + "-active" : n[e + "Active"],
                                doneClassName: i ? r + "-done" : n[e + "Done"]
                            }
                        }, t
                    } (0, a.A)(t, e);
                    var n = t.prototype;
                    return n.addClass = function (e, t, n) {
                        var i = this.getClassNames(t)[n + "ClassName"],
                            r = this.getClassNames("enter").doneClassName;
                        "appear" === t && "done" === n && r && (i += " " + r), "active" === n && e && d(e), i && (this.appliedClasses[t][n] = i, function (e, t) {
                            e && t && t.split(" ").forEach((function (t) {
                                return i = t, void ((n = e).classList ? n.classList.add(i) : function (e, t) {
                                    return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                                }(n, i) || ("string" == typeof n.className ? n.className = n.className + " " + i : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + i)));
                                var n, i
                            }))
                        }(e, i))
                    }, n.removeClasses = function (e, t) {
                        var n = this.appliedClasses[t],
                            i = n.base,
                            r = n.active,
                            a = n.done;
                        this.appliedClasses[t] = {}, i && w(e, i), r && w(e, r), a && w(e, a)
                    }, n.render = function () {
                        var e = this.props,
                            t = (e.classNames, r(e, ["classNames"]));
                        return o.createElement(y, i({}, t, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, t
                }(o.Component);
            E.defaultProps = {
                classNames: ""
            }, E.propTypes = {};
            var S = E
        },
        4376: function (e, t, n) {
            "use strict";
            var i = n(2195);
            e.exports = Array.isArray || function (e) {
                return "Array" === i(e)
            }
        },
        4495: function (e, t, n) {
            "use strict";
            var i = n(9519),
                r = n(9039),
                a = n(4576).String;
            e.exports = !!Object.getOwnPropertySymbols && !r((function () {
                var e = Symbol("symbol detection");
                return !a(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && i && i < 41
            }))
        },
        4576: function (e, t, n) {
            "use strict";
            var i = function (e) {
                return e && e.Math === Math && e
            };
            e.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof n.g && n.g) || i("object" == typeof this && this) || function () {
                return this
            }() || Function("return this")()
        },
        4589: function (e, t, n) {
            "use strict";
            t.A = void 0;
            var i, r = (i = n(8120)) && i.__esModule ? i : {
                default: i
            };
            t.A = r.default
        },
        4659: function (e, t, n) {
            "use strict";
            var i = n(3724),
                r = n(4913),
                a = n(6980);
            e.exports = function (e, t, n) {
                i ? r.f(e, t, a(0, n)) : e[t] = n
            }
        },
        4901: function (e) {
            "use strict";
            var t = "object" == typeof document && document.all;
            e.exports = void 0 === t && void 0 !== t ? function (e) {
                return "function" == typeof e || e === t
            } : function (e) {
                return "function" == typeof e
            }
        },
        4913: function (e, t, n) {
            "use strict";
            var i = n(3724),
                r = n(5917),
                a = n(8686),
                s = n(8551),
                o = n(6969),
                l = TypeError,
                c = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor,
                d = "enumerable",
                p = "configurable",
                f = "writable";
            t.f = i ? a ? function (e, t, n) {
                if (s(e), t = o(t), s(n), "function" == typeof e && "prototype" === t && "value" in n && f in n && !n[f]) {
                    var i = u(e, t);
                    i && i[f] && (e[t] = n.value, n = {
                        configurable: p in n ? n[p] : i[p],
                        enumerable: d in n ? n[d] : i[d],
                        writable: !1
                    })
                }
                return c(e, t, n)
            } : c : function (e, t, n) {
                if (s(e), t = o(t), s(n), r) try {
                    return c(e, t, n)
                } catch (i) { }
                if ("get" in n || "set" in n) throw new l("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        4999: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InnerSlider = void 0;
            var i = p(n(6540)),
                r = p(n(8841)),
                a = p(n(181)),
                s = p(n(6942)),
                o = n(9445),
                l = n(5942),
                c = n(773),
                u = n(9223),
                d = p(n(3591));

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f(e)
            }

            function h() {
                return h = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, h.apply(this, arguments)
            }

            function m(e, t) {
                if (null == e) return {};
                var n, i, r = function (e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function (t) {
                        T(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function b(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, O(i.key), i)
                }
            }

            function y(e, t) {
                return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                }, y(e, t)
            }

            function w(e) {
                var t = S();
                return function () {
                    var n, i = x(e);
                    if (t) {
                        var r = x(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === f(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return E(e)
                    }(this, n)
                }
            }

            function E(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { })))
                } catch (e) { }
                return (S = function () {
                    return !!e
                })()
            }

            function x(e) {
                return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, x(e)
            }

            function T(e, t, n) {
                return (t = O(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function O(e) {
                var t = function (e, t) {
                    if ("object" != f(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(e, t || "default");
                        if ("object" != f(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == f(t) ? t : String(t)
            }
            t.InnerSlider = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && y(e, t)
                }(S, e);
                var t, n, p, g = w(S);

                function S(e) {
                    var t;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, S), T(E(t = g.call(this, e)), "listRefHandler", (function (e) {
                        return t.list = e
                    })), T(E(t), "trackRefHandler", (function (e) {
                        return t.track = e
                    })), T(E(t), "adaptHeight", (function () {
                        if (t.props.adaptiveHeight && t.list) {
                            var e = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
                            t.list.style.height = (0, o.getHeight)(e) + "px"
                        }
                    })), T(E(t), "componentDidMount", (function () {
                        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
                            var e = (0, o.getOnDemandLazySlides)(v(v({}, t.props), t.state));
                            e.length > 0 && (t.setState((function (t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            })), t.props.onLazyLoad && t.props.onLazyLoad(e))
                        }
                        var n = v({
                            listRef: t.list,
                            trackRef: t.track
                        }, t.props);
                        t.updateState(n, !0, (function () {
                            t.adaptHeight(), t.props.autoplay && t.autoPlay("update")
                        })), "progressive" === t.props.lazyLoad && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new d.default((function () {
                            t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout((function () {
                                return t.onWindowResized()
                            }), t.props.speed))) : t.onWindowResized()
                        })), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), (function (e) {
                            e.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, e.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null
                        })), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized)
                    })), T(E(t), "componentWillUnmount", (function () {
                        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach((function (e) {
                            return clearTimeout(e)
                        })), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect()
                    })), T(E(t), "componentDidUpdate", (function (e) {
                        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
                            var n = (0, o.getOnDemandLazySlides)(v(v({}, t.props), t.state));
                            n.length > 0 && (t.setState((function (e) {
                                return {
                                    lazyLoadedList: e.lazyLoadedList.concat(n)
                                }
                            })), t.props.onLazyLoad && t.props.onLazyLoad(n))
                        }
                        t.adaptHeight();
                        var r = v(v({
                            listRef: t.list,
                            trackRef: t.track
                        }, t.props), t.state),
                            a = t.didPropsChange(e);
                        a && t.updateState(r, a, (function () {
                            t.state.currentSlide >= i.default.Children.count(t.props.children) && t.changeSlide({
                                message: "index",
                                index: i.default.Children.count(t.props.children) - t.props.slidesToShow,
                                currentSlide: t.state.currentSlide
                            }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused")
                        }))
                    })), T(E(t), "onWindowResized", (function (e) {
                        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, a.default)((function () {
                            return t.resizeWindow(e)
                        }), 50), t.debouncedResize()
                    })), T(E(t), "resizeWindow", (function () {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (Boolean(t.track && t.track.node)) {
                            var n = v(v({
                                listRef: t.list,
                                trackRef: t.track
                            }, t.props), t.state);
                            t.updateState(n, e, (function () {
                                t.props.autoplay ? t.autoPlay("update") : t.pause("paused")
                            })), t.setState({
                                animating: !1
                            }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback
                        }
                    })), T(E(t), "updateState", (function (e, n, r) {
                        var a = (0, o.initializedState)(e);
                        e = v(v(v({}, e), a), {}, {
                            slideIndex: a.currentSlide
                        });
                        var s = (0, o.getTrackLeft)(e);
                        e = v(v({}, e), {}, {
                            left: s
                        });
                        var l = (0, o.getTrackCSS)(e);
                        (n || i.default.Children.count(t.props.children) !== i.default.Children.count(e.children)) && (a.trackStyle = l), t.setState(a, r)
                    })), T(E(t), "ssrInit", (function () {
                        if (t.props.variableWidth) {
                            var e = 0,
                                n = 0,
                                r = [],
                                a = (0, o.getPreClones)(v(v(v({}, t.props), t.state), {}, {
                                    slideCount: t.props.children.length
                                })),
                                s = (0, o.getPostClones)(v(v(v({}, t.props), t.state), {}, {
                                    slideCount: t.props.children.length
                                }));
                            t.props.children.forEach((function (t) {
                                r.push(t.props.style.width), e += t.props.style.width
                            }));
                            for (var l = 0; l < a; l++) n += r[r.length - 1 - l], e += r[r.length - 1 - l];
                            for (var c = 0; c < s; c++) e += r[c];
                            for (var u = 0; u < t.state.currentSlide; u++) n += r[u];
                            var d = {
                                width: e + "px",
                                left: -n + "px"
                            };
                            if (t.props.centerMode) {
                                var p = "".concat(r[t.state.currentSlide], "px");
                                d.left = "calc(".concat(d.left, " + (100% - ").concat(p, ") / 2 ) ")
                            }
                            return {
                                trackStyle: d
                            }
                        }
                        var f = i.default.Children.count(t.props.children),
                            h = v(v(v({}, t.props), t.state), {}, {
                                slideCount: f
                            }),
                            m = (0, o.getPreClones)(h) + (0, o.getPostClones)(h) + f,
                            g = 100 / t.props.slidesToShow * m,
                            b = 100 / m,
                            y = -b * ((0, o.getPreClones)(h) + t.state.currentSlide) * g / 100;
                        return t.props.centerMode && (y += (100 - b * g / 100) / 2), {
                            slideWidth: b + "%",
                            trackStyle: {
                                width: g + "%",
                                left: y + "%"
                            }
                        }
                    })), T(E(t), "checkImagesLoad", (function () {
                        var e = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [],
                            n = e.length,
                            i = 0;
                        Array.prototype.forEach.call(e, (function (e) {
                            var r = function () {
                                return ++i && i >= n && t.onWindowResized()
                            };
                            if (e.onclick) {
                                var a = e.onclick;
                                e.onclick = function (t) {
                                    a(t), e.parentNode.focus()
                                }
                            } else e.onclick = function () {
                                return e.parentNode.focus()
                            };
                            e.onload || (t.props.lazyLoad ? e.onload = function () {
                                t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed))
                            } : (e.onload = r, e.onerror = function () {
                                r(), t.props.onLazyLoadError && t.props.onLazyLoadError()
                            }))
                        }))
                    })), T(E(t), "progressiveLazyLoad", (function () {
                        for (var e = [], n = v(v({}, t.props), t.state), i = t.state.currentSlide; i < t.state.slideCount + (0, o.getPostClones)(n); i++)
                            if (t.state.lazyLoadedList.indexOf(i) < 0) {
                                e.push(i);
                                break
                            }
                        for (var r = t.state.currentSlide - 1; r >= -(0, o.getPreClones)(n); r--)
                            if (t.state.lazyLoadedList.indexOf(r) < 0) {
                                e.push(r);
                                break
                            }
                        e.length > 0 ? (t.setState((function (t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        })), t.props.onLazyLoad && t.props.onLazyLoad(e)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer)
                    })), T(E(t), "slideHandler", (function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = t.props,
                            r = i.asNavFor,
                            a = i.beforeChange,
                            s = i.onLazyLoad,
                            l = i.speed,
                            c = i.afterChange,
                            u = t.state.currentSlide,
                            d = (0, o.slideHandler)(v(v(v({
                                index: e
                            }, t.props), t.state), {}, {
                                trackRef: t.track,
                                useCSS: t.props.useCSS && !n
                            })),
                            p = d.state,
                            f = d.nextState;
                        if (p) {
                            a && a(u, p.currentSlide);
                            var h = p.lazyLoadedList.filter((function (e) {
                                return t.state.lazyLoadedList.indexOf(e) < 0
                            }));
                            s && h.length > 0 && s(h), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), c && c(u), delete t.animationEndCallback), t.setState(p, (function () {
                                r && t.asNavForIndex !== e && (t.asNavForIndex = e, r.innerSlider.slideHandler(e)), f && (t.animationEndCallback = setTimeout((function () {
                                    var e = f.animating,
                                        n = m(f, ["animating"]);
                                    t.setState(n, (function () {
                                        t.callbackTimers.push(setTimeout((function () {
                                            return t.setState({
                                                animating: e
                                            })
                                        }), 10)), c && c(p.currentSlide), delete t.animationEndCallback
                                    }))
                                }), l))
                            }))
                        }
                    })), T(E(t), "changeSlide", (function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            i = v(v({}, t.props), t.state),
                            r = (0, o.changeSlide)(i, e);
                        if ((0 === r || r) && (!0 === n ? t.slideHandler(r, n) : t.slideHandler(r), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
                            var a = t.list.querySelectorAll(".slick-current");
                            a[0] && a[0].focus()
                        }
                    })), T(E(t), "clickHandler", (function (e) {
                        !1 === t.clickable && (e.stopPropagation(), e.preventDefault()), t.clickable = !0
                    })), T(E(t), "keyHandler", (function (e) {
                        var n = (0, o.keyHandler)(e, t.props.accessibility, t.props.rtl);
                        "" !== n && t.changeSlide({
                            message: n
                        })
                    })), T(E(t), "selectHandler", (function (e) {
                        t.changeSlide(e)
                    })), T(E(t), "disableBodyScroll", (function () {
                        window.ontouchmove = function (e) {
                            (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                        }
                    })), T(E(t), "enableBodyScroll", (function () {
                        window.ontouchmove = null
                    })), T(E(t), "swipeStart", (function (e) {
                        t.props.verticalSwiping && t.disableBodyScroll();
                        var n = (0, o.swipeStart)(e, t.props.swipe, t.props.draggable);
                        "" !== n && t.setState(n)
                    })), T(E(t), "swipeMove", (function (e) {
                        var n = (0, o.swipeMove)(e, v(v(v({}, t.props), t.state), {}, {
                            trackRef: t.track,
                            listRef: t.list,
                            slideIndex: t.state.currentSlide
                        }));
                        n && (n.swiping && (t.clickable = !1), t.setState(n))
                    })), T(E(t), "swipeEnd", (function (e) {
                        var n = (0, o.swipeEnd)(e, v(v(v({}, t.props), t.state), {}, {
                            trackRef: t.track,
                            listRef: t.list,
                            slideIndex: t.state.currentSlide
                        }));
                        if (n) {
                            var i = n.triggerSlideHandler;
                            delete n.triggerSlideHandler, t.setState(n), void 0 !== i && (t.slideHandler(i), t.props.verticalSwiping && t.enableBodyScroll())
                        }
                    })), T(E(t), "touchEnd", (function (e) {
                        t.swipeEnd(e), t.clickable = !0
                    })), T(E(t), "slickPrev", (function () {
                        t.callbackTimers.push(setTimeout((function () {
                            return t.changeSlide({
                                message: "previous"
                            })
                        }), 0))
                    })), T(E(t), "slickNext", (function () {
                        t.callbackTimers.push(setTimeout((function () {
                            return t.changeSlide({
                                message: "next"
                            })
                        }), 0))
                    })), T(E(t), "slickGoTo", (function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (e = Number(e), isNaN(e)) return "";
                        t.callbackTimers.push(setTimeout((function () {
                            return t.changeSlide({
                                message: "index",
                                index: e,
                                currentSlide: t.state.currentSlide
                            }, n)
                        }), 0))
                    })), T(E(t), "play", (function () {
                        var e;
                        if (t.props.rtl) e = t.state.currentSlide - t.props.slidesToScroll;
                        else {
                            if (!(0, o.canGoNext)(v(v({}, t.props), t.state))) return !1;
                            e = t.state.currentSlide + t.props.slidesToScroll
                        }
                        t.slideHandler(e)
                    })), T(E(t), "autoPlay", (function (e) {
                        t.autoplayTimer && clearInterval(t.autoplayTimer);
                        var n = t.state.autoplaying;
                        if ("update" === e) {
                            if ("hovered" === n || "focused" === n || "paused" === n) return
                        } else if ("leave" === e) {
                            if ("paused" === n || "focused" === n) return
                        } else if ("blur" === e && ("paused" === n || "hovered" === n)) return;
                        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
                            autoplaying: "playing"
                        })
                    })), T(E(t), "pause", (function (e) {
                        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
                        var n = t.state.autoplaying;
                        "paused" === e ? t.setState({
                            autoplaying: "paused"
                        }) : "focused" === e ? "hovered" !== n && "playing" !== n || t.setState({
                            autoplaying: "focused"
                        }) : "playing" === n && t.setState({
                            autoplaying: "hovered"
                        })
                    })), T(E(t), "onDotsOver", (function () {
                        return t.props.autoplay && t.pause("hovered")
                    })), T(E(t), "onDotsLeave", (function () {
                        return t.props.autoplay && "hovered" === t.state.autoplaying && t.autoPlay("leave")
                    })), T(E(t), "onTrackOver", (function () {
                        return t.props.autoplay && t.pause("hovered")
                    })), T(E(t), "onTrackLeave", (function () {
                        return t.props.autoplay && "hovered" === t.state.autoplaying && t.autoPlay("leave")
                    })), T(E(t), "onSlideFocus", (function () {
                        return t.props.autoplay && t.pause("focused")
                    })), T(E(t), "onSlideBlur", (function () {
                        return t.props.autoplay && "focused" === t.state.autoplaying && t.autoPlay("blur")
                    })), T(E(t), "render", (function () {
                        var e, n, r, a = (0, s.default)("slick-slider", t.props.className, {
                            "slick-vertical": t.props.vertical,
                            "slick-initialized": !0
                        }),
                            d = v(v({}, t.props), t.state),
                            p = (0, o.extractObject)(d, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]),
                            f = t.props.pauseOnHover;
                        if (p = v(v({}, p), {}, {
                            onMouseEnter: f ? t.onTrackOver : null,
                            onMouseLeave: f ? t.onTrackLeave : null,
                            onMouseOver: f ? t.onTrackOver : null,
                            focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
                        }), !0 === t.props.dots && t.state.slideCount >= t.props.slidesToShow) {
                            var m = (0, o.extractObject)(d, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                                g = t.props.pauseOnDotsHover;
                            m = v(v({}, m), {}, {
                                clickHandler: t.changeSlide,
                                onMouseEnter: g ? t.onDotsLeave : null,
                                onMouseOver: g ? t.onDotsOver : null,
                                onMouseLeave: g ? t.onDotsLeave : null
                            }), e = i.default.createElement(c.Dots, m)
                        }
                        var b = (0, o.extractObject)(d, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                        b.clickHandler = t.changeSlide, t.props.arrows && (n = i.default.createElement(u.PrevArrow, b), r = i.default.createElement(u.NextArrow, b));
                        var y = null;
                        t.props.vertical && (y = {
                            height: t.state.listHeight
                        });
                        var w = null;
                        !1 === t.props.vertical ? !0 === t.props.centerMode && (w = {
                            padding: "0px " + t.props.centerPadding
                        }) : !0 === t.props.centerMode && (w = {
                            padding: t.props.centerPadding + " 0px"
                        });
                        var E = v(v({}, y), w),
                            S = t.props.touchMove,
                            x = {
                                className: "slick-list",
                                style: E,
                                onClick: t.clickHandler,
                                onMouseDown: S ? t.swipeStart : null,
                                onMouseMove: t.state.dragging && S ? t.swipeMove : null,
                                onMouseUp: S ? t.swipeEnd : null,
                                onMouseLeave: t.state.dragging && S ? t.swipeEnd : null,
                                onTouchStart: S ? t.swipeStart : null,
                                onTouchMove: t.state.dragging && S ? t.swipeMove : null,
                                onTouchEnd: S ? t.touchEnd : null,
                                onTouchCancel: t.state.dragging && S ? t.swipeEnd : null,
                                onKeyDown: t.props.accessibility ? t.keyHandler : null
                            },
                            T = {
                                className: a,
                                dir: "ltr",
                                style: t.props.style
                            };
                        return t.props.unslick && (x = {
                            className: "slick-list"
                        }, T = {
                            className: a
                        }), i.default.createElement("div", T, t.props.unslick ? "" : n, i.default.createElement("div", h({
                            ref: t.listRefHandler
                        }, x), i.default.createElement(l.Track, h({
                            ref: t.trackRefHandler
                        }, p), t.props.children)), t.props.unslick ? "" : r, t.props.unslick ? "" : e)
                    })), t.list = null, t.track = null, t.state = v(v({}, r.default), {}, {
                        currentSlide: t.props.initialSlide,
                        targetSlide: t.props.initialSlide ? t.props.initialSlide : 0,
                        slideCount: i.default.Children.count(t.props.children)
                    }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
                    var n = t.ssrInit();
                    return t.state = v(v({}, t.state), n), t
                }
                return t = S, (n = [{
                    key: "didPropsChange",
                    value: function (e) {
                        for (var t = !1, n = 0, r = Object.keys(this.props); n < r.length; n++) {
                            var a = r[n];
                            if (!e.hasOwnProperty(a)) {
                                t = !0;
                                break
                            }
                            if ("object" !== f(e[a]) && "function" != typeof e[a] && !isNaN(e[a]) && e[a] !== this.props[a]) {
                                t = !0;
                                break
                            }
                        }
                        return t || i.default.Children.count(this.props.children) !== i.default.Children.count(e.children)
                    }
                }]) && b(t.prototype, n), p && b(t, p), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), S
            }(i.default.Component)
        },
        5031: function (e, t, n) {
            "use strict";
            var i = n(7751),
                r = n(9504),
                a = n(8480),
                s = n(3717),
                o = n(8551),
                l = r([].concat);
            e.exports = i("Reflect", "ownKeys") || function (e) {
                var t = a.f(o(e)),
                    n = s.f;
                return n ? l(t, n(e)) : t
            }
        },
        5397: function (e, t, n) {
            "use strict";
            var i = n(7055),
                r = n(7750);
            e.exports = function (e) {
                return i(r(e))
            }
        },
        5548: function (e, t, n) {
            "use strict";
            var i = n(3517),
                r = n(6823),
                a = TypeError;
            e.exports = function (e) {
                if (i(e)) return e;
                throw new a(r(e) + " is not a constructor")
            }
        },
        5610: function (e, t, n) {
            "use strict";
            var i = n(1291),
                r = Math.max,
                a = Math.min;
            e.exports = function (e, t) {
                var n = i(e);
                return n < 0 ? r(n + t, 0) : a(n, t)
            }
        },
        5675: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Head: function () {
                    return Je
                },
                default: function () {
                    return Qe
                }
            });
            var i = n(6540),
                r = n(6326),
                a = n(4156),
                s = n(538),
                o = n(4810);

            function l(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function c(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                const n = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => n.indexOf(e) < 0)).forEach((n => {
                    void 0 === e[n] ? e[n] = t[n] : l(t[n]) && l(e[n]) && Object.keys(t[n]).length > 0 && c(e[n], t[n])
                }))
            }
            const u = {
                body: {},
                addEventListener() { },
                removeEventListener() { },
                activeElement: {
                    blur() { },
                    nodeName: ""
                },
                querySelector() {
                    return null
                },
                querySelectorAll() {
                    return []
                },
                getElementById() {
                    return null
                },
                createEvent() {
                    return {
                        initEvent() { }
                    }
                },
                createElement() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute() { },
                        getElementsByTagName() {
                            return []
                        }
                    }
                },
                createElementNS() {
                    return {}
                },
                importNode() {
                    return null
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function d() {
                const e = "undefined" != typeof document ? document : {};
                return c(e, u), e
            }
            const p = {
                document: u,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() { },
                    pushState() { },
                    go() { },
                    back() { }
                },
                CustomEvent: function () {
                    return this
                },
                addEventListener() { },
                removeEventListener() { },
                getComputedStyle() {
                    return {
                        getPropertyValue() {
                            return ""
                        }
                    }
                },
                Image() { },
                Date() { },
                screen: {},
                setTimeout() { },
                clearTimeout() { },
                matchMedia() {
                    return {}
                },
                requestAnimationFrame(e) {
                    return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
                },
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function f() {
                const e = "undefined" != typeof window ? window : {};
                return c(e, p), e
            }

            function h(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function m() {
                return Date.now()
            }

            function g(e, t) {
                void 0 === t && (t = "x");
                const n = f();
                let i, r, a;
                const s = function (e) {
                    const t = f();
                    let n;
                    return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n
                }(e);
                return n.WebKitCSSMatrix ? (r = s.transform || s.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new n.WebKitCSSMatrix("none" === r ? "" : r)) : (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (r = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
            }

            function v(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function b() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let i = 1; i < arguments.length; i += 1) {
                    const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    if (null != r && (n = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                        const n = Object.keys(Object(r)).filter((e => t.indexOf(e) < 0));
                        for (let t = 0, i = n.length; t < i; t += 1) {
                            const i = n[t],
                                a = Object.getOwnPropertyDescriptor(r, i);
                            void 0 !== a && a.enumerable && (v(e[i]) && v(r[i]) ? r[i].__swiper__ ? e[i] = r[i] : b(e[i], r[i]) : !v(e[i]) && v(r[i]) ? (e[i] = {}, r[i].__swiper__ ? e[i] = r[i] : b(e[i], r[i])) : e[i] = r[i])
                        }
                    }
                }
                var n;
                return e
            }

            function y(e, t, n) {
                e.style.setProperty(t, n)
            }

            function w(e) {
                let {
                    swiper: t,
                    targetPosition: n,
                    side: i
                } = e;
                const r = f(),
                    a = -t.translate;
                let s, o = null;
                const l = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
                const c = n > a ? "next" : "prev",
                    u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    d = () => {
                        s = (new Date).getTime(), null === o && (o = s);
                        const e = Math.max(Math.min((s - o) / l, 1), 0),
                            c = .5 - Math.cos(e * Math.PI) / 2;
                        let p = a + c * (n - a);
                        if (u(p, n) && (p = n), t.wrapperEl.scrollTo({
                            [i]: p
                        }), u(p, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [i]: p
                            })
                        })), void r.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = r.requestAnimationFrame(d)
                    };
                d()
            }

            function E(e, t) {
                void 0 === t && (t = "");
                const n = f(),
                    i = [...e.children];
                return n.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t ? i.filter((e => e.matches(t))) : i
            }

            function S(e) {
                try {
                    return void console.warn(e)
                } catch (t) { }
            }

            function x(e, t) {
                void 0 === t && (t = []);
                const n = document.createElement(e);
                return n.classList.add(...Array.isArray(t) ? t : function (e) {
                    return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
                }(t)), n
            }

            function T(e, t) {
                return f().getComputedStyle(e, null).getPropertyValue(t)
            }

            function O(e) {
                let t, n = e;
                if (n) {
                    for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1);
                    return t
                }
            }

            function k(e, t) {
                const n = [];
                let i = e.parentElement;
                for (; i;) t ? i.matches(t) && n.push(i) : n.push(i), i = i.parentElement;
                return n
            }

            function C(e, t, n) {
                const i = f();
                return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function P(e) {
                return (Array.isArray(e) ? e : [e]).filter((e => !!e))
            }

            function _(e, t) {
                void 0 === t && (t = ""), "undefined" != typeof trustedTypes ? e.innerHTML = trustedTypes.createPolicy("html", {
                    createHTML: e => e
                }).createHTML(t) : e.innerHTML = t
            }
            let M, L, j;

            function N() {
                return M || (M = function () {
                    const e = f(),
                        t = d();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), M
            }

            function I(e) {
                return void 0 === e && (e = {}), L || (L = function (e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const n = N(),
                        i = f(),
                        r = i.navigator.platform,
                        a = t || i.navigator.userAgent,
                        s = {
                            ios: !1,
                            android: !1
                        },
                        o = i.screen.width,
                        l = i.screen.height,
                        c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let u = a.match(/(iPad).*OS\s([\d_]+)/);
                    const d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                        p = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === r;
                    let m = "MacIntel" === r;
                    return !u && m && n.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (u = a.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), m = !1), c && !h && (s.os = "android", s.android = !0), (u || p || d) && (s.os = "ios", s.ios = !0), s
                }(e)), L
            }

            function A() {
                return j || (j = function () {
                    const e = f(),
                        t = I();
                    let n = !1;

                    function i() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }
                    if (i()) {
                        const t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            n = e < 16 || 16 === e && i < 2
                        }
                    }
                    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                        a = i();
                    return {
                        isSafari: n || a,
                        needPerspectiveFix: n,
                        need3dFix: a || r && t.ios,
                        isWebView: r
                    }
                }()), j
            }
            var z = {
                on(e, t, n) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" != typeof t) return i;
                    const r = n ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                    })), i
                },
                once(e, t, n) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" != typeof t) return i;

                    function r() {
                        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                        for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                        t.apply(i, a)
                    }
                    return r.__emitterProxy = t, i.on(e, r, n)
                },
                onAny(e, t) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" != typeof e) return n;
                    const i = t ? "unshift" : "push";
                    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const n = t.eventsAnyListeners.indexOf(e);
                    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
                },
                off(e, t) {
                    const n = this;
                    return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (e.split(" ").forEach((e => {
                        void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].forEach(((i, r) => {
                            (i === t || i.__emitterProxy && i.__emitterProxy === t) && n.eventsListeners[e].splice(r, 1)
                        }))
                    })), n) : n
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, n, i;
                    for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                    "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], n = a.slice(1, a.length), i = e) : (t = a[0].events, n = a[0].data, i = a[0].context || e), n.unshift(i);
                    return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(i, [t, ...n])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(i, n)
                        }))
                    })), e
                }
            };
            const D = (e, t, n) => {
                t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n)
            };
            const R = (e, t, n) => {
                t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n)
            };
            const F = (e, t) => {
                if (!e || e.destroyed || !e.params) return;
                const n = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                if (n) {
                    let t = n.querySelector(`.${e.params.lazyPreloaderClass}`);
                    !t && e.isElement && (n.shadowRoot ? t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
                        n.shadowRoot && (t = n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
                    }))), t && t.remove()
                }
            },
                B = (e, t) => {
                    if (!e.slides[t]) return;
                    const n = e.slides[t].querySelector('[loading="lazy"]');
                    n && n.removeAttribute("loading")
                },
                G = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext;
                    const n = e.slides.length;
                    if (!n || !t || t < 0) return;
                    t = Math.min(t, n);
                    const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        r = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        const n = r,
                            a = [n - t];
                        return a.push(...Array.from({
                            length: t
                        }).map(((e, t) => n + i + t))), void e.slides.forEach(((t, n) => {
                            a.includes(t.column) && B(e, n)
                        }))
                    }
                    const a = r + i - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let s = r - t; s <= a + t; s += 1) {
                            const t = (s % n + n) % n;
                            (t < r || t > a) && B(e, t)
                        } else
                        for (let s = Math.max(r - t, 0); s <= Math.min(a + t, n - 1); s += 1) s !== r && (s > a || s < r) && B(e, s)
                };
            var H = {
                updateSize: function () {
                    const e = this;
                    let t, n;
                    const i = e.el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, n = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === n && e.isVertical() || (t = t - parseInt(T(i, "padding-left") || 0, 10) - parseInt(T(i, "padding-right") || 0, 10), n = n - parseInt(T(i, "padding-top") || 0, 10) - parseInt(T(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
                        width: t,
                        height: n,
                        size: e.isHorizontal() ? t : n
                    }))
                },
                updateSlides: function () {
                    const e = this;

                    function t(t, n) {
                        return parseFloat(t.getPropertyValue(e.getDirectionLabel(n)) || 0)
                    }
                    const n = e.params,
                        {
                            wrapperEl: i,
                            slidesEl: r,
                            size: a,
                            rtlTranslate: s,
                            wrongRTL: o
                        } = e,
                        l = e.virtual && n.virtual.enabled,
                        c = l ? e.virtual.slides.length : e.slides.length,
                        u = E(r, `.${e.params.slideClass}, swiper-slide`),
                        d = l ? e.virtual.slides.length : u.length;
                    let p = [];
                    const f = [],
                        h = [];
                    let m = n.slidesOffsetBefore;
                    "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
                    let g = n.slidesOffsetAfter;
                    "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
                    const v = e.snapGrid.length,
                        b = e.slidesGrid.length;
                    let w = n.spaceBetween,
                        S = -m,
                        x = 0,
                        O = 0;
                    if (void 0 === a) return;
                    "string" == typeof w && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * a : "string" == typeof w && (w = parseFloat(w)), e.virtualSize = -w, u.forEach((e => {
                        s ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                    })), n.centeredSlides && n.cssMode && (y(i, "--swiper-centered-offset-before", ""), y(i, "--swiper-centered-offset-after", ""));
                    const k = n.grid && n.grid.rows > 1 && e.grid;
                    let P;
                    k ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
                    const _ = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => void 0 !== n.breakpoints[e].slidesPerView)).length > 0;
                    for (let y = 0; y < d; y += 1) {
                        let i;
                        if (P = 0, u[y] && (i = u[y]), k && e.grid.updateSlide(y, i, u), !u[y] || "none" !== T(i, "display")) {
                            if ("auto" === n.slidesPerView) {
                                _ && (u[y].style[e.getDirectionLabel("width")] = "");
                                const r = getComputedStyle(i),
                                    a = i.style.transform,
                                    s = i.style.webkitTransform;
                                if (a && (i.style.transform = "none"), s && (i.style.webkitTransform = "none"), n.roundLengths) P = e.isHorizontal() ? C(i, "width", !0) : C(i, "height", !0);
                                else {
                                    const e = t(r, "width"),
                                        n = t(r, "padding-left"),
                                        a = t(r, "padding-right"),
                                        s = t(r, "margin-left"),
                                        o = t(r, "margin-right"),
                                        l = r.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) P = e + s + o;
                                    else {
                                        const {
                                            clientWidth: t,
                                            offsetWidth: r
                                        } = i;
                                        P = e + n + a + s + o + (r - t)
                                    }
                                }
                                a && (i.style.transform = a), s && (i.style.webkitTransform = s), n.roundLengths && (P = Math.floor(P))
                            } else P = (a - (n.slidesPerView - 1) * w) / n.slidesPerView, n.roundLengths && (P = Math.floor(P)), u[y] && (u[y].style[e.getDirectionLabel("width")] = `${P}px`);
                            u[y] && (u[y].swiperSlideSize = P), h.push(P), n.centeredSlides ? (S = S + P / 2 + x / 2 + w, 0 === x && 0 !== y && (S = S - a / 2 - w), 0 === y && (S = S - a / 2 - w), Math.abs(S) < .001 && (S = 0), n.roundLengths && (S = Math.floor(S)), O % n.slidesPerGroup == 0 && p.push(S), f.push(S)) : (n.roundLengths && (S = Math.floor(S)), (O - Math.min(e.params.slidesPerGroupSkip, O)) % e.params.slidesPerGroup == 0 && p.push(S), f.push(S), S = S + P + w), e.virtualSize += P + w, x = P, O += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, a) + g, s && o && ("slide" === n.effect || "coverflow" === n.effect) && (i.style.width = `${e.virtualSize + w}px`), n.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + w}px`), k && e.grid.updateWrapperSize(P, p), !n.centeredSlides) {
                        const t = [];
                        for (let i = 0; i < p.length; i += 1) {
                            let r = p[i];
                            n.roundLengths && (r = Math.floor(r)), p[i] <= e.virtualSize - a && t.push(r)
                        }
                        p = t, Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a)
                    }
                    if (l && n.loop) {
                        const t = h[0] + w;
                        if (n.slidesPerGroup > 1) {
                            const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
                                r = t * n.slidesPerGroup;
                            for (let e = 0; e < i; e += 1) p.push(p[p.length - 1] + r)
                        }
                        for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === n.slidesPerGroup && p.push(p[p.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
                    }
                    if (0 === p.length && (p = [0]), 0 !== w) {
                        const t = e.isHorizontal() && s ? "marginLeft" : e.getDirectionLabel("marginRight");
                        u.filter(((e, t) => !(n.cssMode && !n.loop) || t !== u.length - 1)).forEach((e => {
                            e.style[t] = `${w}px`
                        }))
                    }
                    if (n.centeredSlides && n.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (w || 0)
                        })), e -= w;
                        const t = e > a ? e - a : 0;
                        p = p.map((e => e <= 0 ? -m : e > t ? t + g : e))
                    }
                    if (n.centerInsufficientSlides) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (w || 0)
                        })), e -= w;
                        const t = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
                        if (e + t < a) {
                            const n = (a - e - t) / 2;
                            p.forEach(((e, t) => {
                                p[t] = e - n
                            })), f.forEach(((e, t) => {
                                f[t] = e + n
                            }))
                        }
                    }
                    if (Object.assign(e, {
                        slides: u,
                        snapGrid: p,
                        slidesGrid: f,
                        slidesSizesGrid: h
                    }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                        y(i, "--swiper-centered-offset-before", -p[0] + "px"), y(i, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            n = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + n))
                    }
                    if (d !== c && e.emit("slidesLengthChange"), p.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || n.cssMode || "slide" !== n.effect && "fade" !== n.effect)) {
                        const t = `${n.containerModifierClass}backface-hidden`,
                            i = e.el.classList.contains(t);
                        d <= n.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
                    }
                },
                updateAutoHeight: function (e) {
                    const t = this,
                        n = [],
                        i = t.virtual && t.params.virtual.enabled;
                    let r, a = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const s = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
                            n.push(e)
                        }));
                        else
                            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                                const e = t.activeIndex + r;
                                if (e > t.slides.length && !i) break;
                                n.push(s(e))
                            } else n.push(s(t.activeIndex));
                    for (r = 0; r < n.length; r += 1)
                        if (void 0 !== n[r]) {
                            const e = n[r].offsetHeight;
                            a = e > a ? e : a
                        } (a || 0 === a) && (t.wrapperEl.style.height = `${a}px`)
                },
                updateSlidesOffset: function () {
                    const e = this,
                        t = e.slides,
                        n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                    for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - n - e.cssOverflowAdjustment()
                },
                updateSlidesProgress: function (e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        n = t.params,
                        {
                            slides: i,
                            rtlTranslate: r,
                            snapGrid: a
                        } = t;
                    if (0 === i.length) return;
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    let s = -e;
                    r && (s = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    let o = n.spaceBetween;
                    "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
                    for (let l = 0; l < i.length; l += 1) {
                        const e = i[l];
                        let c = e.swiperSlideOffset;
                        n.cssMode && n.centeredSlides && (c -= i[0].swiperSlideOffset);
                        const u = (s + (n.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + o),
                            d = (s - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (e.swiperSlideSize + o),
                            p = -(s - c),
                            f = p + t.slidesSizesGrid[l],
                            h = p >= 0 && p <= t.size - t.slidesSizesGrid[l],
                            m = p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size;
                        m && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(l)), D(e, m, n.slideVisibleClass), D(e, h, n.slideFullyVisibleClass), e.progress = r ? -u : u, e.originalProgress = r ? -d : d
                    }
                },
                updateProgress: function (e) {
                    const t = this;
                    if (void 0 === e) {
                        const n = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * n || 0
                    }
                    const n = t.params,
                        i = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: r,
                        isBeginning: a,
                        isEnd: s,
                        progressLoop: o
                    } = t;
                    const l = a,
                        c = s;
                    if (0 === i) r = 0, a = !0, s = !0;
                    else {
                        r = (e - t.minTranslate()) / i;
                        const n = Math.abs(e - t.minTranslate()) < 1,
                            o = Math.abs(e - t.maxTranslate()) < 1;
                        a = n || r <= 0, s = o || r >= 1, n && (r = 0), o && (r = 1)
                    }
                    if (n.loop) {
                        const n = t.getSlideIndexByData(0),
                            i = t.getSlideIndexByData(t.slides.length - 1),
                            r = t.slidesGrid[n],
                            a = t.slidesGrid[i],
                            s = t.slidesGrid[t.slidesGrid.length - 1],
                            l = Math.abs(e);
                        o = l >= r ? (l - r) / s : (l + s - a) / s, o > 1 && (o -= 1)
                    }
                    Object.assign(t, {
                        progress: r,
                        progressLoop: o,
                        isBeginning: a,
                        isEnd: s
                    }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), s && !c && t.emit("reachEnd toEdge"), (l && !a || c && !s) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function () {
                    const e = this,
                        {
                            slides: t,
                            params: n,
                            slidesEl: i,
                            activeIndex: r
                        } = e,
                        a = e.virtual && n.virtual.enabled,
                        s = e.grid && n.grid && n.grid.rows > 1,
                        o = e => E(i, `.${n.slideClass}${e}, swiper-slide${e}`)[0];
                    let l, c, u;
                    if (a)
                        if (n.loop) {
                            let t = r - e.virtual.slidesBefore;
                            t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${t}"]`)
                        } else l = o(`[data-swiper-slide-index="${r}"]`);
                    else s ? (l = t.find((e => e.column === r)), u = t.find((e => e.column === r + 1)), c = t.find((e => e.column === r - 1))) : l = t[r];
                    l && (s || (u = function (e, t) {
                        const n = [];
                        for (; e.nextElementSibling;) {
                            const i = e.nextElementSibling;
                            t ? i.matches(t) && n.push(i) : n.push(i), e = i
                        }
                        return n
                    }(l, `.${n.slideClass}, swiper-slide`)[0], n.loop && !u && (u = t[0]), c = function (e, t) {
                        const n = [];
                        for (; e.previousElementSibling;) {
                            const i = e.previousElementSibling;
                            t ? i.matches(t) && n.push(i) : n.push(i), e = i
                        }
                        return n
                    }(l, `.${n.slideClass}, swiper-slide`)[0], n.loop && 0 === !c && (c = t[t.length - 1]))), t.forEach((e => {
                        R(e, e === l, n.slideActiveClass), R(e, e === u, n.slideNextClass), R(e, e === c, n.slidePrevClass)
                    })), e.emitSlidesClasses()
                },
                updateActiveIndex: function (e) {
                    const t = this,
                        n = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            snapGrid: i,
                            params: r,
                            activeIndex: a,
                            realIndex: s,
                            snapIndex: o
                        } = t;
                    let l, c = e;
                    const u = e => {
                        let n = e - t.virtual.slidesBefore;
                        return n < 0 && (n = t.virtual.slides.length + n), n >= t.virtual.slides.length && (n -= t.virtual.slides.length), n
                    };
                    if (void 0 === c && (c = function (e) {
                        const {
                            slidesGrid: t,
                            params: n
                        } = e, i = e.rtlTranslate ? e.translate : -e.translate;
                        let r;
                        for (let a = 0; a < t.length; a += 1) void 0 !== t[a + 1] ? i >= t[a] && i < t[a + 1] - (t[a + 1] - t[a]) / 2 ? r = a : i >= t[a] && i < t[a + 1] && (r = a + 1) : i >= t[a] && (r = a);
                        return n.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
                    }(t)), i.indexOf(n) >= 0) l = i.indexOf(n);
                    else {
                        const e = Math.min(r.slidesPerGroupSkip, c);
                        l = e + Math.floor((c - e) / r.slidesPerGroup)
                    }
                    if (l >= i.length && (l = i.length - 1), c === a && !t.params.loop) return void (l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
                    if (c === a && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = u(c));
                    const d = t.grid && r.grid && r.grid.rows > 1;
                    let p;
                    if (t.virtual && r.virtual.enabled && r.loop) p = u(c);
                    else if (d) {
                        const e = t.slides.find((e => e.column === c));
                        let n = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                        Number.isNaN(n) && (n = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(n / r.grid.rows)
                    } else if (t.slides[c]) {
                        const e = t.slides[c].getAttribute("data-swiper-slide-index");
                        p = e ? parseInt(e, 10) : c
                    } else p = c;
                    Object.assign(t, {
                        previousSnapIndex: o,
                        snapIndex: l,
                        previousRealIndex: s,
                        realIndex: p,
                        previousIndex: a,
                        activeIndex: c
                    }), t.initialized && G(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (s !== p && t.emit("realIndexChange"), t.emit("slideChange"))
                },
                updateClickedSlide: function (e, t) {
                    const n = this,
                        i = n.params;
                    let r = e.closest(`.${i.slideClass}, swiper-slide`);
                    !r && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                        !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e)
                    }));
                    let a, s = !1;
                    if (r)
                        for (let o = 0; o < n.slides.length; o += 1)
                            if (n.slides[o] === r) {
                                s = !0, a = o;
                                break
                            }
                    if (!r || !s) return n.clickedSlide = void 0, void (n.clickedIndex = void 0);
                    n.clickedSlide = r, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = a, i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
                }
            };
            var W = {
                getTranslate: function (e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: n,
                        translate: i,
                        wrapperEl: r
                    } = this;
                    if (t.virtualTranslate) return n ? -i : i;
                    if (t.cssMode) return i;
                    let a = g(r, e);
                    return a += this.cssOverflowAdjustment(), n && (a = -a), a || 0
                },
                setTranslate: function (e, t) {
                    const n = this,
                        {
                            rtlTranslate: i,
                            params: r,
                            wrapperEl: a,
                            progress: s
                        } = n;
                    let o, l = 0,
                        c = 0;
                    n.isHorizontal() ? l = i ? -e : e : c = e, r.roundLengths && (l = Math.floor(l), c = Math.floor(c)), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : c, r.cssMode ? a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -c : r.virtualTranslate || (n.isHorizontal() ? l -= n.cssOverflowAdjustment() : c -= n.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${c}px, 0px)`);
                    const u = n.maxTranslate() - n.minTranslate();
                    o = 0 === u ? 0 : (e - n.minTranslate()) / u, o !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e, t, n, i, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === i && (i = !0);
                    const a = this,
                        {
                            params: s,
                            wrapperEl: o
                        } = a;
                    if (a.animating && s.preventInteractionOnTransition) return !1;
                    const l = a.minTranslate(),
                        c = a.maxTranslate();
                    let u;
                    if (u = i && e > l ? l : i && e < c ? c : e, a.updateProgress(u), s.cssMode) {
                        const e = a.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -u;
                        else {
                            if (!a.support.smoothScroll) return w({
                                swiper: a,
                                targetPosition: -u,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -u,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(u), n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(u), n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function (e) {
                        a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, n && a.emit("transitionEnd"))
                    }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function V(e) {
                let {
                    swiper: t,
                    runCallbacks: n,
                    direction: i,
                    step: r
                } = e;
                const {
                    activeIndex: a,
                    previousIndex: s
                } = t;
                let o = i;
                o || (o = a > s ? "next" : a < s ? "prev" : "reset"), t.emit(`transition${r}`), n && "reset" === o ? t.emit(`slideResetTransition${r}`) : n && a !== s && (t.emit(`slideChangeTransition${r}`), "next" === o ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`))
            }
            var $ = {
                slideTo: function (e, t, n, i, r) {
                    void 0 === e && (e = 0), void 0 === n && (n = !0), "string" == typeof e && (e = parseInt(e, 10));
                    const a = this;
                    let s = e;
                    s < 0 && (s = 0);
                    const {
                        params: o,
                        snapGrid: l,
                        slidesGrid: c,
                        previousIndex: u,
                        activeIndex: d,
                        rtlTranslate: p,
                        wrapperEl: f,
                        enabled: h
                    } = a;
                    if (!h && !i && !r || a.destroyed || a.animating && o.preventInteractionOnTransition) return !1;
                    void 0 === t && (t = a.params.speed);
                    const m = Math.min(a.params.slidesPerGroupSkip, s);
                    let g = m + Math.floor((s - m) / a.params.slidesPerGroup);
                    g >= l.length && (g = l.length - 1);
                    const v = -l[g];
                    if (o.normalizeSlideIndex)
                        for (let w = 0; w < c.length; w += 1) {
                            const e = -Math.floor(100 * v),
                                t = Math.floor(100 * c[w]),
                                n = Math.floor(100 * c[w + 1]);
                            void 0 !== c[w + 1] ? e >= t && e < n - (n - t) / 2 ? s = w : e >= t && e < n && (s = w + 1) : e >= t && (s = w)
                        }
                    if (a.initialized && s !== d) {
                        if (!a.allowSlideNext && (p ? v > a.translate && v > a.minTranslate() : v < a.translate && v < a.minTranslate())) return !1;
                        if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (d || 0) !== s) return !1
                    }
                    let b;
                    s !== (u || 0) && n && a.emit("beforeSlideChangeStart"), a.updateProgress(v), b = s > d ? "next" : s < d ? "prev" : "reset";
                    const y = a.virtual && a.params.virtual.enabled;
                    if (!(y && r) && (p && -v === a.translate || !p && v === a.translate)) return a.updateActiveIndex(s), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(v), "reset" !== b && (a.transitionStart(n, b), a.transitionEnd(n, b)), !1;
                    if (o.cssMode) {
                        const e = a.isHorizontal(),
                            n = p ? v : -v;
                        if (0 === t) y && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), y && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            f[e ? "scrollLeft" : "scrollTop"] = n
                        }))) : f[e ? "scrollLeft" : "scrollTop"] = n, y && requestAnimationFrame((() => {
                            a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
                        }));
                        else {
                            if (!a.support.smoothScroll) return w({
                                swiper: a,
                                targetPosition: n,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({
                                [e ? "left" : "top"]: n,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    const E = A().isSafari;
                    return y && !r && E && a.isElement && a.virtual.update(!1, !1, s), a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(s), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(n, b), 0 === t ? a.transitionEnd(n, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
                        a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(n, b))
                    }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function (e, t, n, i) {
                    if (void 0 === e && (e = 0), void 0 === n && (n = !0), "string" == typeof e) {
                        e = parseInt(e, 10)
                    }
                    const r = this;
                    if (r.destroyed) return;
                    void 0 === t && (t = r.params.speed);
                    const a = r.grid && r.params.grid && r.params.grid.rows > 1;
                    let s = e;
                    if (r.params.loop)
                        if (r.virtual && r.params.virtual.enabled) s += r.virtual.slidesBefore;
                        else {
                            let e;
                            if (a) {
                                const t = s * r.params.grid.rows;
                                e = r.slides.find((e => 1 * e.getAttribute("data-swiper-slide-index") === t)).column
                            } else e = r.getSlideIndexByData(s);
                            const t = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                                {
                                    centeredSlides: n
                                } = r.params;
                            let o = r.params.slidesPerView;
                            "auto" === o ? o = r.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(r.params.slidesPerView, 10)), n && o % 2 == 0 && (o += 1));
                            let l = t - e < o;
                            if (n && (l = l || e < Math.ceil(o / 2)), i && n && "auto" !== r.params.slidesPerView && !a && (l = !1), l) {
                                const i = n ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                                r.loopFix({
                                    direction: i,
                                    slideTo: !0,
                                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                                    slideRealIndex: "next" === i ? r.realIndex : void 0
                                })
                            }
                            if (a) {
                                const e = s * r.params.grid.rows;
                                s = r.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)).column
                            } else s = r.getSlideIndexByData(s)
                        }
                    return requestAnimationFrame((() => {
                        r.slideTo(s, t, n, i)
                    })), r
                },
                slideNext: function (e, t, n) {
                    void 0 === t && (t = !0);
                    const i = this,
                        {
                            enabled: r,
                            params: a,
                            animating: s
                        } = i;
                    if (!r || i.destroyed) return i;
                    void 0 === e && (e = i.params.speed);
                    let o = a.slidesPerGroup;
                    "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                    const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o,
                        c = i.virtual && a.virtual.enabled;
                    if (a.loop) {
                        if (s && !c && a.loopPreventsSliding) return !1;
                        if (i.loopFix({
                            direction: "next"
                        }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && a.cssMode) return requestAnimationFrame((() => {
                            i.slideTo(i.activeIndex + l, e, t, n)
                        })), !0
                    }
                    return a.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + l, e, t, n)
                },
                slidePrev: function (e, t, n) {
                    void 0 === t && (t = !0);
                    const i = this,
                        {
                            params: r,
                            snapGrid: a,
                            slidesGrid: s,
                            rtlTranslate: o,
                            enabled: l,
                            animating: c
                        } = i;
                    if (!l || i.destroyed) return i;
                    void 0 === e && (e = i.params.speed);
                    const u = i.virtual && r.virtual.enabled;
                    if (r.loop) {
                        if (c && !u && r.loopPreventsSliding) return !1;
                        i.loopFix({
                            direction: "prev"
                        }), i._clientLeft = i.wrapperEl.clientLeft
                    }

                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const p = d(o ? i.translate : -i.translate),
                        f = a.map((e => d(e))),
                        h = r.freeMode && r.freeMode.enabled;
                    let m = a[f.indexOf(p) - 1];
                    if (void 0 === m && (r.cssMode || h)) {
                        let e;
                        a.forEach(((t, n) => {
                            p >= t && (e = n)
                        })), void 0 !== e && (m = h ? a[e] : a[e > 0 ? e - 1 : e])
                    }
                    let g = 0;
                    if (void 0 !== m && (g = s.indexOf(m), g < 0 && (g = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (g = g - i.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), r.rewind && i.isBeginning) {
                        const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                        return i.slideTo(r, e, t, n)
                    }
                    return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame((() => {
                        i.slideTo(g, e, t, n)
                    })), !0) : i.slideTo(g, e, t, n)
                },
                slideReset: function (e, t, n) {
                    void 0 === t && (t = !0);
                    const i = this;
                    if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, n)
                },
                slideToClosest: function (e, t, n, i) {
                    void 0 === t && (t = !0), void 0 === i && (i = .5);
                    const r = this;
                    if (r.destroyed) return;
                    void 0 === e && (e = r.params.speed);
                    let a = r.activeIndex;
                    const s = Math.min(r.params.slidesPerGroupSkip, a),
                        o = s + Math.floor((a - s) / r.params.slidesPerGroup),
                        l = r.rtlTranslate ? r.translate : -r.translate;
                    if (l >= r.snapGrid[o]) {
                        const e = r.snapGrid[o];
                        l - e > (r.snapGrid[o + 1] - e) * i && (a += r.params.slidesPerGroup)
                    } else {
                        const e = r.snapGrid[o - 1];
                        l - e <= (r.snapGrid[o] - e) * i && (a -= r.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, r.slidesGrid.length - 1), r.slideTo(a, e, t, n)
                },
                slideToClickedSlide: function () {
                    const e = this;
                    if (e.destroyed) return;
                    const {
                        params: t,
                        slidesEl: n
                    } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let r, a = e.getSlideIndexWhenGrid(e.clickedIndex);
                    const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
                        o = e.grid && e.params.grid && e.params.grid.rows > 1;
                    if (t.loop) {
                        if (e.animating) return;
                        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(r) : a > (o ? (e.slides.length - i) / 2 - (e.params.grid.rows - 1) : e.slides.length - i) ? (e.loopFix(), a = e.getSlideIndex(E(n, `${s}[data-swiper-slide-index="${r}"]`)[0]), h((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a)
                    } else e.slideTo(a)
                }
            };
            var q = {
                loopCreate: function (e, t) {
                    const n = this,
                        {
                            params: i,
                            slidesEl: r
                        } = n;
                    if (!i.loop || n.virtual && n.params.virtual.enabled) return;
                    const a = () => {
                        E(r, `.${i.slideClass}, swiper-slide`).forEach(((e, t) => {
                            e.setAttribute("data-swiper-slide-index", t)
                        }))
                    },
                        s = n.grid && i.grid && i.grid.rows > 1;
                    i.loopAddBlankSlides && (i.slidesPerGroup > 1 || s) && (() => {
                        const e = E(r, `.${i.slideBlankClass}`);
                        e.forEach((e => {
                            e.remove()
                        })), e.length > 0 && (n.recalcSlides(), n.updateSlides())
                    })();
                    const o = i.slidesPerGroup * (s ? i.grid.rows : 1),
                        l = n.slides.length % o != 0,
                        c = s && n.slides.length % i.grid.rows != 0,
                        u = e => {
                            for (let t = 0; t < e; t += 1) {
                                const e = n.isElement ? x("swiper-slide", [i.slideBlankClass]) : x("div", [i.slideClass, i.slideBlankClass]);
                                n.slidesEl.append(e)
                            }
                        };
                    if (l) {
                        if (i.loopAddBlankSlides) {
                            u(o - n.slides.length % o), n.recalcSlides(), n.updateSlides()
                        } else S("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                        a()
                    } else if (c) {
                        if (i.loopAddBlankSlides) {
                            u(i.grid.rows - n.slides.length % i.grid.rows), n.recalcSlides(), n.updateSlides()
                        } else S("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                        a()
                    } else a();
                    n.loopFix({
                        slideRealIndex: e,
                        direction: i.centeredSlides ? void 0 : "next",
                        initial: t
                    })
                },
                loopFix: function (e) {
                    let {
                        slideRealIndex: t,
                        slideTo: n = !0,
                        direction: i,
                        setTranslate: r,
                        activeSlideIndex: a,
                        initial: s,
                        byController: o,
                        byMousewheel: l
                    } = void 0 === e ? {} : e;
                    const c = this;
                    if (!c.params.loop) return;
                    c.emit("beforeLoopFix");
                    const {
                        slides: u,
                        allowSlidePrev: d,
                        allowSlideNext: p,
                        slidesEl: f,
                        params: h
                    } = c, {
                        centeredSlides: m,
                        initialSlide: g
                    } = h;
                    if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && h.virtual.enabled) return n && (h.centeredSlides || 0 !== c.snapIndex ? h.centeredSlides && c.snapIndex < h.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0) : c.slideTo(c.virtual.slides.length, 0, !1, !0)), c.allowSlidePrev = d, c.allowSlideNext = p, void c.emit("loopFix");
                    let v = h.slidesPerView;
                    "auto" === v ? v = c.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(h.slidesPerView, 10)), m && v % 2 == 0 && (v += 1));
                    const b = h.slidesPerGroupAuto ? v : h.slidesPerGroup;
                    let y = m ? Math.max(b, Math.ceil(v / 2)) : b;
                    y % b != 0 && (y += b - y % b), y += h.loopAdditionalSlides, c.loopedSlides = y;
                    const w = c.grid && h.grid && h.grid.rows > 1;
                    u.length < v + y || "cards" === c.params.effect && u.length < v + 2 * y ? S("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : w && "row" === h.grid.fill && S("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                    const E = [],
                        x = [],
                        T = w ? Math.ceil(u.length / h.grid.rows) : u.length,
                        O = s && T - g < v && !m;
                    let k = O ? g : c.activeIndex;
                    void 0 === a ? a = c.getSlideIndex(u.find((e => e.classList.contains(h.slideActiveClass)))) : k = a;
                    const C = "next" === i || !i,
                        P = "prev" === i || !i;
                    let _ = 0,
                        M = 0;
                    const L = (w ? u[a].column : a) + (m && void 0 === r ? -v / 2 + .5 : 0);
                    if (L < y) {
                        _ = Math.max(y - L, b);
                        for (let e = 0; e < y - L; e += 1) {
                            const t = e - Math.floor(e / T) * T;
                            if (w) {
                                const e = T - t - 1;
                                for (let t = u.length - 1; t >= 0; t -= 1) u[t].column === e && E.push(t)
                            } else E.push(T - t - 1)
                        }
                    } else if (L + v > T - y) {
                        M = Math.max(L - (T - 2 * y), b), O && (M = Math.max(M, v - T + g + 1));
                        for (let e = 0; e < M; e += 1) {
                            const t = e - Math.floor(e / T) * T;
                            w ? u.forEach(((e, n) => {
                                e.column === t && x.push(n)
                            })) : x.push(t)
                        }
                    }
                    if (c.__preventObserver__ = !0, requestAnimationFrame((() => {
                        c.__preventObserver__ = !1
                    })), "cards" === c.params.effect && u.length < v + 2 * y && (x.includes(a) && x.splice(x.indexOf(a), 1), E.includes(a) && E.splice(E.indexOf(a), 1)), P && E.forEach((e => {
                        u[e].swiperLoopMoveDOM = !0, f.prepend(u[e]), u[e].swiperLoopMoveDOM = !1
                    })), C && x.forEach((e => {
                        u[e].swiperLoopMoveDOM = !0, f.append(u[e]), u[e].swiperLoopMoveDOM = !1
                    })), c.recalcSlides(), "auto" === h.slidesPerView ? c.updateSlides() : w && (E.length > 0 && P || x.length > 0 && C) && c.slides.forEach(((e, t) => {
                        c.grid.updateSlide(t, e, c.slides)
                    })), h.watchSlidesProgress && c.updateSlidesOffset(), n)
                        if (E.length > 0 && P) {
                            if (void 0 === t) {
                                const e = c.slidesGrid[k],
                                    t = c.slidesGrid[k + _] - e;
                                l ? c.setTranslate(c.translate - t) : (c.slideTo(k + Math.ceil(_), 0, !1, !0), r && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                            } else if (r) {
                                const e = w ? E.length / h.grid.rows : E.length;
                                c.slideTo(c.activeIndex + e, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate
                            }
                        } else if (x.length > 0 && C)
                            if (void 0 === t) {
                                const e = c.slidesGrid[k],
                                    t = c.slidesGrid[k - M] - e;
                                l ? c.setTranslate(c.translate - t) : (c.slideTo(k - M, 0, !1, !0), r && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                            } else {
                                const e = w ? x.length / h.grid.rows : x.length;
                                c.slideTo(c.activeIndex - e, 0, !1, !0)
                            }
                    if (c.allowSlidePrev = d, c.allowSlideNext = p, c.controller && c.controller.control && !o) {
                        const e = {
                            slideRealIndex: t,
                            direction: i,
                            setTranslate: r,
                            activeSlideIndex: a,
                            byController: !0
                        };
                        Array.isArray(c.controller.control) ? c.controller.control.forEach((t => {
                            !t.destroyed && t.params.loop && t.loopFix({
                                ...e,
                                slideTo: t.params.slidesPerView === h.slidesPerView && n
                            })
                        })) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
                            ...e,
                            slideTo: c.controller.control.params.slidesPerView === h.slidesPerView && n
                        })
                    }
                    c.emit("loopFix")
                },
                loopDestroy: function () {
                    const e = this,
                        {
                            params: t,
                            slidesEl: n
                        } = e;
                    if (!t.loop || !n || e.virtual && e.params.virtual.enabled) return;
                    e.recalcSlides();
                    const i = [];
                    e.slides.forEach((e => {
                        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                        i[t] = e
                    })), e.slides.forEach((e => {
                        e.removeAttribute("data-swiper-slide-index")
                    })), i.forEach((e => {
                        n.append(e)
                    })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
                }
            };

            function U(e, t, n) {
                const i = f(),
                    {
                        params: r
                    } = e,
                    a = r.edgeSwipeDetection,
                    s = r.edgeSwipeThreshold;
                return !a || !(n <= s || n >= i.innerWidth - s) || "prevent" === a && (t.preventDefault(), !0)
            }

            function X(e) {
                const t = this,
                    n = d();
                let i = e;
                i.originalEvent && (i = i.originalEvent);
                const r = t.touchEventsData;
                if ("pointerdown" === i.type) {
                    if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
                    r.pointerId = i.pointerId
                } else "touchstart" === i.type && 1 === i.targetTouches.length && (r.touchId = i.targetTouches[0].identifier);
                if ("touchstart" === i.type) return void U(t, i, i.targetTouches[0].pageX);
                const {
                    params: a,
                    touches: s,
                    enabled: o
                } = t;
                if (!o) return;
                if (!a.simulateTouch && "mouse" === i.pointerType) return;
                if (t.animating && a.preventInteractionOnTransition) return;
                !t.animating && a.cssMode && a.loop && t.loopFix();
                let l = i.target;
                if ("wrapper" === a.touchEventsTarget && ! function (e, t) {
                    const n = f();
                    let i = t.contains(e);
                    !i && n.HTMLSlotElement && t instanceof HTMLSlotElement && (i = [...t.assignedElements()].includes(e), i || (i = function (e, t) {
                        const n = [t];
                        for (; n.length > 0;) {
                            const t = n.shift();
                            if (e === t) return !0;
                            n.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
                        }
                    }(e, t)));
                    return i
                }(l, t.wrapperEl)) return;
                if ("which" in i && 3 === i.which) return;
                if ("button" in i && i.button > 0) return;
                if (r.isTouched && r.isMoved) return;
                const c = !!a.noSwipingClass && "" !== a.noSwipingClass,
                    u = i.composedPath ? i.composedPath() : i.path;
                c && i.target && i.target.shadowRoot && u && (l = u[0]);
                const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                    h = !(!i.target || !i.target.shadowRoot);
                if (a.noSwiping && (h ? function (e, t) {
                    return void 0 === t && (t = this),
                        function t(n) {
                            if (!n || n === d() || n === f()) return null;
                            n.assignedSlot && (n = n.assignedSlot);
                            const i = n.closest(e);
                            return i || n.getRootNode ? i || t(n.getRootNode().host) : null
                        }(t)
                }(p, l) : l.closest(p))) return void (t.allowClick = !0);
                if (a.swipeHandler && !l.closest(a.swipeHandler)) return;
                s.currentX = i.pageX, s.currentY = i.pageY;
                const g = s.currentX,
                    v = s.currentY;
                if (!U(t, i, g)) return;
                Object.assign(r, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), s.startX = g, s.startY = v, r.touchStartTime = m(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (r.allowThresholdMove = !1);
                let b = !0;
                l.matches(r.focusableElements) && (b = !1, "SELECT" === l.nodeName && (r.isTouched = !1)), n.activeElement && n.activeElement.matches(r.focusableElements) && n.activeElement !== l && ("mouse" === i.pointerType || "mouse" !== i.pointerType && !l.matches(r.focusableElements)) && n.activeElement.blur();
                const y = b && t.allowTouchMove && a.touchStartPreventDefault;
                !a.touchStartForcePreventDefault && !y || l.isContentEditable || i.preventDefault(), a.freeMode && a.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
            }

            function Y(e) {
                const t = d(),
                    n = this,
                    i = n.touchEventsData,
                    {
                        params: r,
                        touches: a,
                        rtlTranslate: s,
                        enabled: o
                    } = n;
                if (!o) return;
                if (!r.simulateTouch && "mouse" === e.pointerType) return;
                let l, c = e;
                if (c.originalEvent && (c = c.originalEvent), "pointermove" === c.type) {
                    if (null !== i.touchId) return;
                    if (c.pointerId !== i.pointerId) return
                }
                if ("touchmove" === c.type) {
                    if (l = [...c.changedTouches].find((e => e.identifier === i.touchId)), !l || l.identifier !== i.touchId) return
                } else l = c;
                if (!i.isTouched) return void (i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", c));
                const u = l.pageX,
                    p = l.pageY;
                if (c.preventedByNestedSwiper) return a.startX = u, void (a.startY = p);
                if (!n.allowTouchMove) return c.target.matches(i.focusableElements) || (n.allowClick = !1), void (i.isTouched && (Object.assign(a, {
                    startX: u,
                    startY: p,
                    currentX: u,
                    currentY: p
                }), i.touchStartTime = m()));
                if (r.touchReleaseOnEdges && !r.loop)
                    if (n.isVertical()) {
                        if (p < a.startY && n.translate <= n.maxTranslate() || p > a.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
                    } else {
                        if (s && (u > a.startX && -n.translate <= n.maxTranslate() || u < a.startX && -n.translate >= n.minTranslate())) return;
                        if (!s && (u < a.startX && n.translate <= n.maxTranslate() || u > a.startX && n.translate >= n.minTranslate())) return
                    }
                if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== c.target && "mouse" !== c.pointerType && t.activeElement.blur(), t.activeElement && c.target === t.activeElement && c.target.matches(i.focusableElements)) return i.isMoved = !0, void (n.allowClick = !1);
                i.allowTouchCallbacks && n.emit("touchMove", c), a.previousX = a.currentX, a.previousY = a.currentY, a.currentX = u, a.currentY = p;
                const f = a.currentX - a.startX,
                    h = a.currentY - a.startY;
                if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold) return;
                if (void 0 === i.isScrolling) {
                    let e;
                    n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, i.isScrolling = n.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
                }
                if (i.isScrolling && n.emit("touchMoveOpposite", c), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === c.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
                if (!i.startMoving) return;
                n.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
                let g = n.isHorizontal() ? f : h,
                    v = n.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
                r.oneWayMovement && (g = Math.abs(g) * (s ? 1 : -1), v = Math.abs(v) * (s ? 1 : -1)), a.diff = g, g *= r.touchRatio, s && (g = -g, v = -v);
                const b = n.touchesDirection;
                n.swipeDirection = g > 0 ? "prev" : "next", n.touchesDirection = v > 0 ? "prev" : "next";
                const y = n.params.loop && !r.cssMode,
                    w = "next" === n.touchesDirection && n.allowSlideNext || "prev" === n.touchesDirection && n.allowSlidePrev;
                if (!i.isMoved) {
                    if (y && w && n.loopFix({
                        direction: n.swipeDirection
                    }), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating) {
                        const e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                bySwiperTouchMove: !0
                            }
                        });
                        n.wrapperEl.dispatchEvent(e)
                    }
                    i.allowMomentumBounce = !1, !r.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)
                }
                if ((new Date).getTime(), !1 !== r._loopSwapReset && i.isMoved && i.allowThresholdMove && b !== n.touchesDirection && y && w && Math.abs(g) >= 1) return Object.assign(a, {
                    startX: u,
                    startY: p,
                    currentX: u,
                    currentY: p,
                    startTranslate: i.currentTranslate
                }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
                n.emit("sliderMove", c), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
                let E = !0,
                    S = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (S = 0), g > 0 ? (y && w && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] - ("auto" !== r.slidesPerView && n.slides.length - r.slidesPerView >= 2 ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween : 0) - n.params.spaceBetween : n.minTranslate()) && n.loopFix({
                    direction: "prev",
                    setTranslate: !0,
                    activeSlideIndex: 0
                }), i.currentTranslate > n.minTranslate() && (E = !1, r.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + g) ** S))) : g < 0 && (y && w && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween + ("auto" !== r.slidesPerView && n.slides.length - r.slidesPerView >= 2 ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween : 0) : n.maxTranslate()) && n.loopFix({
                    direction: "next",
                    setTranslate: !0,
                    activeSlideIndex: n.slides.length - ("auto" === r.slidesPerView ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
                }), i.currentTranslate < n.maxTranslate() && (E = !1, r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - g) ** S))), E && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
                    if (!(Math.abs(g) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && n.freeMode || r.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
            }

            function K(e) {
                const t = this,
                    n = t.touchEventsData;
                let i, r = e;
                r.originalEvent && (r = r.originalEvent);
                if ("touchend" === r.type || "touchcancel" === r.type) {
                    if (i = [...r.changedTouches].find((e => e.identifier === n.touchId)), !i || i.identifier !== n.touchId) return
                } else {
                    if (null !== n.touchId) return;
                    if (r.pointerId !== n.pointerId) return;
                    i = r
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type)) {
                    if (!(["pointercancel", "contextmenu"].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))) return
                }
                n.pointerId = null, n.touchId = null;
                const {
                    params: a,
                    touches: s,
                    rtlTranslate: o,
                    slidesGrid: l,
                    enabled: c
                } = t;
                if (!c) return;
                if (!a.simulateTouch && "mouse" === r.pointerType) return;
                if (n.allowTouchCallbacks && t.emit("touchEnd", r), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && a.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
                a.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const u = m(),
                    d = u - n.touchStartTime;
                if (t.allowClick) {
                    const e = r.path || r.composedPath && r.composedPath();
                    t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), d < 300 && u - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r)
                }
                if (n.lastClickTime = m(), h((() => {
                    t.destroyed || (t.allowClick = !0)
                })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === s.diff && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
                let p;
                if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, p = a.followFinger ? o ? t.translate : -t.translate : -n.currentTranslate, a.cssMode) return;
                if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: p
                });
                const f = p >= -t.maxTranslate() && !t.params.loop;
                let g = 0,
                    v = t.slidesSizesGrid[0];
                for (let h = 0; h < l.length; h += h < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                    const e = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                    void 0 !== l[h + e] ? (f || p >= l[h] && p < l[h + e]) && (g = h, v = l[h + e] - l[h]) : (f || p >= l[h]) && (g = h, v = l[l.length - 1] - l[l.length - 2])
                }
                let b = null,
                    y = null;
                a.rewind && (t.isBeginning ? y = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (b = 0));
                const w = (p - l[g]) / v,
                    E = g < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                if (d > a.longSwipesMs) {
                    if (!a.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? b : g + E) : t.slideTo(g)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(g + E) : null !== y && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(y) : t.slideTo(g))
                } else {
                    if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? r.target === t.navigation.nextEl ? t.slideTo(g + E) : t.slideTo(g) : ("next" === t.swipeDirection && t.slideTo(null !== b ? b : g + E), "prev" === t.swipeDirection && t.slideTo(null !== y ? y : g))
                }
            }

            function Z() {
                const e = this,
                    {
                        params: t,
                        el: n
                    } = e;
                if (n && 0 === n.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: i,
                    allowSlidePrev: r,
                    snapGrid: a
                } = e, s = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                const o = s && t.loop;
                !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !s ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }), 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function J(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function Q() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: n,
                        enabled: i
                    } = e;
                if (!i) return;
                let r;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const a = e.maxTranslate() - e.minTranslate();
                r = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, r !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }

            function ee(e) {
                const t = this;
                F(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
            }

            function te() {
                const e = this;
                e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
            }
            const ne = (e, t) => {
                const n = d(),
                    {
                        params: i,
                        el: r,
                        wrapperEl: a,
                        device: s
                    } = e,
                    o = !!i.nested,
                    l = "on" === t ? "addEventListener" : "removeEventListener",
                    c = t;
                r && "string" != typeof r && (n[l]("touchstart", e.onDocumentTouchStart, {
                    passive: !1,
                    capture: o
                }), r[l]("touchstart", e.onTouchStart, {
                    passive: !1
                }), r[l]("pointerdown", e.onTouchStart, {
                    passive: !1
                }), n[l]("touchmove", e.onTouchMove, {
                    passive: !1,
                    capture: o
                }), n[l]("pointermove", e.onTouchMove, {
                    passive: !1,
                    capture: o
                }), n[l]("touchend", e.onTouchEnd, {
                    passive: !0
                }), n[l]("pointerup", e.onTouchEnd, {
                    passive: !0
                }), n[l]("pointercancel", e.onTouchEnd, {
                    passive: !0
                }), n[l]("touchcancel", e.onTouchEnd, {
                    passive: !0
                }), n[l]("pointerout", e.onTouchEnd, {
                    passive: !0
                }), n[l]("pointerleave", e.onTouchEnd, {
                    passive: !0
                }), n[l]("contextmenu", e.onTouchEnd, {
                    passive: !0
                }), (i.preventClicks || i.preventClicksPropagation) && r[l]("click", e.onClick, !0), i.cssMode && a[l]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Z, !0) : e[c]("observerUpdate", Z, !0), r[l]("load", e.onLoad, {
                    capture: !0
                }))
            };
            const ie = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var re = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function ae(e, t) {
                return function (n) {
                    void 0 === n && (n = {});
                    const i = Object.keys(n)[0],
                        r = n[i];
                    "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = {
                        enabled: !0
                    }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                        enabled: !1
                    }), b(t, n)) : b(t, n)) : b(t, n)
                }
            }
            const se = {
                eventsEmitter: z,
                update: H,
                translate: W,
                transition: {
                    setTransition: function (e, t) {
                        const n = this;
                        n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`, n.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), n.emit("setTransition", e, t)
                    },
                    transitionStart: function (e, t) {
                        void 0 === e && (e = !0);
                        const n = this,
                            {
                                params: i
                            } = n;
                        i.cssMode || (i.autoHeight && n.updateAutoHeight(), V({
                            swiper: n,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }))
                    },
                    transitionEnd: function (e, t) {
                        void 0 === e && (e = !0);
                        const n = this,
                            {
                                params: i
                            } = n;
                        n.animating = !1, i.cssMode || (n.setTransition(0), V({
                            swiper: n,
                            runCallbacks: e,
                            direction: t,
                            step: "End"
                        }))
                    }
                },
                slide: $,
                loop: q,
                grabCursor: {
                    setGrabCursor: function (e) {
                        const t = this;
                        if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                        const n = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                        t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                            t.__preventObserver__ = !1
                        }))
                    },
                    unsetGrabCursor: function () {
                        const e = this;
                        e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                            e.__preventObserver__ = !1
                        })))
                    }
                },
                events: {
                    attachEvents: function () {
                        const e = this,
                            {
                                params: t
                            } = e;
                        e.onTouchStart = X.bind(e), e.onTouchMove = Y.bind(e), e.onTouchEnd = K.bind(e), e.onDocumentTouchStart = te.bind(e), t.cssMode && (e.onScroll = Q.bind(e)), e.onClick = J.bind(e), e.onLoad = ee.bind(e), ne(e, "on")
                    },
                    detachEvents: function () {
                        ne(this, "off")
                    }
                },
                breakpoints: {
                    setBreakpoint: function () {
                        const e = this,
                            {
                                realIndex: t,
                                initialized: n,
                                params: i,
                                el: r
                            } = e,
                            a = i.breakpoints;
                        if (!a || a && 0 === Object.keys(a).length) return;
                        const s = d(),
                            o = "window" !== i.breakpointsBase && i.breakpointsBase ? "container" : i.breakpointsBase,
                            l = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? e.el : s.querySelector(i.breakpointsBase),
                            c = e.getBreakpoint(a, o, l);
                        if (!c || e.currentBreakpoint === c) return;
                        const u = (c in a ? a[c] : void 0) || e.originalParams,
                            p = ie(e, i),
                            f = ie(e, u),
                            h = e.params.grabCursor,
                            m = u.grabCursor,
                            g = i.enabled;
                        p && !f ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && f && (r.classList.add(`${i.containerModifierClass}grid`), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !m ? e.unsetGrabCursor() : !h && m && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                            if (void 0 === u[t]) return;
                            const n = i[t] && i[t].enabled,
                                r = u[t] && u[t].enabled;
                            n && !r && e[t].disable(), !n && r && e[t].enable()
                        }));
                        const v = u.direction && u.direction !== i.direction,
                            y = i.loop && (u.slidesPerView !== i.slidesPerView || v),
                            w = i.loop;
                        v && n && e.changeDirection(), b(e.params, u);
                        const E = e.params.enabled,
                            S = e.params.loop;
                        Object.assign(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), g && !E ? e.disable() : !g && E && e.enable(), e.currentBreakpoint = c, e.emit("_beforeBreakpoint", u), n && (y ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !w && S ? (e.loopCreate(t), e.updateSlides()) : w && !S && e.loopDestroy()), e.emit("breakpoint", u)
                    },
                    getBreakpoint: function (e, t, n) {
                        if (void 0 === t && (t = "window"), !e || "container" === t && !n) return;
                        let i = !1;
                        const r = f(),
                            a = "window" === t ? r.innerHeight : n.clientHeight,
                            s = Object.keys(e).map((e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return {
                                        value: a * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        s.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                        for (let o = 0; o < s.length; o += 1) {
                            const {
                                point: e,
                                value: a
                            } = s[o];
                            "window" === t ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = e) : a <= n.clientWidth && (i = e)
                        }
                        return i || "max"
                    }
                },
                checkOverflow: {
                    checkOverflow: function () {
                        const e = this,
                            {
                                isLocked: t,
                                params: n
                            } = e,
                            {
                                slidesOffsetBefore: i
                            } = n;
                        if (i) {
                            const t = e.slides.length - 1,
                                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                            e.isLocked = e.size > n
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                    }
                },
                classes: {
                    addClasses: function () {
                        const e = this,
                            {
                                classNames: t,
                                params: n,
                                rtl: i,
                                el: r,
                                device: a
                            } = e,
                            s = function (e, t) {
                                const n = [];
                                return e.forEach((e => {
                                    "object" == typeof e ? Object.keys(e).forEach((i => {
                                        e[i] && n.push(t + i)
                                    })) : "string" == typeof e && n.push(t + e)
                                })), n
                            }(["initialized", n.direction, {
                                "free-mode": e.params.freeMode && n.freeMode.enabled
                            }, {
                                    autoheight: n.autoHeight
                                }, {
                                    rtl: i
                                }, {
                                    grid: n.grid && n.grid.rows > 1
                                }, {
                                    "grid-column": n.grid && n.grid.rows > 1 && "column" === n.grid.fill
                                }, {
                                    android: a.android
                                }, {
                                    ios: a.ios
                                }, {
                                    "css-mode": n.cssMode
                                }, {
                                    centered: n.cssMode && n.centeredSlides
                                }, {
                                    "watch-progress": n.watchSlidesProgress
                                }], n.containerModifierClass);
                        t.push(...s), r.classList.add(...t), e.emitContainerClasses()
                    },
                    removeClasses: function () {
                        const {
                            el: e,
                            classNames: t
                        } = this;
                        e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                    }
                }
            },
                oe = {};
            class le {
                constructor() {
                    let e, t;
                    for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                    1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = b({}, t), e && !t.el && (t.el = e);
                    const a = d();
                    if (t.el && "string" == typeof t.el && a.querySelectorAll(t.el).length > 1) {
                        const e = [];
                        return a.querySelectorAll(t.el).forEach((n => {
                            const i = b({}, t, {
                                el: n
                            });
                            e.push(new le(i))
                        })), e
                    }
                    const s = this;
                    s.__swiper__ = !0, s.support = N(), s.device = I({
                        userAgent: t.userAgent
                    }), s.browser = A(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], t.modules && Array.isArray(t.modules) && s.modules.push(...t.modules);
                    const o = {};
                    s.modules.forEach((e => {
                        e({
                            params: t,
                            swiper: s,
                            extendParams: ae(t, o),
                            on: s.on.bind(s),
                            once: s.once.bind(s),
                            off: s.off.bind(s),
                            emit: s.emit.bind(s)
                        })
                    }));
                    const l = b({}, re, o);
                    return s.params = b({}, l, oe, t), s.originalParams = b({}, s.params), s.passedParams = b({}, t), s.params && s.params.on && Object.keys(s.params.on).forEach((e => {
                        s.on(e, s.params.on[e])
                    })), s.params && s.params.onAny && s.onAny(s.params.onAny), Object.assign(s, {
                        enabled: s.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal() {
                            return "horizontal" === s.params.direction
                        },
                        isVertical() {
                            return "vertical" === s.params.direction
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                        },
                        allowSlideNext: s.params.allowSlideNext,
                        allowSlidePrev: s.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: s.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: s.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), s.emit("_swiper"), s.params.init && s.init(), s
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[e]
                }
                getSlideIndex(e) {
                    const {
                        slidesEl: t,
                        params: n
                    } = this, i = O(E(t, `.${n.slideClass}, swiper-slide`)[0]);
                    return O(e) - i
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)))
                }
                getSlideIndexWhenGrid(e) {
                    return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e
                }
                recalcSlides() {
                    const {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = E(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const i = n.minTranslate(),
                        r = (n.maxTranslate() - i) * e + i;
                    n.translateTo(r, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.forEach((n => {
                        const i = e.getSlideClasses(n);
                        t.push({
                            slideEl: n,
                            classNames: i
                        }), e.emit("_slideClass", n, i)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: n,
                        slides: i,
                        slidesGrid: r,
                        slidesSizesGrid: a,
                        size: s,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if ("number" == typeof n.slidesPerView) return n.slidesPerView;
                    if (n.centeredSlides) {
                        let e, t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
                        for (let n = o + 1; n < i.length; n += 1) i[n] && !e && (t += Math.ceil(i[n].swiperSlideSize), l += 1, t > s && (e = !0));
                        for (let n = o - 1; n >= 0; n -= 1) i[n] && !e && (t += i[n].swiperSlideSize, l += 1, t > s && (e = !0))
                    } else if ("current" === e)
                        for (let c = o + 1; c < i.length; c += 1) {
                            (t ? r[c] + a[c] - r[o] < s : r[c] - r[o] < s) && (l += 1)
                        } else
                        for (let c = o - 1; c >= 0; c -= 1) {
                            r[o] - r[c] < s && (l += 1)
                        }
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: n
                    } = e;

                    function i() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let r;
                    if (n.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                        t.complete && F(e, t)
                    })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), n.freeMode && n.freeMode.enabled && !n.cssMode) i(), n.autoHeight && e.updateAutoHeight();
                    else {
                        if (("auto" === n.slidesPerView || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
                            const t = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
                            r = e.slideTo(t.length - 1, 0, !1, !0)
                        } else r = e.slideTo(e.activeIndex, 0, !1, !0);
                        r || i()
                    }
                    n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const n = this,
                        i = n.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (n.el.classList.remove(`${n.params.containerModifierClass}${i}`), n.el.classList.add(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.forEach((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), n.emit("changeDirection"), t && n.update()), n
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    let n = e || t.params.el;
                    if ("string" == typeof n && (n = document.querySelector(n)), !n) return !1;
                    n.swiper = t, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                    let r = (() => {
                        if (n && n.shadowRoot && n.shadowRoot.querySelector) {
                            return n.shadowRoot.querySelector(i())
                        }
                        return E(n, i())[0]
                    })();
                    return !r && t.params.createElements && (r = x("div", t.params.wrapperClass), n.append(r), E(n, `.${t.params.slideClass}`).forEach((e => {
                        r.append(e)
                    }))), Object.assign(t, {
                        el: n,
                        wrapperEl: r,
                        slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : r,
                        hostEl: t.isElement ? n.parentNode.host : n,
                        mounted: !0,
                        rtl: "rtl" === n.dir.toLowerCase() || "rtl" === T(n, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === T(n, "direction")),
                        wrongRTL: "-webkit-box" === T(r, "display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    if (!1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
                    const n = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((e => {
                        e.complete ? F(t, e) : e.addEventListener("load", (e => {
                            F(t, e.target)
                        }))
                    })), G(t), t.initialized = !0, G(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const n = this,
                        {
                            params: i,
                            el: r,
                            wrapperEl: a,
                            slides: s
                        } = n;
                    return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), a && a.removeAttribute("style"), s && s.length && s.forEach((e => {
                        e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    }))), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((e => {
                        n.off(e)
                    })), !1 !== e && (n.el && "string" != typeof n.el && (n.el.swiper = null), function (e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                            try {
                                t[e] = null
                            } catch (n) { }
                            try {
                                delete t[e]
                            } catch (n) { }
                        }))
                    }(n)), n.destroyed = !0), null
                }
                static extendDefaults(e) {
                    b(oe, e)
                }
                static get extendedDefaults() {
                    return oe
                }
                static get defaults() {
                    return re
                }
                static installModule(e) {
                    le.prototype.__modules__ || (le.prototype.__modules__ = []);
                    const t = le.prototype.__modules__;
                    "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => le.installModule(e))), le) : (le.installModule(e), le)
                }
            }
            Object.keys(se).forEach((e => {
                Object.keys(se[e]).forEach((t => {
                    le.prototype[t] = se[e][t]
                }))
            })), le.use([function (e) {
                let {
                    swiper: t,
                    on: n,
                    emit: i
                } = e;
                const r = f();
                let a = null,
                    s = null;
                const o = () => {
                    t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
                },
                    l = () => {
                        t && !t.destroyed && t.initialized && i("orientationchange")
                    };
                n("init", (() => {
                    t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
                        s = r.requestAnimationFrame((() => {
                            const {
                                width: n,
                                height: i
                            } = t;
                            let r = n,
                                a = i;
                            e.forEach((e => {
                                let {
                                    contentBoxSize: n,
                                    contentRect: i,
                                    target: s
                                } = e;
                                s && s !== t.el || (r = i ? i.width : (n[0] || n).inlineSize, a = i ? i.height : (n[0] || n).blockSize)
                            })), r === n && a === i || o()
                        }))
                    })), a.observe(t.el)) : (r.addEventListener("resize", o), r.addEventListener("orientationchange", l))
                })), n("destroy", (() => {
                    s && r.cancelAnimationFrame(s), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), r.removeEventListener("resize", o), r.removeEventListener("orientationchange", l)
                }))
            }, function (e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;
                const a = [],
                    s = f(),
                    o = function (e, n) {
                        void 0 === n && (n = {});
                        const i = new (s.MutationObserver || s.WebkitMutationObserver)((e => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) return void r("observerUpdate", e[0]);
                            const n = function () {
                                r("observerUpdate", e[0])
                            };
                            s.requestAnimationFrame ? s.requestAnimationFrame(n) : s.setTimeout(n, 0)
                        }));
                        i.observe(e, {
                            attributes: void 0 === n.attributes || n.attributes,
                            childList: t.isElement || (void 0 === n.childList || n).childList,
                            characterData: void 0 === n.characterData || n.characterData
                        }), a.push(i)
                    };
                n({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", (() => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = k(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) o(e[t])
                        }
                        o(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), o(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                })), i("destroy", (() => {
                    a.forEach((e => {
                        e.disconnect()
                    })), a.splice(0, a.length)
                }))
            }]);
            const ce = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function ue(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function de(e, t) {
                const n = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => n.indexOf(e) < 0)).forEach((n => {
                    void 0 === e[n] ? e[n] = t[n] : ue(t[n]) && ue(e[n]) && Object.keys(t[n]).length > 0 ? t[n].__swiper__ ? e[n] = t[n] : de(e[n], t[n]) : e[n] = t[n]
                }))
            }

            function pe(e) {
                return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function fe(e) {
                return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
            }

            function he(e) {
                return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
            }

            function me(e) {
                void 0 === e && (e = "");
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    n = [];
                return t.forEach((e => {
                    n.indexOf(e) < 0 && n.push(e)
                })), n.join(" ")
            }

            function ge(e) {
                return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
            }

            function ve() {
                return ve = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, ve.apply(this, arguments)
            }

            function be(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function ye(e) {
                const t = [];
                return i.Children.toArray(e).forEach((e => {
                    be(e) ? t.push(e) : e.props && e.props.children && ye(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function we(e) {
                const t = [],
                    n = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return i.Children.toArray(e).forEach((e => {
                    if (be(e)) t.push(e);
                    else if (e.props && e.props.slot && n[e.props.slot]) n[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const i = ye(e.props.children);
                        i.length > 0 ? i.forEach((e => t.push(e))) : n["container-end"].push(e)
                    } else n["container-end"].push(e)
                })), {
                    slides: t,
                    slots: n
                }
            }

            function Ee(e, t) {
                return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
            }
            const Se = (0, i.createContext)(null),
                xe = (0, i.createContext)(null),
                Te = (0, i.forwardRef)((function (e, t) {
                    let {
                        className: n,
                        tag: r = "div",
                        wrapperTag: a = "div",
                        children: s,
                        onSwiper: o,
                        ...l
                    } = void 0 === e ? {} : e, c = !1;
                    const [u, d] = (0, i.useState)("swiper"), [p, f] = (0, i.useState)(null), [h, m] = (0, i.useState)(!1), g = (0, i.useRef)(!1), v = (0, i.useRef)(null), b = (0, i.useRef)(null), y = (0, i.useRef)(null), w = (0, i.useRef)(null), E = (0, i.useRef)(null), S = (0, i.useRef)(null), x = (0, i.useRef)(null), T = (0, i.useRef)(null), {
                        params: O,
                        passedParams: k,
                        rest: C,
                        events: P
                    } = function (e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        const n = {
                            on: {}
                        },
                            i = {},
                            r = {};
                        de(n, re), n._emitClasses = !0, n.init = !1;
                        const a = {},
                            s = ce.map((e => e.replace(/_/, ""))),
                            o = Object.assign({}, e);
                        return Object.keys(o).forEach((o => {
                            void 0 !== e[o] && (s.indexOf(o) >= 0 ? ue(e[o]) ? (n[o] = {}, r[o] = {}, de(n[o], e[o]), de(r[o], e[o])) : (n[o] = e[o], r[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : a[o] = e[o])
                        })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                            !0 === n[e] && (n[e] = {}), !1 === n[e] && delete n[e]
                        })), {
                            params: n,
                            passedParams: r,
                            rest: a,
                            events: i
                        }
                    }(l), {
                        slides: M,
                        slots: L
                    } = we(s), j = () => {
                        m(!h)
                    };
                    Object.assign(O.on, {
                        _containerClasses(e, t) {
                            d(t)
                        }
                    });
                    const N = () => {
                        Object.assign(O.on, P), c = !0;
                        const e = {
                            ...O
                        };
                        if (delete e.wrapperClass, b.current = new le(e), b.current.virtual && b.current.params.virtual.enabled) {
                            b.current.virtual.slides = M;
                            const e = {
                                cache: !1,
                                slides: M,
                                renderExternal: f,
                                renderExternalUpdate: !1
                            };
                            de(b.current.params.virtual, e), de(b.current.originalParams.virtual, e)
                        }
                    };
                    v.current || N(), b.current && b.current.on("_beforeBreakpoint", j);
                    return (0, i.useEffect)((() => () => {
                        b.current && b.current.off("_beforeBreakpoint", j)
                    })), (0, i.useEffect)((() => {
                        !g.current && b.current && (b.current.emitSlidesClasses(), g.current = !0)
                    })), Ee((() => {
                        if (t && (t.current = v.current), v.current) return b.current.destroyed && N(),
                            function (e, t) {
                                let {
                                    el: n,
                                    nextEl: i,
                                    prevEl: r,
                                    paginationEl: a,
                                    scrollbarEl: s,
                                    swiper: o
                                } = e;
                                pe(t) && i && r && (o.params.navigation.nextEl = i, o.originalParams.navigation.nextEl = i, o.params.navigation.prevEl = r, o.originalParams.navigation.prevEl = r), fe(t) && a && (o.params.pagination.el = a, o.originalParams.pagination.el = a), he(t) && s && (o.params.scrollbar.el = s, o.originalParams.scrollbar.el = s), o.init(n)
                            }({
                                el: v.current,
                                nextEl: E.current,
                                prevEl: S.current,
                                paginationEl: x.current,
                                scrollbarEl: T.current,
                                swiper: b.current
                            }, O), o && !b.current.destroyed && o(b.current), () => {
                                b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                            }
                    }), []), Ee((() => {
                        !c && P && b.current && Object.keys(P).forEach((e => {
                            b.current.on(e, P[e])
                        }));
                        const e = function (e, t, n, i, r) {
                            const a = [];
                            if (!t) return a;
                            const s = e => {
                                a.indexOf(e) < 0 && a.push(e)
                            };
                            if (n && i) {
                                const e = i.map(r),
                                    t = n.map(r);
                                e.join("") !== t.join("") && s("children"), i.length !== n.length && s("children")
                            }
                            return ce.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((n => {
                                if (n in e && n in t)
                                    if (ue(e[n]) && ue(t[n])) {
                                        const i = Object.keys(e[n]),
                                            r = Object.keys(t[n]);
                                        i.length !== r.length ? s(n) : (i.forEach((i => {
                                            e[n][i] !== t[n][i] && s(n)
                                        })), r.forEach((i => {
                                            e[n][i] !== t[n][i] && s(n)
                                        })))
                                    } else e[n] !== t[n] && s(n)
                            })), a
                        }(k, y.current, M, w.current, (e => e.key));
                        return y.current = k, w.current = M, e.length && b.current && !b.current.destroyed && function (e) {
                            let {
                                swiper: t,
                                slides: n,
                                passedParams: i,
                                changedParams: r,
                                nextEl: a,
                                prevEl: s,
                                scrollbarEl: o,
                                paginationEl: l
                            } = e;
                            const c = r.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                                {
                                    params: u,
                                    pagination: d,
                                    navigation: p,
                                    scrollbar: f,
                                    virtual: h,
                                    thumbs: m
                                } = t;
                            let g, v, b, y, w, E, S, x;
                            r.includes("thumbs") && i.thumbs && i.thumbs.swiper && !i.thumbs.swiper.destroyed && u.thumbs && (!u.thumbs.swiper || u.thumbs.swiper.destroyed) && (g = !0), r.includes("controller") && i.controller && i.controller.control && u.controller && !u.controller.control && (v = !0), r.includes("pagination") && i.pagination && (i.pagination.el || l) && (u.pagination || !1 === u.pagination) && d && !d.el && (b = !0), r.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (u.scrollbar || !1 === u.scrollbar) && f && !f.el && (y = !0), r.includes("navigation") && i.navigation && (i.navigation.prevEl || s) && (i.navigation.nextEl || a) && (u.navigation || !1 === u.navigation) && p && !p.prevEl && !p.nextEl && (w = !0);
                            const T = e => {
                                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), u[e].prevEl = void 0, u[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), u[e].el = void 0, t[e].el = void 0))
                            };
                            r.includes("loop") && t.isElement && (u.loop && !i.loop ? E = !0 : !u.loop && i.loop ? S = !0 : x = !0), c.forEach((e => {
                                if (ue(u[e]) && ue(i[e])) Object.assign(u[e], i[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in i[e]) || i[e].enabled || T(e);
                                else {
                                    const t = i[e];
                                    !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? u[e] = i[e] : !1 === t && T(e)
                                }
                            })), c.includes("controller") && !v && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control), r.includes("children") && n && h && u.virtual.enabled ? (h.slides = n, h.update(!0)) : r.includes("virtual") && h && u.virtual.enabled && (n && (h.slides = n), h.update(!0)), r.includes("children") && n && u.loop && (x = !0), g && m.init() && m.update(!0);
                            v && (t.controller.control = u.controller.control), b && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (u.pagination.el = l), d.init(), d.render(), d.update()), y && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (u.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()), w && (t.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), _(a, t.hostEl.constructor.nextButtonSvg), a.part.add("button-next"), t.el.appendChild(a)), s && "string" != typeof s || (s = document.createElement("div"), s.classList.add("swiper-button-prev"), _(s, t.hostEl.constructor.prevButtonSvg), s.part.add("button-prev"), t.el.appendChild(s))), a && (u.navigation.nextEl = a), s && (u.navigation.prevEl = s), p.init(), p.update()), r.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), r.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), r.includes("direction") && t.changeDirection(i.direction, !1), (E || x) && t.loopDestroy(), (S || x) && t.loopCreate(), t.update()
                        }({
                            swiper: b.current,
                            slides: M,
                            passedParams: k,
                            changedParams: e,
                            nextEl: E.current,
                            prevEl: S.current,
                            scrollbarEl: T.current,
                            paginationEl: x.current
                        }), () => {
                            P && b.current && Object.keys(P).forEach((e => {
                                b.current.off(e, P[e])
                            }))
                        }
                    })), Ee((() => {
                        var e;
                        !(e = b.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                    }), [p]), i.createElement(r, ve({
                        ref: v,
                        className: me(`${u}${n ? ` ${n}` : ""}`)
                    }, C), i.createElement(xe.Provider, {
                        value: b.current
                    }, L["container-start"], i.createElement(a, {
                        className: ge(O.wrapperClass)
                    }, L["wrapper-start"], O.virtual ? function (e, t, n) {
                        if (!n) return null;
                        const r = e => {
                            let n = e;
                            return e < 0 ? n = t.length + e : n >= t.length && (n -= t.length), n
                        },
                            a = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: `${n.offset}px`
                            } : {
                                top: `${n.offset}px`
                            },
                            {
                                from: s,
                                to: o
                            } = n,
                            l = e.params.loop ? -t.length : 0,
                            c = e.params.loop ? 2 * t.length : t.length,
                            u = [];
                        for (let i = l; i < c; i += 1) i >= s && i <= o && u.push(t[r(i)]);
                        return u.map(((t, n) => i.cloneElement(t, {
                            swiper: e,
                            style: a,
                            key: t.props.virtualIndex || t.key || `slide-${n}`
                        })))
                    }(b.current, M, p) : M.map(((e, t) => i.cloneElement(e, {
                        swiper: b.current,
                        swiperSlideIndex: t
                    }))), L["wrapper-end"]), pe(O) && i.createElement(i.Fragment, null, i.createElement("div", {
                        ref: S,
                        className: "swiper-button-prev"
                    }), i.createElement("div", {
                        ref: E,
                        className: "swiper-button-next"
                    })), he(O) && i.createElement("div", {
                        ref: T,
                        className: "swiper-scrollbar"
                    }), fe(O) && i.createElement("div", {
                        ref: x,
                        className: "swiper-pagination"
                    }), L["container-end"]))
                }));
            Te.displayName = "Swiper";
            const Oe = (0, i.forwardRef)((function (e, t) {
                let {
                    tag: n = "div",
                    children: r,
                    className: a = "",
                    swiper: s,
                    zoom: o,
                    lazy: l,
                    virtualIndex: c,
                    swiperSlideIndex: u,
                    ...d
                } = void 0 === e ? {} : e;
                const p = (0, i.useRef)(null),
                    [f, h] = (0, i.useState)("swiper-slide"),
                    [m, g] = (0, i.useState)(!1);

                function v(e, t, n) {
                    t === p.current && h(n)
                }
                Ee((() => {
                    if (void 0 !== u && (p.current.swiperSlideIndex = u), t && (t.current = p.current), p.current && s) {
                        if (!s.destroyed) return s.on("_slideClass", v), () => {
                            s && s.off("_slideClass", v)
                        };
                        "swiper-slide" !== f && h("swiper-slide")
                    }
                })), Ee((() => {
                    s && p.current && !s.destroyed && h(s.getSlideClasses(p.current))
                }), [s]);
                const b = {
                    isActive: f.indexOf("swiper-slide-active") >= 0,
                    isVisible: f.indexOf("swiper-slide-visible") >= 0,
                    isPrev: f.indexOf("swiper-slide-prev") >= 0,
                    isNext: f.indexOf("swiper-slide-next") >= 0
                },
                    y = () => "function" == typeof r ? r(b) : r;
                return i.createElement(n, ve({
                    ref: p,
                    className: me(`${f}${a ? ` ${a}` : ""}`),
                    "data-swiper-slide-index": c,
                    onLoad: () => {
                        g(!0)
                    }
                }, d), o && i.createElement(Se.Provider, {
                    value: b
                }, i.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof o ? o : void 0
                }, y(), l && !m && i.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !o && i.createElement(Se.Provider, {
                    value: b
                }, y(), l && !m && i.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            }));
            Oe.displayName = "SwiperSlide";
            var ke = JSON.parse('[{"id":1,"title":"Softare Engineer","content":"Designs, builds, and optimizes software solutions, ensuring reliability, performance, and maintainability across platforms and teams.","image":"/images/slider/unsplash-02.jpg"},{"id":2,"title":"Cloud Engineer","content":"Designs, implements, and manages cloud-based infrastructure and services, ensuring scalability, security,  and performance for business applications.","image":"/images/slider/unsplash-01.jpg"},{"id":3,"title":"DevOps Engineer","content":"Implements automated pipelines and infrastructure management, ensuring fast, reliable, and scalable software delivery while bridging development and operations seamlessly.","image":"/images/slider/unsplash-03.jpg"},{"id":4,"title":"Data Structures & Algorithms (DSA)","content":"Develops efficient problem-solving skills by designing and implementing algorithms with optimal data structures to improve performance and scalability.","image":"/images/slider/unsplash-04.jpg"}]');

            function Ce(e, t, n, i) {
                return e.params.createElements && Object.keys(i).forEach((r => {
                    if (!n[r] && !0 === n.auto) {
                        let a = E(e.el, `.${i[r]}`)[0];
                        a || (a = x("div", i[r]), a.className = i[r], e.el.append(a)), n[r] = a, t[r] = a
                    }
                })), n
            }

            function Pe(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;

                function a(e) {
                    let n;
                    return e && "string" == typeof e && t.isElement && (n = t.el.querySelector(e) || t.hostEl.querySelector(e), n) ? n : (e && ("string" == typeof e && (n = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && n && n.length > 1 && 1 === t.el.querySelectorAll(e).length ? n = t.el.querySelector(e) : n && 1 === n.length && (n = n[0])), e && !n ? e : n)
                }

                function s(e, n) {
                    const i = t.params.navigation;
                    (e = P(e)).forEach((e => {
                        e && (e.classList[n ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = n), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass))
                    }))
                }

                function o() {
                    const {
                        nextEl: e,
                        prevEl: n
                    } = t.navigation;
                    if (t.params.loop) return s(n, !1), void s(e, !1);
                    s(n, t.isBeginning && !t.params.rewind), s(e, t.isEnd && !t.params.rewind)
                }

                function l(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), r("navigationPrev"))
                }

                function c(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), r("navigationNext"))
                }

                function u() {
                    const e = t.params.navigation;
                    if (t.params.navigation = Ce(t, t.originalParams.navigation, t.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }), !e.nextEl && !e.prevEl) return;
                    let n = a(e.nextEl),
                        i = a(e.prevEl);
                    Object.assign(t.navigation, {
                        nextEl: n,
                        prevEl: i
                    }), n = P(n), i = P(i);
                    const r = (n, i) => {
                        n && n.addEventListener("click", "next" === i ? c : l), !t.enabled && n && n.classList.add(...e.lockClass.split(" "))
                    };
                    n.forEach((e => r(e, "next"))), i.forEach((e => r(e, "prev")))
                }

                function d() {
                    let {
                        nextEl: e,
                        prevEl: n
                    } = t.navigation;
                    e = P(e), n = P(n);
                    const i = (e, n) => {
                        e.removeEventListener("click", "next" === n ? c : l), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
                    };
                    e.forEach((e => i(e, "next"))), n.forEach((e => i(e, "prev")))
                }
                n({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    prevEl: null
                }, i("init", (() => {
                    !1 === t.params.navigation.enabled ? p() : (u(), o())
                })), i("toEdge fromEdge lock unlock", (() => {
                    o()
                })), i("destroy", (() => {
                    d()
                })), i("enable disable", (() => {
                    let {
                        nextEl: e,
                        prevEl: n
                    } = t.navigation;
                    e = P(e), n = P(n), t.enabled ? o() : [...e, ...n].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
                })), i("click", ((e, n) => {
                    let {
                        nextEl: i,
                        prevEl: a
                    } = t.navigation;
                    i = P(i), a = P(a);
                    const s = n.target;
                    let o = a.includes(s) || i.includes(s);
                    if (t.isElement && !o) {
                        const e = n.path || n.composedPath && n.composedPath();
                        e && (o = e.find((e => i.includes(e) || a.includes(e))))
                    }
                    if (t.params.navigation.hideOnClick && !o) {
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === s || t.pagination.el.contains(s))) return;
                        let e;
                        i.length ? e = i[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), r(!0 === e ? "navigationShow" : "navigationHide"), [...i, ...a].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
                    }
                }));
                const p = () => {
                    t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), d()
                };
                Object.assign(t.navigation, {
                    enable: () => {
                        t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), u(), o()
                    },
                    disable: p,
                    update: o,
                    init: u,
                    destroy: d
                })
            }

            function _e(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g, "\\$1").replace(/ /g, ".")}`
            }

            function Me(e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;
                const a = "swiper-pagination";
                let s;
                n({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${a}-bullet`,
                        bulletActiveClass: `${a}-bullet-active`,
                        modifierClass: `${a}-`,
                        currentClass: `${a}-current`,
                        totalClass: `${a}-total`,
                        hiddenClass: `${a}-hidden`,
                        progressbarFillClass: `${a}-progressbar-fill`,
                        progressbarOppositeClass: `${a}-progressbar-opposite`,
                        clickableClass: `${a}-clickable`,
                        lockClass: `${a}-lock`,
                        horizontalClass: `${a}-horizontal`,
                        verticalClass: `${a}-vertical`,
                        paginationDisabledClass: `${a}-disabled`
                    }
                }), t.pagination = {
                    el: null,
                    bullets: []
                };
                let o = 0;

                function l() {
                    return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
                }

                function c(e, n) {
                    const {
                        bulletActiveClass: i
                    } = t.params.pagination;
                    e && (e = e[("prev" === n ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${n}`), (e = e[("prev" === n ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${n}-${n}`))
                }

                function u(e) {
                    const n = e.target.closest(_e(t.params.pagination.bulletClass));
                    if (!n) return;
                    e.preventDefault();
                    const i = O(n) * t.params.slidesPerGroup;
                    if (t.params.loop) {
                        if (t.realIndex === i) return;
                        const e = (r = t.realIndex, a = i, s = t.slides.length, (a %= s) == 1 + (r %= s) ? "next" : a === r - 1 ? "previous" : void 0);
                        "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(i)
                    } else t.slideTo(i);
                    var r, a, s
                }

                function d() {
                    const e = t.rtl,
                        n = t.params.pagination;
                    if (l()) return;
                    let i, a, u = t.pagination.el;
                    u = P(u);
                    const d = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        p = t.params.loop ? Math.ceil(d / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (a = t.previousRealIndex || 0, i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex, a = t.previousSnapIndex) : (a = t.previousIndex || 0, i = t.activeIndex || 0), "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        const r = t.pagination.bullets;
                        let l, d, p;
                        if (n.dynamicBullets && (s = C(r[0], t.isHorizontal() ? "width" : "height", !0), u.forEach((e => {
                            e.style[t.isHorizontal() ? "width" : "height"] = s * (n.dynamicMainBullets + 4) + "px"
                        })), n.dynamicMainBullets > 1 && void 0 !== a && (o += i - (a || 0), o > n.dynamicMainBullets - 1 ? o = n.dynamicMainBullets - 1 : o < 0 && (o = 0)), l = Math.max(i - o, 0), d = l + (Math.min(r.length, n.dynamicMainBullets) - 1), p = (d + l) / 2), r.forEach((e => {
                            const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${n.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                            e.classList.remove(...t)
                        })), u.length > 1) r.forEach((e => {
                            const r = O(e);
                            r === i ? e.classList.add(...n.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), n.dynamicBullets && (r >= l && r <= d && e.classList.add(...`${n.bulletActiveClass}-main`.split(" ")), r === l && c(e, "prev"), r === d && c(e, "next"))
                        }));
                        else {
                            const e = r[i];
                            if (e && e.classList.add(...n.bulletActiveClass.split(" ")), t.isElement && r.forEach(((e, t) => {
                                e.setAttribute("part", t === i ? "bullet-active" : "bullet")
                            })), n.dynamicBullets) {
                                const e = r[l],
                                    t = r[d];
                                for (let i = l; i <= d; i += 1) r[i] && r[i].classList.add(...`${n.bulletActiveClass}-main`.split(" "));
                                c(e, "prev"), c(t, "next")
                            }
                        }
                        if (n.dynamicBullets) {
                            const i = Math.min(r.length, n.dynamicMainBullets + 4),
                                a = (s * i - s) / 2 - p * s,
                                o = e ? "right" : "left";
                            r.forEach((e => {
                                e.style[t.isHorizontal() ? o : "top"] = `${a}px`
                            }))
                        }
                    }
                    u.forEach(((e, a) => {
                        if ("fraction" === n.type && (e.querySelectorAll(_e(n.currentClass)).forEach((e => {
                            e.textContent = n.formatFractionCurrent(i + 1)
                        })), e.querySelectorAll(_e(n.totalClass)).forEach((e => {
                            e.textContent = n.formatFractionTotal(p)
                        }))), "progressbar" === n.type) {
                            let r;
                            r = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                            const a = (i + 1) / p;
                            let s = 1,
                                o = 1;
                            "horizontal" === r ? s = a : o = a, e.querySelectorAll(_e(n.progressbarFillClass)).forEach((e => {
                                e.style.transform = `translate3d(0,0,0) scaleX(${s}) scaleY(${o})`, e.style.transitionDuration = `${t.params.speed}ms`
                            }))
                        }
                        "custom" === n.type && n.renderCustom ? (_(e, n.renderCustom(t, i + 1, p)), 0 === a && r("paginationRender", e)) : (0 === a && r("paginationRender", e), r("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](n.lockClass)
                    }))
                }

                function p() {
                    const e = t.params.pagination;
                    if (l()) return;
                    const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
                    let i = t.pagination.el;
                    i = P(i);
                    let a = "";
                    if ("bullets" === e.type) {
                        let i = t.params.loop ? Math.ceil(n / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && i > n && (i = n);
                        for (let n = 0; n < i; n += 1) e.renderBullet ? a += e.renderBullet.call(t, n, e.bulletClass) : a += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
                    }
                    "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], i.forEach((n => {
                        "custom" !== e.type && _(n, a || ""), "bullets" === e.type && t.pagination.bullets.push(...n.querySelectorAll(_e(e.bulletClass)))
                    })), "custom" !== e.type && r("paginationRender", i[0])
                }

                function f() {
                    t.params.pagination = Ce(t, t.originalParams.pagination, t.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let n;
                    "string" == typeof e.el && t.isElement && (n = t.el.querySelector(e.el)), n || "string" != typeof e.el || (n = [...document.querySelectorAll(e.el)]), n || (n = e.el), n && 0 !== n.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(n) && n.length > 1 && (n = [...t.el.querySelectorAll(e.el)], n.length > 1 && (n = n.find((e => k(e, ".swiper")[0] === t.el)))), Array.isArray(n) && 1 === n.length && (n = n[0]), Object.assign(t.pagination, {
                        el: n
                    }), n = P(n), n.forEach((n => {
                        "bullets" === e.type && e.clickable && n.classList.add(...(e.clickableClass || "").split(" ")), n.classList.add(e.modifierClass + e.type), n.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (n.classList.add(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && n.classList.add(e.progressbarOppositeClass), e.clickable && n.addEventListener("click", u), t.enabled || n.classList.add(e.lockClass)
                    })))
                }

                function h() {
                    const e = t.params.pagination;
                    if (l()) return;
                    let n = t.pagination.el;
                    n && (n = P(n), n.forEach((n => {
                        n.classList.remove(e.hiddenClass), n.classList.remove(e.modifierClass + e.type), n.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (n.classList.remove(...(e.clickableClass || "").split(" ")), n.removeEventListener("click", u))
                    }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
                }
                i("changeDirection", (() => {
                    if (!t.pagination || !t.pagination.el) return;
                    const e = t.params.pagination;
                    let {
                        el: n
                    } = t.pagination;
                    n = P(n), n.forEach((n => {
                        n.classList.remove(e.horizontalClass, e.verticalClass), n.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
                    }))
                })), i("init", (() => {
                    !1 === t.params.pagination.enabled ? m() : (f(), p(), d())
                })), i("activeIndexChange", (() => {
                    void 0 === t.snapIndex && d()
                })), i("snapIndexChange", (() => {
                    d()
                })), i("snapGridLengthChange", (() => {
                    p(), d()
                })), i("destroy", (() => {
                    h()
                })), i("enable disable", (() => {
                    let {
                        el: e
                    } = t.pagination;
                    e && (e = P(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
                })), i("lock unlock", (() => {
                    d()
                })), i("click", ((e, n) => {
                    const i = n.target,
                        a = P(t.pagination.el);
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
                        if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
                        const e = a[0].classList.contains(t.params.pagination.hiddenClass);
                        r(!0 === e ? "paginationShow" : "paginationHide"), a.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
                    }
                }));
                const m = () => {
                    t.el.classList.add(t.params.pagination.paginationDisabledClass);
                    let {
                        el: e
                    } = t.pagination;
                    e && (e = P(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), h()
                };
                Object.assign(t.pagination, {
                    enable: () => {
                        t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                        let {
                            el: e
                        } = t.pagination;
                        e && (e = P(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), f(), p(), d()
                    },
                    disable: m,
                    render: p,
                    update: d,
                    init: f,
                    destroy: h
                })
            }
            var Le = () => {
                document.querySelectorAll(".swiper-pagination") && document.querySelectorAll(".swiper-pagination").forEach((e => {
                    e.innerHTML = e.innerHTML.replace(" / ", "")
                }))
            },
                je = n(9593);
            le.use([Pe, Me, function (e) {
                let {
                    swiper: t,
                    extendParams: n,
                    on: i
                } = e;
                n({
                    parallax: {
                        enabled: !1
                    }
                });
                const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
                    a = (e, n) => {
                        const {
                            rtl: i
                        } = t, r = i ? -1 : 1, a = e.getAttribute("data-swiper-parallax") || "0";
                        let s = e.getAttribute("data-swiper-parallax-x"),
                            o = e.getAttribute("data-swiper-parallax-y");
                        const l = e.getAttribute("data-swiper-parallax-scale"),
                            c = e.getAttribute("data-swiper-parallax-opacity"),
                            u = e.getAttribute("data-swiper-parallax-rotate");
                        if (s || o ? (s = s || "0", o = o || "0") : t.isHorizontal() ? (s = a, o = "0") : (o = a, s = "0"), s = s.indexOf("%") >= 0 ? parseInt(s, 10) * n * r + "%" : s * n * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * n + "%" : o * n + "px", null != c) {
                            const t = c - (c - 1) * (1 - Math.abs(n));
                            e.style.opacity = t
                        }
                        let d = `translate3d(${s}, ${o}, 0px)`;
                        if (null != l) {
                            d += ` scale(${l - (l - 1) * (1 - Math.abs(n))})`
                        }
                        if (u && null != u) {
                            d += ` rotate(${u * n * -1}deg)`
                        }
                        e.style.transform = d
                    },
                    s = () => {
                        const {
                            el: e,
                            slides: n,
                            progress: i,
                            snapGrid: s,
                            isElement: o
                        } = t, l = E(e, r);
                        t.isElement && l.push(...E(t.hostEl, r)), l.forEach((e => {
                            a(e, i)
                        })), n.forEach(((e, n) => {
                            let o = e.progress;
                            t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (o += Math.ceil(n / 2) - i * (s.length - 1)), o = Math.min(Math.max(o, -1), 1), e.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((e => {
                                a(e, o)
                            }))
                        }))
                    };
                i("beforeInit", (() => {
                    t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
                })), i("init", (() => {
                    t.params.parallax.enabled && s()
                })), i("setTranslate", (() => {
                    t.params.parallax.enabled && s()
                })), i("setTransition", ((e, n) => {
                    t.params.parallax.enabled && function (e) {
                        void 0 === e && (e = t.params.speed);
                        const {
                            el: n,
                            hostEl: i
                        } = t, a = [...n.querySelectorAll(r)];
                        t.isElement && a.push(...i.querySelectorAll(r)), a.forEach((t => {
                            let n = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (n = 0), t.style.transitionDuration = `${n}ms`
                        }))
                    }(n)
                }))
            }]);
            var Ne = e => {
                let {
                    sliderRef: t
                } = e;
                const [n, r] = i.useState(!0);
                i.useEffect((() => {
                    (0, je.A)(document.querySelectorAll(".fixed-slider .caption")), setTimeout((() => {
                        Le(), r(!1)
                    }), 1e3)
                }), []);
                const a = i.useRef(null),
                    s = i.useRef(null),
                    l = i.useRef(null);
                return i.createElement("header", {
                    ref: t,
                    className: "slider slider-prlx fixed-slider text-center"
                }, i.createElement("div", {
                    className: "swiper-container parallax-slider"
                }, n ? null : i.createElement(Te, {
                    speed: 1e3,
                    parallax: !0,
                    navigation: {
                        prevEl: a.current,
                        nextEl: s.current
                    },
                    pagination: {
                        type: "fraction",
                        clickable: !0,
                        el: l.current
                    },
                    onBeforeInit: e => {
                        e.params.navigation.prevEl = a.current, e.params.navigation.nextEl = s.current, e.params.pagination.el = l.current
                    },
                    onSwiper: e => {
                        setTimeout((() => {
                            for (var t = 0; t < e.slides.length; t++) e.slides[t].childNodes[0].setAttribute("data-swiper-parallax", .75 * e.width);
                            e.params.navigation.prevEl = a.current, e.params.navigation.nextEl = s.current, e.params.pagination.el = l.current, e.navigation.destroy(), e.navigation.init(), e.navigation.update(), e.pagination.destroy(), e.pagination.init(), e.pagination.update()
                        }))
                    },
                    className: "swiper-wrapper",
                    slidesPerView: 1
                }, ke.map((e => i.createElement(Oe, {
                    key: e.id,
                    className: "swiper-slide"
                }, i.createElement("div", {
                    className: "bg-img valign",
                    style: {
                        backgroundImage: `url(${e.image})`
                    },
                    "data-overlay-dark": "6"
                }, i.createElement("div", {
                    className: "container"
                }, i.createElement("div", {
                    className: "row justify-content-center"
                }, i.createElement("div", {
                    className: "col-lg-8 col-md-10"
                }, i.createElement("div", {
                    className: "caption center mt-30"
                }, i.createElement("h1", {
                    className: "color-font"
                }, e.title), (null == e ? void 0 : e.content) && i.createElement("p", null, e.content), i.createElement(o.N_, {
                    to: "contact.html",
                    className: "butn bord curve mt-30"
                }, i.createElement("span", null, "Get in touch"))))))))))), i.createElement("div", {
                    className: "setone setwo"
                }, i.createElement("div", {
                    ref: s,
                    className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                }, i.createElement("i", {
                    className: "fas fa-chevron-right"
                })), i.createElement("div", {
                    ref: a,
                    className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                }, i.createElement("i", {
                    className: "fas fa-chevron-left"
                }))), i.createElement("div", {
                    ref: l,
                    className: "swiper-pagination top botm"
                }), i.createElement("div", {
                    className: "social-icon"
                }, i.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://www.linkedin.com/in/ritesh-kumar-swain/"
                }, i.createElement("i", {
                    className: "fab fa-linkedin"
                })), i.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://github.com/Ritesh001-Git"
                }, i.createElement("i", {
                    className: "fab fa-github"
                })), i.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://x.com/Ritesh_1973"
                }, i.createElement("i", {
                    className: "fab fa-x-twitter"
                })), i.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://leetcode.com/u/ritesh2005/"
                }, i.createElement("i", {
                    className: "fas fa-code"
                })), i.createElement("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    href: "https://www.instagram.com/ritesh.swain.35/"
                }, i.createElement("i", {
                    className: "fab fa-instagram"
                })))))
            },
                Ie = n(5540);
            let Ae = function (e) {
                function t() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(r)) || this).target = i.createRef(), t.split = () => {
                        t.target.current && Splitting({
                            target: t.target.current
                        })
                    }, t.componentDidMount = t.split, t.componentDidUpdate = t.split, t
                }
                return (0, Ie.A)(t, e), t.prototype.render = function () {
                    return i.createElement("div", {
                        ref: this.target
                    }, this.props.children)
                }, t
            }(i.Component);
            var ze = Ae,
                De = JSON.parse('[{"id":1,"lightImage":"/images/clients/brands/light/amazonaws.svg","darkImage":"/images/clients/brands/dark/amazonaws.svg","url":"https://aws.amazon.com","title":"Amazon Web Services"},{"id":2,"lightImage":"/images/clients/brands/light/googlecloud.svg","darkImage":"/images/clients/brands/dark/googlecloud.svg","url":"https://google.com","title":"Google Cloud Platform"},{"id":3,"lightImage":"/images/clients/brands/light/android.svg","darkImage":"/images/clients/brands/dark/android.svg","url":"https://android.com","title":"Android"},{"id":4,"lightImage":"/images/clients/brands/light/appstore.svg","darkImage":"/images/clients/brands/dark/appstore.svg","url":"https://apple.com","title":"iOS"},{"id":5,"lightImage":"/images/clients/brands/light/05.png","darkImage":"/images/clients/brands/dark/05.png","url":"www.Vie.com"},{"id":6,"lightImage":"/images/clients/brands/light/06.png","darkImage":"/images/clients/brands/dark/06.png","url":"www.Vie.com"},{"id":7,"lightImage":"/images/clients/brands/light/07.png","darkImage":"/images/clients/brands/dark/07.png","url":"www.Vie.com"},{"id":8,"lightImage":"/images/clients/brands/light/08.png","darkImage":"/images/clients/brands/dark/08.png","url":"www.Vie.com"}]');
            var Re = e => {
                let {
                    theme: t
                } = e;
                return i.createElement("section", {
                    className: "clients sub-bg pt-50 pb-50"
                }, i.createElement("h2", {
                    style: {
                        display: "none"
                    }
                }, "Â "), i.createElement("div", {
                    className: "container"
                }, i.createElement("div", {
                    className: "row"
                }, i.createElement("div", {
                    className: "col-lg-7"
                }, i.createElement("div", {
                    className: "row"
                }, De.slice(0, 4).map((e => i.createElement("div", {
                    key: e.id,
                    className: "col-lg-3 brands"
                }, i.createElement("div", {
                    className: "item no-bord wow fadeIn",
                    "data-wow-delay": ".3s"
                }, i.createElement("div", {
                    className: "img"
                }, "light" === t ? i.createElement("img", {
                    className: "svg",
                    src: e.lightImage,
                    alt: ""
                }) : i.createElement("img", {
                    className: "svg",
                    src: e.darkImage,
                    alt: ""
                }), i.createElement(ze, null, i.createElement("a", {
                    href: e.url,
                    className: "link words chars splitting",
                    "data-splitting": !0
                }, e.title))))))))))))
            },
                Fe = JSON.parse('[{"id":1,"icon":"/images/lpu-logo.png","title":"Bachelor of Technology - CSE","content":"Lovely Professional University, Phagwara, Punjab, India — Since Aug 2023 | CGPA: 8.5"},{"id":2,"icon":"/images/kv-logo.png","title":"Higher Secondary - PCM","content":"Kendriya Vidyalaya Pushp Vihar, New Delhi, India — Apr 2022 - Mar 2023 | Percentage: 86.7%"},{"id":3,"icon":"/images/kv-logo.png","title":"Matriculation","content":"Kendriya Vidyalaya Pushp Vihar, New Delhi, India — Apr 2020 - Mar 2021 | Percentage: 90.8%"}]');

            // Only update title and content — keep HTML image intact
            Fe.forEach((edu, index) => {
                const titleEl = document.getElementById(`edu-title-${index + 1}`);
                const descEl = document.getElementById(`edu-desc-${index + 1}`);

                if (titleEl) titleEl.textContent = edu.title;
                if (descEl) descEl.textContent = edu.content;
            });

            var Be = e => {
                let {
                    serviceMB50: t
                } = e;
                return i.createElement("section", {
                    className: "services box section-padding"
                }, i.createElement("div", {
                    className: "container"
                }, i.createElement("div", {
                    className: "row justify-content-center"
                }, i.createElement("div", {
                    className: "col-lg-8 col-md-10"
                }, i.createElement("div", {
                    className: "sec-head  text-center"
                }, i.createElement("h6", {
                    className: "wow fadeIn",
                    "data-wow-delay": ".5s"
                }, "Education"), i.createElement("h3", {
                    className: "wow color-font"
                }, "Learning today to innovate tomorrow")))), i.createElement("div", {
                    className: "row"
                }, Fe.slice(0, 3).map(((e, n) => i.createElement("div", {
                    className: "col-lg-4 wow fadeInLeft",
                    "data-wow-delay": 0 == n ? ".5s" : 1 == n ? ".7s" : ".9s",
                    key: e.id
                }, i.createElement("div", {
                    className: "item-box no-curve " + (t && n + 1 != Fe.length - 1 ? "mb-50" : "")
                }, i.createElement("img", {
                    src: e.icon,
                    alt: e.title + " logo",
                    className: "edu-logo", // you can style this in CSS
                    style: { width: "100px", height: "100px", objectFit: "contain" }
                }), i.createElement("h6", null, e.title), i.createElement("p", null, e.content))))))), i.createElement("div", {
                    className: "line bottom right"
                }))
            }
            const Ge = {
                zx: "/images/intro/12976804_1121024851262160_4036613030479327751_o.jpg",
                sP: "/images/intro/triet-800x708.jpg",
                lb: "/images/intro/13131216_1137773816253930_7102194663945036401_o.jpg",
                qT: [
                    {
                        id: 1,
                        icon: "fas fa-cloud",          // ☁️ Cloud icon
                        name: { first: "Innovative", second: "Solutions" },
                        wowDelay: ".3s"
                    },
                    {
                        id: 2,
                        icon: "fas fa-upload",         // ⬆️ Upload icon
                        name: { first: "High", second: "Throughput" },
                        wowDelay: ".5s"
                    },
                    {
                        id: 3,
                        icon: "fas fa-download",       // ⬇️ Download icon
                        name: { first: "Ongoing", second: "Upskilling" },
                        wowDelay: ".8s"
                    }
                ]
            };

            var He = () => i.createElement("div", {
                className: "about section-padding"
            }, i.createElement("div", {
                className: "container"
            }, i.createElement("div", {
                className: "row"
            }, i.createElement("div", {
                className: "col-lg-5"
            }, i.createElement("div", {
                className: "img-mons sm-mb30"
            }, i.createElement("div", {
                className: "row"
            }, i.createElement("div", {
                className: "col-md-5 cmd-padding valign"
            }, i.createElement("div", {
                className: "img1 wow imago",
                "data-wow-delay": ".5s"
            }, i.createElement("img", {
                src: Ge.zx,
                alt: ""
            }))), i.createElement("div", {
                className: "col-md-7 cmd-padding"
            }, i.createElement("div", {
                className: "img2 wow imago",
                "data-wow-delay": ".3s"
            }, i.createElement("img", {
                src: Ge.sP,
                alt: ""
            })), i.createElement("div", {
                className: "img3 wow imago",
                "data-wow-delay": ".8s"
            }, i.createElement("img", {
                src: Ge.lb,
                alt: ""
            })), i.createElement("div", {
                className: "container"
            }, i.createElement("div", {
                className: "row"
            }, i.createElement("div", {
                className: "col-md-6"
            }), i.createElement("div", {
                className: "col-md-6"
            }))))))), i.createElement("div", {
                className: "col-lg-6 offset-lg-1 valign"
            }, i.createElement("div", {
                className: "content"
            }, i.createElement("div", {
                className: "sub-title"
            }, i.createElement("h6", null, "About me")), i.createElement(ze, null, i.createElement("h3", {
                className: "words chars splitting main-title wow",
                "data-splitting": !0
            }, "Ritesh Kumar Swain")), i.createElement(ze, null, i.createElement("div", {
                style: {
                    maxWidth: "100%",
                    overflow: "hidden",
                    paddingRight: "15px",
                    boxSizing: "border-box"
                }
            }), i.createElement("p", {
                className: "words chars splitting wow txt",
                "data-splitting": !0,
                style: {
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    textAlign: "left",
                    lineHeight: "1.5"
                }
            }, "Cloud, AI, DevOps, and DSA enthusiast from India. I transform complex problems into elegant, scalable software solutions while continuously upskilling to stay ahead of the latest technology trends.", i.createElement("br", null), "Driven to build efficient, reliable, and scalable solutions that make a real impact.")), i.createElement("div", {
                className: "ftbox mt-30"
            }, i.createElement("ul", null, Ge.qT.map((e => i.createElement("li", {
                key: e.id,
                className: "wow fadeIn " + (2 == e.id ? "space" : ""),
                "data-wow-delay": e.wowDelay
            }, i.createElement("span", {
                className: `icon color-font pe-7s-${e.icon}`
            }), i.createElement("h6", null, e.name.first, " ", i.createElement("br", null), " ", e.name.second), i.createElement("div", {
                className: "dots"
            }, i.createElement("span", null), i.createElement("span", null), i.createElement("span", null)))))))))))),
                We = JSON.parse('{"zx":"/images/01.jpg","sP":"/images/02.jpg","oN":{"g":"NOW","U":"OR NEVER"}}');
            var Ve = () => (i.useEffect((() => {
                setTimeout((() => {
                    var e, t;
                    (e = document.getElementsByClassName("thumparallax")) && new simpleParallax(e, {
                        delay: 1,
                        scale: 1.1
                    }), (t = document.getElementsByClassName("thumparallax-down")) && new simpleParallax(t, {
                        orientation: "down",
                        delay: 1,
                        scale: 1.1
                    })
                }), 1e3)
            }), []), i.createElement("section", {
                className: "agency section-padding position-re"
            }, i.createElement("div", {
                className: "container"
            }, i.createElement("div", {
                className: "row"
            }, i.createElement("div", {
                className: "col-lg-7"
            }, i.createElement("div", {
                className: "imgsec md-mb50"
            }, i.createElement("div", {
                className: "row"
            }, i.createElement("div", {
                className: "col-md-6"
            }, i.createElement("div", {
                className: "item"
            }, i.createElement("div", {
                className: "imgone big-bord wow fadeInDown",
                "data-wow-delay": ".8s"
            }, i.createElement("img", {
                className: "thumparallax-down",
                src: We.zx,
                alt: ""
            })), i.createElement("div", {
                className: "exp"
            }, i.createElement("h2", {
                className: "nmb-font"
            }, We.oN.g), i.createElement("h6", null, We.oN.U)))), i.createElement("div", {
                className: "col-md-6"
            }, i.createElement("div", {
                className: "item"
            }, i.createElement("div", {
                className: "imgtwo big-bord wow fadeInUp",
                "data-wow-delay": ".6s"
            }, i.createElement("img", {
                className: "thumparallax",
                src: We.sP,
                alt: ""
            }))))))), i.createElement("div", {
                className: "col-lg-5 valign"
            }, i.createElement("div", {
                className: "content"
            }, i.createElement(ze, null, i.createElement("h4", {
                className: "wow words chars splitting",
                "data-splitting": !0
            }, "#FunFactAboutMe")), i.createElement(ze, null, i.createElement("p", null, "Code Polyglot – I’ve built projects in C++, Python, Java, Dart,  sand JavaScript (and counting…)."), i.createElement("p", null, " Explorer – My first trip was to Ladakh with my two best friends, where I hiked through mountain trails and visited remote monasteries.", i.createElement("br", null)), i.createElement("p", {
                className: "wow txt words chars splitting",
                "data-splitting": !0
            }, "Lifelong Learner – Currently diving deep into Cloud Compuating and AI.")), i.createElement(o.N_, {
                to: "contact.html",
                className: "butn bord curve mt-40 wow fadeInUp",
                "data-wow-delay": ".8s"
            }, i.createElement("span", null, "Get in touch")), i.createElement("br", null))))), i.createElement("div", {
                className: "line bottom left"
            })));
            le.use([function (e) {
                let t, n, {
                    swiper: i,
                    extendParams: r,
                    on: a,
                    emit: s,
                    params: o
                } = e;
                i.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }, r({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !1,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                });
                let l, c, u, p, f, h, m, g, v = o && o.autoplay ? o.autoplay.delay : 3e3,
                    b = o && o.autoplay ? o.autoplay.delay : 3e3,
                    y = (new Date).getTime();

                function w(e) {
                    i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", w), g || e.detail && e.detail.bySwiperTouchMove || k())
                }
                const E = () => {
                    if (i.destroyed || !i.autoplay.running) return;
                    i.autoplay.paused ? c = !0 : c && (b = l, c = !1);
                    const e = i.autoplay.paused ? l : y + b - (new Date).getTime();
                    i.autoplay.timeLeft = e, s("autoplayTimeLeft", e, e / v), n = requestAnimationFrame((() => {
                        E()
                    }))
                },
                    S = e => {
                        if (i.destroyed || !i.autoplay.running) return;
                        cancelAnimationFrame(n), E();
                        let r = void 0 === e ? i.params.autoplay.delay : e;
                        v = i.params.autoplay.delay, b = i.params.autoplay.delay;
                        const a = (() => {
                            let e;
                            if (e = i.virtual && i.params.virtual.enabled ? i.slides.find((e => e.classList.contains("swiper-slide-active"))) : i.slides[i.activeIndex], !e) return;
                            return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                        })();
                        !Number.isNaN(a) && a > 0 && void 0 === e && (r = a, v = a, b = a), l = r;
                        const o = i.params.speed,
                            c = () => {
                                i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(o, !0, !0), s("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, o, !0, !0), s("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(o, !0, !0), s("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, o, !0, !0), s("autoplay")), i.params.cssMode && (y = (new Date).getTime(), requestAnimationFrame((() => {
                                    S()
                                }))))
                            };
                        return r > 0 ? (clearTimeout(t), t = setTimeout((() => {
                            c()
                        }), r)) : requestAnimationFrame((() => {
                            c()
                        })), r
                    },
                    x = () => {
                        y = (new Date).getTime(), i.autoplay.running = !0, S(), s("autoplayStart")
                    },
                    T = () => {
                        i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(n), s("autoplayStop")
                    },
                    O = (e, n) => {
                        if (i.destroyed || !i.autoplay.running) return;
                        clearTimeout(t), e || (m = !0);
                        const r = () => {
                            s("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", w) : k()
                        };
                        if (i.autoplay.paused = !0, n) return h && (l = i.params.autoplay.delay), h = !1, void r();
                        const a = l || i.params.autoplay.delay;
                        l = a - ((new Date).getTime() - y), i.isEnd && l < 0 && !i.params.loop || (l < 0 && (l = 0), r())
                    },
                    k = () => {
                        i.isEnd && l < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (y = (new Date).getTime(), m ? (m = !1, S(l)) : S(), i.autoplay.paused = !1, s("autoplayResume"))
                    },
                    C = () => {
                        if (i.destroyed || !i.autoplay.running) return;
                        const e = d();
                        "hidden" === e.visibilityState && (m = !0, O(!0)), "visible" === e.visibilityState && k()
                    },
                    P = e => {
                        "mouse" === e.pointerType && (m = !0, g = !0, i.animating || i.autoplay.paused || O(!0))
                    },
                    _ = e => {
                        "mouse" === e.pointerType && (g = !1, i.autoplay.paused && k())
                    };
                a("init", (() => {
                    i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", P), i.el.addEventListener("pointerleave", _)), d().addEventListener("visibilitychange", C), x())
                })), a("destroy", (() => {
                    i.el && "string" != typeof i.el && (i.el.removeEventListener("pointerenter", P), i.el.removeEventListener("pointerleave", _)), d().removeEventListener("visibilitychange", C), i.autoplay.running && T()
                })), a("_freeModeStaticRelease", (() => {
                    (p || m) && k()
                })), a("_freeModeNoMomentumRelease", (() => {
                    i.params.autoplay.disableOnInteraction ? T() : O(!0, !0)
                })), a("beforeTransitionStart", ((e, t, n) => {
                    !i.destroyed && i.autoplay.running && (n || !i.params.autoplay.disableOnInteraction ? O(!0, !0) : T())
                })), a("sliderFirstMove", (() => {
                    !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (u = !0, p = !1, m = !1, f = setTimeout((() => {
                        m = !0, p = !0, O(!0)
                    }), 200)))
                })), a("touchEnd", (() => {
                    if (!i.destroyed && i.autoplay.running && u) {
                        if (clearTimeout(f), clearTimeout(t), i.params.autoplay.disableOnInteraction) return p = !1, void (u = !1);
                        p && i.params.cssMode && k(), p = !1, u = !1
                    }
                })), a("slideChange", (() => {
                    !i.destroyed && i.autoplay.running && (h = !0)
                })), Object.assign(i.autoplay, {
                    start: x,
                    stop: T,
                    pause: O,
                    resume: k
                })
            }, Me, Pe]);
            var $e = () => {
                const e = i.useRef(null),
                    t = i.useRef(null);
                return i.createElement(i.Fragment, null, i.createElement("section", {
                    className: "work-carousel2 metro section-padding"
                }, i.createElement("div", {
                    className: "container"
                }, i.createElement("div", {
                    className: "row"
                }, i.createElement("div", {
                    className: "col-lg-8 col-md-10"
                }, i.createElement("div", {
                    className: "sec-head"
                }, i.createElement("h6", {
                    className: "wow fadeIn",
                    "data-wow-delay": ".5s"
                }, "Projects"), i.createElement("h3", {
                    className: "wow color-font"
                }, "A selection of stuff I've built"))))), i.createElement("div", {
                    className: "container-fluid"
                }, i.createElement("div", {
                    className: "row"
                }, i.createElement("div", {
                    className: "col-lg-12 no-padding"
                }, i.createElement("div", {
                    className: "swiper-container"
                }, i.createElement(Te, {
                    className: "swiper-wrapper",
                    slidesPerView: 2,
                    centeredSlides: !0,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: !1
                    },
                    loop: !0,
                    navigation: {
                        prevEl: e.current,
                        nextEl: t.current
                    },
                    onBeforeInit: n => {
                        n.params.navigation.prevEl = e.current, n.params.navigation.nextEl = t.current
                    },
                    onSwiper: n => {
                        setTimeout((() => {
                            n.params.navigation.prevEl = e.current, n.params.navigation.nextEl = t.current, n.navigation.destroy(), n.navigation.init(), n.navigation.update()
                        }))
                    },
                    speed: 1e3,
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        767: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            centeredSlides: !1
                        },
                        991: {
                            slidesPerView: 2
                        }
                    }
                }, i.createElement(Oe, {
                    className: "swiper-slide"
                }, i.createElement("div", {
                    className: "content"
                }, i.createElement("div", {
                    className: "img"
                }, i.createElement("span", {
                    className: "imgio"
                }, i.createElement("span", {
                    className: "wow cimgio",
                    "data-delay": "500"
                }), i.createElement("img", {
                    src: "/images/portfolio/portfolio.png",
                    alt: "De Muze"
                }))), i.createElement("div", {
                    className: "cont"
                }, i.createElement("h6", null, "Web Application"), i.createElement("h4", null, "Portfolio")))), i.createElement(Oe, {
                    className: "swiper-slide"
                }, i.createElement("div", {
                    className: "content"
                }, i.createElement("div", {
                    className: "img"
                }, i.createElement("span", {
                    className: "imgio"
                }, i.createElement("span", {
                    className: "wow cimgio",
                    "data-delay": "500"
                }), i.createElement("img", {
                    src: "/images/portfolio/image.png",
                    alt: "Bibliomundi"
                }))), i.createElement("div", {
                    className: "cont"
                }, i.createElement("h6", null, "Serverless Web App/Cloud Architecture"), i.createElement("h4", null, "Serverless Image Resizer")))), i.createElement(Oe, {
                    className: "swiper-slide"
                }, i.createElement("div", {
                    className: "content"
                }, i.createElement("div", {
                    className: "img"
                }, i.createElement("span", {
                    className: "imgio"
                }, i.createElement("span", {
                    className: "wow cimgio",
                    "data-delay": "500"
                }), i.createElement("img", {
                    src: "/images/portfolio/sleepbot.png",
                    alt: "MyParcel"
                }))), i.createElement("div", {
                    className: "cont"
                }, i.createElement("h6", null, "AI/Ml"), i.createElement("h4", null, "SleepBot")))), i.createElement(Oe, {
                    className: "swiper-slide"
                }, i.createElement("div", {
                    className: "content"
                }, i.createElement("div", {
                    className: "img"
                }, i.createElement("span", {
                    className: "imgio"
                }, i.createElement("span", {
                    className: "wow cimgio",
                    "data-delay": "500"
                }), i.createElement("img", {
                    src: "/images/portfolio/movie.png",
                    alt: "Plus Messege Portal"
                }))), i.createElement("div", {
                    className: "cont"
                }, i.createElement("h6", null, "Web Application"), i.createElement("h4", null, "Movie Booking")))), i.createElement(Oe, {
                    className: "swiper-slide"
                }, i.createElement("div", {
                    className: "content"
                }, i.createElement("div", {
                    className: "img"
                }, i.createElement("span", {
                    className: "imgio"
                }, i.createElement("span", {
                    className: "wow cimgio",
                    "data-delay": "500"
                }), i.createElement("img", {
                    src: "/images/portfolio/task.png",
                    alt: "AU Portal"
                }))), i.createElement("div", {
                    className: "cont"
                }, i.createElement("h6", null, "Azure Cloud-Native"), i.createElement("h4", null, "TaskHub"))))), i.createElement("div", {
                    ref: t,
                    className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                    style: {
                        background: "transparent",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.5)",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease"
                    }
                }, i.createElement("i", {
                    className: "fas fa-chevron-right",
                    style: {
                        color: "#ff4081", // vibrant pink, change if you want
                        fontSize: "20px"
                    }
                })),
                    i.createElement("div", {
                        ref: e,
                        className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                        style: {
                            background: "transparent",
                            borderRadius: "50%",
                            border: "2px solid rgba(255,255,255,0.5)",
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease"
                        }
                    }, i.createElement("i", {
                        className: "fas fa-chevron-left",
                        style: {
                            color: "#ff4081", // vibrant pink, change if you want
                            fontSize: "20px"
                        }
                    }))
                ))))))
            },
                qe = n(8345);
            var Ue = e => {
                let {
                    theme: t
                } = e;
                const n = (e => {
                    const [t, n] = i.useState();
                    return i.useEffect((() => {
                        (0, qe.fB)({
                            slugs: e
                        }).then(n)
                    }), []), t ? Object.values(t.simpleIcons).map((e => (0, qe.ci)({
                        icon: e,
                        size: 100,
                        aProps: {
                            onClick: e => e.preventDefault()
                        }
                    }))) : i.createElement("a", null, "Loading")
                })(["amazonwebservices", "googlecloud", "terraform", "git", "docker", "springboot", "java", "python", "javascript", "nestjs", "go", "android", "appstore", "react", "nginx", "html5", "css3", "php", "mysql", "laravel", "jira", "slack", "discord", "postgresql", "mongodb", "elasticsearch", "dotnet", "typescript", "gatsby", "alpinelinux", "apachemaven", "gradle", "hibernate", "quarkus", "apachekafka", "vite", "make", "keycloak", "jaeger", "selenium"]),
                    r = {
                        id: "stable-id-awesome-hehe",
                        containerProps: {
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        },
                        canvasProps: {
                            style: {
                                maxWidth: "60%"
                            }
                        },
                        options: {
                            reverse: !0,
                            depth: 1,
                            wheelZoom: !0,
                            imageScale: 1,
                            activeCursor: "default",
                            tooltip: "native",
                            initial: [.1, -.1],
                            clickToFront: 500,
                            tooltipDelay: 1,
                            outlineColour: "#00cc22",
                            outlineThickness: 1,
                            minSpeed: .07,
                            maxSpeed: .08,
                            frezzle: .01,
                            freezeActive: !1,
                            noSelect: !0,
                            frontSelect: !1,
                            wrapText: !1,
                            zoomMin: .5,
                            zoomMax: 1.5,
                            zoomStep: .01,
                            zoomAnimate: !0,
                            zoomAnimateStep: .05,
                            zoomFriction: .9
                        }
                    };
                return i.createElement("section", {
                    className: "clients section-padding skills"
                }, i.createElement("div", {
                    className: "container"
                }, i.createElement("div", {
                    className: "row"
                }, i.createElement("div", {
                    className: "col-lg-4 valign md-mb50"
                }, i.createElement("div", {
                    className: "sec-head mb-0"
                }, i.createElement("h6", {
                    className: "wow fadeIn",
                    "data-wow-delay": ".5s"
                }, "Click"), i.createElement("h3", {
                    className: "wow mb-20 color-font"
                }, "Deploy"), i.createElement("p", null, "And hope for the best."))), i.createElement("div", {
                    className: "col-lg-8"
                }, i.createElement(qe.Es, r, n)))))
            },
                Xe = n(4589),
                Ye = n(382);
            var Ke = () => {
                const [e, t] = i.useState(!1);
                return i.createElement("section", {
                    className: "block-sec"
                }, i.createElement("div", {
                    className: "background bg-img pt-100 pb-0 parallaxie",
                    style: {
                        backgroundImage: "url(/images/bg-vid.jpg)"
                    },
                    "data-overlay-dark": "5"
                }, i.createElement("div", {
                    className: "container"
                }, i.createElement("div", {
                    className: "row"
                }, i.createElement("div", {
                    className: "col-lg-6"
                }, i.createElement("div", {
                    className: "vid-area"
                }, i.createElement("span", {
                    className: "text"
                }, "Watch Video"), i.createElement("div", {
                    className: "vid-icon"
                }, "undefined" != typeof window && i.createElement(Ye.A, {
                    channel: "vimeo",
                    isOpen: e,
                    videoId: "",
                    onClose: () => t(!1)
                }), i.createElement("a", {
                    className: "vid",
                    onClick: e => {
                        e.preventDefault(), t(!0)
                    }
                }, i.createElement("div", {
                    className: "vid-butn"
                }, i.createElement("span", {
                    className: "icon"
                }, i.createElement("i", {
                    className: "fas fa-play"
                }))))))), i.createElement("div", {
                    className: "col-lg-5 offset-lg-1"
                }, i.createElement("div", {
                    className: "testim-box"
                }, i.createElement("div", {
                    className: "head-box"
                }, i.createElement("h6", {
                    className: "wow fadeIn",
                    "data-wow-delay": ".5s"
                }, "Skills"), i.createElement("h4", {
                    className: "wow fadeInLeft",
                    "data-wow-delay": ".5s"
                }, "My Professional Arsenal")), i.createElement(Xe.A, Object.assign({}, {
                    dots: !0,
                    infinite: !0,
                    arrows: !1,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }, {
                    className: "slic-item wow fadeInUp",
                    "data-wow-delay": ".5s"
                }), i.createElement("div", {
                    className: "item"
                }, i.createElement("div", null,
                    i.createElement("strong", { className: "bold-heading" }, "Programming Languages & Frameworks"),
                    i.createElement("p", { className: "bold-heading" }), "Languages: C, C++, Java, Python, Dart, JavaScript",
                    i.createElement("br", { className: "bold-heading" }), "Frameworks: Spring Boot, Flutter, HTML, CSS"), i.createElement("div", {
                        className: "info"
                    }, i.createElement("div", {
                        className: "img"
                    }, i.createElement("div", {
                        className: "img-box"
                    }, i.createElement("img", {
                        src: "",
                        alt: ""
                    }))), i.createElement("div", {
                        className: "cont"
                    }, i.createElement("div", {
                        className: "author"
                    }, i.createElement("h6", {
                        className: "author-name "
                    }, ""), i.createElement("span", {
                        className: "author-details"
                    }, ""))))), i.createElement("div", {
                        className: "item"
                    }, i.createElement("strong", { className: "bold-heading" }, "Tools, Cloud & Database"),
                        i.createElement("p", null),
                        "Cloud / Tools: AWS, Git, GitHub, VS Code, Azure, Android Studio, X-Code",
                        i.createElement("br", null),
                        "Database: MySQL", i.createElement("div", {
                            className: "info"
                        }, i.createElement("div", {
                            className: "img"
                        }, i.createElement("div", {
                            className: "img-box"
                        }, i.createElement("img", {
                            src: "",
                            alt: ""
                        }))), i.createElement("div", {
                            className: "cont"
                        }, i.createElement("div", {
                            className: "author"
                        }, i.createElement("h6", {
                            className: "author-name "
                        }, ""), i.createElement("span", {
                            className: "author-details"
                        }, ""))))), i.createElement("div", {
                            className: "item"
                        }, i.createElement("strong", { className: "bold-heading" }, "Soft Skills & Strengths"),
                            i.createElement("p", null),
                            "Soft Skills: Problem-Solving, Communication, Project Management, Adaptability",
                            i.createElement("br", { style: { lineHeight: "1.8" } }),
                            "Strengths: Fast Learner, Collaborative Team Player, Attention to Detail, Creativity in Problem-Solving", i.createElement("div", {
                                className: "info"
                            }, i.createElement("div", {
                                className: "img"
                            }, i.createElement("div", {
                                className: "img-box"
                            }, i.createElement("img", {
                                src: "",
                                alt: ""
                            }))), i.createElement("div", {
                                className: "cont"
                            }, i.createElement("div", {
                                className: "author"
                            }, i.createElement("h6", {
                                className: "author-name "
                            }, ""), i.createElement("span", {
                                className: "author-details"
                            }, ""))))))))))))
            };
            var Ze = e => {
                let {
                    img: t
                } = e;
                return i.createElement("section", {
                    className: "call-action section-padding sub-bg bg-img",
                    style: {
                        backgroundImage: `url(${t || "/images/patrn.svg"})`
                    }
                }, i.createElement("div", {
                    className: "container"
                }, i.createElement("div", {
                    className: "row"
                }, i.createElement("div", {
                    className: "col-md-8 col-lg-9"
                }, i.createElement("div", {
                    className: "content sm-mb30"
                }, i.createElement(ze, null, i.createElement("h6", {
                    className: "wow words chars splitting",
                    "data-splitting": !0
                }, "Would You"), i.createElement("h2", {
                    className: "wow words chars splitting",
                    "data-splitting": !0
                }, "Like My", i.createElement("br", null), "", i.createElement("b", {
                    className: "back-color"
                }, "CV ?"), ".")))), i.createElement("div", {
                    className: "col-md-4 col-lg-3 valign"
                }, i.createElement("a", {
                    href: "https://drive.google.com/file/d/15pLuvLCq3M-Mi6zDZS26vbCgPApMRKhm/view?usp=sharing",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "butn bord curve wow fadeInUp",
                    "data-wow-delay": ".5s"
                }, i.createElement("span", null, "Download CV"))
                ))))
            };
            const Je = () => i.createElement(i.Fragment, null, i.createElement("title", null, "Ritesh Kumar Swain (Ritesh Swain) - Software Engineer"));
            var Qe = () => {
                const e = i.useRef(null),
                    t = i.useRef(null),
                    n = i.useRef(null),
                    o = i.useRef(null);
                return i.useEffect((() => {
                    setTimeout((() => {
                        if (e.current) var n = e.current.offsetHeight;
                        t.current && (t.current.style.marginTop = n + "px")
                    }), 1e3);
                    var i = n.current;
                    window.scrollY > 300 ? i.classList.add("nav-scroll") : i.classList.remove("nav-scroll"), window.addEventListener("scroll", (() => {
                        window.scrollY > 300 ? i.classList.add("nav-scroll") : i.classList.remove("nav-scroll")
                    }))
                }), [e, t, n]), i.createElement(r.A, null, i.createElement(a.A, {
                    nr: n,
                    lr: o
                }), i.createElement(Ne, {
                    sliderRef: e
                }), i.createElement("div", {
                    ref: t,
                    className: "main-content"
                }, i.createElement(He, null), i.createElement(Be, {
                    serviceMB50: !0
                }), i.createElement(Ve, null), i.createElement($e, null), i.createElement(Ue, null), i.createElement(Ke, null), i.createElement(Re, {
                    theme: "dark",
                    length: 4
                }), i.createElement(Ze, null), i.createElement(s.A, {
                    hideBGCOLOR: !0
                })))
            }
        },
        5700: function (e, t, n) {
            "use strict";
            var i = n(511),
                r = n(8242);
            i("toPrimitive"), r()
        },
        5745: function (e, t, n) {
            "use strict";
            var i = n(7629);
            e.exports = function (e, t) {
                return i[e] || (i[e] = t || {})
            }
        },
        5917: function (e, t, n) {
            "use strict";
            var i = n(3724),
                r = n(9039),
                a = n(4055);
            e.exports = !i && !r((function () {
                return 7 !== Object.defineProperty(a("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            }))
        },
        5942: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Track = void 0;
            var i = s(n(6540)),
                r = s(n(6942)),
                a = n(9445);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function o(e) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o(e)
            }

            function l() {
                return l = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, b(i.key), i)
                }
            }

            function u(e, t) {
                return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                }, u(e, t)
            }

            function d(e) {
                var t = f();
                return function () {
                    var n, i = h(e);
                    if (t) {
                        var r = h(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === o(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return p(e)
                    }(this, n)
                }
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function f() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { })))
                } catch (e) { }
                return (f = function () {
                    return !!e
                })()
            }

            function h(e) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, h(e)
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function (t) {
                        v(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function v(e, t, n) {
                return (t = b(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function b(e) {
                var t = function (e, t) {
                    if ("object" != o(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(e, t || "default");
                        if ("object" != o(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == o(t) ? t : String(t)
            }
            var y = function (e) {
                var t, n, i, r, a;
                return i = (a = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || a >= e.slideCount, e.centerMode ? (r = Math.floor(e.slidesToShow / 2), n = (a - e.currentSlide) % e.slideCount == 0, a > e.currentSlide - r - 1 && a <= e.currentSlide + r && (t = !0)) : t = e.currentSlide <= a && a < e.currentSlide + e.slidesToShow, {
                    "slick-slide": !0,
                    "slick-active": t,
                    "slick-center": n,
                    "slick-cloned": i,
                    "slick-current": a === (e.targetSlide < 0 ? e.targetSlide + e.slideCount : e.targetSlide >= e.slideCount ? e.targetSlide - e.slideCount : e.targetSlide)
                }
            },
                w = function (e, t) {
                    return e.key || t
                },
                E = function (e) {
                    var t, n = [],
                        s = [],
                        o = [],
                        l = i.default.Children.count(e.children),
                        c = (0, a.lazyStartIndex)(e),
                        u = (0, a.lazyEndIndex)(e);
                    return i.default.Children.forEach(e.children, (function (d, p) {
                        var f, h = {
                            message: "children",
                            index: p,
                            slidesToScroll: e.slidesToScroll,
                            currentSlide: e.currentSlide
                        };
                        f = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(p) >= 0 ? d : i.default.createElement("div", null);
                        var m = function (e) {
                            var t = {};
                            return void 0 !== e.variableWidth && !1 !== e.variableWidth || (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = e.currentSlide === e.index ? 1 : 0, t.zIndex = e.currentSlide === e.index ? 999 : 998, e.useCSS && (t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase)), t
                        }(g(g({}, e), {}, {
                            index: p
                        })),
                            v = f.props.className || "",
                            b = y(g(g({}, e), {}, {
                                index: p
                            }));
                        if (n.push(i.default.cloneElement(f, {
                            key: "original" + w(f, p),
                            "data-index": p,
                            className: (0, r.default)(b, v),
                            tabIndex: "-1",
                            "aria-hidden": !b["slick-active"],
                            style: g(g({
                                outline: "none"
                            }, f.props.style || {}), m),
                            onClick: function (t) {
                                f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                            }
                        })), e.infinite && !1 === e.fade) {
                            var E = l - p;
                            E <= (0, a.getPreClones)(e) && ((t = -E) >= c && (f = d), b = y(g(g({}, e), {}, {
                                index: t
                            })), s.push(i.default.cloneElement(f, {
                                key: "precloned" + w(f, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, r.default)(b, v),
                                "aria-hidden": !b["slick-active"],
                                style: g(g({}, f.props.style || {}), m),
                                onClick: function (t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            }))), (t = l + p) < u && (f = d), b = y(g(g({}, e), {}, {
                                index: t
                            })), o.push(i.default.cloneElement(f, {
                                key: "postcloned" + w(f, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, r.default)(b, v),
                                "aria-hidden": !b["slick-active"],
                                style: g(g({}, f.props.style || {}), m),
                                onClick: function (t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            }))
                        }
                    })), e.rtl ? s.concat(n, o).reverse() : s.concat(n, o)
                };
            t.Track = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && u(e, t)
                }(s, e);
                var t, n, r, a = d(s);

                function s() {
                    var e;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s);
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return v(p(e = a.call.apply(a, [this].concat(n))), "node", null), v(p(e), "handleRef", (function (t) {
                        e.node = t
                    })), e
                }
                return t = s, (n = [{
                    key: "render",
                    value: function () {
                        var e = E(this.props),
                            t = this.props,
                            n = {
                                onMouseEnter: t.onMouseEnter,
                                onMouseOver: t.onMouseOver,
                                onMouseLeave: t.onMouseLeave
                            };
                        return i.default.createElement("div", l({
                            ref: this.handleRef,
                            className: "slick-track",
                            style: this.props.trackStyle
                        }, n), e)
                    }
                }]) && c(t.prototype, n), r && c(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(i.default.PureComponent)
        },
        5966: function (e, t, n) {
            "use strict";
            var i = n(9306),
                r = n(4117);
            e.exports = function (e, t) {
                var n = e[t];
                return r(n) ? void 0 : i(n)
            }
        },
        6080: function (e, t, n) {
            "use strict";
            var i = n(7476),
                r = n(9306),
                a = n(616),
                s = i(i.bind);
            e.exports = function (e, t) {
                return r(e), void 0 === t ? e : a ? s(e, t) : function () {
                    return e.apply(t, arguments)
                }
            }
        },
        6099: function (e, t, n) {
            "use strict";
            var i = n(2140),
                r = n(6840),
                a = n(3179);
            i || r(Object.prototype, "toString", a, {
                unsafe: !0
            })
        },
        6119: function (e, t, n) {
            "use strict";
            var i = n(5745),
                r = n(3392),
                a = i("keys");
            e.exports = function (e) {
                return a[e] || (a[e] = r(e))
            }
        },
        6198: function (e, t, n) {
            "use strict";
            var i = n(8014);
            e.exports = function (e) {
                return i(e.length)
            }
        },
        6269: function (e) {
            "use strict";
            e.exports = {}
        },
        6469: function (e, t, n) {
            "use strict";
            var i = n(8227),
                r = n(2360),
                a = n(4913).f,
                s = i("unscopables"),
                o = Array.prototype;
            void 0 === o[s] && a(o, s, {
                configurable: !0,
                value: r(null)
            }), e.exports = function (e) {
                o[s][e] = !0
            }
        },
        6518: function (e, t, n) {
            "use strict";
            var i = n(4576),
                r = n(7347).f,
                a = n(6699),
                s = n(6840),
                o = n(9433),
                l = n(7740),
                c = n(2796);
            e.exports = function (e, t) {
                var n, u, d, p, f, h = e.target,
                    m = e.global,
                    g = e.stat;
                if (n = m ? i : g ? i[h] || o(h, {}) : i[h] && i[h].prototype)
                    for (u in t) {
                        if (p = t[u], d = e.dontCallGetSet ? (f = r(n, u)) && f.value : n[u], !c(m ? u : h + (g ? "." : "#") + u, e.forced) && void 0 !== d) {
                            if (typeof p == typeof d) continue;
                            l(p, d)
                        } (e.sham || d && d.sham) && a(p, "sham", !0), s(n, u, p, e)
                    }
            }
        },
        6699: function (e, t, n) {
            "use strict";
            var i = n(3724),
                r = n(4913),
                a = n(6980);
            e.exports = i ? function (e, t, n) {
                return r.f(e, t, a(1, n))
            } : function (e, t, n) {
                return e[t] = n, e
            }
        },
        6706: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(9306);
            e.exports = function (e, t, n) {
                try {
                    return i(r(Object.getOwnPropertyDescriptor(e, t)[n]))
                } catch (a) { }
            }
        },
        6761: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(4576),
                a = n(9565),
                s = n(9504),
                o = n(8776),
                l = n(3724),
                c = n(4495),
                u = n(9039),
                d = n(9297),
                p = n(1625),
                f = n(8551),
                h = n(5397),
                m = n(6969),
                g = n(655),
                v = n(6980),
                b = n(2360),
                y = n(1072),
                w = n(8480),
                E = n(298),
                S = n(3717),
                x = n(7347),
                T = n(4913),
                O = n(6801),
                k = n(8773),
                C = n(6840),
                P = n(2106),
                _ = n(5745),
                M = n(6119),
                L = n(421),
                j = n(3392),
                N = n(8227),
                I = n(1951),
                A = n(511),
                z = n(8242),
                D = n(687),
                R = n(1181),
                F = n(9213).forEach,
                B = M("hidden"),
                G = "Symbol",
                H = "prototype",
                W = R.set,
                V = R.getterFor(G),
                $ = Object[H],
                q = r.Symbol,
                U = q && q[H],
                X = r.RangeError,
                Y = r.TypeError,
                K = r.QObject,
                Z = x.f,
                J = T.f,
                Q = E.f,
                ee = k.f,
                te = s([].push),
                ne = _("symbols"),
                ie = _("op-symbols"),
                re = _("wks"),
                ae = !K || !K[H] || !K[H].findChild,
                se = function (e, t, n) {
                    var i = Z($, t);
                    i && delete $[t], J(e, t, n), i && e !== $ && J($, t, i)
                },
                oe = l && u((function () {
                    return 7 !== b(J({}, "a", {
                        get: function () {
                            return J(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                })) ? se : J,
                le = function (e, t) {
                    var n = ne[e] = b(U);
                    return W(n, {
                        type: G,
                        tag: e,
                        description: t
                    }), l || (n.description = t), n
                },
                ce = function (e, t, n) {
                    e === $ && ce(ie, t, n), f(e);
                    var i = m(t);
                    return f(n), d(ne, i) ? (n.enumerable ? (d(e, B) && e[B][i] && (e[B][i] = !1), n = b(n, {
                        enumerable: v(0, !1)
                    })) : (d(e, B) || J(e, B, v(1, b(null))), e[B][i] = !0), oe(e, i, n)) : J(e, i, n)
                },
                ue = function (e, t) {
                    f(e);
                    var n = h(t),
                        i = y(n).concat(he(n));
                    return F(i, (function (t) {
                        l && !a(de, n, t) || ce(e, t, n[t])
                    })), e
                },
                de = function (e) {
                    var t = m(e),
                        n = a(ee, this, t);
                    return !(this === $ && d(ne, t) && !d(ie, t)) && (!(n || !d(this, t) || !d(ne, t) || d(this, B) && this[B][t]) || n)
                },
                pe = function (e, t) {
                    var n = h(e),
                        i = m(t);
                    if (n !== $ || !d(ne, i) || d(ie, i)) {
                        var r = Z(n, i);
                        return !r || !d(ne, i) || d(n, B) && n[B][i] || (r.enumerable = !0), r
                    }
                },
                fe = function (e) {
                    var t = Q(h(e)),
                        n = [];
                    return F(t, (function (e) {
                        d(ne, e) || d(L, e) || te(n, e)
                    })), n
                },
                he = function (e) {
                    var t = e === $,
                        n = Q(t ? ie : h(e)),
                        i = [];
                    return F(n, (function (e) {
                        !d(ne, e) || t && !d($, e) || te(i, ne[e])
                    })), i
                };
            c || (q = function () {
                if (p(U, this)) throw new Y("Symbol is not a constructor");
                var e = arguments.length && void 0 !== arguments[0] ? g(arguments[0]) : void 0,
                    t = j(e),
                    n = function (e) {
                        var i = void 0 === this ? r : this;
                        i === $ && a(n, ie, e), d(i, B) && d(i[B], t) && (i[B][t] = !1);
                        var s = v(1, e);
                        try {
                            oe(i, t, s)
                        } catch (o) {
                            if (!(o instanceof X)) throw o;
                            se(i, t, s)
                        }
                    };
                return l && ae && oe($, t, {
                    configurable: !0,
                    set: n
                }), le(t, e)
            }, C(U = q[H], "toString", (function () {
                return V(this).tag
            })), C(q, "withoutSetter", (function (e) {
                return le(j(e), e)
            })), k.f = de, T.f = ce, O.f = ue, x.f = pe, w.f = E.f = fe, S.f = he, I.f = function (e) {
                return le(N(e), e)
            }, l && (P(U, "description", {
                configurable: !0,
                get: function () {
                    return V(this).description
                }
            }), o || C($, "propertyIsEnumerable", de, {
                unsafe: !0
            }))), i({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: !c,
                sham: !c
            }, {
                Symbol: q
            }), F(y(re), (function (e) {
                A(e)
            })), i({
                target: G,
                stat: !0,
                forced: !c
            }, {
                useSetter: function () {
                    ae = !0
                },
                useSimple: function () {
                    ae = !1
                }
            }), i({
                target: "Object",
                stat: !0,
                forced: !c,
                sham: !l
            }, {
                create: function (e, t) {
                    return void 0 === t ? b(e) : ue(b(e), t)
                },
                defineProperty: ce,
                defineProperties: ue,
                getOwnPropertyDescriptor: pe
            }), i({
                target: "Object",
                stat: !0,
                forced: !c
            }, {
                getOwnPropertyNames: fe
            }), z(), D(q, G), L[B] = !0
        },
        6801: function (e, t, n) {
            "use strict";
            var i = n(3724),
                r = n(8686),
                a = n(4913),
                s = n(8551),
                o = n(5397),
                l = n(1072);
            t.f = i && !r ? Object.defineProperties : function (e, t) {
                s(e);
                for (var n, i = o(t), r = l(t), c = r.length, u = 0; c > u;) a.f(e, n = r[u++], i[n]);
                return e
            }
        },
        6823: function (e) {
            "use strict";
            var t = String;
            e.exports = function (e) {
                try {
                    return t(e)
                } catch (n) {
                    return "Object"
                }
            }
        },
        6837: function (e) {
            "use strict";
            var t = TypeError;
            e.exports = function (e) {
                if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
                return e
            }
        },
        6840: function (e, t, n) {
            "use strict";
            var i = n(4901),
                r = n(4913),
                a = n(283),
                s = n(9433);
            e.exports = function (e, t, n, o) {
                o || (o = {});
                var l = o.enumerable,
                    c = void 0 !== o.name ? o.name : t;
                if (i(n) && a(n, c, o), o.global) l ? e[t] = n : s(t, n);
                else {
                    try {
                        o.unsafe ? e[t] && (l = !0) : delete e[t]
                    } catch (u) { }
                    l ? e[t] = n : r.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !o.nonConfigurable,
                        writable: !o.nonWritable
                    })
                }
                return e
            }
        },
        6933: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(4376),
                a = n(4901),
                s = n(2195),
                o = n(655),
                l = i([].push);
            e.exports = function (e) {
                if (a(e)) return e;
                if (r(e)) {
                    for (var t = e.length, n = [], i = 0; i < t; i++) {
                        var c = e[i];
                        "string" == typeof c ? l(n, c) : "number" != typeof c && "Number" !== s(c) && "String" !== s(c) || l(n, o(c))
                    }
                    var u = n.length,
                        d = !0;
                    return function (e, t) {
                        if (d) return d = !1, t;
                        if (r(this)) return t;
                        for (var i = 0; i < u; i++)
                            if (n[i] === e) return t
                    }
                }
            }
        },
        6942: function (e, t) {
            var n;
            ! function () {
                "use strict";
                var i = {}.hasOwnProperty;

                function r() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        n && (e = s(e, a(n)))
                    }
                    return e
                }

                function a(e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return r.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var n in e) i.call(e, n) && e[n] && (t = s(t, n));
                    return t
                }

                function s(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (r.default = r, e.exports = r) : void 0 === (n = function () {
                    return r
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        6955: function (e, t, n) {
            "use strict";
            var i = n(2140),
                r = n(4901),
                a = n(2195),
                s = n(8227)("toStringTag"),
                o = Object,
                l = "Arguments" === a(function () {
                    return arguments
                }());
            e.exports = i ? a : function (e) {
                var t, n, i;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                    try {
                        return e[t]
                    } catch (n) { }
                }(t = o(e), s)) ? n : l ? a(t) : "Object" === (i = a(t)) && r(t.callee) ? "Arguments" : i
            }
        },
        6969: function (e, t, n) {
            "use strict";
            var i = n(2777),
                r = n(757);
            e.exports = function (e) {
                var t = i(e, "string");
                return r(t) ? t : t + ""
            }
        },
        6980: function (e) {
            "use strict";
            e.exports = function (e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        7040: function (e, t, n) {
            "use strict";
            var i = n(4495);
            e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        7055: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(9039),
                a = n(2195),
                s = Object,
                o = i("".split);
            e.exports = r((function () {
                return !s("z").propertyIsEnumerable(0)
            })) ? function (e) {
                return "String" === a(e) ? o(e, "") : s(e)
            } : s
        },
        7347: function (e, t, n) {
            "use strict";
            var i = n(3724),
                r = n(9565),
                a = n(8773),
                s = n(6980),
                o = n(5397),
                l = n(6969),
                c = n(9297),
                u = n(5917),
                d = Object.getOwnPropertyDescriptor;
            t.f = i ? d : function (e, t) {
                if (e = o(e), t = l(t), u) try {
                    return d(e, t)
                } catch (n) { }
                if (c(e, t)) return s(!r(a.f, e, t), e[t])
            }
        },
        7400: function (e) {
            "use strict";
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        },
        7433: function (e, t, n) {
            "use strict";
            var i = n(4376),
                r = n(3517),
                a = n(34),
                s = n(8227)("species"),
                o = Array;
            e.exports = function (e) {
                var t;
                return i(e) && (t = e.constructor, (r(t) && (t === o || i(t.prototype)) || a(t) && null === (t = t[s])) && (t = void 0)), void 0 === t ? o : t
            }
        },
        7452: function (e) {
            "use strict";
            e.exports = "\t\n\v\f\r Â áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"
        },
        7476: function (e, t, n) {
            "use strict";
            var i = n(2195),
                r = n(9504);
            e.exports = function (e) {
                if ("Function" === i(e)) return r(e)
            }
        },
        7629: function (e, t, n) {
            "use strict";
            var i = n(8776),
                r = n(4576),
                a = n(9433),
                s = "__core-js_shared__",
                o = e.exports = r[s] || a(s, {});
            (o.versions || (o.versions = [])).push({
                version: "3.40.0",
                mode: i ? "pure" : "global",
                copyright: "Â© 2014-2025 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        7657: function (e, t, n) {
            "use strict";
            var i, r, a, s = n(9039),
                o = n(4901),
                l = n(34),
                c = n(2360),
                u = n(2787),
                d = n(6840),
                p = n(8227),
                f = n(8776),
                h = p("iterator"),
                m = !1;
            [].keys && ("next" in (a = [].keys()) ? (r = u(u(a))) !== Object.prototype && (i = r) : m = !0), !l(i) || s((function () {
                var e = {};
                return i[h].call(e) !== e
            })) ? i = {} : f && (i = c(i)), o(i[h]) || d(i, h, (function () {
                return this
            })), e.exports = {
                IteratorPrototype: i,
                BUGGY_SAFARI_ITERATORS: m
            }
        },
        7680: function (e, t, n) {
            "use strict";
            var i = n(9504);
            e.exports = i([].slice)
        },
        7740: function (e, t, n) {
            "use strict";
            var i = n(9297),
                r = n(5031),
                a = n(7347),
                s = n(4913);
            e.exports = function (e, t, n) {
                for (var o = r(t), l = s.f, c = a.f, u = 0; u < o.length; u++) {
                    var d = o[u];
                    i(e, d) || n && i(n, d) || l(e, d, c(t, d))
                }
            }
        },
        7750: function (e, t, n) {
            "use strict";
            var i = n(4117),
                r = TypeError;
            e.exports = function (e) {
                if (i(e)) throw new r("Can't call method on " + e);
                return e
            }
        },
        7751: function (e, t, n) {
            "use strict";
            var i = n(4576),
                r = n(4901);
            e.exports = function (e, t) {
                return arguments.length < 2 ? (n = i[e], r(n) ? n : void 0) : i[e] && i[e][t];
                var n
            }
        },
        7764: function (e, t, n) {
            "use strict";
            var i = n(8183).charAt,
                r = n(655),
                a = n(1181),
                s = n(1088),
                o = n(2529),
                l = "String Iterator",
                c = a.set,
                u = a.getterFor(l);
            s(String, "String", (function (e) {
                c(this, {
                    type: l,
                    string: r(e),
                    index: 0
                })
            }), (function () {
                var e, t = u(this),
                    n = t.string,
                    r = t.index;
                return r >= n.length ? o(void 0, !0) : (e = i(n, r), t.index += e.length, o(e, !1))
            }))
        },
        7812: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(9297),
                a = n(757),
                s = n(6823),
                o = n(5745),
                l = n(1296),
                c = o("symbol-to-string-registry");
            i({
                target: "Symbol",
                stat: !0,
                forced: !l
            }, {
                keyFor: function (e) {
                    if (!a(e)) throw new TypeError(s(e) + " is not a symbol");
                    if (r(c, e)) return c[e]
                }
            })
        },
        8014: function (e, t, n) {
            "use strict";
            var i = n(1291),
                r = Math.min;
            e.exports = function (e) {
                var t = i(e);
                return t > 0 ? r(t, 9007199254740991) : 0
            }
        },
        8028: function (e) {
            e.exports = function (e) {
                return e.replace(/[A-Z]/g, (function (e) {
                    return "-" + e.toLowerCase()
                })).toLowerCase()
            }
        },
        8120: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(n(6540)),
                r = n(4999),
                a = l(n(1441)),
                s = l(n(1327)),
                o = n(9445);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, c(e)
            }

            function u() {
                return u = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, u.apply(this, arguments)
            }

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function (t) {
                        y(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, w(i.key), i)
                }
            }

            function h(e, t) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }

            function m(e) {
                var t = v();
                return function () {
                    var n, i = b(e);
                    if (t) {
                        var r = b(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === c(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return g(e)
                    }(this, n)
                }
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { })))
                } catch (e) { }
                return (v = function () {
                    return !!e
                })()
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function y(e, t, n) {
                return (t = w(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function w(e) {
                var t = function (e, t) {
                    if ("object" != c(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(e, t || "default");
                        if ("object" != c(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == c(t) ? t : String(t)
            }
            var E = (0, o.canUseDOM)() && n(2386);
            t.default = function (e) {
                ! function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && h(e, t)
                }(d, e);
                var t, n, l, c = m(d);

                function d(e) {
                    var t;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), y(g(t = c.call(this, e)), "innerSliderRefHandler", (function (e) {
                        return t.innerSlider = e
                    })), y(g(t), "slickPrev", (function () {
                        return t.innerSlider.slickPrev()
                    })), y(g(t), "slickNext", (function () {
                        return t.innerSlider.slickNext()
                    })), y(g(t), "slickGoTo", (function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return t.innerSlider.slickGoTo(e, n)
                    })), y(g(t), "slickPause", (function () {
                        return t.innerSlider.pause("paused")
                    })), y(g(t), "slickPlay", (function () {
                        return t.innerSlider.autoPlay("play")
                    })), t.state = {
                        breakpoint: null
                    }, t._responsiveMediaHandlers = [], t
                }
                return t = d, (n = [{
                    key: "media",
                    value: function (e, t) {
                        E.register(e, t), this._responsiveMediaHandlers.push({
                            query: e,
                            handler: t
                        })
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        var e = this;
                        if (this.props.responsive) {
                            var t = this.props.responsive.map((function (e) {
                                return e.breakpoint
                            }));
                            t.sort((function (e, t) {
                                return e - t
                            })), t.forEach((function (n, i) {
                                var r;
                                r = 0 === i ? (0, a.default)({
                                    minWidth: 0,
                                    maxWidth: n
                                }) : (0, a.default)({
                                    minWidth: t[i - 1] + 1,
                                    maxWidth: n
                                }), (0, o.canUseDOM)() && e.media(r, (function () {
                                    e.setState({
                                        breakpoint: n
                                    })
                                }))
                            }));
                            var n = (0, a.default)({
                                minWidth: t.slice(-1)[0]
                            });
                            (0, o.canUseDOM)() && this.media(n, (function () {
                                e.setState({
                                    breakpoint: null
                                })
                            }))
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this._responsiveMediaHandlers.forEach((function (e) {
                            E.unregister(e.query, e.handler)
                        }))
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e, t, n = this;
                        (e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter((function (e) {
                            return e.breakpoint === n.state.breakpoint
                        })))[0].settings ? "unslick" : p(p(p({}, s.default), this.props), t[0].settings) : p(p({}, s.default), this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                        var a = i.default.Children.toArray(this.props.children);
                        a = a.filter((function (e) {
                            return "string" == typeof e ? !!e.trim() : !!e
                        })), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                        for (var l = [], c = null, d = 0; d < a.length; d += e.rows * e.slidesPerRow) {
                            for (var f = [], h = d; h < d + e.rows * e.slidesPerRow; h += e.slidesPerRow) {
                                for (var m = [], g = h; g < h + e.slidesPerRow && (e.variableWidth && a[g].props.style && (c = a[g].props.style.width), !(g >= a.length)); g += 1) m.push(i.default.cloneElement(a[g], {
                                    key: 100 * d + 10 * h + g,
                                    tabIndex: -1,
                                    style: {
                                        width: "".concat(100 / e.slidesPerRow, "%"),
                                        display: "inline-block"
                                    }
                                }));
                                f.push(i.default.createElement("div", {
                                    key: 10 * d + h
                                }, m))
                            }
                            e.variableWidth ? l.push(i.default.createElement("div", {
                                key: d,
                                style: {
                                    width: c
                                }
                            }, f)) : l.push(i.default.createElement("div", {
                                key: d
                            }, f))
                        }
                        if ("unslick" === e) {
                            var v = "regular slider " + (this.props.className || "");
                            return i.default.createElement("div", {
                                className: v
                            }, a)
                        }
                        return l.length <= e.slidesToShow && !e.infinite && (e.unslick = !0), i.default.createElement(r.InnerSlider, u({
                            style: this.props.style,
                            ref: this.innerSliderRefHandler
                        }, (0, o.filterSettings)(e)), l)
                    }
                }]) && f(t.prototype, n), l && f(t, l), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }(i.default.Component)
        },
        8183: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(1291),
                a = n(655),
                s = n(7750),
                o = i("".charAt),
                l = i("".charCodeAt),
                c = i("".slice),
                u = function (e) {
                    return function (t, n) {
                        var i, u, d = a(s(t)),
                            p = r(n),
                            f = d.length;
                        return p < 0 || p >= f ? e ? "" : void 0 : (i = l(d, p)) < 55296 || i > 56319 || p + 1 === f || (u = l(d, p + 1)) < 56320 || u > 57343 ? e ? o(d, p) : i : e ? c(d, p, p + 2) : u - 56320 + (i - 55296 << 10) + 65536
                    }
                };
            e.exports = {
                codeAt: u(!1),
                charAt: u(!0)
            }
        },
        8227: function (e, t, n) {
            "use strict";
            var i = n(4576),
                r = n(5745),
                a = n(9297),
                s = n(3392),
                o = n(4495),
                l = n(7040),
                c = i.Symbol,
                u = r("wks"),
                d = l ? c.for || c : c && c.withoutSetter || s;
            e.exports = function (e) {
                return a(u, e) || (u[e] = o && a(c, e) ? c[e] : d("Symbol." + e)), u[e]
            }
        },
        8242: function (e, t, n) {
            "use strict";
            var i = n(9565),
                r = n(7751),
                a = n(8227),
                s = n(6840);
            e.exports = function () {
                var e = r("Symbol"),
                    t = e && e.prototype,
                    n = t && t.valueOf,
                    o = a("toPrimitive");
                t && !t[o] && s(t, o, (function (e) {
                    return i(n, this)
                }), {
                    arity: 1
                })
            }
        },
        8345: function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Es: function () {
                    return Cloud
                },
                ci: function () {
                    return renderSimpleIcon
                },
                fB: function () {
                    return fetchSimpleIcons
                }
            });
            var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540),
                _csstools_convert_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9212);

            function asyncGeneratorStep(e, t, n, i, r, a, s) {
                try {
                    var o = e[a](s),
                        l = o.value
                } catch (e) {
                    return void n(e)
                }
                o.done ? t(l) : Promise.resolve(l).then(i, r)
            }

            function _asyncToGenerator(e) {
                return function () {
                    var t = this,
                        n = arguments;
                    return new Promise((function (i, r) {
                        var a = e.apply(t, n);

                        function s(e) {
                            asyncGeneratorStep(a, i, r, s, o, "next", e)
                        }

                        function o(e) {
                            asyncGeneratorStep(a, i, r, s, o, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function _extends() {
                return _extends = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) ({}).hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, _extends.apply(null, arguments)
            }

            function _regeneratorRuntime() {
                _regeneratorRuntime = function () {
                    return t
                };
                var e, t = {},
                    n = Object.prototype,
                    i = n.hasOwnProperty,
                    r = Object.defineProperty || function (e, t, n) {
                        e[t] = n.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    s = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    l = a.toStringTag || "@@toStringTag";

                function c(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    c({}, "")
                } catch (e) {
                    c = function (e, t, n) {
                        return e[t] = n
                    }
                }

                function u(e, t, n, i) {
                    var a = t && t.prototype instanceof v ? t : v,
                        s = Object.create(a.prototype),
                        o = new M(i || []);
                    return r(s, "_invoke", {
                        value: k(e, n, o)
                    }), s
                }

                function d(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = u;
                var p = "suspendedStart",
                    f = "suspendedYield",
                    h = "executing",
                    m = "completed",
                    g = {};

                function v() { }

                function b() { }

                function y() { }
                var w = {};
                c(w, s, (function () {
                    return this
                }));
                var E = Object.getPrototypeOf,
                    S = E && E(E(L([])));
                S && S !== n && i.call(S, s) && (w = S);
                var x = y.prototype = v.prototype = Object.create(w);

                function T(e) {
                    ["next", "throw", "return"].forEach((function (t) {
                        c(e, t, (function (e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function O(e, t) {
                    function n(r, a, s, o) {
                        var l = d(e[r], e, a);
                        if ("throw" !== l.type) {
                            var c = l.arg,
                                u = c.value;
                            return u && "object" == typeof u && i.call(u, "__await") ? t.resolve(u.__await).then((function (e) {
                                n("next", e, s, o)
                            }), (function (e) {
                                n("throw", e, s, o)
                            })) : t.resolve(u).then((function (e) {
                                c.value = e, s(c)
                            }), (function (e) {
                                return n("throw", e, s, o)
                            }))
                        }
                        o(l.arg)
                    }
                    var a;
                    r(this, "_invoke", {
                        value: function (e, i) {
                            function r() {
                                return new t((function (t, r) {
                                    n(e, i, t, r)
                                }))
                            }
                            return a = a ? a.then(r, r) : r()
                        }
                    })
                }

                function k(t, n, i) {
                    var r = p;
                    return function (a, s) {
                        if (r === h) throw Error("Generator is already running");
                        if (r === m) {
                            if ("throw" === a) throw s;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (i.method = a, i.arg = s; ;) {
                            var o = i.delegate;
                            if (o) {
                                var l = C(o, i);
                                if (l) {
                                    if (l === g) continue;
                                    return l
                                }
                            }
                            if ("next" === i.method) i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (r === p) throw r = m, i.arg;
                                i.dispatchException(i.arg)
                            } else "return" === i.method && i.abrupt("return", i.arg);
                            r = h;
                            var c = d(t, n, i);
                            if ("normal" === c.type) {
                                if (r = i.done ? m : f, c.arg === g) continue;
                                return {
                                    value: c.arg,
                                    done: i.done
                                }
                            }
                            "throw" === c.type && (r = m, i.method = "throw", i.arg = c.arg)
                        }
                    }
                }

                function C(t, n) {
                    var i = n.method,
                        r = t.iterator[i];
                    if (r === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", n.arg = e, C(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), g;
                    var a = d(r, t.iterator, n.arg);
                    if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, g;
                    var s = a.arg;
                    return s ? s.done ? (n[t.resultName] = s.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, g) : s : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                }

                function P(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function _(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function M(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(P, this), this.reset(!0)
                }

                function L(t) {
                    if (t || "" === t) {
                        var n = t[s];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                a = function n() {
                                    for (; ++r < t.length;)
                                        if (i.call(t, r)) return n.value = t[r], n.done = !1, n;
                                    return n.value = e, n.done = !0, n
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(typeof t + " is not iterable")
                }
                return b.prototype = y, r(x, "constructor", {
                    value: y,
                    configurable: !0
                }), r(y, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = c(y, l, "GeneratorFunction"), t.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                }, t.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, c(e, l, "GeneratorFunction")), e.prototype = Object.create(x), e
                }, t.awrap = function (e) {
                    return {
                        __await: e
                    }
                }, T(O.prototype), c(O.prototype, o, (function () {
                    return this
                })), t.AsyncIterator = O, t.async = function (e, n, i, r, a) {
                    void 0 === a && (a = Promise);
                    var s = new O(u(e, n, i, r), a);
                    return t.isGeneratorFunction(n) ? s : s.next().then((function (e) {
                        return e.done ? e.value : s.next()
                    }))
                }, T(x), c(x, l, "Generator"), c(x, s, (function () {
                    return this
                })), c(x, "toString", (function () {
                    return "[object Generator]"
                })), t.keys = function (e) {
                    var t = Object(e),
                        n = [];
                    for (var i in t) n.push(i);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var i = n.pop();
                                if (i in t) return e.value = i, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, t.values = L, M.prototype = {
                    constructor: M,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(_), !t)
                            for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var n = this;

                        function r(i, r) {
                            return o.type = "throw", o.arg = t, n.next = i, r && (n.method = "next", n.arg = e), !!r
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var s = this.tryEntries[a],
                                o = s.completion;
                            if ("root" === s.tryLoc) return r("end");
                            if (s.tryLoc <= this.prev) {
                                var l = i.call(s, "catchLoc"),
                                    c = i.call(s, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                } else if (l) {
                                    if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                } else {
                                    if (!c) throw Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var a = r;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, g) : this.complete(s)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), _(n), g
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    _(n)
                                }
                                return r
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function (t, n, i) {
                        return this.delegate = {
                            iterator: L(t),
                            resultName: n,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = e), g
                    }
                }, t
            }
            var tagCanvasString = "(function(){\"use strict\"; var r,C,p=Math.abs,o=Math.sin,l=Math.cos,g=Math.max,h=Math.min,af=Math.ceil,E=Math.sqrt,w=Math.pow,I={},D={},R={0:\"0,\",1:\"17,\",2:\"34,\",3:\"51,\",4:\"68,\",5:\"85,\",6:\"102,\",7:\"119,\",8:\"136,\",9:\"153,\",a:\"170,\",A:\"170,\",b:\"187,\",B:\"187,\",c:\"204,\",C:\"204,\",d:\"221,\",D:\"221,\",e:\"238,\",E:\"238,\",f:\"255,\",F:\"255,\"},f,d,b,T,z,F,M,c=document,v,e,P,j={};for(r=0;r<256;++r)C=r.toString(16),r<16&&(C='0'+C),D[C]=D[C.toUpperCase()]=r.toString()+',';function n(a){return typeof a!='undefined'}function B(a){return typeof a=='object'&&a!=null}function G(a,c,b){return isNaN(a)?b:h(b,g(c,a))}function x(){return!1}function q(){return(new Date).valueOf()}function ak(c,d){var b=[],e=c.length,a;for(a=0;a<e;++a)b.push(c[a]);return b.sort(d),b}function ai(a){for(var b=a.length-1,d,c;b;)c=~~(Math.random()*b),d=a[b],a[b]=a[c],a[c]=d,--b}function ag(){var a=window.AudioContext||window.webkitAudioContext;if(e=new a,!e){e='off';return}return e}function $(u,a,t,s,r,q,p){var j=s,h=r,i=t*.01,n=80*i,m=100*i,o=40*i,l=30*i,c=l/2,b=j+n,f=b-o,k=h+m,d=k-l,g=h+l,e=h+m/2;if(a.setTransform(1,0,0,1,0,0),a.setLineDash([]),a.globalAlpha=1,a.strokeStyle=p,a.lineWidth=q,a.lineJoin='round',a.beginPath(),a.moveTo(f,g),a.lineTo(f,d),a.moveTo(b,k),a.lineTo(f,d),a.lineTo(j,d),a.lineTo(j,g),a.lineTo(f,g),a.lineTo(b,h),u){a.lineTo(b,g),a.moveTo(b,d),a.lineTo(b,k),a.moveTo(b-c,e-c),a.lineTo(b+c,e+c),a.moveTo(b+c,e-c),a.lineTo(b-c,e+c),a.stroke();return}a.closePath(),a.stroke()}function s(a,b,c){this.x=a,this.y=b,this.z=c}z=s.prototype,z.length=function(){return E(this.x*this.x+this.y*this.y+this.z*this.z)},z.dot=function(a){return this.x*a.x+this.y*a.y+this.z*a.z},z.cross=function(a){var b=this.y*a.z-this.z*a.y,c=this.z*a.x-this.x*a.z,d=this.x*a.y-this.y*a.x;return new s(b,c,d)},z.angle=function(b){var c=this.dot(b),a;return c==0?Math.PI/2:(a=c/(this.length()*b.length()),a>=1)?0:a<=-1?Math.PI:Math.acos(a)},z.unit=function(){var a=this.length();return new s(this.x/a,this.y/a,this.z/a)};function ay(b,a){a=a*Math.PI/180,b=b*Math.PI/180;var c=o(b)*l(a),d=-o(a),e=-l(b)*l(a);return new s(c,d,e)}function m(a){this[1]={1:a[0],2:a[1],3:a[2]},this[2]={1:a[3],2:a[4],3:a[5]},this[3]={1:a[6],2:a[7],3:a[8]}}T=m.prototype,m.Identity=function(){return new m([1,0,0,0,1,0,0,0,1])},m.Rotation=function(e,a){var c=o(e),d=l(e),b=1-d;return new m([d+w(a.x,2)*b,a.x*a.y*b-a.z*c,a.x*a.z*b+a.y*c,a.y*a.x*b+a.z*c,d+w(a.y,2)*b,a.y*a.z*b-a.x*c,a.z*a.x*b-a.y*c,a.z*a.y*b+a.x*c,d+w(a.z,2)*b])},T.mul=function(c){var d=[],a,b,e=c.xform?1:0;for(a=1;a<=3;++a)for(b=1;b<=3;++b)e?d.push(this[a][1]*c[1][b]+this[a][2]*c[2][b]+this[a][3]*c[3][b]):d.push(this[a][b]*c);return new m(d)},T.xform=function(b){var a={},c=b.x,d=b.y,e=b.z;return a.x=c*this[1][1]+d*this[2][1]+e*this[3][1],a.y=c*this[1][2]+d*this[2][2]+e*this[3][2],a.z=c*this[1][3]+d*this[2][3]+e*this[3][3],a};function aB(g,j,k,m,f){var a,b,c,d,e=[],h=2/g,i;i=Math.PI*(3-E(5)+(parseFloat(f)?parseFloat(f):0));for(a=0;a<g;++a)b=a*h-1+h/2,c=E(1-b*b),d=a*i,e.push([l(d)*c*j,b*k,o(d)*c*m]);return e}function U(n,p,m,k,h,g){var b,f=[],i=2/n,j,a,d,c,e;j=Math.PI*(3-E(5)+(parseFloat(g)?parseFloat(g):0));for(a=0;a<n;++a)d=a*i-1+i/2,b=a*j,c=l(b),e=o(b),f.push(p?[d*m,c*k,e*h]:[c*m,d*k,e*h]);return f}function aa(k,e,f,h,i,j){var b,g=[],m=Math.PI*2/e,a,c,d;for(a=0;a<e;++a)b=a*m,c=l(b),d=o(b),g.push(k?[j*f,c*h,d*i]:[c*f,j*h,d*i]);return g}function ax(a,b,c,d,e){return U(a,0,b,c,d,e)}function aH(a,b,c,d,e){return U(a,1,b,c,d,e)}function aG(b,c,d,e,a){return a=isNaN(a)?0:a*1,aa(0,b,c,d,e,a)}function aF(b,c,d,e,a){return a=isNaN(a)?0:a*1,aa(1,b,c,d,e,a)}function av(b){var a=new Image;a.onload=function(){var c=a.width/2,d=a.height/2;b.centreFunc=function(b,g,h,e,f){b.setTransform(1,0,0,1,0,0),b.globalAlpha=1,b.drawImage(a,e-c,f-d)}},a.src=b.centreImage}function aE(a,c){var b=a,d,e,f=(c*1).toPrecision(3)+')';return a[0]==='#'?(I[a]||(a.length===4?I[a]='rgba('+R[a[1]]+R[a[2]]+R[a[3]]:I[a]='rgba('+D[a.substr(1,2)]+D[a.substr(3,2)]+D[a.substr(5,2)]),b=I[a]+f):a.substr(0,4)==='rgb('||a.substr(0,4)==='hsl('?b=a.replace('(','a(').replace(')',','+f):(a.substr(0,5)==='rgba('||a.substr(0,5)==='hsla(')&&(d=a.lastIndexOf(',')+1,e=a.indexOf(')'),c*=parseFloat(a.substring(d,e)),b=a.substr(0,d)+c.toPrecision(3)+')'),b}function k(b,d){if(window.G_vmlCanvasManager)return null;var a=c.createElement('canvas');return a.width=b,a.height=d,a}function aD(){var b=k(3,3),a,c;return!!b&&(a=b.getContext('2d'),a.strokeStyle='#000',a.shadowColor='#fff',a.shadowBlur=3,a.globalAlpha=0,a.strokeRect(2,2,2,2),a.globalAlpha=1,c=a.getImageData(2,2,1,1),b=null,c.data[0]>0)}function aC(a,c,f,d){var e=a.createLinearGradient(0,0,c,0),b;for(b in d)e.addColorStop(1-b,d[b]);a.fillStyle=e,a.fillRect(0,f,c,1)}function L(a,m,j){var l=1024,d=1,e=a.weightGradient,i,f,b,c;if(a.gCanvas)f=a.gCanvas.getContext('2d'),d=a.gCanvas.height;else{if(B(e[0])?d=e.length:e=[e],a.gCanvas=i=k(l,d),!i)return null;f=i.getContext('2d');for(b=0;b<d;++b)aC(f,l,b,e[b])}return j=g(h(j||0,d-1),0),c=f.getImageData(~~((l-1)*m),j,1,1).data,'rgba('+c[0]+','+c[1]+','+c[2]+','+c[3]/255+')'}function Y(b,i,q,k,o,n,h,d,a,g,f,l){var m=o+(d||0)+(a.length&&a[0]<0?p(a[0]):0),j=n+(d||0)+(a.length&&a[1]<0?p(a[1]):0),c,e;b.font=i,b.textBaseline='top',b.fillStyle=q,h&&(b.shadowColor=h),d&&(b.shadowBlur=d),a.length&&(b.shadowOffsetX=a[0],b.shadowOffsetY=a[1]);for(c=0;c<k.length;++c)e=0,f&&('right'==l?e=g-f[c]:'centre'==l&&(e=(g-f[c])/2)),b.fillText(k[c],m+e,j),j+=parseInt(i)}function y(d,a,b,f,e,c,g){c?(d.beginPath(),d.moveTo(a,b+e-c),d.arcTo(a,b,a+c,b,c),d.arcTo(a+f,b,a+f,b+c,c),d.arcTo(a+f,b+e,a+f-c,b+e,c),d.arcTo(a,b+e,a,b+e-c,c),d.closePath(),d[g?'stroke':'fill']()):d[g?'strokeRect':'fillRect'](a,b,f,e)}function O(a,b,c,d,e,f,g,h,i){this.strings=a,this.font=b,this.width=c,this.height=d,this.maxWidth=e,this.stringWidths=f,this.align=g,this.valign=h,this.scale=i}M=O.prototype,M.SetImage=function(a,b,c,d,e,f,g,h){this.image=a,this.iwidth=b*this.scale,this.iheight=c*this.scale,this.ipos=d,this.ipad=e*this.scale,this.iscale=h,this.ialign=f,this.ivalign=g},M.Align=function(c,d,a){var b=0;return a=='right'||a=='bottom'?b=d-c:a!='left'&&a!='top'&&(b=(d-c)/2),b},M.Create=function(G,D,F,b,A,m,q,j,E){var o,e,f,a,l,s,i,u,v,r,w,n,c,d,x,B=p(q[0]),C=p(q[1]),t,z;return j=g(j,B+m,C+m),l=2*(j+b),i=2*(j+b),e=this.width+l,f=this.height+i,v=r=j+b,this.image&&(w=n=j+b,c=this.iwidth,d=this.iheight,this.ipos=='top'||this.ipos=='bottom'?(c<this.width?w+=this.Align(c,this.width,this.ialign):v+=this.Align(this.width,c,this.align),this.ipos=='top'?r+=d+this.ipad:n+=this.height+this.ipad,e=g(e,c+l),f+=d+this.ipad):(d<this.height?n+=this.Align(d,this.height,this.ivalign):r+=this.Align(this.height,d,this.valign),this.ipos=='right'?w+=this.width+this.ipad:v+=c+this.ipad,e+=c+this.ipad,f=g(f,d+i))),o=k(e,f),!o?null:(l=i=b/2,s=e-b,u=f-b,x=h(E,s/2,u/2),a=o.getContext('2d'),D&&(a.fillStyle=D,y(a,l,i,s,u,x)),b&&(a.strokeStyle=F,a.lineWidth=b,y(a,l,i,s,u,x,!0)),(m||B||C)&&(t=k(e,f),t&&(z=a,a=t.getContext('2d'))),Y(a,this.font,G,this.strings,v,r,0,0,[],this.maxWidth,this.stringWidths,this.align),this.image&&a.drawImage(this.image,w,n,c,d),z&&(a=z,A&&(a.shadowColor=A),m&&(a.shadowBlur=m),a.shadowOffsetX=q[0],a.shadowOffsetY=q[1],a.drawImage(t,0,0)),o)};function H(a,c,d){var b=k(c,d),e;return b?(e=b.getContext('2d'),e.drawImage(a,(c-a.width)/2,(d-a.height)/2),b):null}function S(e,b,c){var a=k(b,c),d;return a?(d=a.getContext('2d'),d.drawImage(e,0,0,b,c),a):null}function W(n,u,t,e,s,c,v,d,r,w){var g=u+(2*d+c)*e,f=t+(2*d+c)*e,l=k(g,f),b,i,q,m,j,o,a,p;return l?(c*=e,r*=e,i=q=c/2,m=g-c,j=f-c,d=d*e+i,b=l.getContext('2d'),p=h(r,m/2,j/2),s&&(b.fillStyle=s,y(b,i,q,m,j,p)),c&&(b.strokeStyle=v,b.lineWidth=c,y(b,i,q,m,j,p,!0)),w?(o=k(g,f),a=o.getContext('2d'),a.drawImage(n,d,d,u,t),a.globalCompositeOperation='source-in',a.fillStyle=v,a.fillRect(0,0,g,f),a.globalCompositeOperation='destination-over',a.drawImage(l,0,0),a.globalCompositeOperation='source-over',b.drawImage(o,0,0)):b.drawImage(n,d,d,n.width,n.height),{image:l,width:g/e,height:f/e}):null}function at(l,f,c,d,j){var e,a,b=parseFloat(f),i=g(c,d);return e=k(c,d),!e?null:(f.indexOf('%')>0?b=i*b/100:b=b*j,a=e.getContext('2d'),a.globalCompositeOperation='source-over',a.fillStyle='#fff',b>=i/2?(b=h(c,d)/2,a.beginPath(),a.moveTo(c/2,d/2),a.arc(c/2,d/2,b,0,2*Math.PI,!1),a.fill(),a.closePath()):(b=h(c/2,d/2,b),y(a,0,0,c,d,b,!0),a.fill()),a.globalCompositeOperation='source-in',a.drawImage(l,0,0,c,d),e)}function ao(q,m,i,b,h,a,c){var g=p(c[0]),f=p(c[1]),j=m+(g>a?g+a:a*2)*b,l=i+(f>a?f+a:a*2)*b,n=b*((a||0)+(c[0]<0?g:0)),o=b*((a||0)+(c[1]<0?f:0)),e,d;return e=k(j,l),!e?null:(d=e.getContext('2d'),h&&(d.shadowColor=h),a&&(d.shadowBlur=a*b),c&&(d.shadowOffsetX=c[0]*b,d.shadowOffsetY=c[1]*b),d.drawImage(q,n,o,m,i),{image:e,width:j/b,height:l/b})}function ae(m,o,l){var c=parseInt(m.toString().length*l),h=parseInt(l*2*m.length),j=k(c,h),g,i,e,f,b,d,n,a;if(!j)return null;g=j.getContext('2d'),g.fillStyle='#000',g.fillRect(0,0,c,h),Y(g,l+'px '+o,'#fff',m,0,0,0,0,[],'centre'),i=g.getImageData(0,0,c,h),e=i.width,f=i.height,a={min:{x:e,y:f},max:{x:-1,y:-1}};for(d=0;d<f;++d)for(b=0;b<e;++b)n=(d*e+b)*4,i.data[n+1]>0&&(b<a.min.x&&(a.min.x=b),b>a.max.x&&(a.max.x=b),d<a.min.y&&(a.min.y=d),d>a.max.y&&(a.max.y=d));return e!=c&&(a.min.x*=c/e,a.max.x*=c/e),f!=h&&(a.min.y*=c/f,a.max.y*=c/f),j=null,a}function Q(a){return\"'\"+a.replace(/('|\")/g,'').replace(/s*,s*/g,\"', '\")+\"'\"}function t(b,d,a){a=a||c,a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent('on'+b,d)}function am(b,d,a){a=a||c,a.removeEventListener?a.removeEventListener(b,d):a.detachEvent('on'+b,d)}function A(g,e,j,a,b){var l=b.imageScale,h,c,k,m,f,d;if(!e.complete)return t('load',function(){A(g,e,j,a,b)},e);if(!g.complete)return t('load',function(){A(g,e,j,a,b)},g);if(j&&!j.complete)return t('load',function(){A(g,e,j,a,b)},j);e.width=e.width,e.height=e.height,l&&(g.width=e.width*l,g.height=e.height*l),a.iw=g.width,a.ih=g.height,b.txtOpt&&(c=g,h=b.zoomMax*b.txtScale,f=a.iw*h,d=a.ih*h,f<e.naturalWidth||d<e.naturalHeight?(c=S(g,f,d),c&&(a.fimage=c)):(f=a.iw,d=a.ih,h=1),parseFloat(b.imageRadius)&&(a.image=a.fimage=g=at(a.image,b.imageRadius,f,d,h)),a.HasText()||(b.shadow&&(c=ao(a.image,f,d,h,b.shadow,b.shadowBlur,b.shadowOffset),c&&(a.fimage=c.image,a.w=c.width,a.h=c.height)),(b.bgColour||b.bgOutlineThickness)&&(k=b.bgColour=='tag'?i(a.a,'background-color'):b.bgColour,m=b.bgOutline=='tag'?i(a.a,'color'):b.bgOutline||b.textColour,f=a.fimage.width,d=a.fimage.height,b.outlineMethod=='colour'&&(c=W(a.fimage,f,d,h,k,b.bgOutlineThickness,a.outline.colour,b.padding,b.bgRadius,1),c&&(a.oimage=c.image)),c=W(a.fimage,f,d,h,k,b.bgOutlineThickness,m,b.padding,b.bgRadius),c&&(a.fimage=c.image,a.w=c.width,a.h=c.height)),b.outlineMethod=='size'&&(b.outlineIncrease>0?(a.iw+=2*b.outlineIncrease,a.ih+=2*b.outlineIncrease,f=h*a.iw,d=h*a.ih,c=S(a.fimage,f,d),a.oimage=c,a.fimage=H(a.fimage,a.oimage.width,a.oimage.height)):(f=h*(a.iw+2*b.outlineIncrease),d=h*(a.ih+2*b.outlineIncrease),c=S(a.fimage,f,d),a.oimage=H(c,a.fimage.width,a.fimage.height))))),a.alt=j,a.Init()}function i(a,d){var b=c.defaultView,e=d.replace(/-([a-z])/g,function(a){return a.charAt(1).toUpperCase()});return b&&b.getComputedStyle&&b.getComputedStyle(a,null).getPropertyValue(d)||a.currentStyle&&a.currentStyle[e]}function aj(c,d,e){var b=1,a;return d?b=1*(c.getAttribute(d)||e):(a=i(c,'font-size'))&&(b=a.indexOf('px')>-1&&a.replace('px','')*1||a.indexOf('pt')>-1&&a.replace('pt','')*1.25||a*3.3),b}function u(a){return a.target&&n(a.target.id)?a.target.id:a.srcElement.parentNode.id}function K(a,c){var b,d,e=parseInt(i(c,'width'))/c.width,f=parseInt(i(c,'height'))/c.height;return n(a.offsetX)?b={x:a.offsetX,y:a.offsetY}:(d=X(c.id),n(a.changedTouches)&&(a=a.changedTouches[0]),a.pageX&&(b={x:a.pageX-d.x,y:a.pageY-d.y})),b&&e&&f&&(b.x/=e,b.y/=f),b}function an(c){var d=c.target||c.fromElement.parentNode,b=a.tc[d.id];b&&(b.mx=b.my=-1,b.UnFreeze(),b.EndDrag())}function ad(e){var g,c=a,b,d,f=u(e);for(g in c.tc)b=c.tc[g],b.tttimer&&(clearTimeout(b.tttimer),b.tttimer=null);f&&c.tc[f]&&(b=c.tc[f],(d=K(e,b.canvas))&&(b.mx=d.x,b.my=d.y,b.Drag(e,d)),b.drawn=0)}function ap(b){var e=a,f=c.addEventListener?0:1,d=u(b);d&&b.button==f&&e.tc[d]&&e.tc[d].BeginDrag(b)}function aq(b){var f=a,g=c.addEventListener?0:1,e=u(b),d;e&&b.button==g&&f.tc[e]&&(d=f.tc[e],ad(b),!d.EndDrag()&&!d.touchState&&d.Clicked(b))}function ar(c){var e=u(c),b=e&&a.tc[e],d;b&&c.changedTouches&&(c.touches.length==1&&b.touchState==0?(b.touchState=1,b.BeginDrag(c),(d=K(c,b.canvas))&&(b.mx=d.x,b.my=d.y,b.drawn=0)):c.targetTouches.length==2&&b.pinchZoom?(b.touchState=3,b.EndDrag(),b.BeginPinch(c)):(b.EndDrag(),b.EndPinch(),b.touchState=0))}function ac(c){var d=u(c),b=d&&a.tc[d];if(b&&c.changedTouches){switch(b.touchState){case 1:b.Draw(),b.Clicked();break;break;case 2:b.EndDrag();break;case 3:b.EndPinch()}b.touchState=0}}function au(c){var f,e=a,b,d,g=u(c);for(f in e.tc)b=e.tc[f],b.tttimer&&(clearTimeout(b.tttimer),b.tttimer=null);if(b=g&&e.tc[g],b&&c.changedTouches&&b.touchState){switch(b.touchState){case 1:case 2:(d=K(c,b.canvas))&&(b.mx=d.x,b.my=d.y,b.Drag(c,d)&&(b.touchState=2));break;case 3:b.Pinch(c)}b.drawn=0}}function ab(b){var d=a,c=u(b);c&&d.tc[c]&&(b.cancelBubble=!0,b.returnValue=!1,b.preventDefault&&b.preventDefault(),d.tc[c].Wheel((b.wheelDelta||b.detail)>0))}function aw(d){var c,b=a;clearTimeout(b.scrollTimer);for(c in b.tc)b.tc[c].Pause();b.scrollTimer=setTimeout(function(){var b,c=a;for(b in c.tc)c.tc[b].Resume()},b.scrollPause)}function al(){Z(q())}function Z(b){var c=a.tc,d;a.NextFrame(a.interval),b=b||q();for(d in c)c[d].Draw(b)}function az(){requestAnimationFrame(Z)}function aA(a){setTimeout(al,a)}function X(f){var g=c.getElementById(f),b=g.getBoundingClientRect(),a=c.documentElement,d=c.body,e=window,h=e.pageXOffset||a.scrollLeft,i=e.pageYOffset||a.scrollTop,j=a.clientLeft||d.clientLeft,k=a.clientTop||d.clientTop;return{x:b.left+h-j,y:b.top+i-k}}function aI(a,b,d,e){var c=a.radius*a.z1/(a.z1+a.z2+b.z);return{x:b.x*c*d,y:b.y*c*e,z:b.z,w:(a.z1-b.z)/a.z2}}function V(a){this.e=a,this.br=0,this.line=[],this.text=[],this.original=a.innerText||a.textContent}F=V.prototype,F.Empty=function(){for(var a=0;a<this.text.length;++a)if(this.text[a].length)return!1;return!0},F.Lines=function(c){var e=c?1:0,b,d,a;c=c||this.e,b=c.childNodes,d=b.length;for(a=0;a<d;++a)b[a].nodeName=='BR'?(this.text.push(this.line.join(' ')),this.br=1):b[a].nodeType==3?this.br?(this.line=[b[a].nodeValue],this.br=0):this.line.push(b[a].nodeValue):this.Lines(b[a]);return e||this.br||this.text.push(this.line.join(' ')),this.text},F.SplitWidth=function(h,e,f,g){var c,b,a,d=[];e.font=g+'px '+f;for(c=0;c<this.text.length;++c){a=this.text[c].split(/s+/),this.line=[a[0]];for(b=1;b<a.length;++b)e.measureText(this.line.join(' ')+' '+a[b]).width>h?(d.push(this.line.join(' ')),this.line=[a[b]]):this.line.push(a[b]);d.push(this.line.join(' '))}return this.text=d};function _(a,b){this.ts=null,this.tc=a,this.tag=b,this.x=this.y=this.w=this.h=this.sc=1,this.z=0,this.pulse=1,this.pulsate=a.pulsateTo<1,this.colour=a.outlineColour,this.adash=~~a.outlineDash,this.agap=~~a.outlineDashSpace||this.adash,this.aspeed=a.outlineDashSpeed*1,this.colour=='tag'?this.colour=i(b.a,'color'):this.colour=='tagbg'&&(this.colour=i(b.a,'background-color')),this.Draw=this.pulsate?this.DrawPulsate:this.DrawSimple,this.radius=a.outlineRadius|0,this.SetMethod(a.outlineMethod,a.altImage)}f=_.prototype,f.SetMethod=function(a,d){var b={block:['PreDraw','DrawBlock'],colour:['PreDraw','DrawColour'],outline:['PostDraw','DrawOutline'],classic:['LastDraw','DrawOutline'],size:['PreDraw','DrawSize'],none:['LastDraw']},c=b[a]||b.outline;a=='none'?this.Draw=function(){return 1}:this.drawFunc=this[c[1]],this[c[0]]=this.Draw,d&&(this.RealPreDraw=this.PreDraw,this.PreDraw=this.DrawAlt)},f.Update=function(d,e,i,j,a,f,g,h){var b=this.tc.outlineOffset,c=2*b;this.x=a*d+g-b,this.y=a*e+h-b,this.w=a*i+c,this.h=a*j+c,this.sc=a,this.z=f},f.Ants=function(k){if(!this.adash)return;var b=this.adash,c=this.agap,a=this.aspeed,j=b+c,h=0,g=b,f=c,i=0,d=0,e;a&&(d=p(a)*(q()-this.ts)/50,a<0&&(d=864e4-d),a=~~d%j),a?(b>=a?(h=b-a,g=a):(f=j-a,i=c-f),e=[h,f,g,i]):e=[b,c],k.setLineDash(e)},f.DrawOutline=function(a,d,e,b,c,f){var g=h(this.radius,c/2,b/2);a.strokeStyle=f,this.Ants(a),y(a,d,e,b,c,g,!0)},f.DrawSize=function(i,n,m,l,k,j,a,h,g){var f=a.w,e=a.h,c,b,d;return this.pulsate?(a.image?d=(a.image.height+this.tc.outlineIncrease)/a.image.height:d=a.oscale,b=a.fimage||a.image,c=1+(d-1)*(1-this.pulse),a.h*=c,a.w*=c):b=a.oimage,a.alpha=1,a.Draw(i,h,g,b),a.h=e,a.w=f,1},f.DrawColour=function(d,h,i,e,f,g,a,b,c){return a.oimage?(this.pulse<1?(a.alpha=1-w(this.pulse,2),a.Draw(d,b,c,a.fimage),a.alpha=this.pulse):a.alpha=1,a.Draw(d,b,c,a.oimage),1):this[a.image?'DrawColourImage':'DrawColourText'](d,h,i,e,f,g,a,b,c)},f.DrawColourText=function(f,h,i,j,g,e,a,b,c){var d=a.colour;return a.colour=e,a.alpha=1,a.Draw(f,b,c),a.colour=d,1},f.DrawColourImage=function(a,q,p,o,n,m,i,r,l){var f=a.canvas,e=~~g(q,0),d=~~g(p,0),c=h(f.width-e,o)+.5|0,b=h(f.height-d,n)+.5|0,j;return v?(v.width=c,v.height=b):v=k(c,b),!v?this.SetMethod('outline'):(j=v.getContext('2d'),j.drawImage(f,e,d,c,b,0,0,c,b),a.clearRect(e,d,c,b),this.pulsate?i.alpha=1-w(this.pulse,2):i.alpha=1,i.Draw(a,r,l),a.setTransform(1,0,0,1,0,0),a.save(),a.beginPath(),a.rect(e,d,c,b),a.clip(),a.globalCompositeOperation='source-in',a.fillStyle=m,a.fillRect(e,d,c,b),a.restore(),a.globalAlpha=1,a.globalCompositeOperation='destination-over',a.drawImage(v,0,0,c,b,e,d,c,b),a.globalCompositeOperation='source-over',1)},f.DrawAlt=function(b,a,c,d,f,g){var e=this.RealPreDraw(b,a,c,d,f,g);return a.alt&&(a.DrawImage(b,c,d,a.alt),e=1),e},f.DrawBlock=function(a,d,e,b,c,f){var g=h(this.radius,c/2,b/2);a.fillStyle=f,y(a,d,e,b,c,g)},f.DrawSimple=function(a,b,c,d,e,f){var g=this.tc;return a.setTransform(1,0,0,1,0,0),a.strokeStyle=this.colour,a.lineWidth=g.outlineThickness,a.shadowBlur=a.shadowOffsetX=a.shadowOffsetY=0,a.globalAlpha=f?e:1,this.drawFunc(a,this.x,this.y,this.w,this.h,this.colour,b,c,d)},f.DrawPulsate=function(h,d,e,f){var g=q()-this.ts,c=this.tc,b=c.pulsateTo+(1-c.pulsateTo)*(.5+l(2*Math.PI*g/(1e3*c.pulsateTime))/2);return this.pulse=b=a.Smooth(1,b),this.DrawSimple(h,d,e,f,b,1)},f.Active=function(d,a,b){var c=a>=this.x&&b>=this.y&&a<=this.x+this.w&&b<=this.y+this.h;return c?this.ts=this.ts||q():this.ts=null,c},f.PreDraw=f.PostDraw=f.LastDraw=x;function J(a,h,c,b,e,f,g,d,i,j,k,l,m,n){this.tc=a,this.image=null,this.text=h,this.text_original=n,this.line_widths=[],this.title=c.title||null,this.a=c,this.position=new s(b[0],b[1],b[2]),this.x=this.y=this.z=0,this.w=e,this.h=f,this.colour=g||a.textColour,this.bgColour=d||a.bgColour,this.bgRadius=i|0,this.bgOutline=j||this.colour,this.bgOutlineThickness=k|0,this.textFont=l||a.textFont,this.padding=m|0,this.sc=this.alpha=1,this.weighted=!a.weight,this.outline=new _(a,this),this.audio=null}d=J.prototype,d.Init=function(b){var a=this.tc;this.textHeight=a.textHeight,this.HasText()?this.Measure(a.ctxt,a):(this.w=this.iw,this.h=this.ih),this.SetShadowColour=a.shadowAlpha?this.SetShadowColourAlpha:this.SetShadowColourFixed,this.SetDraw(a)},d.Draw=x,d.HasText=function(){return this.text&&this.text[0].length>0},d.EqualTo=function(a){var b=a.getElementsByTagName('img');return this.a.href!=a.href?0:b.length?this.image.src==b[0].src:(a.innerText||a.textContent)==this.text_original},d.SetImage=function(a){this.image=this.fimage=a},d.SetAudio=function(a){this.audio=a,this.audio.load()},d.SetDraw=function(a){this.Draw=this.fimage?a.ie>7?this.DrawImageIE:this.DrawImage:this.DrawText,a.noSelect&&(this.CheckActive=x)},d.MeasureText=function(d){var a,e=this.text.length,b=0,c;for(a=0;a<e;++a)this.line_widths[a]=c=d.measureText(this.text[a]).width,b=g(b,c);return b},d.Measure=function(e,a){var f=ae(this.text,this.textFont,this.textHeight),b,k,h,i,g,l,j,c,d;j=f?f.max.y+f.min.y:this.textHeight,e.font=this.font=this.textHeight+'px '+this.textFont,l=this.MeasureText(e),a.txtOpt&&(b=a.txtScale,k=b*this.textHeight,h=k+'px '+this.textFont,i=[b*a.shadowOffset[0],b*a.shadowOffset[1]],e.font=h,g=this.MeasureText(e),d=new O(this.text,h,g+b,b*j+b,g,this.line_widths,a.textAlign,a.textVAlign,b),this.image&&d.SetImage(this.image,this.iw,this.ih,a.imagePosition,a.imagePadding,a.imageAlign,a.imageVAlign,a.imageScale),c=d.Create(this.colour,this.bgColour,this.bgOutline,b*this.bgOutlineThickness,a.shadow,b*a.shadowBlur,i,b*this.padding,b*this.bgRadius),a.outlineMethod=='colour'?this.oimage=d.Create(this.outline.colour,this.bgColour,this.outline.colour,b*this.bgOutlineThickness,a.shadow,b*a.shadowBlur,i,b*this.padding,b*this.bgRadius):a.outlineMethod=='size'&&(f=ae(this.text,this.textFont,this.textHeight+a.outlineIncrease),k=f.max.y+f.min.y,h=b*(this.textHeight+a.outlineIncrease)+'px '+this.textFont,e.font=h,g=this.MeasureText(e),d=new O(this.text,h,g+b,b*k+b,g,this.line_widths,a.textAlign,a.textVAlign,b),this.image&&d.SetImage(this.image,this.iw+a.outlineIncrease,this.ih+a.outlineIncrease,a.imagePosition,a.imagePadding,a.imageAlign,a.imageVAlign,a.imageScale),this.oimage=d.Create(this.colour,this.bgColour,this.bgOutline,b*this.bgOutlineThickness,a.shadow,b*a.shadowBlur,i,b*this.padding,b*this.bgRadius),this.oscale=this.oimage.width/c.width,a.outlineIncrease>0?c=H(c,this.oimage.width,this.oimage.height):this.oimage=H(this.oimage,c.width,c.height)),c&&(this.fimage=c,l=this.fimage.width/b,j=this.fimage.height/b),this.SetDraw(a),a.txtOpt=!!this.fimage),this.h=j,this.w=l},d.SetFont=function(a,b,c,d){this.textFont=a,this.colour=b,this.bgColour=c,this.bgOutline=d,this.Measure(this.tc.ctxt,this.tc)},d.SetWeight=function(c){var b=this.tc,e=b.weightMode.split(/[, ]/),d,a,f=c.length;if(!this.HasText())return;this.weighted=!0;for(a=0;a<f;++a)d=e[a]||'size','both'==d?(this.Weight(c[a],b.ctxt,b,'size',b.min_weight[a],b.max_weight[a],a),this.Weight(c[a],b.ctxt,b,'colour',b.min_weight[a],b.max_weight[a],a)):this.Weight(c[a],b.ctxt,b,d,b.min_weight[a],b.max_weight[a],a);this.Measure(b.ctxt,b)},d.Weight=function(b,i,a,d,f,h,e){b=isNaN(b)?1:b;var c=(b-f)/(h-f);'colour'==d?this.colour=L(a,c,e):'bgcolour'==d?this.bgColour=L(a,c,e):'bgoutline'==d?this.bgOutline=L(a,c,e):'outline'==d?this.outline.colour=L(a,c,e):'size'==d&&(a.weightSizeMin>0&&a.weightSizeMax>a.weightSizeMin?this.textHeight=a.weightSize*(a.weightSizeMin+(a.weightSizeMax-a.weightSizeMin)*c):this.textHeight=g(1,b*a.weightSize))},d.SetShadowColourFixed=function(a,b,c){a.shadowColor=b},d.SetShadowColourAlpha=function(a,b,c){a.shadowColor=aE(b,c)},d.DrawText=function(a,h,i){var e=this.tc,g=this.x,f=this.y,c=this.sc,b,d;a.globalAlpha=this.alpha,a.fillStyle=this.colour,e.shadow&&this.SetShadowColour(a,e.shadow,this.alpha),a.font=this.font,g+=h/c,f+=i/c-this.h/2;for(b=0;b<this.text.length;++b)d=g,'right'==e.textAlign?d+=this.w/2-this.line_widths[b]:'centre'==e.textAlign?d-=this.line_widths[b]/2:d-=this.w/2,a.setTransform(c,0,0,c,c*d,c*f),a.fillText(this.text[b],0,0),f+=this.textHeight},d.DrawImage=function(b,i,k,l){var e=this.x,f=this.y,a=this.sc,j=l||this.fimage,c=this.w,d=this.h,g=this.alpha,h=this.shadow;b.globalAlpha=g,h&&this.SetShadowColour(b,h,g),e+=i/a-c/2,f+=k/a-d/2,b.setTransform(a,0,0,a,a*e,a*f),b.drawImage(j,0,0,c,d)},d.DrawImageIE=function(b,d,e){var c=this.fimage,a=this.sc,f=c.width=this.w*a,g=c.height=this.h*a,h=this.x*a+d-f/2,i=this.y*a+e-g/2;b.setTransform(1,0,0,1,0,0),b.globalAlpha=this.alpha,b.drawImage(c,h,i)},d.Calc=function(g,e){var a,b=this.tc,d=b.minBrightness,f=b.maxBrightness,c=b.max_radius;return a=g.xform(this.position),this.xformed=a,a=aI(b,a,b.stretchX,b.stretchY),this.x=a.x,this.y=a.y,this.z=a.z,this.sc=a.w,this.alpha=e*G(d+(f-d)*(c-this.z)/(2*c),0,1),this.xformed},d.UpdateActive=function(h,e,f){var a=this.outline,b=this.w,c=this.h,d=this.x-b/2,g=this.y-c/2;return a.Update(d,g,b,c,this.sc,this.z,e,f),a},d.CheckActive=function(a,d,e){var b=this.tc,c=this.UpdateActive(a,d,e);return c.Active(a,b.mx,b.my)?c:null},d.Clicked=function(f){var b=this.a,a=b.target,d=b.href,e;if(a!=''&&a!='_self'){if(self.frames[a])self.frames[a].document.location=d;else{try{if(top.frames[a]){top.frames[a].document.location=d;return}}catch(a){}window.open(d,a)}return}if(c.createEvent){if(e=c.createEvent('MouseEvents'),e.initMouseEvent('click',1,1,window,0,0,0,0,0,0,0,0,0,0,null),!b.dispatchEvent(e))return}else if(b.fireEvent)if(!b.fireEvent('onclick'))return;c.location=d},d.StopAudio=function(){this.audio&&this.playing&&this.audio.pause(),this.stopped=1,this.playing=0},d.PlayAudio=function(){if(e==='off'||this.tc.audioOff)return;if(!e&&!ag())return;var a=this.tc.audio,c=this.tc.gain,d='suspended',b;if(this.audio)if(this.track||(this.track=e.createMediaElementSource(this.audio),this.gain=e.createGain(),this.track.connect(this.gain),this.gain.connect(e.destination)),a=this.audio,c=this.gain,!a.paused)return 1;if(a){if(e.state==d&&e.resume(),e.state==d)return;return c.gain.value=h(2,g(0,this.tc.audioVolume*1)),a.currentTime=0,this.stopped=0,b=a.play(),b!==void 0&&b.then(a=>{this.stopped?this.audio.pause():this.playing=1}),1}};function a(f,o,k){var d,i,b=c.getElementById(f),l=['id','class','innerHTML'];if(!b)throw 0;if(n(window.G_vmlCanvasManager)&&(b=window.G_vmlCanvasManager.initElement(b),this.ie=parseFloat(navigator.appVersion.split('MSIE')[1])),b&&(!b.getContext||!b.getContext('2d').fillText)){i=c.createElement('DIV');for(d=0;d<l.length;++d)i[l[d]]=b[l[d]];throw b.parentNode.insertBefore(i,b),b.parentNode.removeChild(b),0}for(d in a.options)this[d]=k&&n(k[d])?k[d]:n(a[d])?a[d]:a.options[d];if(this.canvas=b,this.ctxt=b.getContext('2d'),this.z1=250/g(this.depth,.001),this.z2=this.z1/this.zoom,this.radius=h(b.height,b.width)*.0075,this.max_radius=100,this.max_weight=[],this.min_weight=[],this.textFont=this.textFont&&Q(this.textFont),this.textHeight*=1,this.imageRadius=this.imageRadius.toString(),this.pulsateTo=G(this.pulsateTo,0,1),this.minBrightness=G(this.minBrightness,0,1),this.maxBrightness=G(this.maxBrightness,this.minBrightness,1),this.ctxt.textBaseline='top',this.lx=(this.lock+'').indexOf('x')+1,this.ly=(this.lock+'').indexOf('y')+1,this.frozen=this.dx=this.dy=this.fixedAnim=this.touchState=0,this.fixedAlpha=1,this.source=o||f,this.repeatTags=h(64,~~this.repeatTags),this.minTags=h(200,~~this.minTags),~~this.scrollPause>0?a.scrollPause=~~this.scrollPause:this.scrollPause=0,this.minTags>0&&this.repeatTags<1&&(d=this.GetTags().length)&&(this.repeatTags=af(this.minTags/d)-1),this.transform=m.Identity(),this.startTime=this.time=q(),this.mx=this.my=-1,this.centreImage&&av(this),this.Animate=this.dragControl?this.AnimateDrag:this.AnimatePosition,this.animTiming=typeof a[this.animTiming]=='function'?a[this.animTiming]:a.Smooth,this.shadowBlur||this.shadowOffset[0]||this.shadowOffset[1]?(this.ctxt.shadowColor=this.shadow,this.shadow=this.ctxt.shadowColor,this.shadowAlpha=aD()):delete this.shadow,this.activeAudio===!1?e='off':this.activeAudio&&this.LoadAudio(),this.Load(),o&&this.hideTags&&function(b){a.loaded?b.HideTags():t('load',function(){b.HideTags()},window)}(this),this.yaw=this.initial?this.initial[0]*this.maxSpeed:0,this.pitch=this.initial?this.initial[1]*this.maxSpeed:0,this.tooltip?(this.ctitle=b.title,b.title='',this.tooltip=='native'?this.Tooltip=this.TooltipNative:(this.Tooltip=this.TooltipDiv,this.ttdiv||(this.ttdiv=c.createElement('div'),this.ttdiv.className=this.tooltipClass,this.ttdiv.style.position='absolute',this.ttdiv.style.zIndex=b.style.zIndex+1,t('mouseover',function(a){a.target.style.display='none'},this.ttdiv),c.body.appendChild(this.ttdiv)))):this.Tooltip=this.TooltipNone,!this.noMouse&&!j[f]){j[f]=[['mousemove',ad],['mouseout',an],['mouseup',aq],['touchstart',ar],['touchend',ac],['touchcancel',ac],['touchmove',au]],this.dragControl&&(j[f].push(['mousedown',ap]),j[f].push(['selectstart',x])),this.wheelZoom&&(j[f].push(['mousewheel',ab]),j[f].push(['DOMMouseScroll',ab])),this.scrollPause&&j[f].push(['scroll',aw,window]);for(d=0;d<j[f].length;++d)i=j[f][d],t(i[0],i[1],i[2]?i[2]:b)}a.started||(a.NextFrame=window.requestAnimationFrame?az:aA,a.interval=this.interval,a.NextFrame(this.interval),a.started=1)}b=a.prototype,b.SourceElements=function(){return c.querySelectorAll?c.querySelectorAll('#'+this.source):[c.getElementById(this.source)]},b.HideTags=function(){var b=this.SourceElements(),a;for(a=0;a<b.length;++a)b[a].style.display='none'},b.GetTags=function(){var e=this.SourceElements(),c,f=[],a,b,d;for(d=0;d<=this.repeatTags;++d)for(a=0;a<e.length;++a){c=e[a].getElementsByTagName('a');for(b=0;b<c.length;++b)f.push(c[b])}return f},b.Message=function(j){var g=[],a,f,b=j.split(''),d,e,h,i;for(a=0;a<b.length;++a)b[a]!=' '&&(f=a-b.length/2,d=c.createElement('A'),d.href='#',d.innerText=b[a],h=100*o(f/9),i=-100*l(f/9),e=new J(this,b[a],d,[h,0,i],2,18,'#000','#fff',0,0,0,'monospace',2,b[a]),e.Init(),g.push(e));return g},b.AddAudio=function(b,c){if(e==='off')return;var a=b.getElementsByTagName('audio');a.length&&(c.SetAudio(a[0]),this.hasAudio=1)},b.CreateTag=function(b){var e,c,a,f,d,g,h,j,k=[0,0,0],l;if('text'!=this.imageMode)if(e=b.getElementsByTagName('img'),e.length)if(c=new Image,c.src=e[0].src,!this.imageMode)return a=new J(this,\"\",b,k,0,0),a.SetImage(c),A(c,e[0],e[1],a,this),this.AddAudio(b,a),a;if('image'!=this.imageMode&&(d=new V(b),f=d.Lines(),d.Empty()?d=null:(g=this.textFont||Q(i(b,'font-family')),this.splitWidth&&(f=d.SplitWidth(this.splitWidth,this.ctxt,g,this.textHeight)),h=this.bgColour=='tag'?i(b,'background-color'):this.bgColour,j=this.bgOutline=='tag'?i(b,'color'):this.bgOutline)),d||c)return a=new J(this,f,b,k,2,this.textHeight+2,this.textColour||i(b,'color'),h,this.bgRadius,j,this.bgOutlineThickness,g,this.padding,d&&d.original),c?(a.SetImage(c),A(c,e[0],e[1],a,this)):a.Init(),this.AddAudio(b,a),a},b.UpdateTag=function(a,b){var c=this.textColour||i(b,'color'),d=this.textFont||Q(i(b,'font-family')),e=this.bgColour=='tag'?i(b,'background-color'):this.bgColour,f=this.bgOutline=='tag'?i(b,'color'):this.bgOutline;a.a=b,a.title=b.title,(a.colour!=c||a.textFont!=d||a.bgColour!=e||a.bgOutline!=f)&&a.SetFont(d,c,e,f)},b.Weight=function(d){var f=d.length,c,b,a,e=[],g,h=this.weightFrom?this.weightFrom.split(/[, ]/):[null],i=h.length;for(b=0;b<f;++b){e[b]=[];for(a=0;a<i;++a)c=aj(d[b].a,h[a],this.textHeight),(!this.max_weight[a]||c>this.max_weight[a])&&(this.max_weight[a]=c),(!this.min_weight[a]||c<this.min_weight[a])&&(this.min_weight[a]=c),e[b][a]=c}for(a=0;a<i;++a)this.max_weight[a]>this.min_weight[a]&&(g=1);if(g)for(b=0;b<f;++b)d[b].SetWeight(e[b])},b.Load=function(){var c=this.GetTags(),b=[],d,k,l,h,i,j,f,a,e=[],m={sphere:aB,vcylinder:ax,hcylinder:aH,vring:aG,hring:aF};if(c.length){e.length=c.length;for(a=0;a<c.length;++a)e[a]=a;this.shuffleTags&&ai(e),h=100*this.radiusX,i=100*this.radiusY,j=100*this.radiusZ,this.max_radius=g(h,g(i,j));for(a=0;a<c.length;++a)k=this.CreateTag(c[e[a]]),k&&b.push(k);this.weight&&this.Weight(b,!0),this.shapeArgs?this.shapeArgs[0]=b.length:(l=this.shape.toString().split(/[(),]/),d=l.shift(),typeof window[d]=='function'?this.shape=window[d]:this.shape=m[d]||m.sphere,this.shapeArgs=[b.length,h,i,j].concat(l)),f=this.shape.apply(this,this.shapeArgs),this.listLength=b.length;for(a=0;a<b.length;++a)b[a].position=new s(f[a][0],f[a][1],f[a][2])}this.noTagsMessage&&!b.length&&(a=this.imageMode&&this.imageMode!='both'?this.imageMode+' ':'',b=this.Message('No '+a+'tags')),this.taglist=b},b.Update=function(){var e=this.GetTags(),d=[],j=this.taglist,k,f=[],c=[],h,i,g,a,b;if(!this.shapeArgs)return this.Load();if(e.length){g=this.listLength=e.length,i=j.length;for(a=0;a<i;++a)d.push(j[a]),c.push(a);for(a=0;a<g;++a){for(b=0,k=0;b<i;++b)j[b].EqualTo(e[a])&&(this.UpdateTag(d[b],e[a]),k=c[b]=-1);k||f.push(a)}for(a=0,b=0;a<i;++a)c[b]==-1?c.splice(b,1):++b;if(c.length){for(ai(c);c.length&&f.length;)a=c.shift(),b=f.shift(),d[a]=this.CreateTag(e[b]);for(c.sort(function(a,b){return a-b});c.length;)d.splice(c.pop(),1)}for(b=d.length/(f.length+1),a=0;f.length;)d.splice(af(++a*b),0,this.CreateTag(e[f.shift()]));this.shapeArgs[0]=g=d.length,h=this.shape.apply(this,this.shapeArgs);for(a=0;a<g;++a)d[a].position=new s(h[a][0],h[a][1],h[a][2]);this.weight&&this.Weight(d)}this.taglist=d},b.SetShadow=function(a){a.shadowBlur=this.shadowBlur,a.shadowOffsetX=this.shadowOffset[0],a.shadowOffsetY=this.shadowOffset[1]},b.LoadAudio=function(){if(!e&&!ag())return;this.audio=c.createElement('audio'),this.audio.src=this.activeAudio,this.track=e.createMediaElementSource(this.audio),this.gain=e.createGain(),this.track.connect(this.gain),this.gain.connect(e.destination),this.hasAudio=1,P=function(a){e.resume(),c.removeEventListener('click',P)},c.addEventListener('click',P)},b.ShowAudioIcon=function(){var a=this.audioIconSize,c=this.canvas,d=this.ctxt,k=c.width-a-3,f=c.height-a-3,g=this.audioIconThickness,h='#000',i='#fff',j=this.audioIconDark,b=this.audioOff,l='suspended';if(!e)return;b||(b=e.state===l),this.audioIcon&&this.hasAudio&&($(b,d,a,k,f,g+1,j?i:h),$(b,d,a,k,f,g,j?h:i))},b.CheckAudioIcon=function(){var a=this.audioIconSize,b=this.canvas,c=this.audioIconThickness/2,d=b.width-a-3-c,e=b.height-a-3-c;if(this.audioIcon&&this.mx>=d&&this.my>=e)return!0},b.ToggleAudio=function(){var a=this.audioOff||e&&e.state==='suspended';a||this.currentAudio&&this.currentAudio.StopAudio(),this.audioOff=!a},b.Draw=function(s){if(this.paused)return;var l=this.canvas,i=l.width,j=l.height,q=0,p=(s-this.time)*a.interval/1e3,h=i/2+this.offsetX,g=j/2+this.offsetY,d=this.ctxt,b,f,c,o=-1,e=this.taglist,k=e.length,t=this.active&&this.active.tag,m='',u=this.frontSelect,r=this.centreFunc==x,n;if(this.time=s,this.frozen&&this.drawn)return this.Animate(i,j,p);n=this.AnimateFixed(),d.setTransform(1,0,0,1,0,0);for(c=0;c<k;++c)e[c].Calc(this.transform,this.fixedAlpha);if(e=ak(e,function(a,b){return b.z-a.z}),n&&this.fixedAnim.active)b=this.fixedAnim.tag.UpdateActive(d,h,g);else if(this.active=null,this.CheckAudioIcon())m='pointer';else{for(c=0;c<k;++c)f=this.mx>=0&&this.my>=0&&this.taglist[c].CheckActive(d,h,g),f&&f.sc>q&&(!u||f.z<=0)&&(b=f,o=c,b.tag=this.taglist[c],q=f.sc);this.active=b}this.txtOpt||this.shadow&&this.SetShadow(d),d.clearRect(0,0,i,j);for(c=0;c<k;++c){if(!r&&e[c].z<=0){try{this.centreFunc(d,i,j,h,g)}catch(a){alert(a),this.centreFunc=x}r=!0}b&&b.tag==e[c]&&b.PreDraw(d,e[c],h,g)||e[c].Draw(d,h,g),b&&b.tag==e[c]&&b.PostDraw(d)}this.freezeActive&&b?this.Freeze():(this.UnFreeze(),this.drawn=k==this.listLength),this.fixedCallback&&(this.fixedCallback(this,this.fixedCallbackTag),this.fixedCallback=null),n||this.Animate(i,j,p),b&&(b.LastDraw(d),b.tag!=t&&(this.currentAudio&&this.currentAudio!=b.tag&&this.currentAudio.StopAudio(),b.tag.PlayAudio()&&(this.currentAudio=b.tag)),m=this.activeCursor),l.style.cursor=m,this.Tooltip(b,this.taglist[o]),this.audioIcon&&this.ShowAudioIcon()},b.TooltipNone=function(){},b.TooltipNative=function(b,a){b?this.canvas.title=a&&a.title?a.title:'':this.canvas.title=this.ctitle},b.SetTTDiv=function(c,d){var a=this,b=a.ttdiv.style;c!=a.ttdiv.innerHTML&&(b.display='none'),a.ttdiv.innerHTML=c,d&&(d.title=a.ttdiv.innerHTML),b.display=='none'&&!a.tttimer&&(a.tttimer=setTimeout(function(){var c=X(a.canvas.id);b.display='block',b.left=c.x+a.mx+'px',b.top=c.y+a.my+24+'px',a.tttimer=null},a.tooltipDelay))},b.TooltipDiv=function(b,a){b&&a&&a.title?this.SetTTDiv(a.title,a):!b&&this.mx!=-1&&this.my!=-1&&this.ctitle.length?this.SetTTDiv(this.ctitle):this.ttdiv.style.display='none'},b.Transform=function(c,a,b){if(a||b){var d=o(a),e=l(a),f=o(b),g=l(b),h=new m([g,0,f,0,1,0,-f,0,g]),i=new m([1,0,0,0,e,-d,0,d,e]);c.transform=c.transform.mul(h.mul(i))}},b.AnimateFixed=function(){var a,b,c,d,e;return!!(this.fadeIn&&(b=q()-this.startTime,b>=this.fadeIn?(this.fadeIn=0,this.fixedAlpha=1):this.fixedAlpha=b/this.fadeIn),this.fixedAnim)&&(this.fixedAnim.transform||(this.fixedAnim.transform=this.transform),a=this.fixedAnim,b=q()-a.t0,c=a.angle,d,e=this.animTiming(a.t,b),this.transform=a.transform,b>=a.t?(this.fixedCallbackTag=a.tag,this.fixedCallback=a.cb,this.fixedAnim=this.yaw=this.pitch=0):c*=e,d=m.Rotation(c,a.axis),this.transform=this.transform.mul(d),this.fixedAnim!=0)},b.AnimatePosition=function(g,h,f){var a=this,d=a.mx,e=a.my,b,c;!a.frozen&&d>=0&&e>=0&&d<g&&e<h?(b=a.maxSpeed,c=a.reverse?-1:1,a.lx||(a.yaw=(d*2*b/g-b)*c*f),a.ly||(a.pitch=(e*2*b/h-b)*-c*f),a.initial=null):a.initial||(a.frozen&&!a.freezeDecel?a.yaw=a.pitch=0:a.Decel(a)),this.Transform(a,a.pitch,a.yaw)},b.AnimateDrag=function(d,e,c){var a=this,b=100*c*a.maxSpeed/a.max_radius/a.zoom;a.dx||a.dy?(a.lx||(a.yaw=a.dx*b/a.stretchX),a.ly||(a.pitch=a.dy*-b/a.stretchY),a.dx=a.dy=0,a.initial=null):a.initial||a.Decel(a),this.Transform(a,a.pitch,a.yaw)},b.Freeze=function(){this.frozen||(this.preFreeze=[this.yaw,this.pitch],this.frozen=1,this.drawn=0)},b.UnFreeze=function(){this.frozen&&(this.yaw=this.preFreeze[0],this.pitch=this.preFreeze[1],this.frozen=0)},b.Decel=function(a){var b=a.minSpeed,c=p(a.yaw),d=p(a.pitch);!a.lx&&c>b&&(a.yaw=c>a.z0?a.yaw*a.decel:0),!a.ly&&d>b&&(a.pitch=d>a.z0?a.pitch*a.decel:0)},b.Zoom=function(a){this.z2=this.z1*(1/a),this.drawn=0},b.Clicked=function(b){if(this.CheckAudioIcon()){this.ToggleAudio();return}var a=this.active;try{a&&a.tag&&(this.clickToFront===!1||this.clickToFront===null?a.tag.Clicked(b):this.TagToFront(a.tag,this.clickToFront,function(){a.tag.Clicked(b)},!0))}catch(a){}},b.Wheel=function(a){var b=this.zoom+this.zoomStep*(a?1:-1);this.zoom=h(this.zoomMax,g(this.zoomMin,b)),this.Zoom(this.zoom)},b.BeginDrag=function(a){this.down=K(a,this.canvas),a.cancelBubble=!0,a.returnValue=!1,a.preventDefault&&a.preventDefault()},b.Drag=function(e,a){if(this.dragControl&&this.down){var d=this.dragThreshold*this.dragThreshold,b=a.x-this.down.x,c=a.y-this.down.y;(this.dragging||b*b+c*c>d)&&(this.dx=b,this.dy=c,this.dragging=1,this.down=a)}return this.dragging},b.EndDrag=function(){var a=this.dragging;return this.dragging=this.down=null,a};function ah(a){var b=a.targetTouches[0],c=a.targetTouches[1];return E(w(c.pageX-b.pageX,2)+w(c.pageY-b.pageY,2))}b.BeginPinch=function(a){this.pinched=[ah(a),this.zoom],a.preventDefault&&a.preventDefault()},b.Pinch=function(d){var b,c,a=this.pinched;if(!a)return;c=ah(d),b=a[1]*c/a[0],this.zoom=h(this.zoomMax,g(this.zoomMin,b)),this.Zoom(this.zoom)},b.EndPinch=function(a){this.pinched=null},b.Pause=function(){this.paused=!0},b.Resume=function(){this.paused=!1},b.SetSpeed=function(a){this.initial=a,this.yaw=a[0]*this.maxSpeed,this.pitch=a[1]*this.maxSpeed},b.FindTag=function(a){if(!n(a))return null;if(n(a.index)&&(a=a.index),!B(a))return this.taglist[a];var c,d,b;n(a.id)?(c='id',d=a.id):n(a.text)&&(c='innerText',d=a.text);for(b=0;b<this.taglist.length;++b)if(this.taglist[b].a[c]==d)return this.taglist[b]},b.RotateTag=function(a,h,i,j,f,g){var b=a.Calc(this.transform,1),c=new s(b.x,b.y,b.z),d=ay(i,h),e=c.angle(d),k=c.cross(d).unit();e==0?(this.fixedCallbackTag=a,this.fixedCallback=f):this.fixedAnim={angle:-e,axis:k,t:j,t0:q(),cb:f,tag:a,active:g}},b.TagToFront=function(a,b,c,d){this.RotateTag(a,0,0,b,c,d)},b.Volume=function(a){this.audioVolume=a*1},a.Start=function(b,c,d){a.Delete(b),a.tc[b]=new a(b,c,d)};function N(c,b){a.tc[b]&&a.tc[b][c]()}a.Linear=function(a,b){return b/a},a.Smooth=function(a,b){return.5-l(b*Math.PI/a)/2},a.Pause=function(a){N('Pause',a)},a.Resume=function(a){N('Resume',a)},a.Reload=function(a){N('Load',a)},a.Update=function(a){N('Update',a)},a.SetSpeed=function(c,b){return!!(B(b)&&a.tc[c]&&!isNaN(b[0])&&!isNaN(b[1]))&&(a.tc[c].SetSpeed(b),!0)},a.TagToFront=function(c,b){return!!B(b)&&(b.lat=b.lng=0,a.RotateTag(c,b))},a.RotateTag=function(c,b){if(B(b)&&a.tc[c]){isNaN(b.time)&&(b.time=500);var d=a.tc[c].FindTag(b);if(d)return a.tc[c].RotateTag(d,b.lat,b.lng,b.time,b.callback,b.active),!0}return!1},a.Delete=function(b){var d,e;if(j[b])if(e=c.getElementById(b),e)for(d=0;d<j[b].length;++d)am(j[b][d][0],j[b][d][1],e);delete j[b],delete a.tc[b]},a.tc={},a.options={z1:2e4,z2:2e4,z0:2e-4,freezeActive:!1,freezeDecel:!1,activeCursor:'pointer',pulsateTo:1,pulsateTime:3,reverse:!1,depth:.5,maxSpeed:.05,minSpeed:0,decel:.95,interval:20,minBrightness:.1,maxBrightness:1,outlineColour:'#ffff99',outlineThickness:2,outlineOffset:5,outlineMethod:'outline',outlineRadius:0,textColour:'#ff99ff',textHeight:15,textFont:'Helvetica, Arial, sans-serif',shadow:'#000',shadowBlur:0,shadowOffset:[0,0],initial:null,hideTags:!0,zoom:1,weight:!1,weightMode:'size',weightFrom:null,weightSize:1,weightSizeMin:null,weightSizeMax:null,weightGradient:{0:'#f00',0.33:'#ff0',0.66:'#0f0',1:'#00f'},txtOpt:!0,txtScale:2,frontSelect:!1,wheelZoom:!0,zoomMin:.3,zoomMax:3,zoomStep:.05,shape:'sphere',lock:null,tooltip:null,tooltipDelay:300,tooltipClass:'tctooltip',radiusX:1,radiusY:1,radiusZ:1,stretchX:1,stretchY:1,offsetX:0,offsetY:0,shuffleTags:!1,noSelect:!1,noMouse:!1,imageScale:1,paused:!1,dragControl:!1,dragThreshold:4,centreFunc:x,splitWidth:0,animTiming:'Smooth',clickToFront:!1,fadeIn:0,padding:0,bgColour:null,bgRadius:0,bgOutline:null,bgOutlineThickness:0,outlineIncrease:4,textAlign:'centre',textVAlign:'middle',imageMode:null,imagePosition:null,imagePadding:2,imageAlign:'centre',imageVAlign:'middle',noTagsMessage:!0,centreImage:null,pinchZoom:!1,repeatTags:0,minTags:0,imageRadius:0,scrollPause:!1,outlineDash:0,outlineDashSpace:0,outlineDashSpeed:1,activeAudio:'',audioVolume:1,audioIcon:1,audioIconSize:20,audioIconThickness:2,audioIconDark:0,altImage:0};for(r in a.options)a[r]=a.options[r];window.TagCanvas=a,t('load',function(){a.loaded=1},window)})()",
                s = function () {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                },
                guid = function () {
                    return "" + s() + s() + "-" + s() + "-" + s() + "-" + s() + "-" + s() + s() + s()
                },
                UseInViewport = function (e) {
                    var t = e.cb,
                        n = e.children,
                        i = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
                    return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function () {
                        var e = new IntersectionObserver((function (e) {
                            t(e.some((function (e) {
                                return e.isIntersecting
                            })))
                        }), {
                            root: null,
                            rootMargin: "0px",
                            threshold: .1
                        });
                        return null != i && i.current && e.observe(i.current),
                            function () {
                                e.disconnect()
                            }
                    }), [t]), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
                        ref: i
                    }, n)
                },
                isScriptLoaded = !1,
                tr = function (e) {
                    try {
                        e()
                    } catch (t) {
                        try {
                            e()
                        } catch (t) { }
                    }
                },
                CloudWrapped = function CloudWrapped(_ref) {
                    var _ref$options = _ref.options,
                        options = void 0 === _ref$options ? {} : _ref$options,
                        _ref$containerProps = _ref.containerProps,
                        containerProps = void 0 === _ref$containerProps ? {} : _ref$containerProps,
                        _ref$canvasProps = _ref.canvasProps,
                        canvasProps = void 0 === _ref$canvasProps ? {} : _ref$canvasProps,
                        children = _ref.children,
                        _ref$id = _ref.id,
                        id = void 0 === _ref$id ? guid() : _ref$id,
                        state = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
                            canvasContainerId: "canvas-container-" + id,
                            canvasId: "canvas-" + id,
                            hasStarted: !1
                        }).current,
                        _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),
                        mounted = _React$useState[0],
                        setMounted = _React$useState[1];
                    react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function () {
                        return setMounted(!0),
                            function () {
                                return tr((function () {
                                    eval("TagCanvas.Delete('" + state.canvasId + "')")
                                }))
                            }
                    }), []);
                    var supportsTouch = "undefined" != typeof window && ("ontouchstart" in window || navigator.maxTouchPoints),
                        ops = JSON.stringify(_extends({
                            dragControl: !!supportsTouch,
                            maxSpeed: supportsTouch ? .01 : .05,
                            textFont: null,
                            textColour: null
                        }, options)),
                        onVisibilityChange = function onVisibilityChange(isVisible) {
                            return tr((function () {
                                if (isVisible && mounted)
                                    if (isScriptLoaded || (eval(tagCanvasString), isScriptLoaded = !0), state.hasStarted) eval("TagCanvas.Resume('" + state.canvasId + "')");
                                    else try {
                                        eval("TagCanvas.Start('" + state.canvasId + "', null, " + ops + ")"), state.hasStarted = !0
                                    } catch (e) {
                                        var el = document.getElementById(state.canvasContainerId);
                                        throw el && (el.style.display = "none"), e
                                    } else state.hasStarted && eval("TagCanvas.Pause('" + state.canvasId + "')")
                            }))
                        };
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(UseInViewport, {
                        cb: onVisibilityChange
                    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", Object.assign({
                        id: state.canvasContainerId
                    }, containerProps), react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", Object.assign({
                        id: state.canvasId,
                        style: {
                            width: "100%",
                            maxWidth: "70vh"
                        },
                        width: 1e3,
                        height: 1e3
                    }, canvasProps), children)))
                },
                Cloud = function (e) {
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CloudWrapped, Object.assign({}, e, {
                        key: guid()
                    }))
                },
                addHash = function (e) {
                    return "#" === e[0] ? e : "#" + e
                },
                renderSimpleIcon = function (e) {
                    var t = e.aProps,
                        n = void 0 === t ? {} : t,
                        i = e.bgHex,
                        r = void 0 === i ? "#fff" : i,
                        a = e.fallbackHex,
                        s = void 0 === a ? "#000" : a,
                        o = e.icon,
                        l = e.imgProps,
                        c = void 0 === l ? {} : l,
                        u = e.minContrastRatio,
                        d = void 0 === u ? 1 : u,
                        p = e.size,
                        f = void 0 === p ? 42 : p,
                        h = addHash(o.hex),
                        m = addHash(r),
                        g = addHash(s),
                        v = ((0, _csstools_convert_colors__WEBPACK_IMPORTED_MODULE_1__.yX)(m, h) > d ? (0, _csstools_convert_colors__WEBPACK_IMPORTED_MODULE_1__.xp)(h) : (0, _csstools_convert_colors__WEBPACK_IMPORTED_MODULE_1__.xp)(g)).map((function (e) {
                            return Math.round(e / 100 * 255)
                        })),
                        b = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" style="fill: rgb(' + v[0] + ", " + v[1] + ", " + v[2] + ');" viewBox="0 0 24 24" height="' + f + 'px" width="' + f + 'px"> <title>' + o.title + '</title> <path d="' + o.path + '"></path> </svg>',
                        y = _extends({
                            key: guid(),
                            title: o.title,
                            style: {
                                cursor: "pointer"
                            }
                        }, n),
                        w = _extends({
                            height: f,
                            width: f,
                            alt: o.title,
                            src: b
                        }, c);
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", Object.assign({}, y), react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", Object.assign({}, w)))
                },
                svgToPath = function (e) {
                    var t = e.indexOf('d="'),
                        n = e.indexOf('"', t + 3);
                    return e.substring(t + 3, n)
                },
                url = "https://cdn.jsdelivr.net/npm/simple-icons@14.0.0/icons/",
                cache = {},
                fallback = "",
                getSlugPath = function () {
                    var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                        var n, i, r, a;
                        return _regeneratorRuntime().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (cache[t]) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.prev = 1, n = "" + url + t + ".svg", e.next = 5, fetch(n, {
                                        cache: "force-cache"
                                    });
                                case 5:
                                    return i = e.sent, e.next = 8, i.text();
                                case 8:
                                    r = e.sent, a = svgToPath(r), cache[t] = a, e.next = 15;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(1);
                                case 15:
                                    if (!cache[t]) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.abrupt("return", cache[t]);
                                case 17:
                                    return e.abrupt("return", fallback);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 13]
                        ])
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(),
                getSlugsPath = function () {
                    var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return n = {}, t.forEach((function (e) {
                                        n[e] = e
                                    })), e.next = 4, Promise.all(Object.keys(n).map(getSlugPath));
                                case 4:
                                    return e.abrupt("return", t.map((function (e) {
                                        var t;
                                        return {
                                            slug: e,
                                            path: null != (t = cache[e]) ? t : fallback
                                        }
                                    })));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(),
                TITLE_TO_SLUG_REPLACEMENTS = {
                    "+": "plus",
                    ".": "dot",
                    "&": "and",
                    "Ä‘": "d",
                    "Ä§": "h",
                    "Ä±": "i",
                    "Ä¸": "k",
                    "Å€": "l",
                    "Å‚": "l",
                    "ÃŸ": "ss",
                    "Å§": "t"
                },
                TITLE_TO_SLUG_CHARS_REGEX = RegExp("[" + Object.keys(TITLE_TO_SLUG_REPLACEMENTS).join("") + "]", "g"),
                TITLE_TO_SLUG_RANGE_REGEX = /[^a-z0-9]/g,
                getSlug = function (e) {
                    return e.title.toLowerCase().replace(TITLE_TO_SLUG_CHARS_REGEX, (function (e) {
                        return TITLE_TO_SLUG_REPLACEMENTS[e]
                    })).normalize("NFD").replace(TITLE_TO_SLUG_RANGE_REGEX, "")
                },
                url$1 = "https://raw.githubusercontent.com/simple-icons/simple-icons/14.0.0/_data/simple-icons.json",
                cache$1, fallback$1 = "#000",
                primeCache = function () {
                    var e = _asyncToGenerator(_regeneratorRuntime().mark((function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (cache$1) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, fetch(url$1, {
                                        cache: "force-cache"
                                    });
                                case 4:
                                    return t = e.sent, e.next = 7, t.json();
                                case 7:
                                    n = e.sent, cache$1 = {}, n.forEach((function (e) {
                                        var t, n = getSlug({
                                            title: e.title
                                        });
                                        cache$1[n] = {
                                            hex: addHash(null != (t = e.hex) ? t : fallback$1),
                                            title: e.title,
                                            slug: n
                                        }
                                    })), e.next = 14;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(1);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 12]
                        ])
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                getSlugHexs = function () {
                    var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                        return _regeneratorRuntime().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, primeCache();
                                case 2:
                                    return e.abrupt("return", {
                                        hexs: t.map((function (e) {
                                            var t, n, i, r;
                                            return {
                                                slug: e,
                                                hex: cache$1 && null != (t = null == (n = cache$1[e]) ? void 0 : n.hex) ? t : fallback$1,
                                                title: cache$1 && null != (i = null == (r = cache$1[e]) ? void 0 : r.title) ? i : "icon"
                                            }
                                        })),
                                        cache: cache$1
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(),
                fetchSimpleIcons = function () {
                    var e = _asyncToGenerator(_regeneratorRuntime().mark((function e(t) {
                        var n, i, r, a, s, o, l;
                        return _regeneratorRuntime().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.slugs, e.next = 3, Promise.all([getSlugsPath(n), getSlugHexs(n)]);
                                case 3:
                                    return i = e.sent, r = i[0], a = i[1], s = a.hexs, o = a.cache, l = {}, s.forEach((function (e) {
                                        l[e.slug] = e
                                    })), r.forEach((function (e) {
                                        l[e.slug].path = e.path
                                    })), n.forEach((function (e) {
                                        var t = l[e];
                                        t.hex && t.path || delete l[e]
                                    })), e.abrupt("return", {
                                        simpleIcons: l,
                                        allIcon: o
                                    });
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        8404: function (e) {
            function t(e) {
                this.options = e, !e.deferSetup && this.setup()
            }
            t.prototype = {
                constructor: t,
                setup: function () {
                    this.options.setup && this.options.setup(), this.initialised = !0
                },
                on: function () {
                    !this.initialised && this.setup(), this.options.match && this.options.match()
                },
                off: function () {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function () {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function (e) {
                    return this.options === e || this.options.match === e
                }
            }, e.exports = t
        },
        8480: function (e, t, n) {
            "use strict";
            var i = n(1828),
                r = n(8727).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function (e) {
                return i(e, r)
            }
        },
        8551: function (e, t, n) {
            "use strict";
            var i = n(34),
                r = String,
                a = TypeError;
            e.exports = function (e) {
                if (i(e)) return e;
                throw new a(r(e) + " is not an object")
            }
        },
        8622: function (e, t, n) {
            "use strict";
            var i = n(4576),
                r = n(4901),
                a = i.WeakMap;
            e.exports = r(a) && /native code/.test(String(a))
        },
        8686: function (e, t, n) {
            "use strict";
            var i = n(3724),
                r = n(9039);
            e.exports = i && r((function () {
                return 42 !== Object.defineProperty((function () { }), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        8706: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(9039),
                a = n(4376),
                s = n(34),
                o = n(8981),
                l = n(6198),
                c = n(6837),
                u = n(4659),
                d = n(1469),
                p = n(597),
                f = n(8227),
                h = n(9519),
                m = f("isConcatSpreadable"),
                g = h >= 51 || !r((function () {
                    var e = [];
                    return e[m] = !1, e.concat()[0] !== e
                })),
                v = function (e) {
                    if (!s(e)) return !1;
                    var t = e[m];
                    return void 0 !== t ? !!t : a(e)
                };
            i({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: !g || !p("concat")
            }, {
                concat: function (e) {
                    var t, n, i, r, a, s = o(this),
                        p = d(s, 0),
                        f = 0;
                    for (t = -1, i = arguments.length; t < i; t++)
                        if (v(a = -1 === t ? s : arguments[t]))
                            for (r = l(a), c(f + r), n = 0; n < r; n++, f++) n in a && u(p, f, a[n]);
                        else c(f + 1), u(p, f++, a);
                    return p.length = f, p
                }
            })
        },
        8727: function (e) {
            "use strict";
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        8745: function (e, t, n) {
            "use strict";
            var i = n(616),
                r = Function.prototype,
                a = r.apply,
                s = r.call;
            e.exports = "object" == typeof Reflect && Reflect.apply || (i ? s.bind(a) : function () {
                return s.apply(a, arguments)
            })
        },
        8773: function (e, t) {
            "use strict";
            var n = {}.propertyIsEnumerable,
                i = Object.getOwnPropertyDescriptor,
                r = i && !n.call({
                    1: 2
                }, 1);
            t.f = r ? function (e) {
                var t = i(this, e);
                return !!t && t.enumerable
            } : n
        },
        8776: function (e) {
            "use strict";
            e.exports = !1
        },
        8841: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            t.default = {
                animating: !1,
                autoplaying: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                dragging: !1,
                edgeDragged: !1,
                initialized: !1,
                lazyLoadedList: [],
                listHeight: null,
                listWidth: null,
                scrolling: !1,
                slideCount: null,
                slideHeight: null,
                slideWidth: null,
                swipeLeft: null,
                swiped: !1,
                swiping: !1,
                touchObject: {
                    startX: 0,
                    startY: 0,
                    curX: 0,
                    curY: 0
                },
                trackStyle: {},
                trackWidth: 0,
                targetSlide: 0
            }
        },
        8981: function (e, t, n) {
            "use strict";
            var i = n(7750),
                r = Object;
            e.exports = function (e) {
                return r(i(e))
            }
        },
        9039: function (e) {
            "use strict";
            e.exports = function (e) {
                try {
                    return !!e()
                } catch (t) {
                    return !0
                }
            }
        },
        9167: function (e, t, n) {
            "use strict";
            var i = n(4576);
            e.exports = i
        },
        9212: function (e, t, n) {
            "use strict";

            function i(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(i = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        r = !0, a = e
                    } finally {
                        try {
                            i || null == o.return || o.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                    return n
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            n.d(t, {
                xp: function () {
                    return g
                },
                yX: function () {
                    return b
                }
            });
            const r = 1e8,
                a = (Math.abs, Math.atan2, Math.cbrt, Math.cos, Math.exp, Math.floor, Math.max),
                s = Math.min,
                o = (Math.PI, Math.pow);
            Math.sin, Math.sqrt, o(6, 3), o(29, 3), o(29, 3), o(3, 3);

            function l(e, t) {
                return function (e, t) {
                    const n = a(e, t),
                        i = s(e, t);
                    return (n * r + .05 * r) / (i * r + .05 * r)
                }(c(...e), c(...t))
            }

            function c(e, t, n) {
                return (u(e) * f + u(t) * h + u(n) * m) / r
            }
            const u = e => e <= 3.928 ? e / p : d(e),
                d = e => o((e + 5.5) / 105.5, 2.4),
                p = 1292,
                f = .2126 * r,
                h = .7152 * r,
                m = .0722 * r;

            function g(e) {
                const t = i(e.match(v) || [], 9),
                    n = t[1],
                    r = t[2],
                    a = t[3],
                    s = t[4],
                    o = t[5],
                    l = t[6],
                    c = t[7],
                    u = t[8];
                if (void 0 !== o || void 0 !== n) return [void 0 !== o ? parseInt(o, 16) : parseInt(n + n, 16), void 0 !== l ? parseInt(l, 16) : parseInt(r + r, 16), void 0 !== c ? parseInt(c, 16) : parseInt(a + a, 16), void 0 !== u ? parseInt(u, 16) : void 0 !== s ? parseInt(s + s, 16) : 255].map((e => 100 * e / 255))
            }
            const v = /^#?(?:([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?|([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?)$/i;

            function b(e, t) {
                return l(g(e), g(t))
            }
        },
        9213: function (e, t, n) {
            "use strict";
            var i = n(6080),
                r = n(9504),
                a = n(7055),
                s = n(8981),
                o = n(6198),
                l = n(1469),
                c = r([].push),
                u = function (e) {
                    var t = 1 === e,
                        n = 2 === e,
                        r = 3 === e,
                        u = 4 === e,
                        d = 6 === e,
                        p = 7 === e,
                        f = 5 === e || d;
                    return function (h, m, g, v) {
                        for (var b, y, w = s(h), E = a(w), S = o(E), x = i(m, g), T = 0, O = v || l, k = t ? O(h, S) : n || p ? O(h, 0) : void 0; S > T; T++)
                            if ((f || T in E) && (y = x(b = E[T], T, w), e))
                                if (t) k[T] = y;
                                else if (y) switch (e) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return b;
                                    case 6:
                                        return T;
                                    case 2:
                                        c(k, b)
                                } else switch (e) {
                                    case 4:
                                        return !1;
                                    case 7:
                                        c(k, b)
                                }
                        return d ? -1 : r || u ? u : k
                    }
                };
            e.exports = {
                forEach: u(0),
                map: u(1),
                filter: u(2),
                some: u(3),
                every: u(4),
                find: u(5),
                findIndex: u(6),
                filterReject: u(7)
            }
        },
        9223: function (e, t, n) {
            "use strict";

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PrevArrow = t.NextArrow = void 0;
            var r = o(n(6540)),
                a = o(n(6942)),
                s = n(9445);

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l() {
                return l = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function (t) {
                        d(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e, t, n) {
                return (t = m(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, m(i.key), i)
                }
            }

            function h(e, t, n) {
                return t && f(e.prototype, t), n && f(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function m(e) {
                var t = function (e, t) {
                    if ("object" != i(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != i(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == i(t) ? t : String(t)
            }

            function g(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && v(e, t)
            }

            function v(e, t) {
                return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    return e.__proto__ = t, e
                }, v(e, t)
            }

            function b(e) {
                var t = y();
                return function () {
                    var n, r = w(e);
                    if (t) {
                        var a = w(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === i(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(this, n)
                }
            }

            function y() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { })))
                } catch (e) { }
                return (y = function () {
                    return !!e
                })()
            }

            function w(e) {
                return w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, w(e)
            }
            t.PrevArrow = function (e) {
                g(n, e);
                var t = b(n);

                function n() {
                    return p(this, n), t.apply(this, arguments)
                }
                return h(n, [{
                    key: "clickHandler",
                    value: function (e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = {
                            "slick-arrow": !0,
                            "slick-prev": !0
                        },
                            t = this.clickHandler.bind(this, {
                                message: "previous"
                            });
                        !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
                        var n = {
                            key: "0",
                            "data-role": "none",
                            className: (0, a.default)(e),
                            style: {
                                display: "block"
                            },
                            onClick: t
                        },
                            i = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.prevArrow ? r.default.cloneElement(this.props.prevArrow, u(u({}, n), i)) : r.default.createElement("button", l({
                            key: "0",
                            type: "button"
                        }, n), " ", "Previous")
                    }
                }]), n
            }(r.default.PureComponent), t.NextArrow = function (e) {
                g(n, e);
                var t = b(n);

                function n() {
                    return p(this, n), t.apply(this, arguments)
                }
                return h(n, [{
                    key: "clickHandler",
                    value: function (e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = {
                            "slick-arrow": !0,
                            "slick-next": !0
                        },
                            t = this.clickHandler.bind(this, {
                                message: "next"
                            });
                        (0, s.canGoNext)(this.props) || (e["slick-disabled"] = !0, t = null);
                        var n = {
                            key: "1",
                            "data-role": "none",
                            className: (0, a.default)(e),
                            style: {
                                display: "block"
                            },
                            onClick: t
                        },
                            i = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.nextArrow ? r.default.cloneElement(this.props.nextArrow, u(u({}, n), i)) : r.default.createElement("button", l({
                            key: "1",
                            type: "button"
                        }, n), " ", "Next")
                    }
                }]), n
            }(r.default.PureComponent)
        },
        9296: function (e, t, n) {
            "use strict";
            var i = n(4055)("span").classList,
                r = i && i.constructor && i.constructor.prototype;
            e.exports = r === Object.prototype ? void 0 : r
        },
        9297: function (e, t, n) {
            "use strict";
            var i = n(9504),
                r = n(8981),
                a = i({}.hasOwnProperty);
            e.exports = Object.hasOwn || function (e, t) {
                return a(r(e), t)
            }
        },
        9306: function (e, t, n) {
            "use strict";
            var i = n(4901),
                r = n(6823),
                a = TypeError;
            e.exports = function (e) {
                if (i(e)) return e;
                throw new a(r(e) + " is not a function")
            }
        },
        9433: function (e, t, n) {
            "use strict";
            var i = n(4576),
                r = Object.defineProperty;
            e.exports = function (e, t) {
                try {
                    r(i, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    i[e] = t
                }
                return t
            }
        },
        9445: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkSpecKeys = t.checkNavigable = t.changeSlide = t.canUseDOM = t.canGoNext = void 0, t.clamp = u, t.extractObject = void 0, t.filterSettings = function (e) {
                return I.reduce((function (t, n) {
                    return e.hasOwnProperty(n) && (t[n] = e[n]), t
                }), {})
            }, t.validSettings = t.swipeStart = t.swipeMove = t.swipeEnd = t.slidesOnRight = t.slidesOnLeft = t.slideHandler = t.siblingDirection = t.safePreventDefault = t.lazyStartIndex = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.keyHandler = t.initializedState = t.getWidth = t.getTrackLeft = t.getTrackCSS = t.getTrackAnimateCSS = t.getTotalSlides = t.getSwipeDirection = t.getSlideCount = t.getRequiredLazySlides = t.getPreClones = t.getPostClones = t.getOnDemandLazySlides = t.getNavigableIndexes = t.getHeight = void 0;
            var i = a(n(6540)),
                r = a(n(1327));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, s(e)
            }

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function (t) {
                        c(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t, n) {
                var i;
                return i = function (e, t) {
                    if ("object" != s(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(e, t || "default");
                        if ("object" != s(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(t, "string"), (t = "symbol" == s(i) ? i : String(i)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function u(e, t, n) {
                return Math.max(t, Math.min(e, n))
            }
            var d = t.safePreventDefault = function (e) {
                ["onTouchStart", "onTouchMove", "onWheel"].includes(e._reactName) || e.preventDefault()
            },
                p = t.getOnDemandLazySlides = function (e) {
                    for (var t = [], n = f(e), i = h(e), r = n; r < i; r++) e.lazyLoadedList.indexOf(r) < 0 && t.push(r);
                    return t
                },
                f = (t.getRequiredLazySlides = function (e) {
                    for (var t = [], n = f(e), i = h(e), r = n; r < i; r++) t.push(r);
                    return t
                }, t.lazyStartIndex = function (e) {
                    return e.currentSlide - m(e)
                }),
                h = t.lazyEndIndex = function (e) {
                    return e.currentSlide + g(e)
                },
                m = t.lazySlidesOnLeft = function (e) {
                    return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0
                },
                g = t.lazySlidesOnRight = function (e) {
                    return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow
                },
                v = t.getWidth = function (e) {
                    return e && e.offsetWidth || 0
                },
                b = t.getHeight = function (e) {
                    return e && e.offsetHeight || 0
                },
                y = t.getSwipeDirection = function (e) {
                    var t, n, i, r, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t = e.startX - e.curX, n = e.startY - e.curY, i = Math.atan2(n, t), (r = Math.round(180 * i / Math.PI)) < 0 && (r = 360 - Math.abs(r)), r <= 45 && r >= 0 || r <= 360 && r >= 315 ? "left" : r >= 135 && r <= 225 ? "right" : !0 === a ? r >= 35 && r <= 135 ? "up" : "down" : "vertical"
                },
                w = t.canGoNext = function (e) {
                    var t = !0;
                    return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1), t
                },
                E = (t.extractObject = function (e, t) {
                    var n = {};
                    return t.forEach((function (t) {
                        return n[t] = e[t]
                    })), n
                }, t.initializedState = function (e) {
                    var t, n = i.default.Children.count(e.children),
                        r = e.listRef,
                        a = Math.ceil(v(r)),
                        s = e.trackRef && e.trackRef.node,
                        o = Math.ceil(v(s));
                    if (e.vertical) t = a;
                    else {
                        var c = e.centerMode && 2 * parseInt(e.centerPadding);
                        "string" == typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (c *= a / 100), t = Math.ceil((a - c) / e.slidesToShow)
                    }
                    var u = r && b(r.querySelector('[data-index="0"]')),
                        d = u * e.slidesToShow,
                        f = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
                    e.rtl && void 0 === e.currentSlide && (f = n - 1 - e.initialSlide);
                    var h = e.lazyLoadedList || [],
                        m = p(l(l({}, e), {}, {
                            currentSlide: f,
                            lazyLoadedList: h
                        })),
                        g = {
                            slideCount: n,
                            slideWidth: t,
                            listWidth: a,
                            trackWidth: o,
                            currentSlide: f,
                            slideHeight: u,
                            listHeight: d,
                            lazyLoadedList: h = h.concat(m)
                        };
                    return null === e.autoplaying && e.autoplay && (g.autoplaying = "playing"), g
                }, t.slideHandler = function (e) {
                    var t = e.waitForAnimate,
                        n = e.animating,
                        i = e.fade,
                        r = e.infinite,
                        a = e.index,
                        s = e.slideCount,
                        o = e.lazyLoad,
                        c = e.currentSlide,
                        d = e.centerMode,
                        f = e.slidesToScroll,
                        h = e.slidesToShow,
                        m = e.useCSS,
                        g = e.lazyLoadedList;
                    if (t && n) return {};
                    var v, b, y, E = a,
                        S = {},
                        x = {},
                        T = r ? a : u(a, 0, s - 1);
                    if (i) {
                        if (!r && (a < 0 || a >= s)) return {};
                        a < 0 ? E = a + s : a >= s && (E = a - s), o && g.indexOf(E) < 0 && (g = g.concat(E)), S = {
                            animating: !0,
                            currentSlide: E,
                            lazyLoadedList: g,
                            targetSlide: E
                        }, x = {
                            animating: !1,
                            targetSlide: E
                        }
                    } else v = E, E < 0 ? (v = E + s, r ? s % f != 0 && (v = s - s % f) : v = 0) : !w(e) && E > c ? E = v = c : d && E >= s ? (E = r ? s : s - 1, v = r ? 0 : s - 1) : E >= s && (v = E - s, r ? s % f != 0 && (v = 0) : v = s - h), !r && E + h >= s && (v = s - h), b = C(l(l({}, e), {}, {
                        slideIndex: E
                    })), y = C(l(l({}, e), {}, {
                        slideIndex: v
                    })), r || (b === y && (E = v), b = y), o && (g = g.concat(p(l(l({}, e), {}, {
                        currentSlide: E
                    })))), m ? (S = {
                        animating: !0,
                        currentSlide: v,
                        trackStyle: k(l(l({}, e), {}, {
                            left: b
                        })),
                        lazyLoadedList: g,
                        targetSlide: T
                    }, x = {
                        animating: !1,
                        currentSlide: v,
                        trackStyle: O(l(l({}, e), {}, {
                            left: y
                        })),
                        swipeLeft: null,
                        targetSlide: T
                    }) : S = {
                        currentSlide: v,
                        trackStyle: O(l(l({}, e), {}, {
                            left: y
                        })),
                        lazyLoadedList: g,
                        targetSlide: T
                    };
                    return {
                        state: S,
                        nextState: x
                    }
                }, t.changeSlide = function (e, t) {
                    var n, i, r, a, s = e.slidesToScroll,
                        o = e.slidesToShow,
                        c = e.slideCount,
                        u = e.currentSlide,
                        d = e.targetSlide,
                        p = e.lazyLoad,
                        f = e.infinite;
                    if (n = c % s != 0 ? 0 : (c - u) % s, "previous" === t.message) a = u - (r = 0 === n ? s : o - n), p && !f && (a = -1 === (i = u - r) ? c - 1 : i), f || (a = d - s);
                    else if ("next" === t.message) a = u + (r = 0 === n ? s : n), p && !f && (a = (u + s) % c + n), f || (a = d + s);
                    else if ("dots" === t.message) a = t.index * t.slidesToScroll;
                    else if ("children" === t.message) {
                        if (a = t.index, f) {
                            var h = L(l(l({}, e), {}, {
                                targetSlide: a
                            }));
                            a > t.currentSlide && "left" === h ? a -= c : a < t.currentSlide && "right" === h && (a += c)
                        }
                    } else "index" === t.message && (a = Number(t.index));
                    return a
                }, t.keyHandler = function (e, t, n) {
                    return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : ""
                }, t.swipeStart = function (e, t, n) {
                    return "IMG" === e.target.tagName && d(e), !t || !n && -1 !== e.type.indexOf("mouse") ? "" : {
                        dragging: !0,
                        touchObject: {
                            startX: e.touches ? e.touches[0].pageX : e.clientX,
                            startY: e.touches ? e.touches[0].pageY : e.clientY,
                            curX: e.touches ? e.touches[0].pageX : e.clientX,
                            curY: e.touches ? e.touches[0].pageY : e.clientY
                        }
                    }
                }, t.swipeMove = function (e, t) {
                    var n = t.scrolling,
                        i = t.animating,
                        r = t.vertical,
                        a = t.swipeToSlide,
                        s = t.verticalSwiping,
                        o = t.rtl,
                        c = t.currentSlide,
                        u = t.edgeFriction,
                        p = t.edgeDragged,
                        f = t.onEdge,
                        h = t.swiped,
                        m = t.swiping,
                        g = t.slideCount,
                        v = t.slidesToScroll,
                        b = t.infinite,
                        E = t.touchObject,
                        S = t.swipeEvent,
                        x = t.listHeight,
                        T = t.listWidth;
                    if (!n) {
                        if (i) return d(e);
                        r && a && s && d(e);
                        var k, P = {},
                            _ = C(t);
                        E.curX = e.touches ? e.touches[0].pageX : e.clientX, E.curY = e.touches ? e.touches[0].pageY : e.clientY, E.swipeLength = Math.round(Math.sqrt(Math.pow(E.curX - E.startX, 2)));
                        var M = Math.round(Math.sqrt(Math.pow(E.curY - E.startY, 2)));
                        if (!s && !m && M > 10) return {
                            scrolling: !0
                        };
                        s && (E.swipeLength = M);
                        var L = (o ? -1 : 1) * (E.curX > E.startX ? 1 : -1);
                        s && (L = E.curY > E.startY ? 1 : -1);
                        var j = Math.ceil(g / v),
                            N = y(t.touchObject, s),
                            I = E.swipeLength;
                        return b || (0 === c && ("right" === N || "down" === N) || c + 1 >= j && ("left" === N || "up" === N) || !w(t) && ("left" === N || "up" === N)) && (I = E.swipeLength * u, !1 === p && f && (f(N), P.edgeDragged = !0)), !h && S && (S(N), P.swiped = !0), k = r ? _ + I * (x / T) * L : o ? _ - I * L : _ + I * L, s && (k = _ + I * L), P = l(l({}, P), {}, {
                            touchObject: E,
                            swipeLeft: k,
                            trackStyle: O(l(l({}, t), {}, {
                                left: k
                            }))
                        }), Math.abs(E.curX - E.startX) < .8 * Math.abs(E.curY - E.startY) ? P : (E.swipeLength > 10 && (P.swiping = !0, d(e)), P)
                    }
                }, t.swipeEnd = function (e, t) {
                    var n = t.dragging,
                        i = t.swipe,
                        r = t.touchObject,
                        a = t.listWidth,
                        s = t.touchThreshold,
                        o = t.verticalSwiping,
                        c = t.listHeight,
                        u = t.swipeToSlide,
                        p = t.scrolling,
                        f = t.onSwipe,
                        h = t.targetSlide,
                        m = t.currentSlide,
                        g = t.infinite;
                    if (!n) return i && d(e), {};
                    var v = o ? c / s : a / s,
                        b = y(r, o),
                        w = {
                            dragging: !1,
                            edgeDragged: !1,
                            scrolling: !1,
                            swiping: !1,
                            swiped: !1,
                            swipeLeft: null,
                            touchObject: {}
                        };
                    if (p) return w;
                    if (!r.swipeLength) return w;
                    if (r.swipeLength > v) {
                        var E, T;
                        d(e), f && f(b);
                        var O = g ? m : h;
                        switch (b) {
                            case "left":
                            case "up":
                                T = O + x(t), E = u ? S(t, T) : T, w.currentDirection = 0;
                                break;
                            case "right":
                            case "down":
                                T = O - x(t), E = u ? S(t, T) : T, w.currentDirection = 1;
                                break;
                            default:
                                E = O
                        }
                        w.triggerSlideHandler = E
                    } else {
                        var P = C(t);
                        w.trackStyle = k(l(l({}, t), {}, {
                            left: P
                        }))
                    }
                    return w
                }, t.getNavigableIndexes = function (e) {
                    for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, i = e.infinite ? -1 * e.slidesToShow : 0, r = []; n < t;) r.push(n), n = i + e.slidesToScroll, i += Math.min(e.slidesToScroll, e.slidesToShow);
                    return r
                }),
                S = t.checkNavigable = function (e, t) {
                    var n = E(e),
                        i = 0;
                    if (t > n[n.length - 1]) t = n[n.length - 1];
                    else
                        for (var r in n) {
                            if (t < n[r]) {
                                t = i;
                                break
                            }
                            i = n[r]
                        }
                    return t
                },
                x = t.getSlideCount = function (e) {
                    var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
                    if (e.swipeToSlide) {
                        var n, i = e.listRef,
                            r = i.querySelectorAll && i.querySelectorAll(".slick-slide") || [];
                        if (Array.from(r).every((function (i) {
                            if (e.vertical) {
                                if (i.offsetTop + b(i) / 2 > -1 * e.swipeLeft) return n = i, !1
                            } else if (i.offsetLeft - t + v(i) / 2 > -1 * e.swipeLeft) return n = i, !1;
                            return !0
                        })), !n) return 0;
                        var a = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
                        return Math.abs(n.dataset.index - a) || 1
                    }
                    return e.slidesToScroll
                },
                T = t.checkSpecKeys = function (e, t) {
                    return t.reduce((function (t, n) {
                        return t && e.hasOwnProperty(n)
                    }), !0) ? null : console.error("Keys Missing:", e)
                },
                O = t.getTrackCSS = function (e) {
                    var t, n;
                    T(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
                    var i = e.slideCount + 2 * e.slidesToShow;
                    e.vertical ? n = i * e.slideHeight : t = M(e) * e.slideWidth;
                    var r = {
                        opacity: 1,
                        transition: "",
                        WebkitTransition: ""
                    };
                    if (e.useTransform) {
                        var a = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                            s = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                            o = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
                        r = l(l({}, r), {}, {
                            WebkitTransform: a,
                            transform: s,
                            msTransform: o
                        })
                    } else e.vertical ? r.top = e.left : r.left = e.left;
                    return e.fade && (r = {
                        opacity: 1
                    }), t && (r.width = t), n && (r.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? r.marginTop = e.left + "px" : r.marginLeft = e.left + "px"), r
                },
                k = t.getTrackAnimateCSS = function (e) {
                    T(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
                    var t = O(e);
                    return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
                },
                C = t.getTrackLeft = function (e) {
                    if (e.unslick) return 0;
                    T(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
                    var t, n, i = e.slideIndex,
                        r = e.trackRef,
                        a = e.infinite,
                        s = e.centerMode,
                        o = e.slideCount,
                        l = e.slidesToShow,
                        c = e.slidesToScroll,
                        u = e.slideWidth,
                        d = e.listWidth,
                        p = e.variableWidth,
                        f = e.slideHeight,
                        h = e.fade,
                        m = e.vertical;
                    if (h || 1 === e.slideCount) return 0;
                    var g = 0;
                    if (a ? (g = -P(e), o % c != 0 && i + c > o && (g = -(i > o ? l - (i - o) : o % c)), s && (g += parseInt(l / 2))) : (o % c != 0 && i + c > o && (g = l - o % c), s && (g = parseInt(l / 2))), t = m ? i * f * -1 + g * f : i * u * -1 + g * u, !0 === p) {
                        var v, b = r && r.node;
                        if (v = i + P(e), t = (n = b && b.childNodes[v]) ? -1 * n.offsetLeft : 0, !0 === s) {
                            v = a ? i + P(e) : i, n = b && b.children[v], t = 0;
                            for (var y = 0; y < v; y++) t -= b && b.children[y] && b.children[y].offsetWidth;
                            t -= parseInt(e.centerPadding), t += n && (d - n.offsetWidth) / 2
                        }
                    }
                    return t
                },
                P = t.getPreClones = function (e) {
                    return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0)
                },
                _ = t.getPostClones = function (e) {
                    return e.unslick || !e.infinite ? 0 : e.slideCount
                },
                M = t.getTotalSlides = function (e) {
                    return 1 === e.slideCount ? 1 : P(e) + e.slideCount + _(e)
                },
                L = t.siblingDirection = function (e) {
                    return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + j(e) ? "left" : "right" : e.targetSlide < e.currentSlide - N(e) ? "right" : "left"
                },
                j = t.slidesOnRight = function (e) {
                    var t = e.slidesToShow,
                        n = e.centerMode,
                        i = e.rtl,
                        r = e.centerPadding;
                    if (n) {
                        var a = (t - 1) / 2 + 1;
                        return parseInt(r) > 0 && (a += 1), i && t % 2 == 0 && (a += 1), a
                    }
                    return i ? 0 : t - 1
                },
                N = t.slidesOnLeft = function (e) {
                    var t = e.slidesToShow,
                        n = e.centerMode,
                        i = e.rtl,
                        r = e.centerPadding;
                    if (n) {
                        var a = (t - 1) / 2 + 1;
                        return parseInt(r) > 0 && (a += 1), i || t % 2 != 0 || (a += 1), a
                    }
                    return i ? t - 1 : 0
                },
                I = (t.canUseDOM = function () {
                    return !("undefined" == typeof window || !window.document || !window.document.createElement)
                }, t.validSettings = Object.keys(r.default))
        },
        9463: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(3724),
                a = n(4576),
                s = n(9504),
                o = n(9297),
                l = n(4901),
                c = n(1625),
                u = n(655),
                d = n(2106),
                p = n(7740),
                f = a.Symbol,
                h = f && f.prototype;
            if (r && l(f) && (!("description" in h) || void 0 !== f().description)) {
                var m = {},
                    g = function () {
                        var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : u(arguments[0]),
                            t = c(h, this) ? new f(e) : void 0 === e ? f() : f(e);
                        return "" === e && (m[t] = !0), t
                    };
                p(g, f), g.prototype = h, h.constructor = g;
                var v = "Symbol(description detection)" === String(f("description detection")),
                    b = s(h.valueOf),
                    y = s(h.toString),
                    w = /^Symbol\((.*)\)[^)]+$/,
                    E = s("".replace),
                    S = s("".slice);
                d(h, "description", {
                    configurable: !0,
                    get: function () {
                        var e = b(this);
                        if (o(m, e)) return "";
                        var t = y(e),
                            n = v ? S(t, 7, -1) : E(t, w, "$1");
                        return "" === n ? void 0 : n
                    }
                }), i({
                    global: !0,
                    constructor: !0,
                    forced: !0
                }, {
                    Symbol: g
                })
            }
        },
        9504: function (e, t, n) {
            "use strict";
            var i = n(616),
                r = Function.prototype,
                a = r.call,
                s = i && r.bind.bind(a, a);
            e.exports = i ? s : function (e) {
                return function () {
                    return a.apply(e, arguments)
                }
            }
        },
        9519: function (e, t, n) {
            "use strict";
            var i, r, a = n(4576),
                s = n(2839),
                o = a.process,
                l = a.Deno,
                c = o && o.versions || l && l.version,
                u = c && c.v8;
            u && (r = (i = u.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])), !r && s && (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = s.match(/Chrome\/(\d+)/)) && (r = +i[1]), e.exports = r
        },
        9565: function (e, t, n) {
            "use strict";
            var i = n(616),
                r = Function.prototype.call;
            e.exports = i ? r.bind(r) : function () {
                return r.apply(r, arguments)
            }
        },
        9572: function (e, t, n) {
            "use strict";
            var i = n(9297),
                r = n(6840),
                a = n(3640),
                s = n(8227)("toPrimitive"),
                o = Date.prototype;
            i(o, s) || r(o, s, a)
        },
        9593: function (e, t) {
            "use strict";
            t.A = e => {
                window.addEventListener("scroll", (() => {
                    var t = window.scrollY;
                    e && e.forEach((e => {
                        e.style.transform = "translate3d(0, " + -.2 * t + "px, 0)", e.style.opacity = 1 - t / 600
                    }))
                }))
            }
        },
        9617: function (e, t, n) {
            "use strict";
            var i = n(5397),
                r = n(5610),
                a = n(6198),
                s = function (e) {
                    return function (t, n, s) {
                        var o = i(t),
                            l = a(o);
                        if (0 === l) return !e && -1;
                        var c, u = r(s, l);
                        if (e && n != n) {
                            for (; l > u;)
                                if ((c = o[u++]) != c) return !0
                        } else
                            for (; l > u; u++)
                                if ((e || u in o) && o[u] === n) return e || u || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: s(!0),
                indexOf: s(!1)
            }
        },
        9773: function (e, t, n) {
            "use strict";
            var i = n(6518),
                r = n(4495),
                a = n(9039),
                s = n(3717),
                o = n(8981);
            i({
                target: "Object",
                stat: !0,
                forced: !r || a((function () {
                    s.f(1)
                }))
            }, {
                getOwnPropertySymbols: function (e) {
                    var t = s.f;
                    return t ? t(o(e)) : []
                }
            })
        }
    }
]);

// --- Scoped Mobile Fix for About Me ---
// --- Scoped Mobile Fix for About Me ---
(function () {
    // Select only the About Me section(s)
    const aboutSections = document.querySelectorAll('.about.section-padding');

    if (aboutSections.length) {
        const style = document.createElement('style');
        style.innerHTML = `
          @media (max-width: 767px) {
            /* Target only elements inside About Me */
            .about.section-padding .words,
            .about.section-padding .chars,
            .about.section-padding .splitting,
            .about.section-padding .txt {
              max-width: 100% !important;
              overflow-wrap: break-word;
              word-break: break-word;
              white-space: normal !important;
              padding-right: 15px !important;
              text-align: left !important;
            }

            .about.section-padding * {
              box-sizing: border-box !important;
            }

            .about.section-padding [style*="translate"],
            .about.section-padding [style*="scale"],
            .about.section-padding [style*="transform"] {
              max-width: 100% !important;
            }
          }
        `;
        document.head.appendChild(style);
    }
})();
