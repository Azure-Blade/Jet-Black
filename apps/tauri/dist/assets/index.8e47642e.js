;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver(i => {
    for (const s of i)
      if (s.type === 'childList')
        for (const a of s.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const s = {}
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
      i.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const s = n(i)
    fetch(i.href, s)
  }
})()
function M() {}
const At = e => e
function Cn(e, t) {
  for (const n in t) e[n] = t[n]
  return e
}
function zn(e) {
  return e && typeof e == 'object' && typeof e.then == 'function'
}
function Wt(e) {
  return e()
}
function ot() {
  return Object.create(null)
}
function ae(e) {
  e.forEach(Wt)
}
function Se(e) {
  return typeof e == 'function'
}
function U(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == 'object') || typeof e == 'function'
}
let ye
function lt(e, t) {
  return ye || (ye = document.createElement('a')), (ye.href = t), e === ye.href
}
function En(e) {
  return Object.keys(e).length === 0
}
function On(e, ...t) {
  if (e == null) return M
  const n = e.subscribe(...t)
  return n.unsubscribe ? () => n.unsubscribe() : n
}
function Sn(e, t, n) {
  e.$$.on_destroy.push(On(t, n))
}
function Tt(e, t, n, r) {
  if (e) {
    const i = Dt(e, t, n, r)
    return e[0](i)
  }
}
function Dt(e, t, n, r) {
  return e[1] && r ? Cn(n.ctx.slice(), e[1](r(t))) : n.ctx
}
function Ct(e, t, n, r) {
  if (e[2] && r) {
    const i = e[2](r(n))
    if (t.dirty === void 0) return i
    if (typeof i == 'object') {
      const s = [],
        a = Math.max(t.dirty.length, i.length)
      for (let o = 0; o < a; o += 1) s[o] = t.dirty[o] | i[o]
      return s
    }
    return t.dirty | i
  }
  return t.dirty
}
function zt(e, t, n, r, i, s) {
  if (i) {
    const a = Dt(t, n, r, s)
    e.p(a, i)
  }
}
function Et(e) {
  if (e.ctx.length > 32) {
    const t = [],
      n = e.ctx.length / 32
    for (let r = 0; r < n; r++) t[r] = -1
    return t
  }
  return -1
}
function Ln(e) {
  return e && Se(e.destroy) ? e.destroy : M
}
const Ot = typeof window < 'u'
let Rn = Ot ? () => window.performance.now() : () => Date.now(),
  Ye = Ot ? e => requestAnimationFrame(e) : M
const ne = new Set()
function St(e) {
  ne.forEach(t => {
    t.c(e) || (ne.delete(t), t.f())
  }),
    ne.size !== 0 && Ye(St)
}
function Fn(e) {
  let t
  return (
    ne.size === 0 && Ye(St),
    {
      promise: new Promise(n => {
        ne.add((t = { c: e, f: n }))
      }),
      abort() {
        ne.delete(t)
      }
    }
  )
}
function p(e, t) {
  e.appendChild(t)
}
function Lt(e) {
  if (!e) return document
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument
  return t && t.host ? t : e.ownerDocument
}
function jn(e) {
  const t = k('style')
  return In(Lt(e), t), t.sheet
}
function In(e, t) {
  return p(e.head || e, t), t.sheet
}
function z(e, t, n) {
  e.insertBefore(t, n || null)
}
function D(e) {
  e.parentNode && e.parentNode.removeChild(e)
}
function k(e) {
  return document.createElement(e)
}
function E(e) {
  return document.createElementNS('http://www.w3.org/2000/svg', e)
}
function K(e) {
  return document.createTextNode(e)
}
function F() {
  return K(' ')
}
function Le() {
  return K('')
}
function ce(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
}
function c(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n)
}
function Nn(e) {
  return Array.from(e.childNodes)
}
function Rt(e, t) {
  ;(t = '' + t), e.wholeText !== t && (e.data = t)
}
function ut(e, t) {
  e.value = t == null ? '' : t
}
function _e(e, t, n) {
  e.classList[n ? 'add' : 'remove'](t)
}
function Hn(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent('CustomEvent')
  return i.initCustomEvent(e, n, r, t), i
}
const Pe = new Map()
let xe = 0
function Un(e) {
  let t = 5381,
    n = e.length
  for (; n--; ) t = ((t << 5) - t) ^ e.charCodeAt(n)
  return t >>> 0
}
function qn(e, t) {
  const n = { stylesheet: jn(t), rules: {} }
  return Pe.set(e, n), n
}
function Vn(e, t, n, r, i, s, a, o = 0) {
  const f = 16.666 / r
  let l = `{
`
  for (let C = 0; C <= 1; C += f) {
    const L = t + (n - t) * s(C)
    l +=
      C * 100 +
      `%{${a(L, 1 - L)}}
`
  }
  const u =
      l +
      `100% {${a(n, 1 - n)}}
}`,
    d = `__svelte_${Un(u)}_${o}`,
    m = Lt(e),
    { stylesheet: y, rules: _ } = Pe.get(m) || qn(m, e)
  _[d] || ((_[d] = !0), y.insertRule(`@keyframes ${d} ${u}`, y.cssRules.length))
  const T = e.style.animation || ''
  return (
    (e.style.animation = `${
      T ? `${T}, ` : ''
    }${d} ${r}ms linear ${i}ms 1 both`),
    (xe += 1),
    d
  )
}
function ct(e, t) {
  const n = (e.style.animation || '').split(', '),
    r = n.filter(t ? s => s.indexOf(t) < 0 : s => s.indexOf('__svelte') === -1),
    i = n.length - r.length
  i && ((e.style.animation = r.join(', ')), (xe -= i), xe || Bn())
}
function Bn() {
  Ye(() => {
    xe ||
      (Pe.forEach(e => {
        const { ownerNode: t } = e.stylesheet
        t && D(t)
      }),
      Pe.clear())
  })
}
let he
function Q(e) {
  he = e
}
function pe() {
  if (!he) throw new Error('Function called outside component initialization')
  return he
}
function Gn(e) {
  pe().$$.on_mount.push(e)
}
function Yn(e, t) {
  return pe().$$.context.set(e, t), t
}
function Ke(e) {
  return pe().$$.context.get(e)
}
function Kn(e) {
  return pe().$$.context.has(e)
}
const oe = [],
  dt = [],
  ve = [],
  ft = [],
  Ft = Promise.resolve()
let Ue = !1
function jt() {
  Ue || ((Ue = !0), Ft.then(Je))
}
function Jn() {
  return jt(), Ft
}
function re(e) {
  ve.push(e)
}
const je = new Set()
let ge = 0
function Je() {
  const e = he
  do {
    for (; ge < oe.length; ) {
      const t = oe[ge]
      ge++, Q(t), Xn(t.$$)
    }
    for (Q(null), oe.length = 0, ge = 0; dt.length; ) dt.pop()()
    for (let t = 0; t < ve.length; t += 1) {
      const n = ve[t]
      je.has(n) || (je.add(n), n())
    }
    ve.length = 0
  } while (oe.length)
  for (; ft.length; ) ft.pop()()
  ;(Ue = !1), je.clear(), Q(e)
}
function Xn(e) {
  if (e.fragment !== null) {
    e.update(), ae(e.before_update)
    const t = e.dirty
    ;(e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(re)
  }
}
let se
function Qn() {
  return (
    se ||
      ((se = Promise.resolve()),
      se.then(() => {
        se = null
      })),
    se
  )
}
function ht(e, t, n) {
  e.dispatchEvent(Hn(`${t ? 'intro' : 'outro'}${n}`))
}
const Me = new Set()
let Z
function Re() {
  Z = { r: 0, c: [], p: Z }
}
function Fe() {
  Z.r || ae(Z.c), (Z = Z.p)
}
function P(e, t) {
  e && e.i && (Me.delete(e), e.i(t))
}
function x(e, t, n, r) {
  if (e && e.o) {
    if (Me.has(e)) return
    Me.add(e),
      Z.c.push(() => {
        Me.delete(e), r && (n && e.d(1), r())
      }),
      e.o(t)
  } else r && r()
}
const Zn = { duration: 0 }
function It(e, t, n) {
  let r = t(e, n),
    i = !1,
    s,
    a,
    o = 0
  function f() {
    s && ct(e, s)
  }
  function l() {
    const {
      delay: d = 0,
      duration: m = 300,
      easing: y = At,
      tick: _ = M,
      css: T
    } = r || Zn
    T && (s = Vn(e, 0, 1, m, d, y, T, o++)), _(0, 1)
    const C = Rn() + d,
      L = C + m
    a && a.abort(),
      (i = !0),
      re(() => ht(e, !0, 'start')),
      (a = Fn(R => {
        if (i) {
          if (R >= L) return _(1, 0), ht(e, !0, 'end'), f(), (i = !1)
          if (R >= C) {
            const q = y((R - C) / m)
            _(q, 1 - q)
          }
        }
        return i
      }))
  }
  let u = !1
  return {
    start() {
      u || ((u = !0), ct(e), Se(r) ? ((r = r()), Qn().then(l)) : l())
    },
    invalidate() {
      u = !1
    },
    end() {
      i && (f(), (i = !1))
    }
  }
}
function Nt(e, t) {
  const n = (t.token = {})
  function r(i, s, a, o) {
    if (t.token !== n) return
    t.resolved = o
    let f = t.ctx
    a !== void 0 && ((f = f.slice()), (f[a] = o))
    const l = i && (t.current = i)(f)
    let u = !1
    t.block &&
      (t.blocks
        ? t.blocks.forEach((d, m) => {
            m !== s &&
              d &&
              (Re(),
              x(d, 1, 1, () => {
                t.blocks[m] === d && (t.blocks[m] = null)
              }),
              Fe())
          })
        : t.block.d(1),
      l.c(),
      P(l, 1),
      l.m(t.mount(), t.anchor),
      (u = !0)),
      (t.block = l),
      t.blocks && (t.blocks[s] = l),
      u && Je()
  }
  if (zn(e)) {
    const i = pe()
    if (
      (e.then(
        s => {
          Q(i), r(t.then, 1, t.value, s), Q(null)
        },
        s => {
          if ((Q(i), r(t.catch, 2, t.error, s), Q(null), !t.hasCatch)) throw s
        }
      ),
      t.current !== t.pending)
    )
      return r(t.pending, 0), !0
  } else {
    if (t.current !== t.then) return r(t.then, 1, t.value, e), !0
    t.resolved = e
  }
}
function er(e, t, n) {
  const r = t.slice(),
    { resolved: i } = e
  e.current === e.then && (r[e.value] = i),
    e.current === e.catch && (r[e.error] = i),
    e.block.p(r, n)
}
function tr(e, t) {
  e.d(1), t.delete(e.key)
}
function nr(e, t) {
  x(e, 1, 1, () => {
    t.delete(e.key)
  })
}
function Ht(e, t, n, r, i, s, a, o, f, l, u, d) {
  let m = e.length,
    y = s.length,
    _ = m
  const T = {}
  for (; _--; ) T[e[_].key] = _
  const C = [],
    L = new Map(),
    R = new Map()
  for (_ = y; _--; ) {
    const A = d(i, s, _),
      I = n(A)
    let $ = a.get(I)
    $ ? r && $.p(A, t) : (($ = l(I, A)), $.c()),
      L.set(I, (C[_] = $)),
      I in T && R.set(I, Math.abs(_ - T[I]))
  }
  const q = new Set(),
    J = new Set()
  function X(A) {
    P(A, 1), A.m(o, u), a.set(A.key, A), (u = A.first), y--
  }
  for (; m && y; ) {
    const A = C[y - 1],
      I = e[m - 1],
      $ = A.key,
      W = I.key
    A === I
      ? ((u = A.first), m--, y--)
      : L.has(W)
      ? !a.has($) || q.has($)
        ? X(A)
        : J.has(W)
        ? m--
        : R.get($) > R.get(W)
        ? (J.add($), X(A))
        : (q.add(W), m--)
      : (f(I, a), m--)
  }
  for (; m--; ) {
    const A = e[m]
    L.has(A.key) || f(A, a)
  }
  for (; y; ) X(C[y - 1])
  return C
}
function j(e) {
  e && e.c()
}
function O(e, t, n, r) {
  const { fragment: i, after_update: s } = e.$$
  i && i.m(t, n),
    r ||
      re(() => {
        const a = e.$$.on_mount.map(Wt).filter(Se)
        e.$$.on_destroy ? e.$$.on_destroy.push(...a) : ae(a),
          (e.$$.on_mount = [])
      }),
    s.forEach(re)
}
function S(e, t) {
  const n = e.$$
  n.fragment !== null &&
    (ae(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []))
}
function rr(e, t) {
  e.$$.dirty[0] === -1 && (oe.push(e), jt(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31)
}
function V(e, t, n, r, i, s, a, o = [-1]) {
  const f = he
  Q(e)
  const l = (e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: M,
    not_equal: i,
    bound: ot(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    callbacks: ot(),
    dirty: o,
    skip_bound: !1,
    root: t.target || f.$$.root
  })
  a && a(l.root)
  let u = !1
  if (
    ((l.ctx = n
      ? n(e, t.props || {}, (d, m, ...y) => {
          const _ = y.length ? y[0] : m
          return (
            l.ctx &&
              i(l.ctx[d], (l.ctx[d] = _)) &&
              (!l.skip_bound && l.bound[d] && l.bound[d](_), u && rr(e, d)),
            m
          )
        })
      : []),
    l.update(),
    (u = !0),
    ae(l.before_update),
    (l.fragment = r ? r(l.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const d = Nn(t.target)
      l.fragment && l.fragment.l(d), d.forEach(D)
    } else l.fragment && l.fragment.c()
    t.intro && P(e.$$.fragment), O(e, t.target, t.anchor, t.customElement), Je()
  }
  Q(f)
}
class B {
  $destroy() {
    S(this, 1), (this.$destroy = M)
  }
  $on(t, n) {
    if (!Se(n)) return M
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = [])
    return (
      r.push(n),
      () => {
        const i = r.indexOf(n)
        i !== -1 && r.splice(i, 1)
      }
    )
  }
  $set(t) {
    this.$$set &&
      !En(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1))
  }
}
var Ut = function (e, t) {
  return (Ut =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (n, r) {
        n.__proto__ = r
      }) ||
    function (n, r) {
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i])
    })(e, t)
}
function qt(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    )
  function n() {
    this.constructor = e
  }
  Ut(e, t),
    (e.prototype =
      t === null ? Object.create(t) : ((n.prototype = t.prototype), new n()))
}
var Xe = function () {
  return (Xe =
    Object.assign ||
    function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var i in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
      return e
    }).apply(this, arguments)
}
function g(e, t, n, r) {
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        f(r.next(l))
      } catch (u) {
        s(u)
      }
    }
    function o(l) {
      try {
        f(r.throw(l))
      } catch (u) {
        s(u)
      }
    }
    function f(l) {
      var u
      l.done
        ? i(l.value)
        : ((u = l.value),
          u instanceof n
            ? u
            : new n(function (d) {
                d(u)
              })).then(a, o)
    }
    f((r = r.apply(e, t || [])).next())
  })
}
function b(e, t) {
  var n,
    r,
    i,
    s,
    a = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1]
        return i[1]
      },
      trys: [],
      ops: []
    }
  return (
    (s = { next: o(0), throw: o(1), return: o(2) }),
    typeof Symbol == 'function' &&
      (s[Symbol.iterator] = function () {
        return this
      }),
    s
  )
  function o(f) {
    return function (l) {
      return (function (u) {
        if (n) throw new TypeError('Generator is already executing.')
        for (; a; )
          try {
            if (
              ((n = 1),
              r &&
                (i =
                  2 & u[0]
                    ? r.return
                    : u[0]
                    ? r.throw || ((i = r.return) && i.call(r), 0)
                    : r.next) &&
                !(i = i.call(r, u[1])).done)
            )
              return i
            switch (((r = 0), i && (u = [2 & u[0], i.value]), u[0])) {
              case 0:
              case 1:
                i = u
                break
              case 4:
                return a.label++, { value: u[1], done: !1 }
              case 5:
                a.label++, (r = u[1]), (u = [0])
                continue
              case 7:
                ;(u = a.ops.pop()), a.trys.pop()
                continue
              default:
                if (
                  !(
                    (i = (i = a.trys).length > 0 && i[i.length - 1]) ||
                    (u[0] !== 6 && u[0] !== 2)
                  )
                ) {
                  a = 0
                  continue
                }
                if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                  a.label = u[1]
                  break
                }
                if (u[0] === 6 && a.label < i[1]) {
                  ;(a.label = i[1]), (i = u)
                  break
                }
                if (i && a.label < i[2]) {
                  ;(a.label = i[2]), a.ops.push(u)
                  break
                }
                i[2] && a.ops.pop(), a.trys.pop()
                continue
            }
            u = t.call(e, a)
          } catch (d) {
            ;(u = [6, d]), (r = 0)
          } finally {
            n = i = 0
          }
        if (5 & u[0]) throw u[1]
        return { value: u[0] ? u[1] : void 0, done: !0 }
      })([f, l])
    }
  }
}
function Ae(e, t) {
  t === void 0 && (t = !1)
  var n = window.crypto.getRandomValues(new Uint32Array(1))[0],
    r = '_'.concat(n)
  return (
    Object.defineProperty(window, r, {
      value: function (i) {
        return t && Reflect.deleteProperty(window, r), e == null ? void 0 : e(i)
      },
      writable: !1,
      configurable: !0
    }),
    n
  )
}
function H(e, t) {
  return (
    t === void 0 && (t = {}),
    g(this, void 0, void 0, function () {
      return b(this, function (n) {
        return [
          2,
          new Promise(function (r, i) {
            var s = Ae(function (o) {
                r(o), Reflect.deleteProperty(window, '_'.concat(a))
              }, !0),
              a = Ae(function (o) {
                i(o), Reflect.deleteProperty(window, '_'.concat(s))
              }, !0)
            window.__TAURI_IPC__(Xe({ cmd: e, callback: s, error: a }, t))
          })
        ]
      })
    })
  )
}
function v(e) {
  return g(this, void 0, void 0, function () {
    return b(this, function (t) {
      return [2, H('tauri', e)]
    })
  })
}
function Vt(e, t) {
  return g(this, void 0, void 0, function () {
    return b(this, function (n) {
      return [
        2,
        v({
          __tauriModule: 'Event',
          message: { cmd: 'unlisten', event: e, eventId: t }
        })
      ]
    })
  })
}
function ir(e, t, n) {
  return g(this, void 0, void 0, function () {
    return b(this, function (r) {
      switch (r.label) {
        case 0:
          return [
            4,
            v({
              __tauriModule: 'Event',
              message: {
                cmd: 'emit',
                event: e,
                windowLabel: t,
                payload: typeof n == 'string' ? n : JSON.stringify(n)
              }
            })
          ]
        case 1:
          return r.sent(), [2]
      }
    })
  })
}
function Bt(e, t, n) {
  return g(this, void 0, void 0, function () {
    var r = this
    return b(this, function (i) {
      return [
        2,
        v({
          __tauriModule: 'Event',
          message: { cmd: 'listen', event: e, windowLabel: t, handler: Ae(n) }
        }).then(function (s) {
          return function () {
            return g(r, void 0, void 0, function () {
              return b(this, function (a) {
                return [2, Vt(e, s)]
              })
            })
          }
        })
      ]
    })
  })
}
function ar(e, t, n) {
  return g(this, void 0, void 0, function () {
    return b(this, function (r) {
      return [
        2,
        Bt(e, t, function (i) {
          n(i), Vt(e, i.id).catch(function () {})
        })
      ]
    })
  })
}
Object.freeze({
  __proto__: null,
  transformCallback: Ae,
  invoke: H,
  convertFileSrc: function (e, t) {
    t === void 0 && (t = 'asset')
    var n = encodeURIComponent(e)
    return navigator.userAgent.includes('Windows')
      ? 'https://'.concat(t, '.localhost/').concat(n)
      : ''.concat(t, '://').concat(n)
  }
})
var We,
  Gt = function (e, t) {
    ;(this.type = 'Logical'), (this.width = e), (this.height = t)
  },
  qe = (function () {
    function e(t, n) {
      ;(this.type = 'Physical'), (this.width = t), (this.height = n)
    }
    return (
      (e.prototype.toLogical = function (t) {
        return new Gt(this.width / t, this.height / t)
      }),
      e
    )
  })(),
  Yt = function (e, t) {
    ;(this.type = 'Logical'), (this.x = e), (this.y = t)
  },
  Ve = (function () {
    function e(t, n) {
      ;(this.type = 'Physical'), (this.x = t), (this.y = n)
    }
    return (
      (e.prototype.toLogical = function (t) {
        return new Yt(this.x / t, this.y / t)
      }),
      e
    )
  })()
