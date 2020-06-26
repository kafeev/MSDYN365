/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b) {
    "use strict"; var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {}; function p(a, b) { b = b || d; var c = b.createElement("script"); c.text = a, b.head.appendChild(c).parentNode.removeChild(c) } var q = "3.1.1", r = function (a, b) { return new r.fn.init(a, b) }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function (a, b) { return b.toUpperCase() }; r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function () { return f.call(this) }, get: function (a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a] }, pushStack: function (a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b }, each: function (a) { return r.each(this, a) }, map: function (a) { return this.pushStack(r.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(f.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === r.type(a) }, isArray: Array.isArray, isWindow: function (a) { return null != a && a === a.window }, isNumeric: function (a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function (a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a }, globalEval: function (a) { p(a) }, camelCase: function (a) { return a.replace(t, "ms-").replace(u, v) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function (a, b) { var c, d = 0; if (w(a)) { for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(s, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c }, inArray: function (a, b, c) { return null == b ? -1 : i.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, e, f = 0, h = []; if (w(a)) for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e); else for (f in a) e = b(a[f], f, c), null != e && h.push(e); return g.apply([], h) }, guid: 1, proxy: function (a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { j["[object " + b + "]"] = b.toLowerCase() }); function w(a) { var b = !!a && "length" in a && a.length, c = r.type(a); return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a) } var x = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) { return a === b && (l = !0), 0 }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function (a, b) { for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c; return -1 }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function (a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a }, da = function () { m() }, ea = ta(function (a) { return a.disabled === !0 && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" }); try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) { G = { apply: D.length ? function (a, b) { F.apply(a, H.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function ga(a, b, d, e) { var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== w && (l = Z.exec(a))) if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) { (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length; while (h--) o[h] = "#" + k + " " + sa(o[h]); r = o.join(","), s = $.test(a) && qa(b.parentNode) || b } if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) { } finally { k === u && b.removeAttribute("id") } } } return i(a.replace(P, "$1"), b, d, e) } function ha() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ia(a) { return a[u] = !0, a } function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function ka(a, b) { var c = a.split("|"), e = c.length; while (e--) d.attrHandle[c[e]] = b } function la(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function ma(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function na(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function oa(a) { return function (b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a } } function pa(a) { return ia(function (b) { return b = +b, ia(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = ga.support = {}, f = ga.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function (a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { return a.getAttribute("id") === b } }, d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }) : (d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c, d, e, f = b.getElementById(a); if (f) { if (c = f.getAttributeNode("id"), c && c.value === a) return [f]; e = b.getElementsByName(a), d = 0; while (f = e[d++]) if (c = f.getAttributeNode("id"), c && c.value === a) return [f] } return [] } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function (a) { a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = n.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0; if (e === f) return la(a, b); c = a; while (c = c.parentNode) g.unshift(c); c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, ga.matches = function (a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return ga(b, n, null, [a]).length > 0 }, ga.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, ga.escape = function (a) { return (a + "").replace(ba, ca) }, ga.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = ga.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break; return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: ia(function (a) { var b = [], c = [], d = h(a.replace(P, "$1")); return d[u] ? ia(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ia(function (a) { return function (b) { return ga(a, b).length > 0 } }), contains: ia(function (a) { return a = a.replace(_, aa), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ia(function (a) { return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: oa(!1), disabled: oa(!0), checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return X.test(a.nodeName) }, input: function (a) { return W.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: pa(function () { return [0] }), last: pa(function (a, b) { return [b - 1] }), eq: pa(function (a, b, c) { return [c < 0 ? c + b : c] }), even: pa(function (a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }), odd: pa(function (a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }), lt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }), gt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b); function ra() { } ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0) }; function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d } function ta(a, b, c) { var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++; return b.first ? function (b, c, e) { while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e); return !1 } : function (b, c, i) { var j, k, l, m = [w, h]; if (i) { while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0 } else while (b = b[d]) if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1 } } function ua(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c); return c } function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g } function xa(a, b, c, d, e, f) { return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) } function ya(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) { return a === b }, h, !0), l = ta(function (a) { return I(b, a) > -1 }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++) if (c = d.relative[a[i].type]) m = [ta(ua(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break; return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a)) } m.push(c) } return ua(m) } function za(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++]) if (q(l, g || n, h)) { i.push(l); break } k && (w = y) } c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i)); u = wa(u) } G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ia(f) : f } return h = ga.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, za(e, d)), f.selector = a } return f }, i = ga.select = function (a, b, c, e) { var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a); if (c = c || [], 1 === n.length) { if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c; m && (b = b.parentNode), a = a.slice(i.shift().value.length) } f = V.needsContext.test(a) ? 0 : i.length; while (f--) { if (j = i[f], d.relative[k = j.type]) break; if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) { if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c; break } } } return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function (a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function (a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function (a) { return null == a.getAttribute("disabled") }) || ka(J, function (a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga }(a); r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape; var y = function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) { if (e && r(a).is(c)) break; d.push(a) } return d }, z = function (a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c }, A = r.expr.match.needsContext, B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, C = /^.[^:#\[\.,]*$/; function D(a, b, c) { return r.isFunction(b) ? r.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? r.grep(a, function (a) { return a === b !== c }) : "string" != typeof b ? r.grep(a, function (a) { return i.call(b, a) > -1 !== c }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })) } r.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) { return 1 === a.nodeType })) }, r.fn.extend({ find: function (a) { var b, c, d = this.length, e = this; if ("string" != typeof a) return this.pushStack(r(a).filter(function () { for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0 })); for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c); return d > 1 ? r.uniqueSort(c) : c }, filter: function (a) { return this.pushStack(D(this, a || [], !1)) }, not: function (a) { return this.pushStack(D(this, a || [], !0)) }, is: function (a) { return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length } }); var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, G = r.fn.init = function (a, b, c) { var e, f; if (!a) return this; if (c = c || E, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this } return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this) }; G.prototype = r.fn, E = r(d); var H = /^(?:parents|prev(?:Until|All))/, I = { children: !0, contents: !0, next: !0, prev: !0 }; r.fn.extend({ has: function (a) { var b = r(a, this), c = b.length; return this.filter(function () { for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0 }) }, closest: function (a, b) { var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a); if (!A.test(a)) for (; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f) }, index: function (a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function J(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a } r.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return y(a, "parentNode") }, parentsUntil: function (a, b, c) { return y(a, "parentNode", c) }, next: function (a) { return J(a, "nextSibling") }, prev: function (a) { return J(a, "previousSibling") }, nextAll: function (a) { return y(a, "nextSibling") }, prevAll: function (a) { return y(a, "previousSibling") }, nextUntil: function (a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return y(a, "previousSibling", c) }, siblings: function (a) { return z((a.parentNode || {}).firstChild, a) }, children: function (a) { return z(a.firstChild) }, contents: function (a) { return a.contentDocument || r.merge([], a.childNodes) } }, function (a, b) { r.fn[a] = function (c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e) } }); var K = /[^\x20\t\r\n\f]+/g; function L(a) { var b = {}; return r.each(a.match(K) || [], function (a, c) { b[c] = !0 }), b } r.Callbacks = function (a) { a = "string" == typeof a ? L(a) : r.extend({}, a); var b, c, d, e, f = [], g = [], h = -1, i = function () { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) } a.memory || (c = !1), b = !1, e && (f = c ? [] : "") }, j = { add: function () { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function (b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function () { return r.each(arguments, function (a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function (a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function () { return f && (f = []), this }, disable: function () { return e = g = [], f = c = "", this }, disabled: function () { return !f }, lock: function () { return e = g = [], c || b || (f = c = ""), this }, locked: function () { return !!e }, fireWith: function (a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function () { return j.fireWith(this, arguments), this }, fired: function () { return !!d } }; return j }; function M(a) { return a } function N(a) { throw a } function O(a, b, c) { var d; try { a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a) } catch (a) { c.call(void 0, a) } } r.extend({ Deferred: function (b) { var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], d = "pending", e = { state: function () { return d }, always: function () { return f.done(arguments).fail(arguments), this }, "catch": function (a) { return e.then(null, a) }, pipe: function () { var a = arguments; return r.Deferred(function (b) { r.each(c, function (c, d) { var e = r.isFunction(a[d[4]]) && a[d[4]]; f[d[1]](function () { var a = e && e.apply(this, arguments); a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments) }) }), a = null }).promise() }, then: function (b, d, e) { var f = 0; function g(b, c, d, e) { return function () { var h = this, i = arguments, j = function () { var a, j; if (!(b < f)) { if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution"); j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i)) } }, k = e ? j : function () { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i)) } }; b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k)) } } return r.Deferred(function (a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N)) }).promise() }, promise: function (a) { return null != a ? r.extend(a, e) : e } }, f = {}; return r.each(c, function (a, b) { var g = b[2], h = b[5]; e[b[1]] = g.add, h && g.add(function () { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith }), e.promise(f), b && b.call(f, f), f }, when: function (a) { var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function (a) { return function (c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } }; if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then(); while (c--) O(e[c], h(c), g.reject); return g.promise() } }); var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; r.Deferred.exceptionHook = function (b, c) { a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function (b) { a.setTimeout(function () { throw b }) }; var Q = r.Deferred(); r.fn.ready = function (a) { return Q.then(a)["catch"](function (a) { r.readyException(a) }), this }, r.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? r.readyWait++ : r.ready(!0) }, ready: function (a) { (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r])) } }), r.ready.then = Q.then; function R() {
        d.removeEventListener("DOMContentLoaded", R),
            a.removeEventListener("load", R), r.ready()
    } "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R)); var S = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === r.type(c)) { e = !0; for (h in c) S(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(r(a), c) })), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, T = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; function U() { this.expando = r.expando + U.uid++ } U.uid = 1, U.prototype = { cache: function (a) { var b = a[this.expando]; return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function (a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b) e[r.camelCase(d)] = b[d]; return e }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] }, access: function (a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function (a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length; while (c--) delete d[b[c]] } (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function (a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) } }; var V = new U, W = new U, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Y = /[A-Z]/g; function Z(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a) } function $(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = Z(c) } catch (e) { } W.set(a, b, c) } else c = void 0; return c } r.extend({ hasData: function (a) { return W.hasData(a) || V.hasData(a) }, data: function (a, b, c) { return W.access(a, b, c) }, removeData: function (a, b) { W.remove(a, b) }, _data: function (a, b, c) { return V.access(a, b, c) }, _removeData: function (a, b) { V.remove(a, b) } }), r.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d]))); V.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { W.set(this, a) }) : S(this, function (b) { var c; if (f && void 0 === b) { if (c = W.get(f, a), void 0 !== c) return c; if (c = $(f, a), void 0 !== c) return c } else this.each(function () { W.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function (a) { return this.each(function () { W.remove(this, a) }) } }), r.extend({ queue: function (a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || [] }, dequeue: function (a, b) { b = b || "fx"; var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function () { r.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () { V.remove(a, [b + "queue", c]) }) }) } }), r.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = r.queue(this, a, b); r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { r.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"), ba = ["Top", "Right", "Bottom", "Left"], ca = function (a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") }, da = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; function ea(a, b, c, d) { var e, f = 1, g = 20, h = d ? function () { return d.cur() } : function () { return r.css(a, b, "") }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1; do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e } var fa = {}; function ga(a) { var b, c = a.ownerDocument, d = a.nodeName, e = fa[d]; return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e) } function ha(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a } r.fn.extend({ show: function () { return ha(this, !0) }, hide: function () { return ha(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { ca(this) ? r(this).show() : r(this).hide() }) } }); var ia = /^(?:checkbox|radio)$/i, ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ka = /^$|\/(?:java|ecma)script/i, la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td; function ma(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c } function na(a, b) { for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval")) } var oa = /<|&#?\w+;/; function pa(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f); else if (oa.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild; r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f)); l.textContent = "", n = 0; while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) { k = 0; while (f = g[k++]) ka.test(f.type || "") && c.push(f) } return l } !function () { var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input"); c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }(); var qa = d.documentElement, ra = /^key/, sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ta = /^([^.]*)(?:\.(.+)|)/; function ua() { return !0 } function va() { return !1 } function wa() { try { return d.activeElement } catch (a) { } } function xa(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) xa(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va; else if (!e) return a; return 1 === f && (g = e, e = function (a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () { r.event.add(this, b, e, d, c) }) } r.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(K) || [""], j = b.length; while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a); if (q && (i = q.events)) { b = (b || "").match(K) || [""], j = b.length; while (j--) if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) { l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]) } else for (n in i) r.event.remove(a, n + b[j], c, d, !0); r.isEmptyObject(i) && V.remove(a, "handle events") } }, dispatch: function (a) { var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (V.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {}; for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c]; if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result } }, handlers: function (a, b) { var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target; if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) { for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d); f.length && h.push({ elem: j, handlers: f }) } return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h }, addProp: function (a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () { if (this.originalEvent) return b(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[a] }, set: function (b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) }, fix: function (a) { return a[r.expando] ? a : new r.Event(a) }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== wa() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function () { if (this === wa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1 }, _default: function (a) { return r.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, r.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function (a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (a) { var b = a.button; return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { r.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), r.fn.extend({ on: function (a, b, c, d) { return xa(this, a, b, c, d) }, one: function (a, b, c, d) { return xa(this, a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () { r.event.remove(this, a, c, b) }) } }); var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, za = /<script|<style|<link/i, Aa = /checked\s*(?:[^=]|=\s*.checked.)/i, Ba = /^true\/(.*)/, Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Da(a, b) { return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a } function Ea(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function Fa(a) { var b = Ba.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function Ga(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]) } W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i)) } } function Ha(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) } function Ia(a, b, c, d) { b = g.apply([], b); var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q); if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function (e) { var f = a.eq(e); s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d) }); if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) { for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l); if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k)) } return a } function Ja(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d)); return a } r.extend({ htmlPrefilter: function (a) { return a.replace(ya, "<$1></$2>") }, clone: function (a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a); if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]); if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]); else Ga(a, h); return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h }, cleanData: function (a) { for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) if (T(c)) { if (b = c[V.expando]) { if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle); c[V.expando] = void 0 } c[W.expando] && (c[W.expando] = void 0) } } }), r.fn.extend({ detach: function (a) { return Ja(this, a, !0) }, remove: function (a) { return Ja(this, a) }, text: function (a) { return S(this, function (a) { return void 0 === a ? r.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function () { return Ia(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Da(this, a); b.appendChild(a) } }) }, prepend: function () { return Ia(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Da(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return Ia(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return Ia(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function () { return r.clone(this, a, b) }) }, html: function (a) { return S(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) { a = r.htmlPrefilter(a); try { for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = []; return Ia(this, arguments, function (b) { var c = this.parentNode; r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this)) }, a) } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { r.fn[a] = function (a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } }); var Ka = /^margin/, La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"), Ma = function (b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }; !function () { function b() { if (i) { i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h); var b = a.getComputedStyle(i); c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null } } var c, e, f, g, h = d.createElement("div"), i = d.createElement("div"); i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function () { return b(), c }, boxSizingReliable: function () { return b(), e }, pixelMarginRight: function () { return b(), f }, reliableMarginLeft: function () { return b(), g } })) }(); function Na(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g } function Oa(a, b) { return { get: function () { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } var Pa = /^(none|table(?!-c[ea]).+)/, Qa = { position: "absolute", visibility: "hidden", display: "block" }, Ra = { letterSpacing: "0", fontWeight: "400" }, Sa = ["Webkit", "Moz", "ms"], Ta = d.createElement("div").style; function Ua(a) { if (a in Ta) return a; var b = a[0].toUpperCase() + a.slice(1), c = Sa.length; while (c--) if (a = Sa[c] + b, a in Ta) return a } function Va(a, b, c) { var d = aa.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b } function Wa(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e))); return g } function Xa(a, b, c) { var d, e = !0, f = Ma(a), g = "border-box" === r.css(a, "boxSizing", !1, f); if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) { if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d; e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0 } return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px" } r.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Na(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = r.camelCase(b), i = a.style; return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function (a, b, c, d) { var e, f, g, h = r.camelCase(b); return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), r.each(["height", "width"], function (a, b) { r.cssHooks[b] = { get: function (a, c, d) { if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () { return Xa(a, b, d) }) }, set: function (a, c, d) { var e, f = d && Ma(a), g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f); return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g) } } }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) { if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) { r.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Ka.test(a) || (r.cssHooks[a + b].set = Va) }), r.fn.extend({ css: function (a, b) { return S(this, function (a, b, c) { var d, e, f = {}, g = 0; if (r.isArray(b)) { for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d); return f } return void 0 !== c ? r.style(a, b, c) : r.css(a, b) }, a, b, arguments.length > 1) } }); function Ya(a, b, c, d, e) { return new Ya.prototype.init(a, b, c, d, e) } r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function () { var a = Ya.propHooks[this.prop]; return a && a.get ? a.get(this) : Ya.propHooks._default.get(this) }, run: function (a) { var b, c = Ya.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function (a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function (a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {}; var Za, $a, _a = /^(?:toggle|show|hide)$/, ab = /queueHooks$/; function bb() { $a && (a.requestAnimationFrame(bb), r.fx.tick()) } function cb() { return a.setTimeout(function () { Za = void 0 }), Za = r.now() } function db(a, b) { var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e } function eb(a, b, c) { for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d } function fb(a, b, c) { var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && ca(a), q = V.get(a, "fxshow"); c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () { g.unqueued || h() }), g.unqueued++, m.always(function () { m.always(function () { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) })); for (d in b) if (e = b[d], _a.test(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue; p = !0 } n[d] = q && q[d] || r.style(a, d) } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () { p || ha([a]), V.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) } } function gb(a, b) { var c, d, e, f, g; for (c in a) if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function hb(a, b, c) { var d, e, f = 0, g = hb.prefilters.length, h = r.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; c < d; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (gb(k, j.opts.specialEasing); f < g; f++) if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d; return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) } r.Animation = r.extend(hb, { tweeners: { "*": [function (a, b) { var c = this.createTween(a, b); return ea(c.elem, a, aa.exec(b), c), c }] }, tweener: function (a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b) }, prefilters: [fb], prefilter: function (a, b) { b ? hb.prefilters.unshift(a) : hb.prefilters.push(a) } }), r.speed = function (a, b, c) { var e = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () { r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue) }, e }, r.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function () { var b = hb(this, r.extend({}, a), f); (e || V.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = V.get(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); !b && c || r.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = V.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0; for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), r.each(["toggle", "show", "hide"], function (a, b) { var c = r.fn[b]; r.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e) } }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { r.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function () { var a, b = 0, c = r.timers; for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || r.fx.stop(), Za = void 0 }, r.fx.timer = function (a) { r.timers.push(a), a() ? r.fx.start() : r.timers.pop() }, r.fx.interval = 13, r.fx.start = function () { $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval)) }, r.fx.stop = function () { a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) { return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) { var e = a.setTimeout(c, b); d.stop = function () { a.clearTimeout(e) } }) }, function () { var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option")); a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value }(); var ib, jb = r.expr.attrHandle; r.fn.extend({ attr: function (a, b) { return S(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { r.removeAttr(this, a) }) } }), r.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        }, attrHooks: { type: { set: function (a, b) { if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function (a, b) { var c, d = 0, e = b && b.match(K); if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c) }
    }), ib = { set: function (a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = jb[b] || r.find.attr; jb[b] = function (a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e } }); var kb = /^(?:input|select|textarea|button)$/i, lb = /^(?:a|area)$/i; r.fn.extend({ prop: function (a, b) { return S(this, r.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return this.each(function () { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function (a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { r.propFix[this.toLowerCase()] = this }); function mb(a) { var b = a.match(K) || []; return b.join(" ") } function nb(a) { return a.getAttribute && a.getAttribute("class") || "" } r.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function (b) { r(this).addClass(a.call(this, b, nb(this))) }); if ("string" == typeof a && a) { b = a.match(K) || []; while (c = this[i++]) if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " "); h = mb(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function (b) { r(this).removeClass(a.call(this, b, nb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(K) || []; while (c = this[i++]) if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") { g = 0; while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " "); h = mb(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) { r(this).toggleClass(a.call(this, c, nb(this), b), b) }) : this.each(function () { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(K) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || "")) }) }, hasClass: function (a) { var b, c, d = 0; b = " " + a + " "; while (c = this[d++]) if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0; return !1 } }); var ob = /\r/g; r.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = r.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c) } } }), r.extend({ valHooks: { option: { get: function (a) { var b = r.find.attr(a, "value"); return null != b ? b : mb(r.text(a)) } }, select: { get: function (a) { var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length; for (d = f < 0 ? i : g ? f : 0; d < i; d++) if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) { if (b = r(c).val(), g) return b; h.push(b) } return h }, set: function (a, b) { var c, d, e = a.options, f = r.makeArray(b), g = e.length; while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), r.each(["radio", "checkbox"], function () { r.valHooks[this] = { set: function (a, b) { if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var pb = /^(?:focusinfocus|focusoutblur)$/; r.extend(r.event, { trigger: function (b, c, e, f) { var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) { if (!f && !n.noBubble && !r.isWindow(e)) { for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h; i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a) } g = 0; while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result } }, simulate: function (a, b, c) { var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 }); r.event.trigger(d, null, b) } }), r.fn.extend({ trigger: function (a, b) { return this.each(function () { r.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) { r.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { r.event.simulate(b, a.target, r.event.fix(a)) }; r.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = V.access(d, b); e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = V.access(d, b) - 1; e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b)) } } }); var qb = a.location, rb = r.now(), sb = /\?/; r.parseXML = function (b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c }; var tb = /\[\]$/, ub = /\r?\n/g, vb = /^(?:submit|button|image|reset|file)$/i, wb = /^(?:input|select|textarea|keygen)/i; function xb(a, b, c, d) { var e; if (r.isArray(b)) r.each(b, function (b, e) { c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b) xb(a + "[" + e + "]", b[e], c, d) } r.param = function (a, b) { var c, d = [], e = function (a, b) { var c = r.isFunction(b) ? b() : b; d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c) }; if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () { e(this.name, this.value) }); else for (c in a) xb(c, a[c], b, e); return d.join("&") }, r.fn.extend({ serialize: function () { return r.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a)) }).map(function (a, b) { var c = r(this).val(); return null == c ? null : r.isArray(c) ? r.map(c, function (a) { return { name: b.name, value: a.replace(ub, "\r\n") } }) : { name: b.name, value: c.replace(ub, "\r\n") } }).get() } }); var yb = /%20/g, zb = /#.*$/, Ab = /([?&])_=[^&]*/, Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//, Fb = {}, Gb = {}, Hb = "*/".concat("*"), Ib = d.createElement("a"); Ib.href = qb.href; function Jb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(K) || []; if (r.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Kb(a, b, c, d) { var e = {}, f = a === Gb; function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Lb(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a } function Mb(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0]; else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g } if (f) return f !== i[0] && i.unshift(f), c[f] } function Nb(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a) }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function (b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = { readyState: 0, getResponseHeader: function (a) { var b; if (k) { if (!h) { h = {}; while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2] } b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return k ? g : null }, setRequestHeader: function (a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this }, overrideMimeType: function (a) { return null == k && (o.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (k) y.always(a[y.status]); else for (b in a) u[b] = [u[b], a[b]]; return this }, abort: function (a) { var b = a || x; return e && e.abort(b), A(0, b), this } }; if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } } if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y; l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]); for (m in o.headers) y.setRequestHeader(m, o.headers[m]); if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort(); if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) { if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y; o.async && o.timeout > 0 && (i = a.setTimeout(function () { y.abort("timeout") }, o.timeout)); try { k = !1, e.send(v, A) } catch (z) { if (k) throw z; A(-1, z) } } else A(-1, "No Transport"); function A(b, c, d, h) { var j, m, n, v, w, x = c; k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop"))) } return y }, getJSON: function (a, b, c) { return r.get(a, b, c, "json") }, getScript: function (a, b) { return r.get(a, void 0, b, "script") } }), r.each(["get", "post"], function (a, b) { r[b] = function (a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function (a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({ wrapAll: function (a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this }, wrapInner: function (a) { return r.isFunction(a) ? this.each(function (b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = r(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = r.isFunction(a); return this.each(function (c) { r(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function (a) { return this.parent(a).not("body").each(function () { r(this).replaceWith(this.childNodes) }), this } }), r.expr.pseudos.hidden = function (a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function (a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function () { try { return new a.XMLHttpRequest } catch (b) { } }; var Ob = { 0: 200, 1223: 204 }, Pb = r.ajaxSettings.xhr(); o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) { var c, d; if (o.cors || Pb && !b.crossDomain) return { send: function (e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g]; b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]); c = function (a) { return function () { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () { 4 === h.readyState && a.setTimeout(function () { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function () { c && c() } } }), r.ajaxPrefilter(function (a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c; return { send: function (e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function () { c && c() } } } }); var Qb = [], Rb = /(=)\?(?=&|$)|\?\?/; r.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Qb.pop() || r.expando + "_" + rb++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function () { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function (a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function (a, b, c) { var d, e, f, g = this, h = a.indexOf(" "); return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function (a, b) { g.each(function () { c.apply(this, f || [a.responseText, b, a]) }) }), this }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { r.fn[b] = function (a) { return this.on(b, a) } }), r.expr.pseudos.animated = function (a) { return r.grep(r.timers, function (b) { return a === b.elem }).length }; function Sb(a) { return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView } r.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, r.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 } }, position: function () { if (this[0]) { var a, b, c = this[0], d = { top: 0, left: 0 }; return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || qa }) } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = "pageYOffset" === b; r.fn[a] = function (d) { return S(this, function (a, d, e) { var f = Sb(a); return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), r.each(["top", "left"], function (a, b) { r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) { if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function (a, b) { r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { r.fn[d] = function (e, f) { var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border"); return S(this, function (b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g) } }) }), r.fn.extend({ bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () { return r }); var Tb = a.jQuery, Ub = a.$; return r.noConflict = function (b) { return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r }, b || (a.jQuery = a.$ = r), r
});

/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.5-33
*/
!function ($) {
    function Inputmask(alias, options, internal) {
        return this instanceof Inputmask ? (this.el = void 0, this.events = {}, this.maskset = void 0,
            this.refreshValue = !1, void (internal !== !0 && ($.isPlainObject(alias) ? options = alias : (options = options || {},
                options.alias = alias), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && void 0 !== options.definitions,
                this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts)))) : new Inputmask(alias, options, internal);
    }
    function resolveAlias(aliasStr, options, opts) {
        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts),
            $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr),
                !1);
    }
    function generateMaskSet(opts, nocache) {
        function generateMask(mask, metadata, opts) {
            if (null !== mask && "" !== mask) {
                if (1 === mask.length && opts.greedy === !1 && 0 !== opts.repeat && (opts.placeholder = ""),
                    opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {
                    var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                    mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
                }
                var masksetDefinition;
                return void 0 === Inputmask.prototype.masksCache[mask] || nocache === !0 ? (masksetDefinition = {
                    mask: mask,
                    maskToken: Inputmask.prototype.analyseMask(mask, opts),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    metadata: metadata,
                    maskLength: void 0
                }, nocache !== !0 && (Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask] = masksetDefinition,
                    masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]),
                    masksetDefinition;
            }
        }
        var ms;
        if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
            if (opts.mask.length > 1) {
                opts.keepStatic = null === opts.keepStatic || opts.keepStatic;
                var altMask = opts.groupmarker.start;
                return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
                    altMask.length > 1 && (altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start),
                        altMask += void 0 === msk.mask || $.isFunction(msk.mask) ? msk : msk.mask;
                }), altMask += opts.groupmarker.end, generateMask(altMask, opts.mask, opts);
            }
            opts.mask = opts.mask.pop();
        }
        return opts.mask && (ms = void 0 === opts.mask.mask || $.isFunction(opts.mask.mask) ? generateMask(opts.mask, opts.mask, opts) : generateMask(opts.mask.mask, opts.mask, opts)),
            ms;
    }
    function maskScope(actionObj, maskset, opts) {
        function getMaskTemplate(baseOnInput, minimalPos, includeMode) {
            minimalPos = minimalPos || 0;
            var ndxIntlzr, test, testPos, maskTemplate = [], pos = 0, lvp = getLastValidPosition();
            maxLength = void 0 !== el ? el.maxLength : void 0, maxLength === -1 && (maxLength = void 0);
            do baseOnInput === !0 && getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos],
                test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(includeMode === !0 ? testPos.input : includeMode === !1 ? test.nativeDef : getPlaceholder(pos, test))) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1),
                    test = testPos.match, ndxIntlzr = testPos.locator.slice(), (opts.jitMasking === !1 || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(includeMode === !1 ? test.nativeDef : getPlaceholder(pos, test))),
                pos++; while ((void 0 === maxLength || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);
            return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), getMaskSet().maskLength = pos + 1,
                maskTemplate;
        }
        function getMaskSet() {
            return maskset;
        }
        function resetMaskSet(soft) {
            var maskset = getMaskSet();
            maskset.buffer = void 0, soft !== !0 && (maskset._buffer = void 0, maskset.validPositions = {},
                maskset.p = 0);
        }
        function getLastValidPosition(closestTo, strict, validPositions) {
            var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
            void 0 === closestTo && (closestTo = -1);
            for (var posNdx in valids) {
                var psNdx = parseInt(posNdx);
                valids[psNdx] && (strict || valids[psNdx].generatedInput !== !0) && (psNdx <= closestTo && (before = psNdx),
                    psNdx >= closestTo && (after = psNdx));
            }
            return before !== -1 && closestTo - before > 1 || after < closestTo ? before : after;
        }
        function stripValidPositions(start, end, nocheck, strict) {
            function IsEnclosedStatic(pos) {
                var posMatch = getMaskSet().validPositions[pos];
                if (void 0 !== posMatch && null === posMatch.match.fn) {
                    var prevMatch = getMaskSet().validPositions[pos - 1], nextMatch = getMaskSet().validPositions[pos + 1];
                    return void 0 !== prevMatch && void 0 !== nextMatch;
                }
                return !1;
            }
            var i, startPos = start, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), needsValidation = !1;
            for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) void 0 !== getMaskSet().validPositions[i] && (nocheck !== !0 && (!getMaskSet().validPositions[i].match.optionality && IsEnclosedStatic(i) || opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts) === !1) || delete getMaskSet().validPositions[i]);
            for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition();) {
                for (; void 0 !== getMaskSet().validPositions[startPos];) startPos++;
                if (i < startPos && (i = startPos + 1), void 0 === getMaskSet().validPositions[i] && isMask(i)) i++; else {
                    var t = getTestTemplate(i);
                    needsValidation === !1 && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]),
                        getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i],
                        i++) : positionCanMatchDefinition(startPos, t.match.def) ? isValid(startPos, t.input || getPlaceholder(i), !0) !== !1 && (delete getMaskSet().validPositions[i],
                            i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;
                }
            }
            resetMaskSet(!0);
        }
        function determineTestTemplate(tests, guessNextBest) {
            for (var testPos, testPositions = tests, lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation].toString().split(",") : [], ndx = 0; ndx < testPositions.length && (testPos = testPositions[ndx],
                !(testPos.match && (opts.greedy && testPos.match.optionalQuantifier !== !0 || (testPos.match.optionality === !1 || testPos.match.newBlockMarker === !1) && testPos.match.optionalQuantifier !== !0) && (void 0 === lvTest.alternation || lvTest.alternation !== testPos.alternation || void 0 !== testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))) || guessNextBest === !0 && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++);
            return testPos;
        }
        function getTestTemplate(pos, ndxIntlzr, tstPs) {
            return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }
        function getTest(pos) {
            return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];
        }
        function positionCanMatchDefinition(pos, def) {
            for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && tests[tndx].match.def === def) {
                valid = !0;
                break;
            }
            return valid;
        }
        function getTests(pos, ndxIntlzr, tstPs) {
            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                function handleMatch(match, loopNdx, quantifierRecurse) {
                    function isFirstMatch(latestMatch, tokenGroup) {
                        var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                        return firstMatch || $.each(tokenGroup.matches, function (ndx, match) {
                            if (match.isQuantifier === !0 && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;
                        }), firstMatch;
                    }
                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                        var bestMatch, indexPos;
                        return (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function (ndx, lmnt) {
                            var alternation = void 0 !== targetAlternation ? targetAlternation : lmnt.alternation, ndxPos = void 0 !== lmnt.locator[alternation] ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                            (void 0 === indexPos || ndxPos < indexPos) && ndxPos !== -1 && (bestMatch = lmnt,
                                indexPos = ndxPos);
                        }), bestMatch ? bestMatch.locator.slice((void 0 !== targetAlternation ? targetAlternation : bestMatch.alternation) + 1) : void 0 !== targetAlternation ? resolveNdxInitializer(pos, alternateNdx) : void 0;
                    }
                    function staticCanMatchDefinition(source, target) {
                        return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);
                    }
                    if (testPos > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                    if (testPos === pos && void 0 === match.matches) return matches.push({
                        match: match,
                        locator: loopNdx.reverse(),
                        cd: cacheDependency
                    }), !0;
                    if (void 0 !== match.matches) {
                        if (match.isGroup && quantifierRecurse !== match) {
                            if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;
                        } else if (match.isOptional) {
                            var optionalToken = match;
                            if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                                if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;
                                insertStop = !0, testPos = pos;
                            }
                        } else if (match.isAlternator) {
                            var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                            if (altIndex === -1 || "string" == typeof altIndex) {
                                var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];
                                if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx);
                                for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                    if (amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(),
                                        match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) || match,
                                        match !== !0 && void 0 !== match && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {
                                        var ntndx = $.inArray(match, maskToken.matches) + 1;
                                        maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ntndx].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse),
                                            match && (altIndexArr.push(ntndx.toString()), $.each(matches, function (ndx, lmnt) {
                                                lmnt.alternation = loopNdx.length - 1;
                                            })));
                                    }
                                    maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                        var altMatch = maltMatches[ndx1], hasMatch = !1;
                                        altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                            var altMatch2 = malternateMatches[ndx2];
                                            if (("string" != typeof altIndex || $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) && (altMatch.match.def === altMatch2.match.def || staticCanMatchDefinition(altMatch, altMatch2))) {
                                                hasMatch = altMatch.match.nativeDef === altMatch2.match.nativeDef, altMatch.alternation == altMatch2.alternation && altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1 && (altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation],
                                                    altMatch2.alternation = altMatch.alternation, null == altMatch.match.fn && (altMatch2.na = altMatch2.na || altMatch.locator[altMatch.alternation].toString(),
                                                        altMatch2.na.indexOf(altMatch.locator[altMatch.alternation]) === -1 && (altMatch2.na = altMatch2.na + "," + altMatch.locator[altMatch.alternation])));
                                                break;
                                            }
                                        }
                                        hasMatch || malternateMatches.push(altMatch);
                                    }
                                }
                                "string" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function (lmnt, ndx) {
                                    if (isFinite(ndx)) {
                                        var mamatch, alternation = lmnt.alternation, altLocArr = lmnt.locator[alternation].toString().split(",");
                                        lmnt.locator[alternation] = void 0, lmnt.alternation = void 0;
                                        for (var alndx = 0; alndx < altLocArr.length; alndx++) mamatch = $.inArray(altLocArr[alndx], altIndexArr) !== -1,
                                            mamatch && (void 0 !== lmnt.locator[alternation] ? (lmnt.locator[alternation] += ",",
                                                lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]),
                                                lmnt.alternation = alternation);
                                        if (void 0 !== lmnt.locator[alternation]) return lmnt;
                                    }
                                })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0,
                                    ndxInitializer = ndxInitializerClone.slice();
                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
                            if (match) return !0;
                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                            var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                            if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup)) {
                                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1,
                                    isFirstMatch(latestMatch, tokenGroup)) {
                                    if (qndx > qt.quantifier.min - 1) {
                                        insertStop = !0, testPos = pos;
                                        break;
                                    }
                                    return !0;
                                }
                                return !0;
                            }
                        } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;
                    } else testPos++;
                }
                for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (maskToken.matches[tndx].isQuantifier !== !0) {
                    var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
                    if (match && testPos === pos) return match;
                    if (testPos > pos) break;
                }
            }
            function mergeLocators(tests) {
                var locator = [];
                return $.isArray(tests) || (tests = [tests]), tests.length > 0 && (void 0 === tests[0].alternation ? (locator = determineTestTemplate(tests.slice()).locator.slice(),
                    0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, function (ndx, tst) {
                        if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1 && (locator[i] += "," + tst.locator[i]);
                    })), locator;
            }
            function filterTests(tests) {
                return opts.keepStatic && pos > 0 && tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0) && tests[0].match.optionality !== !0 && tests[0].match.optionalQuantifier !== !0 && null === tests[0].match.fn && !/[0-9a-bA-Z]/.test(tests[0].match.def) ? [determineTestTemplate(tests)] : tests;
            }
            var latestMatch, maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
            if (pos > -1) {
                if (void 0 === ndxIntlzr) {
                    for (var test, previousPos = pos - 1; void 0 === (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) && previousPos > -1;) previousPos--;
                    void 0 !== test && previousPos > -1 && (ndxInitializer = mergeLocators(test), cacheDependency = ndxInitializer.join(""),
                        testPos = previousPos);
                }
                if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return filterTests(getMaskSet().tests[pos]);
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
                    if (match && testPos === pos || testPos > pos) break;
                }
            }
            return (0 === matches.length || insertStop) && matches.push({
                match: {
                    fn: null,
                    cardinality: 0,
                    optionality: !0,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                cd: cacheDependency
            }), void 0 !== ndxIntlzr && getMaskSet().tests[pos] ? filterTests($.extend(!0, [], matches)) : (getMaskSet().tests[pos] = $.extend(!0, [], matches),
                filterTests(getMaskSet().tests[pos]));
        }
        function getBufferTemplate() {
            return void 0 === getMaskSet()._buffer && (getMaskSet()._buffer = getMaskTemplate(!1, 1),
                void 0 === getMaskSet().buffer && getMaskSet()._buffer.slice()), getMaskSet()._buffer;
        }
        function getBuffer(noCache) {
            return void 0 !== getMaskSet().buffer && noCache !== !0 || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)),
                getMaskSet().buffer;
        }
        function refreshFromBuffer(start, end, buffer) {
            var i;
            if (start === !0) resetMaskSet(), start = 0, end = buffer.length; else for (i = start; i < end; i++) delete getMaskSet().validPositions[i];
            for (i = start; i < end; i++) resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter && isValid(i, buffer[i], !0, !0);
        }
        function casing(elem, test, pos) {
            switch (opts.casing || test.casing) {
                case "upper":
                    elem = elem.toUpperCase();
                    break;

                case "lower":
                    elem = elem.toLowerCase();
                    break;

                case "title":
                    var posBefore = getMaskSet().validPositions[pos - 1];
                    elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
            }
            return elem;
        }
        function checkAlternationMatch(altArr1, altArr2, na) {
            for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = void 0 !== na ? na.split(",") : [], i = 0; i < naArr.length; i++) (naNdx = altArr1.indexOf(naArr[i])) !== -1 && altArr1.splice(naNdx, 1);
            for (var alndx = 0; alndx < altArr1.length; alndx++) if ($.inArray(altArr1[alndx], altArrC) !== -1) {
                isMatch = !0;
                break;
            }
            return isMatch;
        }
        function isValid(pos, c, strict, fromSetValid, fromAlternate) {
            function isSelection(posObj) {
                var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end === 1 && opts.insertMode : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin === 1 && opts.insertMode;
                return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? "full" : selection;
            }
            function _isValid(position, c, strict) {
                var rslt = !1;
                return $.each(getTests(position), function (ndx, tst) {
                    for (var test = tst.match, loopend = c ? 1 : 0, chrs = "", i = test.cardinality; i > loopend; i--) chrs += getBufferElement(position - (i - 1));
                    if (c && (chrs += c), getBuffer(!0), rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                        c: getPlaceholder(position, test, !0) || test.def,
                        pos: position
                    }, rslt !== !1) {
                        var elem = void 0 !== rslt.c ? rslt.c : c;
                        elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem;
                        var validatedPos = position, possibleModifiedBuffer = getBuffer();
                        if (void 0 !== rslt.remove && ($.isArray(rslt.remove) || (rslt.remove = [rslt.remove]),
                            $.each(rslt.remove.sort(function (a, b) {
                                return b - a;
                            }), function (ndx, lmnt) {
                                stripValidPositions(lmnt, lmnt + 1, !0);
                            })), void 0 !== rslt.insert && ($.isArray(rslt.insert) || (rslt.insert = [rslt.insert]),
                                $.each(rslt.insert.sort(function (a, b) {
                                    return a - b;
                                }), function (ndx, lmnt) {
                                    isValid(lmnt.pos, lmnt.c, !0, fromSetValid);
                                })), rslt.refreshFromBuffer) {
                            var refresh = rslt.refreshFromBuffer;
                            if (strict = !0, refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, possibleModifiedBuffer),
                                void 0 === rslt.pos && void 0 === rslt.c) return rslt.pos = getLastValidPosition(),
                                    !1;
                            if (validatedPos = void 0 !== rslt.pos ? rslt.pos : position, validatedPos !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)),
                                !1;
                        } else if (rslt !== !0 && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos,
                            refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)),
                                !1;
                        return (rslt === !0 || void 0 !== rslt.pos || void 0 !== rslt.c) && (ndx > 0 && resetMaskSet(!0),
                            setValidPosition(validatedPos, $.extend({}, tst, {
                                input: casing(elem, test, validatedPos)
                            }), fromSetValid, isSelection(pos)) || (rslt = !1), !1);
                    }
                }), rslt;
            }
            function alternate(pos, c, strict) {
                var lastAlt, alternation, altPos, prevAltPos, i, validPos, altNdxs, decisionPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions), isValidRslt = !1, lAltPos = getLastValidPosition();
                for (prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--) if (altPos = getMaskSet().validPositions[lAltPos],
                    altPos && void 0 !== altPos.alternation) {
                    if (lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation,
                        prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                    prevAltPos = altPos;
                }
                if (void 0 !== alternation) {
                    decisionPos = parseInt(lastAlt);
                    var decisionTaker = void 0 !== prevAltPos.locator[prevAltPos.alternation || alternation] ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0];
                    decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]);
                    var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];
                    $.each(getTests(decisionPos, prevPos ? prevPos.locator : void 0, decisionPos - 1), function (ndx, test) {
                        altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
                        for (var mndx = 0; mndx < altNdxs.length; mndx++) {
                            var validInputs = [], staticInputsBeforePos = 0, staticInputsBeforePosAlternate = 0, verifyValidInput = !1;
                            if (decisionTaker < altNdxs[mndx] && (void 0 === test.na || $.inArray(altNdxs[mndx], test.na.split(",")) === -1)) {
                                getMaskSet().validPositions[decisionPos] = $.extend(!0, {}, test);
                                var possibilities = getMaskSet().validPositions[decisionPos].locator;
                                for (getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]),
                                    null == test.match.fn ? (possibilityPos.input !== test.match.def && (verifyValidInput = !0,
                                        possibilityPos.generatedInput !== !0 && validInputs.push(possibilityPos.input)),
                                        staticInputsBeforePosAlternate++, getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def),
                                        getMaskSet().validPositions[decisionPos].input = test.match.def) : getMaskSet().validPositions[decisionPos].input = possibilityPos.input,
                                    i = decisionPos + 1; i < getLastValidPosition(void 0, !0) + 1; i++) validPos = getMaskSet().validPositions[i],
                                        validPos && validPos.generatedInput !== !0 && /[0-9a-bA-Z]/.test(validPos.input) ? validInputs.push(validPos.input) : i < pos && staticInputsBeforePos++,
                                        delete getMaskSet().validPositions[i];
                                for (verifyValidInput && validInputs[0] === test.match.def && validInputs.shift(),
                                    resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0;) {
                                    var input = validInputs.shift();
                                    if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(void 0, !0) + 1, input, !1, fromSetValid, !0))) break;
                                }
                                if (isValidRslt) {
                                    getMaskSet().validPositions[decisionPos].locator = possibilities;
                                    var targetLvp = getLastValidPosition(pos) + 1;
                                    for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) validPos = getMaskSet().validPositions[i],
                                        (void 0 === validPos || null == validPos.match.fn) && i < pos + (staticInputsBeforePosAlternate - staticInputsBeforePos) && staticInputsBeforePosAlternate++;
                                    pos += staticInputsBeforePosAlternate - staticInputsBeforePos, isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);
                                }
                                if (isValidRslt) return !1;
                                resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone);
                            }
                        }
                    });
                }
                return isValidRslt;
            }
            function trackbackAlternations(originalPos, newPos) {
                var vp = getMaskSet().validPositions[newPos];
                if (vp) for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++) if (void 0 === getMaskSet().validPositions[ps] && !isMask(ps, !0)) {
                    var tests = getTests(ps).slice(), bestMatch = determineTestTemplate(tests, !0), equality = -1;
                    "" === tests[tests.length - 1].match.def && tests.pop(), $.each(tests, function (ndx, tst) {
                        for (var i = 0; i < tll; i++) {
                            if (void 0 === tst.locator[i] || !checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {
                                var targetAI = targetLocator[i], bestMatchAI = bestMatch.locator[i], tstAI = tst.locator[i];
                                targetAI - bestMatchAI > Math.abs(targetAI - tstAI) && (bestMatch = tst);
                                break;
                            }
                            equality < i && (equality = i, bestMatch = tst);
                        }
                    }), bestMatch = $.extend({}, bestMatch, {
                        input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                    }), bestMatch.generatedInput = !0, setValidPosition(ps, bestMatch, !0), getMaskSet().validPositions[newPos] = void 0,
                        _isValid(newPos, vp.input, !0);
                }
            }
            function setValidPosition(pos, validTest, fromSetValid, isSelection) {
                if (isSelection || opts.insertMode && void 0 !== getMaskSet().validPositions[pos] && void 0 === fromSetValid) {
                    var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), lvp = getLastValidPosition(void 0, !0);
                    for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];
                    getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                    var j, valid = !0, vps = getMaskSet().validPositions, needsValidation = !1, initialLength = getMaskSet().maskLength;
                    for (i = j = pos; i <= lvp; i++) {
                        var t = positionsClone[i];
                        if (void 0 !== t) for (var posMatch = j; posMatch < getMaskSet().maskLength && (null === t.match.fn && vps[i] && (vps[i].match.optionalQuantifier === !0 || vps[i].match.optionality === !0) || null != t.match.fn);) {
                            if (posMatch++, needsValidation === !1 && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]),
                                getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch),
                                j = posMatch, valid = !0; else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                                    var result = isValid(posMatch, t.input, !0, !0);
                                    valid = result !== !1, j = result.caret || result.insert ? getLastValidPosition() : posMatch,
                                        needsValidation = !0;
                                } else if (valid = t.generatedInput === !0, !valid && posMatch >= getMaskSet().maskLength - 1) break;
                            if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength),
                                valid) break;
                        }
                        if (!valid) break;
                    }
                    if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone),
                        resetMaskSet(!0), !1;
                } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                return resetMaskSet(!0), !0;
            }
            function fillMissingNonMask(maskPos) {
                for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--);
                var testTemplate, testsFromPos;
                for (pndx++; pndx < maskPos; pndx++) void 0 === getMaskSet().validPositions[pndx] && (opts.jitMasking === !1 || opts.jitMasking > pndx) && (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice(),
                    "" === testsFromPos[testsFromPos.length - 1].match.def && testsFromPos.pop(), testTemplate = determineTestTemplate(testsFromPos),
                    testTemplate && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && (result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, !0) || (null == testTemplate.match.fn ? testTemplate.match.def : "" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0),
                        result !== !1 && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0)));
            }
            strict = strict === !0;
            var maskPos = pos;
            void 0 !== pos.begin && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);
            var result = !1, positionsClone = $.extend(!0, {}, getMaskSet().validPositions);
            if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(void 0, Inputmask.keyCode.DELETE, pos),
                maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (result = _isValid(maskPos, c, strict),
                    (!strict || fromSetValid === !0) && result === !1)) {
                var currentPosValid = getMaskSet().validPositions[maskPos];
                if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                    if ((opts.insertMode || void 0 === getMaskSet().validPositions[seekNext(maskPos)]) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (result = _isValid(nPos, c, strict),
                        result !== !1) {
                        trackbackAlternations(maskPos, void 0 !== result.pos ? result.pos : nPos), maskPos = nPos;
                        break;
                    }
                } else result = {
                    caret: seekNext(maskPos)
                };
            }
            return result === !1 && opts.keepStatic && !strict && fromAlternate !== !0 && (result = alternate(maskPos, c, strict)),
                result === !0 && (result = {
                    pos: maskPos
                }), $.isFunction(opts.postValidation) && result !== !1 && !strict && fromSetValid !== !0 && (result = !!opts.postValidation(getBuffer(!0), result, opts) && result),
                void 0 === result.pos && (result.pos = maskPos), result === !1 && (resetMaskSet(!0),
                    getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;
        }
        function isMask(pos, strict) {
            var test;
            if (strict ? (test = getTestTemplate(pos).match, "" === test.def && (test = getTest(pos).match)) : test = getTest(pos).match,
                null != test.fn) return test.fn;
            if (strict !== !0 && pos > -1) {
                var tests = getTests(pos);
                return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
            }
            return !1;
        }
        function seekNext(pos, newBlock) {
            var maskL = getMaskSet().maskLength;
            if (pos >= maskL) return maskL;
            for (var position = pos; ++position < maskL && (newBlock === !0 && (getTest(position).match.newBlockMarker !== !0 || !isMask(position)) || newBlock !== !0 && !isMask(position)););
            return position;
        }
        function seekPrevious(pos, newBlock) {
            var tests, position = pos;
            if (position <= 0) return 0;
            for (; --position > 0 && (newBlock === !0 && getTest(position).match.newBlockMarker !== !0 || newBlock !== !0 && !isMask(position) && (tests = getTests(position),
                tests.length < 2 || 2 === tests.length && "" === tests[1].match.def)););
            return position;
        }
        function getBufferElement(position) {
            return void 0 === getMaskSet().validPositions[position] ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
        }
        function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
            if (event && $.isFunction(opts.onBeforeWrite)) {
                var result = opts.onBeforeWrite(event, buffer, caretPos, opts);
                if (result) {
                    if (result.refreshFromBuffer) {
                        var refresh = result.refreshFromBuffer;
                        refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, result.buffer || buffer),
                            buffer = getBuffer(!0);
                    }
                    void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos);
                }
            }
            input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type ? renderColorMask(input, buffer, caretPos) : caret(input, caretPos),
                triggerInputEvent === !0 && (skipInputEvent = !0, $(input).trigger("input"));
        }
        function getPlaceholder(pos, test, returnPL) {
            if (test = test || getTest(pos).match, void 0 !== test.placeholder || returnPL === !0) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
            if (null === test.fn) {
                if (pos > -1 && void 0 === getMaskSet().validPositions[pos]) {
                    var prevTest, tests = getTests(pos), staticAlternations = [];
                    if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (tests[i].match.optionality !== !0 && tests[i].match.optionalQuantifier !== !0 && (null === tests[i].match.fn || void 0 === prevTest || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts) !== !1) && (staticAlternations.push(tests[i]),
                        null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
                }
                return test.def;
            }
            return opts.placeholder.charAt(pos % opts.placeholder.length);
        }
        function checkVal(input, writeOut, strict, nptvl, initiatingEvent, stickyCaret) {
            function isTemplateMatch() {
                var isMatch = !1, charCodeNdx = getBufferTemplate().slice(initialNdx, seekNext(initialNdx)).join("").indexOf(charCodes);
                if (charCodeNdx !== -1 && !isMask(initialNdx)) {
                    isMatch = !0;
                    for (var bufferTemplateArr = getBufferTemplate().slice(initialNdx, initialNdx + charCodeNdx), i = 0; i < bufferTemplateArr.length; i++) if (" " !== bufferTemplateArr[i]) {
                        isMatch = !1;
                        break;
                    }
                }
                return isMatch;
            }
            var inputValue = nptvl.slice(), charCodes = "", initialNdx = 0, result = void 0;
            if (resetMaskSet(), getMaskSet().p = seekNext(-1), !strict) if (opts.autoUnmask !== !0) {
                var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length),
                    initialNdx = seekNext(initialNdx));
            } else initialNdx = seekNext(initialNdx);
            if ($.each(inputValue, function (ndx, charCode) {
                if (void 0 !== charCode) {
                    var keypress = new $.Event("keypress");
                    keypress.which = charCode.charCodeAt(0), charCodes += charCode;
                    var lvp = getLastValidPosition(void 0, !0), lvTest = getMaskSet().validPositions[lvp], nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : void 0, lvp);
                    if (!isTemplateMatch() || strict || opts.autoUnmask) {
                        var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;
                        result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, pos),
                            initialNdx = pos + 1, charCodes = "";
                    } else result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);
                    if (!strict && $.isFunction(opts.onBeforeWrite) && (result = opts.onBeforeWrite(keypress, getBuffer(), result.forwardPosition, opts),
                        result && result.refreshFromBuffer)) {
                        var refresh = result.refreshFromBuffer;
                        refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, result.buffer),
                            resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret);
                    }
                }
            }), writeOut) {
                var caretPos = void 0, lvp = getLastValidPosition();
                document.activeElement === input && (initiatingEvent || result) && (caretPos = caret(input).begin,
                    initiatingEvent && result === !1 && (caretPos = seekNext(getLastValidPosition(caretPos))),
                    result && stickyCaret !== !0 && (caretPos < lvp + 1 || lvp === -1) && (caretPos = opts.numericInput && void 0 === result.caret ? seekPrevious(result.forwardPosition) : result.forwardPosition)),
                    writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"));
            }
        }
        function unmaskedvalue(input) {
            if (input) {
                if (void 0 === input.inputmask) return input.value;
                input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);
            }
            var umValue = [], vps = getMaskSet().validPositions;
            for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
            var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
            if ($.isFunction(opts.onUnMask)) {
                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                unmaskedValue = opts.onUnMask(bufferValue, unmaskedValue, opts) || unmaskedValue;
            }
            return unmaskedValue;
        }
        function caret(input, begin, end, notranslate) {
            function translatePosition(pos) {
                if (notranslate !== !0 && isRTL && "number" == typeof pos && (!opts.greedy || "" !== opts.placeholder)) {
                    var bffrLght = getBuffer().join("").length;
                    pos = bffrLght - pos;
                }
                return pos;
            }
            var range;
            if ("number" != typeof begin) return input.setSelectionRange ? (begin = input.selectionStart,
                end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0),
                    range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset,
                        end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
                            begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length),
                            end = begin + range.text.length), {
                begin: translatePosition(begin),
                end: translatePosition(end)
            };
            begin = translatePosition(begin), end = translatePosition(end), end = "number" == typeof end ? end : begin;
            var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
            if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, mobile || opts.insertMode !== !1 || begin !== end || end++,
                input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end; else if (window.getSelection) {
                    if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
                        var textNode = document.createTextNode("");
                        input.appendChild(textNode);
                    }
                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length),
                        range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length),
                        range.collapse(!0);
                    var sel = window.getSelection();
                    sel.removeAllRanges(), sel.addRange(range);
                } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0),
                    range.moveEnd("character", end), range.moveStart("character", begin), range.select());
            renderColorMask(input, void 0, {
                begin: begin,
                end: end
            });
        }
        function determineLastRequiredPosition(returnDefinition) {
            var pos, testPos, buffer = getBuffer(), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0;
            for (pos = lvp + 1; pos < buffer.length; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1),
                ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
            var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
            for (pos = bl - 1; pos > lvp && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
            return returnDefinition ? {
                l: bl,
                def: positions[bl] ? positions[bl].match : void 0
            } : bl;
        }
        function clearOptionalTail(buffer) {
            for (var validPos, rl = determineLastRequiredPosition(), bl = buffer.length; rl < bl && !isMask(rl + 1) && (validPos = getTest(rl + 1)) && validPos.match.optionality !== !0 && validPos.match.optionalQuantifier !== !0;) rl++;
            for (; (validPos = getTest(rl - 1)) && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter;) rl--;
            return buffer.splice(rl), buffer;
        }
        function isComplete(buffer) {
            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
            if ("*" !== opts.repeat) {
                var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);
                if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                    complete = !0;
                    for (var i = 0; i <= aml; i++) {
                        var test = getTestTemplate(i).match;
                        if (null !== test.fn && void 0 === getMaskSet().validPositions[i] && test.optionality !== !0 && test.optionalQuantifier !== !0 || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {
                            complete = !1;
                            break;
                        }
                    }
                }
                return complete;
            }
        }
        function handleRemove(input, k, pos, strict) {
            function generalize() {
                if (opts.keepStatic) {
                    for (var validInputs = [], lastAlt = getLastValidPosition(-1, !0), positionsClone = $.extend(!0, {}, getMaskSet().validPositions), prevAltPos = getMaskSet().validPositions[lastAlt]; lastAlt >= 0; lastAlt--) {
                        var altPos = getMaskSet().validPositions[lastAlt];
                        if (altPos) {
                            if (altPos.generatedInput !== !0 && /[0-9a-bA-Z]/.test(altPos.input) && validInputs.push(altPos.input),
                                delete getMaskSet().validPositions[lastAlt], void 0 !== altPos.alternation && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) break;
                            prevAltPos = altPos;
                        }
                    }
                    if (lastAlt > -1) for (getMaskSet().p = seekNext(getLastValidPosition(-1, !0)); validInputs.length > 0;) {
                        var keypress = new $.Event("keypress");
                        keypress.which = validInputs.pop().charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p);
                    } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone);
                }
            }
            if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE),
                isRTL)) {
                var pend = pos.end;
                pos.end = pos.begin, pos.begin = pend;
            }
            k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || opts.insertMode === !1) ? (pos.begin = seekPrevious(pos.begin),
                void 0 === getMaskSet().validPositions[pos.begin] || getMaskSet().validPositions[pos.begin].input !== opts.groupSeparator && getMaskSet().validPositions[pos.begin].input !== opts.radixPoint || pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) ? pos.end + 1 : seekNext(pos.end) + 1,
                    void 0 === getMaskSet().validPositions[pos.begin] || getMaskSet().validPositions[pos.begin].input !== opts.groupSeparator && getMaskSet().validPositions[pos.begin].input !== opts.radixPoint || pos.end++),
                stripValidPositions(pos.begin, pos.end, !1, strict), strict !== !0 && generalize();
            var lvp = getLastValidPosition(pos.begin, !0);
            lvp < pos.begin ? getMaskSet().p = seekNext(lvp) : strict !== !0 && (getMaskSet().p = pos.begin);
        }
        function initializeColorMask(input) {
            function findCaretPos(clientx) {
                var caretPos, e = document.createElement("span");
                for (var style in computedStyle) isNaN(style) && style.indexOf("font") !== -1 && (e.style[style] = computedStyle[style]);
                e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing,
                    e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto",
                    e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);
                var itl, inputText = input.inputmask._valueGet(), previousWidth = 0;
                for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                    if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {
                        var offset1 = clientx - previousWidth, offset2 = e.offsetWidth - clientx;
                        e.innerHTML = inputText.charAt(caretPos), offset1 -= e.offsetWidth / 3, caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                        break;
                    }
                    previousWidth = e.offsetWidth;
                }
                return document.body.removeChild(e), caretPos;
            }
            function position() {
                colorMask.style.position = "absolute", colorMask.style.top = offset.top + "px",
                    colorMask.style.left = offset.left + "px", colorMask.style.width = parseInt(input.offsetWidth) - parseInt(computedStyle.paddingLeft) - parseInt(computedStyle.paddingRight) - parseInt(computedStyle.borderLeftWidth) - parseInt(computedStyle.borderRightWidth) + "px",
                    colorMask.style.height = parseInt(input.offsetHeight) - parseInt(computedStyle.paddingTop) - parseInt(computedStyle.paddingBottom) - parseInt(computedStyle.borderTopWidth) - parseInt(computedStyle.borderBottomWidth) + "px",
                    colorMask.style.lineHeight = colorMask.style.height, colorMask.style.zIndex = isNaN(computedStyle.zIndex) ? -1 : computedStyle.zIndex - 1,
                    colorMask.style.webkitAppearance = "textfield", colorMask.style.mozAppearance = "textfield",
                    colorMask.style.Appearance = "textfield";
            }
            var offset = $(input).position(), computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
            input.parentNode;
            colorMask = document.createElement("div"), document.body.appendChild(colorMask);
            for (var style in computedStyle) isNaN(style) && "cssText" !== style && style.indexOf("webkit") == -1 && (colorMask.style[style] = computedStyle[style]);
            input.style.backgroundColor = "transparent", input.style.color = "transparent",
                input.style.webkitAppearance = "caret", input.style.mozAppearance = "caret", input.style.Appearance = "caret",
                position(), $(window).on("resize", function (e) {
                    offset = $(input).position(), computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null),
                        position();
                }), $(input).on("click", function (e) {
                    return caret(input, findCaretPos(e.clientX)), EventHandlers.clickEvent.call(this, [e]);
                }), $(input).on("keydown", function (e) {
                    e.shiftKey || opts.insertMode === !1 || setTimeout(function () {
                        renderColorMask(input);
                    }, 0);
                });
        }
        function renderColorMask(input, buffer, caretPos) {
            function handleStatic() {
                isStatic || null !== test.fn && void 0 !== testPos.input ? isStatic && null !== test.fn && void 0 !== testPos.input && (isStatic = !1,
                    maskTemplate += "</span>") : (isStatic = !0, maskTemplate += "<span class='im-static''>");
            }
            if (void 0 !== colorMask) {
                buffer = buffer || getBuffer(), void 0 === caretPos ? caretPos = caret(input) : void 0 === caretPos.begin && (caretPos = {
                    begin: caretPos,
                    end: caretPos
                });
                var maskTemplate = "", isStatic = !1;
                if ("" != buffer) {
                    var ndxIntlzr, test, testPos, pos = 0, lvp = getLastValidPosition();
                    do pos === caretPos.begin && document.activeElement === input && (maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),
                        getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos],
                            test = testPos.match, ndxIntlzr = testPos.locator.slice(), handleStatic(), maskTemplate += testPos.input) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1),
                                test = testPos.match, ndxIntlzr = testPos.locator.slice(), (opts.jitMasking === !1 || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && (handleStatic(),
                                    maskTemplate += getPlaceholder(pos, test))), pos++; while ((void 0 === maxLength || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos);
                }
                colorMask.innerHTML = maskTemplate;
            }
        }
        function mask(elem) {
            function isElementTypeSupported(input, opts) {
                function patchValueProperty(npt) {
                    function patchValhook(type) {
                        if ($.valHooks && (void 0 === $.valHooks[type] || $.valHooks[type].inputmaskpatch !== !0)) {
                            var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
                                return elem.value;
                            }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
                                return elem.value = value, elem;
                            };
                            $.valHooks[type] = {
                                get: function (elem) {
                                    if (elem.inputmask) {
                                        if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                        var result = valhookGet(elem);
                                        return getLastValidPosition(void 0, void 0, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== !0 ? result : "";
                                    }
                                    return valhookGet(elem);
                                },
                                set: function (elem, value) {
                                    var result, $elem = $(elem);
                                    return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue"),
                                        result;
                                },
                                inputmaskpatch: !0
                            };
                        }
                    }
                    function getter() {
                        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition() !== -1 || opts.nullable !== !0 ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                    }
                    function setter(value) {
                        valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue");
                    }
                    function installNativeValueSetFallback(npt) {
                        EventRuler.on(npt, "mouseenter", function (event) {
                            var $input = $(this), input = this, value = input.inputmask._valueGet();
                            value !== getBuffer().join("") && $input.trigger("setvalue");
                        });
                    }
                    var valueGet, valueSet;
                    if (!npt.inputmask.__valueGet) {
                        if (opts.noValuePatching !== !0) {
                            if (Object.getOwnPropertyDescriptor) {
                                "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function (object) {
                                    return object.__proto__;
                                } : function (object) {
                                    return object.constructor.prototype;
                                });
                                var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
                                valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get,
                                    valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: !0
                                    })) : "INPUT" !== npt.tagName && (valueGet = function () {
                                        return this.textContent;
                                    }, valueSet = function (value) {
                                        this.textContent = value;
                                    }, Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: !0
                                    }));
                            } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"),
                                valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter),
                                npt.__defineSetter__("value", setter));
                            npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                        }
                        npt.inputmask._valueGet = function (overruleRTL) {
                            return isRTL && overruleRTL !== !0 ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                        }, npt.inputmask._valueSet = function (value, overruleRTL) {
                            valueSet.call(this.el, null === value || void 0 === value ? "" : overruleRTL !== !0 && isRTL ? value.split("").reverse().join("") : value);
                        }, void 0 === valueGet && (valueGet = function () {
                            return this.value;
                        }, valueSet = function (value) {
                            this.value = value;
                        }, patchValhook(npt.type), installNativeValueSetFallback(npt));
                    }
                }
                var elementType = input.getAttribute("type"), isSupported = "INPUT" === input.tagName && $.inArray(elementType, opts.supportsInputType) !== -1 || input.isContentEditable || "TEXTAREA" === input.tagName;
                if (!isSupported) if ("INPUT" === input.tagName) {
                    var el = document.createElement("input");
                    el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
                } else isSupported = "partial";
                return isSupported !== !1 && patchValueProperty(input), isSupported;
            }
            var isSupported = isElementTypeSupported(elem, opts);
            if (isSupported !== !1 && (el = elem, $el = $(el), ("rtl" === el.dir || opts.rightAlign) && (el.style.textAlign = "right"),
                ("rtl" === el.dir || opts.numericInput) && (el.dir = "ltr", el.removeAttribute("dir"),
                    el.inputmask.isRTL = !0, isRTL = !0), opts.colorMask === !0 && initializeColorMask(el),
                android && (el.hasOwnProperty("inputmode") && (el.inputmode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)),
                    "rtfm" === opts.androidHack && (opts.colorMask !== !0 && initializeColorMask(el),
                        el.type = "password")), EventRuler.off(el), isSupported === !0 && (EventRuler.on(el, "submit", EventHandlers.submitEvent),
                            EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent),
                            EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent),
                            EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), opts.colorMask !== !0 && EventRuler.on(el, "click", EventHandlers.clickEvent),
                            EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent),
                            EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent), EventRuler.on(el, "drop", EventHandlers.pasteEvent),
                            EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete),
                            EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared),
                            android && opts.inputEventOnly === !0 || (EventRuler.on(el, "keydown", EventHandlers.keydownEvent),
                                EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "compositionstart", $.noop),
                            EventRuler.on(el, "compositionupdate", $.noop), EventRuler.on(el, "compositionend", $.noop),
                            EventRuler.on(el, "keyup", $.noop), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent),
                            EventRuler.on(el, "beforeinput", $.noop)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent),
                getBufferTemplate(), "" !== el.inputmask._valueGet() || opts.clearMaskOnLostFocus === !1 || document.activeElement === el)) {
                var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(el.inputmask._valueGet(), opts) || el.inputmask._valueGet() : el.inputmask._valueGet();
                checkVal(el, !0, !1, initialValue.split(""));
                var buffer = getBuffer().slice();
                undoValue = buffer.join(""), isComplete(buffer) === !1 && opts.clearIncomplete && resetMaskSet(),
                    opts.clearMaskOnLostFocus && document.activeElement !== el && (getLastValidPosition() === -1 ? buffer = [] : clearOptionalTail(buffer)),
                    writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));
            }
        }
        maskset = maskset || this.maskset, opts = opts || this.opts;
        var undoValue, $el, maxLength, colorMask, valueBuffer, el = this.el, isRTL = this.isRTL, skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1, mouseEnter = !1, EventRuler = {
            on: function (input, eventName, eventHandler) {
                var ev = function (e) {
                    if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
                        var imOpts = $.data(this, "_inputmask_opts");
                        imOpts ? new Inputmask(imOpts).mask(this) : EventRuler.off(this);
                    } else {
                        if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || opts.tabThrough === !1 && e.keyCode === Inputmask.keyCode.TAB))) {
                            switch (e.type) {
                                case "input":
                                    if (skipInputEvent === !0) return skipInputEvent = !1, e.preventDefault();
                                    break;

                                case "keydown":
                                    skipKeyPressEvent = !1, skipInputEvent = !1;
                                    break;

                                case "keypress":
                                    if (skipKeyPressEvent === !0) return e.preventDefault();
                                    skipKeyPressEvent = !0;
                                    break;

                                case "click":
                                    if (iemobile || iphone) {
                                        var that = this, args = arguments;
                                        return setTimeout(function () {
                                            eventHandler.apply(that, args);
                                        }, 0), !1;
                                    }
                            }
                            var returnVal = eventHandler.apply(this, arguments);
                            return returnVal === !1 && (e.preventDefault(), e.stopPropagation()), returnVal;
                        }
                        e.preventDefault();
                    }
                };
                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev),
                    $.inArray(eventName, ["submit", "reset"]) !== -1 ? null != input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
            },
            off: function (input, event) {
                if (input.inputmask && input.inputmask.events) {
                    var events;
                    event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events,
                        $.each(events, function (eventName, evArr) {
                            for (; evArr.length > 0;) {
                                var ev = evArr.pop();
                                $.inArray(eventName, ["submit", "reset"]) !== -1 ? null != input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                            }
                            delete input.inputmask.events[eventName];
                        });
                }
            }
        }, EventHandlers = {
            keydownEvent: function (e) {
                function isInputEventSupported(eventName) {
                    var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
                    return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]),
                        el = null, isSupported;
                }
                var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) e.preventDefault(),
                    handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join("")),
                    input.inputmask._valueGet() === getBufferTemplate().join("") ? $input.trigger("cleared") : isComplete(getBuffer()) === !0 && $input.trigger("complete"); else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                        e.preventDefault();
                        var caretPos = seekNext(getLastValidPosition());
                        opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--,
                            caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                    } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(),
                        caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && e.altKey !== !0 ? (checkVal(input, !0, !1, undoValue.split("")),
                            $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? opts.tabThrough === !0 && k === Inputmask.keyCode.TAB ? (e.shiftKey === !0 ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)),
                                pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0),
                                    pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--),
                                pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || opts.insertMode === !1 && (k === Inputmask.keyCode.RIGHT ? setTimeout(function () {
                                    var caretPos = caret(input);
                                    caret(input, caretPos.begin);
                                }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function () {
                                    var caretPos = caret(input);
                                    caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
                                }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));
                opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = $.inArray(k, opts.ignorables) !== -1;
            },
            keypressEvent: function (e, checkval, writeOut, strict, ndx) {
                var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                if (!(checkval === !0 || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""),
                    setTimeout(function () {
                        $input.trigger("change");
                    }, 0)), !0;
                if (k) {
                    46 === k && e.shiftKey === !1 && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));
                    var forwardPosition, pos = checkval ? {
                        begin: ndx,
                        end: ndx
                    } : caret(input), c = String.fromCharCode(k);
                    getMaskSet().writeOutBuffer = !0;
                    var valResult = isValid(pos, c, strict);
                    if (valResult !== !1 && (resetMaskSet(!0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos),
                        getMaskSet().p = forwardPosition), writeOut !== !1) {
                        var self = this;
                        if (setTimeout(function () {
                            opts.onKeyValidation.call(self, k, valResult, opts);
                        }, 0), getMaskSet().writeOutBuffer && valResult !== !1) {
                            var buffer = getBuffer();
                            writeBuffer(input, buffer, opts.numericInput && void 0 === valResult.caret ? seekPrevious(forwardPosition) : forwardPosition, e, checkval !== !0),
                                checkval !== !0 && setTimeout(function () {
                                    isComplete(buffer) === !0 && $input.trigger("complete");
                                }, 0);
                        }
                    }
                    if (e.preventDefault(), checkval) return valResult.forwardPosition = forwardPosition,
                        valResult;
                }
            },
            pasteEvent: function (e) {
                var tempValue, input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(!0), caretPos = caret(input);
                isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""),
                    valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""),
                    isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue),
                    window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                    if (!ev.clipboardData || !ev.clipboardData.getData) return !0;
                    inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                }
                var pasteValue = inputValue;
                if ($.isFunction(opts.onBeforePaste)) {
                    if (pasteValue = opts.onBeforePaste(inputValue, opts), pasteValue === !1) return e.preventDefault();
                    pasteValue || (pasteValue = inputValue);
                }
                return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split("")),
                    writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")),
                    isComplete(getBuffer()) === !0 && $input.trigger("complete"), e.preventDefault();
            },
            inputFallBackEvent: function (e) {
                var input = this, inputValue = input.inputmask._valueGet();
                if (getBuffer().join("") !== inputValue) {
                    var caretPos = caret(input);
                    if (inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), ""),
                        iemobile) {
                        var inputChar = inputValue.replace(getBuffer().join(""), "");
                        if (1 === inputChar.length) {
                            var keypress = new $.Event("keypress");
                            return keypress.which = inputChar.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1),
                                !1;
                        }
                    }
                    if (caretPos.begin > inputValue.length && (caret(input, inputValue.length), caretPos = caret(input)),
                        getBuffer().length - inputValue.length !== 1 || inputValue.charAt(caretPos.begin) === getBuffer()[caretPos.begin] || inputValue.charAt(caretPos.begin + 1) === getBuffer()[caretPos.begin] || isMask(caretPos.begin)) {
                        for (var lvp = getLastValidPosition() + 1, bufferTemplate = getBufferTemplate().join(""); null === inputValue.match(Inputmask.escapeRegex(bufferTemplate) + "$");) bufferTemplate = bufferTemplate.slice(1);
                        inputValue = inputValue.replace(bufferTemplate, ""), inputValue = inputValue.split(""),
                            checkVal(input, !0, !1, inputValue, e, caretPos.begin < lvp), isComplete(getBuffer()) === !0 && $(input).trigger("complete");
                    } else e.keyCode = Inputmask.keyCode.BACKSPACE, EventHandlers.keydownEvent.call(input, e);
                    e.preventDefault();
                }
            },
            setValueEvent: function (e) {
                this.inputmask.refreshValue = !1;
                var input = this, value = input.inputmask._valueGet();
                checkVal(input, !0, !1, ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(value, opts) || value : value).split("")),
                    undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && input.inputmask._valueSet("");
            },
            focusEvent: function (e) {
                var input = this, nptValue = input.inputmask._valueGet();
                opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : mouseEnter === !1 && caret(input, seekNext(getLastValidPosition()))),
                    opts.positionCaretOnTab === !0 && EventHandlers.clickEvent.apply(input, [e, !0]),
                    undoValue = getBuffer().join("");
            },
            mouseleaveEvent: function (e) {
                var input = this;
                if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {
                    var buffer = getBuffer().slice(), nptValue = input.inputmask._valueGet();
                    nptValue !== input.getAttribute("placeholder") && "" !== nptValue && (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer),
                        writeBuffer(input, buffer));
                }
            },
            clickEvent: function (e, tabbed) {
                function doRadixFocus(clickPos) {
                    if ("" !== opts.radixPoint) {
                        var vps = getMaskSet().validPositions;
                        if (void 0 === vps[clickPos] || vps[clickPos].input === getPlaceholder(clickPos)) {
                            if (clickPos < seekNext(-1)) return !0;
                            var radixPos = $.inArray(opts.radixPoint, getBuffer());
                            if (radixPos !== -1) {
                                for (var vp in vps) if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                return !0;
                            }
                        }
                    }
                    return !1;
                }
                var input = this;
                setTimeout(function () {
                    if (document.activeElement === input) {
                        var selectedCaret = caret(input);
                        if (tabbed && (selectedCaret.begin = selectedCaret.end), selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {
                            case "none":
                                break;

                            case "radixFocus":
                                if (doRadixFocus(selectedCaret.begin)) {
                                    var radixPos = $.inArray(opts.radixPoint, getBuffer().join(""));
                                    caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                    break;
                                }

                            default:
                                var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(lvclickPosition);
                                if (clickPosition < lastPosition) caret(input, isMask(clickPosition) || isMask(clickPosition - 1) ? clickPosition : seekNext(clickPosition)); else {
                                    var placeholder = getPlaceholder(lastPosition);
                                    ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && getTest(lastPosition).match.optionalQuantifier !== !0 || !isMask(lastPosition) && getTest(lastPosition).match.def === placeholder) && (lastPosition = seekNext(lastPosition)),
                                        caret(input, lastPosition);
                                }
                        }
                    }
                }, 0);
            },
            dblclickEvent: function (e) {
                var input = this;
                setTimeout(function () {
                    caret(input, 0, seekNext(getLastValidPosition()));
                }, 0);
            },
            cutEvent: function (e) {
                var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e, clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")),
                    document.execCommand && document.execCommand("copy"), handleRemove(input, Inputmask.keyCode.DELETE, pos),
                    writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join("")),
                    input.inputmask._valueGet() === getBufferTemplate().join("") && $input.trigger("cleared");
            },
            blurEvent: function (e) {
                var $input = $(this), input = this;
                if (input.inputmask) {
                    var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                    undoValue !== buffer.join("") && setTimeout(function () {
                        $input.trigger("change"), undoValue = buffer.join("");
                    }, 0), "" !== nptValue && (opts.clearMaskOnLostFocus && (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)),
                        isComplete(buffer) === !1 && (setTimeout(function () {
                            $input.trigger("incomplete");
                        }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())),
                        writeBuffer(input, buffer, void 0, e));
                }
            },
            mouseenterEvent: function (e) {
                var input = this;
                mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join("") && writeBuffer(input, getBuffer());
            },
            submitEvent: function (e) {
                undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""),
                    opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0),
                        setTimeout(function () {
                            writeBuffer(el, getBuffer());
                        }, 0));
            },
            resetEvent: function (e) {
                el.inputmask.refreshValue = !0, setTimeout(function () {
                    $el.trigger("setvalue");
                }, 0);
            }
        };
        if (void 0 !== actionObj) switch (actionObj.action) {
            case "isComplete":
                return el = actionObj.el, isComplete(getBuffer());

            case "unmaskedvalue":
                return void 0 !== el && void 0 === actionObj.value || (valueBuffer = actionObj.value,
                    valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(valueBuffer, opts) || valueBuffer : valueBuffer).split(""),
                    checkVal(void 0, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite(void 0, getBuffer(), 0, opts)),
                    unmaskedvalue(el);

            case "mask":
                mask(el);
                break;

            case "format":
                return valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(actionObj.value, opts) || actionObj.value : actionObj.value).split(""),
                    checkVal(void 0, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite(void 0, getBuffer(), 0, opts),
                    actionObj.metadata ? {
                        value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                        metadata: maskScope.call(this, {
                            action: "getmetadata"
                        }, maskset, opts)
                    } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

            case "isValid":
                actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal(void 0, !1, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join("");
                for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--);
                return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");

            case "getemptymask":
                return getBufferTemplate().join("");

            case "remove":
                if (el) {
                    $el = $(el), el.inputmask._valueSet(unmaskedvalue(el)), EventRuler.off(el);
                    var valueProperty;
                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value"),
                        valueProperty && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                            get: el.inputmask.__valueGet,
                            set: el.inputmask.__valueSet,
                            configurable: !0
                        })) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet),
                            el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = void 0;
                }
                return el;

            case "getmetadata":
                if ($.isArray(maskset.metadata)) {
                    var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                    return $.each(maskset.metadata, function (ndx, mtdt) {
                        if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
                    }), maskTarget;
                }
                return maskset.metadata;
        }
    }
    var ua = navigator.userAgent, mobile = /mobile/i.test(ua), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile, android = /android/i.test(ua) && !iemobile;
    return Inputmask.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            quantifiermarker: {
                start: "{",
                end: "}"
            },
            groupmarker: {
                start: "(",
                end: ")"
            },
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            oncomplete: $.noop,
            onincomplete: $.noop,
            oncleared: $.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: $.noop,
            onBeforeMask: null,
            onBeforePaste: function (pastedValue, opts) {
                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(pastedValue, opts) : pastedValue;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: $.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            radixPointDefinitionSymbol: void 0,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "password"],
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            canClearPosition: $.noop,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            androidHack: !1
        },
        definitions: {
            "9": {
                validator: "[0-9]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                cardinality: 1
            }
        },
        aliases: {},
        masksCache: {},
        mask: function (elems) {
            function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                function importOption(option, optionData) {
                    optionData = void 0 !== optionData ? optionData : npt.getAttribute(dataAttribute + "-" + option),
                        null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)),
                            userOptions[option] = optionData);
                }
                var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);
                if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(new RegExp("'", "g"), '"'),
                    dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) {
                    optionData = void 0;
                    for (p in dataoptions) if ("alias" === p.toLowerCase()) {
                        optionData = dataoptions[p];
                        break;
                    }
                }
                importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);
                for (option in opts) {
                    if (dataoptions) {
                        optionData = void 0;
                        for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                            optionData = dataoptions[p];
                            break;
                        }
                    }
                    importOption(option, optionData);
                }
                return $.extend(!0, opts, userOptions), opts;
            }
            var that = this;
            return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)),
                elems = elems.nodeName ? [elems] : elems, $.each(elems, function (ndx, el) {
                    var scopedOpts = $.extend(!0, {}, that.opts);
                    importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute);
                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                    void 0 !== maskset && (void 0 !== el.inputmask && el.inputmask.remove(), el.inputmask = new Inputmask((void 0), (void 0), (!0)),
                        el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions),
                        el.inputmask.isRTL = that.isRTL, el.inputmask.el = el, el.inputmask.maskset = maskset,
                        $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
                            action: "mask"
                        }));
                }), elems && elems[0] ? elems[0].inputmask || this : this;
        },
        option: function (options, noremask) {
            return "string" == typeof options ? this.opts[options] : "object" == typeof options ? ($.extend(this.userOptions, options),
                this.el && noremask !== !0 && this.mask(this.el), this) : void 0;
        },
        unmaskedvalue: function (value) {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "unmaskedvalue",
                    value: value
                });
        },
        remove: function () {
            return maskScope.call(this, {
                action: "remove"
            });
        },
        getemptymask: function () {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "getemptymask"
                });
        },
        hasMaskedValue: function () {
            return !this.opts.autoUnmask;
        },
        isComplete: function () {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "isComplete"
                });
        },
        getmetadata: function () {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "getmetadata"
                });
        },
        isValid: function (value) {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "isValid",
                    value: value
                });
        },
        format: function (value, metadata) {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache),
                maskScope.call(this, {
                    action: "format",
                    value: value,
                    metadata: metadata
                });
        },
        analyseMask: function (mask, opts) {
            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [], this.openGroup = isGroup || !1, this.isGroup = isGroup || !1,
                    this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1,
                    this.quantifier = {
                        min: 1,
                        max: 1
                    };
            }
            function insertTestDefinition(mtoken, element, position) {
                var maskdef = (opts.definitions ? opts.definitions[element] : void 0) || Inputmask.prototype.definitions[element];
                position = void 0 !== position ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (maskdef && !escaped) {
                    for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {
                        var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator.validator, cardinality = prevalidator.cardinality;
                        mtoken.matches.splice(position++, 0, {
                            fn: validator ? "string" == typeof validator ? new RegExp(validator) : new function () {
                                this.test = validator;
                            }() : new RegExp("."),
                            cardinality: cardinality ? cardinality : 1,
                            optionality: mtoken.isOptional,
                            newBlockMarker: void 0 === prevMatch || prevMatch.def !== (maskdef.definitionSymbol || element),
                            casing: maskdef.casing,
                            def: maskdef.definitionSymbol || element,
                            placeholder: maskdef.placeholder,
                            nativeDef: element
                        }), prevMatch = mtoken.matches[position - 1];
                    }
                    mtoken.matches.splice(position++, 0, {
                        fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator) : new function () {
                            this.test = maskdef.validator;
                        }() : new RegExp("."),
                        cardinality: maskdef.cardinality,
                        optionality: mtoken.isOptional,
                        newBlockMarker: void 0 === prevMatch || prevMatch.def !== (maskdef.definitionSymbol || element),
                        casing: maskdef.casing,
                        def: maskdef.definitionSymbol || element,
                        placeholder: maskdef.placeholder,
                        nativeDef: element
                    });
                } else mtoken.matches.splice(position++, 0, {
                    fn: null,
                    cardinality: 0,
                    optionality: mtoken.isOptional,
                    newBlockMarker: void 0 === prevMatch || prevMatch.def !== element,
                    casing: null,
                    def: opts.staticDefinitionSymbol || element,
                    placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
                    nativeDef: element
                }), escaped = !1;
            }
            function verifyGroupMarker(maskToken) {
                maskToken && maskToken.matches && $.each(maskToken.matches, function (ndx, token) {
                    var nextToken = maskToken.matches[ndx + 1];
                    (void 0 === nextToken || void 0 === nextToken.matches || nextToken.isQuantifier === !1) && token && token.isGroup && (token.isGroup = !1,
                        insertTestDefinition(token, opts.groupmarker.start, 0), token.openGroup !== !0 && insertTestDefinition(token, opts.groupmarker.end)),
                        verifyGroupMarker(token);
                });
            }
            function defaultCase() {
                if (openenings.length > 0) {
                    if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m),
                        currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                        openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1],
                            currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                    }
                } else insertTestDefinition(currentToken, m);
            }
            function reverseTokens(maskToken) {
                function reverseStatic(st) {
                    return st === opts.optionalmarker.start ? st = opts.optionalmarker.end : st === opts.optionalmarker.end ? st = opts.optionalmarker.start : st === opts.groupmarker.start ? st = opts.groupmarker.end : st === opts.groupmarker.end && (st = opts.groupmarker.start),
                        st;
                }
                maskToken.matches = maskToken.matches.reverse();
                for (var match in maskToken.matches) if (maskToken.matches.hasOwnProperty(match)) {
                    var intMatch = parseInt(match);
                    if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                        var qt = maskToken.matches[match];
                        maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                    }
                    void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
                }
                return maskToken;
            }
            for (var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken, tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = []; match = tokenizer.exec(mask);) if (m = match[0],
                escaped) defaultCase(); else switch (m.charAt(0)) {
                    case opts.escapeChar:
                        escaped = !0;
                        break;

                    case opts.optionalmarker.end:
                    case opts.groupmarker.end:
                        if (openingToken = openenings.pop(), openingToken.openGroup = !1, void 0 !== openingToken) if (openenings.length > 0) {
                            if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken),
                                currentOpeningToken.isAlternator) {
                                alternator = openenings.pop();
                                for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                                openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1],
                                    currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                            }
                        } else currentToken.matches.push(openingToken); else defaultCase();
                        break;

                    case opts.optionalmarker.start:
                        openenings.push(new MaskToken((!1), (!0)));
                        break;

                    case opts.groupmarker.start:
                        openenings.push(new MaskToken((!0)));
                        break;

                    case opts.quantifiermarker.start:
                        var quantifier = new MaskToken((!1), (!1), (!0));
                        m = m.replace(/[{}]/g, "");
                        var mq = m.split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                        if ("*" !== mq1 && "+" !== mq1 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                            min: mq0,
                            max: mq1
                        }, openenings.length > 0) {
                            var matches = openenings[openenings.length - 1].matches;
                            match = matches.pop(), match.isGroup || (groupToken = new MaskToken((!0)), groupToken.matches.push(match),
                                match = groupToken), matches.push(match), matches.push(quantifier);
                        } else match = currentToken.matches.pop(), match.isGroup || (groupToken = new MaskToken((!0)),
                            groupToken.matches.push(match), match = groupToken), currentToken.matches.push(match),
                            currentToken.matches.push(quantifier);
                        break;

                    case opts.alternatormarker:
                        openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1],
                            lastMatch = currentOpeningToken.matches.pop()) : lastMatch = currentToken.matches.pop(),
                            lastMatch.isAlternator ? openenings.push(lastMatch) : (alternator = new MaskToken((!1), (!1), (!1), (!0)),
                                alternator.matches.push(lastMatch), openenings.push(alternator));
                        break;

                    default:
                        defaultCase();
                }
            for (; openenings.length > 0;) openingToken = openenings.pop(), currentToken.matches.push(openingToken);
            return currentToken.matches.length > 0 && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)),
                opts.numericInput && reverseTokens(maskTokens[0]), maskTokens;
        }
    }, Inputmask.extendDefaults = function (options) {
        $.extend(!0, Inputmask.prototype.defaults, options);
    }, Inputmask.extendDefinitions = function (definition) {
        $.extend(!0, Inputmask.prototype.definitions, definition);
    }, Inputmask.extendAliases = function (alias) {
        $.extend(!0, Inputmask.prototype.aliases, alias);
    }, Inputmask.format = function (value, options, metadata) {
        return Inputmask(options).format(value, metadata);
    }, Inputmask.unmask = function (value, options) {
        return Inputmask(options).unmaskedvalue(value);
    }, Inputmask.isValid = function (value, options) {
        return Inputmask(options).isValid(value);
    }, Inputmask.remove = function (elems) {
        $.each(elems, function (ndx, el) {
            el.inputmask && el.inputmask.remove();
        });
    }, Inputmask.escapeRegex = function (str) {
        var specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
        return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
    }, Inputmask.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
    }, window.Inputmask = Inputmask, Inputmask;
}(jQuery), function ($, Inputmask) {
    return void 0 === $.fn.inputmask && ($.fn.inputmask = function (fn, options) {
        var nptmask, input = this[0];
        if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
            case "unmaskedvalue":
                return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

            case "remove":
                return this.each(function () {
                    this.inputmask && this.inputmask.remove();
                });

            case "getemptymask":
                return input && input.inputmask ? input.inputmask.getemptymask() : "";

            case "hasMaskedValue":
                return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();

            case "isComplete":
                return !input || !input.inputmask || input.inputmask.isComplete();

            case "getmetadata":
                return input && input.inputmask ? input.inputmask.getmetadata() : void 0;

            case "setvalue":
                $(input).val(options), input && void 0 === input.inputmask && $(input).triggerHandler("setvalue");
                break;

            case "option":
                if ("string" != typeof options) return this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(options);
                });
                if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
                break;

            default:
                return options.alias = fn, nptmask = new Inputmask(options), this.each(function () {
                    nptmask.mask(this);
                });
        } else {
            if ("object" == typeof fn) return nptmask = new Inputmask(fn), void 0 === fn.mask && void 0 === fn.alias ? this.each(function () {
                return void 0 !== this.inputmask ? this.inputmask.option(fn) : void nptmask.mask(this);
            }) : this.each(function () {
                nptmask.mask(this);
            });
            if (void 0 === fn) return this.each(function () {
                nptmask = new Inputmask(options), nptmask.mask(this);
            });
        }
    }), $.fn.inputmask;
}(jQuery, Inputmask), function ($, Inputmask) { }(jQuery, Inputmask), function ($, Inputmask) {
    function isLeapYear(year) {
        return isNaN(year) || 29 === new Date(year, 2, 0).getDate();
    }
    return Inputmask.extendAliases({
        "dd/mm/yyyy": {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"),
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                val2pre: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])");
                },
                val2: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))");
                }
            },
            leapday: "29/02/",
            separator: "/",
            yearrange: {
                minyear: 1900,
                maxyear: 2099
            },
            isInYearRange: function (chrs, minyear, maxyear) {
                if (isNaN(chrs)) return !1;
                var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))), enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));
                return !isNaN(enteredyear) && (minyear <= enteredyear && enteredyear <= maxyear) || !isNaN(enteredyear2) && (minyear <= enteredyear2 && enteredyear2 <= maxyear);
            },
            determinebaseyear: function (minyear, maxyear, hint) {
                var currentyear = new Date().getFullYear();
                if (minyear > currentyear) return minyear;
                if (maxyear < currentyear) {
                    for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxyear < maxYearPrefix + hint;) maxYearPrefix--;
                    var maxxYear = maxYearPrefix + maxYearPostfix;
                    return minyear > maxxYear ? minyear : maxxYear;
                }
                if (minyear <= currentyear && currentyear <= maxyear) {
                    for (var currentYearPrefix = currentyear.toString().slice(0, 2); maxyear < currentYearPrefix + hint;) currentYearPrefix--;
                    var currentYearAndHint = currentYearPrefix + hint;
                    return currentYearAndHint < minyear ? minyear : currentYearAndHint;
                }
                return currentyear;
            },
            onKeyDown: function (e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString()),
                        $input.trigger("setvalue");
                }
            },
            getFrontValue: function (mask, buffer, opts) {
                for (var start = 0, length = 0, i = 0; i < mask.length && "2" !== mask.charAt(i); i++) {
                    var definition = opts.definitions[mask.charAt(i)];
                    definition ? (start += length, length = definition.cardinality) : length++;
                }
                return buffer.join("").substr(start, length);
            },
            postValidation: function (buffer, currentResult, opts) {
                var dayMonthValue, year, bufferStr = buffer.join("");
                return 0 === opts.mask.indexOf("y") ? (year = bufferStr.substr(0, 4), dayMonthValue = bufferStr.substr(4, 11)) : (year = bufferStr.substr(6, 11),
                    dayMonthValue = bufferStr.substr(0, 6)), currentResult && (dayMonthValue !== opts.leapday || isLeapYear(year));
            },
            definitions: {
                "1": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.regex.val1.test(chrs);
                        return strict || isValid || chrs.charAt(1) !== opts.separator && "-./".indexOf(chrs.charAt(1)) === -1 || !(isValid = opts.regex.val1.test("0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0",
                        {
                            refreshFromBuffer: {
                                start: pos - 1,
                                end: pos
                            },
                            pos: pos,
                            c: chrs.charAt(0)
                        });
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, maskset, pos, strict, opts) {
                            var pchrs = chrs;
                            isNaN(maskset.buffer[pos + 1]) || (pchrs += maskset.buffer[pos + 1]);
                            var isValid = 1 === pchrs.length ? opts.regex.val1pre.test(pchrs) : opts.regex.val1.test(pchrs);
                            if (!strict && !isValid) {
                                if (isValid = opts.regex.val1.test(chrs + "0")) return maskset.buffer[pos] = chrs,
                                    maskset.buffer[++pos] = "0", {
                                    pos: pos,
                                    c: "0"
                                };
                                if (isValid = opts.regex.val1.test("0" + chrs)) return maskset.buffer[pos] = "0",
                                    pos++, {
                                    pos: pos
                                };
                            }
                            return isValid;
                        },
                        cardinality: 1
                    }]
                },
                "2": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                        frontValue.indexOf(opts.placeholder[0]) !== -1 && (frontValue = "01" + opts.separator);
                        var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                        return strict || isValid || chrs.charAt(1) !== opts.separator && "-./".indexOf(chrs.charAt(1)) === -1 || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0",
                        {
                            refreshFromBuffer: {
                                start: pos - 1,
                                end: pos
                            },
                            pos: pos,
                            c: chrs.charAt(0)
                        });
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, maskset, pos, strict, opts) {
                            isNaN(maskset.buffer[pos + 1]) || (chrs += maskset.buffer[pos + 1]);
                            var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                            frontValue.indexOf(opts.placeholder[0]) !== -1 && (frontValue = "01" + opts.separator);
                            var isValid = 1 === chrs.length ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);
                            return strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (maskset.buffer[pos] = "0",
                                pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    }]
                },
                y: {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                    },
                    cardinality: 4,
                    prevalidator: [{
                        validator: function (chrs, maskset, pos, strict, opts) {
                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (!strict && !isValid) {
                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);
                                if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0),
                                {
                                    pos: pos
                                };
                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2),
                                    isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0),
                                        maskset.buffer[pos++] = yearPrefix.charAt(1), {
                                        pos: pos
                                    };
                            }
                            return isValid;
                        },
                        cardinality: 1
                    }, {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (!strict && !isValid) {
                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);
                                if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(1),
                                {
                                    pos: pos
                                };
                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2),
                                    isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos - 1] = yearPrefix.charAt(0),
                                        maskset.buffer[pos++] = yearPrefix.charAt(1), maskset.buffer[pos++] = chrs.charAt(0),
                                    {
                                        refreshFromBuffer: {
                                            start: pos - 3,
                                            end: pos
                                        },
                                        pos: pos
                                    };
                            }
                            return isValid;
                        },
                        cardinality: 2
                    }, {
                        validator: function (chrs, maskset, pos, strict, opts) {
                            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        },
                        cardinality: 3
                    }]
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        "mm/dd/yyyy": {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy",
            regex: {
                val2pre: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                },
                val2: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function (e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()),
                        $input.trigger("setvalue");
                }
            }
        },
        "yyyy/mm/dd": {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyDown: function (e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString()),
                        $input.trigger("setvalue");
                }
            }
        },
        "dd.mm.yyyy": {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: ".",
            alias: "dd/mm/yyyy"
        },
        "dd-mm-yyyy": {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: "-",
            alias: "dd/mm/yyyy"
        },
        "mm.dd.yyyy": {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: ".",
            alias: "mm/dd/yyyy"
        },
        "mm-dd-yyyy": {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: "-",
            alias: "mm/dd/yyyy"
        },
        "yyyy.mm.dd": {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: ".",
            alias: "yyyy/mm/dd"
        },
        "yyyy-mm-dd": {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: "-",
            alias: "yyyy/mm/dd"
        },
        datetime: {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"),
                hrs24: new RegExp("2[0-4]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-4]"),
                ampm: new RegExp("^[a|p|A|P][m|M]"),
                mspre: new RegExp("[0-5]"),
                ms: new RegExp("[0-5][0-9]")
            },
            timeseparator: ":",
            hourFormat: "24",
            definitions: {
                h: {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        if ("24" === opts.hourFormat && 24 === parseInt(chrs, 10)) return maskset.buffer[pos - 1] = "0",
                            maskset.buffer[pos] = "0", {
                            refreshFromBuffer: {
                                start: pos - 1,
                                end: pos
                            },
                            c: "0"
                        };
                        var isValid = opts.regex.hrs.test(chrs);
                        if (!strict && !isValid && (chrs.charAt(1) === opts.timeseparator || "-.:".indexOf(chrs.charAt(1)) !== -1) && (isValid = opts.regex.hrs.test("0" + chrs.charAt(0)))) return maskset.buffer[pos - 1] = "0",
                            maskset.buffer[pos] = chrs.charAt(0), pos++, {
                            refreshFromBuffer: {
                                start: pos - 2,
                                end: pos
                            },
                            pos: pos,
                            c: opts.timeseparator
                        };
                        if (isValid && "24" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {
                            var tmp = parseInt(chrs, 10);
                            return 24 === tmp ? (maskset.buffer[pos + 5] = "a", maskset.buffer[pos + 6] = "m") : (maskset.buffer[pos + 5] = "p",
                                maskset.buffer[pos + 6] = "m"), tmp -= 12, tmp < 10 ? (maskset.buffer[pos] = tmp.toString(),
                                    maskset.buffer[pos - 1] = "0") : (maskset.buffer[pos] = tmp.toString().charAt(1),
                                        maskset.buffer[pos - 1] = tmp.toString().charAt(0)), {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos + 6
                                },
                                c: maskset.buffer[pos]
                            };
                        }
                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, maskset, pos, strict, opts) {
                            var isValid = opts.regex.hrspre.test(chrs);
                            return strict || isValid || !(isValid = opts.regex.hrs.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0",
                                pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    }]
                },
                s: {
                    validator: "[0-5][0-9]",
                    cardinality: 2,
                    prevalidator: [{
                        validator: function (chrs, maskset, pos, strict, opts) {
                            var isValid = opts.regex.mspre.test(chrs);
                            return strict || isValid || !(isValid = opts.regex.ms.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0",
                                pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    }]
                },
                t: {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        return opts.regex.ampm.test(chrs + "m");
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        datetime12: {
            mask: "1/2/y h:s t\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "mm/dd/yyyy hh:mm xm": {
            mask: "1/2/y h:s t\\m",
            placeholder: "mm/dd/yyyy hh:mm xm",
            alias: "datetime12",
            regex: {
                val2pre: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                },
                val2: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function (e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()),
                        $input.trigger("setvalue");
                }
            }
        },
        "hh:mm t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "h:s t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "hh:mm:ss": {
            mask: "h:s:s",
            placeholder: "hh:mm:ss",
            alias: "datetime",
            autoUnmask: !1
        },
        "hh:mm": {
            mask: "h:s",
            placeholder: "hh:mm",
            alias: "datetime",
            autoUnmask: !1
        },
        date: {
            alias: "dd/mm/yyyy"
        },
        "mm/yyyy": {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: "/",
            alias: "mm/dd/yyyy"
        },
        shamsi: {
            regex: {
                val2pre: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "[0-3])");
                },
                val2: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + escapedSeparator + "30)|((0[1-6])" + escapedSeparator + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            yearrange: {
                minyear: 1300,
                maxyear: 1499
            },
            mask: "y/1/2",
            leapday: "/12/30",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            clearIncomplete: !0
        },
        "yyyy-mm-dd hh:mm:ss": {
            mask: "y-1-2 h:s:s",
            placeholder: "yyyy-mm-dd hh:mm:ss",
            alias: "datetime",
            separator: "-",
            leapday: "-02-29",
            regex: {
                val2pre: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                },
                val2: function (separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            onKeyDown: function (e, buffer, caretPos, opts) { }
        }
    }), Inputmask;
}(jQuery, Inputmask), function ($, Inputmask) {
    return Inputmask.extendDefinitions({
        A: {
            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "&": {
            validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "#": {
            validator: "[0-9A-Fa-f]",
            cardinality: 1,
            casing: "upper"
        }
    }), Inputmask.extendAliases({
        url: {
            definitions: {
                i: {
                    validator: ".",
                    cardinality: 1
                }
            },
            mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
            insertMode: !1,
            autoUnmask: !1,
            inputmode: "url"
        },
        ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                i: {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs,
                            chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs,
                            new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                    },
                    cardinality: 1
                }
            },
            onUnMask: function (maskedValue, unmaskedValue, opts) {
                return maskedValue;
            },
            inputmode: "numeric"
        },
        email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            onBeforePaste: function (pastedValue, opts) {
                return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality: 1,
                    casing: "lower"
                },
                "-": {
                    validator: "[0-9A-Za-z-]",
                    cardinality: 1,
                    casing: "lower"
                }
            },
            onUnMask: function (maskedValue, unmaskedValue, opts) {
                return maskedValue;
            },
            inputmode: "email"
        },
        mac: {
            mask: "##:##:##:##:##:##"
        },
        vin: {
            mask: "V{13}9{4}",
            definitions: {
                V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    cardinality: 1,
                    casing: "upper"
                }
            },
            clearIncomplete: !0,
            autoUnmask: !0
        }
    }), Inputmask;
}(jQuery, Inputmask), function ($, Inputmask) {
    return Inputmask.extendAliases({
        numeric: {
            mask: function (opts) {
                function autoEscape(txt) {
                    for (var escapedTxt = "", i = 0; i < txt.length; i++) escapedTxt += opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? "\\" + txt.charAt(i) : txt.charAt(i);
                    return escapedTxt;
                }
                if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat),
                    opts.repeat = 0, opts.groupSeparator === opts.radixPoint && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""),
                    " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator,
                    opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)),
                        isFinite(opts.integerDigits))) {
                    var seps = Math.floor(opts.integerDigits / opts.groupSize), mod = opts.integerDigits % opts.groupSize;
                    opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps),
                        opts.integerDigits < 1 && (opts.integerDigits = "*");
                }
                opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)),
                    "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && opts.integerOptional === !1 && (opts.positionCaretOnClick = "lvp"),
                    opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~",
                    opts.numericInput === !0 && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick,
                        opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);
                var mask = "[+]";
                if (mask += autoEscape(opts.prefix), mask += opts.integerOptional === !0 ? "~{1," + opts.integerDigits + "}" : "~{" + opts.integerDigits + "}",
                    void 0 !== opts.digits) {
                    opts.radixPointDefinitionSymbol = opts.decimalProtect ? ":" : opts.radixPoint;
                    var dq = opts.digits.toString().split(",");
                    isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (mask += opts.digitsOptional ? "[" + opts.radixPointDefinitionSymbol + ";{1," + opts.digits + "}]" : opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}");
                }
                return mask += autoEscape(opts.suffix), mask += "[-]", opts.greedy = !1, null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
                    "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, "."))),
                    null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
                        "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, "."))),
                    mask;
            },
            placeholder: "",
            greedy: !1,
            digits: "*",
            digitsOptional: !0,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: !1,
            allowPlus: !0,
            allowMinus: !0,
            negationSymbol: {
                front: "-",
                back: ""
            },
            integerDigits: "+",
            integerOptional: !0,
            prefix: "",
            suffix: "",
            rightAlign: !0,
            decimalProtect: !0,
            min: null,
            max: null,
            step: 1,
            insertMode: !0,
            autoUnmask: !1,
            unmaskAsNumber: !1,
            inputmode: "numeric",
            postFormat: function (buffer, pos, opts) {
                opts.numericInput === !0 && (buffer = buffer.reverse(), isFinite(pos) && (pos = buffer.join("").length - pos - 1));
                var i, l;
                pos = pos >= buffer.length ? buffer.length - 1 : pos < 0 ? 0 : pos;
                var charAtPos = buffer[pos], cbuf = buffer.slice();
                charAtPos === opts.groupSeparator && pos > opts.prefix.length && pos < buffer.length - opts.suffix.length && (cbuf.splice(pos--, 1),
                    charAtPos = cbuf[pos]);
                var isNegative = cbuf.join("").match(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)));
                isNegative = null !== isNegative && 1 === isNegative.length, pos > (isNegative ? opts.negationSymbol.front.length : 0) + opts.prefix.length && pos < cbuf.length - opts.suffix.length && (cbuf[pos] = "!");
                var bufVal = cbuf.join(""), bufValOrigin = cbuf.join();
                if (isNegative && (bufVal = bufVal.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), ""),
                    bufVal = bufVal.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")),
                    bufVal = bufVal.replace(new RegExp(Inputmask.escapeRegex(opts.suffix) + "$"), ""),
                    bufVal = bufVal.replace(new RegExp("^" + Inputmask.escapeRegex(opts.prefix)), ""),
                    bufVal.length > 0 && opts.autoGroup || bufVal.indexOf(opts.groupSeparator) !== -1) {
                    var escapedGroupSeparator = Inputmask.escapeRegex(opts.groupSeparator);
                    bufVal = bufVal.replace(new RegExp(escapedGroupSeparator, "g"), "");
                    var radixSplit = bufVal.split(charAtPos === opts.radixPoint ? "!" : opts.radixPoint);
                    if (bufVal = "" === opts.radixPoint ? bufVal : radixSplit[0], charAtPos !== opts.negationSymbol.front && (bufVal = bufVal.replace("!", "?")),
                        bufVal.length > opts.groupSize) for (var reg = new RegExp("([-+]?[\\d?]+)([\\d?]{" + opts.groupSize + "})"); reg.test(bufVal) && "" !== opts.groupSeparator;) bufVal = bufVal.replace(reg, "$1" + opts.groupSeparator + "$2"),
                            bufVal = bufVal.replace(opts.groupSeparator + opts.groupSeparator, opts.groupSeparator);
                    bufVal = bufVal.replace("?", "!"), "" !== opts.radixPoint && radixSplit.length > 1 && (bufVal += (charAtPos === opts.radixPoint ? "!" : opts.radixPoint) + radixSplit[1]);
                }
                bufVal = opts.prefix + bufVal + opts.suffix, isNegative && (bufVal = opts.negationSymbol.front + bufVal + opts.negationSymbol.back);
                var needsRefresh = bufValOrigin !== bufVal.split("").join(), newPos = $.inArray("!", bufVal);
                if (newPos === -1 && (newPos = pos), needsRefresh) {
                    for (buffer.length = bufVal.length, i = 0, l = bufVal.length; i < l; i++) buffer[i] = bufVal.charAt(i);
                    buffer[newPos] = charAtPos;
                }
                return newPos = opts.numericInput && isFinite(pos) ? buffer.join("").length - newPos - 1 : newPos,
                    opts.numericInput && (buffer = buffer.reverse(), $.inArray(opts.radixPoint, buffer) < newPos && buffer.join("").length - opts.suffix.length !== newPos && (newPos -= 1)),
                {
                    pos: newPos,
                    refreshFromBuffer: needsRefresh,
                    buffer: buffer,
                    isNegative: isNegative
                };
            },
            onBeforeWrite: function (e, buffer, caretPos, opts) {
                var rslt;
                if (e && ("blur" === e.type || "checkval" === e.type || "keydown" === e.type)) {
                    var maskedValue = opts.numericInput ? buffer.slice().reverse().join("") : buffer.join(""), processValue = maskedValue.replace(opts.prefix, "");
                    processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
                        "," === opts.radixPoint && (processValue = processValue.replace(opts.radixPoint, "."));
                    var isNegative = processValue.match(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"));
                    if (isNegative = null !== isNegative && 1 === isNegative.length, processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""),
                        processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""),
                        isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")),
                        processValue = processValue === opts.negationSymbol.front ? processValue + "0" : processValue,
                        "" !== processValue && isFinite(processValue)) {
                        var floatValue = parseFloat(processValue), signedFloatValue = isNegative ? floatValue * -1 : floatValue;
                        if ("blur" === e.type && (null !== opts.min && isFinite(opts.min) && signedFloatValue < parseFloat(opts.min) ? (floatValue = Math.abs(opts.min),
                            isNegative = opts.min < 0, maskedValue = void 0) : null !== opts.max && isFinite(opts.max) && signedFloatValue > parseFloat(opts.max) && (floatValue = Math.abs(opts.max),
                                isNegative = opts.max < 0, maskedValue = void 0)), processValue = floatValue.toString().replace(".", opts.radixPoint).split(""),
                            isFinite(opts.digits)) {
                            var radixPosition = $.inArray(opts.radixPoint, processValue), rpb = $.inArray(opts.radixPoint, maskedValue);
                            radixPosition === -1 && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);
                            for (var i = 1; i <= opts.digits; i++) opts.digitsOptional || void 0 !== processValue[radixPosition + i] && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? rpb !== -1 && void 0 !== maskedValue[rpb + i] && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = "0";
                            processValue[processValue.length - 1] === opts.radixPoint && delete processValue[processValue.length - 1];
                        }
                        if (floatValue.toString() !== processValue && floatValue.toString() + "." !== processValue || isNegative) return processValue = (opts.prefix + processValue.join("")).split(""),
                            !isNegative || 0 === floatValue && "blur" === e.type || (processValue.unshift(opts.negationSymbol.front),
                                processValue.push(opts.negationSymbol.back)), opts.numericInput && (processValue = processValue.reverse()),
                            rslt = opts.postFormat(processValue, opts.numericInput ? caretPos : caretPos - 1, opts),
                            rslt.buffer && (rslt.refreshFromBuffer = rslt.buffer.join("") !== buffer.join("")),
                            rslt;
                    }
                }
                if (opts.autoGroup) return rslt = opts.postFormat(buffer, opts.numericInput ? caretPos : caretPos - 1, opts),
                    rslt.caret = caretPos < (rslt.isNegative ? opts.negationSymbol.front.length : 0) + opts.prefix.length || caretPos > rslt.buffer.length - (rslt.isNegative ? opts.negationSymbol.back.length : 0) ? rslt.pos : rslt.pos + 1,
                    rslt;
            },
            regex: {
                integerPart: function (opts) {
                    return new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
                },
                integerNPart: function (opts) {
                    return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                }
            },
            signHandler: function (chrs, maskset, pos, strict, opts) {
                if (!strict && opts.allowMinus && "-" === chrs || opts.allowPlus && "+" === chrs) {
                    var matchRslt = maskset.buffer.join("").match(opts.regex.integerPart(opts));
                    if (matchRslt && matchRslt[0].length > 0) return maskset.buffer[matchRslt.index] === ("-" === chrs ? "+" : opts.negationSymbol.front) ? "-" === chrs ? "" !== opts.negationSymbol.back ? {
                        pos: 0,
                        c: opts.negationSymbol.front,
                        remove: 0,
                        caret: pos,
                        insert: {
                            pos: maskset.buffer.length - 1,
                            c: opts.negationSymbol.back
                        }
                    } : {
                            pos: 0,
                            c: opts.negationSymbol.front,
                            remove: 0,
                            caret: pos
                        } : "" !== opts.negationSymbol.back ? {
                            pos: 0,
                            c: "+",
                            remove: [0, maskset.buffer.length - 1],
                            caret: pos
                        } : {
                                pos: 0,
                                c: "+",
                                remove: 0,
                                caret: pos
                            } : maskset.buffer[0] === ("-" === chrs ? opts.negationSymbol.front : "+") ? "-" === chrs && "" !== opts.negationSymbol.back ? {
                                remove: [0, maskset.buffer.length - 1],
                                caret: pos - 1
                            } : {
                                    remove: 0,
                                    caret: pos - 1
                                } : "-" === chrs ? "" !== opts.negationSymbol.back ? {
                                    pos: 0,
                                    c: opts.negationSymbol.front,
                                    caret: pos + 1,
                                    insert: {
                                        pos: maskset.buffer.length,
                                        c: opts.negationSymbol.back
                                    }
                                } : {
                                        pos: 0,
                                        c: opts.negationSymbol.front,
                                        caret: pos + 1
                                    } : {
                                    pos: 0,
                                    c: chrs,
                                    caret: pos + 1
                                };
                }
                return !1;
            },
            radixHandler: function (chrs, maskset, pos, strict, opts) {
                if (!strict && opts.numericInput !== !0 && chrs === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                    var radixPos = $.inArray(opts.radixPoint, maskset.buffer), integerValue = maskset.buffer.join("").match(opts.regex.integerPart(opts));
                    if (radixPos !== -1 && maskset.validPositions[radixPos]) return maskset.validPositions[radixPos - 1] ? {
                        caret: radixPos + 1
                    } : {
                            pos: integerValue.index,
                            c: integerValue[0],
                            caret: radixPos + 1
                        };
                    if (!integerValue || "0" === integerValue[0] && integerValue.index + 1 !== pos) return maskset.buffer[integerValue ? integerValue.index : pos] = "0",
                    {
                        pos: (integerValue ? integerValue.index : pos) + 1,
                        c: opts.radixPoint
                    };
                }
                return !1;
            },
            leadingZeroHandler: function (chrs, maskset, pos, strict, opts, isSelection) {
                if (!strict) {
                    var initialPos = pos, buffer = opts.numericInput === !0 ? maskset.buffer.slice("").reverse() : maskset.buffer.slice("");
                    opts.numericInput && (pos = buffer.join("").length - pos - 1), buffer.splice(0, opts.prefix.length),
                        buffer.splice(buffer.length - opts.suffix.length, opts.suffix.length), pos -= opts.prefix.length;
                    var radixPosition = $.inArray(opts.radixPoint, buffer), matchRslt = buffer.slice(0, radixPosition !== -1 ? radixPosition : void 0).join("").match(opts.regex.integerNPart(opts));
                    if (matchRslt && (radixPosition === -1 || pos <= radixPosition || opts.numericInput)) {
                        var decimalPart = radixPosition === -1 ? 0 : parseInt(buffer.slice(radixPosition + 1).join("")), leadingZero = 0 === matchRslt[0].indexOf("" !== opts.placeholder ? opts.placeholder.charAt(0) : "0");
                        if (opts.numericInput) {
                            if (leadingZero && 0 !== decimalPart && isSelection !== !0) return maskset.buffer.splice(buffer.length - matchRslt.index - 1 + opts.suffix.length, 1),
                            {
                                pos: initialPos,
                                remove: buffer.length - matchRslt.index - 1 + opts.suffix.length
                            };
                        } else {
                            if (leadingZero && (matchRslt.index + 1 === pos || isSelection !== !0 && 0 === decimalPart)) return maskset.buffer.splice(matchRslt.index + opts.prefix.length, 1),
                            {
                                pos: matchRslt.index + opts.prefix.length,
                                remove: matchRslt.index + opts.prefix.length
                            };
                            if ("0" === chrs && pos <= matchRslt.index && matchRslt[0] !== opts.groupSeparator) return !1;
                        }
                    }
                }
                return !0;
            },
            definitions: {
                "~": {
                    validator: function (chrs, maskset, pos, strict, opts, isSelection) {
                        var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
                        if (!isValid && (isValid = opts.radixHandler(chrs, maskset, pos, strict, opts),
                            !isValid && (isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs),
                                isValid === !0 && (isValid = opts.leadingZeroHandler(chrs, maskset, pos, strict, opts, isSelection),
                                    isValid === !0 && opts.numericInput !== !0)))) {
                            var radixPosition = $.inArray(opts.radixPoint, maskset.buffer);
                            isValid = radixPosition !== -1 && (opts.digitsOptional === !1 || maskset.validPositions[pos]) && opts.numericInput !== !0 && pos > radixPosition && !strict ? {
                                pos: pos,
                                remove: pos
                            } : {
                                    pos: pos
                                };
                        }
                        return isValid;
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
                        return !isValid && (strict && opts.allowMinus && chrs === opts.negationSymbol.front || opts.allowMinus && "-" === chrs || opts.allowPlus && "+" === chrs) && (isValid = !(!strict && "-" === chrs) || ("" !== opts.negationSymbol.back ? {
                            pos: pos,
                            c: "-" === chrs ? opts.negationSymbol.front : "+",
                            caret: pos + 1,
                            insert: {
                                pos: maskset.buffer.length,
                                c: opts.negationSymbol.back
                            }
                        } : {
                                pos: pos,
                                c: "-" === chrs ? opts.negationSymbol.front : "+",
                                caret: pos + 1
                            })), isValid;
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
                        return !isValid && strict && opts.allowMinus && chrs === opts.negationSymbol.back && (isValid = !0),
                            isValid;
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
                        if (!isValid) {
                            var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]";
                            isValid = new RegExp(radix).test(chrs), isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {
                                caret: pos + 1
                            });
                        }
                        return isValid;
                    },
                    cardinality: 1,
                    placeholder: function (opts) {
                        return opts.radixPoint;
                    }
                }
            },
            onUnMask: function (maskedValue, unmaskedValue, opts) {
                if ("" === unmaskedValue && opts.nullable === !0) return unmaskedValue;
                var processValue = maskedValue.replace(opts.prefix, "");
                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
                    opts.unmaskAsNumber ? ("" !== opts.radixPoint && processValue.indexOf(opts.radixPoint) !== -1 && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")),
                        Number(processValue)) : processValue;
            },
            isComplete: function (buffer, opts) {
                var maskedValue = buffer.join(""), bufClone = buffer.slice();
                if (opts.postFormat(bufClone, 0, opts), bufClone.join("") !== maskedValue) return !1;
                var processValue = maskedValue.replace(opts.prefix, "");
                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
                    "," === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")),
                    isFinite(processValue);
            },
            onBeforeMask: function (initialValue, opts) {
                if (initialValue = initialValue.toString(), opts.numericInput === !0 && (initialValue = initialValue.split("").reverse().join("")),
                    "" !== opts.radixPoint && isFinite(initialValue)) {
                    var vs = initialValue.split("."), groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;
                    2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));
                }
                var kommaMatches = initialValue.match(/,/g), dotMatches = initialValue.match(/\./g);
                if (dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\./g, ""),
                    initialValue = initialValue.replace(",", opts.radixPoint)) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, ""),
                        initialValue = initialValue.replace(".", opts.radixPoint)) : initialValue = initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue = initialValue.replace(/,/g, "") : initialValue = initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
                    0 === opts.digits && (initialValue.indexOf(".") !== -1 ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : initialValue.indexOf(",") !== -1 && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))),
                    "" !== opts.radixPoint && isFinite(opts.digits) && initialValue.indexOf(opts.radixPoint) !== -1) {
                    var valueParts = initialValue.split(opts.radixPoint), decPart = valueParts[1].match(new RegExp("\\d*"))[0];
                    if (parseInt(opts.digits) < decPart.toString().length) {
                        var digitsFactor = Math.pow(10, parseInt(opts.digits));
                        initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."),
                            initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor,
                            initialValue = initialValue.toString().replace(".", opts.radixPoint);
                    }
                }
                return opts.numericInput === !0 && (initialValue = initialValue.split("").reverse().join("")),
                    initialValue;
            },
            canClearPosition: function (maskset, position, lvp, strict, opts) {
                var positionInput = maskset.validPositions[position].input, canClear = positionInput !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && opts.decimalProtect === !1 || isFinite(positionInput) || position === lvp || positionInput === opts.groupSeparator || positionInput === opts.negationSymbol.front || positionInput === opts.negationSymbol.back;
                return canClear;
            },
            onKeyDown: function (e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey) switch (e.keyCode) {
                    case Inputmask.keyCode.UP:
                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");
                        break;

                    case Inputmask.keyCode.DOWN:
                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");
                }
            }
        },
        currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: !0,
            digits: 2,
            digitsOptional: !1,
            clearMaskOnLostFocus: !1
        },
        decimal: {
            alias: "numeric"
        },
        integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        percentage: {
            alias: "numeric",
            digits: 2,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: !1,
            min: 0,
            max: 100,
            suffix: " %",
            allowPlus: !1,
            allowMinus: !1
        }
    }), Inputmask;
}(jQuery, Inputmask), function ($, Inputmask) {
    function maskSort(a, b) {
        var maska = (a.mask || a).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskb = (b.mask || b).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskas = (a.mask || a).split("#")[0], maskbs = (b.mask || b).split("#")[0];
        return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);
    }
    var analyseMaskBase = Inputmask.prototype.analyseMask;
    return Inputmask.prototype.analyseMask = function (mask, opts) {
        function reduceVariations(masks, previousVariation, previousmaskGroup) {
            previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups,
                "" !== previousVariation && (previousmaskGroup[previousVariation] = {});
            for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) mask = masks[i].mask || masks[i],
                variation = mask.substr(0, 1), maskGroup[variation] = maskGroup[variation] || [],
                maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
            for (var ndx in maskGroup) maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
        }
        function rebuild(maskGroup) {
            var mask = "", submasks = [];
            for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker.start + maskGroup[ndx].join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end) : submasks.push(ndx + rebuild(maskGroup[ndx]));
            return mask += 1 === submasks.length ? submasks[0] : opts.groupmarker.start + submasks.join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end;
        }
        var maskGroups = {};
        opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (mask = mask.substr(1, mask.length - 2),
            reduceVariations(mask.split(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start)),
            mask = rebuild(maskGroups)), mask = mask.replace(/9/g, "\\9"));
        var mt = analyseMaskBase.call(this, mask, opts);
        return mt;
    }, Inputmask.extendAliases({
        abstractphone: {
            groupmarker: {
                start: "<",
                end: ">"
            },
            countrycode: "",
            phoneCodes: [],
            mask: function (opts) {
                return opts.definitions = {
                    "#": Inputmask.prototype.definitions[9]
                }, opts.phoneCodes.sort(maskSort);
            },
            keepStatic: !0,
            onBeforeMask: function (value, opts) {
                var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                return (processedValue.indexOf(opts.countrycode) > 1 || processedValue.indexOf(opts.countrycode) === -1) && (processedValue = "+" + opts.countrycode + processedValue),
                    processedValue;
            },
            onUnMask: function (maskedValue, unmaskedValue, opts) {
                return unmaskedValue;
            },
            inputmode: "tel"
        }
    }), Inputmask;
}(jQuery, Inputmask), function ($, Inputmask) {
    return Inputmask.extendAliases({
        Regex: {
            mask: "r",
            greedy: !1,
            repeat: "*",
            regex: null,
            regexTokens: null,
            tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            quantifierFilter: /[0-9]+[^,]/,
            isComplete: function (buffer, opts) {
                return new RegExp(opts.regex).test(buffer.join(""));
            },
            definitions: {
                r: {
                    validator: function (chrs, maskset, pos, strict, opts) {
                        function RegexToken(isGroup, isQuantifier) {
                            this.matches = [], this.isGroup = isGroup || !1, this.isQuantifier = isQuantifier || !1,
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                }, this.repeaterPart = void 0;
                        }
                        function analyseRegex() {
                            var match, m, currentToken = new RegexToken(), opengroups = [];
                            for (opts.regexTokens = []; match = opts.tokenizer.exec(opts.regex);) switch (m = match[0],
                                m.charAt(0)) {
                                    case "(":
                                        opengroups.push(new RegexToken((!0)));
                                        break;

                                    case ")":
                                        groupToken = opengroups.pop(), opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(groupToken) : currentToken.matches.push(groupToken);
                                        break;

                                    case "{":
                                    case "+":
                                    case "*":
                                        var quantifierToken = new RegexToken((!1), (!0));
                                        m = m.replace(/[{}]/g, "");
                                        var mq = m.split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                                        if (quantifierToken.quantifier = {
                                            min: mq0,
                                            max: mq1
                                        }, opengroups.length > 0) {
                                            var matches = opengroups[opengroups.length - 1].matches;
                                            match = matches.pop(), match.isGroup || (groupToken = new RegexToken((!0)), groupToken.matches.push(match),
                                                match = groupToken), matches.push(match), matches.push(quantifierToken);
                                        } else match = currentToken.matches.pop(), match.isGroup || (groupToken = new RegexToken((!0)),
                                            groupToken.matches.push(match), match = groupToken), currentToken.matches.push(match),
                                            currentToken.matches.push(quantifierToken);
                                        break;

                                    default:
                                        opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(m) : currentToken.matches.push(m);
                                }
                            currentToken.matches.length > 0 && opts.regexTokens.push(currentToken);
                        }
                        function validateRegexToken(token, fromGroup) {
                            var isvalid = !1;
                            fromGroup && (regexPart += "(", openGroupCount++);
                            for (var mndx = 0; mndx < token.matches.length; mndx++) {
                                var matchToken = token.matches[mndx];
                                if (matchToken.isGroup === !0) isvalid = validateRegexToken(matchToken, !0); else if (matchToken.isQuantifier === !0) {
                                    var crrntndx = $.inArray(matchToken, token.matches), matchGroup = token.matches[crrntndx - 1], regexPartBak = regexPart;
                                    if (isNaN(matchToken.quantifier.max)) {
                                        for (; matchToken.repeaterPart && matchToken.repeaterPart !== regexPart && matchToken.repeaterPart.length > regexPart.length && !(isvalid = validateRegexToken(matchGroup, !0)););
                                        isvalid = isvalid || validateRegexToken(matchGroup, !0), isvalid && (matchToken.repeaterPart = regexPart),
                                            regexPart = regexPartBak + matchToken.quantifier.max;
                                    } else {
                                        for (var i = 0, qm = matchToken.quantifier.max - 1; i < qm && !(isvalid = validateRegexToken(matchGroup, !0)); i++);
                                        regexPart = regexPartBak + "{" + matchToken.quantifier.min + "," + matchToken.quantifier.max + "}";
                                    }
                                } else if (void 0 !== matchToken.matches) for (var k = 0; k < matchToken.length && !(isvalid = validateRegexToken(matchToken[k], fromGroup)); k++); else {
                                    var testExp;
                                    if ("[" == matchToken.charAt(0)) {
                                        testExp = regexPart, testExp += matchToken;
                                        for (var j = 0; j < openGroupCount; j++) testExp += ")";
                                        var exp = new RegExp("^(" + testExp + ")$");
                                        isvalid = exp.test(bufferStr);
                                    } else for (var l = 0, tl = matchToken.length; l < tl; l++) if ("\\" !== matchToken.charAt(l)) {
                                        testExp = regexPart, testExp += matchToken.substr(0, l + 1), testExp = testExp.replace(/\|$/, "");
                                        for (var j = 0; j < openGroupCount; j++) testExp += ")";
                                        var exp = new RegExp("^(" + testExp + ")$");
                                        if (isvalid = exp.test(bufferStr)) break;
                                    }
                                    regexPart += matchToken;
                                }
                                if (isvalid) break;
                            }
                            return fromGroup && (regexPart += ")", openGroupCount--), isvalid;
                        }
                        var bufferStr, groupToken, cbuffer = maskset.buffer.slice(), regexPart = "", isValid = !1, openGroupCount = 0;
                        null === opts.regexTokens && analyseRegex(), cbuffer.splice(pos, 0, chrs), bufferStr = cbuffer.join("");
                        for (var i = 0; i < opts.regexTokens.length; i++) {
                            var regexToken = opts.regexTokens[i];
                            if (isValid = validateRegexToken(regexToken, regexToken.isGroup)) break;
                        }
                        return isValid;
                    },
                    cardinality: 1
                }
            }
        }
    }), Inputmask;
}(jQuery, Inputmask);

