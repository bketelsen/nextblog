!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).RevealMarkdown = t())
})(this, function () {
  'use strict'
  function e(e, t) {
    var n = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e)
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
  }
  function t(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
  }
  function r(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e
  }
  function u(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    )
  }
  function i(e, t) {
    if (null == e) return {}
    var n,
      r,
      u = (function (e, t) {
        if (null == e) return {}
        var n,
          r,
          u = {},
          i = Object.keys(e)
        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (u[n] = e[n])
        return u
      })(e, t)
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e)
      for (r = 0; r < i.length; r++)
        (n = i[r]),
          t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (u[n] = e[n]))
    }
    return u
  }
  function o(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        var n = e && (('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'])
        if (null == n) return
        var r,
          u,
          i = [],
          o = !0,
          a = !1
        try {
          for (
            n = n.call(e);
            !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t);
            o = !0
          );
        } catch (e) {
          ;(a = !0), (u = e)
        } finally {
          try {
            o || null == n.return || n.return()
          } finally {
            if (a) throw u
          }
        }
        return i
      })(e, t) ||
      a(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function a(e, t) {
    if (e) {
      if ('string' == typeof e) return l(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? l(e, t)
          : void 0
      )
    }
  }
  function l(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  function s(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
    if (!n) {
      if (Array.isArray(e) || (n = a(e)) || (t && e && 'number' == typeof e.length)) {
        n && (e = n)
        var r = 0,
          u = function () {}
        return {
          s: u,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
          },
          e: function (e) {
            throw e
          },
          f: u,
        }
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    }
    var i,
      o = !0,
      l = !1
    return {
      s: function () {
        n = n.call(e)
      },
      n: function () {
        var e = n.next()
        return (o = e.done), e
      },
      e: function (e) {
        ;(l = !0), (i = e)
      },
      f: function () {
        try {
          o || null == n.return || n.return()
        } finally {
          if (l) throw i
        }
      },
    }
  }
  var c =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {},
    f = function (e) {
      return e && e.Math == Math && e
    },
    p =
      f('object' == typeof globalThis && globalThis) ||
      f('object' == typeof window && window) ||
      f('object' == typeof self && self) ||
      f('object' == typeof c && c) ||
      (function () {
        return this
      })() ||
      Function('return this')(),
    h = {},
    D = function (e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    },
    g = !D(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          },
        })[1]
      )
    }),
    d = {},
    v = {}.propertyIsEnumerable,
    A = Object.getOwnPropertyDescriptor,
    y = A && !v.call({ 1: 2 }, 1)
  d.f = y
    ? function (e) {
        var t = A(this, e)
        return !!t && t.enumerable
      }
    : v
  var E = function (e, t) {
      return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
    },
    m = {}.toString,
    k = function (e) {
      return m.call(e).slice(8, -1)
    },
    b = k,
    F = ''.split,
    C = D(function () {
      return !Object('z').propertyIsEnumerable(0)
    })
      ? function (e) {
          return 'String' == b(e) ? F.call(e, '') : Object(e)
        }
      : Object,
    x = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e)
      return e
    },
    w = C,
    B = x,
    S = function (e) {
      return w(B(e))
    },
    _ = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e
    },
    T = _,
    O = function (e, t) {
      if (!T(e)) return e
      var n, r
      if (t && 'function' == typeof (n = e.toString) && !T((r = n.call(e)))) return r
      if ('function' == typeof (n = e.valueOf) && !T((r = n.call(e)))) return r
      if (!t && 'function' == typeof (n = e.toString) && !T((r = n.call(e)))) return r
      throw TypeError("Can't convert object to primitive value")
    },
    R = x,
    j = function (e) {
      return Object(R(e))
    },
    $ = j,
    z = {}.hasOwnProperty,
    I = function (e, t) {
      return z.call($(e), t)
    },
    P = _,
    L = p.document,
    M = P(L) && P(L.createElement),
    N = function (e) {
      return M ? L.createElement(e) : {}
    },
    U = N,
    q =
      !g &&
      !D(function () {
        return (
          7 !=
          Object.defineProperty(U('div'), 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      }),
    Z = g,
    G = d,
    H = E,
    V = S,
    Y = O,
    K = I,
    X = q,
    W = Object.getOwnPropertyDescriptor
  h.f = Z
    ? W
    : function (e, t) {
        if (((e = V(e)), (t = Y(t, !0)), X))
          try {
            return W(e, t)
          } catch (e) {}
        if (K(e, t)) return H(!G.f.call(e, t), e[t])
      }
  var J = {},
    Q = _,
    ee = function (e) {
      if (!Q(e)) throw TypeError(String(e) + ' is not an object')
      return e
    },
    te = g,
    ne = q,
    re = ee,
    ue = O,
    ie = Object.defineProperty
  J.f = te
    ? ie
    : function (e, t, n) {
        if ((re(e), (t = ue(t, !0)), re(n), ne))
          try {
            return ie(e, t, n)
          } catch (e) {}
        if ('get' in n || 'set' in n) throw TypeError('Accessors not supported')
        return 'value' in n && (e[t] = n.value), e
      }
  var oe = J,
    ae = E,
    le = g
      ? function (e, t, n) {
          return oe.f(e, t, ae(1, n))
        }
      : function (e, t, n) {
          return (e[t] = n), e
        },
    se = { exports: {} },
    ce = p,
    fe = le,
    pe = function (e, t) {
      try {
        fe(ce, e, t)
      } catch (n) {
        ce[e] = t
      }
      return t
    },
    he = pe,
    De = '__core-js_shared__',
    ge = p[De] || he(De, {}),
    de = ge,
    ve = Function.toString
  'function' != typeof de.inspectSource &&
    (de.inspectSource = function (e) {
      return ve.call(e)
    })
  var Ae = de.inspectSource,
    ye = Ae,
    Ee = p.WeakMap,
    me = 'function' == typeof Ee && /native code/.test(ye(Ee)),
    ke = { exports: {} },
    be = ge
  ;(ke.exports = function (e, t) {
    return be[e] || (be[e] = void 0 !== t ? t : {})
  })('versions', []).push({
    version: '3.12.1',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
  })
  var Fe,
    Ce,
    xe,
    we = 0,
    Be = Math.random(),
    Se = function (e) {
      return 'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++we + Be).toString(36)
    },
    _e = ke.exports,
    Te = Se,
    Oe = _e('keys'),
    Re = function (e) {
      return Oe[e] || (Oe[e] = Te(e))
    },
    je = {},
    $e = me,
    ze = _,
    Ie = le,
    Pe = I,
    Le = ge,
    Me = Re,
    Ne = je,
    Ue = 'Object already initialized',
    qe = p.WeakMap
  if ($e || Le.state) {
    var Ze = Le.state || (Le.state = new qe()),
      Ge = Ze.get,
      He = Ze.has,
      Ve = Ze.set
    ;(Fe = function (e, t) {
      if (He.call(Ze, e)) throw new TypeError(Ue)
      return (t.facade = e), Ve.call(Ze, e, t), t
    }),
      (Ce = function (e) {
        return Ge.call(Ze, e) || {}
      }),
      (xe = function (e) {
        return He.call(Ze, e)
      })
  } else {
    var Ye = Me('state')
    ;(Ne[Ye] = !0),
      (Fe = function (e, t) {
        if (Pe(e, Ye)) throw new TypeError(Ue)
        return (t.facade = e), Ie(e, Ye, t), t
      }),
      (Ce = function (e) {
        return Pe(e, Ye) ? e[Ye] : {}
      }),
      (xe = function (e) {
        return Pe(e, Ye)
      })
  }
  var Ke = {
      set: Fe,
      get: Ce,
      has: xe,
      enforce: function (e) {
        return xe(e) ? Ce(e) : Fe(e, {})
      },
      getterFor: function (e) {
        return function (t) {
          var n
          if (!ze(t) || (n = Ce(t)).type !== e)
            throw TypeError('Incompatible receiver, ' + e + ' required')
          return n
        }
      },
    },
    Xe = p,
    We = le,
    Je = I,
    Qe = pe,
    et = Ae,
    tt = Ke.get,
    nt = Ke.enforce,
    rt = String(String).split('String')
  ;(se.exports = function (e, t, n, r) {
    var u,
      i = !!r && !!r.unsafe,
      o = !!r && !!r.enumerable,
      a = !!r && !!r.noTargetGet
    'function' == typeof n &&
      ('string' != typeof t || Je(n, 'name') || We(n, 'name', t),
      (u = nt(n)).source || (u.source = rt.join('string' == typeof t ? t : ''))),
      e !== Xe
        ? (i ? !a && e[t] && (o = !0) : delete e[t], o ? (e[t] = n) : We(e, t, n))
        : o
        ? (e[t] = n)
        : Qe(t, n)
  })(Function.prototype, 'toString', function () {
    return ('function' == typeof this && tt(this).source) || et(this)
  })
  var ut = p,
    it = p,
    ot = function (e) {
      return 'function' == typeof e ? e : void 0
    },
    at = function (e, t) {
      return arguments.length < 2
        ? ot(ut[e]) || ot(it[e])
        : (ut[e] && ut[e][t]) || (it[e] && it[e][t])
    },
    lt = {},
    st = Math.ceil,
    ct = Math.floor,
    ft = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? ct : st)(e)
    },
    pt = ft,
    ht = Math.min,
    Dt = function (e) {
      return e > 0 ? ht(pt(e), 9007199254740991) : 0
    },
    gt = ft,
    dt = Math.max,
    vt = Math.min,
    At = function (e, t) {
      var n = gt(e)
      return n < 0 ? dt(n + t, 0) : vt(n, t)
    },
    yt = S,
    Et = Dt,
    mt = At,
    kt = function (e) {
      return function (t, n, r) {
        var u,
          i = yt(t),
          o = Et(i.length),
          a = mt(r, o)
        if (e && n != n) {
          for (; o > a; ) if ((u = i[a++]) != u) return !0
        } else for (; o > a; a++) if ((e || a in i) && i[a] === n) return e || a || 0
        return !e && -1
      }
    },
    bt = { includes: kt(!0), indexOf: kt(!1) },
    Ft = I,
    Ct = S,
    xt = bt.indexOf,
    wt = je,
    Bt = function (e, t) {
      var n,
        r = Ct(e),
        u = 0,
        i = []
      for (n in r) !Ft(wt, n) && Ft(r, n) && i.push(n)
      for (; t.length > u; ) Ft(r, (n = t[u++])) && (~xt(i, n) || i.push(n))
      return i
    },
    St = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ],
    _t = Bt,
    Tt = St.concat('length', 'prototype')
  lt.f =
    Object.getOwnPropertyNames ||
    function (e) {
      return _t(e, Tt)
    }
  var Ot = {}
  Ot.f = Object.getOwnPropertySymbols
  var Rt = lt,
    jt = Ot,
    $t = ee,
    zt =
      at('Reflect', 'ownKeys') ||
      function (e) {
        var t = Rt.f($t(e)),
          n = jt.f
        return n ? t.concat(n(e)) : t
      },
    It = I,
    Pt = zt,
    Lt = h,
    Mt = J,
    Nt = D,
    Ut = /#|\.prototype\./,
    qt = function (e, t) {
      var n = Gt[Zt(e)]
      return n == Vt || (n != Ht && ('function' == typeof t ? Nt(t) : !!t))
    },
    Zt = (qt.normalize = function (e) {
      return String(e).replace(Ut, '.').toLowerCase()
    }),
    Gt = (qt.data = {}),
    Ht = (qt.NATIVE = 'N'),
    Vt = (qt.POLYFILL = 'P'),
    Yt = qt,
    Kt = p,
    Xt = h.f,
    Wt = le,
    Jt = se.exports,
    Qt = pe,
    en = function (e, t) {
      for (var n = Pt(t), r = Mt.f, u = Lt.f, i = 0; i < n.length; i++) {
        var o = n[i]
        It(e, o) || r(e, o, u(t, o))
      }
    },
    tn = Yt,
    nn = function (e, t) {
      var n,
        r,
        u,
        i,
        o,
        a = e.target,
        l = e.global,
        s = e.stat
      if ((n = l ? Kt : s ? Kt[a] || Qt(a, {}) : (Kt[a] || {}).prototype))
        for (r in t) {
          if (
            ((i = t[r]),
            (u = e.noTargetGet ? (o = Xt(n, r)) && o.value : n[r]),
            !tn(l ? r : a + (s ? '.' : '#') + r, e.forced) && void 0 !== u)
          ) {
            if (typeof i == typeof u) continue
            en(i, u)
          }
          ;(e.sham || (u && u.sham)) && Wt(i, 'sham', !0), Jt(n, r, i, e)
        }
    },
    rn = ee,
    un = function () {
      var e = rn(this),
        t = ''
      return (
        e.global && (t += 'g'),
        e.ignoreCase && (t += 'i'),
        e.multiline && (t += 'm'),
        e.dotAll && (t += 's'),
        e.unicode && (t += 'u'),
        e.sticky && (t += 'y'),
        t
      )
    },
    on = {},
    an = D
  function ln(e, t) {
    return RegExp(e, t)
  }
  ;(on.UNSUPPORTED_Y = an(function () {
    var e = ln('a', 'y')
    return (e.lastIndex = 2), null != e.exec('abcd')
  })),
    (on.BROKEN_CARET = an(function () {
      var e = ln('^r', 'gy')
      return (e.lastIndex = 2), null != e.exec('str')
    }))
  var sn = un,
    cn = on,
    fn = ke.exports,
    pn = RegExp.prototype.exec,
    hn = fn('native-string-replace', String.prototype.replace),
    Dn = pn,
    gn = (function () {
      var e = /a/,
        t = /b*/g
      return pn.call(e, 'a'), pn.call(t, 'a'), 0 !== e.lastIndex || 0 !== t.lastIndex
    })(),
    dn = cn.UNSUPPORTED_Y || cn.BROKEN_CARET,
    vn = void 0 !== /()??/.exec('')[1]
  ;(gn || vn || dn) &&
    (Dn = function (e) {
      var t,
        n,
        r,
        u,
        i = this,
        o = dn && i.sticky,
        a = sn.call(i),
        l = i.source,
        s = 0,
        c = e
      return (
        o &&
          (-1 === (a = a.replace('y', '')).indexOf('g') && (a += 'g'),
          (c = String(e).slice(i.lastIndex)),
          i.lastIndex > 0 &&
            (!i.multiline || (i.multiline && '\n' !== e[i.lastIndex - 1])) &&
            ((l = '(?: ' + l + ')'), (c = ' ' + c), s++),
          (n = new RegExp('^(?:' + l + ')', a))),
        vn && (n = new RegExp('^' + l + '$(?!\\s)', a)),
        gn && (t = i.lastIndex),
        (r = pn.call(o ? n : i, c)),
        o
          ? r
            ? ((r.input = r.input.slice(s)),
              (r[0] = r[0].slice(s)),
              (r.index = i.lastIndex),
              (i.lastIndex += r[0].length))
            : (i.lastIndex = 0)
          : gn && r && (i.lastIndex = i.global ? r.index + r[0].length : t),
        vn &&
          r &&
          r.length > 1 &&
          hn.call(r[0], n, function () {
            for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (r[u] = void 0)
          }),
        r
      )
    })
  var An = Dn
  nn({ target: 'RegExp', proto: !0, forced: /./.exec !== An }, { exec: An })
  var yn,
    En,
    mn = at('navigator', 'userAgent') || '',
    kn = mn,
    bn = p.process,
    Fn = bn && bn.versions,
    Cn = Fn && Fn.v8
  Cn
    ? (En = (yn = Cn.split('.'))[0] < 4 ? 1 : yn[0] + yn[1])
    : kn &&
      (!(yn = kn.match(/Edge\/(\d+)/)) || yn[1] >= 74) &&
      (yn = kn.match(/Chrome\/(\d+)/)) &&
      (En = yn[1])
  var xn = En && +En,
    wn = xn,
    Bn = D,
    Sn =
      !!Object.getOwnPropertySymbols &&
      !Bn(function () {
        return !String(Symbol()) || (!Symbol.sham && wn && wn < 41)
      }),
    _n = Sn && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    Tn = p,
    On = ke.exports,
    Rn = I,
    jn = Se,
    $n = Sn,
    zn = _n,
    In = On('wks'),
    Pn = Tn.Symbol,
    Ln = zn ? Pn : (Pn && Pn.withoutSetter) || jn,
    Mn = function (e) {
      return (
        (Rn(In, e) && ($n || 'string' == typeof In[e])) ||
          ($n && Rn(Pn, e) ? (In[e] = Pn[e]) : (In[e] = Ln('Symbol.' + e))),
        In[e]
      )
    },
    Nn = se.exports,
    Un = An,
    qn = D,
    Zn = Mn,
    Gn = le,
    Hn = Zn('species'),
    Vn = RegExp.prototype,
    Yn = !qn(function () {
      var e = /./
      return (
        (e.exec = function () {
          var e = []
          return (e.groups = { a: '7' }), e
        }),
        '7' !== ''.replace(e, '$<a>')
      )
    }),
    Kn = '$0' === 'a'.replace(/./, '$0'),
    Xn = Zn('replace'),
    Wn = !!/./[Xn] && '' === /./[Xn]('a', '$0'),
    Jn = !qn(function () {
      var e = /(?:)/,
        t = e.exec
      e.exec = function () {
        return t.apply(this, arguments)
      }
      var n = 'ab'.split(e)
      return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1]
    }),
    Qn = function (e, t, n, r) {
      var u = Zn(e),
        i = !qn(function () {
          var t = {}
          return (
            (t[u] = function () {
              return 7
            }),
            7 != ''[e](t)
          )
        }),
        o =
          i &&
          !qn(function () {
            var t = !1,
              n = /a/
            return (
              'split' === e &&
                (((n = {}).constructor = {}),
                (n.constructor[Hn] = function () {
                  return n
                }),
                (n.flags = ''),
                (n[u] = /./[u])),
              (n.exec = function () {
                return (t = !0), null
              }),
              n[u](''),
              !t
            )
          })
      if (!i || !o || ('replace' === e && (!Yn || !Kn || Wn)) || ('split' === e && !Jn)) {
        var a = /./[u],
          l = n(
            u,
            ''[e],
            function (e, t, n, r, u) {
              var o = t.exec
              return o === Un || o === Vn.exec
                ? i && !u
                  ? { done: !0, value: a.call(t, n, r) }
                  : { done: !0, value: e.call(n, t, r) }
                : { done: !1 }
            },
            { REPLACE_KEEPS_$0: Kn, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Wn }
          ),
          s = l[0],
          c = l[1]
        Nn(String.prototype, e, s),
          Nn(
            Vn,
            u,
            2 == t
              ? function (e, t) {
                  return c.call(e, this, t)
                }
              : function (e) {
                  return c.call(e, this)
                }
          )
      }
      r && Gn(Vn[u], 'sham', !0)
    },
    er = ft,
    tr = x,
    nr = function (e) {
      return function (t, n) {
        var r,
          u,
          i = String(tr(t)),
          o = er(n),
          a = i.length
        return o < 0 || o >= a
          ? e
            ? ''
            : void 0
          : (r = i.charCodeAt(o)) < 55296 ||
            r > 56319 ||
            o + 1 === a ||
            (u = i.charCodeAt(o + 1)) < 56320 ||
            u > 57343
          ? e
            ? i.charAt(o)
            : r
          : e
          ? i.slice(o, o + 2)
          : u - 56320 + ((r - 55296) << 10) + 65536
      }
    },
    rr = { codeAt: nr(!1), charAt: nr(!0) },
    ur = rr.charAt,
    ir = function (e, t, n) {
      return t + (n ? ur(e, t).length : 1)
    },
    or = j,
    ar = Math.floor,
    lr = ''.replace,
    sr = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    cr = /\$([$&'`]|\d{1,2})/g,
    fr = k,
    pr = An,
    hr = function (e, t) {
      var n = e.exec
      if ('function' == typeof n) {
        var r = n.call(e, t)
        if ('object' != typeof r)
          throw TypeError('RegExp exec method returned something other than an Object or null')
        return r
      }
      if ('RegExp' !== fr(e)) throw TypeError('RegExp#exec called on incompatible receiver')
      return pr.call(e, t)
    },
    Dr = Qn,
    gr = ee,
    dr = Dt,
    vr = ft,
    Ar = x,
    yr = ir,
    Er = function (e, t, n, r, u, i) {
      var o = n + e.length,
        a = r.length,
        l = cr
      return (
        void 0 !== u && ((u = or(u)), (l = sr)),
        lr.call(i, l, function (i, l) {
          var s
          switch (l.charAt(0)) {
            case '$':
              return '$'
            case '&':
              return e
            case '`':
              return t.slice(0, n)
            case "'":
              return t.slice(o)
            case '<':
              s = u[l.slice(1, -1)]
              break
            default:
              var c = +l
              if (0 === c) return i
              if (c > a) {
                var f = ar(c / 10)
                return 0 === f
                  ? i
                  : f <= a
                  ? void 0 === r[f - 1]
                    ? l.charAt(1)
                    : r[f - 1] + l.charAt(1)
                  : i
              }
              s = r[c - 1]
          }
          return void 0 === s ? '' : s
        })
      )
    },
    mr = hr,
    kr = Math.max,
    br = Math.min
  Dr('replace', 2, function (e, t, n, r) {
    var u = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      i = r.REPLACE_KEEPS_$0,
      o = u ? '$' : '$0'
    return [
      function (n, r) {
        var u = Ar(this),
          i = null == n ? void 0 : n[e]
        return void 0 !== i ? i.call(n, u, r) : t.call(String(u), n, r)
      },
      function (e, r) {
        if ((!u && i) || ('string' == typeof r && -1 === r.indexOf(o))) {
          var a = n(t, e, this, r)
          if (a.done) return a.value
        }
        var l = gr(e),
          s = String(this),
          c = 'function' == typeof r
        c || (r = String(r))
        var f = l.global
        if (f) {
          var p = l.unicode
          l.lastIndex = 0
        }
        for (var h = []; ; ) {
          var D = mr(l, s)
          if (null === D) break
          if ((h.push(D), !f)) break
          '' === String(D[0]) && (l.lastIndex = yr(s, dr(l.lastIndex), p))
        }
        for (var g, d = '', v = 0, A = 0; A < h.length; A++) {
          D = h[A]
          for (
            var y = String(D[0]), E = kr(br(vr(D.index), s.length), 0), m = [], k = 1;
            k < D.length;
            k++
          )
            m.push(void 0 === (g = D[k]) ? g : String(g))
          var b = D.groups
          if (c) {
            var F = [y].concat(m, E, s)
            void 0 !== b && F.push(b)
            var C = String(r.apply(void 0, F))
          } else C = Er(y, s, E, m, b, r)
          E >= v && ((d += s.slice(v, E) + C), (v = E + y.length))
        }
        return d + s.slice(v)
      },
    ]
  })
  var Fr = _,
    Cr = ee,
    xr = function (e) {
      if (!Fr(e) && null !== e) throw TypeError("Can't set " + String(e) + ' as a prototype')
      return e
    },
    wr =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var e,
              t = !1,
              n = {}
            try {
              ;(e = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(n, []),
                (t = n instanceof Array)
            } catch (e) {}
            return function (n, r) {
              return Cr(n), xr(r), t ? e.call(n, r) : (n.__proto__ = r), n
            }
          })()
        : void 0),
    Br = _,
    Sr = wr,
    _r = _,
    Tr = k,
    Or = Mn('match'),
    Rr = function (e) {
      var t
      return _r(e) && (void 0 !== (t = e[Or]) ? !!t : 'RegExp' == Tr(e))
    },
    jr = at,
    $r = J,
    zr = g,
    Ir = Mn('species'),
    Pr = function (e) {
      var t = jr(e),
        n = $r.f
      zr &&
        t &&
        !t[Ir] &&
        n(t, Ir, {
          configurable: !0,
          get: function () {
            return this
          },
        })
    },
    Lr = g,
    Mr = p,
    Nr = Yt,
    Ur = function (e, t, n) {
      var r, u
      return (
        Sr &&
          'function' == typeof (r = t.constructor) &&
          r !== n &&
          Br((u = r.prototype)) &&
          u !== n.prototype &&
          Sr(e, u),
        e
      )
    },
    qr = J.f,
    Zr = lt.f,
    Gr = Rr,
    Hr = un,
    Vr = on,
    Yr = se.exports,
    Kr = D,
    Xr = Ke.enforce,
    Wr = Pr,
    Jr = Mn('match'),
    Qr = Mr.RegExp,
    eu = Qr.prototype,
    tu = /a/g,
    nu = /a/g,
    ru = new Qr(tu) !== tu,
    uu = Vr.UNSUPPORTED_Y
  if (
    Lr &&
    Nr(
      'RegExp',
      !ru ||
        uu ||
        Kr(function () {
          return (nu[Jr] = !1), Qr(tu) != tu || Qr(nu) == nu || '/a/i' != Qr(tu, 'i')
        })
    )
  ) {
    for (
      var iu = function (e, t) {
          var n,
            r = this instanceof iu,
            u = Gr(e),
            i = void 0 === t
          if (!r && u && e.constructor === iu && i) return e
          ru
            ? u && !i && (e = e.source)
            : e instanceof iu && (i && (t = Hr.call(e)), (e = e.source)),
            uu && (n = !!t && t.indexOf('y') > -1) && (t = t.replace(/y/g, ''))
          var o = Ur(ru ? new Qr(e, t) : Qr(e, t), r ? this : eu, iu)
          uu && n && (Xr(o).sticky = !0)
          return o
        },
        ou = function (e) {
          ;(e in iu) ||
            qr(iu, e, {
              configurable: !0,
              get: function () {
                return Qr[e]
              },
              set: function (t) {
                Qr[e] = t
              },
            })
        },
        au = Zr(Qr),
        lu = 0;
      au.length > lu;

    )
      ou(au[lu++])
    ;(eu.constructor = iu), (iu.prototype = eu), Yr(Mr, 'RegExp', iu)
  }
  Wr('RegExp')
  var su = se.exports,
    cu = ee,
    fu = D,
    pu = un,
    hu = 'toString',
    Du = RegExp.prototype,
    gu = Du.toString,
    du = fu(function () {
      return '/a/b' != gu.call({ source: 'a', flags: 'b' })
    }),
    vu = gu.name != hu
  ;(du || vu) &&
    su(
      RegExp.prototype,
      hu,
      function () {
        var e = cu(this),
          t = String(e.source),
          n = e.flags
        return (
          '/' +
          t +
          '/' +
          String(void 0 === n && e instanceof RegExp && !('flags' in Du) ? pu.call(e) : n)
        )
      },
      { unsafe: !0 }
    )
  var Au = ee,
    yu = Dt,
    Eu = x,
    mu = ir,
    ku = hr
  Qn('match', 1, function (e, t, n) {
    return [
      function (t) {
        var n = Eu(this),
          r = null == t ? void 0 : t[e]
        return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
      },
      function (e) {
        var r = n(t, e, this)
        if (r.done) return r.value
        var u = Au(e),
          i = String(this)
        if (!u.global) return ku(u, i)
        var o = u.unicode
        u.lastIndex = 0
        for (var a, l = [], s = 0; null !== (a = ku(u, i)); ) {
          var c = String(a[0])
          ;(l[s] = c), '' === c && (u.lastIndex = mu(i, yu(u.lastIndex), o)), s++
        }
        return 0 === s ? null : l
      },
    ]
  })
  var bu = g,
    Fu = J.f,
    Cu = Function.prototype,
    xu = Cu.toString,
    wu = /^\s*function ([^ (]*)/,
    Bu = 'name'
  bu &&
    !(Bu in Cu) &&
    Fu(Cu, Bu, {
      configurable: !0,
      get: function () {
        try {
          return xu.call(this).match(wu)[1]
        } catch (e) {
          return ''
        }
      },
    })
  var Su = D,
    _u = function (e, t) {
      var n = [][e]
      return (
        !!n &&
        Su(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1
              },
            1
          )
        })
      )
    },
    Tu = nn,
    Ou = S,
    Ru = [].join,
    ju = C != Object,
    $u = _u('join', ',')
  Tu(
    { target: 'Array', proto: !0, forced: ju || !$u },
    {
      join: function (e) {
        return Ru.call(Ou(this), void 0 === e ? ',' : e)
      },
    }
  )
  var zu = function (e) {
      if ('function' != typeof e) throw TypeError(String(e) + ' is not a function')
      return e
    },
    Iu = ee,
    Pu = zu,
    Lu = Mn('species'),
    Mu = function (e, t) {
      var n,
        r = Iu(e).constructor
      return void 0 === r || null == (n = Iu(r)[Lu]) ? t : Pu(n)
    },
    Nu = Qn,
    Uu = Rr,
    qu = ee,
    Zu = x,
    Gu = Mu,
    Hu = ir,
    Vu = Dt,
    Yu = hr,
    Ku = An,
    Xu = on.UNSUPPORTED_Y,
    Wu = [].push,
    Ju = Math.min,
    Qu = 4294967295
  Nu(
    'split',
    2,
    function (e, t, n) {
      var r
      return (
        (r =
          'c' == 'abbc'.split(/(b)*/)[1] ||
          4 != 'test'.split(/(?:)/, -1).length ||
          2 != 'ab'.split(/(?:ab)*/).length ||
          4 != '.'.split(/(.?)(.?)/).length ||
          '.'.split(/()()/).length > 1 ||
          ''.split(/.?/).length
            ? function (e, n) {
                var r = String(Zu(this)),
                  u = void 0 === n ? Qu : n >>> 0
                if (0 === u) return []
                if (void 0 === e) return [r]
                if (!Uu(e)) return t.call(r, e, u)
                for (
                  var i,
                    o,
                    a,
                    l = [],
                    s =
                      (e.ignoreCase ? 'i' : '') +
                      (e.multiline ? 'm' : '') +
                      (e.unicode ? 'u' : '') +
                      (e.sticky ? 'y' : ''),
                    c = 0,
                    f = new RegExp(e.source, s + 'g');
                  (i = Ku.call(f, r)) &&
                  !(
                    (o = f.lastIndex) > c &&
                    (l.push(r.slice(c, i.index)),
                    i.length > 1 && i.index < r.length && Wu.apply(l, i.slice(1)),
                    (a = i[0].length),
                    (c = o),
                    l.length >= u)
                  );

                )
                  f.lastIndex === i.index && f.lastIndex++
                return (
                  c === r.length ? (!a && f.test('')) || l.push('') : l.push(r.slice(c)),
                  l.length > u ? l.slice(0, u) : l
                )
              }
            : '0'.split(void 0, 0).length
            ? function (e, n) {
                return void 0 === e && 0 === n ? [] : t.call(this, e, n)
              }
            : t),
        [
          function (t, n) {
            var u = Zu(this),
              i = null == t ? void 0 : t[e]
            return void 0 !== i ? i.call(t, u, n) : r.call(String(u), t, n)
          },
          function (e, u) {
            var i = n(r, e, this, u, r !== t)
            if (i.done) return i.value
            var o = qu(e),
              a = String(this),
              l = Gu(o, RegExp),
              s = o.unicode,
              c =
                (o.ignoreCase ? 'i' : '') +
                (o.multiline ? 'm' : '') +
                (o.unicode ? 'u' : '') +
                (Xu ? 'g' : 'y'),
              f = new l(Xu ? '^(?:' + o.source + ')' : o, c),
              p = void 0 === u ? Qu : u >>> 0
            if (0 === p) return []
            if (0 === a.length) return null === Yu(f, a) ? [a] : []
            for (var h = 0, D = 0, g = []; D < a.length; ) {
              f.lastIndex = Xu ? 0 : D
              var d,
                v = Yu(f, Xu ? a.slice(D) : a)
              if (null === v || (d = Ju(Vu(f.lastIndex + (Xu ? D : 0)), a.length)) === h)
                D = Hu(a, D, s)
              else {
                if ((g.push(a.slice(h, D)), g.length === p)) return g
                for (var A = 1; A <= v.length - 1; A++) if ((g.push(v[A]), g.length === p)) return g
                D = h = d
              }
            }
            return g.push(a.slice(h)), g
          },
        ]
      )
    },
    Xu
  )
  var ei = '\t\n\v\f\r                　\u2028\u2029\ufeff',
    ti = x,
    ni = '[\t\n\v\f\r                　\u2028\u2029\ufeff]',
    ri = RegExp('^' + ni + ni + '*'),
    ui = RegExp(ni + ni + '*$'),
    ii = function (e) {
      return function (t) {
        var n = String(ti(t))
        return 1 & e && (n = n.replace(ri, '')), 2 & e && (n = n.replace(ui, '')), n
      }
    },
    oi = { start: ii(1), end: ii(2), trim: ii(3) },
    ai = D,
    li = ei,
    si = oi.trim
  nn(
    {
      target: 'String',
      proto: !0,
      forced: (function (e) {
        return ai(function () {
          return !!li[e]() || '​᠎' != '​᠎'[e]() || li[e].name !== e
        })
      })('trim'),
    },
    {
      trim: function () {
        return si(this)
      },
    }
  )
  var ci = {
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
      TouchList: 0,
    },
    fi = zu,
    pi = function (e, t, n) {
      if ((fi(e), void 0 === t)) return e
      switch (n) {
        case 0:
          return function () {
            return e.call(t)
          }
        case 1:
          return function (n) {
            return e.call(t, n)
          }
        case 2:
          return function (n, r) {
            return e.call(t, n, r)
          }
        case 3:
          return function (n, r, u) {
            return e.call(t, n, r, u)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    },
    hi = k,
    Di =
      Array.isArray ||
      function (e) {
        return 'Array' == hi(e)
      },
    gi = _,
    di = Di,
    vi = Mn('species'),
    Ai = function (e, t) {
      var n
      return (
        di(e) &&
          ('function' != typeof (n = e.constructor) || (n !== Array && !di(n.prototype))
            ? gi(n) && null === (n = n[vi]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      )
    },
    yi = pi,
    Ei = C,
    mi = j,
    ki = Dt,
    bi = Ai,
    Fi = [].push,
    Ci = function (e) {
      var t = 1 == e,
        n = 2 == e,
        r = 3 == e,
        u = 4 == e,
        i = 6 == e,
        o = 7 == e,
        a = 5 == e || i
      return function (l, s, c, f) {
        for (
          var p,
            h,
            D = mi(l),
            g = Ei(D),
            d = yi(s, c, 3),
            v = ki(g.length),
            A = 0,
            y = f || bi,
            E = t ? y(l, v) : n || o ? y(l, 0) : void 0;
          v > A;
          A++
        )
          if ((a || A in g) && ((h = d((p = g[A]), A, D)), e))
            if (t) E[A] = h
            else if (h)
              switch (e) {
                case 3:
                  return !0
                case 5:
                  return p
                case 6:
                  return A
                case 2:
                  Fi.call(E, p)
              }
            else
              switch (e) {
                case 4:
                  return !1
                case 7:
                  Fi.call(E, p)
              }
        return i ? -1 : r || u ? u : E
      }
    },
    xi = {
      forEach: Ci(0),
      map: Ci(1),
      filter: Ci(2),
      some: Ci(3),
      every: Ci(4),
      find: Ci(5),
      findIndex: Ci(6),
      filterOut: Ci(7),
    },
    wi = xi.forEach,
    Bi = p,
    Si = ci,
    _i = _u('forEach')
      ? [].forEach
      : function (e) {
          return wi(this, e, arguments.length > 1 ? arguments[1] : void 0)
        },
    Ti = le
  for (var Oi in Si) {
    var Ri = Bi[Oi],
      ji = Ri && Ri.prototype
    if (ji && ji.forEach !== _i)
      try {
        Ti(ji, 'forEach', _i)
      } catch (e) {
        ji.forEach = _i
      }
  }
  var $i = {}
  $i[Mn('toStringTag')] = 'z'
  var zi = '[object z]' === String($i),
    Ii = zi,
    Pi = k,
    Li = Mn('toStringTag'),
    Mi =
      'Arguments' ==
      Pi(
        (function () {
          return arguments
        })()
      ),
    Ni = Ii
      ? Pi
      : function (e) {
          var t, n, r
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (n = (function (e, t) {
                try {
                  return e[t]
                } catch (e) {}
              })((t = Object(e)), Li))
            ? n
            : Mi
            ? Pi(t)
            : 'Object' == (r = Pi(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : r
        },
    Ui = Ni,
    qi = zi
      ? {}.toString
      : function () {
          return '[object ' + Ui(this) + ']'
        },
    Zi = zi,
    Gi = se.exports,
    Hi = qi
  Zi || Gi(Object.prototype, 'toString', Hi, { unsafe: !0 })
  var Vi = p.Promise,
    Yi = se.exports,
    Ki = J.f,
    Xi = I,
    Wi = Mn('toStringTag'),
    Ji = function (e, t, n) {
      e && !Xi((e = n ? e : e.prototype), Wi) && Ki(e, Wi, { configurable: !0, value: t })
    },
    Qi = {},
    eo = Qi,
    to = Mn('iterator'),
    no = Array.prototype,
    ro = Ni,
    uo = Qi,
    io = Mn('iterator'),
    oo = ee,
    ao = ee,
    lo = function (e) {
      return void 0 !== e && (eo.Array === e || no[to] === e)
    },
    so = Dt,
    co = pi,
    fo = function (e) {
      if (null != e) return e[io] || e['@@iterator'] || uo[ro(e)]
    },
    po = function (e) {
      var t = e.return
      if (void 0 !== t) return oo(t.call(e)).value
    },
    ho = function (e, t) {
      ;(this.stopped = e), (this.result = t)
    },
    Do = Mn('iterator'),
    go = !1
  try {
    var vo = 0,
      Ao = {
        next: function () {
          return { done: !!vo++ }
        },
        return: function () {
          go = !0
        },
      }
    ;(Ao[Do] = function () {
      return this
    }),
      Array.from(Ao, function () {
        throw 2
      })
  } catch (e) {}
  var yo,
    Eo,
    mo,
    ko = at('document', 'documentElement'),
    bo = /(?:iphone|ipod|ipad).*applewebkit/i.test(mn),
    Fo = 'process' == k(p.process),
    Co = p,
    xo = D,
    wo = pi,
    Bo = ko,
    So = N,
    _o = bo,
    To = Fo,
    Oo = Co.location,
    Ro = Co.setImmediate,
    jo = Co.clearImmediate,
    $o = Co.process,
    zo = Co.MessageChannel,
    Io = Co.Dispatch,
    Po = 0,
    Lo = {},
    Mo = 'onreadystatechange',
    No = function (e) {
      if (Lo.hasOwnProperty(e)) {
        var t = Lo[e]
        delete Lo[e], t()
      }
    },
    Uo = function (e) {
      return function () {
        No(e)
      }
    },
    qo = function (e) {
      No(e.data)
    },
    Zo = function (e) {
      Co.postMessage(e + '', Oo.protocol + '//' + Oo.host)
    }
  ;(Ro && jo) ||
    ((Ro = function (e) {
      for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++])
      return (
        (Lo[++Po] = function () {
          ;('function' == typeof e ? e : Function(e)).apply(void 0, t)
        }),
        yo(Po),
        Po
      )
    }),
    (jo = function (e) {
      delete Lo[e]
    }),
    To
      ? (yo = function (e) {
          $o.nextTick(Uo(e))
        })
      : Io && Io.now
      ? (yo = function (e) {
          Io.now(Uo(e))
        })
      : zo && !_o
      ? ((mo = (Eo = new zo()).port2), (Eo.port1.onmessage = qo), (yo = wo(mo.postMessage, mo, 1)))
      : Co.addEventListener &&
        'function' == typeof postMessage &&
        !Co.importScripts &&
        Oo &&
        'file:' !== Oo.protocol &&
        !xo(Zo)
      ? ((yo = Zo), Co.addEventListener('message', qo, !1))
      : (yo =
          Mo in So('script')
            ? function (e) {
                Bo.appendChild(So('script')).onreadystatechange = function () {
                  Bo.removeChild(this), No(e)
                }
              }
            : function (e) {
                setTimeout(Uo(e), 0)
              }))
  var Go,
    Ho,
    Vo,
    Yo,
    Ko,
    Xo,
    Wo,
    Jo,
    Qo = { set: Ro, clear: jo },
    ea = /web0s(?!.*chrome)/i.test(mn),
    ta = p,
    na = h.f,
    ra = Qo.set,
    ua = bo,
    ia = ea,
    oa = Fo,
    aa = ta.MutationObserver || ta.WebKitMutationObserver,
    la = ta.document,
    sa = ta.process,
    ca = ta.Promise,
    fa = na(ta, 'queueMicrotask'),
    pa = fa && fa.value
  pa ||
    ((Go = function () {
      var e, t
      for (oa && (e = sa.domain) && e.exit(); Ho; ) {
        ;(t = Ho.fn), (Ho = Ho.next)
        try {
          t()
        } catch (e) {
          throw (Ho ? Yo() : (Vo = void 0), e)
        }
      }
      ;(Vo = void 0), e && e.enter()
    }),
    ua || oa || ia || !aa || !la
      ? ca && ca.resolve
        ? (((Wo = ca.resolve(void 0)).constructor = ca),
          (Jo = Wo.then),
          (Yo = function () {
            Jo.call(Wo, Go)
          }))
        : (Yo = oa
            ? function () {
                sa.nextTick(Go)
              }
            : function () {
                ra.call(ta, Go)
              })
      : ((Ko = !0),
        (Xo = la.createTextNode('')),
        new aa(Go).observe(Xo, { characterData: !0 }),
        (Yo = function () {
          Xo.data = Ko = !Ko
        })))
  var ha =
      pa ||
      function (e) {
        var t = { fn: e, next: void 0 }
        Vo && (Vo.next = t), Ho || ((Ho = t), Yo()), (Vo = t)
      },
    Da = {},
    ga = zu,
    da = function (e) {
      var t, n
      ;(this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n) throw TypeError('Bad Promise constructor')
        ;(t = e), (n = r)
      })),
        (this.resolve = ga(t)),
        (this.reject = ga(n))
    }
  Da.f = function (e) {
    return new da(e)
  }
  var va,
    Aa,
    ya,
    Ea,
    ma = ee,
    ka = _,
    ba = Da,
    Fa = p,
    Ca = 'object' == typeof window,
    xa = nn,
    wa = p,
    Ba = at,
    Sa = Vi,
    _a = se.exports,
    Ta = function (e, t, n) {
      for (var r in t) Yi(e, r, t[r], n)
      return e
    },
    Oa = wr,
    Ra = Ji,
    ja = Pr,
    $a = _,
    za = zu,
    Ia = function (e, t, n) {
      if (!(e instanceof t)) throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation')
      return e
    },
    Pa = Ae,
    La = function (e, t, n) {
      var r,
        u,
        i,
        o,
        a,
        l,
        s,
        c = n && n.that,
        f = !(!n || !n.AS_ENTRIES),
        p = !(!n || !n.IS_ITERATOR),
        h = !(!n || !n.INTERRUPTED),
        D = co(t, c, 1 + f + h),
        g = function (e) {
          return r && po(r), new ho(!0, e)
        },
        d = function (e) {
          return f ? (ao(e), h ? D(e[0], e[1], g) : D(e[0], e[1])) : h ? D(e, g) : D(e)
        }
      if (p) r = e
      else {
        if ('function' != typeof (u = fo(e))) throw TypeError('Target is not iterable')
        if (lo(u)) {
          for (i = 0, o = so(e.length); o > i; i++) if ((a = d(e[i])) && a instanceof ho) return a
          return new ho(!1)
        }
        r = u.call(e)
      }
      for (l = r.next; !(s = l.call(r)).done; ) {
        try {
          a = d(s.value)
        } catch (e) {
          throw (po(r), e)
        }
        if ('object' == typeof a && a && a instanceof ho) return a
      }
      return new ho(!1)
    },
    Ma = function (e, t) {
      if (!t && !go) return !1
      var n = !1
      try {
        var r = {}
        ;(r[Do] = function () {
          return {
            next: function () {
              return { done: (n = !0) }
            },
          }
        }),
          e(r)
      } catch (e) {}
      return n
    },
    Na = Mu,
    Ua = Qo.set,
    qa = ha,
    Za = function (e, t) {
      if ((ma(e), ka(t) && t.constructor === e)) return t
      var n = ba.f(e)
      return (0, n.resolve)(t), n.promise
    },
    Ga = function (e, t) {
      var n = Fa.console
      n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
    },
    Ha = Da,
    Va = function (e) {
      try {
        return { error: !1, value: e() }
      } catch (e) {
        return { error: !0, value: e }
      }
    },
    Ya = Ke,
    Ka = Yt,
    Xa = Ca,
    Wa = Fo,
    Ja = xn,
    Qa = Mn('species'),
    el = 'Promise',
    tl = Ya.get,
    nl = Ya.set,
    rl = Ya.getterFor(el),
    ul = Sa && Sa.prototype,
    il = Sa,
    ol = ul,
    al = wa.TypeError,
    ll = wa.document,
    sl = wa.process,
    cl = Ha.f,
    fl = cl,
    pl = !!(ll && ll.createEvent && wa.dispatchEvent),
    hl = 'function' == typeof PromiseRejectionEvent,
    Dl = 'unhandledrejection',
    gl = !1,
    dl = Ka(el, function () {
      var e = Pa(il) !== String(il)
      if (!e && 66 === Ja) return !0
      if (Ja >= 51 && /native code/.test(il)) return !1
      var t = new il(function (e) {
          e(1)
        }),
        n = function (e) {
          e(
            function () {},
            function () {}
          )
        }
      return (
        ((t.constructor = {})[Qa] = n),
        !(gl = t.then(function () {}) instanceof n) || (!e && Xa && !hl)
      )
    }),
    vl =
      dl ||
      !Ma(function (e) {
        il.all(e).catch(function () {})
      }),
    Al = function (e) {
      var t
      return !(!$a(e) || 'function' != typeof (t = e.then)) && t
    },
    yl = function (e, t) {
      if (!e.notified) {
        e.notified = !0
        var n = e.reactions
        qa(function () {
          for (var r = e.value, u = 1 == e.state, i = 0; n.length > i; ) {
            var o,
              a,
              l,
              s = n[i++],
              c = u ? s.ok : s.fail,
              f = s.resolve,
              p = s.reject,
              h = s.domain
            try {
              c
                ? (u || (2 === e.rejection && bl(e), (e.rejection = 1)),
                  !0 === c ? (o = r) : (h && h.enter(), (o = c(r)), h && (h.exit(), (l = !0))),
                  o === s.promise
                    ? p(al('Promise-chain cycle'))
                    : (a = Al(o))
                    ? a.call(o, f, p)
                    : f(o))
                : p(r)
            } catch (e) {
              h && !l && h.exit(), p(e)
            }
          }
          ;(e.reactions = []), (e.notified = !1), t && !e.rejection && ml(e)
        })
      }
    },
    El = function (e, t, n) {
      var r, u
      pl
        ? (((r = ll.createEvent('Event')).promise = t),
          (r.reason = n),
          r.initEvent(e, !1, !0),
          wa.dispatchEvent(r))
        : (r = { promise: t, reason: n }),
        !hl && (u = wa['on' + e]) ? u(r) : e === Dl && Ga('Unhandled promise rejection', n)
    },
    ml = function (e) {
      Ua.call(wa, function () {
        var t,
          n = e.facade,
          r = e.value
        if (
          kl(e) &&
          ((t = Va(function () {
            Wa ? sl.emit('unhandledRejection', r, n) : El(Dl, n, r)
          })),
          (e.rejection = Wa || kl(e) ? 2 : 1),
          t.error)
        )
          throw t.value
      })
    },
    kl = function (e) {
      return 1 !== e.rejection && !e.parent
    },
    bl = function (e) {
      Ua.call(wa, function () {
        var t = e.facade
        Wa ? sl.emit('rejectionHandled', t) : El('rejectionhandled', t, e.value)
      })
    },
    Fl = function (e, t, n) {
      return function (r) {
        e(t, r, n)
      }
    },
    Cl = function (e, t, n) {
      e.done || ((e.done = !0), n && (e = n), (e.value = t), (e.state = 2), yl(e, !0))
    },
    xl = function (e, t, n) {
      if (!e.done) {
        ;(e.done = !0), n && (e = n)
        try {
          if (e.facade === t) throw al("Promise can't be resolved itself")
          var r = Al(t)
          r
            ? qa(function () {
                var n = { done: !1 }
                try {
                  r.call(t, Fl(xl, n, e), Fl(Cl, n, e))
                } catch (t) {
                  Cl(n, t, e)
                }
              })
            : ((e.value = t), (e.state = 1), yl(e, !1))
        } catch (t) {
          Cl({ done: !1 }, t, e)
        }
      }
    }
  if (
    dl &&
    ((ol = (il = function (e) {
      Ia(this, il, el), za(e), va.call(this)
      var t = tl(this)
      try {
        e(Fl(xl, t), Fl(Cl, t))
      } catch (e) {
        Cl(t, e)
      }
    }).prototype),
    ((va = function (e) {
      nl(this, {
        type: el,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0,
      })
    }).prototype = Ta(ol, {
      then: function (e, t) {
        var n = rl(this),
          r = cl(Na(this, il))
        return (
          (r.ok = 'function' != typeof e || e),
          (r.fail = 'function' == typeof t && t),
          (r.domain = Wa ? sl.domain : void 0),
          (n.parent = !0),
          n.reactions.push(r),
          0 != n.state && yl(n, !1),
          r.promise
        )
      },
      catch: function (e) {
        return this.then(void 0, e)
      },
    })),
    (Aa = function () {
      var e = new va(),
        t = tl(e)
      ;(this.promise = e), (this.resolve = Fl(xl, t)), (this.reject = Fl(Cl, t))
    }),
    (Ha.f = cl = function (e) {
      return e === il || e === ya ? new Aa(e) : fl(e)
    }),
    'function' == typeof Sa && ul !== Object.prototype)
  ) {
    ;(Ea = ul.then),
      gl ||
        (_a(
          ul,
          'then',
          function (e, t) {
            var n = this
            return new il(function (e, t) {
              Ea.call(n, e, t)
            }).then(e, t)
          },
          { unsafe: !0 }
        ),
        _a(ul, 'catch', ol.catch, { unsafe: !0 }))
    try {
      delete ul.constructor
    } catch (e) {}
    Oa && Oa(ul, ol)
  }
  xa({ global: !0, wrap: !0, forced: dl }, { Promise: il }),
    Ra(il, el, !1),
    ja(el),
    (ya = Ba(el)),
    xa(
      { target: el, stat: !0, forced: dl },
      {
        reject: function (e) {
          var t = cl(this)
          return t.reject.call(void 0, e), t.promise
        },
      }
    ),
    xa(
      { target: el, stat: !0, forced: dl },
      {
        resolve: function (e) {
          return Za(this, e)
        },
      }
    ),
    xa(
      { target: el, stat: !0, forced: vl },
      {
        all: function (e) {
          var t = this,
            n = cl(t),
            r = n.resolve,
            u = n.reject,
            i = Va(function () {
              var n = za(t.resolve),
                i = [],
                o = 0,
                a = 1
              La(e, function (e) {
                var l = o++,
                  s = !1
                i.push(void 0),
                  a++,
                  n.call(t, e).then(function (e) {
                    s || ((s = !0), (i[l] = e), --a || r(i))
                  }, u)
              }),
                --a || r(i)
            })
          return i.error && u(i.value), n.promise
        },
        race: function (e) {
          var t = this,
            n = cl(t),
            r = n.reject,
            u = Va(function () {
              var u = za(t.resolve)
              La(e, function (e) {
                u.call(t, e).then(n.resolve, r)
              })
            })
          return u.error && r(u.value), n.promise
        },
      }
    )
  var wl = O,
    Bl = J,
    Sl = E,
    _l = function (e, t, n) {
      var r = wl(t)
      r in e ? Bl.f(e, r, Sl(0, n)) : (e[r] = n)
    },
    Tl = D,
    Ol = xn,
    Rl = Mn('species'),
    jl = function (e) {
      return (
        Ol >= 51 ||
        !Tl(function () {
          var t = []
          return (
            ((t.constructor = {})[Rl] = function () {
              return { foo: 1 }
            }),
            1 !== t[e](Boolean).foo
          )
        })
      )
    },
    $l = nn,
    zl = _,
    Il = Di,
    Pl = At,
    Ll = Dt,
    Ml = S,
    Nl = _l,
    Ul = Mn,
    ql = jl('slice'),
    Zl = Ul('species'),
    Gl = [].slice,
    Hl = Math.max
  $l(
    { target: 'Array', proto: !0, forced: !ql },
    {
      slice: function (e, t) {
        var n,
          r,
          u,
          i = Ml(this),
          o = Ll(i.length),
          a = Pl(e, o),
          l = Pl(void 0 === t ? o : t, o)
        if (
          Il(i) &&
          ('function' != typeof (n = i.constructor) || (n !== Array && !Il(n.prototype))
            ? zl(n) && null === (n = n[Zl]) && (n = void 0)
            : (n = void 0),
          n === Array || void 0 === n)
        )
          return Gl.call(i, a, l)
        for (r = new (void 0 === n ? Array : n)(Hl(l - a, 0)), u = 0; a < l; a++, u++)
          a in i && Nl(r, u, i[a])
        return (r.length = u), r
      },
    }
  )
  var Vl,
    Yl = Bt,
    Kl = St,
    Xl =
      Object.keys ||
      function (e) {
        return Yl(e, Kl)
      },
    Wl = J,
    Jl = ee,
    Ql = Xl,
    es = g
      ? Object.defineProperties
      : function (e, t) {
          Jl(e)
          for (var n, r = Ql(t), u = r.length, i = 0; u > i; ) Wl.f(e, (n = r[i++]), t[n])
          return e
        },
    ts = ee,
    ns = es,
    rs = St,
    us = je,
    is = ko,
    os = N,
    as = Re('IE_PROTO'),
    ls = function () {},
    ss = function (e) {
      return '<script>' + e + '</' + 'script>'
    },
    cs = function () {
      try {
        Vl = document.domain && new ActiveXObject('htmlfile')
      } catch (e) {}
      var e, t
      cs = Vl
        ? (function (e) {
            e.write(ss('')), e.close()
            var t = e.parentWindow.Object
            return (e = null), t
          })(Vl)
        : (((t = os('iframe')).style.display = 'none'),
          is.appendChild(t),
          (t.src = String('javascript:')),
          (e = t.contentWindow.document).open(),
          e.write(ss('document.F=Object')),
          e.close(),
          e.F)
      for (var n = rs.length; n--; ) delete cs.prototype[rs[n]]
      return cs()
    }
  us[as] = !0
  var fs =
      Object.create ||
      function (e, t) {
        var n
        return (
          null !== e
            ? ((ls.prototype = ts(e)), (n = new ls()), (ls.prototype = null), (n[as] = e))
            : (n = cs()),
          void 0 === t ? n : ns(n, t)
        )
      },
    ps = fs,
    hs = J,
    Ds = Mn('unscopables'),
    gs = Array.prototype
  null == gs[Ds] && hs.f(gs, Ds, { configurable: !0, value: ps(null) })
  var ds,
    vs,
    As,
    ys = function (e) {
      gs[Ds][e] = !0
    },
    Es = !D(function () {
      function e() {}
      return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype
    }),
    ms = I,
    ks = j,
    bs = Es,
    Fs = Re('IE_PROTO'),
    Cs = Object.prototype,
    xs = bs
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = ks(e)),
            ms(e, Fs)
              ? e[Fs]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? Cs
              : null
          )
        },
    ws = D,
    Bs = xs,
    Ss = le,
    _s = I,
    Ts = Mn('iterator'),
    Os = !1
  ;[].keys &&
    ('next' in (As = [].keys()) ? (vs = Bs(Bs(As))) !== Object.prototype && (ds = vs) : (Os = !0)),
    (null == ds ||
      ws(function () {
        var e = {}
        return ds[Ts].call(e) !== e
      })) &&
      (ds = {}),
    _s(ds, Ts) ||
      Ss(ds, Ts, function () {
        return this
      })
  var Rs = { IteratorPrototype: ds, BUGGY_SAFARI_ITERATORS: Os },
    js = Rs.IteratorPrototype,
    $s = fs,
    zs = E,
    Is = Ji,
    Ps = Qi,
    Ls = function () {
      return this
    },
    Ms = nn,
    Ns = function (e, t, n) {
      var r = t + ' Iterator'
      return (e.prototype = $s(js, { next: zs(1, n) })), Is(e, r, !1), (Ps[r] = Ls), e
    },
    Us = xs,
    qs = wr,
    Zs = Ji,
    Gs = le,
    Hs = se.exports,
    Vs = Qi,
    Ys = Rs.IteratorPrototype,
    Ks = Rs.BUGGY_SAFARI_ITERATORS,
    Xs = Mn('iterator'),
    Ws = 'keys',
    Js = 'values',
    Qs = 'entries',
    ec = function () {
      return this
    },
    tc = function (e, t, n, r, u, i, o) {
      Ns(n, t, r)
      var a,
        l,
        s,
        c = function (e) {
          if (e === u && g) return g
          if (!Ks && e in h) return h[e]
          switch (e) {
            case Ws:
            case Js:
            case Qs:
              return function () {
                return new n(this, e)
              }
          }
          return function () {
            return new n(this)
          }
        },
        f = t + ' Iterator',
        p = !1,
        h = e.prototype,
        D = h[Xs] || h['@@iterator'] || (u && h[u]),
        g = (!Ks && D) || c(u),
        d = ('Array' == t && h.entries) || D
      if (
        (d &&
          ((a = Us(d.call(new e()))),
          Ys !== Object.prototype &&
            a.next &&
            (Us(a) !== Ys && (qs ? qs(a, Ys) : 'function' != typeof a[Xs] && Gs(a, Xs, ec)),
            Zs(a, f, !0))),
        u == Js &&
          D &&
          D.name !== Js &&
          ((p = !0),
          (g = function () {
            return D.call(this)
          })),
        h[Xs] !== g && Gs(h, Xs, g),
        (Vs[t] = g),
        u)
      )
        if (((l = { values: c(Js), keys: i ? g : c(Ws), entries: c(Qs) }), o))
          for (s in l) (Ks || p || !(s in h)) && Hs(h, s, l[s])
        else Ms({ target: t, proto: !0, forced: Ks || p }, l)
      return l
    },
    nc = S,
    rc = ys,
    uc = Qi,
    ic = Ke,
    oc = tc,
    ac = 'Array Iterator',
    lc = ic.set,
    sc = ic.getterFor(ac),
    cc = oc(
      Array,
      'Array',
      function (e, t) {
        lc(this, { type: ac, target: nc(e), index: 0, kind: t })
      },
      function () {
        var e = sc(this),
          t = e.target,
          n = e.kind,
          r = e.index++
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : 'keys' == n
          ? { value: r, done: !1 }
          : 'values' == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 }
      },
      'values'
    )
  ;(uc.Arguments = uc.Array), rc('keys'), rc('values'), rc('entries')
  var fc = rr.charAt,
    pc = Ke,
    hc = tc,
    Dc = 'String Iterator',
    gc = pc.set,
    dc = pc.getterFor(Dc)
  hc(
    String,
    'String',
    function (e) {
      gc(this, { type: Dc, string: String(e), index: 0 })
    },
    function () {
      var e,
        t = dc(this),
        n = t.string,
        r = t.index
      return r >= n.length
        ? { value: void 0, done: !0 }
        : ((e = fc(n, r)), (t.index += e.length), { value: e, done: !1 })
    }
  )
  var vc = p,
    Ac = ci,
    yc = cc,
    Ec = le,
    mc = Mn,
    kc = mc('iterator'),
    bc = mc('toStringTag'),
    Fc = yc.values
  for (var Cc in Ac) {
    var xc = vc[Cc],
      wc = xc && xc.prototype
    if (wc) {
      if (wc[kc] !== Fc)
        try {
          Ec(wc, kc, Fc)
        } catch (e) {
          wc[kc] = Fc
        }
      if ((wc[bc] || Ec(wc, bc, Cc), Ac[Cc]))
        for (var Bc in yc)
          if (wc[Bc] !== yc[Bc])
            try {
              Ec(wc, Bc, yc[Bc])
            } catch (e) {
              wc[Bc] = yc[Bc]
            }
    }
  }
  var Sc = nn,
    _c = D,
    Tc = Di,
    Oc = _,
    Rc = j,
    jc = Dt,
    $c = _l,
    zc = Ai,
    Ic = jl,
    Pc = xn,
    Lc = Mn('isConcatSpreadable'),
    Mc = 9007199254740991,
    Nc = 'Maximum allowed index exceeded',
    Uc =
      Pc >= 51 ||
      !_c(function () {
        var e = []
        return (e[Lc] = !1), e.concat()[0] !== e
      }),
    qc = Ic('concat'),
    Zc = function (e) {
      if (!Oc(e)) return !1
      var t = e[Lc]
      return void 0 !== t ? !!t : Tc(e)
    }
  Sc(
    { target: 'Array', proto: !0, forced: !Uc || !qc },
    {
      concat: function (e) {
        var t,
          n,
          r,
          u,
          i,
          o = Rc(this),
          a = zc(o, 0),
          l = 0
        for (t = -1, r = arguments.length; t < r; t++)
          if (Zc((i = -1 === t ? o : arguments[t]))) {
            if (l + (u = jc(i.length)) > Mc) throw TypeError(Nc)
            for (n = 0; n < u; n++, l++) n in i && $c(a, l, i[n])
          } else {
            if (l >= Mc) throw TypeError(Nc)
            $c(a, l++, i)
          }
        return (a.length = l), a
      },
    }
  )
  var Gc = j,
    Hc = Xl
  nn(
    {
      target: 'Object',
      stat: !0,
      forced: D(function () {
        Hc(1)
      }),
    },
    {
      keys: function (e) {
        return Hc(Gc(e))
      },
    }
  )
  var Vc = bt.includes,
    Yc = ys
  nn(
    { target: 'Array', proto: !0 },
    {
      includes: function (e) {
        return Vc(this, e, arguments.length > 1 ? arguments[1] : void 0)
      },
    }
  ),
    Yc('includes')
  var Kc = Rr,
    Xc = Mn('match'),
    Wc = function (e) {
      if (Kc(e)) throw TypeError("The method doesn't accept regular expressions")
      return e
    },
    Jc = x
  nn(
    {
      target: 'String',
      proto: !0,
      forced: !(function (e) {
        var t = /./
        try {
          '/./'[e](t)
        } catch (n) {
          try {
            return (t[Xc] = !1), '/./'[e](t)
          } catch (e) {}
        }
        return !1
      })('includes'),
    },
    {
      includes: function (e) {
        return !!~String(Jc(this)).indexOf(Wc(e), arguments.length > 1 ? arguments[1] : void 0)
      },
    }
  )
  var Qc = x,
    ef = /"/g,
    tf = D,
    nf = function (e, t, n, r) {
      var u = String(Qc(e)),
        i = '<' + t
      return (
        '' !== n && (i += ' ' + n + '="' + String(r).replace(ef, '&quot;') + '"'),
        i + '>' + u + '</' + t + '>'
      )
    }
  nn(
    {
      target: 'String',
      proto: !0,
      forced: (function (e) {
        return tf(function () {
          var t = ''[e]('"')
          return t !== t.toLowerCase() || t.split('"').length > 3
        })
      })('link'),
    },
    {
      link: function (e) {
        return nf(this, 'a', 'href', e)
      },
    }
  )
  var rf = xi.map
  nn(
    { target: 'Array', proto: !0, forced: !jl('map') },
    {
      map: function (e) {
        return rf(this, e, arguments.length > 1 ? arguments[1] : void 0)
      },
    }
  )
  var uf = nn,
    of = At,
    af = ft,
    lf = Dt,
    sf = j,
    cf = Ai,
    ff = _l,
    pf = jl('splice'),
    hf = Math.max,
    Df = Math.min,
    gf = 9007199254740991,
    df = 'Maximum allowed length exceeded'
  uf(
    { target: 'Array', proto: !0, forced: !pf },
    {
      splice: function (e, t) {
        var n,
          r,
          u,
          i,
          o,
          a,
          l = sf(this),
          s = lf(l.length),
          c = of(e, s),
          f = arguments.length
        if (
          (0 === f
            ? (n = r = 0)
            : 1 === f
            ? ((n = 0), (r = s - c))
            : ((n = f - 2), (r = Df(hf(af(t), 0), s - c))),
          s + n - r > gf)
        )
          throw TypeError(df)
        for (u = cf(l, r), i = 0; i < r; i++) (o = c + i) in l && ff(u, i, l[o])
        if (((u.length = r), n < r)) {
          for (i = c; i < s - r; i++) (a = i + n), (o = i + r) in l ? (l[a] = l[o]) : delete l[a]
          for (i = s; i > s - r + n; i--) delete l[i - 1]
        } else if (n > r)
          for (i = s - r; i > c; i--)
            (a = i + n - 1), (o = i + r - 1) in l ? (l[a] = l[o]) : delete l[a]
        for (i = 0; i < n; i++) l[i + c] = arguments[i + 2]
        return (l.length = s - r + n), u
      },
    }
  )
  var vf = { exports: {} }
  function Af() {
    return {
      baseUrl: null,
      breaks: !1,
      gfm: !0,
      headerIds: !0,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    }
  }
  vf.exports = {
    defaults: {
      baseUrl: null,
      breaks: !1,
      gfm: !0,
      headerIds: !0,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    },
    getDefaults: Af,
    changeDefaults: function (e) {
      vf.exports.defaults = e
    },
  }
  var yf = /[&<>"']/,
    Ef = /[&<>"']/g,
    mf = /[<>"']|&(?!#?\w+;)/,
    kf = /[<>"']|&(?!#?\w+;)/g,
    bf = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
    Ff = function (e) {
      return bf[e]
    }
  var Cf = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
  function xf(e) {
    return e.replace(Cf, function (e, t) {
      return 'colon' === (t = t.toLowerCase())
        ? ':'
        : '#' === t.charAt(0)
        ? 'x' === t.charAt(1)
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : ''
    })
  }
  var wf = /(^|[^\[])\^/g
  var Bf = /[^\w:]/g,
    Sf = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
  var _f = {},
    Tf = /^[^:]+:\/*[^/]*$/,
    Of = /^([^:]+:)[\s\S]*$/,
    Rf = /^([^:]+:\/*[^/]*)[\s\S]*$/
  function jf(e, t) {
    _f[' ' + e] || (Tf.test(e) ? (_f[' ' + e] = e + '/') : (_f[' ' + e] = $f(e, '/', !0)))
    var n = -1 === (e = _f[' ' + e]).indexOf(':')
    return '//' === t.substring(0, 2)
      ? n
        ? t
        : e.replace(Of, '$1') + t
      : '/' === t.charAt(0)
      ? n
        ? t
        : e.replace(Rf, '$1') + t
      : e + t
  }
  function $f(e, t, n) {
    var r = e.length
    if (0 === r) return ''
    for (var u = 0; u < r; ) {
      var i = e.charAt(r - u - 1)
      if (i !== t || n) {
        if (i === t || !n) break
        u++
      } else u++
    }
    return e.substr(0, r - u)
  }
  var zf = function (e, t) {
      if (t) {
        if (yf.test(e)) return e.replace(Ef, Ff)
      } else if (mf.test(e)) return e.replace(kf, Ff)
      return e
    },
    If = xf,
    Pf = function (e, t) {
      ;(e = e.source || e), (t = t || '')
      var n = {
        replace: function (t, r) {
          return (r = (r = r.source || r).replace(wf, '$1')), (e = e.replace(t, r)), n
        },
        getRegex: function () {
          return new RegExp(e, t)
        },
      }
      return n
    },
    Lf = function (e, t, n) {
      if (e) {
        var r
        try {
          r = decodeURIComponent(xf(n)).replace(Bf, '').toLowerCase()
        } catch (e) {
          return null
        }
        if (
          0 === r.indexOf('javascript:') ||
          0 === r.indexOf('vbscript:') ||
          0 === r.indexOf('data:')
        )
          return null
      }
      t && !Sf.test(n) && (n = jf(t, n))
      try {
        n = encodeURI(n).replace(/%25/g, '%')
      } catch (e) {
        return null
      }
      return n
    },
    Mf = { exec: function () {} },
    Nf = function (e) {
      for (var t, n, r = 1; r < arguments.length; r++)
        for (n in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
      return e
    },
    Uf = function (e, t) {
      var n = e
          .replace(/\|/g, function (e, t, n) {
            for (var r = !1, u = t; --u >= 0 && '\\' === n[u]; ) r = !r
            return r ? '|' : ' |'
          })
          .split(/ \|/),
        r = 0
      if (n.length > t) n.splice(t)
      else for (; n.length < t; ) n.push('')
      for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, '|')
      return n
    },
    qf = $f,
    Zf = function (e, t) {
      if (-1 === e.indexOf(t[1])) return -1
      for (var n = e.length, r = 0, u = 0; u < n; u++)
        if ('\\' === e[u]) u++
        else if (e[u] === t[0]) r++
        else if (e[u] === t[1] && --r < 0) return u
      return -1
    },
    Gf = function (e) {
      e &&
        e.sanitize &&
        !e.silent &&
        console.warn(
          'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
        )
    },
    Hf = function (e, t) {
      if (t < 1) return ''
      for (var n = ''; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e)
      return n + e
    },
    Vf = vf.exports.defaults,
    Yf = qf,
    Kf = Uf,
    Xf = zf,
    Wf = Zf
  function Jf(e, t, n) {
    var r = t.href,
      u = t.title ? Xf(t.title) : null,
      i = e[1].replace(/\\([\[\]])/g, '$1')
    return '!' !== e[0].charAt(0)
      ? { type: 'link', raw: n, href: r, title: u, text: i }
      : { type: 'image', raw: n, href: r, title: u, text: Xf(i) }
  }
  var Qf = (function () {
      function e(n) {
        t(this, e), (this.options = n || Vf)
      }
      return (
        r(e, [
          {
            key: 'space',
            value: function (e) {
              var t = this.rules.block.newline.exec(e)
              if (t) return t[0].length > 1 ? { type: 'space', raw: t[0] } : { raw: '\n' }
            },
          },
          {
            key: 'code',
            value: function (e) {
              var t = this.rules.block.code.exec(e)
              if (t) {
                var n = t[0].replace(/^ {1,4}/gm, '')
                return {
                  type: 'code',
                  raw: t[0],
                  codeBlockStyle: 'indented',
                  text: this.options.pedantic ? n : Yf(n, '\n'),
                }
              }
            },
          },
          {
            key: 'fences',
            value: function (e) {
              var t = this.rules.block.fences.exec(e)
              if (t) {
                var n = t[0],
                  r = (function (e, t) {
                    var n = e.match(/^(\s+)(?:```)/)
                    if (null === n) return t
                    var r = n[1]
                    return t
                      .split('\n')
                      .map(function (e) {
                        var t = e.match(/^\s+/)
                        return null === t
                          ? e
                          : o(t, 1)[0].length >= r.length
                          ? e.slice(r.length)
                          : e
                      })
                      .join('\n')
                  })(n, t[3] || '')
                return { type: 'code', raw: n, lang: t[2] ? t[2].trim() : t[2], text: r }
              }
            },
          },
          {
            key: 'heading',
            value: function (e) {
              var t = this.rules.block.heading.exec(e)
              if (t) {
                var n = t[2].trim()
                if (/#$/.test(n)) {
                  var r = Yf(n, '#')
                  this.options.pedantic ? (n = r.trim()) : (r && !/ $/.test(r)) || (n = r.trim())
                }
                return { type: 'heading', raw: t[0], depth: t[1].length, text: n }
              }
            },
          },
          {
            key: 'nptable',
            value: function (e) {
              var t = this.rules.block.nptable.exec(e)
              if (t) {
                var n = {
                  type: 'table',
                  header: Kf(t[1].replace(/^ *| *\| *$/g, '')),
                  align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
                  raw: t[0],
                }
                if (n.header.length === n.align.length) {
                  var r,
                    u = n.align.length
                  for (r = 0; r < u; r++)
                    /^ *-+: *$/.test(n.align[r])
                      ? (n.align[r] = 'right')
                      : /^ *:-+: *$/.test(n.align[r])
                      ? (n.align[r] = 'center')
                      : /^ *:-+ *$/.test(n.align[r])
                      ? (n.align[r] = 'left')
                      : (n.align[r] = null)
                  for (u = n.cells.length, r = 0; r < u; r++)
                    n.cells[r] = Kf(n.cells[r], n.header.length)
                  return n
                }
              }
            },
          },
          {
            key: 'hr',
            value: function (e) {
              var t = this.rules.block.hr.exec(e)
              if (t) return { type: 'hr', raw: t[0] }
            },
          },
          {
            key: 'blockquote',
            value: function (e) {
              var t = this.rules.block.blockquote.exec(e)
              if (t) {
                var n = t[0].replace(/^ *> ?/gm, '')
                return { type: 'blockquote', raw: t[0], text: n }
              }
            },
          },
          {
            key: 'list',
            value: function (e) {
              var t = this.rules.block.list.exec(e)
              if (t) {
                var n,
                  r,
                  u,
                  i,
                  o,
                  a,
                  l,
                  s,
                  c,
                  f = t[0],
                  p = t[2],
                  h = p.length > 1,
                  D = {
                    type: 'list',
                    raw: f,
                    ordered: h,
                    start: h ? +p.slice(0, -1) : '',
                    loose: !1,
                    items: [],
                  },
                  g = t[0].match(this.rules.block.item),
                  d = !1,
                  v = g.length
                u = this.rules.block.listItemStart.exec(g[0])
                for (var A = 0; A < v; A++) {
                  if (
                    ((f = n = g[A]),
                    this.options.pedantic ||
                      ((c = n.match(new RegExp('\\n\\s*\\n {0,' + (u[0].length - 1) + '}\\S'))) &&
                        ((o = n.length - c.index + g.slice(A + 1).join('\n').length),
                        (D.raw = D.raw.substring(0, D.raw.length - o)),
                        (f = n = n.substring(0, c.index)),
                        (v = A + 1))),
                    A !== v - 1)
                  ) {
                    if (
                      ((i = this.rules.block.listItemStart.exec(g[A + 1])),
                      this.options.pedantic
                        ? i[1].length > u[1].length
                        : i[1].length >= u[0].length || i[1].length > 3)
                    ) {
                      g.splice(
                        A,
                        2,
                        g[A] +
                          (!this.options.pedantic && i[1].length < u[0].length && !g[A].match(/\n$/)
                            ? ''
                            : '\n') +
                          g[A + 1]
                      ),
                        A--,
                        v--
                      continue
                    }
                    ;(!this.options.pedantic || this.options.smartLists
                      ? i[2][i[2].length - 1] !== p[p.length - 1]
                      : h === (1 === i[2].length)) &&
                      ((o = g.slice(A + 1).join('\n').length),
                      (D.raw = D.raw.substring(0, D.raw.length - o)),
                      (A = v - 1)),
                      (u = i)
                  }
                  ;(r = n.length),
                    ~(n = n.replace(/^ *([*+-]|\d+[.)]) ?/, '')).indexOf('\n ') &&
                      ((r -= n.length),
                      (n = this.options.pedantic
                        ? n.replace(/^ {1,4}/gm, '')
                        : n.replace(new RegExp('^ {1,' + r + '}', 'gm'), ''))),
                    (n = Yf(n, '\n')),
                    A !== v - 1 && (f += '\n'),
                    (a = d || /\n\n(?!\s*$)/.test(f)),
                    A !== v - 1 && ((d = '\n\n' === f.slice(-2)), a || (a = d)),
                    a && (D.loose = !0),
                    this.options.gfm &&
                      ((s = void 0),
                      (l = /^\[[ xX]\] /.test(n)) &&
                        ((s = ' ' !== n[1]), (n = n.replace(/^\[[ xX]\] +/, '')))),
                    D.items.push({
                      type: 'list_item',
                      raw: f,
                      task: l,
                      checked: s,
                      loose: a,
                      text: n,
                    })
                }
                return D
              }
            },
          },
          {
            key: 'html',
            value: function (e) {
              var t = this.rules.block.html.exec(e)
              if (t)
                return {
                  type: this.options.sanitize ? 'paragraph' : 'html',
                  raw: t[0],
                  pre:
                    !this.options.sanitizer &&
                    ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(t[0])
                      : Xf(t[0])
                    : t[0],
                }
            },
          },
          {
            key: 'def',
            value: function (e) {
              var t = this.rules.block.def.exec(e)
              if (t)
                return (
                  t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
                  {
                    type: 'def',
                    tag: t[1].toLowerCase().replace(/\s+/g, ' '),
                    raw: t[0],
                    href: t[2],
                    title: t[3],
                  }
                )
            },
          },
          {
            key: 'table',
            value: function (e) {
              var t = this.rules.block.table.exec(e)
              if (t) {
                var n = {
                  type: 'table',
                  header: Kf(t[1].replace(/^ *| *\| *$/g, '')),
                  align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: t[3] ? t[3].replace(/\n$/, '').split('\n') : [],
                }
                if (n.header.length === n.align.length) {
                  n.raw = t[0]
                  var r,
                    u = n.align.length
                  for (r = 0; r < u; r++)
                    /^ *-+: *$/.test(n.align[r])
                      ? (n.align[r] = 'right')
                      : /^ *:-+: *$/.test(n.align[r])
                      ? (n.align[r] = 'center')
                      : /^ *:-+ *$/.test(n.align[r])
                      ? (n.align[r] = 'left')
                      : (n.align[r] = null)
                  for (u = n.cells.length, r = 0; r < u; r++)
                    n.cells[r] = Kf(n.cells[r].replace(/^ *\| *| *\| *$/g, ''), n.header.length)
                  return n
                }
              }
            },
          },
          {
            key: 'lheading',
            value: function (e) {
              var t = this.rules.block.lheading.exec(e)
              if (t)
                return {
                  type: 'heading',
                  raw: t[0],
                  depth: '=' === t[2].charAt(0) ? 1 : 2,
                  text: t[1],
                }
            },
          },
          {
            key: 'paragraph',
            value: function (e) {
              var t = this.rules.block.paragraph.exec(e)
              if (t)
                return {
                  type: 'paragraph',
                  raw: t[0],
                  text: '\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1],
                }
            },
          },
          {
            key: 'text',
            value: function (e) {
              var t = this.rules.block.text.exec(e)
              if (t) return { type: 'text', raw: t[0], text: t[0] }
            },
          },
          {
            key: 'escape',
            value: function (e) {
              var t = this.rules.inline.escape.exec(e)
              if (t) return { type: 'escape', raw: t[0], text: Xf(t[1]) }
            },
          },
          {
            key: 'tag',
            value: function (e, t, n) {
              var r = this.rules.inline.tag.exec(e)
              if (r)
                return (
                  !t && /^<a /i.test(r[0]) ? (t = !0) : t && /^<\/a>/i.test(r[0]) && (t = !1),
                  !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
                    ? (n = !0)
                    : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (n = !1),
                  {
                    type: this.options.sanitize ? 'text' : 'html',
                    raw: r[0],
                    inLink: t,
                    inRawBlock: n,
                    text: this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(r[0])
                        : Xf(r[0])
                      : r[0],
                  }
                )
            },
          },
          {
            key: 'link',
            value: function (e) {
              var t = this.rules.inline.link.exec(e)
              if (t) {
                var n = t[2].trim()
                if (!this.options.pedantic && /^</.test(n)) {
                  if (!/>$/.test(n)) return
                  var r = Yf(n.slice(0, -1), '\\')
                  if ((n.length - r.length) % 2 == 0) return
                } else {
                  var u = Wf(t[2], '()')
                  if (u > -1) {
                    var i = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + u
                    ;(t[2] = t[2].substring(0, u)),
                      (t[0] = t[0].substring(0, i).trim()),
                      (t[3] = '')
                  }
                }
                var o = t[2],
                  a = ''
                if (this.options.pedantic) {
                  var l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o)
                  l && ((o = l[1]), (a = l[3]))
                } else a = t[3] ? t[3].slice(1, -1) : ''
                return (
                  (o = o.trim()),
                  /^</.test(o) &&
                    (o = this.options.pedantic && !/>$/.test(n) ? o.slice(1) : o.slice(1, -1)),
                  Jf(
                    t,
                    {
                      href: o ? o.replace(this.rules.inline._escapes, '$1') : o,
                      title: a ? a.replace(this.rules.inline._escapes, '$1') : a,
                    },
                    t[0]
                  )
                )
              }
            },
          },
          {
            key: 'reflink',
            value: function (e, t) {
              var n
              if (
                (n = this.rules.inline.reflink.exec(e)) ||
                (n = this.rules.inline.nolink.exec(e))
              ) {
                var r = (n[2] || n[1]).replace(/\s+/g, ' ')
                if (!(r = t[r.toLowerCase()]) || !r.href) {
                  var u = n[0].charAt(0)
                  return { type: 'text', raw: u, text: u }
                }
                return Jf(n, r, n[0])
              }
            },
          },
          {
            key: 'emStrong',
            value: function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                r = this.rules.inline.emStrong.lDelim.exec(e)
              if (
                r &&
                (!r[3] ||
                  !n.match(
                    /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                  ))
              ) {
                var u = r[1] || r[2] || ''
                if (!u || (u && ('' === n || this.rules.inline.punctuation.exec(n)))) {
                  var i,
                    o,
                    a = r[0].length - 1,
                    l = a,
                    s = 0,
                    c =
                      '*' === r[0][0]
                        ? this.rules.inline.emStrong.rDelimAst
                        : this.rules.inline.emStrong.rDelimUnd
                  for (c.lastIndex = 0, t = t.slice(-1 * e.length + a); null != (r = c.exec(t)); )
                    if ((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]))
                      if (((o = i.length), r[3] || r[4])) l += o
                      else if (!((r[5] || r[6]) && a % 3) || (a + o) % 3) {
                        if (!((l -= o) > 0)) {
                          if (
                            (l + s - o <= 0 &&
                              !t.slice(c.lastIndex).match(c) &&
                              (o = Math.min(o, o + l + s)),
                            Math.min(a, o) % 2)
                          )
                            return {
                              type: 'em',
                              raw: e.slice(0, a + r.index + o + 1),
                              text: e.slice(1, a + r.index + o),
                            }
                          if (Math.min(a, o) % 2 == 0)
                            return {
                              type: 'strong',
                              raw: e.slice(0, a + r.index + o + 1),
                              text: e.slice(2, a + r.index + o - 1),
                            }
                        }
                      } else s += o
                }
              }
            },
          },
          {
            key: 'codespan',
            value: function (e) {
              var t = this.rules.inline.code.exec(e)
              if (t) {
                var n = t[2].replace(/\n/g, ' '),
                  r = /[^ ]/.test(n),
                  u = /^ /.test(n) && / $/.test(n)
                return (
                  r && u && (n = n.substring(1, n.length - 1)),
                  (n = Xf(n, !0)),
                  { type: 'codespan', raw: t[0], text: n }
                )
              }
            },
          },
          {
            key: 'br',
            value: function (e) {
              var t = this.rules.inline.br.exec(e)
              if (t) return { type: 'br', raw: t[0] }
            },
          },
          {
            key: 'del',
            value: function (e) {
              var t = this.rules.inline.del.exec(e)
              if (t) return { type: 'del', raw: t[0], text: t[2] }
            },
          },
          {
            key: 'autolink',
            value: function (e, t) {
              var n,
                r,
                u = this.rules.inline.autolink.exec(e)
              if (u)
                return (
                  (r =
                    '@' === u[2]
                      ? 'mailto:' + (n = Xf(this.options.mangle ? t(u[1]) : u[1]))
                      : (n = Xf(u[1]))),
                  {
                    type: 'link',
                    raw: u[0],
                    text: n,
                    href: r,
                    tokens: [{ type: 'text', raw: n, text: n }],
                  }
                )
            },
          },
          {
            key: 'url',
            value: function (e, t) {
              var n
              if ((n = this.rules.inline.url.exec(e))) {
                var r, u
                if ('@' === n[2]) u = 'mailto:' + (r = Xf(this.options.mangle ? t(n[0]) : n[0]))
                else {
                  var i
                  do {
                    ;(i = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0])
                  } while (i !== n[0])
                  ;(r = Xf(n[0])), (u = 'www.' === n[1] ? 'http://' + r : r)
                }
                return {
                  type: 'link',
                  raw: n[0],
                  text: r,
                  href: u,
                  tokens: [{ type: 'text', raw: r, text: r }],
                }
              }
            },
          },
          {
            key: 'inlineText',
            value: function (e, t, n) {
              var r,
                u = this.rules.inline.text.exec(e)
              if (u)
                return (
                  (r = t
                    ? this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(u[0])
                        : Xf(u[0])
                      : u[0]
                    : Xf(this.options.smartypants ? n(u[0]) : u[0])),
                  { type: 'text', raw: u[0], text: r }
                )
            },
          },
        ]),
        e
      )
    })(),
    ep = Mf,
    tp = Pf,
    np = Nf,
    rp = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
      html:
        '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: ep,
      table: ep,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    }
  ;(rp.def = tp(rp.def).replace('label', rp._label).replace('title', rp._title).getRegex()),
    (rp.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (rp.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
    (rp.item = tp(rp.item, 'gm').replace(/bull/g, rp.bullet).getRegex()),
    (rp.listItemStart = tp(/^( *)(bull) */)
      .replace('bull', rp.bullet)
      .getRegex()),
    (rp.list = tp(rp.list)
      .replace(/bull/g, rp.bullet)
      .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
      .replace('def', '\\n+(?=' + rp.def.source + ')')
      .getRegex()),
    (rp._tag =
      'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    (rp._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    (rp.html = tp(rp.html, 'i')
      .replace('comment', rp._comment)
      .replace('tag', rp._tag)
      .replace(
        'attribute',
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (rp.paragraph = tp(rp._paragraph)
      .replace('hr', rp.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', rp._tag)
      .getRegex()),
    (rp.blockquote = tp(rp.blockquote).replace('paragraph', rp.paragraph).getRegex()),
    (rp.normal = np({}, rp)),
    (rp.gfm = np({}, rp.normal, {
      nptable:
        '^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      table:
        '^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    })),
    (rp.gfm.nptable = tp(rp.gfm.nptable)
      .replace('hr', rp.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', rp._tag)
      .getRegex()),
    (rp.gfm.table = tp(rp.gfm.table)
      .replace('hr', rp.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', rp._tag)
      .getRegex()),
    (rp.pedantic = np({}, rp.normal, {
      html: tp(
        '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
      )
        .replace('comment', rp._comment)
        .replace(
          /tag/g,
          '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: ep,
      paragraph: tp(rp.normal._paragraph)
        .replace('hr', rp.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', rp.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex(),
    }))
  var up = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: ep,
    tag:
      '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst: /\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd: /\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: ep,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
    _punctuation: '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~',
  }
  ;(up.punctuation = tp(up.punctuation)
    .replace(/punctuation/g, up._punctuation)
    .getRegex()),
    (up.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
    (up.escapedEmSt = /\\\*|\\_/g),
    (up._comment = tp(rp._comment).replace('(?:--\x3e|$)', '--\x3e').getRegex()),
    (up.emStrong.lDelim = tp(up.emStrong.lDelim).replace(/punct/g, up._punctuation).getRegex()),
    (up.emStrong.rDelimAst = tp(up.emStrong.rDelimAst, 'g')
      .replace(/punct/g, up._punctuation)
      .getRegex()),
    (up.emStrong.rDelimUnd = tp(up.emStrong.rDelimUnd, 'g')
      .replace(/punct/g, up._punctuation)
      .getRegex()),
    (up._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (up._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (up._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (up.autolink = tp(up.autolink)
      .replace('scheme', up._scheme)
      .replace('email', up._email)
      .getRegex()),
    (up._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (up.tag = tp(up.tag)
      .replace('comment', up._comment)
      .replace('attribute', up._attribute)
      .getRegex()),
    (up._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (up._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    (up._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (up.link = tp(up.link)
      .replace('label', up._label)
      .replace('href', up._href)
      .replace('title', up._title)
      .getRegex()),
    (up.reflink = tp(up.reflink).replace('label', up._label).getRegex()),
    (up.reflinkSearch = tp(up.reflinkSearch, 'g')
      .replace('reflink', up.reflink)
      .replace('nolink', up.nolink)
      .getRegex()),
    (up.normal = np({}, up)),
    (up.pedantic = np({}, up.normal, {
      strong: {
        start: /^__|\*\*/,
        middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g,
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g,
      },
      link: tp(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', up._label)
        .getRegex(),
      reflink: tp(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', up._label)
        .getRegex(),
    })),
    (up.gfm = np({}, up.normal, {
      escape: tp(up.escape).replace('])', '~|])').getRegex(),
      _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
    })),
    (up.gfm.url = tp(up.gfm.url, 'i').replace('email', up.gfm._extended_email).getRegex()),
    (up.breaks = np({}, up.gfm, {
      br: tp(up.br).replace('{2,}', '*').getRegex(),
      text: tp(up.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex(),
    }))
  var ip = { block: rp, inline: up },
    op = Qf,
    ap = vf.exports.defaults,
    lp = ip.block,
    sp = ip.inline,
    cp = Hf
  function fp(e) {
    return e
      .replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace(/'/g, '’')
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\.{3}/g, '…')
  }
  function pp(e) {
    var t,
      n,
      r = '',
      u = e.length
    for (t = 0; t < u; t++)
      (n = e.charCodeAt(t)),
        Math.random() > 0.5 && (n = 'x' + n.toString(16)),
        (r += '&#' + n + ';')
    return r
  }
  var hp = (function () {
      function e(n) {
        t(this, e),
          (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = n || ap),
          (this.options.tokenizer = this.options.tokenizer || new op()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options)
        var r = { block: lp.normal, inline: sp.normal }
        this.options.pedantic
          ? ((r.block = lp.pedantic), (r.inline = sp.pedantic))
          : this.options.gfm &&
            ((r.block = lp.gfm),
            this.options.breaks ? (r.inline = sp.breaks) : (r.inline = sp.gfm)),
          (this.tokenizer.rules = r)
      }
      return (
        r(
          e,
          [
            {
              key: 'lex',
              value: function (e) {
                return (
                  (e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ')),
                  this.blockTokens(e, this.tokens, !0),
                  this.inline(this.tokens),
                  this.tokens
                )
              },
            },
            {
              key: 'blockTokens',
              value: function (e) {
                var t,
                  n,
                  r,
                  u,
                  i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                for (this.options.pedantic && (e = e.replace(/^ +$/gm, '')); e; )
                  if ((t = this.tokenizer.space(e)))
                    (e = e.substring(t.raw.length)), t.type && i.push(t)
                  else if ((t = this.tokenizer.code(e)))
                    (e = e.substring(t.raw.length)),
                      (u = i[i.length - 1]) && 'paragraph' === u.type
                        ? ((u.raw += '\n' + t.raw), (u.text += '\n' + t.text))
                        : i.push(t)
                  else if ((t = this.tokenizer.fences(e)))
                    (e = e.substring(t.raw.length)), i.push(t)
                  else if ((t = this.tokenizer.heading(e)))
                    (e = e.substring(t.raw.length)), i.push(t)
                  else if ((t = this.tokenizer.nptable(e)))
                    (e = e.substring(t.raw.length)), i.push(t)
                  else if ((t = this.tokenizer.hr(e))) (e = e.substring(t.raw.length)), i.push(t)
                  else if ((t = this.tokenizer.blockquote(e)))
                    (e = e.substring(t.raw.length)),
                      (t.tokens = this.blockTokens(t.text, [], o)),
                      i.push(t)
                  else if ((t = this.tokenizer.list(e))) {
                    for (e = e.substring(t.raw.length), r = t.items.length, n = 0; n < r; n++)
                      t.items[n].tokens = this.blockTokens(t.items[n].text, [], !1)
                    i.push(t)
                  } else if ((t = this.tokenizer.html(e)))
                    (e = e.substring(t.raw.length)), i.push(t)
                  else if (o && (t = this.tokenizer.def(e)))
                    (e = e.substring(t.raw.length)),
                      this.tokens.links[t.tag] ||
                        (this.tokens.links[t.tag] = { href: t.href, title: t.title })
                  else if ((t = this.tokenizer.table(e))) (e = e.substring(t.raw.length)), i.push(t)
                  else if ((t = this.tokenizer.lheading(e)))
                    (e = e.substring(t.raw.length)), i.push(t)
                  else if (o && (t = this.tokenizer.paragraph(e)))
                    (e = e.substring(t.raw.length)), i.push(t)
                  else if ((t = this.tokenizer.text(e)))
                    (e = e.substring(t.raw.length)),
                      (u = i[i.length - 1]) && 'text' === u.type
                        ? ((u.raw += '\n' + t.raw), (u.text += '\n' + t.text))
                        : i.push(t)
                  else if (e) {
                    var a = 'Infinite loop on byte: ' + e.charCodeAt(0)
                    if (this.options.silent) {
                      console.error(a)
                      break
                    }
                    throw new Error(a)
                  }
                return i
              },
            },
            {
              key: 'inline',
              value: function (e) {
                var t,
                  n,
                  r,
                  u,
                  i,
                  o,
                  a = e.length
                for (t = 0; t < a; t++)
                  switch ((o = e[t]).type) {
                    case 'paragraph':
                    case 'text':
                    case 'heading':
                      ;(o.tokens = []), this.inlineTokens(o.text, o.tokens)
                      break
                    case 'table':
                      for (
                        o.tokens = { header: [], cells: [] }, u = o.header.length, n = 0;
                        n < u;
                        n++
                      )
                        (o.tokens.header[n] = []),
                          this.inlineTokens(o.header[n], o.tokens.header[n])
                      for (u = o.cells.length, n = 0; n < u; n++)
                        for (i = o.cells[n], o.tokens.cells[n] = [], r = 0; r < i.length; r++)
                          (o.tokens.cells[n][r] = []), this.inlineTokens(i[r], o.tokens.cells[n][r])
                      break
                    case 'blockquote':
                      this.inline(o.tokens)
                      break
                    case 'list':
                      for (u = o.items.length, n = 0; n < u; n++) this.inline(o.items[n].tokens)
                  }
                return e
              },
            },
            {
              key: 'inlineTokens',
              value: function (e) {
                var t,
                  n,
                  r,
                  u,
                  i,
                  o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                  a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  s = e
                if (this.tokens.links) {
                  var c = Object.keys(this.tokens.links)
                  if (c.length > 0)
                    for (; null != (r = this.tokenizer.rules.inline.reflinkSearch.exec(s)); )
                      c.includes(r[0].slice(r[0].lastIndexOf('[') + 1, -1)) &&
                        (s =
                          s.slice(0, r.index) +
                          '[' +
                          cp('a', r[0].length - 2) +
                          ']' +
                          s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                }
                for (; null != (r = this.tokenizer.rules.inline.blockSkip.exec(s)); )
                  s =
                    s.slice(0, r.index) +
                    '[' +
                    cp('a', r[0].length - 2) +
                    ']' +
                    s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
                for (; null != (r = this.tokenizer.rules.inline.escapedEmSt.exec(s)); )
                  s =
                    s.slice(0, r.index) +
                    '++' +
                    s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)
                for (; e; )
                  if ((u || (i = ''), (u = !1), (t = this.tokenizer.escape(e))))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if ((t = this.tokenizer.tag(e, a, l))) {
                    ;(e = e.substring(t.raw.length)), (a = t.inLink), (l = t.inRawBlock)
                    var f = o[o.length - 1]
                    f && 'text' === t.type && 'text' === f.type
                      ? ((f.raw += t.raw), (f.text += t.text))
                      : o.push(t)
                  } else if ((t = this.tokenizer.link(e)))
                    (e = e.substring(t.raw.length)),
                      'link' === t.type && (t.tokens = this.inlineTokens(t.text, [], !0, l)),
                      o.push(t)
                  else if ((t = this.tokenizer.reflink(e, this.tokens.links))) {
                    e = e.substring(t.raw.length)
                    var p = o[o.length - 1]
                    'link' === t.type
                      ? ((t.tokens = this.inlineTokens(t.text, [], !0, l)), o.push(t))
                      : p && 'text' === t.type && 'text' === p.type
                      ? ((p.raw += t.raw), (p.text += t.text))
                      : o.push(t)
                  } else if ((t = this.tokenizer.emStrong(e, s, i)))
                    (e = e.substring(t.raw.length)),
                      (t.tokens = this.inlineTokens(t.text, [], a, l)),
                      o.push(t)
                  else if ((t = this.tokenizer.codespan(e)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if ((t = this.tokenizer.br(e))) (e = e.substring(t.raw.length)), o.push(t)
                  else if ((t = this.tokenizer.del(e)))
                    (e = e.substring(t.raw.length)),
                      (t.tokens = this.inlineTokens(t.text, [], a, l)),
                      o.push(t)
                  else if ((t = this.tokenizer.autolink(e, pp)))
                    (e = e.substring(t.raw.length)), o.push(t)
                  else if (a || !(t = this.tokenizer.url(e, pp))) {
                    if ((t = this.tokenizer.inlineText(e, l, fp)))
                      (e = e.substring(t.raw.length)),
                        '_' !== t.raw.slice(-1) && (i = t.raw.slice(-1)),
                        (u = !0),
                        (n = o[o.length - 1]) && 'text' === n.type
                          ? ((n.raw += t.raw), (n.text += t.text))
                          : o.push(t)
                    else if (e) {
                      var h = 'Infinite loop on byte: ' + e.charCodeAt(0)
                      if (this.options.silent) {
                        console.error(h)
                        break
                      }
                      throw new Error(h)
                    }
                  } else (e = e.substring(t.raw.length)), o.push(t)
                return o
              },
            },
          ],
          [
            {
              key: 'rules',
              get: function () {
                return { block: lp, inline: sp }
              },
            },
            {
              key: 'lex',
              value: function (t, n) {
                return new e(n).lex(t)
              },
            },
            {
              key: 'lexInline',
              value: function (t, n) {
                return new e(n).inlineTokens(t)
              },
            },
          ]
        ),
        e
      )
    })(),
    Dp = vf.exports.defaults,
    gp = Lf,
    dp = zf,
    vp = (function () {
      function e(n) {
        t(this, e), (this.options = n || Dp)
      }
      return (
        r(e, [
          {
            key: 'code',
            value: function (e, t, n) {
              var r = (t || '').match(/\S*/)[0]
              if (this.options.highlight) {
                var u = this.options.highlight(e, r)
                null != u && u !== e && ((n = !0), (e = u))
              }
              return (
                (e = e.replace(/\n$/, '') + '\n'),
                r
                  ? '<pre><code class="' +
                    this.options.langPrefix +
                    dp(r, !0) +
                    '">' +
                    (n ? e : dp(e, !0)) +
                    '</code></pre>\n'
                  : '<pre><code>' + (n ? e : dp(e, !0)) + '</code></pre>\n'
              )
            },
          },
          {
            key: 'blockquote',
            value: function (e) {
              return '<blockquote>\n' + e + '</blockquote>\n'
            },
          },
          {
            key: 'html',
            value: function (e) {
              return e
            },
          },
          {
            key: 'heading',
            value: function (e, t, n, r) {
              return this.options.headerIds
                ? '<h' +
                    t +
                    ' id="' +
                    this.options.headerPrefix +
                    r.slug(n) +
                    '">' +
                    e +
                    '</h' +
                    t +
                    '>\n'
                : '<h' + t + '>' + e + '</h' + t + '>\n'
            },
          },
          {
            key: 'hr',
            value: function () {
              return this.options.xhtml ? '<hr/>\n' : '<hr>\n'
            },
          },
          {
            key: 'list',
            value: function (e, t, n) {
              var r = t ? 'ol' : 'ul'
              return (
                '<' + r + (t && 1 !== n ? ' start="' + n + '"' : '') + '>\n' + e + '</' + r + '>\n'
              )
            },
          },
          {
            key: 'listitem',
            value: function (e) {
              return '<li>' + e + '</li>\n'
            },
          },
          {
            key: 'checkbox',
            value: function (e) {
              return (
                '<input ' +
                (e ? 'checked="" ' : '') +
                'disabled="" type="checkbox"' +
                (this.options.xhtml ? ' /' : '') +
                '> '
              )
            },
          },
          {
            key: 'paragraph',
            value: function (e) {
              return '<p>' + e + '</p>\n'
            },
          },
          {
            key: 'table',
            value: function (e, t) {
              return (
                t && (t = '<tbody>' + t + '</tbody>'),
                '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
              )
            },
          },
          {
            key: 'tablerow',
            value: function (e) {
              return '<tr>\n' + e + '</tr>\n'
            },
          },
          {
            key: 'tablecell',
            value: function (e, t) {
              var n = t.header ? 'th' : 'td'
              return (
                (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') +
                e +
                '</' +
                n +
                '>\n'
              )
            },
          },
          {
            key: 'strong',
            value: function (e) {
              return '<strong>' + e + '</strong>'
            },
          },
          {
            key: 'em',
            value: function (e) {
              return '<em>' + e + '</em>'
            },
          },
          {
            key: 'codespan',
            value: function (e) {
              return '<code>' + e + '</code>'
            },
          },
          {
            key: 'br',
            value: function () {
              return this.options.xhtml ? '<br/>' : '<br>'
            },
          },
          {
            key: 'del',
            value: function (e) {
              return '<del>' + e + '</del>'
            },
          },
          {
            key: 'link',
            value: function (e, t, n) {
              if (null === (e = gp(this.options.sanitize, this.options.baseUrl, e))) return n
              var r = '<a href="' + dp(e) + '"'
              return t && (r += ' title="' + t + '"'), (r += '>' + n + '</a>')
            },
          },
          {
            key: 'image',
            value: function (e, t, n) {
              if (null === (e = gp(this.options.sanitize, this.options.baseUrl, e))) return n
              var r = '<img src="' + e + '" alt="' + n + '"'
              return t && (r += ' title="' + t + '"'), (r += this.options.xhtml ? '/>' : '>')
            },
          },
          {
            key: 'text',
            value: function (e) {
              return e
            },
          },
        ]),
        e
      )
    })(),
    Ap = (function () {
      function e() {
        t(this, e)
      }
      return (
        r(e, [
          {
            key: 'strong',
            value: function (e) {
              return e
            },
          },
          {
            key: 'em',
            value: function (e) {
              return e
            },
          },
          {
            key: 'codespan',
            value: function (e) {
              return e
            },
          },
          {
            key: 'del',
            value: function (e) {
              return e
            },
          },
          {
            key: 'html',
            value: function (e) {
              return e
            },
          },
          {
            key: 'text',
            value: function (e) {
              return e
            },
          },
          {
            key: 'link',
            value: function (e, t, n) {
              return '' + n
            },
          },
          {
            key: 'image',
            value: function (e, t, n) {
              return '' + n
            },
          },
          {
            key: 'br',
            value: function () {
              return ''
            },
          },
        ]),
        e
      )
    })(),
    yp = (function () {
      function e() {
        t(this, e), (this.seen = {})
      }
      return (
        r(e, [
          {
            key: 'serialize',
            value: function (e) {
              return e
                .toLowerCase()
                .trim()
                .replace(/<[!\/a-z].*?>/gi, '')
                .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
                .replace(/\s/g, '-')
            },
          },
          {
            key: 'getNextSafeSlug',
            value: function (e, t) {
              var n = e,
                r = 0
              if (this.seen.hasOwnProperty(n)) {
                r = this.seen[e]
                do {
                  n = e + '-' + ++r
                } while (this.seen.hasOwnProperty(n))
              }
              return t || ((this.seen[e] = r), (this.seen[n] = 0)), n
            },
          },
          {
            key: 'slug',
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = this.serialize(e)
              return this.getNextSafeSlug(n, t.dryrun)
            },
          },
        ]),
        e
      )
    })(),
    Ep = vp,
    mp = Ap,
    kp = yp,
    bp = vf.exports.defaults,
    Fp = If,
    Cp = hp,
    xp = (function () {
      function e(n) {
        t(this, e),
          (this.options = n || bp),
          (this.options.renderer = this.options.renderer || new Ep()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new mp()),
          (this.slugger = new kp())
      }
      return (
        r(
          e,
          [
            {
              key: 'parse',
              value: function (e) {
                var t,
                  n,
                  r,
                  u,
                  i,
                  o,
                  a,
                  l,
                  s,
                  c,
                  f,
                  p,
                  h,
                  D,
                  g,
                  d,
                  v,
                  A,
                  y = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                  E = '',
                  m = e.length
                for (t = 0; t < m; t++)
                  switch ((c = e[t]).type) {
                    case 'space':
                      continue
                    case 'hr':
                      E += this.renderer.hr()
                      continue
                    case 'heading':
                      E += this.renderer.heading(
                        this.parseInline(c.tokens),
                        c.depth,
                        Fp(this.parseInline(c.tokens, this.textRenderer)),
                        this.slugger
                      )
                      continue
                    case 'code':
                      E += this.renderer.code(c.text, c.lang, c.escaped)
                      continue
                    case 'table':
                      for (l = '', a = '', u = c.header.length, n = 0; n < u; n++)
                        a += this.renderer.tablecell(this.parseInline(c.tokens.header[n]), {
                          header: !0,
                          align: c.align[n],
                        })
                      for (
                        l += this.renderer.tablerow(a), s = '', u = c.cells.length, n = 0;
                        n < u;
                        n++
                      ) {
                        for (a = '', i = (o = c.tokens.cells[n]).length, r = 0; r < i; r++)
                          a += this.renderer.tablecell(this.parseInline(o[r]), {
                            header: !1,
                            align: c.align[r],
                          })
                        s += this.renderer.tablerow(a)
                      }
                      E += this.renderer.table(l, s)
                      continue
                    case 'blockquote':
                      ;(s = this.parse(c.tokens)), (E += this.renderer.blockquote(s))
                      continue
                    case 'list':
                      for (
                        f = c.ordered, p = c.start, h = c.loose, u = c.items.length, s = '', n = 0;
                        n < u;
                        n++
                      )
                        (d = (g = c.items[n]).checked),
                          (v = g.task),
                          (D = ''),
                          g.task &&
                            ((A = this.renderer.checkbox(d)),
                            h
                              ? g.tokens.length > 0 && 'text' === g.tokens[0].type
                                ? ((g.tokens[0].text = A + ' ' + g.tokens[0].text),
                                  g.tokens[0].tokens &&
                                    g.tokens[0].tokens.length > 0 &&
                                    'text' === g.tokens[0].tokens[0].type &&
                                    (g.tokens[0].tokens[0].text =
                                      A + ' ' + g.tokens[0].tokens[0].text))
                                : g.tokens.unshift({ type: 'text', text: A })
                              : (D += A)),
                          (D += this.parse(g.tokens, h)),
                          (s += this.renderer.listitem(D, v, d))
                      E += this.renderer.list(s, f, p)
                      continue
                    case 'html':
                      E += this.renderer.html(c.text)
                      continue
                    case 'paragraph':
                      E += this.renderer.paragraph(this.parseInline(c.tokens))
                      continue
                    case 'text':
                      for (
                        s = c.tokens ? this.parseInline(c.tokens) : c.text;
                        t + 1 < m && 'text' === e[t + 1].type;

                      )
                        s += '\n' + ((c = e[++t]).tokens ? this.parseInline(c.tokens) : c.text)
                      E += y ? this.renderer.paragraph(s) : s
                      continue
                    default:
                      var k = 'Token with "' + c.type + '" type was not found.'
                      if (this.options.silent) return void console.error(k)
                      throw new Error(k)
                  }
                return E
              },
            },
            {
              key: 'parseInline',
              value: function (e, t) {
                t = t || this.renderer
                var n,
                  r,
                  u = '',
                  i = e.length
                for (n = 0; n < i; n++)
                  switch ((r = e[n]).type) {
                    case 'escape':
                      u += t.text(r.text)
                      break
                    case 'html':
                      u += t.html(r.text)
                      break
                    case 'link':
                      u += t.link(r.href, r.title, this.parseInline(r.tokens, t))
                      break
                    case 'image':
                      u += t.image(r.href, r.title, r.text)
                      break
                    case 'strong':
                      u += t.strong(this.parseInline(r.tokens, t))
                      break
                    case 'em':
                      u += t.em(this.parseInline(r.tokens, t))
                      break
                    case 'codespan':
                      u += t.codespan(r.text)
                      break
                    case 'br':
                      u += t.br()
                      break
                    case 'del':
                      u += t.del(this.parseInline(r.tokens, t))
                      break
                    case 'text':
                      u += t.text(r.text)
                      break
                    default:
                      var o = 'Token with "' + r.type + '" type was not found.'
                      if (this.options.silent) return void console.error(o)
                      throw new Error(o)
                  }
                return u
              },
            },
          ],
          [
            {
              key: 'parse',
              value: function (t, n) {
                return new e(n).parse(t)
              },
            },
            {
              key: 'parseInline',
              value: function (t, n) {
                return new e(n).parseInline(t)
              },
            },
          ]
        ),
        e
      )
    })(),
    wp = Qf,
    Bp = vp,
    Sp = Ap,
    _p = yp,
    Tp = Nf,
    Op = Gf,
    Rp = zf,
    jp = vf.exports.getDefaults,
    $p = vf.exports.changeDefaults,
    zp = vf.exports.defaults
  function Ip(e, t, n) {
    if (null == e) throw new Error('marked(): input parameter is undefined or null')
    if ('string' != typeof e)
      throw new Error(
        'marked(): input parameter is of type ' +
          Object.prototype.toString.call(e) +
          ', string expected'
      )
    if (
      ('function' == typeof t && ((n = t), (t = null)),
      (t = Tp({}, Ip.defaults, t || {})),
      Op(t),
      n)
    ) {
      var r,
        u = t.highlight
      try {
        r = Cp.lex(e, t)
      } catch (e) {
        return n(e)
      }
      var i = function (e) {
        var i
        if (!e)
          try {
            i = xp.parse(r, t)
          } catch (t) {
            e = t
          }
        return (t.highlight = u), e ? n(e) : n(null, i)
      }
      if (!u || u.length < 3) return i()
      if ((delete t.highlight, !r.length)) return i()
      var o = 0
      return (
        Ip.walkTokens(r, function (e) {
          'code' === e.type &&
            (o++,
            setTimeout(function () {
              u(e.text, e.lang, function (t, n) {
                if (t) return i(t)
                null != n && n !== e.text && ((e.text = n), (e.escaped = !0)), 0 === --o && i()
              })
            }, 0))
        }),
        void (0 === o && i())
      )
    }
    try {
      var a = Cp.lex(e, t)
      return t.walkTokens && Ip.walkTokens(a, t.walkTokens), xp.parse(a, t)
    } catch (e) {
      if (((e.message += '\nPlease report this to https://github.com/markedjs/marked.'), t.silent))
        return '<p>An error occurred:</p><pre>' + Rp(e.message + '', !0) + '</pre>'
      throw e
    }
  }
  ;(Ip.options = Ip.setOptions = function (e) {
    return Tp(Ip.defaults, e), $p(Ip.defaults), Ip
  }),
    (Ip.getDefaults = jp),
    (Ip.defaults = zp),
    (Ip.use = function (e) {
      var t = Tp({}, e)
      if (
        (e.renderer &&
          (function () {
            var n = Ip.defaults.renderer || new Bp(),
              r = function (t) {
                var r = n[t]
                n[t] = function () {
                  for (var u = arguments.length, i = new Array(u), o = 0; o < u; o++)
                    i[o] = arguments[o]
                  var a = e.renderer[t].apply(n, i)
                  return !1 === a && (a = r.apply(n, i)), a
                }
              }
            for (var u in e.renderer) r(u)
            t.renderer = n
          })(),
        e.tokenizer &&
          (function () {
            var n = Ip.defaults.tokenizer || new wp(),
              r = function (t) {
                var r = n[t]
                n[t] = function () {
                  for (var u = arguments.length, i = new Array(u), o = 0; o < u; o++)
                    i[o] = arguments[o]
                  var a = e.tokenizer[t].apply(n, i)
                  return !1 === a && (a = r.apply(n, i)), a
                }
              }
            for (var u in e.tokenizer) r(u)
            t.tokenizer = n
          })(),
        e.walkTokens)
      ) {
        var n = Ip.defaults.walkTokens
        t.walkTokens = function (t) {
          e.walkTokens(t), n && n(t)
        }
      }
      Ip.setOptions(t)
    }),
    (Ip.walkTokens = function (e, t) {
      var n,
        r = s(e)
      try {
        for (r.s(); !(n = r.n()).done; ) {
          var u = n.value
          switch ((t(u), u.type)) {
            case 'table':
              var i,
                o = s(u.tokens.header)
              try {
                for (o.s(); !(i = o.n()).done; ) {
                  var a = i.value
                  Ip.walkTokens(a, t)
                }
              } catch (e) {
                o.e(e)
              } finally {
                o.f()
              }
              var l,
                c = s(u.tokens.cells)
              try {
                for (c.s(); !(l = c.n()).done; ) {
                  var f,
                    p = s(l.value)
                  try {
                    for (p.s(); !(f = p.n()).done; ) {
                      var h = f.value
                      Ip.walkTokens(h, t)
                    }
                  } catch (e) {
                    p.e(e)
                  } finally {
                    p.f()
                  }
                }
              } catch (e) {
                c.e(e)
              } finally {
                c.f()
              }
              break
            case 'list':
              Ip.walkTokens(u.items, t)
              break
            default:
              u.tokens && Ip.walkTokens(u.tokens, t)
          }
        }
      } catch (e) {
        r.e(e)
      } finally {
        r.f()
      }
    }),
    (Ip.parseInline = function (e, t) {
      if (null == e) throw new Error('marked.parseInline(): input parameter is undefined or null')
      if ('string' != typeof e)
        throw new Error(
          'marked.parseInline(): input parameter is of type ' +
            Object.prototype.toString.call(e) +
            ', string expected'
        )
      ;(t = Tp({}, Ip.defaults, t || {})), Op(t)
      try {
        var n = Cp.lexInline(e, t)
        return t.walkTokens && Ip.walkTokens(n, t.walkTokens), xp.parseInline(n, t)
      } catch (e) {
        if (
          ((e.message += '\nPlease report this to https://github.com/markedjs/marked.'), t.silent)
        )
          return '<p>An error occurred:</p><pre>' + Rp(e.message + '', !0) + '</pre>'
        throw e
      }
    }),
    (Ip.Parser = xp),
    (Ip.parser = xp.parse),
    (Ip.Renderer = Bp),
    (Ip.TextRenderer = Sp),
    (Ip.Lexer = Cp),
    (Ip.lexer = Cp.lex),
    (Ip.Tokenizer = wp),
    (Ip.Slugger = _p),
    (Ip.parse = Ip)
  var Pp = Ip,
    Lp = '__SCRIPT_END__',
    Mp = /\[([\s\d,|-]*)\]/,
    Np = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
  return function () {
    var t
    function n(e) {
      var t = (e.querySelector('[data-template]') || e.querySelector('script') || e).textContent,
        n = (t = t.replace(new RegExp(Lp, 'g'), '</script>')).match(/^\n?(\s*)/)[1].length,
        r = t.match(/^\n?(\t*)/)[1].length
      return (
        r > 0
          ? (t = t.replace(new RegExp('\\n?\\t{' + r + '}', 'g'), '\n'))
          : n > 1 && (t = t.replace(new RegExp('\\n? {' + n + '}', 'g'), '\n')),
        t
      )
    }
    function r(e) {
      for (var t = e.attributes, n = [], r = 0, u = t.length; r < u; r++) {
        var i = t[r].name,
          o = t[r].value
        ;/data\-(markdown|separator|vertical|notes)/gi.test(i) ||
          (o ? n.push(i + '="' + o + '"') : n.push(i))
      }
      return n.join(' ')
    }
    function o(e) {
      return (
        ((e = e || {}).separator = e.separator || '\r?\n---\r?\n'),
        (e.notesSeparator = e.notesSeparator || 'notes?:'),
        (e.attributes = e.attributes || ''),
        e
      )
    }
    function a(e, t) {
      t = o(t)
      var n = e.split(new RegExp(t.notesSeparator, 'mgi'))
      return (
        2 === n.length && (e = n[0] + '<aside class="notes">' + Pp(n[1].trim()) + '</aside>'),
        '<script type="text/template">' + (e = e.replace(/<\/script>/g, Lp)) + '</script>'
      )
    }
    function l(e, t) {
      t = o(t)
      for (
        var n,
          r,
          u,
          i = new RegExp(
            t.separator + (t.verticalSeparator ? '|' + t.verticalSeparator : ''),
            'mg'
          ),
          l = new RegExp(t.separator),
          s = 0,
          c = !0,
          f = [];
        (n = i.exec(e));

      )
        !(r = l.test(n[0])) && c && f.push([]),
          (u = e.substring(s, n.index)),
          r && c ? f.push(u) : f[f.length - 1].push(u),
          (s = i.lastIndex),
          (c = r)
      ;(c ? f : f[f.length - 1]).push(e.substring(s))
      for (var p = '', h = 0, D = f.length; h < D; h++)
        f[h] instanceof Array
          ? ((p += '<section ' + t.attributes + '>'),
            f[h].forEach(function (e) {
              p += '<section data-markdown>' + a(e, t) + '</section>'
            }),
            (p += '</section>'))
          : (p += '<section ' + t.attributes + ' data-markdown>' + a(f[h], t) + '</section>')
      return p
    }
    function s(e) {
      return new Promise(function (t) {
        var u = []
        ;[].slice
          .call(e.querySelectorAll('section[data-markdown]:not([data-markdown-parsed])'))
          .forEach(function (e, t) {
            e.getAttribute('data-markdown').length
              ? u.push(
                  (function (e) {
                    return new Promise(function (t, n) {
                      var r = new XMLHttpRequest(),
                        u = e.getAttribute('data-markdown'),
                        i = e.getAttribute('data-charset')
                      null != i && '' != i && r.overrideMimeType('text/html; charset=' + i),
                        (r.onreadystatechange = function (e, r) {
                          4 === r.readyState &&
                            ((r.status >= 200 && r.status < 300) || 0 === r.status
                              ? t(r, u)
                              : n(r, u))
                        }.bind(this, e, r)),
                        r.open('GET', u, !0)
                      try {
                        r.send()
                      } catch (e) {
                        console.warn(
                          'Failed to get the Markdown file ' +
                            u +
                            '. Make sure that the presentation and the file are served by a HTTP server and the file can be found there. ' +
                            e
                        ),
                          t(r, u)
                      }
                    })
                  })(e).then(
                    function (t, n) {
                      e.outerHTML = l(t.responseText, {
                        separator: e.getAttribute('data-separator'),
                        verticalSeparator: e.getAttribute('data-separator-vertical'),
                        notesSeparator: e.getAttribute('data-separator-notes'),
                        attributes: r(e),
                      })
                    },
                    function (t, n) {
                      e.outerHTML =
                        '<section data-state="alert">ERROR: The attempt to fetch ' +
                        n +
                        ' failed with HTTP status ' +
                        t.status +
                        ".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"
                    }
                  )
                )
              : (e.outerHTML = l(n(e), {
                  separator: e.getAttribute('data-separator'),
                  verticalSeparator: e.getAttribute('data-separator-vertical'),
                  notesSeparator: e.getAttribute('data-separator-notes'),
                  attributes: r(e),
                }))
          }),
          Promise.all(u).then(t)
      })
    }
    function c(e, t, n) {
      var r,
        u,
        i = new RegExp(n, 'mg'),
        o = new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])', 'mg'),
        a = e.nodeValue
      if ((r = i.exec(a))) {
        var l = r[1]
        for (
          a = a.substring(0, r.index) + a.substring(i.lastIndex), e.nodeValue = a;
          (u = o.exec(l));

        )
          u[2] ? t.setAttribute(u[1], u[2]) : t.setAttribute(u[3], '')
        return !0
      }
      return !1
    }
    function f(e, t, n, r, u) {
      if (null != t && null != t.childNodes && t.childNodes.length > 0)
        for (var i = t, o = 0; o < t.childNodes.length; o++) {
          var a = t.childNodes[o]
          if (o > 0)
            for (var l = o - 1; l >= 0; ) {
              var s = t.childNodes[l]
              if ('function' == typeof s.setAttribute && 'BR' != s.tagName) {
                i = s
                break
              }
              l -= 1
            }
          var p = e
          'section' == a.nodeName && ((p = a), (i = a)),
            ('function' != typeof a.setAttribute && a.nodeType != Node.COMMENT_NODE) ||
              f(p, a, i, r, u)
        }
      t.nodeType == Node.COMMENT_NODE && 0 == c(t, n, r) && c(t, e, u)
    }
    function p() {
      var e = t.getRevealElement().querySelectorAll('[data-markdown]:not([data-markdown-parsed])')
      return (
        [].slice.call(e).forEach(function (e) {
          e.setAttribute('data-markdown-parsed', !0)
          var t = e.querySelector('aside.notes'),
            r = n(e)
          ;(e.innerHTML = Pp(r)),
            f(
              e,
              e,
              null,
              e.getAttribute('data-element-attributes') ||
                e.parentNode.getAttribute('data-element-attributes') ||
                '\\.element\\s*?(.+?)$',
              e.getAttribute('data-attributes') ||
                e.parentNode.getAttribute('data-attributes') ||
                '\\.slide:\\s*?(\\S.+?)$'
            ),
            t && e.appendChild(t)
        }),
        Promise.resolve()
      )
    }
    return {
      id: 'markdown',
      init: function (n) {
        var r = (t = n).getConfig().markdown || {},
          o = r.renderer,
          a = r.animateLists,
          l = i(r, ['renderer', 'animateLists'])
        return (
          o ||
            ((o = new Pp.Renderer()).code = function (e, t) {
              var n = ''
              return (
                Mp.test(t) &&
                  ((n = t.match(Mp)[1].trim()),
                  (n = 'data-line-numbers="'.concat(n, '"')),
                  (t = t.replace(Mp, '').trim())),
                (e = e.replace(/([&<>'"])/g, function (e) {
                  return Np[e]
                })),
                '<pre><code '.concat(n, ' class="').concat(t, '">').concat(e, '</code></pre>')
              )
            }),
          !0 === a &&
            (o.listitem = function (e) {
              return '<li class="fragment">'.concat(e, '</li>')
            }),
          Pp.setOptions(
            (function (t) {
              for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {}
                n % 2
                  ? e(Object(r), !0).forEach(function (e) {
                      u(t, e, r[e])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : e(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
              }
              return t
            })({ renderer: o }, l)
          ),
          s(t.getRevealElement()).then(p)
        )
      },
      processSlides: s,
      convertSlides: p,
      slidify: l,
      marked: Pp,
    }
  }
})