function Kt() {
  return window.__TAURI_METADATA__.__windows.map(function (e) {
    return new le(e.label, { skip: !0 })
  })
}
;(function (e) {
  ;(e[(e.Critical = 1)] = 'Critical'),
    (e[(e.Informational = 2)] = 'Informational')
})(We || (We = {}))
var de,
  mt = ['tauri://created', 'tauri://error'],
  Jt = (function () {
    function e(t) {
      ;(this.label = t), (this.listeners = Object.create(null))
    }
    return (
      (e.prototype.listen = function (t, n) {
        return g(this, void 0, void 0, function () {
          var r = this
          return b(this, function (i) {
            return this._handleTauriEvent(t, n)
              ? [
                  2,
                  Promise.resolve(function () {
                    var s = r.listeners[t]
                    s.splice(s.indexOf(n), 1)
                  })
                ]
              : [2, Bt(t, this.label, n)]
          })
        })
      }),
      (e.prototype.once = function (t, n) {
        return g(this, void 0, void 0, function () {
          var r = this
          return b(this, function (i) {
            return this._handleTauriEvent(t, n)
              ? [
                  2,
                  Promise.resolve(function () {
                    var s = r.listeners[t]
                    s.splice(s.indexOf(n), 1)
                  })
                ]
              : [2, ar(t, this.label, n)]
          })
        })
      }),
      (e.prototype.emit = function (t, n) {
        return g(this, void 0, void 0, function () {
          var r, i
          return b(this, function (s) {
            if (mt.includes(t)) {
              for (r = 0, i = this.listeners[t] || []; r < i.length; r++)
                (0, i[r])({
                  event: t,
                  id: -1,
                  windowLabel: this.label,
                  payload: n
                })
              return [2, Promise.resolve()]
            }
            return [2, ir(t, this.label, n)]
          })
        })
      }),
      (e.prototype._handleTauriEvent = function (t, n) {
        return (
          !!mt.includes(t) &&
          (t in this.listeners
            ? this.listeners[t].push(n)
            : (this.listeners[t] = [n]),
          !0)
        )
      }),
      e
    )
  })(),
  Xt = (function (e) {
    function t() {
      return (e !== null && e.apply(this, arguments)) || this
    }
    return (
      qt(t, e),
      (t.prototype.scaleFactor = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'scaleFactor' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.innerPosition = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'innerPosition' } }
                }
              }).then(function (r) {
                var i = r.x,
                  s = r.y
                return new Ve(i, s)
              })
            ]
          })
        })
      }),
      (t.prototype.outerPosition = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'outerPosition' } }
                }
              }).then(function (r) {
                var i = r.x,
                  s = r.y
                return new Ve(i, s)
              })
            ]
          })
        })
      }),
      (t.prototype.innerSize = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'innerSize' } }
                }
              }).then(function (r) {
                var i = r.width,
                  s = r.height
                return new qe(i, s)
              })
            ]
          })
        })
      }),
      (t.prototype.outerSize = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'outerSize' } }
                }
              }).then(function (r) {
                var i = r.width,
                  s = r.height
                return new qe(i, s)
              })
            ]
          })
        })
      }),
      (t.prototype.isFullscreen = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'isFullscreen' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.isMaximized = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'isMaximized' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.isDecorated = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'isDecorated' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.isResizable = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'isResizable' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.isVisible = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'isVisible' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.theme = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'theme' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.center = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'center' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.requestUserAttention = function (n) {
        return g(this, void 0, void 0, function () {
          var r
          return b(this, function (i) {
            return (
              (r = null),
              n &&
                (r =
                  n === We.Critical
                    ? { type: 'Critical' }
                    : { type: 'Informational' }),
              [
                2,
                v({
                  __tauriModule: 'Window',
                  message: {
                    cmd: 'manage',
                    data: {
                      label: this.label,
                      cmd: { type: 'requestUserAttention', payload: r }
                    }
                  }
                })
              ]
            )
          })
        })
      }),
      (t.prototype.setResizable = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: { type: 'setResizable', payload: n }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setTitle = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: { type: 'setTitle', payload: n }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.maximize = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'maximize' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.unmaximize = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'unmaximize' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.toggleMaximize = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'toggleMaximize' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.minimize = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'minimize' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.unminimize = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'unminimize' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.show = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'show' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.hide = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'hide' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.close = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'close' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setDecorations = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: { type: 'setDecorations', payload: n }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setAlwaysOnTop = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: { type: 'setAlwaysOnTop', payload: n }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setSize = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            if (!n || (n.type !== 'Logical' && n.type !== 'Physical'))
              throw new Error(
                'the `size` argument must be either a LogicalSize or a PhysicalSize instance'
              )
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: {
                      type: 'setSize',
                      payload: {
                        type: n.type,
                        data: { width: n.width, height: n.height }
                      }
                    }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setMinSize = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            if (n && n.type !== 'Logical' && n.type !== 'Physical')
              throw new Error(
                'the `size` argument must be either a LogicalSize or a PhysicalSize instance'
              )
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: {
                      type: 'setMinSize',
                      payload: n
                        ? {
                            type: n.type,
                            data: { width: n.width, height: n.height }
                          }
                        : null
                    }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setMaxSize = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            if (n && n.type !== 'Logical' && n.type !== 'Physical')
              throw new Error(
                'the `size` argument must be either a LogicalSize or a PhysicalSize instance'
              )
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: {
                      type: 'setMaxSize',
                      payload: n
                        ? {
                            type: n.type,
                            data: { width: n.width, height: n.height }
                          }
                        : null
                    }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setPosition = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            if (!n || (n.type !== 'Logical' && n.type !== 'Physical'))
              throw new Error(
                'the `position` argument must be either a LogicalPosition or a PhysicalPosition instance'
              )
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: {
                      type: 'setPosition',
                      payload: { type: n.type, data: { x: n.x, y: n.y } }
                    }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setFullscreen = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: { type: 'setFullscreen', payload: n }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setFocus = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'setFocus' } }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setIcon = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: {
                      type: 'setIcon',
                      payload: {
                        icon: typeof n == 'string' ? n : Array.from(n)
                      }
                    }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setSkipTaskbar = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: { type: 'setSkipTaskbar', payload: n }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setCursorGrab = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: { type: 'setCursorGrab', payload: n }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setCursorVisible = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: { type: 'setCursorVisible', payload: n }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setCursorIcon = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: { type: 'setCursorIcon', payload: n }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.setCursorPosition = function (n) {
        return g(this, void 0, void 0, function () {
          return b(this, function (r) {
            if (!n || (n.type !== 'Logical' && n.type !== 'Physical'))
              throw new Error(
                'the `position` argument must be either a LogicalPosition or a PhysicalPosition instance'
              )
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: {
                    label: this.label,
                    cmd: {
                      type: 'setCursorPosition',
                      payload: { type: n.type, data: { x: n.x, y: n.y } }
                    }
                  }
                }
              })
            ]
          })
        })
      }),
      (t.prototype.startDragging = function () {
        return g(this, void 0, void 0, function () {
          return b(this, function (n) {
            return [
              2,
              v({
                __tauriModule: 'Window',
                message: {
                  cmd: 'manage',
                  data: { label: this.label, cmd: { type: 'startDragging' } }
                }
              })
            ]
          })
        })
      }),
      t
    )
  })(Jt),
  le = (function (e) {
    function t(n, r) {
      r === void 0 && (r = {})
      var i = e.call(this, n) || this
      return (
        (r != null && r.skip) ||
          v({
            __tauriModule: 'Window',
            message: {
              cmd: 'createWebview',
              data: { options: Xe({ label: n }, r) }
            }
          })
            .then(function () {
              return g(i, void 0, void 0, function () {
                return b(this, function (s) {
                  return [2, this.emit('tauri://created')]
                })
              })
            })
            .catch(function (s) {
              return g(i, void 0, void 0, function () {
                return b(this, function (a) {
                  return [2, this.emit('tauri://error', s)]
                })
              })
            }),
        i
      )
    }
    return (
      qt(t, e),
      (t.getByLabel = function (n) {
        return Kt().some(function (r) {
          return r.label === n
        })
          ? new t(n, { skip: !0 })
          : null
      }),
      t
    )
  })(Xt)
