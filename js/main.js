/**
 * put-selector
 * https://github.com/kriszyp/put-selector
 * https://github.com/kriszyp/put-selector/blob/master/LICENSE
 */
!function (e) { var t, n, r, a = /[-+,> ]/; n = t = function (e, n) { "use strict"; a = n || a; var r, i = /(?:\s*([-+ ,<>]))?\s*(\.|!\.?|#)?([-\w\u00A0-\uFFFF%$|]+)?(?:\[([^\]=]+)=?('(?:\\.|[^'])*'|"(?:\\.|[^"])*"|[^\]]*)\])?/g, l = !1, c = "object" == typeof (e = e || document).createElement; function s(t, n) { t.appendChild(e.createTextNode(n)) } function f(t) { var n, o, u, d, m, p = arguments, v = p[0]; function g() { m && d && m != d && (d == t && (n || (n = a.test(N) && e.createDocumentFragment())) ? n : d).insertBefore(m, u || null) } for (var h = 0; h < p.length; h++) { var N = p[h]; if ("object" == typeof N) { if (o = !1, N instanceof Array) { m = e.createDocumentFragment(); for (var y = 0; y < N.length; y++)m.appendChild(f(N[y])); N = m } if (N.nodeType) m = N, g(), d = N, u = 0; else for (var y in N) m[y] = N[y] } else if (o) o = !1, s(m, N); else { h < 1 && (t = null), o = !0; var b = N.replace(i, function (n, a, i, o, v, y) { a && (g(), "-" == a || "+" == a ? (d = (u = m || d).parentNode, m = null, "+" == a && (u = u.nextSibling)) : ("<" == a ? d = m = (m || d).parentNode : ("," == a ? d = t : m && (d = m), m = null), u = 0), m && (d = m)); var b = !i && o; if (b || !m && (i || v)) if ("$" == b) s(d, p[++h]); else { b = b || f.defaultTag; var x = c && p[h + 1] && p[h + 1].name; x && (b = "<" + b + ' name="' + x + '">'), m = l && ~(r = b.indexOf("|")) ? e.createElementNS(l[b.slice(0, r)], b.slice(r + 1)) : e.createElement(b) } if (i) if ("$" == o && (o = p[++h]), "#" == i) m.id = o; else { var A, F = m.className, T = F && (" " + F + " ").replace(" " + o + " ", " "); if ("." == i) m.className = F ? (T + o).substring(1) : o; else if ("!" == N) c ? f("div", m, "<").innerHTML = "" : (A = m.parentNode) && A.removeChild(m); else (T = T.substring(1, T.length - 1)) != F && (m.className = T) } if (v) if (!y || '"' !== y.charAt(0) && "'" !== y.charAt(0) || (y = y.slice(1, -1).replace(/\\/g, "")), "$" == y && (y = p[++h]), "style" == v) m.style.cssText = y; else { var w = "!" == v.charAt(0) ? (v = v.substring(1)) && "removeAttribute" : "setAttribute"; l && ~(r = v.indexOf("|")) ? m[w + "NS"](l[v.slice(0, r)], v.slice(r + 1), y) : m[w](v, y) } return "" }); if (b) throw new SyntaxError("Unexpected char " + b + " in " + N); g(), d = v = m || d } } return t && n && t.appendChild(n), v } return f.addNamespace = function (t, n) { e.createElementNS ? (l || (l = {}))[t] = n : e.namespaces.add(t, n) }, f.defaultTag = "div", f.forDocument = t, f }, r = r || n, "function" == typeof define ? define([], function () { return r() }) : "undefined" == typeof window ? require("./node-html")(module, r) : put = r() }();

// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
//
// AnchorJS - v4.3.0 - 2020-10-21
// https://www.bryanbraun.com/anchorjs/
// Copyright (c) 2020 Bryan Braun; Licensed MIT
//
// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
!function (A, e) { "use strict"; "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : (A.AnchorJS = e(), A.anchors = new A.AnchorJS) }(this, function () { "use strict"; return function (A) { function d(A) { A.icon = Object.prototype.hasOwnProperty.call(A, "icon") ? A.icon : "", A.visible = Object.prototype.hasOwnProperty.call(A, "visible") ? A.visible : "hover", A.placement = Object.prototype.hasOwnProperty.call(A, "placement") ? A.placement : "right", A.ariaLabel = Object.prototype.hasOwnProperty.call(A, "ariaLabel") ? A.ariaLabel : "Anchor", A.class = Object.prototype.hasOwnProperty.call(A, "class") ? A.class : "", A.base = Object.prototype.hasOwnProperty.call(A, "base") ? A.base : "", A.truncate = Object.prototype.hasOwnProperty.call(A, "truncate") ? Math.floor(A.truncate) : 64, A.titleText = Object.prototype.hasOwnProperty.call(A, "titleText") ? A.titleText : "" } function f(A) { var e; if ("string" == typeof A || A instanceof String) e = [].slice.call(document.querySelectorAll(A)); else { if (!(Array.isArray(A) || A instanceof NodeList)) throw new TypeError("The selector provided to AnchorJS was invalid."); e = [].slice.call(A) } return e } this.options = A || {}, this.elements = [], d(this.options), this.isTouchDevice = function () { return Boolean("ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch) }, this.add = function (A) { var e, t, o, n, i, s, a, r, c, l, h, u, p = []; if (d(this.options), "touch" === (h = this.options.visible) && (h = this.isTouchDevice() ? "always" : "hover"), 0 === (e = f(A = A || "h2, h3, h4, h5, h6")).length) return this; for (!function () { if (null !== document.head.querySelector("style.anchorjs")) return; var A, e = document.createElement("style"); e.className = "anchorjs", e.appendChild(document.createTextNode("")), void 0 === (A = document.head.querySelector('[rel="stylesheet"],style')) ? document.head.appendChild(e) : document.head.insertBefore(e, A); e.sheet.insertRule(".anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}", e.sheet.cssRules.length), e.sheet.insertRule(":hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}", e.sheet.cssRules.length), e.sheet.insertRule("[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}", e.sheet.cssRules.length), e.sheet.insertRule('@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}', e.sheet.cssRules.length) }(), t = document.querySelectorAll("[id]"), o = [].map.call(t, function (A) { return A.id }), i = 0; i < e.length; i++)if (this.hasAnchorJSLink(e[i])) p.push(i); else { if (e[i].hasAttribute("id")) n = e[i].getAttribute("id"); else if (e[i].hasAttribute("data-anchor-id")) n = e[i].getAttribute("data-anchor-id"); else { for (c = r = this.urlify(e[i].textContent), a = 0; void 0 !== s && (c = r + "-" + a), a += 1, -1 !== (s = o.indexOf(c));); s = void 0, o.push(c), e[i].setAttribute("id", c), n = c } (l = document.createElement("a")).className = "anchorjs-link " + this.options.class, l.setAttribute("aria-label", this.options.ariaLabel), l.setAttribute("data-anchorjs-icon", this.options.icon), this.options.titleText && (l.title = this.options.titleText), u = document.querySelector("base") ? window.location.pathname + window.location.search : "", u = this.options.base || u, l.href = u + "#" + n, "always" === h && (l.style.opacity = "1"), "" === this.options.icon && (l.style.font = "1em/1 anchorjs-icons", "left" === this.options.placement && (l.style.lineHeight = "inherit")), "left" === this.options.placement ? (l.style.position = "absolute", l.style.marginLeft = "-1em", l.style.paddingRight = ".5em", e[i].insertBefore(l, e[i].firstChild)) : (l.style.paddingLeft = ".375em", e[i].appendChild(l)) } for (i = 0; i < p.length; i++)e.splice(p[i] - i, 1); return this.elements = this.elements.concat(e), this }, this.remove = function (A) { for (var e, t, o = f(A), n = 0; n < o.length; n++)(t = o[n].querySelector(".anchorjs-link")) && (-1 !== (e = this.elements.indexOf(o[n])) && this.elements.splice(e, 1), o[n].removeChild(t)); return this }, this.removeAll = function () { this.remove(this.elements) }, this.urlify = function (A) { var e = document.createElement("textarea"); e.innerHTML = A, A = e.value; return this.options.truncate || d(this.options), A.trim().replace(/'/gi, "").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase() }, this.hasAnchorJSLink = function (A) { var e = A.firstChild && -1 < (" " + A.firstChild.className + " ").indexOf(" anchorjs-link "), t = A.lastChild && -1 < (" " + A.lastChild.className + " ").indexOf(" anchorjs-link "); return e || t || !1 } } });
// @license-end

/**
 * Material-scrollTop
 *
 * Author: Bartholomej
 * Website: https://github.com/bartholomej/material-scrollTop
 * Docs: https://github.com/bartholomej/material-scrollTop
 * Repo: https://github.com/bartholomej/material-scrollTop
 * Issues: https://github.com/bartholomej/material-scrollTop/issues
 */
!function (e) { function n(n, t) { var o, l, i = this; i.btnClass = ".material-scrolltop", i.revealClass = "reveal", i.btnElement = e(i.btnClass), i.initial = { revealElement: "body", revealPosition: "top", padding: 0, duration: 600, easing: "swing", onScrollEnd: null }, i.options = e.extend({}, i.initial, t), i.revealElement = e(i.options.revealElement), o = "bottom" !== i.options.revealPosition ? i.revealElement.offset().top : i.revealElement.offset().top + i.revealElement.height(), l = n.offsetTop + i.options.padding, e(document).scroll(function () { o < e(document).scrollTop() ? i.btnElement.addClass(i.revealClass) : i.btnElement.removeClass(i.revealClass) }), i.btnElement.click(function () { var n = !0; return e("html, body").animate({ scrollTop: l }, i.options.duration, i.options.easing, function () { if (n) { n = !1; var e = i.options.onScrollEnd; "function" == typeof e && e() } }), !1 }) } e.fn.materialScrollTop = function () { var e = this, t = arguments[0]; e.length; return "object" != typeof t && void 0 !== t || (e[0].materialScrollTop = new n(e[0], t)), e } }(jQuery);

/*!
  * Stickyfill – `position: sticky` polyfill
  * v. 2.1.0 | https://github.com/wilddeer/stickyfill
  * MIT License
  */
!function (a, b) { "use strict"; function c(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function d(a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) } function e(a) { return parseFloat(a) || 0 } function f(a) { for (var b = 0; a;)b += a.offsetTop, a = a.offsetParent; return b } function g() { function c() { a.pageXOffset != m.left ? (m.top = a.pageYOffset, m.left = a.pageXOffset, p.refreshAll()) : a.pageYOffset != m.top && (m.top = a.pageYOffset, m.left = a.pageXOffset, n.forEach(function (a) { return a._recalcPosition() })) } function d() { f = setInterval(function () { n.forEach(function (a) { return a._fastCheck() }) }, 500) } function e() { clearInterval(f) } if (!k) { k = !0, c(), a.addEventListener("scroll", c), a.addEventListener("resize", p.refreshAll), a.addEventListener("orientationchange", p.refreshAll); var f = void 0, g = void 0, h = void 0; "hidden" in b ? (g = "hidden", h = "visibilitychange") : "webkitHidden" in b && (g = "webkitHidden", h = "webkitvisibilitychange"), h ? (b[g] || d(), b.addEventListener(h, function () { b[g] ? e() : d() })) : d() } } var h = function () { function a(a, b) { for (var c = 0; c < b.length; c++) { var d = b[c]; d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d) } } return function (b, c, d) { return c && a(b.prototype, c), d && a(b, d), b } }(), i = !1, j = "undefined" != typeof a; j && a.getComputedStyle ? !function () { var a = b.createElement("div");["", "-webkit-", "-moz-", "-ms-"].some(function (b) { try { a.style.position = b + "sticky" } catch (a) { } return "" != a.style.position }) && (i = !0) }() : i = !0; var k = !1, l = "undefined" != typeof ShadowRoot, m = { top: null, left: null }, n = [], o = function () { function g(a) { if (c(this, g), !(a instanceof HTMLElement)) throw new Error("First argument must be HTMLElement"); if (n.some(function (b) { return b._node === a })) throw new Error("Stickyfill is already applied to this node"); this._node = a, this._stickyMode = null, this._active = !1, n.push(this), this.refresh() } return h(g, [{ key: "refresh", value: function () { if (!i && !this._removed) { this._active && this._deactivate(); var c = this._node, g = getComputedStyle(c), h = { position: g.position, top: g.top, display: g.display, marginTop: g.marginTop, marginBottom: g.marginBottom, marginLeft: g.marginLeft, marginRight: g.marginRight, cssFloat: g.cssFloat }; if (!isNaN(parseFloat(h.top)) && "table-cell" != h.display && "none" != h.display) { this._active = !0; var j = c.style.position; "sticky" != g.position && "-webkit-sticky" != g.position || (c.style.position = "static"); var k = c.parentNode, m = l && k instanceof ShadowRoot ? k.host : k, n = c.getBoundingClientRect(), o = m.getBoundingClientRect(), p = getComputedStyle(m); this._parent = { node: m, styles: { position: m.style.position }, offsetHeight: m.offsetHeight }, this._offsetToWindow = { left: n.left, right: b.documentElement.clientWidth - n.right }, this._offsetToParent = { top: n.top - o.top - e(p.borderTopWidth), left: n.left - o.left - e(p.borderLeftWidth), right: -n.right + o.right - e(p.borderRightWidth) }, this._styles = { position: j, top: c.style.top, bottom: c.style.bottom, left: c.style.left, right: c.style.right, width: c.style.width, marginTop: c.style.marginTop, marginLeft: c.style.marginLeft, marginRight: c.style.marginRight }; var q = e(h.top); this._limits = { start: n.top + a.pageYOffset - q, end: o.top + a.pageYOffset + m.offsetHeight - e(p.borderBottomWidth) - c.offsetHeight - q - e(h.marginBottom) }; var r = p.position; "absolute" != r && "relative" != r && (m.style.position = "relative"), this._recalcPosition(); var s = this._clone = {}; s.node = b.createElement("div"), d(s.node.style, { width: n.right - n.left + "px", height: n.bottom - n.top + "px", marginTop: h.marginTop, marginBottom: h.marginBottom, marginLeft: h.marginLeft, marginRight: h.marginRight, cssFloat: h.cssFloat, padding: 0, border: 0, borderSpacing: 0, fontSize: "1em", position: "static" }), k.insertBefore(s.node, c), s.docOffsetTop = f(s.node) } } } }, { key: "_recalcPosition", value: function () { if (this._active && !this._removed) { var a = m.top <= this._limits.start ? "start" : m.top >= this._limits.end ? "end" : "middle"; if (this._stickyMode != a) { switch (a) { case "start": d(this._node.style, { position: "absolute", left: this._offsetToParent.left + "px", right: this._offsetToParent.right + "px", top: this._offsetToParent.top + "px", bottom: "auto", width: "auto", marginLeft: 0, marginRight: 0, marginTop: 0 }); break; case "middle": d(this._node.style, { position: "fixed", left: this._offsetToWindow.left + "px", right: this._offsetToWindow.right + "px", top: this._styles.top, bottom: "auto", width: "auto", marginLeft: 0, marginRight: 0, marginTop: 0 }); break; case "end": d(this._node.style, { position: "absolute", left: this._offsetToParent.left + "px", right: this._offsetToParent.right + "px", top: "auto", bottom: 0, width: "auto", marginLeft: 0, marginRight: 0 }) }this._stickyMode = a } } } }, { key: "_fastCheck", value: function () { this._active && !this._removed && (Math.abs(f(this._clone.node) - this._clone.docOffsetTop) > 1 || Math.abs(this._parent.node.offsetHeight - this._parent.offsetHeight) > 1) && this.refresh() } }, { key: "_deactivate", value: function () { var a = this; this._active && !this._removed && (this._clone.node.parentNode.removeChild(this._clone.node), delete this._clone, d(this._node.style, this._styles), delete this._styles, n.some(function (b) { return b !== a && b._parent && b._parent.node === a._parent.node }) || d(this._parent.node.style, this._parent.styles), delete this._parent, this._stickyMode = null, this._active = !1, delete this._offsetToWindow, delete this._offsetToParent, delete this._limits) } }, { key: "remove", value: function () { var a = this; this._deactivate(), n.some(function (b, c) { if (b._node === a._node) return n.splice(c, 1), !0 }), this._removed = !0 } }]), g }(), p = { stickies: n, Sticky: o, forceSticky: function () { i = !1, g(), this.refreshAll() }, addOne: function (a) { if (!(a instanceof HTMLElement)) { if (!a.length || !a[0]) return; a = a[0] } for (var b = 0; b < n.length; b++)if (n[b]._node === a) return n[b]; return new o(a) }, add: function (a) { if (a instanceof HTMLElement && (a = [a]), a.length) { for (var b = [], c = function (c) { var d = a[c]; return d instanceof HTMLElement ? n.some(function (a) { if (a._node === d) return b.push(a), !0 }) ? "continue" : void b.push(new o(d)) : (b.push(void 0), "continue") }, d = 0; d < a.length; d++) { c(d) } return b } }, refreshAll: function () { n.forEach(function (a) { return a.refresh() }) }, removeOne: function (a) { if (!(a instanceof HTMLElement)) { if (!a.length || !a[0]) return; a = a[0] } n.some(function (b) { if (b._node === a) return b.remove(), !0 }) }, remove: function (a) { if (a instanceof HTMLElement && (a = [a]), a.length) for (var b = function (b) { var c = a[b]; n.some(function (a) { if (a._node === c) return a.remove(), !0 }) }, c = 0; c < a.length; c++)b(c) }, removeAll: function () { for (; n.length;)n[0].remove() } }; i || g(), "undefined" != typeof module && module.exports ? module.exports = p : j && (a.Stickyfill = p) }(window, document);

function cleanAnchor(anchor) {
  return anchor.replace(/\d+/g, '').replace(/---/g, '');
}

//////////////////////////////////////////////
// Site code
//////////////////////////////////////////////
!(function (document, anchors, Stickyfill, $, put, algoliasearch) {
  'use strict';

  //////////////////////////////////////////////
  // init scrolltop button
  //////////////////////////////////////////////
  $('body').materialScrollTop();

  //////////////////////////////////////////////
  // sticky polyfill https://github.com/wilddeer/stickyfill
  //////////////////////////////////////////////
  if (Stickyfill) {
    Stickyfill.add($('.sticky'));
  }

  //////////////////////////////////////////////
  // create anchors for h2 and create page menu if it exists
  //////////////////////////////////////////////
  const pageMenu = document.querySelector('div[data-page-menu]');

  const generatePageMenu = nodes => {
    let text;
    let href;
    for (let node in nodes) {
      text = nodes[node].textContent;
      href = nodes[node].querySelector('.anchorjs-link').getAttribute('href');
      // href = href.replace(/\d+/g, '').replace(/---/g, '');
      href = cleanAnchor(href);
      nodes[node].setAttribute('id', href.replace('#', ''));
      nodes[node].querySelector('.anchorjs-link').setAttribute('href', href);
      if (nodes[node].tagName === 'H4') {
        put(pageMenu, 'a.list-group-item.list-group-item-action[href=' + href + ']', text);
      }
    }
    $('body').scrollspy({ target: pageMenu });
    document.body.style.position = 'relative';
  };

  if (pageMenu) {
    anchors.add('.page-content h4');
    generatePageMenu(anchors.elements);
  }

  //////////////////////////////////////////////
  // search
  //////////////////////////////////////////////
  const searchForm = document.querySelector('form[data-search-form]');
  const searchResult = document.querySelector('div[data-search-result]');

  if (searchForm) {
    const client = algoliasearch('IZDR0RB703', 'd424ab8841318921976adfb239677fce');
    const index = client.initIndex('public-works-design-standards');
    searchForm.addEventListener('submit', evt => {
      evt.preventDefault();
      const results = [];
      const value = evt.target.SEARCH_PWDS.value;

      if (value.length < 3) return;

      searchResult.innerHTML = '';

      index.search(value)
        .then(({ hits }) => {
          console.log(hits);

          hits.forEach(hit => {
            const { title, url, anchor, _highlightResult: { content: { value: highlight } } } = hit;

            const cleanedAnchor = cleanAnchor(anchor);

            results.push(`
              <div class="card mb-3">
                <div class="card-body">
                  <p class="card-text card-text-result">
                    <span>Section - ${title}</span>
                    <span><a href="${url}#${cleanedAnchor}" target="_blank">View This Content</a></span>
                  </p>
                  <p class="card-text">${highlight}</p>
                </div>
              </div>
            `);
          });

          searchResult.innerHTML = results.join('');

        });
    });
  }

}(this.document, this.anchors, this.Stickyfill, this.$, this.put, this.algoliasearch));