/*
 * @license Multi Input Mask plugin for jquery
 * https://github.com/andr-04/inputmask-multi
 * Copyright (c) 2012-2016 Andrey Egorov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 1.2.0
 *
 * Requriements:
 * https://github.com/RobinHerbots/jquery.inputmask
 */
!function (t) { t.masksLoad = function (e) { var s; return t.ajax({ url: e, async: !1, dataType: "json", success: function (t) { s = t } }), s }, t.masksSort = function (e, s, i, n) { return e.sort(function (e, a) { for (var r = 0, o = 0; r < e[n].length && o < a[n].length;) { var h = e[n].charAt(r), c = a[n].charAt(o); if (i.test(h)) if (i.test(c)) { if (-1 != t.inArray(h, s) && -1 == t.inArray(c, s)) return 1; if (-1 == t.inArray(h, s) && -1 != t.inArray(c, s)) return -1; if (-1 == t.inArray(h, s) && -1 == t.inArray(c, s) && h != c) return c > h ? -1 : 1; r++, o++ } else o++; else r++ } for (; r < e[n].length || o < a[n].length;)if (r < e[n].length && !i.test(e[n].charAt(r))) r++; else if (o < a[n].length && !i.test(a[n].charAt(o))) o++; else { if (r < e[n].length) return 1; if (o < a[n].length) return -1 } return 0 }), e }; var e = function (t, e) { if ("number" != typeof t) { if (this.setSelectionRange) t = this.selectionStart, e = this.selectionEnd; else if (document.selection && document.selection.createRange) { var s = document.selection.createRange(); t = 0 - s.duplicate().moveStart("character", -1e5), e = t + s.text.length } return { begin: t, end: e } } if (e = "number" == typeof e ? e : t, this.setSelectionRange) this.setSelectionRange(t, e); else if (this.createTextRange) { var s = this.createTextRange(); s.collapse(!0), s.moveEnd("character", e), s.moveStart("character", t), s.select() } }, s = Object.keys || function (t) { if (t !== Object(t)) throw new TypeError("Invalid object"); var e = []; for (var s in t) e[e.length] = s; return e }, i = function (t) { for (var e = this.inputmasks.options, i = "", n = 0; n < t.length; n++) { var a = t.charAt(n); if (a == this.inputmasks.placeholder) break; e.match.test(a) && (i += a) } for (var r in e.list) { for (var o = e.list[r][e.listKey], h = !0, c = 0, u = 0; c < i.length && u < o.length;) { var l = o.charAt(u), p = i.charAt(c); if (e.match.test(l) || l in this.inputmasks.defs) { if (!(l in this.inputmasks.defs && this.inputmasks.defs[l].test(p) || p == l)) { h = !1; break } c++, u++ } else u++ } if (h && c == i.length) { var m = -1 == o.substr(u).search(e.match); o = o.replace(new RegExp([e.match.source].concat(s(this.inputmasks.defs)).join("|"), "g"), e.replace); var d = -1 == o.substr(u).search(e.replace); return { mask: o, obj: e.list[r], determined: m, completed: d } } } return !1 }, n = function (t, e, s) { var i = this.inputmasks.options; if (!t) return 0; for (var n = 0, a = 0; n < s.begin; n++)t.charAt(n) == i.replace && a++; for (var r = 0; n < s.end; n++)t.charAt(n) == i.replace && r++; for (n = 0; n < e.length && (a > 0 || e.charAt(n) != i.replace); n++)e.charAt(n) == i.replace && a--; for (a = n; n < e.length && r > 0; n++)e.charAt(n) == i.replace && r--; return r = n, { begin: a, end: r } }, a = function () { t(this).off(".inputmasks") }, r = function () { events = t._data(this, "events"); var e = ["keydown", "keypress", "paste", "dragdrop", "drop", "setvalue", "reset", "cut", "blur"], s = this; t.each(e, function (e, i) { t.each(s.inputmask.events[i], function (e, n) { t(s).off(i, n) }) }) }, o = function (e) { var s = this; t.each(this.inputmask.events[e.type], function (t, i) { i.call(s, e) }) }, h = function () { t(this).on("keydown.inputmasks", l).on("keypress.inputmasks", p).on("paste.inputmasks", d).on("dragdrop.inputmasks", d).on("drop.inputmasks", d).on("cut.inputmasks", d).on("setvalue.inputmasks", m).on("blur.inputmasks", m).on("reset.inputmasks", m) }, c = function (s, i) { var a = this.inputmasks.options; if (s && (void 0 !== i || s.mask != this.inputmasks.oldmatch.mask)) { var o; void 0 === i ? o = n.call(this, this.inputmasks.oldmatch.mask, s.mask, e.call(this)) : (this.inputmask && this.inputmask.remove(), this.value = i), t(this).inputmask(s.mask, t.extend(!0, a.inputmask, { insertMode: this.inputmasks.insertMode })), r.call(this), void 0 === i && e.call(this, o.begin, o.end) } this.inputmasks.oldmatch = s, a.onMaskChange.call(this, s.obj, s.determined) }, u = function (t, e, s) { var n = i.call(this, e); return n && n.obj == this.inputmasks.oldmatch.obj && n.determined == this.inputmasks.oldmatch.determined ? (o.call(this, t), !0) : (n ? s ? (c.call(this, n), o.call(this, t)) : (o.call(this, t), c.call(this, n)) : s && this.inputmasks.insertMode || f.call(this, e), !1) }, l = function (t) { if (t.metaKey) return o.call(this, t), !0; var s = this.inputmasks.options; t = t || window.event; var i = t.which || t.charCode || t.keyCode; if (8 == i || 46 == i || this.inputmasks.iphone && 127 == i) { var n = this.inputmask._valueGet(), a = e.call(this); if (a.begin == a.end) { var r = a.begin; do { 46 != i && r--; var h = n.charAt(r); n = n.substring(0, r) + n.substring(r + 1) } while (r > 0 && r < n.length && h != this.inputmasks.placeholder && !s.match.test(h)) } else n = n.substring(0, a.begin) + n.substring(a.end); return u.call(this, t, n, !1) } return 45 == i && (this.inputmasks.insertMode = !this.inputmasks.insertMode), o.call(this, t), !0 }, p = function (t) { if (t.metaKey) return o.call(this, t), !0; var s = this.inputmask._valueGet(); t = t || window.event; var i = t.which || t.charCode || t.keyCode, n = String.fromCharCode(i); return caretPos = e.call(this), s = caretPos.begin == caretPos.end && s.charAt(caretPos.begin) == this.inputmasks.placeholder ? s.substring(0, caretPos.begin) + n + s.substring(caretPos.end + 1) : s.substring(0, caretPos.begin) + n + s.substring(caretPos.end), u.call(this, t, s, !0) }, m = function (t) { return f.call(this), !0 }, d = function (t) { var e = this; return setTimeout(function () { f.call(e) }, 0), !0 }, f = function (t) { void 0 === t && (t = this.inputmask && this.inputmask._valueGet ? this.inputmask._valueGet() : this.value); for (var e = i.call(this, t); !e && t.length > 0;)t = t.substr(0, t.length - 1), e = i.call(this, t); c.call(this, e, t) }, k = function (e) { e = t.extend(!0, { onMaskChange: t.noop }, e); var s = {}; for (var i in e.inputmask.definitions) { var n = e.inputmask.definitions[i].validator; switch (typeof n) { case "string": s[i] = new RegExp(n); break; case "object": "test" in e.definitions[i].validator && (s[i] = n); break; case "function": s[i] = { test: n } } } e.inputmask.definitions[e.replace] = { validator: e.match.source, cardinality: 1 }, this.inputmasks && t(this).inputmasks("remove"), this.inputmasks = {}, this.inputmasks.options = e, this.inputmasks.defs = s, this.inputmasks.iphone = null != navigator.userAgent.match(/iphone/i), this.inputmasks.oldmatch = !1, this.inputmasks.placeholder = e.inputmask.placeholder || Inputmask.prototype.defaults.placeholder, this.inputmasks.insertMode = void 0 !== e.inputmask.insertMode ? e.inputmask.insertMode : Inputmask.prototype.defaults.insertMode, f.call(this) }; t.fn.inputmasks = function (e) { switch (e) { case "remove": a.call(this), this.inputmasks = void 0, t(this).inputmask("remove"); break; case "isCompleted": var s = i.call(this[0], this[0].inputmask && this[0].inputmask._valueGet() || this[0].value); return s && s.completed; default: return this.each(function () { k.call(this, e), h.call(this) }), this } } }(jQuery);