'__TAURI_METADATA__' in window
  ? (de = new le(window.__TAURI_METADATA__.__currentWindow.label, { skip: !0 }))
  : (console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`),
    (de = new le('main', { skip: !0 }))),
  Object.freeze({
    __proto__: null,
    WebviewWindow: le,
    WebviewWindowHandle: Jt,
    WindowManager: Xt,
    getCurrent: function () {
      return new le(window.__TAURI_METADATA__.__currentWindow.label, {
        skip: !0
      })
    },
    getAll: Kt,
    get appWindow() {
      return de
    },
    LogicalSize: Gt,
    PhysicalSize: qe,
    LogicalPosition: Yt,
    PhysicalPosition: Ve,
    get UserAttentionType() {
      return We
    },
    currentMonitor: function () {
      return g(this, void 0, void 0, function () {
        return b(this, function (e) {
          return [
            2,
            v({
              __tauriModule: 'Window',
              message: {
                cmd: 'manage',
                data: { cmd: { type: 'currentMonitor' } }
              }
            })
          ]
        })
      })
    },
    primaryMonitor: function () {
      return g(this, void 0, void 0, function () {
        return b(this, function (e) {
          return [
            2,
            v({
              __tauriModule: 'Window',
              message: {
                cmd: 'manage',
                data: { cmd: { type: 'primaryMonitor' } }
              }
            })
          ]
        })
      })
    },
    availableMonitors: function () {
      return g(this, void 0, void 0, function () {
        return b(this, function (e) {
          return [
            2,
            v({
              __tauriModule: 'Window',
              message: {
                cmd: 'manage',
                data: { cmd: { type: 'availableMonitors' } }
              }
            })
          ]
        })
      })
    }
  })
class sr {
  constructor(t) {
    this.path = t
  }
  set(t, n) {
    return H('plugin:store|set', { path: this.path, key: t, value: n })
  }
  get(t) {
    return H('plugin:store|get', { path: this.path, key: t })
  }
  has(t) {
    return H('plugin:store|has', { path: this.path, key: t })
  }
  delete(t) {
    return H('plugin:store|delete', { path: this.path, key: t })
  }
  clear() {
    return H('plugin:store|clear', { path: this.path })
  }
  reset() {
    return H('plugin:store|reset', { path: this.path })
  }
  keys() {
    return H('plugin:store|keys', { path: this.path })
  }
  values() {
    return H('plugin:store|values', { path: this.path })
  }
  entries() {
    return H('plugin:store|entries', { path: this.path })
  }
  length() {
    return H('plugin:store|length', { path: this.path })
  }
  load() {
    return H('plugin:store|load', { path: this.path })
  }
  save() {
    return H('plugin:store|save', { path: this.path })
  }
  onKeyChange(t, n) {
    return de.listen('store://change', r => {
      r.payload.path === this.path && r.payload.key === t && n(r.payload.value)
    })
  }
  onChange(t) {
    return de.listen('store://change', n => {
      n.payload.path === this.path && t(n.payload.key, n.payload.value)
    })
  }
}
const te = []
function Qe(e, t = M) {
  let n
  const r = new Set()
  function i(o) {
    if (U(e, o) && ((e = o), n)) {
      const f = !te.length
      for (const l of r) l[1](), te.push(l, e)
      if (f) {
        for (let l = 0; l < te.length; l += 2) te[l][0](te[l + 1])
        te.length = 0
      }
    }
  }
  function s(o) {
    i(o(e))
  }
  function a(o, f = M) {
    const l = [o, f]
    return (
      r.add(l),
      r.size === 1 && (n = t(i) || M),
      o(e),
      () => {
        r.delete(l), r.size === 0 && (n(), (n = null))
      }
    )
  }
  return { set: i, update: s, subscribe: a }
}
const Ie = new sr('.settings.dat'),
  or = () => {
    const { subscribe: e, update: t, set: n } = Qe('')
    return {
      subscribe: e,
      toggleTheme: () => {
        t(r => {
          const i = r === 'dark' ? 'light' : 'dark'
          return Ie.set('theme', i), i
        })
      },
      load: async () => {
        let r = await Ie.get('theme')
        r || ((r = 'dark'), Ie.set('theme', r)), n(r)
      }
    }
  },
  Ze = or()
function Be(e, t = !1) {
  return (
    (e = e.slice(e.startsWith('/#') ? 2 : 0, e.endsWith('/*') ? -2 : void 0)),
    e.startsWith('/') || (e = '/' + e),
    e === '/' && (e = ''),
    t && !e.endsWith('/') && (e += '/'),
    e
  )
}
function Qt(e, t) {
  ;(e = Be(e, !0)), (t = Be(t, !0))
  let n = [],
    r = {},
    i = !0,
    s = e
      .split('/')
      .map(o => (o.startsWith(':') ? (n.push(o.slice(1)), '([^\\/]+)') : o))
      .join('\\/'),
    a = t.match(new RegExp(`^${s}$`))
  return (
    a || ((i = !1), (a = t.match(new RegExp(`^${s}`)))),
    a
      ? (n.forEach((o, f) => (r[o] = a[f + 1])),
        { exact: i, params: r, part: a[0].slice(0, -1) })
      : null
  )
}
function Zt(e, t, n) {
  if (n === '') return e
  if (n[0] === '/') return n
  let r = a => a.split('/').filter(o => o !== ''),
    i = r(e)
  return '/' + (t ? r(t) : []).map((a, o) => i[o]).join('/') + '/' + n
}
function fe(e, t, n, r) {
  let i = [t, 'data-' + t].reduce((s, a) => {
    let o = e.getAttribute(a)
    return n && e.removeAttribute(a), o === null ? s : o
  }, !1)
  return !r && i === '' ? !0 : i || r || !1
}
function lr(e) {
  let t = e
    .split('&')
    .map(n => n.split('='))
    .reduce((n, r) => {
      let i = r[0]
      if (!i) return n
      let s = r.length > 1 ? r[r.length - 1] : !0
      return (
        typeof s == 'string' && s.includes(',') && (s = s.split(',')),
        n[i] === void 0 ? (n[i] = [s]) : n[i].push(s),
        n
      )
    }, {})
  return Object.entries(t).reduce(
    (n, r) => ((n[r[0]] = r[1].length > 1 ? r[1] : r[1][0]), n),
    {}
  )
}
function ur(e) {
  return Object.entries(e)
    .map(([t, n]) =>
      n ? (n === !0 ? t : `${t}=${Array.isArray(n) ? n.join(',') : n}`) : null
    )
    .filter(t => t)
    .join('&')
}
function pt(e, t) {
  return e ? t + e : ''
}
function en(e) {
  throw new Error('[Tinro] ' + e)
}
var Y = {
    HISTORY: 1,
    HASH: 2,
    MEMORY: 3,
    OFF: 4,
    run(e, t, n, r) {
      return e === this.HISTORY
        ? t && t()
        : e === this.HASH
        ? n && n()
        : r && r()
    },
    getDefault() {
      return !window || window.location.pathname === 'srcdoc'
        ? this.MEMORY
        : this.HISTORY
    }
  },
  et,
  tn,
  nn,
  Te = '',
  G = cr()
function cr() {
  let e = Y.getDefault(),
    t,
    n = a => (window.onhashchange = window.onpopstate = et = null),
    r = a => t && t(Ne(e)),
    i = a => {
      a && (e = a),
        n(),
        e !== Y.OFF &&
          Y.run(
            e,
            o => (window.onpopstate = r),
            o => (window.onhashchange = r)
          ) &&
          r()
    },
    s = a => {
      let o = Object.assign(Ne(e), a)
      return o.path + pt(ur(o.query), '?') + pt(o.hash, '#')
    }
  return {
    mode: i,
    get: a => Ne(e),
    go(a, o) {
      dr(e, a, o), r()
    },
    start(a) {
      ;(t = a), i()
    },
    stop() {
      ;(t = null), i(Y.OFF)
    },
    set(a) {
      this.go(s(a), !a.path)
    },
    methods() {
      return fr(this)
    },
    base: a => (Te = a)
  }
}
function dr(e, t, n) {
  !n && (tn = nn)
  let r = i => history[`${n ? 'replace' : 'push'}State`]({}, '', i)
  Y.run(
    e,
    i => r(Te + t),
    i => r(`#${t}`),
    i => (et = t)
  )
}
function Ne(e) {
  let t = window.location,
    n = Y.run(
      e,
      i => (Te ? t.pathname.replace(Te, '') : t.pathname) + t.search + t.hash,
      i => String(t.hash.slice(1) || '/'),
      i => et || '/'
    ),
    r = n.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/)
  return (
    (nn = n),
    {
      url: n,
      from: tn,
      path: r[1] || '',
      query: lr(r[2] || ''),
      hash: r[3] || ''
    }
  )
}
function fr(e) {
  let t = () => e.get().query,
    n = a => e.set({ query: a }),
    r = a => n(a(t())),
    i = () => e.get().hash,
    s = a => e.set({ hash: a })
  return {
    hash: { get: i, set: s, clear: () => s('') },
    query: {
      replace: n,
      clear: () => n(''),
      get(a) {
        return a ? t()[a] : t()
      },
      set(a, o) {
        r(f => ((f[a] = o), f))
      },
      delete(a) {
        r(o => (o[a] && delete o[a], o))
      }
    }
  }
}
var De = hr()
function hr() {
  let { subscribe: e } = Qe(G.get(), t => {
    G.start(t)
    let n = pr(G.go)
    return () => {
      G.stop(), n()
    }
  })
  return {
    subscribe: e,
    goto: G.go,
    params: yr,
    meta: br,
    useHashNavigation: t => G.mode(t ? Y.HASH : Y.HISTORY),
    mode: {
      hash: () => G.mode(Y.HASH),
      history: () => G.mode(Y.HISTORY),
      memory: () => G.mode(Y.MEMORY)
    },
    base: G.base,
    location: G.methods()
  }
}
function mr(e) {
  let t,
    n,
    r,
    i,
    s = () => {
      ;(t = fe(e, 'href').replace(/^\/#|[?#].*$|\/$/g, '')),
        (n = fe(e, 'exact', !0)),
        (r = fe(e, 'active-class', !0, 'active'))
    },
    a = () => {
      let o = Qt(t, i)
      o && ((o.exact && n) || !n) ? e.classList.add(r) : e.classList.remove(r)
    }
  return (
    s(),
    {
      destroy: De.subscribe(o => {
        ;(i = o.path), a()
      }),
      update: () => {
        s(), a()
      }
    }
  )
}
function pr(e) {
  let t = n => {
    let r = n.target.closest('a[href]'),
      i = r && fe(r, 'target', !1, '_self'),
      s = r && fe(r, 'tinro-ignore'),
      a = n.ctrlKey || n.metaKey || n.altKey || n.shiftKey
    if (i == '_self' && !s && !a && r) {
      let o = r.getAttribute('href').replace(/^\/#/, '')
      ;/^\/\/|^#|^[a-zA-Z]+:/.test(o) ||
        (n.preventDefault(),
        e(o.startsWith('/') ? o : r.href.replace(window.location.origin, '')))
    }
  }
  return addEventListener('click', t), () => removeEventListener('click', t)
}
function yr() {
  return Ke('tinro').meta.params
}
var Ce = 'tinro',
  _r = rn({ pattern: '', matched: !0 })
function gr(e) {
  let t = Ke(Ce) || _r
  ;(t.exact || t.fallback) &&
    en(
      `${
        e.fallback ? '<Route fallback>' : `<Route path="${e.path}">`
      }  can't be inside ${
        t.fallback
          ? '<Route fallback>'
          : `<Route path="${t.path || '/'}"> with exact path`
      }`
    )
  let n = e.fallback ? 'fallbacks' : 'childs',
    r = Qe({}),
    i = rn({
      fallback: e.fallback,
      parent: t,
      update(s) {
        ;(i.exact = !s.path.endsWith('/*')),
          (i.pattern = Be(`${i.parent.pattern || ''}${s.path}`)),
          (i.redirect = s.redirect),
          (i.firstmatch = s.firstmatch),
          (i.breadcrumb = s.breadcrumb),
          i.match()
      },
      register: () => (
        i.parent[n].add(i),
        async () => {
          i.parent[n].delete(i),
            i.parent.activeChilds.delete(i),
            i.router.un && i.router.un(),
            i.parent.match()
        }
      ),
      show: () => {
        e.onShow(), !i.fallback && i.parent.activeChilds.add(i)
      },
      hide: () => {
        e.onHide(), i.parent.activeChilds.delete(i)
      },
      match: async () => {
        i.matched = !1
        let { path: s, url: a, from: o, query: f } = i.router.location,
          l = Qt(i.pattern, s)
        if (
          !i.fallback &&
          l &&
          i.redirect &&
          (!i.exact || (i.exact && l.exact))
        ) {
          let u = Zt(s, i.parent.pattern, i.redirect)
          return De.goto(u, !0)
        }
        ;(i.meta = l && {
          from: o,
          url: a,
          query: f,
          match: l.part,
          pattern: i.pattern,
          breadcrumbs:
            (i.parent.meta && i.parent.meta.breadcrumbs.slice()) || [],
          params: l.params,
          subscribe: r.subscribe
        }),
          i.breadcrumb &&
            i.meta &&
            i.meta.breadcrumbs.push({ name: i.breadcrumb, path: l.part }),
          r.set(i.meta),
          l &&
          !i.fallback &&
          (!i.exact || (i.exact && l.exact)) &&
          (!i.parent.firstmatch || !i.parent.matched)
            ? (e.onMeta(i.meta), (i.parent.matched = !0), i.show())
            : i.hide(),
          l && i.showFallbacks()
      }
    })
  return Yn(Ce, i), Gn(() => i.register()), i
}
function br() {
  return Kn(Ce)
    ? Ke(Ce).meta
    : en(
        'meta() function must be run inside any `<Route>` child component only'
      )
}
function rn(e) {
  let t = {
    router: {},
    exact: !1,
    pattern: null,
    meta: null,
    parent: null,
    fallback: !1,
    redirect: !1,
    firstmatch: !1,
    breadcrumb: null,
    matched: !1,
    childs: new Set(),
    activeChilds: new Set(),
    fallbacks: new Set(),
    async showFallbacks() {
      if (
        !this.fallback &&
        (await Jn(),
        (this.childs.size > 0 && this.activeChilds.size == 0) ||
          (this.childs.size == 0 && this.fallbacks.size > 0))
      ) {
        let n = this
        for (; n.fallbacks.size == 0; ) if (((n = n.parent), !n)) return
        n &&
          n.fallbacks.forEach(r => {
            if (r.redirect) {
              let i = Zt('/', r.parent.pattern, r.redirect)
              De.goto(i, !0)
            } else r.show()
          })
      }
    },
    start() {
      this.router.un ||
        (this.router.un = De.subscribe(n => {
          ;(this.router.location = n), this.pattern !== null && this.match()
        }))
    },
    match() {
      this.showFallbacks()
    }
  }
  return Object.assign(t, e), t.start(), t
}
const wr = e => ({ params: e & 2, meta: e & 4 }),
  yt = e => ({ params: e[1], meta: e[2] })
function _t(e) {
  let t
  const n = e[9].default,
    r = Tt(n, e, e[8], yt)
  return {
    c() {
      r && r.c()
    },
    m(i, s) {
      r && r.m(i, s), (t = !0)
    },
    p(i, s) {
      r &&
        r.p &&
        (!t || s & 262) &&
        zt(r, n, i, i[8], t ? Ct(n, i[8], s, wr) : Et(i[8]), yt)
    },
    i(i) {
      t || (P(r, i), (t = !0))
    },
    o(i) {
      x(r, i), (t = !1)
    },
    d(i) {
      r && r.d(i)
    }
  }
}
function vr(e) {
  let t,
    n,
    r = e[0] && _t(e)
  return {
    c() {
      r && r.c(), (t = Le())
    },
    m(i, s) {
      r && r.m(i, s), z(i, t, s), (n = !0)
    },
    p(i, [s]) {
      i[0]
        ? r
          ? (r.p(i, s), s & 1 && P(r, 1))
          : ((r = _t(i)), r.c(), P(r, 1), r.m(t.parentNode, t))
        : r &&
          (Re(),
          x(r, 1, 1, () => {
            r = null
          }),
          Fe())
    },
    i(i) {
      n || (P(r), (n = !0))
    },
    o(i) {
      x(r), (n = !1)
    },
    d(i) {
      r && r.d(i), i && D(t)
    }
  }
}
function Mr(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t,
    { path: s = '/*' } = t,
    { fallback: a = !1 } = t,
    { redirect: o = !1 } = t,
    { firstmatch: f = !1 } = t,
    { breadcrumb: l = null } = t,
    u = !1,
    d = {},
    m = {}
  const y = gr({
    fallback: a,
    onShow() {
      n(0, (u = !0))
    },
    onHide() {
      n(0, (u = !1))
    },
    onMeta(_) {
      n(2, (m = _)), n(1, (d = m.params))
    }
  })
  return (
    (e.$$set = _ => {
      'path' in _ && n(3, (s = _.path)),
        'fallback' in _ && n(4, (a = _.fallback)),
        'redirect' in _ && n(5, (o = _.redirect)),
        'firstmatch' in _ && n(6, (f = _.firstmatch)),
        'breadcrumb' in _ && n(7, (l = _.breadcrumb)),
        '$$scope' in _ && n(8, (i = _.$$scope))
    }),
    (e.$$.update = () => {
      e.$$.dirty & 232 &&
        y.update({ path: s, redirect: o, firstmatch: f, breadcrumb: l })
    }),
    [u, d, m, s, a, o, f, l, i, r]
  )
}
class be extends B {
  constructor(t) {
    super(),
      V(this, t, Mr, vr, U, {
        path: 3,
        fallback: 4,
        redirect: 5,
        firstmatch: 6,
        breadcrumb: 7
      })
  }
}
const $r = '/assets/svelte_logo.dc8a06dc.svg',
  kr = '/assets/tauri_logo.77a71c72.svg'
function Pr(e) {
  let t, n, r, i, s, a, o, f, l, u, d, m, y
  return {
    c() {
      ;(t = k('div')),
        (n = k('h1')),
        (n.textContent = 'Welcome'),
        (r = F()),
        (i = k('h2')),
        (s = K(`This is a \xA0
    `)),
        (a = k('span')),
        (o = k('img')),
        (l = K(`
    \xA0-\xA0
    `)),
        (u = k('span')),
        (d = k('img')),
        (y = K(`
    \xA0 Template`)),
        c(n, 'class', 'text-6xl'),
        lt(o.src, (f = $r)) || c(o, 'src', f),
        c(o, 'alt', 'svelte logo'),
        c(o, 'class', 'h-12'),
        lt(d.src, (m = kr)) || c(d, 'src', m),
        c(d, 'alt', 'svelte logo'),
        c(d, 'class', 'h-12'),
        c(i, 'class', 'text-3xl flex items-center'),
        c(
          t,
          'class',
          'flex flex-col space-y-6 items-center justify-center font-bold drop-shadow-ft h-full'
        )
    },
    m(_, T) {
      z(_, t, T),
        p(t, n),
        p(t, r),
        p(t, i),
        p(i, s),
        p(i, a),
        p(a, o),
        p(i, l),
        p(i, u),
        p(u, d),
        p(i, y)
    },
    p: M,
    i: M,
    o: M,
    d(_) {
      _ && D(t)
    }
  }
}
class xr extends B {
  constructor(t) {
    super(), V(this, t, null, Pr, U, {})
  }
}
function an(e, { delay: t = 0, duration: n = 400, easing: r = At } = {}) {
  const i = +getComputedStyle(e).opacity
  return { delay: t, duration: n, easing: r, css: s => `opacity: ${s * i}` }
}
var Ar = Object.defineProperty,
  N = (e, t) => {
    for (var n in t) Ar(e, n, { get: t[n], enumerable: !0 })
  },
  Wr = {}
N(Wr, {
  convertFileSrc: () => Dr,
  invoke: () => tt,
  transformCallback: () => ee
})
function Tr() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0]
}
function ee(e, t = !1) {
  let n = Tr(),
    r = `_${n}`
  return (
    Object.defineProperty(window, r, {
      value: i => (
        t && Reflect.deleteProperty(window, r), e == null ? void 0 : e(i)
      ),
      writable: !1,
      configurable: !0
    }),
    n
  )
}
async function tt(e, t = {}) {
  return new Promise((n, r) => {
    let i = ee(a => {
        n(a), Reflect.deleteProperty(window, `_${s}`)
      }, !0),
      s = ee(a => {
        r(a), Reflect.deleteProperty(window, `_${i}`)
      }, !0)
    window.__TAURI_IPC__({ cmd: e, callback: i, error: s, ...t })
  })
}
function Dr(e, t = 'asset') {
  let n = encodeURIComponent(e)
  return navigator.userAgent.includes('Windows')
    ? `https://${t}.localhost/${n}`
    : `${t}://localhost/${n}`
}
async function h(e) {
  return tt('tauri', e)
}
var Cr = {}
N(Cr, {
  TauriEvent: () => un,
  emit: () => rt,
  listen: () => cn,
  once: () => dn
})
async function sn(e, t) {
  return h({
    __tauriModule: 'Event',
    message: { cmd: 'unlisten', event: e, eventId: t }
  })
}
async function on(e, t, n) {
  await h({
    __tauriModule: 'Event',
    message: { cmd: 'emit', event: e, windowLabel: t, payload: n }
  })
}
async function nt(e, t, n) {
  return h({
    __tauriModule: 'Event',
    message: { cmd: 'listen', event: e, windowLabel: t, handler: ee(n) }
  }).then(r => async () => sn(e, r))
}
async function ln(e, t, n) {
  return nt(e, t, r => {
    n(r), sn(e, r.id).catch(() => {})
  })
}
var un = (e => (
  (e.WINDOW_RESIZED = 'tauri://resize'),
  (e.WINDOW_MOVED = 'tauri://move'),
  (e.WINDOW_CLOSE_REQUESTED = 'tauri://close-requested'),
  (e.WINDOW_CREATED = 'tauri://window-created'),
  (e.WINDOW_DESTROYED = 'tauri://destroyed'),
  (e.WINDOW_FOCUS = 'tauri://focus'),
  (e.WINDOW_BLUR = 'tauri://blur'),
  (e.WINDOW_SCALE_FACTOR_CHANGED = 'tauri://scale-change'),
  (e.WINDOW_THEME_CHANGED = 'tauri://theme-changed'),
  (e.WINDOW_FILE_DROP = 'tauri://file-drop'),
  (e.WINDOW_FILE_DROP_HOVER = 'tauri://file-drop-hover'),
  (e.WINDOW_FILE_DROP_CANCELLED = 'tauri://file-drop-cancelled'),
  (e.MENU = 'tauri://menu'),
  (e.CHECK_UPDATE = 'tauri://update'),
  (e.UPDATE_AVAILABLE = 'tauri://update-available'),
  (e.INSTALL_UPDATE = 'tauri://update-install'),
  (e.STATUS_UPDATE = 'tauri://update-status'),
  (e.DOWNLOAD_PROGRESS = 'tauri://update-download-progress'),
  e
))(un || {})
async function cn(e, t) {
  return nt(e, null, t)
}
async function dn(e, t) {
  return ln(e, null, t)
}
async function rt(e, t) {
  return on(e, void 0, t)
}
var zr = {}
N(zr, {
  checkUpdate: () => Or,
  installUpdate: () => Er,
  onUpdaterEvent: () => it
})
async function it(e) {
  return cn('tauri://update-status', t => {
    e(t == null ? void 0 : t.payload)
  })
}
async function Er() {
  let e
  function t() {
    e && e(), (e = void 0)
  }
  return new Promise((n, r) => {
    function i(s) {
      if (s.error) return t(), r(s.error)
      if (s.status === 'DONE') return t(), n()
    }
    it(i)
      .then(s => {
        e = s
      })
      .catch(s => {
        throw (t(), s)
      }),
      rt('tauri://update-install').catch(s => {
        throw (t(), s)
      })
  })
}
async function Or() {
  let e
  function t() {
    e && e(), (e = void 0)
  }
  return new Promise((n, r) => {
    function i(a) {
      return t(), n({ manifest: a, shouldUpdate: !0 })
    }
    function s(a) {
      if (a.error) return t(), r(a.error)
      if (a.status === 'UPTODATE') return t(), n({ shouldUpdate: !1 })
    }
    dn('tauri://update-available', a => {
      i(a == null ? void 0 : a.payload)
    }).catch(a => {
      throw (t(), a)
    }),
      it(s)
        .then(a => {
          e = a
        })
        .catch(a => {
          throw (t(), a)
        }),
      rt('tauri://update').catch(a => {
        throw (t(), a)
      })
  })
}
var Sr = {}
N(Sr, {
  CloseRequestedEvent: () => gn,
  LogicalPosition: () => hn,
  LogicalSize: () => fn,
  PhysicalPosition: () => Ee,
  PhysicalSize: () => ze,
  UserAttentionType: () => mn,
  WebviewWindow: () => ie,
  WebviewWindowHandle: () => yn,
  WindowManager: () => _n,
  appWindow: () => me,
  availableMonitors: () => jr,
  currentMonitor: () => Rr,
  getAll: () => pn,
  getCurrent: () => Lr,
  primaryMonitor: () => Fr
})
var fn = class {
    constructor(e, t) {
      ;(this.type = 'Logical'), (this.width = e), (this.height = t)
    }
  },
  ze = class {
    constructor(e, t) {
      ;(this.type = 'Physical'), (this.width = e), (this.height = t)
    }
    toLogical(e) {
      return new fn(this.width / e, this.height / e)
    }
  },
  hn = class {
    constructor(e, t) {
      ;(this.type = 'Logical'), (this.x = e), (this.y = t)
    }
  },
  Ee = class {
    constructor(e, t) {
      ;(this.type = 'Physical'), (this.x = e), (this.y = t)
    }
    toLogical(e) {
      return new hn(this.x / e, this.y / e)
    }
  },
  mn = (e => (
    (e[(e.Critical = 1)] = 'Critical'),
    (e[(e.Informational = 2)] = 'Informational'),
    e
  ))(mn || {})
function Lr() {
  return new ie(window.__TAURI_METADATA__.__currentWindow.label, { skip: !0 })
}
function pn() {
  return window.__TAURI_METADATA__.__windows.map(
    e => new ie(e.label, { skip: !0 })
  )
}
var gt = ['tauri://created', 'tauri://error'],
  yn = class {
    constructor(e) {
      ;(this.label = e), (this.listeners = Object.create(null))
    }
    async listen(e, t) {
      return this._handleTauriEvent(e, t)
        ? Promise.resolve(() => {
            let n = this.listeners[e]
            n.splice(n.indexOf(t), 1)
          })
        : nt(e, this.label, t)
    }
    async once(e, t) {
      return this._handleTauriEvent(e, t)
        ? Promise.resolve(() => {
            let n = this.listeners[e]
            n.splice(n.indexOf(t), 1)
          })
        : ln(e, this.label, t)
    }
    async emit(e, t) {
      if (gt.includes(e)) {
        for (let n of this.listeners[e] || [])
          n({ event: e, id: -1, windowLabel: this.label, payload: t })
        return Promise.resolve()
      }
      return on(e, this.label, t)
    }
    _handleTauriEvent(e, t) {
      return gt.includes(e)
        ? (e in this.listeners
            ? this.listeners[e].push(t)
            : (this.listeners[e] = [t]),
          !0)
        : !1
    }
  },
  _n = class extends yn {
    async scaleFactor() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'scaleFactor' } }
        }
      })
    }
    async innerPosition() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'innerPosition' } }
        }
      }).then(({ x: e, y: t }) => new Ee(e, t))
    }
    async outerPosition() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'outerPosition' } }
        }
      }).then(({ x: e, y: t }) => new Ee(e, t))
    }
    async innerSize() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'innerSize' } }
        }
      }).then(({ width: e, height: t }) => new ze(e, t))
    }
    async outerSize() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'outerSize' } }
        }
      }).then(({ width: e, height: t }) => new ze(e, t))
    }
    async isFullscreen() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'isFullscreen' } }
        }
      })
    }
    async isMaximized() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'isMaximized' } }
        }
      })
    }
    async isDecorated() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'isDecorated' } }
        }
      })
    }
    async isResizable() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'isResizable' } }
        }
      })
    }
    async isVisible() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'isVisible' } }
        }
      })
    }
    async theme() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'theme' } }
        }
      })
    }
    async center() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'center' } }
        }
      })
    }
    async requestUserAttention(e) {
      let t = null
      return (
        e &&
          (e === 1
            ? (t = { type: 'Critical' })
            : (t = { type: 'Informational' })),
        h({
          __tauriModule: 'Window',
          message: {
            cmd: 'manage',
            data: {
              label: this.label,
              cmd: { type: 'requestUserAttention', payload: t }
            }
          }
        })
      )
    }
    async setResizable(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'setResizable', payload: e } }
        }
      })
    }
    async setTitle(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'setTitle', payload: e } }
        }
      })
    }
    async maximize() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'maximize' } }
        }
      })
    }
    async unmaximize() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'unmaximize' } }
        }
      })
    }
    async toggleMaximize() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'toggleMaximize' } }
        }
      })
    }
    async minimize() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'minimize' } }
        }
      })
    }
    async unminimize() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'unminimize' } }
        }
      })
    }
    async show() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'show' } }
        }
      })
    }
    async hide() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'hide' } }
        }
      })
    }
    async close() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'close' } }
        }
      })
    }
    async setDecorations(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: { type: 'setDecorations', payload: e }
          }
        }
      })
    }
    async setAlwaysOnTop(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: { type: 'setAlwaysOnTop', payload: e }
          }
        }
      })
    }
    async setSize(e) {
      if (!e || (e.type !== 'Logical' && e.type !== 'Physical'))
        throw new Error(
          'the `size` argument must be either a LogicalSize or a PhysicalSize instance'
        )
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: {
              type: 'setSize',
              payload: {
                type: e.type,
                data: { width: e.width, height: e.height }
              }
            }
          }
        }
      })
    }
    async setMinSize(e) {
      if (e && e.type !== 'Logical' && e.type !== 'Physical')
        throw new Error(
          'the `size` argument must be either a LogicalSize or a PhysicalSize instance'
        )
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: {
              type: 'setMinSize',
              payload: e
                ? { type: e.type, data: { width: e.width, height: e.height } }
                : null
            }
          }
        }
      })
    }
    async setMaxSize(e) {
      if (e && e.type !== 'Logical' && e.type !== 'Physical')
        throw new Error(
          'the `size` argument must be either a LogicalSize or a PhysicalSize instance'
        )
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: {
              type: 'setMaxSize',
              payload: e
                ? { type: e.type, data: { width: e.width, height: e.height } }
                : null
            }
          }
        }
      })
    }
    async setPosition(e) {
      if (!e || (e.type !== 'Logical' && e.type !== 'Physical'))
        throw new Error(
          'the `position` argument must be either a LogicalPosition or a PhysicalPosition instance'
        )
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: {
              type: 'setPosition',
              payload: { type: e.type, data: { x: e.x, y: e.y } }
            }
          }
        }
      })
    }
    async setFullscreen(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: { type: 'setFullscreen', payload: e }
          }
        }
      })
    }
    async setFocus() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'setFocus' } }
        }
      })
    }
    async setIcon(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: {
              type: 'setIcon',
              payload: { icon: typeof e == 'string' ? e : Array.from(e) }
            }
          }
        }
      })
    }
    async setSkipTaskbar(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: { type: 'setSkipTaskbar', payload: e }
          }
        }
      })
    }
    async setCursorGrab(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: { type: 'setCursorGrab', payload: e }
          }
        }
      })
    }
    async setCursorVisible(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: { type: 'setCursorVisible', payload: e }
          }
        }
      })
    }
    async setCursorIcon(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: { type: 'setCursorIcon', payload: e }
          }
        }
      })
    }
    async setCursorPosition(e) {
      if (!e || (e.type !== 'Logical' && e.type !== 'Physical'))
        throw new Error(
          'the `position` argument must be either a LogicalPosition or a PhysicalPosition instance'
        )
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: {
              type: 'setCursorPosition',
              payload: { type: e.type, data: { x: e.x, y: e.y } }
            }
          }
        }
      })
    }
    async setIgnoreCursorEvents(e) {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: {
            label: this.label,
            cmd: { type: 'setIgnoreCursorEvents', payload: e }
          }
        }
      })
    }
    async startDragging() {
      return h({
        __tauriModule: 'Window',
        message: {
          cmd: 'manage',
          data: { label: this.label, cmd: { type: 'startDragging' } }
        }
      })
    }
    async onResized(e) {
      return this.listen('tauri://resize', e)
    }
    async onMoved(e) {
      return this.listen('tauri://move', e)
    }
    async onCloseRequested(e) {
      return this.listen('tauri://close-requested', t => {
        let n = new gn(t)
        Promise.resolve(e(n)).then(() => {
          if (!n.isPreventDefault()) return this.close()
        })
      })
    }
    async onFocusChanged(e) {
      let t = await this.listen('tauri://focus', r => {
          e({ ...r, payload: !0 })
        }),
        n = await this.listen('tauri://blur', r => {
          e({ ...r, payload: !1 })
        })
      return () => {
        t(), n()
      }
    }
    async onScaleChanged(e) {
      return this.listen('tauri://scale-change', e)
    }
    async onMenuClicked(e) {
      return this.listen('tauri://menu', e)
    }
    async onFileDropEvent(e) {
      let t = await this.listen('tauri://file-drop', i => {
          e({ ...i, payload: { type: 'drop', paths: i.payload } })
        }),
        n = await this.listen('tauri://file-drop-hover', i => {
          e({ ...i, payload: { type: 'hover', paths: i.payload } })
        }),
        r = await this.listen('tauri://file-drop-cancelled', i => {
          e({ ...i, payload: { type: 'cancel' } })
        })
      return () => {
        t(), n(), r()
      }
    }
    async onThemeChanged(e) {
      return this.listen('tauri://theme-changed', e)
    }
  },
  gn = class {
    constructor(e) {
      ;(this._preventDefault = !1),
        (this.event = e.event),
        (this.windowLabel = e.windowLabel),
        (this.id = e.id)
    }
    preventDefault() {
      this._preventDefault = !0
    }
    isPreventDefault() {
      return this._preventDefault
    }
  },
  ie = class extends _n {
    constructor(e, t = {}) {
      super(e),
        (t != null && t.skip) ||
          h({
            __tauriModule: 'Window',
            message: {
              cmd: 'createWebview',
              data: { options: { label: e, ...t } }
            }
          })
            .then(async () => this.emit('tauri://created'))
            .catch(async n => this.emit('tauri://error', n))
    }
    static getByLabel(e) {
      return pn().some(t => t.label === e) ? new ie(e, { skip: !0 }) : null
    }
  },
  me
