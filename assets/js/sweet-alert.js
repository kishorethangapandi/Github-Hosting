! function (e, t) {
	function n() {
		var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>',
			n = t.createElement("div");
		n.innerHTML = e, t.body.appendChild(n)
	}

	function o(t) {
		var n = m(),
			o = n.querySelector("h2"),
			r = n.querySelector("p"),
			a = n.querySelector("button.cancel"),
			c = n.querySelector("button.confirm");
		if (o.innerHTML = b(t.title).split("\n").join("<br>"), r.innerHTML = b(t.text || "").split("\n").join("<br>"), t.text && w(r), x(n.querySelectorAll(".icon")), t.type) {
			for (var l = !1, s = 0; s < d.length; s++)
				if (t.type === d[s]) {
					l = !0;
					break
				} if (!l) return e.console.error("Unknown alert type: " + t.type), !1;
			var u = n.querySelector(".icon." + t.type);
			switch (w(u), t.type) {
				case "success":
					p(u, "animate"), p(u.querySelector(".tip"), "animateSuccessTip"), p(u.querySelector(".long"), "animateSuccessLong");
					break;
				case "error":
					p(u, "animateErrorIcon"), p(u.querySelector(".x-mark"), "animateXMark");
					break;
				case "warning":
					p(u, "pulseWarning"), p(u.querySelector(".body"), "pulseWarningIns"), p(u.querySelector(".dot"), "pulseWarningIns")
			}
		}
		if (t.imageUrl) {
			var f = n.querySelector(".icon.custom");
			f.style.backgroundImage = "url(" + t.imageUrl + ")", w(f);
			var g = 80,
				y = 80;
			if (t.imageSize) {
				var v = t.imageSize.split("x")[0],
					h = t.imageSize.split("x")[1];
				v && h ? (g = v, y = h, f.css({
					width: v + "px",
					height: h + "px"
				})) : e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
			}
			f.setAttribute("style", f.getAttribute("style") + "width:" + g + "px; height:" + y + "px")
		}
		n.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? a.style.display = "inline-block" : x(a), t.cancelButtonText && (a.innerHTML = b(t.cancelButtonText)), t.confirmButtonText && (c.innerHTML = b(t.confirmButtonText)), i(c, t.confirmButtonColor), n.setAttribute("data-allow-ouside-click", t.allowOutsideClick);
		var S = t.doneFunction ? !0 : !1;
		n.setAttribute("data-has-done-function", S)
	}

	function r(e, t) {
		e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
		var n = "#",
			o, r;
		for (r = 0; 3 > r; r++) o = parseInt(e.substr(2 * r, 2), 16), o = Math.round(Math.min(Math.max(0, o + o * t), 255)).toString(16), n += ("00" + o).substr(o.length);
		return n
	}

	function a(e) {
		var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
		return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
	}

	function i(e, t) {
		var n = a(t);
		e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
	}

	function c() {
		var e = m();
		B(g(), 10), w(e), p(e, "showSweetAlert"), v(e, "hideSweetAlert"), O = t.activeElement;
		var n = e.querySelector("button.confirm");
		n.focus(), setTimeout(function () {
			p(e, "visible")
		}, 500)
	}

	function l() {
		var n = m();
		T(g(), 5), T(n, 5), v(n, "showSweetAlert"), p(n, "hideSweetAlert"), v(n, "visible");
		var o = n.querySelector(".icon.success");
		v(o, "animate"), v(o.querySelector(".tip"), "animateSuccessTip"), v(o.querySelector(".long"), "animateSuccessLong");
		var r = n.querySelector(".icon.error");
		v(r, "animateErrorIcon"), v(r.querySelector(".x-mark"), "animateXMark");
		var a = n.querySelector(".icon.warning");
		v(a, "pulseWarning"), v(a.querySelector(".body"), "pulseWarningIns"), v(a.querySelector(".dot"), "pulseWarningIns"), e.onkeydown = A, t.onclick = I, O && O.focus(), M = void 0
	}

	function s() {
		var e = m();
		e.style.marginTop = k(m())
	}
	var u = ".sweet-alert",
		f = ".sweet-overlay",
		d = ["error", "warning", "info", "success"],
		m = function () {
			return t.querySelector(u)
		},
		g = function () {
			return t.querySelector(f)
		},
		y = function (e, t) {
			return new RegExp(" " + t + " ").test(" " + e.className + " ")
		},
		p = function (e, t) {
			y(e, t) || (e.className += " " + t)
		},
		v = function (e, t) {
			var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
			if (y(e, t)) {
				for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
				e.className = n.replace(/^\s+|\s+$/g, "")
			}
		},
		b = function (e) {
			var n = t.createElement("div");
			return n.appendChild(t.createTextNode(e)), n.innerHTML
		},
		h = function (e) {
			e.style.opacity = "", e.style.display = "block"
		},
		w = function (e) {
			if (e && !e.length) return h(e);
			for (var t = 0; t < e.length; ++t) h(e[t])
		},
		S = function (e) {
			e.style.opacity = "", e.style.display = "none"
		},
		x = function (e) {
			if (e && !e.length) return S(e);
			for (var t = 0; t < e.length; ++t) S(e[t])
		},
		C = function (e, t) {
			for (var n = t.parentNode; null !== n;) {
				if (n === e) return !0;
				n = n.parentNode
			}
			return !1
		},
		k = function (e) {
			e.style.left = "-9999px", e.style.display = "block";
			var t = e.clientHeight,
				n = parseInt(getComputedStyle(e).getPropertyValue("padding"), 10);
			return e.style.left = "", e.style.display = "none", "-" + parseInt(t / 2 + n) + "px"
		},
		B = function (e, t) {
			if (+e.style.opacity < 1) {
				t = t || 16, e.style.opacity = 0, e.style.display = "block";
				var n = +new Date,
					o = function () {
						e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(o, t)
					};
				o()
			}
		},
		T = function (e, t) {
			t = t || 16, e.style.opacity = 1;
			var n = +new Date,
				o = function () {
					e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(o, t) : e.style.display = "none"
				};
			o()
		},
		E = function (n) {
			if (MouseEvent) {
				var o = new MouseEvent("click", {
					view: e,
					bubbles: !1,
					cancelable: !0
				});
				n.dispatchEvent(o)
			} else if (t.createEvent) {
				var r = t.createEvent("MouseEvents");
				r.initEvent("click", !1, !1), n.dispatchEvent(r)
			} else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
		},
		q = function (t) {
			"function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
		},
		O, I, A, M;
	e.sweetAlert = e.swal = function () {
		function n(e) {
			var t = e.keyCode || e.which;
			if (-1 !== [9, 13, 32, 27].indexOf(t)) {
				for (var n = e.target || e.srcElement, o = -1, r = 0; r < h.length; r++)
					if (n === h[r]) {
						o = r;
						break
					} 9 === t ? (n = -1 === o ? v : o === h.length - 1 ? h[0] : h[o + 1], q(e), n.focus(), i(n, u.confirmButtonColor)) : (n = 13 === t || 32 === t ? -1 === o ? v : void 0 : 27 !== t || b.hidden || "none" === b.style.display ? void 0 : b, void 0 !== n && E(n, e))
			}
		}

		function a(e) {
			var t = e.target || e.srcElement,
				n = e.relatedTarget,
				o = y(f, "visible");
			if (o) {
				var r = -1;
				if (null !== n) {
					for (var a = 0; a < h.length; a++)
						if (n === h[a]) {
							r = a;
							break
						} - 1 === r && t.focus()
				} else M = t
			}
		}
		var u = {
			title: "",
			text: "",
			type: null,
			allowOutsideClick: !1,
			showCancelButton: !1,
			closeOnConfirm: !0,
			closeOnCancel: !0,
			confirmButtonText: "OK",
			confirmButtonColor: "#28a745",
			cancelButtonText: "Cancel",
			imageUrl: null,
			imageSize: null
		};
		if (void 0 === arguments[0]) return e.console.error("sweetAlert expects at least 1 attribute!"), !1;
		switch (typeof arguments[0]) {
			case "string":
				u.title = arguments[0], u.text = arguments[1] || "", u.type = arguments[2] || "";
				break;
			case "object":
				if (void 0 === arguments[0].title) return e.console.error('Missing "title" argument!'), !1;
				u.title = arguments[0].title, u.text = arguments[0].text || u.text, u.type = arguments[0].type || u.type, u.allowOutsideClick = arguments[0].allowOutsideClick || u.allowOutsideClick, u.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : u.showCancelButton, u.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : u.closeOnConfirm, u.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : u.closeOnCancel, u.confirmButtonText = u.showCancelButton ? "Confirm" : u.confirmButtonText, u.confirmButtonText = arguments[0].confirmButtonText || u.confirmButtonText, u.confirmButtonColor = arguments[0].confirmButtonColor || u.confirmButtonColor, u.cancelButtonText = arguments[0].cancelButtonText || u.cancelButtonText, u.imageUrl = arguments[0].imageUrl || u.imageUrl, u.imageSize = arguments[0].imageSize || u.imageSize, u.doneFunction = arguments[1] || null;
				break;
			default:
				return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
		}
		o(u), s(), c();
		for (var f = m(), d = function (e) {
			var t = e.target || e.srcElement,
				n = "confirm" === t.className,
				o = y(f, "visible"),
				a = u.doneFunction && "true" === f.getAttribute("data-has-done-function");
			switch (e.type) {
				case "mouseover":
					n && (e.target.style.backgroundColor = r(u.confirmButtonColor, -.04));
					break;
				case "mouseout":
					n && (e.target.style.backgroundColor = u.confirmButtonColor);
					break;
				case "mousedown":
					n && (e.target.style.backgroundColor = r(u.confirmButtonColor, -.14));
					break;
				case "mouseup":
					n && (e.target.style.backgroundColor = r(u.confirmButtonColor, -.04));
					break;
				case "focus":
					var i = f.querySelector("button.confirm"),
						c = f.querySelector("button.cancel");
					n ? c.style.boxShadow = "none" : i.style.boxShadow = "none";
					break;
				case "click":
					if (n && a && o) u.doneFunction(!0), u.closeOnConfirm && l();
					else if (a && o) {
						var s = String(u.doneFunction).replace(/\s/g, ""),
							d = "function(" === s.substring(0, 9) && ")" !== s.substring(9, 10);
						d && u.doneFunction(!1), u.closeOnCancel && l()
					} else l()
			}
		}, g = f.querySelectorAll("button"), p = 0; p < g.length; p++) g[p].onclick = d, g[p].onmouseover = d, g[p].onmouseout = d, g[p].onmousedown = d, g[p].onfocus = d;
		I = t.onclick, t.onclick = function (e) {
			var t = e.target || e.srcElement,
				n = f === t,
				o = C(f, e.target),
				r = y(f, "visible"),
				a = "true" === f.getAttribute("data-allow-ouside-click");
			!n && !o && r && a && l()
		};
		var v = f.querySelector("button.confirm"),
			b = f.querySelector("button.cancel"),
			h = f.querySelectorAll("button:not([type=hidden])");
		A = e.onkeydown, e.onkeydown = n, v.onblur = a, b.onblur = a, e.onfocus = function () {
			e.setTimeout(function () {
				void 0 !== M && (M.focus(), M = void 0)
			}, 0)
		}
	},
		function () {
			"complete" === t.readyState || "interactive" === t.readyState ? n() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function e() {
				t.removeEventListener("DOMContentLoaded", arguments.callee, !1), n()
			}, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function () {
				"complete" === t.readyState && (t.detachEvent("onreadystatechange", arguments.callee), n())
			})
		}()
}(window, document);