Inputmask.PHONE_CODES = [
    { "mask": "+850-####-#############", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "mask": "+7(###)###-##-##", "cc": "RU", "name_en": "Russia", "desc_en": "", "name_ru": "Россия", "desc_ru": "" },
    { "mask": "+247-####", "cc": "AC", "name_en": "Ascension", "desc_en": "", "name_ru": "Остров Вознесения", "desc_ru": "" },
    { "mask": "+376-###-###", "cc": "AD", "name_en": "Andorra", "desc_en": "", "name_ru": "Андорра", "desc_ru": "" },
    { "mask": "+971-5#-###-####", "cc": "AE", "name_en": "United Arab Emirates", "desc_en": "mobile", "name_ru": "Объединенные Арабские Эмираты", "desc_ru": "мобильные" },
    { "mask": "+971-#-###-####", "cc": "AE", "name_en": "United Arab Emirates", "desc_en": "", "name_ru": "Объединенные Арабские Эмираты", "desc_ru": "" },
    { "mask": "+93-##-###-####", "cc": "AF", "name_en": "Afghanistan", "desc_en": "", "name_ru": "Афганистан", "desc_ru": "" },
    { "mask": "+1(268)###-####", "cc": "AG", "name_en": "Antigua & Barbuda", "desc_en": "", "name_ru": "Антигуа и Барбуда", "desc_ru": "" },
    { "mask": "+1(264)###-####", "cc": "AI", "name_en": "Anguilla", "desc_en": "", "name_ru": "Ангилья", "desc_ru": "" },
    { "mask": "+355(###)###-###", "cc": "AL", "name_en": "Albania", "desc_en": "", "name_ru": "Албания", "desc_ru": "" },
    { "mask": "+374-##-###-###", "cc": "AM", "name_en": "Armenia", "desc_en": "", "name_ru": "Армения", "desc_ru": "" },
    { "mask": "+599-###-####", "cc": "AN", "name_en": "Caribbean Netherlands", "desc_en": "", "name_ru": "Карибские Нидерланды", "desc_ru": "" },
    { "mask": "+599-###-####", "cc": "AN", "name_en": "Netherlands Antilles", "desc_en": "", "name_ru": "Нидерландские Антильские острова", "desc_ru": "" },
    { "mask": "+599-9###-####", "cc": "AN", "name_en": "Netherlands Antilles", "desc_en": "Curacao", "name_ru": "Нидерландские Антильские острова", "desc_ru": "Кюрасао" },
    { "mask": "+244(###)###-###", "cc": "AO", "name_en": "Angola", "desc_en": "", "name_ru": "Ангола", "desc_ru": "" },
    { "mask": "+672-1##-###", "cc": "AQ", "name_en": "Australian bases in Antarctica", "desc_en": "", "name_ru": "Австралийская антарктическая база", "desc_ru": "" },
    { "mask": "+54(###)###-####", "cc": "AR", "name_en": "Argentina", "desc_en": "", "name_ru": "Аргентина", "desc_ru": "" },
    { "mask": "+1(684)###-####", "cc": "AS", "name_en": "American Samoa", "desc_en": "", "name_ru": "Американское Самоа", "desc_ru": "" },
    { "mask": "+43(###)###-####", "cc": "AT", "name_en": "Austria", "desc_en": "", "name_ru": "Австрия", "desc_ru": "" },
    { "mask": "+61-#-####-####", "cc": "AU", "name_en": "Australia", "desc_en": "", "name_ru": "Австралия", "desc_ru": "" },
    { "mask": "+297-###-####", "cc": "AW", "name_en": "Aruba", "desc_en": "", "name_ru": "Аруба", "desc_ru": "" },
    { "mask": "+994-##-###-##-##", "cc": "AZ", "name_en": "Azerbaijan", "desc_en": "", "name_ru": "Азербайджан", "desc_ru": "" },
    { "mask": "+387-##-#####", "cc": "BA", "name_en": "Bosnia and Herzegovina", "desc_en": "", "name_ru": "Босния и Герцеговина", "desc_ru": "" },
    { "mask": "+387-##-####", "cc": "BA", "name_en": "Bosnia and Herzegovina", "desc_en": "", "name_ru": "Босния и Герцеговина", "desc_ru": "" },
    { "mask": "+1(246)###-####", "cc": "BB", "name_en": "Barbados", "desc_en": "", "name_ru": "Барбадос", "desc_ru": "" },
    { "mask": "+880-##-###-###", "cc": "BD", "name_en": "Bangladesh", "desc_en": "", "name_ru": "Бангладеш", "desc_ru": "" },
    { "mask": "+32(###)###-###", "cc": "BE", "name_en": "Belgium", "desc_en": "", "name_ru": "Бельгия", "desc_ru": "" },
    { "mask": "+226-##-##-####", "cc": "BF", "name_en": "Burkina Faso", "desc_en": "", "name_ru": "Буркина Фасо", "desc_ru": "" },
    { "mask": "+359(###)###-###", "cc": "BG", "name_en": "Bulgaria", "desc_en": "", "name_ru": "Болгария", "desc_ru": "" },
    { "mask": "+973-####-####", "cc": "BH", "name_en": "Bahrain", "desc_en": "", "name_ru": "Бахрейн", "desc_ru": "" },
    { "mask": "+257-##-##-####", "cc": "BI", "name_en": "Burundi", "desc_en": "", "name_ru": "Бурунди", "desc_ru": "" },
    { "mask": "+229-##-##-####", "cc": "BJ", "name_en": "Benin", "desc_en": "", "name_ru": "Бенин", "desc_ru": "" },
    { "mask": "+1(441)###-####", "cc": "BM", "name_en": "Bermuda", "desc_en": "", "name_ru": "Бермудские острова", "desc_ru": "" },
    { "mask": "+673-###-####", "cc": "BN", "name_en": "Brunei Darussalam", "desc_en": "", "name_ru": "Бруней-Даруссалам", "desc_ru": "" },
    { "mask": "+591-#-###-####", "cc": "BO", "name_en": "Bolivia", "desc_en": "", "name_ru": "Боливия", "desc_ru": "" },
    { "mask": "+55(##)####-####", "cc": "BR", "name_en": "Brazil", "desc_en": "", "name_ru": "Бразилия", "desc_ru": "" },
    { "mask": "+55(##)7###-####", "cc": "BR", "name_en": "Brazil", "desc_en": "mobile", "name_ru": "Бразилия", "desc_ru": "мобильные" },
    { "mask": "+55(##)9####-####", "cc": "BR", "name_en": "Brazil", "desc_en": "mobile", "name_ru": "Бразилия", "desc_ru": "мобильные" },
    { "mask": "+1(242)###-####", "cc": "BS", "name_en": "Bahamas", "desc_en": "", "name_ru": "Багамские Острова", "desc_ru": "" },
    { "mask": "+975-17-###-###", "cc": "BT", "name_en": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "" },
    { "mask": "+975-#-###-###", "cc": "BT", "name_en": "Bhutan", "desc_en": "", "name_ru": "Бутан", "desc_ru": "" },
    { "mask": "+267-##-###-###", "cc": "BW", "name_en": "Botswana", "desc_en": "", "name_ru": "Ботсвана", "desc_ru": "" },
    { "mask": "+375(##)###-##-##", "cc": "BY", "name_en": "Belarus", "desc_en": "", "name_ru": "Беларусь (Белоруссия)", "desc_ru": "" },
    { "mask": "+501-###-####", "cc": "BZ", "name_en": "Belize", "desc_en": "", "name_ru": "Белиз", "desc_ru": "" },
    { "mask": "+243(###)###-###", "cc": "CD", "name_en": "Dem. Rep. Congo", "desc_en": "", "name_ru": "Дем. Респ. Конго (Киншаса)", "desc_ru": "" },
    { "mask": "+236-##-##-####", "cc": "CF", "name_en": "Central African Republic", "desc_en": "", "name_ru": "Центральноафриканская Республика", "desc_ru": "" },
    { "mask": "+242-##-###-####", "cc": "CG", "name_en": "Congo (Brazzaville)", "desc_en": "", "name_ru": "Конго (Браззавиль)", "desc_ru": "" },
    { "mask": "+41-##-###-####", "cc": "CH", "name_en": "Switzerland", "desc_en": "", "name_ru": "Швейцария", "desc_ru": "" },
    { "mask": "+225-##-###-###", "cc": "CI", "name_en": "Cote d’Ivoire (Ivory Coast)", "desc_en": "", "name_ru": "Кот-д’Ивуар", "desc_ru": "" },
    { "mask": "+682-##-###", "cc": "CK", "name_en": "Cook Islands", "desc_en": "", "name_ru": "Острова Кука", "desc_ru": "" },
    { "mask": "+56-#-####-####", "cc": "CL", "name_en": "Chile", "desc_en": "", "name_ru": "Чили", "desc_ru": "" },
    { "mask": "+237-####-####", "cc": "CM", "name_en": "Cameroon", "desc_en": "", "name_ru": "Камерун", "desc_ru": "" },
    { "mask": "+86(###)####-####", "cc": "CN", "name_en": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
    { "mask": "+86(###)####-###", "cc": "CN", "name_en": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
    { "mask": "+86-##-#####-#####", "cc": "CN", "name_en": "China (PRC)", "desc_en": "", "name_ru": "Китайская Н.Р.", "desc_ru": "" },
    { "mask": "+57(###)###-####", "cc": "CO", "name_en": "Colombia", "desc_en": "", "name_ru": "Колумбия", "desc_ru": "" },
    { "mask": "+506-####-####", "cc": "CR", "name_en": "Costa Rica", "desc_en": "", "name_ru": "Коста-Рика", "desc_ru": "" },
    { "mask": "+53-#-###-####", "cc": "CU", "name_en": "Cuba", "desc_en": "", "name_ru": "Куба", "desc_ru": "" },
    { "mask": "+238(###)##-##", "cc": "CV", "name_en": "Cape Verde", "desc_en": "", "name_ru": "Кабо-Верде", "desc_ru": "" },
    { "mask": "+599-###-####", "cc": "CW", "name_en": "Curacao", "desc_en": "", "name_ru": "Кюрасао", "desc_ru": "" },
    { "mask": "+357-##-###-###", "cc": "CY", "name_en": "Cyprus", "desc_en": "", "name_ru": "Кипр", "desc_ru": "" },
    { "mask": "+420(###)###-###", "cc": "CZ", "name_en": "Czech Republic", "desc_en": "", "name_ru": "Чехия", "desc_ru": "" },
    { "mask": "+49(####)###-####", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "mask": "+49(###)###-####", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "mask": "+49(###)##-####", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "mask": "+49(###)##-###", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "mask": "+49(###)##-##", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "mask": "+49-###-###", "cc": "DE", "name_en": "Germany", "desc_en": "", "name_ru": "Германия", "desc_ru": "" },
    { "mask": "+253-##-##-##-##", "cc": "DJ", "name_en": "Djibouti", "desc_en": "", "name_ru": "Джибути", "desc_ru": "" },
    { "mask": "+45-##-##-##-##", "cc": "DK", "name_en": "Denmark", "desc_en": "", "name_ru": "Дания", "desc_ru": "" },
    { "mask": "+1(767)###-####", "cc": "DM", "name_en": "Dominica", "desc_en": "", "name_ru": "Доминика", "desc_ru": "" },
    { "mask": "+1(809)###-####", "cc": "DO", "name_en": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
    { "mask": "+1(829)###-####", "cc": "DO", "name_en": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
    { "mask": "+1(849)###-####", "cc": "DO", "name_en": "Dominican Republic", "desc_en": "", "name_ru": "Доминиканская Республика", "desc_ru": "" },
    { "mask": "+213-##-###-####", "cc": "DZ", "name_en": "Algeria", "desc_en": "", "name_ru": "Алжир", "desc_ru": "" },
    { "mask": "+593-##-###-####", "cc": "EC", "name_en": "Ecuador ", "desc_en": "mobile", "name_ru": "Эквадор ", "desc_ru": "мобильные" },
    { "mask": "+593-#-###-####", "cc": "EC", "name_en": "Ecuador", "desc_en": "", "name_ru": "Эквадор", "desc_ru": "" },
    { "mask": "+372-####-####", "cc": "EE", "name_en": "Estonia ", "desc_en": "mobile", "name_ru": "Эстония ", "desc_ru": "мобильные" },
    { "mask": "+372-###-####", "cc": "EE", "name_en": "Estonia", "desc_en": "", "name_ru": "Эстония", "desc_ru": "" },
    { "mask": "+20(###)###-####", "cc": "EG", "name_en": "Egypt", "desc_en": "", "name_ru": "Египет", "desc_ru": "" },
    { "mask": "+291-#-###-###", "cc": "ER", "name_en": "Eritrea", "desc_en": "", "name_ru": "Эритрея", "desc_ru": "" },
    { "mask": "+34(###)###-###", "cc": "ES", "name_en": "Spain", "desc_en": "", "name_ru": "Испания", "desc_ru": "" },
    { "mask": "+251-##-###-####", "cc": "ET", "name_en": "Ethiopia", "desc_en": "", "name_ru": "Эфиопия", "desc_ru": "" },
    { "mask": "+358(###)###-##-##", "cc": "FI", "name_en": "Finland", "desc_en": "", "name_ru": "Финляндия", "desc_ru": "" },
    { "mask": "+679-##-#####", "cc": "FJ", "name_en": "Fiji", "desc_en": "", "name_ru": "Фиджи", "desc_ru": "" },
    { "mask": "+500-#####", "cc": "FK", "name_en": "Falkland Islands", "desc_en": "", "name_ru": "Фолклендские острова", "desc_ru": "" },
    { "mask": "+691-###-####", "cc": "FM", "name_en": "F.S. Micronesia", "desc_en": "", "name_ru": "Ф.Ш. Микронезии", "desc_ru": "" },
    { "mask": "+298-###-###", "cc": "FO", "name_en": "Faroe Islands", "desc_en": "", "name_ru": "Фарерские острова", "desc_ru": "" },
    { "mask": "+262-#####-####", "cc": "FR", "name_en": "Mayotte", "desc_en": "", "name_ru": "Майотта", "desc_ru": "" },
    { "mask": "+33(###)###-###", "cc": "FR", "name_en": "France", "desc_en": "", "name_ru": "Франция", "desc_ru": "" },
    { "mask": "+508-##-####", "cc": "FR", "name_en": "St Pierre & Miquelon", "desc_en": "", "name_ru": "Сен-Пьер и Микелон", "desc_ru": "" },
    { "mask": "+590(###)###-###", "cc": "FR", "name_en": "Guadeloupe", "desc_en": "", "name_ru": "Гваделупа", "desc_ru": "" },
    { "mask": "+241-#-##-##-##", "cc": "GA", "name_en": "Gabon", "desc_en": "", "name_ru": "Габон", "desc_ru": "" },
    { "mask": "+1(473)###-####", "cc": "GD", "name_en": "Grenada", "desc_en": "", "name_ru": "Гренада", "desc_ru": "" },
    { "mask": "+995(###)###-###", "cc": "GE", "name_en": "Rep. of Georgia", "desc_en": "", "name_ru": "Грузия", "desc_ru": "" },
    { "mask": "+594-#####-####", "cc": "GF", "name_en": "Guiana (French)", "desc_en": "", "name_ru": "Фр. Гвиана", "desc_ru": "" },
    { "mask": "+233(###)###-###", "cc": "GH", "name_en": "Ghana", "desc_en": "", "name_ru": "Гана", "desc_ru": "" },
    { "mask": "+350-###-#####", "cc": "GI", "name_en": "Gibraltar", "desc_en": "", "name_ru": "Гибралтар", "desc_ru": "" },
    { "mask": "+299-##-##-##", "cc": "GL", "name_en": "Greenland", "desc_en": "", "name_ru": "Гренландия", "desc_ru": "" },
    { "mask": "+220(###)##-##", "cc": "GM", "name_en": "Gambia", "desc_en": "", "name_ru": "Гамбия", "desc_ru": "" },
    { "mask": "+224-##-###-###", "cc": "GN", "name_en": "Guinea", "desc_en": "", "name_ru": "Гвинея", "desc_ru": "" },
    { "mask": "+240-##-###-####", "cc": "GQ", "name_en": "Equatorial Guinea", "desc_en": "", "name_ru": "Экваториальная Гвинея", "desc_ru": "" },
    { "mask": "+30(###)###-####", "cc": "GR", "name_en": "Greece", "desc_en": "", "name_ru": "Греция", "desc_ru": "" },
    { "mask": "+502-#-###-####", "cc": "GT", "name_en": "Guatemala", "desc_en": "", "name_ru": "Гватемала", "desc_ru": "" },
    { "mask": "+1(671)###-####", "cc": "GU", "name_en": "Guam", "desc_en": "", "name_ru": "Гуам", "desc_ru": "" },
    { "mask": "+245-#-######", "cc": "GW", "name_en": "Guinea-Bissau", "desc_en": "", "name_ru": "Гвинея-Бисау", "desc_ru": "" },
    { "mask": "+592-###-####", "cc": "GY", "name_en": "Guyana", "desc_en": "", "name_ru": "Гайана", "desc_ru": "" },
    { "mask": "+852-####-####", "cc": "HK", "name_en": "Hong Kong", "desc_en": "", "name_ru": "Гонконг", "desc_ru": "" },
    { "mask": "+504-####-####", "cc": "HN", "name_en": "Honduras", "desc_en": "", "name_ru": "Гондурас", "desc_ru": "" },
    { "mask": "+385-##-###-###", "cc": "HR", "name_en": "Croatia", "desc_en": "", "name_ru": "Хорватия", "desc_ru": "" },
    { "mask": "+509-##-##-####", "cc": "HT", "name_en": "Haiti", "desc_en": "", "name_ru": "Гаити", "desc_ru": "" },
    { "mask": "+36(###)###-###", "cc": "HU", "name_en": "Hungary", "desc_en": "", "name_ru": "Венгрия", "desc_ru": "" },
    { "mask": "+62(8##)###-####", "cc": "ID", "name_en": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
    { "mask": "+62-##-###-##", "cc": "ID", "name_en": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
    { "mask": "+62-##-###-###", "cc": "ID", "name_en": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
    { "mask": "+62-##-###-####", "cc": "ID", "name_en": "Indonesia", "desc_en": "", "name_ru": "Индонезия", "desc_ru": "" },
    { "mask": "+62(8##)###-###", "cc": "ID", "name_en": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
    { "mask": "+62(8##)###-##-###", "cc": "ID", "name_en": "Indonesia ", "desc_en": "mobile", "name_ru": "Индонезия ", "desc_ru": "мобильные" },
    { "mask": "+353(###)###-###", "cc": "IE", "name_en": "Ireland", "desc_en": "", "name_ru": "Ирландия", "desc_ru": "" },
    { "mask": "+972-5#-###-####", "cc": "IL", "name_en": "Israel ", "desc_en": "mobile", "name_ru": "Израиль ", "desc_ru": "мобильные" },
    { "mask": "+972-#-###-####", "cc": "IL", "name_en": "Israel", "desc_en": "", "name_ru": "Израиль", "desc_ru": "" },
    { "mask": "+91(####)###-###", "cc": "IN", "name_en": "India", "desc_en": "", "name_ru": "Индия", "desc_ru": "" },
    { "mask": "+246-###-####", "cc": "IO", "name_en": "Diego Garcia", "desc_en": "", "name_ru": "Диего-Гарсия", "desc_ru": "" },
    { "mask": "+964(###)###-####", "cc": "IQ", "name_en": "Iraq", "desc_en": "", "name_ru": "Ирак", "desc_ru": "" },
    { "mask": "+98(###)###-####", "cc": "IR", "name_en": "Iran", "desc_en": "", "name_ru": "Иран", "desc_ru": "" },
    { "mask": "+354-###-####", "cc": "IS", "name_en": "Iceland", "desc_en": "", "name_ru": "Исландия", "desc_ru": "" },
    { "mask": "+39(###)####-###", "cc": "IT", "name_en": "Italy", "desc_en": "", "name_ru": "Италия", "desc_ru": "" },
    { "mask": "+1(876)###-####", "cc": "JM", "name_en": "Jamaica", "desc_en": "", "name_ru": "Ямайка", "desc_ru": "" },
    { "mask": "+962-#-####-####", "cc": "JO", "name_en": "Jordan", "desc_en": "", "name_ru": "Иордания", "desc_ru": "" },
    { "mask": "+81-##-####-####", "cc": "JP", "name_en": "Japan ", "desc_en": "mobile", "name_ru": "Япония ", "desc_ru": "мобильные" },
    { "mask": "+81(###)###-###", "cc": "JP", "name_en": "Japan", "desc_en": "", "name_ru": "Япония", "desc_ru": "" },
    { "mask": "+254-###-######", "cc": "KE", "name_en": "Kenya", "desc_en": "", "name_ru": "Кения", "desc_ru": "" },
    { "mask": "+996(###)###-###", "cc": "KG", "name_en": "Kyrgyzstan", "desc_en": "", "name_ru": "Киргизия", "desc_ru": "" },
    { "mask": "+855-##-###-###", "cc": "KH", "name_en": "Cambodia", "desc_en": "", "name_ru": "Камбоджа", "desc_ru": "" },
    { "mask": "+686-##-###", "cc": "KI", "name_en": "Kiribati", "desc_en": "", "name_ru": "Кирибати", "desc_ru": "" },
    { "mask": "+269-##-#####", "cc": "KM", "name_en": "Comoros", "desc_en": "", "name_ru": "Коморы", "desc_ru": "" },
    { "mask": "+1(869)###-####", "cc": "KN", "name_en": "Saint Kitts & Nevis", "desc_en": "", "name_ru": "Сент-Китс и Невис", "desc_ru": "" },
    { "mask": "+850-191-###-####", "cc": "KP", "name_en": "DPR Korea (North) ", "desc_en": "mobile", "name_ru": "Корейская НДР ", "desc_ru": "мобильные" },
    { "mask": "+850-##-###-###", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "mask": "+850-###-####-###", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "mask": "+850-###-###", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "mask": "+850-####-####", "cc": "KP", "name_en": "DPR Korea (North)", "desc_en": "", "name_ru": "Корейская НДР", "desc_ru": "" },
    { "mask": "+82-##-###-####", "cc": "KR", "name_en": "Korea (South)", "desc_en": "", "name_ru": "Респ. Корея", "desc_ru": "" },
    { "mask": "+965-####-####", "cc": "KW", "name_en": "Kuwait", "desc_en": "", "name_ru": "Кувейт", "desc_ru": "" },
    { "mask": "+1(345)###-####", "cc": "KY", "name_en": "Cayman Islands", "desc_en": "", "name_ru": "Каймановы острова", "desc_ru": "" },
    { "mask": "+7(6##)###-##-##", "cc": "KZ", "name_en": "Kazakhstan", "desc_en": "", "name_ru": "Казахстан", "desc_ru": "" },
    { "mask": "+7(7##)###-##-##", "cc": "KZ", "name_en": "Kazakhstan", "desc_en": "", "name_ru": "Казахстан", "desc_ru": "" },
    { "mask": "+856(20##)###-###", "cc": "LA", "name_en": "Laos ", "desc_en": "mobile", "name_ru": "Лаос ", "desc_ru": "мобильные" },
    { "mask": "+856-##-###-###", "cc": "LA", "name_en": "Laos", "desc_en": "", "name_ru": "Лаос", "desc_ru": "" },
    { "mask": "+961-##-###-###", "cc": "LB", "name_en": "Lebanon ", "desc_en": "mobile", "name_ru": "Ливан ", "desc_ru": "мобильные" },
    { "mask": "+961-#-###-###", "cc": "LB", "name_en": "Lebanon", "desc_en": "", "name_ru": "Ливан", "desc_ru": "" },
    { "mask": "+1(758)###-####", "cc": "LC", "name_en": "Saint Lucia", "desc_en": "", "name_ru": "Сент-Люсия", "desc_ru": "" },
    { "mask": "+423(###)###-####", "cc": "LI", "name_en": "Liechtenstein", "desc_en": "", "name_ru": "Лихтенштейн", "desc_ru": "" },
    { "mask": "+94-##-###-####", "cc": "LK", "name_en": "Sri Lanka", "desc_en": "", "name_ru": "Шри-Ланка", "desc_ru": "" },
    { "mask": "+231-##-###-###", "cc": "LR", "name_en": "Liberia", "desc_en": "", "name_ru": "Либерия", "desc_ru": "" },
    { "mask": "+266-#-###-####", "cc": "LS", "name_en": "Lesotho", "desc_en": "", "name_ru": "Лесото", "desc_ru": "" },
    { "mask": "+370(###)##-###", "cc": "LT", "name_en": "Lithuania", "desc_en": "", "name_ru": "Литва", "desc_ru": "" },
    { "mask": "+352(###)###-###", "cc": "LU", "name_en": "Luxembourg", "desc_en": "", "name_ru": "Люксембург", "desc_ru": "" },
    { "mask": "+371-##-###-###", "cc": "LV", "name_en": "Latvia", "desc_en": "", "name_ru": "Латвия", "desc_ru": "" },
    { "mask": "+218-##-###-###", "cc": "LY", "name_en": "Libya", "desc_en": "", "name_ru": "Ливия", "desc_ru": "" },
    { "mask": "+218-21-###-####", "cc": "LY", "name_en": "Libya", "desc_en": "Tripoli", "name_ru": "Ливия", "desc_ru": "Триполи" },
    { "mask": "+212-##-####-###", "cc": "MA", "name_en": "Morocco", "desc_en": "", "name_ru": "Марокко", "desc_ru": "" },
    { "mask": "+377(###)###-###", "cc": "MC", "name_en": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "" },
    { "mask": "+377-##-###-###", "cc": "MC", "name_en": "Monaco", "desc_en": "", "name_ru": "Монако", "desc_ru": "" },
    { "mask": "+373-####-####", "cc": "MD", "name_en": "Moldova", "desc_en": "", "name_ru": "Молдова", "desc_ru": "" },
    { "mask": "+382-##-###-###", "cc": "ME", "name_en": "Montenegro", "desc_en": "", "name_ru": "Черногория", "desc_ru": "" },
    { "mask": "+261-##-##-#####", "cc": "MG", "name_en": "Madagascar", "desc_en": "", "name_ru": "Мадагаскар", "desc_ru": "" },
    { "mask": "+692-###-####", "cc": "MH", "name_en": "Marshall Islands", "desc_en": "", "name_ru": "Маршалловы Острова", "desc_ru": "" },
    { "mask": "+389-##-###-###", "cc": "MK", "name_en": "Republic of Macedonia", "desc_en": "", "name_ru": "Респ. Македония", "desc_ru": "" },
    { "mask": "+223-##-##-####", "cc": "ML", "name_en": "Mali", "desc_en": "", "name_ru": "Мали", "desc_ru": "" },
    { "mask": "+95-##-###-###", "cc": "MM", "name_en": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
    { "mask": "+95-#-###-###", "cc": "MM", "name_en": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
    { "mask": "+95-###-###", "cc": "MM", "name_en": "Burma (Myanmar)", "desc_en": "", "name_ru": "Бирма (Мьянма)", "desc_ru": "" },
    { "mask": "+976-##-##-####", "cc": "MN", "name_en": "Mongolia", "desc_en": "", "name_ru": "Монголия", "desc_ru": "" },
    { "mask": "+853-####-####", "cc": "MO", "name_en": "Macau", "desc_en": "", "name_ru": "Макао", "desc_ru": "" },
    { "mask": "+1(670)###-####", "cc": "MP", "name_en": "Northern Mariana Islands", "desc_en": "", "name_ru": "Северные Марианские острова Сайпан", "desc_ru": "" },
    { "mask": "+596(###)##-##-##", "cc": "MQ", "name_en": "Martinique", "desc_en": "", "name_ru": "Мартиника", "desc_ru": "" },
    { "mask": "+222-##-##-####", "cc": "MR", "name_en": "Mauritania", "desc_en": "", "name_ru": "Мавритания", "desc_ru": "" },
    { "mask": "+1(664)###-####", "cc": "MS", "name_en": "Montserrat", "desc_en": "", "name_ru": "Монтсеррат", "desc_ru": "" },
    { "mask": "+356-####-####", "cc": "MT", "name_en": "Malta", "desc_en": "", "name_ru": "Мальта", "desc_ru": "" },
    { "mask": "+230-###-####", "cc": "MU", "name_en": "Mauritius", "desc_en": "", "name_ru": "Маврикий", "desc_ru": "" },
    { "mask": "+960-###-####", "cc": "MV", "name_en": "Maldives", "desc_en": "", "name_ru": "Мальдивские острова", "desc_ru": "" },
    { "mask": "+265-1-###-###", "cc": "MW", "name_en": "Malawi", "desc_en": "Telecom Ltd", "name_ru": "Малави", "desc_ru": "Telecom Ltd" },
    { "mask": "+265-#-####-####", "cc": "MW", "name_en": "Malawi", "desc_en": "", "name_ru": "Малави", "desc_ru": "" },
    { "mask": "+52(###)###-####", "cc": "MX", "name_en": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "" },
    { "mask": "+52-##-##-####", "cc": "MX", "name_en": "Mexico", "desc_en": "", "name_ru": "Мексика", "desc_ru": "" },
    { "mask": "+60-##-###-####", "cc": "MY", "name_en": "Malaysia ", "desc_en": "mobile", "name_ru": "Малайзия ", "desc_ru": "мобильные" },
    { "mask": "+60(###)###-###", "cc": "MY", "name_en": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
    { "mask": "+60-##-###-###", "cc": "MY", "name_en": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
    { "mask": "+60-#-###-###", "cc": "MY", "name_en": "Malaysia", "desc_en": "", "name_ru": "Малайзия", "desc_ru": "" },
    { "mask": "+258-##-###-###", "cc": "MZ", "name_en": "Mozambique", "desc_en": "", "name_ru": "Мозамбик", "desc_ru": "" },
    { "mask": "+264-##-###-####", "cc": "NA", "name_en": "Namibia", "desc_en": "", "name_ru": "Намибия", "desc_ru": "" },
    { "mask": "+687-##-####", "cc": "NC", "name_en": "New Caledonia", "desc_en": "", "name_ru": "Новая Каледония", "desc_ru": "" },
    { "mask": "+227-##-##-####", "cc": "NE", "name_en": "Niger", "desc_en": "", "name_ru": "Нигер", "desc_ru": "" },
    { "mask": "+672-3##-###", "cc": "NF", "name_en": "Norfolk Island", "desc_en": "", "name_ru": "Норфолк (остров)", "desc_ru": "" },
    { "mask": "+234(###)###-####", "cc": "NG", "name_en": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
    { "mask": "+234-##-###-###", "cc": "NG", "name_en": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
    { "mask": "+234-##-###-##", "cc": "NG", "name_en": "Nigeria", "desc_en": "", "name_ru": "Нигерия", "desc_ru": "" },
    { "mask": "+234(###)###-####", "cc": "NG", "name_en": "Nigeria ", "desc_en": "mobile", "name_ru": "Нигерия ", "desc_ru": "мобильные" },
    { "mask": "+505-####-####", "cc": "NI", "name_en": "Nicaragua", "desc_en": "", "name_ru": "Никарагуа", "desc_ru": "" },
    { "mask": "+31-##-###-####", "cc": "NL", "name_en": "Netherlands", "desc_en": "", "name_ru": "Нидерланды", "desc_ru": "" },
    { "mask": "+47(###)##-###", "cc": "NO", "name_en": "Norway", "desc_en": "", "name_ru": "Норвегия", "desc_ru": "" },
    { "mask": "+977-##-###-###", "cc": "NP", "name_en": "Nepal", "desc_en": "", "name_ru": "Непал", "desc_ru": "" },
    { "mask": "+674-###-####", "cc": "NR", "name_en": "Nauru", "desc_en": "", "name_ru": "Науру", "desc_ru": "" },
    { "mask": "+683-####", "cc": "NU", "name_en": "Niue", "desc_en": "", "name_ru": "Ниуэ", "desc_ru": "" },
    { "mask": "+64(###)###-###", "cc": "NZ", "name_en": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
    { "mask": "+64-##-###-###", "cc": "NZ", "name_en": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
    { "mask": "+64(###)###-####", "cc": "NZ", "name_en": "New Zealand", "desc_en": "", "name_ru": "Новая Зеландия", "desc_ru": "" },
    { "mask": "+968-##-###-###", "cc": "OM", "name_en": "Oman", "desc_en": "", "name_ru": "Оман", "desc_ru": "" },
    { "mask": "+507-###-####", "cc": "PA", "name_en": "Panama", "desc_en": "", "name_ru": "Панама", "desc_ru": "" },
    { "mask": "+51(###)###-###", "cc": "PE", "name_en": "Peru", "desc_en": "", "name_ru": "Перу", "desc_ru": "" },
    { "mask": "+689-##-##-##", "cc": "PF", "name_en": "French Polynesia", "desc_en": "", "name_ru": "Французская Полинезия (Таити)", "desc_ru": "" },
    { "mask": "+675(###)##-###", "cc": "PG", "name_en": "Papua New Guinea", "desc_en": "", "name_ru": "Папуа-Новая Гвинея", "desc_ru": "" },
    { "mask": "+63(###)###-####", "cc": "PH", "name_en": "Philippines", "desc_en": "", "name_ru": "Филиппины", "desc_ru": "" },
    { "mask": "+92(###)###-####", "cc": "PK", "name_en": "Pakistan", "desc_en": "", "name_ru": "Пакистан", "desc_ru": "" },
    { "mask": "+48(###)###-###", "cc": "PL", "name_en": "Poland", "desc_en": "", "name_ru": "Польша", "desc_ru": "" },
    { "mask": "+970-##-###-####", "cc": "PS", "name_en": "Palestine", "desc_en": "", "name_ru": "Палестина", "desc_ru": "" },
    { "mask": "+351-##-###-####", "cc": "PT", "name_en": "Portugal", "desc_en": "", "name_ru": "Португалия", "desc_ru": "" },
    { "mask": "+680-###-####", "cc": "PW", "name_en": "Palau", "desc_en": "", "name_ru": "Палау", "desc_ru": "" },
    { "mask": "+595(###)###-###", "cc": "PY", "name_en": "Paraguay", "desc_en": "", "name_ru": "Парагвай", "desc_ru": "" },
    { "mask": "+974-####-####", "cc": "QA", "name_en": "Qatar", "desc_en": "", "name_ru": "Катар", "desc_ru": "" },
    { "mask": "+262-#####-####", "cc": "RE", "name_en": "Reunion", "desc_en": "", "name_ru": "Реюньон", "desc_ru": "" },
    { "mask": "+40-##-###-####", "cc": "RO", "name_en": "Romania", "desc_en": "", "name_ru": "Румыния", "desc_ru": "" },
    { "mask": "+381-##-###-####", "cc": "RS", "name_en": "Serbia", "desc_en": "", "name_ru": "Сербия", "desc_ru": "" },
    { "mask": "+250(###)###-###", "cc": "RW", "name_en": "Rwanda", "desc_en": "", "name_ru": "Руанда", "desc_ru": "" },
    { "mask": "+966-5-####-####", "cc": "SA", "name_en": "Saudi Arabia ", "desc_en": "mobile", "name_ru": "Саудовская Аравия ", "desc_ru": "мобильные" },
    { "mask": "+966-#-###-####", "cc": "SA", "name_en": "Saudi Arabia", "desc_en": "", "name_ru": "Саудовская Аравия", "desc_ru": "" },
    { "mask": "+677-###-####", "cc": "SB", "name_en": "Solomon Islands ", "desc_en": "mobile", "name_ru": "Соломоновы Острова ", "desc_ru": "мобильные" },
    { "mask": "+677-#####", "cc": "SB", "name_en": "Solomon Islands", "desc_en": "", "name_ru": "Соломоновы Острова", "desc_ru": "" },
    { "mask": "+248-#-###-###", "cc": "SC", "name_en": "Seychelles", "desc_en": "", "name_ru": "Сейшелы", "desc_ru": "" },
    { "mask": "+249-##-###-####", "cc": "SD", "name_en": "Sudan", "desc_en": "", "name_ru": "Судан", "desc_ru": "" },
    { "mask": "+46-##-###-####", "cc": "SE", "name_en": "Sweden", "desc_en": "", "name_ru": "Швеция", "desc_ru": "" },
    { "mask": "+65-####-####", "cc": "SG", "name_en": "Singapore", "desc_en": "", "name_ru": "Сингапур", "desc_ru": "" },
    { "mask": "+290-####", "cc": "SH", "name_en": "Saint Helena", "desc_en": "", "name_ru": "Остров Святой Елены", "desc_ru": "" },
    { "mask": "+290-####", "cc": "SH", "name_en": "Tristan da Cunha", "desc_en": "", "name_ru": "Тристан-да-Кунья", "desc_ru": "" },
    { "mask": "+386-##-###-###", "cc": "SI", "name_en": "Slovenia", "desc_en": "", "name_ru": "Словения", "desc_ru": "" },
    { "mask": "+421(###)###-###", "cc": "SK", "name_en": "Slovakia", "desc_en": "", "name_ru": "Словакия", "desc_ru": "" },
    { "mask": "+232-##-######", "cc": "SL", "name_en": "Sierra Leone", "desc_en": "", "name_ru": "Сьерра-Леоне", "desc_ru": "" },
    { "mask": "+378-####-######", "cc": "SM", "name_en": "San Marino", "desc_en": "", "name_ru": "Сан-Марино", "desc_ru": "" },
    { "mask": "+221-##-###-####", "cc": "SN", "name_en": "Senegal", "desc_en": "", "name_ru": "Сенегал", "desc_ru": "" },
    { "mask": "+252-##-###-###", "cc": "SO", "name_en": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "" },
    { "mask": "+252-#-###-###", "cc": "SO", "name_en": "Somalia", "desc_en": "", "name_ru": "Сомали", "desc_ru": "" },
    { "mask": "+252-#-###-###", "cc": "SO", "name_en": "Somalia ", "desc_en": "mobile", "name_ru": "Сомали ", "desc_ru": "мобильные" },
    { "mask": "+597-###-####", "cc": "SR", "name_en": "Suriname ", "desc_en": "mobile", "name_ru": "Суринам ", "desc_ru": "мобильные" },
    { "mask": "+597-###-###", "cc": "SR", "name_en": "Suriname", "desc_en": "", "name_ru": "Суринам", "desc_ru": "" },
    { "mask": "+211-##-###-####", "cc": "SS", "name_en": "South Sudan", "desc_en": "", "name_ru": "Южный Судан", "desc_ru": "" },
    { "mask": "+239-##-#####", "cc": "ST", "name_en": "Sao Tome and Principe", "desc_en": "", "name_ru": "Сан-Томе и Принсипи", "desc_ru": "" },
    { "mask": "+503-##-##-####", "cc": "SV", "name_en": "El Salvador", "desc_en": "", "name_ru": "Сальвадор", "desc_ru": "" },
    { "mask": "+1(721)###-####", "cc": "SX", "name_en": "Sint Maarten", "desc_en": "", "name_ru": "Синт-Маартен", "desc_ru": "" },
    { "mask": "+963-##-####-###", "cc": "SY", "name_en": "Syrian Arab Republic", "desc_en": "", "name_ru": "Сирийская арабская республика", "desc_ru": "" },
    { "mask": "+268-##-##-####", "cc": "SZ", "name_en": "Swaziland", "desc_en": "", "name_ru": "Свазиленд", "desc_ru": "" },
    { "mask": "+1(649)###-####", "cc": "TC", "name_en": "Turks & Caicos", "desc_en": "", "name_ru": "Тёркс и Кайкос", "desc_ru": "" },
    { "mask": "+235-##-##-##-##", "cc": "TD", "name_en": "Chad", "desc_en": "", "name_ru": "Чад", "desc_ru": "" },
    { "mask": "+228-##-###-###", "cc": "TG", "name_en": "Togo", "desc_en": "", "name_ru": "Того", "desc_ru": "" },
    { "mask": "+66-##-###-####", "cc": "TH", "name_en": "Thailand ", "desc_en": "mobile", "name_ru": "Таиланд ", "desc_ru": "мобильные" },
    { "mask": "+66-##-###-###", "cc": "TH", "name_en": "Thailand", "desc_en": "", "name_ru": "Таиланд", "desc_ru": "" },
    { "mask": "+992-##-###-####", "cc": "TJ", "name_en": "Tajikistan", "desc_en": "", "name_ru": "Таджикистан", "desc_ru": "" },
    { "mask": "+690-####", "cc": "TK", "name_en": "Tokelau", "desc_en": "", "name_ru": "Токелау", "desc_ru": "" },
    { "mask": "+670-###-####", "cc": "TL", "name_en": "East Timor", "desc_en": "", "name_ru": "Восточный Тимор", "desc_ru": "" },
    { "mask": "+670-77#-#####", "cc": "TL", "name_en": "East Timor", "desc_en": "Timor Telecom", "name_ru": "Восточный Тимор", "desc_ru": "Timor Telecom" },
    { "mask": "+670-78#-#####", "cc": "TL", "name_en": "East Timor", "desc_en": "Timor Telecom", "name_ru": "Восточный Тимор", "desc_ru": "Timor Telecom" },
    { "mask": "+993-#-###-####", "cc": "TM", "name_en": "Turkmenistan", "desc_en": "", "name_ru": "Туркменистан", "desc_ru": "" },
    { "mask": "+216-##-###-###", "cc": "TN", "name_en": "Tunisia", "desc_en": "", "name_ru": "Тунис", "desc_ru": "" },
    { "mask": "+676-#####", "cc": "TO", "name_en": "Tonga", "desc_en": "", "name_ru": "Тонга", "desc_ru": "" },
    { "mask": "+90(###)###-####", "cc": "TR", "name_en": "Turkey", "desc_en": "", "name_ru": "Турция", "desc_ru": "" },
    { "mask": "+1(868)###-####", "cc": "TT", "name_en": "Trinidad & Tobago", "desc_en": "", "name_ru": "Тринидад и Тобаго", "desc_ru": "" },
    { "mask": "+688-90####", "cc": "TV", "name_en": "Tuvalu ", "desc_en": "mobile", "name_ru": "Тувалу ", "desc_ru": "мобильные" },
    { "mask": "+688-2####", "cc": "TV", "name_en": "Tuvalu", "desc_en": "", "name_ru": "Тувалу", "desc_ru": "" },
    { "mask": "+886-#-####-####", "cc": "TW", "name_en": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "" },
    { "mask": "+886-####-####", "cc": "TW", "name_en": "Taiwan", "desc_en": "", "name_ru": "Тайвань", "desc_ru": "" },
    { "mask": "+255-##-###-####", "cc": "TZ", "name_en": "Tanzania", "desc_en": "", "name_ru": "Танзания", "desc_ru": "" },
    { "mask": "+380(##)###-##-##", "cc": "UA", "name_en": "Ukraine", "desc_en": "", "name_ru": "Украина", "desc_ru": "" },
    { "mask": "+256(###)###-###", "cc": "UG", "name_en": "Uganda", "desc_en": "", "name_ru": "Уганда", "desc_ru": "" },
    { "mask": "+44-##-####-####", "cc": "UK", "name_en": "United Kingdom", "desc_en": "", "name_ru": "Великобритания", "desc_ru": "" },
    { "mask": "+598-#-###-##-##", "cc": "UY", "name_en": "Uruguay", "desc_en": "", "name_ru": "Уругвай", "desc_ru": "" },
    { "mask": "+998-##-###-####", "cc": "UZ", "name_en": "Uzbekistan", "desc_en": "", "name_ru": "Узбекистан", "desc_ru": "" },
    { "mask": "+39-6-698-#####", "cc": "VA", "name_en": "Vatican City", "desc_en": "", "name_ru": "Ватикан", "desc_ru": "" },
    { "mask": "+1(784)###-####", "cc": "VC", "name_en": "Saint Vincent & the Grenadines", "desc_en": "", "name_ru": "Сент-Винсент и Гренадины", "desc_ru": "" },
    { "mask": "+58(###)###-####", "cc": "VE", "name_en": "Venezuela", "desc_en": "", "name_ru": "Венесуэла", "desc_ru": "" },
    { "mask": "+1(284)###-####", "cc": "VG", "name_en": "British Virgin Islands", "desc_en": "", "name_ru": "Британские Виргинские острова", "desc_ru": "" },
    { "mask": "+1(340)###-####", "cc": "VI", "name_en": "US Virgin Islands", "desc_en": "", "name_ru": "Американские Виргинские острова", "desc_ru": "" },
    { "mask": "+84-##-####-###", "cc": "VN", "name_en": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "" },
    { "mask": "+84(###)####-###", "cc": "VN", "name_en": "Vietnam", "desc_en": "", "name_ru": "Вьетнам", "desc_ru": "" },
    { "mask": "+678-##-#####", "cc": "VU", "name_en": "Vanuatu ", "desc_en": "mobile", "name_ru": "Вануату ", "desc_ru": "мобильные" },
    { "mask": "+678-#####", "cc": "VU", "name_en": "Vanuatu", "desc_en": "", "name_ru": "Вануату", "desc_ru": "" },
    { "mask": "+681-##-####", "cc": "WF", "name_en": "Wallis and Futuna", "desc_en": "", "name_ru": "Уоллис и Футуна", "desc_ru": "" },
    { "mask": "+685-##-####", "cc": "WS", "name_en": "Samoa", "desc_en": "", "name_ru": "Самоа", "desc_ru": "" },
    { "mask": "+967-###-###-###", "cc": "YE", "name_en": "Yemen ", "desc_en": "mobile", "name_ru": "Йемен ", "desc_ru": "мобильные" },
    { "mask": "+967-#-###-###", "cc": "YE", "name_en": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "" },
    { "mask": "+967-##-###-###", "cc": "YE", "name_en": "Yemen", "desc_en": "", "name_ru": "Йемен", "desc_ru": "" },
    { "mask": "+27-##-###-####", "cc": "ZA", "name_en": "South Africa", "desc_en": "", "name_ru": "Южно-Африканская Респ.", "desc_ru": "" },
    { "mask": "+260-##-###-####", "cc": "ZM", "name_en": "Zambia", "desc_en": "", "name_ru": "Замбия", "desc_ru": "" },
    { "mask": "+263-#-######", "cc": "ZW", "name_en": "Zimbabwe", "desc_en": "", "name_ru": "Зимбабве", "desc_ru": "" },
    { "mask": "+1(###)###-####", "cc": ["US", "CA"], "name_en": "USA and Canada", "desc_en": "", "name_ru": "США и Канада", "desc_ru": "" }
];