'__TAURI_METADATA__' in window
  ? (me = new ie(window.__TAURI_METADATA__.__currentWindow.label, { skip: !0 }))
  : (console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`),
    (me = new ie('main', { skip: !0 })))
function at(e) {
  return e === null
    ? null
    : {
        name: e.name,
        scaleFactor: e.scaleFactor,
        position: new Ee(e.position.x, e.position.y),
        size: new ze(e.size.width, e.size.height)
      }
}
async function Rr() {
  return h({
    __tauriModule: 'Window',
    message: { cmd: 'manage', data: { cmd: { type: 'currentMonitor' } } }
  }).then(at)
}
async function Fr() {
  return h({
    __tauriModule: 'Window',
    message: { cmd: 'manage', data: { cmd: { type: 'primaryMonitor' } } }
  }).then(at)
}
async function jr() {
  return h({
    __tauriModule: 'Window',
    message: { cmd: 'manage', data: { cmd: { type: 'availableMonitors' } } }
  }).then(e => e.map(at))
}
var Ir = {}
N(Ir, {
  isPermissionGranted: () => Nr,
  requestPermission: () => Hr,
  sendNotification: () => Ur
})
async function Nr() {
  return window.Notification.permission !== 'default'
    ? Promise.resolve(window.Notification.permission === 'granted')
    : h({
        __tauriModule: 'Notification',
        message: { cmd: 'isNotificationPermissionGranted' }
      })
}
async function Hr() {
  return window.Notification.requestPermission()
}
function Ur(e) {
  typeof e == 'string'
    ? new window.Notification(e)
    : new window.Notification(e.title, e)
}
function st() {
  return navigator.appVersion.includes('Win')
}
var qr = {}
N(qr, {
  EOL: () => Vr,
  arch: () => Kr,
  platform: () => Br,
  tempdir: () => Jr,
  type: () => Yr,
  version: () => Gr
})
var Vr = st()
  ? `\r
`
  : `
`
async function Br() {
  return h({ __tauriModule: 'Os', message: { cmd: 'platform' } })
}
async function Gr() {
  return h({ __tauriModule: 'Os', message: { cmd: 'version' } })
}
async function Yr() {
  return h({ __tauriModule: 'Os', message: { cmd: 'osType' } })
}
async function Kr() {
  return h({ __tauriModule: 'Os', message: { cmd: 'arch' } })
}
async function Jr() {
  return h({ __tauriModule: 'Os', message: { cmd: 'tempdir' } })
}
var Xr = {}
N(Xr, {
  BaseDirectory: () => Oe,
  Dir: () => Oe,
  copyFile: () => ii,
  createDir: () => ni,
  exists: () => oi,
  readBinaryFile: () => Zr,
  readDir: () => ti,
  readTextFile: () => Qr,
  removeDir: () => ri,
  removeFile: () => ai,
  renameFile: () => si,
  writeBinaryFile: () => ei,
  writeFile: () => bt,
  writeTextFile: () => bt
})
var Oe = (e => (
  (e[(e.Audio = 1)] = 'Audio'),
  (e[(e.Cache = 2)] = 'Cache'),
  (e[(e.Config = 3)] = 'Config'),
  (e[(e.Data = 4)] = 'Data'),
  (e[(e.LocalData = 5)] = 'LocalData'),
  (e[(e.Desktop = 6)] = 'Desktop'),
  (e[(e.Document = 7)] = 'Document'),
  (e[(e.Download = 8)] = 'Download'),
  (e[(e.Executable = 9)] = 'Executable'),
  (e[(e.Font = 10)] = 'Font'),
  (e[(e.Home = 11)] = 'Home'),
  (e[(e.Picture = 12)] = 'Picture'),
  (e[(e.Public = 13)] = 'Public'),
  (e[(e.Runtime = 14)] = 'Runtime'),
  (e[(e.Template = 15)] = 'Template'),
  (e[(e.Video = 16)] = 'Video'),
  (e[(e.Resource = 17)] = 'Resource'),
  (e[(e.App = 18)] = 'App'),
  (e[(e.Log = 19)] = 'Log'),
  (e[(e.Temp = 20)] = 'Temp'),
  (e[(e.AppConfig = 21)] = 'AppConfig'),
  (e[(e.AppData = 22)] = 'AppData'),
  (e[(e.AppLocalData = 23)] = 'AppLocalData'),
  (e[(e.AppCache = 24)] = 'AppCache'),
  (e[(e.AppLog = 25)] = 'AppLog'),
  e
))(Oe || {})
async function Qr(e, t = {}) {
  return h({
    __tauriModule: 'Fs',
    message: { cmd: 'readTextFile', path: e, options: t }
  })
}
async function Zr(e, t = {}) {
  let n = await h({
    __tauriModule: 'Fs',
    message: { cmd: 'readFile', path: e, options: t }
  })
  return Uint8Array.from(n)
}
async function bt(e, t, n) {
  typeof n == 'object' && Object.freeze(n),
    typeof e == 'object' && Object.freeze(e)
  let r = { path: '', contents: '' },
    i = n
  return (
    typeof e == 'string'
      ? (r.path = e)
      : ((r.path = e.path), (r.contents = e.contents)),
    typeof t == 'string' ? (r.contents = t != null ? t : '') : (i = t),
    h({
      __tauriModule: 'Fs',
      message: {
        cmd: 'writeFile',
        path: r.path,
        contents: Array.from(new TextEncoder().encode(r.contents)),
        options: i
      }
    })
  )
}
async function ei(e, t, n) {
  typeof n == 'object' && Object.freeze(n),
    typeof e == 'object' && Object.freeze(e)
  let r = { path: '', contents: [] },
    i = n
  return (
    typeof e == 'string'
      ? (r.path = e)
      : ((r.path = e.path), (r.contents = e.contents)),
    t && 'dir' in t
      ? (i = t)
      : typeof e == 'string' && (r.contents = t != null ? t : []),
    h({
      __tauriModule: 'Fs',
      message: {
        cmd: 'writeFile',
        path: r.path,
        contents: Array.from(
          r.contents instanceof ArrayBuffer
            ? new Uint8Array(r.contents)
            : r.contents
        ),
        options: i
      }
    })
  )
}
async function ti(e, t = {}) {
  return h({
    __tauriModule: 'Fs',
    message: { cmd: 'readDir', path: e, options: t }
  })
}
async function ni(e, t = {}) {
  return h({
    __tauriModule: 'Fs',
    message: { cmd: 'createDir', path: e, options: t }
  })
}
async function ri(e, t = {}) {
  return h({
    __tauriModule: 'Fs',
    message: { cmd: 'removeDir', path: e, options: t }
  })
}
async function ii(e, t, n = {}) {
  return h({
    __tauriModule: 'Fs',
    message: { cmd: 'copyFile', source: e, destination: t, options: n }
  })
}
async function ai(e, t = {}) {
  return h({
    __tauriModule: 'Fs',
    message: { cmd: 'removeFile', path: e, options: t }
  })
}
async function si(e, t, n = {}) {
  return h({
    __tauriModule: 'Fs',
    message: { cmd: 'renameFile', oldPath: e, newPath: t, options: n }
  })
}
async function oi(e, t = {}) {
  return h({
    __tauriModule: 'Fs',
    message: { cmd: 'exists', path: e, options: t }
  })
}
var li = {}
N(li, {
  BaseDirectory: () => Oe,
  appCacheDir: () => fi,
  appConfigDir: () => bn,
  appDataDir: () => ci,
  appDir: () => ui,
  appLocalDataDir: () => di,
  appLogDir: () => wn,
  audioDir: () => hi,
  basename: () => ji,
  cacheDir: () => mi,
  configDir: () => pi,
  dataDir: () => yi,
  delimiter: () => Ei,
  desktopDir: () => _i,
  dirname: () => Ri,
  documentDir: () => gi,
  downloadDir: () => bi,
  executableDir: () => wi,
  extname: () => Fi,
  fontDir: () => vi,
  homeDir: () => Mi,
  isAbsolute: () => Ii,
  join: () => Li,
  localDataDir: () => $i,
  logDir: () => Ci,
  normalize: () => Si,
  pictureDir: () => ki,
  publicDir: () => Pi,
  resolve: () => Oi,
  resolveResource: () => Ai,
  resourceDir: () => xi,
  runtimeDir: () => Wi,
  sep: () => zi,
  templateDir: () => Ti,
  videoDir: () => Di
})
async function ui() {
  return bn()
}
async function bn() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 21 }
  })
}
async function ci() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 22 }
  })
}
async function di() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 23 }
  })
}
async function fi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 24 }
  })
}
async function hi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 1 }
  })
}
async function mi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 2 }
  })
}
async function pi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 3 }
  })
}
async function yi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 4 }
  })
}
async function _i() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 6 }
  })
}
async function gi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 7 }
  })
}
async function bi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 8 }
  })
}
async function wi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 9 }
  })
}
async function vi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 10 }
  })
}
async function Mi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 11 }
  })
}
async function $i() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 5 }
  })
}
async function ki() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 12 }
  })
}
async function Pi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 13 }
  })
}
async function xi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 17 }
  })
}
async function Ai(e) {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: e, directory: 17 }
  })
}
async function Wi() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 14 }
  })
}
async function Ti() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 15 }
  })
}
async function Di() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 16 }
  })
}
async function Ci() {
  return wn()
}
async function wn() {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'resolvePath', path: '', directory: 25 }
  })
}
var zi = st() ? '\\' : '/',
  Ei = st() ? ';' : ':'
async function Oi(...e) {
  return h({ __tauriModule: 'Path', message: { cmd: 'resolve', paths: e } })
}
async function Si(e) {
  return h({ __tauriModule: 'Path', message: { cmd: 'normalize', path: e } })
}
async function Li(...e) {
  return h({ __tauriModule: 'Path', message: { cmd: 'join', paths: e } })
}
async function Ri(e) {
  return h({ __tauriModule: 'Path', message: { cmd: 'dirname', path: e } })
}
async function Fi(e) {
  return h({ __tauriModule: 'Path', message: { cmd: 'extname', path: e } })
}
async function ji(e, t) {
  return h({
    __tauriModule: 'Path',
    message: { cmd: 'basename', path: e, ext: t }
  })
}
async function Ii(e) {
  return h({ __tauriModule: 'Path', message: { cmd: 'isAbsolute', path: e } })
}
var Ni = {}
N(Ni, { exit: () => Hi, relaunch: () => Ui })
async function Hi(e = 0) {
  return h({ __tauriModule: 'Process', message: { cmd: 'exit', exitCode: e } })
}
async function Ui() {
  return h({ __tauriModule: 'Process', message: { cmd: 'relaunch' } })
}
var qi = {}
N(qi, {
  Child: () => vn,
  Command: () => Mn,
  EventEmitter: () => $e,
  open: () => Bi
})
async function Vi(e, t, n = [], r) {
  return (
    typeof n == 'object' && Object.freeze(n),
    h({
      __tauriModule: 'Shell',
      message: {
        cmd: 'execute',
        program: t,
        args: n,
        options: r,
        onEventFn: ee(e)
      }
    })
  )
}
var $e = class {
    constructor() {
      this.eventListeners = Object.create(null)
    }
    addListener(e, t) {
      return this.on(e, t)
    }
    removeListener(e, t) {
      return this.off(e, t)
    }
    on(e, t) {
      return (
        e in this.eventListeners
          ? this.eventListeners[e].push(t)
          : (this.eventListeners[e] = [t]),
        this
      )
    }
    once(e, t) {
      let n = (...r) => {
        this.removeListener(e, n), t(...r)
      }
      return this.addListener(e, n)
    }
    off(e, t) {
      return (
        e in this.eventListeners &&
          (this.eventListeners[e] = this.eventListeners[e].filter(
            n => n !== t
          )),
        this
      )
    }
    removeAllListeners(e) {
      return (
        e
          ? delete this.eventListeners[e]
          : (this.eventListeners = Object.create(null)),
        this
      )
    }
    emit(e, ...t) {
      if (e in this.eventListeners) {
        let n = this.eventListeners[e]
        for (let r of n) r(...t)
        return !0
      }
      return !1
    }
    listenerCount(e) {
      return e in this.eventListeners ? this.eventListeners[e].length : 0
    }
    prependListener(e, t) {
      return (
        e in this.eventListeners
          ? this.eventListeners[e].unshift(t)
          : (this.eventListeners[e] = [t]),
        this
      )
    }
    prependOnceListener(e, t) {
      let n = (...r) => {
        this.removeListener(e, n), t(...r)
      }
      return this.prependListener(e, n)
    }
  },
  vn = class {
    constructor(e) {
      this.pid = e
    }
    async write(e) {
      return h({
        __tauriModule: 'Shell',
        message: {
          cmd: 'stdinWrite',
          pid: this.pid,
          buffer: typeof e == 'string' ? e : Array.from(e)
        }
      })
    }
    async kill() {
      return h({
        __tauriModule: 'Shell',
        message: { cmd: 'killChild', pid: this.pid }
      })
    }
  },
  Mn = class extends $e {
    constructor(e, t = [], n) {
      super(),
        (this.stdout = new $e()),
        (this.stderr = new $e()),
        (this.program = e),
        (this.args = typeof t == 'string' ? [t] : t),
        (this.options = n != null ? n : {})
    }
    static sidecar(e, t = [], n) {
      let r = new Mn(e, t, n)
      return (r.options.sidecar = !0), r
    }
    async spawn() {
      return Vi(
        e => {
          switch (e.event) {
            case 'Error':
              this.emit('error', e.payload)
              break
            case 'Terminated':
              this.emit('close', e.payload)
              break
            case 'Stdout':
              this.stdout.emit('data', e.payload)
              break
            case 'Stderr':
              this.stderr.emit('data', e.payload)
              break
          }
        },
        this.program,
        this.args,
        this.options
      ).then(e => new vn(e))
    }
    async execute() {
      return new Promise((e, t) => {
        this.on('error', t)
        let n = [],
          r = []
        this.stdout.on('data', i => {
          n.push(i)
        }),
          this.stderr.on('data', i => {
            r.push(i)
          }),
          this.on('close', i => {
            e({
              code: i.code,
              signal: i.signal,
              stdout: n.join(`
`),
              stderr: r.join(`
`)
            })
          }),
          this.spawn().catch(t)
      })
    }
  }
async function Bi(e, t) {
  return h({
    __tauriModule: 'Shell',
    message: { cmd: 'open', path: e, with: t }
  })
}
var Gi = {}
N(Gi, {
  getName: () => kn,
  getTauriVersion: () => Pn,
  getVersion: () => $n,
  hide: () => Ki,
  show: () => Yi
})
async function $n() {
  return h({ __tauriModule: 'App', message: { cmd: 'getAppVersion' } })
}
async function kn() {
  return h({ __tauriModule: 'App', message: { cmd: 'getAppName' } })
}
async function Pn() {
  return h({ __tauriModule: 'App', message: { cmd: 'getTauriVersion' } })
}
async function Yi() {
  return h({ __tauriModule: 'App', message: { cmd: 'show' } })
}
async function Ki() {
  return h({ __tauriModule: 'App', message: { cmd: 'hide' } })
}
var Ji = {}
N(Ji, { getMatches: () => Xi })
async function Xi() {
  return h({ __tauriModule: 'Cli', message: { cmd: 'cliMatches' } })
}
var Qi = {}
N(Qi, { readText: () => ea, writeText: () => Zi })
async function Zi(e) {
  return h({
    __tauriModule: 'Clipboard',
    message: { cmd: 'writeText', data: e }
  })
}
async function ea() {
  return h({
    __tauriModule: 'Clipboard',
    message: { cmd: 'readText', data: null }
  })
}
var ta = {}
N(ta, {
  ask: () => aa,
  confirm: () => sa,
  message: () => ia,
  open: () => na,
  save: () => ra
})
async function na(e = {}) {
  return (
    typeof e == 'object' && Object.freeze(e),
    h({ __tauriModule: 'Dialog', message: { cmd: 'openDialog', options: e } })
  )
}
async function ra(e = {}) {
  return (
    typeof e == 'object' && Object.freeze(e),
    h({ __tauriModule: 'Dialog', message: { cmd: 'saveDialog', options: e } })
  )
}
async function ia(e, t) {
  var n
  let r = typeof t == 'string' ? { title: t } : t
  return h({
    __tauriModule: 'Dialog',
    message: {
      cmd: 'messageDialog',
      message: e.toString(),
      title: (n = r == null ? void 0 : r.title) == null ? void 0 : n.toString(),
      type: r == null ? void 0 : r.type
    }
  })
}
async function aa(e, t) {
  var n
  let r = typeof t == 'string' ? { title: t } : t
  return h({
    __tauriModule: 'Dialog',
    message: {
      cmd: 'askDialog',
      message: e.toString(),
      title: (n = r == null ? void 0 : r.title) == null ? void 0 : n.toString(),
      type: r == null ? void 0 : r.type
    }
  })
}
async function sa(e, t) {
  var n
  let r = typeof t == 'string' ? { title: t } : t
  return h({
    __tauriModule: 'Dialog',
    message: {
      cmd: 'confirmDialog',
      message: e.toString(),
      title: (n = r == null ? void 0 : r.title) == null ? void 0 : n.toString(),
      type: r == null ? void 0 : r.type
    }
  })
}
var oa = {}
N(oa, {
  isRegistered: () => ca,
  register: () => la,
  registerAll: () => ua,
  unregister: () => da,
  unregisterAll: () => fa
})
async function la(e, t) {
  return h({
    __tauriModule: 'GlobalShortcut',
    message: { cmd: 'register', shortcut: e, handler: ee(t) }
  })
}
async function ua(e, t) {
  return h({
    __tauriModule: 'GlobalShortcut',
    message: { cmd: 'registerAll', shortcuts: e, handler: ee(t) }
  })
}
async function ca(e) {
  return h({
    __tauriModule: 'GlobalShortcut',
    message: { cmd: 'isRegistered', shortcut: e }
  })
}
async function da(e) {
  return h({
    __tauriModule: 'GlobalShortcut',
    message: { cmd: 'unregister', shortcut: e }
  })
}
async function fa() {
  return h({
    __tauriModule: 'GlobalShortcut',
    message: { cmd: 'unregisterAll' }
  })
}
var ha = {}
N(ha, {
  Body: () => ue,
  Client: () => Wn,
  Response: () => An,
  ResponseType: () => xn,
  fetch: () => ma,
  getClient: () => Tn
})
var xn = (e => (
    (e[(e.JSON = 1)] = 'JSON'),
    (e[(e.Text = 2)] = 'Text'),
    (e[(e.Binary = 3)] = 'Binary'),
    e
  ))(xn || {}),
  ue = class {
    constructor(e, t) {
      ;(this.type = e), (this.payload = t)
    }
    static form(e) {
      let t = {},
        n = (r, i) => {
          if (i !== null) {
            let s
            typeof i == 'string'
              ? (s = i)
              : i instanceof Uint8Array || Array.isArray(i)
              ? (s = Array.from(i))
              : i instanceof File
              ? (s = { file: i.name, mime: i.type, fileName: i.name })
              : typeof i.file == 'string'
              ? (s = { file: i.file, mime: i.mime, fileName: i.fileName })
              : (s = {
                  file: Array.from(i.file),
                  mime: i.mime,
                  fileName: i.fileName
                }),
              (t[String(r)] = s)
          }
        }
      if (e instanceof FormData) for (let [r, i] of e) n(r, i)
      else for (let [r, i] of Object.entries(e)) n(r, i)
      return new ue('Form', t)
    }
    static json(e) {
      return new ue('Json', e)
    }
    static text(e) {
      return new ue('Text', e)
    }
    static bytes(e) {
      return new ue(
        'Bytes',
        Array.from(e instanceof ArrayBuffer ? new Uint8Array(e) : e)
      )
    }
  },
  An = class {
    constructor(e) {
      ;(this.url = e.url),
        (this.status = e.status),
        (this.ok = this.status >= 200 && this.status < 300),
        (this.headers = e.headers),
        (this.rawHeaders = e.rawHeaders),
        (this.data = e.data)
    }
  },
  Wn = class {
    constructor(e) {
      this.id = e
    }
    async drop() {
      return h({
        __tauriModule: 'Http',
        message: { cmd: 'dropClient', client: this.id }
      })
    }
    async request(e) {
      let t = !e.responseType || e.responseType === 1
      return (
        t && (e.responseType = 2),
        h({
          __tauriModule: 'Http',
          message: { cmd: 'httpRequest', client: this.id, options: e }
        }).then(n => {
          let r = new An(n)
          if (t) {
            try {
              r.data = JSON.parse(r.data)
            } catch (i) {
              if (r.ok && r.data === '') r.data = {}
              else if (r.ok)
                throw Error(`Failed to parse response \`${r.data}\` as JSON: ${i};
              try setting the \`responseType\` option to \`ResponseType.Text\` or \`ResponseType.Binary\` if the API does not return a JSON response.`)
            }
            return r
          }
          return r
        })
      )
    }
    async get(e, t) {
      return this.request({ method: 'GET', url: e, ...t })
    }
    async post(e, t, n) {
      return this.request({ method: 'POST', url: e, body: t, ...n })
    }
    async put(e, t, n) {
      return this.request({ method: 'PUT', url: e, body: t, ...n })
    }
    async patch(e, t) {
      return this.request({ method: 'PATCH', url: e, ...t })
    }
    async delete(e, t) {
      return this.request({ method: 'DELETE', url: e, ...t })
    }
  }
async function Tn(e) {
  return h({
    __tauriModule: 'Http',
    message: { cmd: 'createClient', options: e }
  }).then(t => new Wn(t))
}
var He = null
async function ma(e, t) {
  var n
  return (
    He === null && (He = await Tn()),
    He.request({
      url: e,
      method: (n = t == null ? void 0 : t.method) != null ? n : 'GET',
      ...t
    })
  )
}
var Dn = tt
function wt(e) {
  let t, n, r
  return {
    c() {
      ;(t = k('p')),
        (n = K(e[0])),
        c(t, 'class', 'border-b-2 border-accent text-2xl whitespace-nowrap')
    },
    m(i, s) {
      z(i, t, s), p(t, n)
    },
    p(i, s) {
      s & 1 && Rt(n, i[0])
    },
    i(i) {
      r ||
        re(() => {
          ;(r = It(t, an, { duration: 300 })), r.start()
        })
    },
    o: M,
    d(i) {
      i && D(t)
    }
  }
}
function pa(e) {
  let t,
    n,
    r,
    i,
    s = e[0],
    a,
    o,
    f = wt(e)
  return {
    c() {
      ;(t = k('div')),
        (n = k('button')),
        (n.textContent = 'Call Tauri'),
        (r = F()),
        (i = k('div')),
        f.c(),
        c(n, 'class', 'font-extrabold btn btn-outline btn-primary btn-md'),
        c(i, 'class', 'h-20 flex items-center'),
        c(t, 'class', 'h-full flex flex-col items-center justify-center')
    },
    m(l, u) {
      z(l, t, u),
        p(t, n),
        p(t, r),
        p(t, i),
        f.m(i, null),
        a || ((o = ce(n, 'click', e[1])), (a = !0))
    },
    p(l, [u]) {
      u & 1 && U(s, (s = l[0]))
        ? (Re(), x(f, 1, 1, M), Fe(), (f = wt(l)), f.c(), P(f, 1), f.m(i, null))
        : f.p(l, u)
    },
    i(l) {
      P(f)
    },
    o(l) {
      x(f)
    },
    d(l) {
      l && D(t), f.d(l), (a = !1), o()
    }
  }
}
function ya(e, t, n) {
  let r = ''
  async function i() {
    n(0, (r = await Dn('called_from_js')))
  }
  return [r, i]
}
class _a extends B {
  constructor(t) {
    super(), V(this, t, ya, pa, U, {})
  }
}
function ga(e) {
  let t, n, r, i, s, a, o, f, l, u, d
  return {
    c() {
      ;(t = k('div')),
        (n = k('div')),
        (r = k('label')),
        (i = k('span')),
        (i.textContent = 'Hash string'),
        (s = F()),
        (a = k('input')),
        (o = F()),
        (f = k('p')),
        (l = K(e[1])),
        c(a, 'type', 'text'),
        c(
          a,
          'class',
          'input input-bordered input-secondary focus:ring-secondary focus:border-secondary focus:outline-none'
        ),
        c(r, 'class', 'input-group'),
        c(n, 'class', 'form-control'),
        c(f, 'class', 'text-center text-lg'),
        c(
          t,
          'class',
          'h-full flex flex-col space-y-8 items-center justify-center'
        )
    },
    m(m, y) {
      z(m, t, y),
        p(t, n),
        p(n, r),
        p(r, i),
        p(r, s),
        p(r, a),
        ut(a, e[0]),
        p(t, o),
        p(t, f),
        p(f, l),
        u || ((d = ce(a, 'input', e[2])), (u = !0))
    },
    p(m, [y]) {
      y & 1 && a.value !== m[0] && ut(a, m[0]), y & 2 && Rt(l, m[1])
    },
    i: M,
    o: M,
    d(m) {
      m && D(t), (u = !1), d()
    }
  }
}
function ba(e, t, n) {
  let r = 'Hello world',
    i = ''
  function s() {
    ;(r = this.value), n(0, r)
  }
  return (
    (e.$$.update = () => {
      e.$$.dirty & 1 &&
        (async () => n(1, (i = await Dn('hash256sum', { hashInput: r }))))()
    }),
    [r, i, s]
  )
}
class wa extends B {
  constructor(t) {
    super(), V(this, t, ba, ga, U, {})
  }
}
function vt(e, t, n) {
  const r = e.slice()
  return (r[2] = t[n][0]), (r[3] = t[n][1]), (r[5] = n), r
}
function va(e) {
  return { c: M, m: M, p: M, d: M }
}
function Ma(e) {
  let t = [],
    n = new Map(),
    r,
    i = Object.entries(e[1])
  const s = a => a[5]
  for (let a = 0; a < i.length; a += 1) {
    let o = vt(e, i, a),
      f = s(o)
    n.set(f, (t[a] = Mt(f, o)))
  }
  return {
    c() {
      for (let a = 0; a < t.length; a += 1) t[a].c()
      r = Le()
    },
    m(a, o) {
      for (let f = 0; f < t.length; f += 1) t[f].m(a, o)
      z(a, r, o)
    },
    p(a, o) {
      o & 1 &&
        ((i = Object.entries(a[1])),
        (t = Ht(t, o, s, 1, a, i, n, r.parentNode, tr, Mt, r, vt)))
    },
    d(a) {
      for (let o = 0; o < t.length; o += 1) t[o].d(a)
      a && D(r)
    }
  }
}
function Mt(e, t) {
  let n,
    r = t[2] + '',
    i,
    s,
    a = t[3] + '',
    o,
    f
  return {
    key: e,
    first: null,
    c() {
      ;(n = k('li')),
        (i = K(r)),
        (s = K(' - ')),
        (o = K(a)),
        (f = F()),
        (this.first = n)
    },
    m(l, u) {
      z(l, n, u), p(n, i), p(n, s), p(n, o), p(n, f)
    },
    p(l, u) {
      t = l
    },
    d(l) {
      l && D(n)
    }
  }
}
function $a(e) {
  return { c: M, m: M, p: M, d: M }
}
function ka(e) {
  let t,
    n,
    r,
    i,
    s,
    a = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: $a,
      then: Ma,
      catch: va,
      value: 1
    }
  return (
    Nt(e[0](), a),
    {
      c() {
        ;(t = k('div')),
          (n = k('h1')),
          (n.textContent = 'Versions'),
          (r = F()),
          (i = k('div')),
          (s = k('ul')),
          a.block.c(),
          c(n, 'class', 'text-2xl'),
          c(s, 'class', 'flex flex-col space-y-4'),
          c(
            t,
            'class',
            'h-full flex flex-col space-y-8 items-center justify-center text-xl font-bold'
          )
      },
      m(o, f) {
        z(o, t, f),
          p(t, n),
          p(t, r),
          p(t, i),
          p(i, s),
          a.block.m(s, (a.anchor = null)),
          (a.mount = () => s),
          (a.anchor = null)
      },
      p(o, [f]) {
        ;(e = o), er(a, e, f)
      },
      i: M,
      o: M,
      d(o) {
        o && D(t), a.block.d(), (a.token = null), (a = null)
      }
    }
  )
}
function Pa(e) {
  return [
    async () => {
      const [n, r, i] = await Promise.all([Pn(), $n(), kn()])
      return { tauri: n, app: r, name: i }
    }
  ]
}
class xa extends B {
  constructor(t) {
    super(), V(this, t, Pa, ka, U, {})
  }
}
function Aa(e) {
  let t, n
  return (
    (t = new xr({})),
    {
      c() {
        j(t.$$.fragment)
      },
      m(r, i) {
        O(t, r, i), (n = !0)
      },
      i(r) {
        n || (P(t.$$.fragment, r), (n = !0))
      },
      o(r) {
        x(t.$$.fragment, r), (n = !1)
      },
      d(r) {
        S(t, r)
      }
    }
  )
}
function Wa(e) {
  let t, n
  return (
    (t = new _a({})),
    {
      c() {
        j(t.$$.fragment)
      },
      m(r, i) {
        O(t, r, i), (n = !0)
      },
      i(r) {
        n || (P(t.$$.fragment, r), (n = !0))
      },
      o(r) {
        x(t.$$.fragment, r), (n = !1)
      },
      d(r) {
        S(t, r)
      }
    }
  )
}
function Ta(e) {
  let t, n
  return (
    (t = new wa({})),
    {
      c() {
        j(t.$$.fragment)
      },
      m(r, i) {
        O(t, r, i), (n = !0)
      },
      i(r) {
        n || (P(t.$$.fragment, r), (n = !0))
      },
      o(r) {
        x(t.$$.fragment, r), (n = !1)
      },
      d(r) {
        S(t, r)
      }
    }
  )
}
function Da(e) {
  let t, n
  return (
    (t = new xa({})),
    {
      c() {
        j(t.$$.fragment)
      },
      m(r, i) {
        O(t, r, i), (n = !0)
      },
      i(r) {
        n || (P(t.$$.fragment, r), (n = !0))
      },
      o(r) {
        x(t.$$.fragment, r), (n = !1)
      },
      d(r) {
        S(t, r)
      }
    }
  )
}
function Ca(e) {
  let t, n, r, i, s, a, o, f
  return (
    (t = new be({
      props: { path: '/', $$slots: { default: [Aa] }, $$scope: { ctx: e } }
    })),
    (r = new be({
      props: {
        path: '/call-tauri',
        $$slots: { default: [Wa] },
        $$scope: { ctx: e }
      }
    })),
    (s = new be({
      props: {
        path: '/hash-string',
        $$slots: { default: [Ta] },
        $$scope: { ctx: e }
      }
    })),
    (o = new be({
      props: {
        path: '/versions',
        $$slots: { default: [Da] },
        $$scope: { ctx: e }
      }
    })),
    {
      c() {
        j(t.$$.fragment),
          (n = F()),
          j(r.$$.fragment),
          (i = F()),
          j(s.$$.fragment),
          (a = F()),
          j(o.$$.fragment)
      },
      m(l, u) {
        O(t, l, u),
          z(l, n, u),
          O(r, l, u),
          z(l, i, u),
          O(s, l, u),
          z(l, a, u),
          O(o, l, u),
          (f = !0)
      },
      p(l, [u]) {
        const d = {}
        u & 1 && (d.$$scope = { dirty: u, ctx: l }), t.$set(d)
        const m = {}
        u & 1 && (m.$$scope = { dirty: u, ctx: l }), r.$set(m)
        const y = {}
        u & 1 && (y.$$scope = { dirty: u, ctx: l }), s.$set(y)
        const _ = {}
        u & 1 && (_.$$scope = { dirty: u, ctx: l }), o.$set(_)
      },
      i(l) {
        f ||
          (P(t.$$.fragment, l),
          P(r.$$.fragment, l),
          P(s.$$.fragment, l),
          P(o.$$.fragment, l),
          (f = !0))
      },
      o(l) {
        x(t.$$.fragment, l),
          x(r.$$.fragment, l),
          x(s.$$.fragment, l),
          x(o.$$.fragment, l),
          (f = !1)
      },
      d(l) {
        S(t, l), l && D(n), S(r, l), l && D(i), S(s, l), l && D(a), S(o, l)
      }
    }
  )
}
class za extends B {
  constructor(t) {
    super(), V(this, t, null, Ca, U, {})
  }
}
function Ea(e) {
  let t, n, r, i, s, a, o, f, l, u, d, m, y, _
  return {
    c() {
      ;(t = E('svg')),
        (n = E('mask')),
        (r = E('rect')),
        (i = E('circle')),
        (s = E('circle')),
        (a = E('g')),
        (o = E('line')),
        (f = E('line')),
        (l = E('line')),
        (u = E('line')),
        (d = E('line')),
        (m = E('line')),
        (y = E('line')),
        (_ = E('line')),
        c(r, 'x', '0'),
        c(r, 'y', '0'),
        c(r, 'width', '100%'),
        c(r, 'height', '100%'),
        c(r, 'fill', 'white'),
        c(i, 'cx', '24'),
        c(i, 'cy', '10'),
        c(i, 'r', '6'),
        c(i, 'fill', 'black'),
        c(i, 'class', 'svelte-x3vjb6'),
        c(n, 'class', 'moon svelte-x3vjb6'),
        c(n, 'id', 'moon-mask'),
        c(s, 'class', 'sun svelte-x3vjb6'),
        c(s, 'cx', '12'),
        c(s, 'cy', '12'),
        c(s, 'r', '6'),
        c(s, 'mask', 'url(#moon-mask)'),
        c(s, 'fill', 'currentColor'),
        c(o, 'x1', '12'),
        c(o, 'y1', '1'),
        c(o, 'x2', '12'),
        c(o, 'y2', '3'),
        c(f, 'x1', '12'),
        c(f, 'y1', '21'),
        c(f, 'x2', '12'),
        c(f, 'y2', '23'),
        c(l, 'x1', '4.22'),
        c(l, 'y1', '4.22'),
        c(l, 'x2', '5.64'),
        c(l, 'y2', '5.64'),
        c(u, 'x1', '18.36'),
        c(u, 'y1', '18.36'),
        c(u, 'x2', '19.78'),
        c(u, 'y2', '19.78'),
        c(d, 'x1', '1'),
        c(d, 'y1', '12'),
        c(d, 'x2', '3'),
        c(d, 'y2', '12'),
        c(m, 'x1', '21'),
        c(m, 'y1', '12'),
        c(m, 'x2', '23'),
        c(m, 'y2', '12'),
        c(y, 'x1', '4.22'),
        c(y, 'y1', '19.78'),
        c(y, 'x2', '5.64'),
        c(y, 'y2', '18.36'),
        c(_, 'x1', '18.36'),
        c(_, 'y1', '5.64'),
        c(_, 'x2', '19.78'),
        c(_, 'y2', '4.22'),
        c(a, 'class', 'sun-beams svelte-x3vjb6'),
        c(a, 'stroke', 'currentColor'),
        c(a, 'stroke-width', '2px'),
        c(t, 'class', 'w-8 svelte-x3vjb6'),
        c(t, 'aria-hidden', 'true'),
        c(t, 'viewBox', '0 0 24 24')
    },
    m(T, C) {
      z(T, t, C),
        p(t, n),
        p(n, r),
        p(n, i),
        p(t, s),
        p(t, a),
        p(a, o),
        p(a, f),
        p(a, l),
        p(a, u),
        p(a, d),
        p(a, m),
        p(a, y),
        p(a, _)
    },
    p: M,
    i: M,
    o: M,
    d(T) {
      T && D(t)
    }
  }
}
class Oa extends B {
  constructor(t) {
    super(), V(this, t, null, Ea, U, {})
  }
}
const we = parseFloat
function Ge(e, t = ';') {
  let n
  if (Array.isArray(e)) n = e.filter(r => r)
  else {
    n = []
    for (const r in e) e[r] && n.push(`${r}:${e[r]}`)
  }
  return n.join(t)
}
function Sa(e, t, n, r) {
  let i, s
  const a = '1em'
  let o,
    f,
    l,
    u = '-.125em'
  const d = 'visible'
  return (
    r && ((l = 'center'), (s = '1.25em')),
    n && (i = n),
    t &&
      (t == 'lg'
        ? ((f = '1.33333em'), (o = '.75em'), (u = '-.225em'))
        : t == 'xs'
        ? (f = '.75em')
        : t == 'sm'
        ? (f = '.875em')
        : (f = t.replace('x', 'em'))),
    Ge([
      Ge({
        float: i,
        width: s,
        height: a,
        'line-height': o,
        'font-size': f,
        'text-align': l,
        'vertical-align': u,
        'transform-origin': 'center',
        overflow: d
      }),
      e
    ])
  )
}
function La(e, t, n, r, i, s = 1, a = '', o = '') {
  let f = 1,
    l = 1
  return (
    i &&
      (i == 'horizontal'
        ? (f = -1)
        : i == 'vertical'
        ? (l = -1)
        : (f = l = -1)),
    Ge(
      [
        `translate(${we(t) * s}${a},${we(n) * s}${a})`,
        `scale(${f * we(e)},${l * we(e)})`,
        r && `rotate(${r}${o})`
      ],
      ' '
    )
  )
}
function $t(e) {
  let t, n, r, i, s, a, o, f
  function l(m, y) {
    return typeof m[10][4] == 'string' ? Fa : Ra
  }
  let u = l(e),
    d = u(e)
  return {
    c() {
      ;(t = E('svg')),
        (n = E('g')),
        (r = E('g')),
        d.c(),
        c(r, 'transform', e[12]),
        c(
          n,
          'transform',
          (i = 'translate(' + e[10][0] / 2 + ' ' + e[10][1] / 2 + ')')
        ),
        c(n, 'transform-origin', (s = e[10][0] / 4 + ' 0')),
        c(t, 'id', (a = e[1] || void 0)),
        c(t, 'class', (o = 'svelte-fa ' + e[0] + ' svelte-1w3t65e')),
        c(t, 'style', e[11]),
        c(t, 'viewBox', (f = '0 0 ' + e[10][0] + ' ' + e[10][1])),
        c(t, 'aria-hidden', 'true'),
        c(t, 'role', 'img'),
        c(t, 'xmlns', 'http://www.w3.org/2000/svg'),
        _e(t, 'pulse', e[4]),
        _e(t, 'spin', e[3])
    },
    m(m, y) {
      z(m, t, y), p(t, n), p(n, r), d.m(r, null)
    },
    p(m, y) {
      u === (u = l(m)) && d
        ? d.p(m, y)
        : (d.d(1), (d = u(m)), d && (d.c(), d.m(r, null))),
        y & 4096 && c(r, 'transform', m[12]),
        y & 1024 &&
          i !== (i = 'translate(' + m[10][0] / 2 + ' ' + m[10][1] / 2 + ')') &&
          c(n, 'transform', i),
        y & 1024 &&
          s !== (s = m[10][0] / 4 + ' 0') &&
          c(n, 'transform-origin', s),
        y & 2 && a !== (a = m[1] || void 0) && c(t, 'id', a),
        y & 1 &&
          o !== (o = 'svelte-fa ' + m[0] + ' svelte-1w3t65e') &&
          c(t, 'class', o),
        y & 2048 && c(t, 'style', m[11]),
        y & 1024 &&
          f !== (f = '0 0 ' + m[10][0] + ' ' + m[10][1]) &&
          c(t, 'viewBox', f),
        y & 17 && _e(t, 'pulse', m[4]),
        y & 9 && _e(t, 'spin', m[3])
    },
    d(m) {
      m && D(t), d.d()
    }
  }
}
function Ra(e) {
  let t, n, r, i, s, a, o, f, l, u
  return {
    c() {
      ;(t = E('path')),
        (a = E('path')),
        c(t, 'd', (n = e[10][4][0])),
        c(t, 'fill', (r = e[6] || e[2] || 'currentColor')),
        c(t, 'fill-opacity', (i = e[9] != !1 ? e[7] : e[8])),
        c(
          t,
          'transform',
          (s = 'translate(' + e[10][0] / -2 + ' ' + e[10][1] / -2 + ')')
        ),
        c(a, 'd', (o = e[10][4][1])),
        c(a, 'fill', (f = e[5] || e[2] || 'currentColor')),
        c(a, 'fill-opacity', (l = e[9] != !1 ? e[8] : e[7])),
        c(
          a,
          'transform',
          (u = 'translate(' + e[10][0] / -2 + ' ' + e[10][1] / -2 + ')')
        )
    },
    m(d, m) {
      z(d, t, m), z(d, a, m)
    },
    p(d, m) {
      m & 1024 && n !== (n = d[10][4][0]) && c(t, 'd', n),
        m & 68 && r !== (r = d[6] || d[2] || 'currentColor') && c(t, 'fill', r),
        m & 896 &&
          i !== (i = d[9] != !1 ? d[7] : d[8]) &&
          c(t, 'fill-opacity', i),
        m & 1024 &&
          s !==
            (s = 'translate(' + d[10][0] / -2 + ' ' + d[10][1] / -2 + ')') &&
          c(t, 'transform', s),
        m & 1024 && o !== (o = d[10][4][1]) && c(a, 'd', o),
        m & 36 && f !== (f = d[5] || d[2] || 'currentColor') && c(a, 'fill', f),
        m & 896 &&
          l !== (l = d[9] != !1 ? d[8] : d[7]) &&
          c(a, 'fill-opacity', l),
        m & 1024 &&
          u !==
            (u = 'translate(' + d[10][0] / -2 + ' ' + d[10][1] / -2 + ')') &&
          c(a, 'transform', u)
    },
    d(d) {
      d && D(t), d && D(a)
    }
  }
}
function Fa(e) {
  let t, n, r, i
  return {
    c() {
      ;(t = E('path')),
        c(t, 'd', (n = e[10][4])),
        c(t, 'fill', (r = e[2] || e[5] || 'currentColor')),
        c(
          t,
          'transform',
          (i = 'translate(' + e[10][0] / -2 + ' ' + e[10][1] / -2 + ')')
        )
    },
    m(s, a) {
      z(s, t, a)
    },
    p(s, a) {
      a & 1024 && n !== (n = s[10][4]) && c(t, 'd', n),
        a & 36 && r !== (r = s[2] || s[5] || 'currentColor') && c(t, 'fill', r),
        a & 1024 &&
          i !==
            (i = 'translate(' + s[10][0] / -2 + ' ' + s[10][1] / -2 + ')') &&
          c(t, 'transform', i)
    },
    d(s) {
      s && D(t)
    }
  }
}
function ja(e) {
  let t,
    n = e[10][4] && $t(e)
  return {
    c() {
      n && n.c(), (t = Le())
    },
    m(r, i) {
      n && n.m(r, i), z(r, t, i)
    },
    p(r, [i]) {
      r[10][4]
        ? n
          ? n.p(r, i)
          : ((n = $t(r)), n.c(), n.m(t.parentNode, t))
        : n && (n.d(1), (n = null))
    },
    i: M,
    o: M,
    d(r) {
      n && n.d(r), r && D(t)
    }
  }
}
function Ia(e, t, n) {
  let { class: r = '' } = t,
    { id: i = '' } = t,
    { style: s = '' } = t,
    { icon: a } = t,
    { size: o = '' } = t,
    { color: f = '' } = t,
    { fw: l = !1 } = t,
    { pull: u = '' } = t,
    { scale: d = 1 } = t,
    { translateX: m = 0 } = t,
    { translateY: y = 0 } = t,
    { rotate: _ = '' } = t,
    { flip: T = !1 } = t,
    { spin: C = !1 } = t,
    { pulse: L = !1 } = t,
    { primaryColor: R = '' } = t,
    { secondaryColor: q = '' } = t,
    { primaryOpacity: J = 1 } = t,
    { secondaryOpacity: X = 0.4 } = t,
    { swapOpacity: A = !1 } = t,
    I,
    $,
    W
  return (
    (e.$$set = w => {
      'class' in w && n(0, (r = w.class)),
        'id' in w && n(1, (i = w.id)),
        'style' in w && n(13, (s = w.style)),
        'icon' in w && n(14, (a = w.icon)),
        'size' in w && n(15, (o = w.size)),
        'color' in w && n(2, (f = w.color)),
        'fw' in w && n(16, (l = w.fw)),
        'pull' in w && n(17, (u = w.pull)),
        'scale' in w && n(18, (d = w.scale)),
        'translateX' in w && n(19, (m = w.translateX)),
        'translateY' in w && n(20, (y = w.translateY)),
        'rotate' in w && n(21, (_ = w.rotate)),
        'flip' in w && n(22, (T = w.flip)),
        'spin' in w && n(3, (C = w.spin)),
        'pulse' in w && n(4, (L = w.pulse)),
        'primaryColor' in w && n(5, (R = w.primaryColor)),
        'secondaryColor' in w && n(6, (q = w.secondaryColor)),
        'primaryOpacity' in w && n(7, (J = w.primaryOpacity)),
        'secondaryOpacity' in w && n(8, (X = w.secondaryOpacity)),
        'swapOpacity' in w && n(9, (A = w.swapOpacity))
    }),
    (e.$$.update = () => {
      e.$$.dirty & 16384 && n(10, (I = (a && a.icon) || [0, 0, '', [], ''])),
        e.$$.dirty & 237568 && n(11, ($ = Sa(s, o, u, l))),
        e.$$.dirty & 8126464 && n(12, (W = La(d, m, y, _, T, 512)))
    }),
    [r, i, f, C, L, R, q, J, X, A, I, $, W, s, a, o, l, u, d, m, y, _, T]
  )
}
class ke extends B {
  constructor(t) {
    super(),
      V(this, t, Ia, ja, U, {
        class: 0,
        id: 1,
        style: 13,
        icon: 14,
        size: 15,
        color: 2,
        fw: 16,
        pull: 17,
        scale: 18,
        translateX: 19,
        translateY: 20,
        rotate: 21,
        flip: 22,
        spin: 3,
        pulse: 4,
        primaryColor: 5,
        secondaryColor: 6,
        primaryOpacity: 7,
        secondaryOpacity: 8,
        swapOpacity: 9
      })
  }
}
var Na = {
    prefix: 'fas',
    iconName: 'xmark',
    icon: [
      320,
      512,
      [
        128473,
        10005,
        10006,
        10060,
        215,
        'close',
        'multiply',
        'remove',
        'times'
      ],
      'f00d',
      'M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'
    ]
  },
  Ha = {
    prefix: 'fas',
    iconName: 'window-minimize',
    icon: [
      512,
      512,
      [128469],
      'f2d1',
      'M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z'
    ]
  },
  Ua = {
    prefix: 'fab',
    iconName: 'github',
    icon: [
      496,
      512,
      [],
      'f09b',
      'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
    ]
  }
const kt = [
  { content: { text: 'Home' }, target: { href: '/', newTab: !1 } },
  {
    content: { text: 'Call-Tauri' },
    target: { href: '/call-tauri', newTab: !1 }
  },
  {
    content: { text: 'Hash-string' },
    target: { href: '/hash-string', newTab: !1 }
  },
  { content: { text: 'Versions' }, target: { href: '/versions', newTab: !1 } }
]
function Pt(e, t, n) {
  const r = e.slice()
  return (r[0] = t[n]), (r[2] = n), r
}
function qa(e) {
  let t, n
  return (
    (t = new ke({ props: { icon: e[0].content.icon } })),
    {
      c() {
        j(t.$$.fragment)
      },
      m(r, i) {
        O(t, r, i), (n = !0)
      },
      p: M,
      i(r) {
        n || (P(t.$$.fragment, r), (n = !0))
      },
      o(r) {
        x(t.$$.fragment, r), (n = !1)
      },
      d(r) {
        S(t, r)
      }
    }
  )
}
function xt(e, t) {
  let n,
    r,
    i,
    s = t[0].content.text + '',
    a,
    o,
    f,
    l,
    u,
    d = t[0].content.icon && qa(t)
  return {
    key: e,
    first: null,
    c() {
      ;(n = k('li')),
        (r = k('a')),
        d && d.c(),
        (i = F()),
        (a = K(s)),
        (o = F()),
        c(r, 'exact', ''),
        c(r, 'data-active-class', 'border-b-2'),
        c(r, 'href', t[0].target.href),
        c(r, 'target', t[0].target.newTab ? '_blank' : ''),
        (this.first = n)
    },
    m(m, y) {
      z(m, n, y),
        p(n, r),
        d && d.m(r, null),
        p(r, i),
        p(r, a),
        p(n, o),
        (f = !0),
        l || ((u = Ln(mr.call(null, r))), (l = !0))
    },
    p(m, y) {
      ;(t = m), t[0].content.icon && d.p(t, y)
    },
    i(m) {
      f || (P(d), (f = !0))
    },
    o(m) {
      x(d), (f = !1)
    },
    d(m) {
      m && D(n), d && d.d(), (l = !1), u()
    }
  }
}
function Va(e) {
  let t,
    n,
    r,
    i,
    s,
    a,
    o = [],
    f = new Map(),
    l,
    u,
    d,
    m,
    y,
    _,
    T,
    C,
    L,
    R,
    q,
    J,
    X
  r = new Oa({ props: { class: 'w-8' } })
  let A = kt
  const I = $ => $[2]
  for (let $ = 0; $ < A.length; $ += 1) {
    let W = Pt(e, A, $),
      w = I(W)
    f.set(w, (o[$] = xt(w, W)))
  }
  return (
    (m = new ke({ props: { icon: Ua, size: 'lg' } })),
    (T = new ke({ props: { icon: Ha } })),
    (R = new ke({ props: { icon: Na } })),
    {
      c() {
        ;(t = k('div')),
          (n = k('button')),
          j(r.$$.fragment),
          (i = F()),
          (s = k('nav')),
          (a = k('ul'))
        for (let $ = 0; $ < o.length; $ += 1) o[$].c()
        ;(l = F()),
          (u = k('div')),
          (d = k('a')),
          j(m.$$.fragment),
          (y = F()),
          (_ = k('button')),
          j(T.$$.fragment),
          (C = F()),
          (L = k('button')),
          j(R.$$.fragment),
          c(n, 'class', 'hover:text-secondary ml-2 transition-all'),
          c(a, 'class', 'flex space-x-4'),
          c(d, 'target', '_blank'),
          c(d, 'href', 'https://github.com/Fractal-Tess/Svelte-Tauri'),
          c(d, 'class', 'hover:text-secondary flex items-center'),
          c(d, 'rel', 'noreferrer'),
          c(_, 'class', 'text-xl hover:text-secondary'),
          c(L, 'class', 'text-2xl hover:text-secondary'),
          c(u, 'class', 'flex [&>*]:px-2 h-full [&>*]:transition-all'),
          c(t, 'data-tauri-drag-region', ''),
          c(
            t,
            'class',
            'h-12 bg-base-100 shadow-lg items-center justify-between flex px-2'
          )
      },
      m($, W) {
        z($, t, W), p(t, n), O(r, n, null), p(t, i), p(t, s), p(s, a)
        for (let w = 0; w < o.length; w += 1) o[w].m(a, null)
        p(t, l),
          p(t, u),
          p(u, d),
          O(m, d, null),
          p(u, y),
          p(u, _),
          O(T, _, null),
          p(u, C),
          p(u, L),
          O(R, L, null),
          (q = !0),
          J ||
            ((X = [
              ce(n, 'click', Ze.toggleTheme),
              ce(_, 'click', me.minimize),
              ce(L, 'click', me.close)
            ]),
            (J = !0))
      },
      p($, [W]) {
        W & 0 &&
          ((A = kt),
          Re(),
          (o = Ht(o, W, I, 1, $, A, f, a, nr, xt, null, Pt)),
          Fe())
      },
      i($) {
        if (!q) {
          P(r.$$.fragment, $)
          for (let W = 0; W < A.length; W += 1) P(o[W])
          P(m.$$.fragment, $),
            P(T.$$.fragment, $),
            P(R.$$.fragment, $),
            (q = !0)
        }
      },
      o($) {
        x(r.$$.fragment, $)
        for (let W = 0; W < o.length; W += 1) x(o[W])
        x(m.$$.fragment, $), x(T.$$.fragment, $), x(R.$$.fragment, $), (q = !1)
      },
      d($) {
        $ && D(t), S(r)
        for (let W = 0; W < o.length; W += 1) o[W].d()
        S(m), S(T), S(R), (J = !1), ae(X)
      }
    }
  )
}
class Ba extends B {
  constructor(t) {
    super(), V(this, t, null, Va, U, {})
  }
}
class Ga extends B {
  constructor(t) {
    super(), V(this, t, null, null, U, {})
  }
}
function Ya(e) {
  let t, n, r, i, s, a, o, f
  n = new Ba({})
  const l = e[1].default,
    u = Tt(l, e, e[0], null)
  return (
    (o = new Ga({})),
    {
      c() {
        ;(t = k('div')),
          j(n.$$.fragment),
          (r = F()),
          (i = k('main')),
          u && u.c(),
          (a = F()),
          j(o.$$.fragment),
          c(i, 'class', 'flex-1'),
          c(
            t,
            'class',
            'font-sans bg-base-100 text-base-content h-screen flex flex-col overflow-y-auto overflow-x-hidden'
          )
      },
      m(d, m) {
        z(d, t, m),
          O(n, t, null),
          p(t, r),
          p(t, i),
          u && u.m(i, null),
          p(t, a),
          O(o, t, null),
          (f = !0)
      },
      p(d, [m]) {
        u &&
          u.p &&
          (!f || m & 1) &&
          zt(u, l, d, d[0], f ? Ct(l, d[0], m, null) : Et(d[0]), null)
      },
      i(d) {
        f ||
          (P(n.$$.fragment, d),
          P(u, d),
          s ||
            re(() => {
              ;(s = It(i, an, { delay: 300, duration: 1e3 })), s.start()
            }),
          P(o.$$.fragment, d),
          (f = !0))
      },
      o(d) {
        x(n.$$.fragment, d), x(u, d), x(o.$$.fragment, d), (f = !1)
      },
      d(d) {
        d && D(t), S(n), u && u.d(d), S(o)
      }
    }
  )
}
function Ka(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t
  return (
    (e.$$set = s => {
      '$$scope' in s && n(0, (i = s.$$scope))
    }),
    [i, r]
  )
}
class Ja extends B {
  constructor(t) {
    super(), V(this, t, Ka, Ya, U, {})
  }
}
function Xa(e) {
  return { c: M, m: M, i: M, o: M, d: M }
}
function Qa(e) {
  let t, n
  return (
    (t = new Ja({
      props: { $$slots: { default: [Za] }, $$scope: { ctx: e } }
    })),
    {
      c() {
        j(t.$$.fragment)
      },
      m(r, i) {
        O(t, r, i), (n = !0)
      },
      i(r) {
        n || (P(t.$$.fragment, r), (n = !0))
      },
      o(r) {
        x(t.$$.fragment, r), (n = !1)
      },
      d(r) {
        S(t, r)
      }
    }
  )
}
function Za(e) {
  let t, n
  return (
    (t = new za({})),
    {
      c() {
        j(t.$$.fragment)
      },
      m(r, i) {
        O(t, r, i), (n = !0)
      },
      i(r) {
        n || (P(t.$$.fragment, r), (n = !0))
      },
      o(r) {
        x(t.$$.fragment, r), (n = !1)
      },
      d(r) {
        S(t, r)
      }
    }
  )
}
function es(e) {
  return { c: M, m: M, i: M, o: M, d: M }
}
function ts(e) {
  let t,
    n,
    r = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: es,
      then: Qa,
      catch: Xa,
      blocks: [, , ,]
    }
  return (
    Nt(Ze.load(), r),
    {
      c() {
        ;(t = Le()), r.block.c()
      },
      m(i, s) {
        z(i, t, s),
          r.block.m(i, (r.anchor = s)),
          (r.mount = () => t.parentNode),
          (r.anchor = t),
          (n = !0)
      },
      p(i, [s]) {
        e = i
      },
      i(i) {
        n || (P(r.block), (n = !0))
      },
      o(i) {
        for (let s = 0; s < 3; s += 1) {
          const a = r.blocks[s]
          x(a)
        }
        n = !1
      },
      d(i) {
        i && D(t), r.block.d(i), (r.token = null), (r = null)
      }
    }
  )
}
function ns(e, t, n) {
  let r
  return (
    Sn(e, Ze, i => n(0, (r = i))),
    (e.$$.update = () => {
      e.$$.dirty & 1 &&
        (document.documentElement.setAttribute('data-theme', r),
        (document.documentElement.classList.value = r))
    }),
    [r]
  )
}
class rs extends B {
  constructor(t) {
    super(), V(this, t, ns, ts, U, {})
  }
}
new rs({ target: document.getElementById('app') })
