(this["webpackJsonp@uniswap/interface"] =
  this["webpackJsonp@uniswap/interface"] || []).push([
  [17],
  {
    1734: function (e) {
      e.exports = JSON.parse(
        '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPendingAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldProposalThreshold","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"ProposalThresholdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"support","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"VoteCast","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingDelay","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"VotingDelaySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldVotingPeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"VotingPeriodSet","type":"event"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MAX_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_PROPOSAL_THRESHOLD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MIN_VOTING_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalCount","type":"uint256"}],"name":"_initiate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newProposalThreshold","type":"uint256"}],"name":"_setProposalThreshold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingDelay","type":"uint256"}],"name":"_setVotingDelay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newVotingPeriod","type":"uint256"}],"name":"_setVotingPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"string","name":"reason","type":"string"}],"name":"castVoteWithReason","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"uint8","name":"support","type":"uint8"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorBravoDelegateStorageV1.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialProposalId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"uni_","type":"address"},{"internalType":"uint256","name":"votingPeriod_","type":"uint256"},{"internalType":"uint256","name":"votingDelay_","type":"uint256"},{"internalType":"uint256","name":"proposalThreshold_","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"uint256","name":"abstainVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorBravoDelegateStorageV1.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"uni","outputs":[{"internalType":"contract UniInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'
      );
    },
    1915: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return gn;
        });
      var a,
        i,
        o = n(4),
        r = n.n(o),
        s = n(15),
        c = n(11),
        l = n(2),
        d = n(3),
        u = n(377),
        p = n(74),
        b = n(16),
        j = n(36),
        h = n(158),
        f = n(35),
        m = n(42),
        x = n(19),
        O = n(100),
        g = n(9),
        y = n.n(g),
        v = n(195),
        w = n(167),
        T = n(1),
        I = n(25),
        C = n(6),
        E = n(116),
        k = n(206),
        D = n(136),
        S = n(1732),
        A = n(1733),
        N = n(5),
        M = n(1734),
        R = n(90),
        P = n(7),
        U = n(10),
        _ = Object(P.a)(
          {},
          U.f.MAINNET,
          ((a = {}),
          Object(P.a)(a, R.n[U.f.MAINNET], "UNI"),
          Object(P.a)(a, R.m[U.f.MAINNET], "Timelock"),
          Object(P.a)(a, R.c[U.f.MAINNET], "Governance (V0)"),
          Object(P.a)(a, R.d[U.f.MAINNET], "Governance (V1)"),
          Object(P.a)(a, R.e[U.f.MAINNET], "Governance"),
          Object(P.a)(
            a,
            "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            "ENS Registry"
          ),
          Object(P.a)(
            a,
            "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
            "ENS Public Resolver"
          ),
          Object(P.a)(
            a,
            "0xf754A7E347F81cFdc70AF9FbCCe9Df3D826360FA",
            "Franchiser Factory"
          ),
          a)
        ),
        V = { 1: 13 },
        B = n(64),
        W = n(56),
        F = n(193),
        L = 13059344,
        G = n(26),
        H = n(192),
        z = n(40),
        q = n(435),
        Y = n(318);
      !(function (e) {
        (e[(e.INVALID = 0)] = "INVALID"),
          (e[(e.LOADING = 1)] = "LOADING"),
          (e[(e.SYNCING = 2)] = "SYNCING"),
          (e[(e.ERROR = 3)] = "ERROR"),
          (e[(e.SYNCED = 4)] = "SYNCED");
      })(i || (i = {}));
      var K = n(86),
        Q = n(68),
        X = n(395);
      function $() {
        return Object(B.c)(R.e, M, !0);
      }
      var J,
        Z = $;
      function ee() {
        var e = Object(b.useWeb3React)().chainId,
          t = Object(T.useMemo)(
            function () {
              var t;
              return e
                ? null === (t = G.t[e]) || void 0 === t
                  ? void 0
                  : t.address
                : void 0;
            },
            [e]
          );
        return Object(B.c)(t, A.a, !0);
      }
      !(function (e) {
        (e[(e.UNDETERMINED = -1)] = "UNDETERMINED"),
          (e[(e.PENDING = 0)] = "PENDING"),
          (e[(e.ACTIVE = 1)] = "ACTIVE"),
          (e[(e.CANCELED = 2)] = "CANCELED"),
          (e[(e.DEFEATED = 3)] = "DEFEATED"),
          (e[(e.SUCCEEDED = 4)] = "SUCCEEDED"),
          (e[(e.QUEUED = 5)] = "QUEUED"),
          (e[(e.EXPIRED = 6)] = "EXPIRED"),
          (e[(e.EXECUTED = 7)] = "EXECUTED");
      })(J || (J = {}));
      var te = new k.b(S.a);
      function ne(e) {
        var t,
          n = Object(W.c)(e, "proposalCount").result;
        return null === n || void 0 === n || null === (t = n[0]) || void 0 === t
          ? void 0
          : t.toNumber();
      }
      var ae = {
        "0x5ef2c7f0":
          "setSubnodeRecord(bytes32,bytes32,address,address,uint64)",
        "0x10f13a8c": "setText(bytes32,string,string)",
        "0xb4720477": "sendMessageToChild(address,bytes)",
        "0xa9059cbb": "transfer(address,uint256)",
        "0x095ea7b3": "approve(address,uint256)",
        "0x7b1837de": "fund(address,uint256)",
      };
      function ie(e, t, n, a) {
        var o = (function (e) {
          var t = Object(b.useWeb3React)().chainId,
            n = Object(H.b)(),
            a = Object(z.b)(function (e) {
              return e.logs;
            }),
            o = Object(z.a)();
          return (
            Object(T.useEffect)(
              function () {
                if (e && t)
                  return (
                    o(Object(q.a)({ chainId: t, filter: e })),
                    function () {
                      o(Object(q.f)({ chainId: t, filter: e }));
                    }
                  );
              },
              [t, o, e]
            ),
            Object(T.useMemo)(
              function () {
                var o;
                if (!t || !e || !n) return { logs: void 0, state: i.INVALID };
                var r =
                    null === (o = a[t]) || void 0 === o
                      ? void 0
                      : o[Object(Y.a)(e)],
                  s = null === r || void 0 === r ? void 0 : r.results;
                return s
                  ? s.error
                    ? { state: i.ERROR, logs: void 0 }
                    : {
                        state:
                          Object(Y.b)(e, n) || s.blockNumber >= n
                            ? i.SYNCED
                            : i.SYNCING,
                        logs: s.logs,
                      }
                  : { state: i.LOADING, logs: void 0 };
              },
              [n, t, e, a]
            )
          );
        })(
          Object(T.useMemo)(
            function () {
              var t,
                i =
                  null === e ||
                  void 0 === e ||
                  null === (t = e.filters) ||
                  void 0 === t
                    ? void 0
                    : t.ProposalCreated();
              if (i)
                return Object(C.a)(
                  Object(C.a)({}, i),
                  {},
                  { fromBlock: n, toBlock: a }
                );
            },
            [e, n, a]
          )
        );
        return Object(T.useMemo)(
          function () {
            var e, n, a;
            return null === o ||
              void 0 === o ||
              null === (e = o.logs) ||
              void 0 === e ||
              null ===
                (n = e.map(function (e) {
                  return te.parseLog(e).args;
                })) ||
              void 0 === n ||
              null ===
                (a = n.filter(function (e) {
                  return t.flat().some(function (t) {
                    return t === e.id.toNumber();
                  });
                })) ||
              void 0 === a
              ? void 0
              : a.map(function (e) {
                  var t,
                    n,
                    a = parseInt(
                      null === (t = e.startBlock) || void 0 === t
                        ? void 0
                        : t.toString()
                    );
                  try {
                    n = e.description;
                  } catch (s) {
                    var i = D.b.replace;
                    if (a === L) {
                      var o = [226, 128, 152].toString(),
                        r = [226, 128, 166].toString();
                      i = function (e, t, n, a) {
                        if (e === D.c.UNEXPECTED_CONTINUE) {
                          var i = [n[t], n[t + 1], n[t + 2]]
                            .reverse()
                            .toString();
                          if (i === o) return a.push(8216), 2;
                          if (i === r) return a.push(8230), 2;
                        }
                        return D.b.replace(e, t, n, a);
                      };
                    }
                    n = JSON.parse(Object(D.h)(s.error.value, i)) || "";
                  }
                  return (
                    (a !== L && 13551293 !== a && 14732457 !== a) ||
                      (n = n.replace(/ {2}/g, "\n").replace(/\d\. /g, "\n$&")),
                    {
                      description: n,
                      details: e.targets.map(function (t, n) {
                        var a,
                          i,
                          o = e.signatures[n],
                          r = e.calldatas[n];
                        if ("" === o) {
                          var s,
                            l = r.slice(0, 10),
                            d =
                              null !== (s = ae[l]) && void 0 !== s
                                ? s
                                : "UNKNOWN()";
                          if (!d) throw new Error("Missing four byte sig");
                          var p = d.substring(0, d.length - 1).split("("),
                            b = Object(c.a)(p, 2);
                          (a = b[0]),
                            (i = b[1]),
                            (r = "0x".concat(r.slice(10)));
                        } else {
                          var j = o.substring(0, o.length - 1).split("("),
                            h = Object(c.a)(j, 2);
                          (a = h[0]), (i = h[1]);
                        }
                        return {
                          target: t,
                          functionSig: a,
                          callData: u.b.decode(i.split(","), r).join(", "),
                        };
                      }),
                    }
                  );
                });
          },
          [t, o]
        );
      }
      var oe = [[1], [2], [3], [4]],
        re = [[1], [2], [3]];
      function se(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return "number" === typeof e
          ? new Array(e - t).fill(0).map(function (e, n) {
              return [n + 1 + t];
            })
          : [];
      }
      function ce() {
        var e = Object(b.useWeb3React)().chainId,
          t = Object(B.c)(R.c, S.a, !1),
          n = Object(B.c)(R.d, S.a, !1),
          a = $(),
          i = ne(t),
          o = ne(n),
          r = ne(a),
          s = Object(T.useMemo)(
            function () {
              return e === U.f.MAINNET ? oe : se(i);
            },
            [e, i]
          ),
          c = Object(T.useMemo)(
            function () {
              return e === U.f.MAINNET ? re : se(o);
            },
            [e, o]
          ),
          l = Object(T.useMemo)(
            function () {
              return se(r, 8);
            },
            [r]
          ),
          d = Object(W.d)(t, "proposals", s),
          u = Object(W.d)(n, "proposals", c),
          p = Object(W.d)(a, "proposals", l),
          j = Object(W.d)(t, "state", s),
          h = Object(W.d)(n, "state", c),
          f = Object(W.d)(a, "state", l),
          m = ie(t, s, 11042287, 12563484),
          x = ie(n, c, 12686656, 13059343),
          O = ie(a, l, 13538153),
          g = Object(T.useMemo)(
            function () {
              return e ? G.t[e] : void 0;
            },
            [e]
          );
        return Object(T.useMemo)(
          function () {
            var e = [].concat(Object(I.a)(d), Object(I.a)(u), Object(I.a)(p)),
              i = [].concat(Object(I.a)(j), Object(I.a)(h), Object(I.a)(f)),
              o = [].concat(
                Object(I.a)(null !== m && void 0 !== m ? m : []),
                Object(I.a)(null !== x && void 0 !== x ? x : []),
                Object(I.a)(null !== O && void 0 !== O ? O : [])
              );
            return !g ||
              e.some(function (e) {
                return e.loading;
              }) ||
              i.some(function (e) {
                return e.loading;
              }) ||
              (t && !m) ||
              (n && !x) ||
              (a && !O)
              ? { data: [], loading: !0 }
              : {
                  data: e.map(function (e, t) {
                    var n,
                      a,
                      r,
                      s,
                      c,
                      l,
                      p,
                      b,
                      j,
                      h,
                      f,
                      m,
                      x,
                      O,
                      y,
                      v,
                      w,
                      T,
                      I = parseInt(
                        null === e ||
                          void 0 === e ||
                          null === (n = e.result) ||
                          void 0 === n ||
                          null === (a = n.startBlock) ||
                          void 0 === a
                          ? void 0
                          : a.toString()
                      ),
                      C =
                        null !==
                          (r =
                            null === (s = o[t]) || void 0 === s
                              ? void 0
                              : s.description) && void 0 !== r
                          ? r
                          : "";
                    11473815 === I &&
                      (C =
                        "# Uniswap Grants Program v0.1\n\n*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*\n\n## Summary:\n\n**This post outlines a framework for funding Uniswap ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small\u2014sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)\u2014but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members \u20141 lead and 5 reviewers\u2014to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal\u2014a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.\n\n**Purpose:**\n\n**The mission of the UGP is to provide valuable resources to help grow the Uniswap ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Uniswap. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Uniswap as a nexus for DeFi on Ethereum.\n\n**Quarterly Budget:**\n\n* Max quarterly budget of up to $750k\n* Budget and caps to be assessed every six months\n\n**Grant Allocation Committee:**\n\n* Of 6 committee members: 1 lead and 5 reviewers\n* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance\n* Committee functions as a 4 of 5 multi-sig\n\n**Committee Members**\n\nWhile the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**\n\nStarting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.\n\n**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.\n\n**The other 5 committee members should be thought of as \u201creviewers\u201d \u2014 UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.\n\n**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)\n*Ecosystem Support Program at the Ethereum Foundation*\n\n1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))\n*Founder and Investor at Variant Fund (holds UNI)*\n\n2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)\n*Risk Analyst at MakerDAO*\n\n3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)\n*Founder and CEO of Compound Finance*\n\n4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)\n*Founder of Synthetix*\n\n5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)\n*Growth Lead, Uniswap (Company)*\n\n## Methodology\n\n**1.1 Budget**\n\nThis proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).\n\nThe UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Uniswap team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).\n\nTaking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1\u2019s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.\n\n**1.2 Committee Compensation**\n\nOperating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.\n\n**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee\u2019s commitment to the community, hours and duties will be logged publicly and transparently .\n\n**2.1 Priorities**\n\nInitially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Uniswap developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.\n\n![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)\n\nWith the initial priorities in mind, some effective measures for quick successes might look like:\n\n* Total number of projects funded\n* Quarterly increase in applications\n* Project engagement post-event/funding\n* Overall community engagement/sentiment\n\n**2.2 Timeline**\n\nIn keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.\n\n**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**\n\n**Rolling Wave 1 & 2 Applications**\n\n* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding\n\n* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective\n\n**Wave 3 & Beyond**\n\n* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.\n\n* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements\n\n## Conclusion:\n\n**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.\n\n**This program is meant to be the simplest possible MVP of a Uniswap Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**\n\nIf this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital\u2014ideally with different specializations.\n");
                    var k =
                      null === (c = C) || void 0 === c
                        ? void 0
                        : c.split(/#+\s|\n/g)[1];
                    return (
                      13786993 === I &&
                        (k = "Should Uniswap v3 be deployed to Polygon?"),
                      {
                        id:
                          null === e ||
                          void 0 === e ||
                          null === (l = e.result) ||
                          void 0 === l
                            ? void 0
                            : l.id.toString(),
                        title:
                          null !== (p = k) && void 0 !== p
                            ? p
                            : E.a._("Untitled"),
                        description:
                          null !== (b = C) && void 0 !== b
                            ? b
                            : E.a._("No description."),
                        proposer:
                          null === e ||
                          void 0 === e ||
                          null === (j = e.result) ||
                          void 0 === j
                            ? void 0
                            : j.proposer,
                        status:
                          null !==
                            (h =
                              null === (f = i[t]) ||
                              void 0 === f ||
                              null === (m = f.result) ||
                              void 0 === m
                                ? void 0
                                : m[0]) && void 0 !== h
                            ? h
                            : J.UNDETERMINED,
                        forCount: N.CurrencyAmount.fromRawAmount(
                          g,
                          null === e ||
                            void 0 === e ||
                            null === (x = e.result) ||
                            void 0 === x
                            ? void 0
                            : x.forVotes
                        ),
                        againstCount: N.CurrencyAmount.fromRawAmount(
                          g,
                          null === e ||
                            void 0 === e ||
                            null === (O = e.result) ||
                            void 0 === O
                            ? void 0
                            : O.againstVotes
                        ),
                        startBlock: I,
                        endBlock: parseInt(
                          null === e ||
                            void 0 === e ||
                            null === (y = e.result) ||
                            void 0 === y ||
                            null === (v = y.endBlock) ||
                            void 0 === v
                            ? void 0
                            : v.toString()
                        ),
                        eta:
                          null === e ||
                          void 0 === e ||
                          null === (w = e.result) ||
                          void 0 === w
                            ? void 0
                            : w.eta,
                        details:
                          null === (T = o[t]) || void 0 === T
                            ? void 0
                            : T.details,
                        governorIndex:
                          t >= d.length + u.length ? 2 : t >= d.length ? 1 : 0,
                      }
                    );
                  }),
                  loading: !1,
                };
          },
          [m, x, O, t, n, a, j, h, f, d, u, p, g]
        );
      }
      function le(e, t) {
        var n;
        return null ===
          (n = ce().data.filter(function (t) {
            return t.governorIndex === e;
          })) || void 0 === n
          ? void 0
          : n.find(function (e) {
              return e.id === t;
            });
      }
      function de() {
        var e,
          t = Object(b.useWeb3React)().account,
          n = ee(),
          a = Object(W.c)(n, "delegates", [
            null !== t && void 0 !== t ? t : void 0,
          ]).result;
        return null !== (e = null === a || void 0 === a ? void 0 : a[0]) &&
          void 0 !== e
          ? e
          : void 0;
      }
      function ue() {
        var e = Object(b.useWeb3React)(),
          t = e.account,
          n = e.chainId,
          a = ee(),
          i = Object(W.c)(a, "getCurrentVotes", [
            null !== t && void 0 !== t ? t : void 0,
          ]),
          o = i.result,
          r = i.loading;
        return Object(T.useMemo)(
          function () {
            var e = n ? G.t[n] : void 0;
            return {
              loading: r,
              votes:
                e && o
                  ? N.CurrencyAmount.fromRawAmount(
                      e,
                      null === o || void 0 === o ? void 0 : o[0]
                    )
                  : void 0,
            };
          },
          [n, r, o]
        );
      }
      var pe,
        be = n(8),
        je = n(302),
        he = n(234),
        fe = n(517),
        me = n(240),
        xe = n(142),
        Oe = n(12),
        ge = n(139),
        ye = n(28),
        ve = n(0);
      !(function (e) {
        (e.TRANSFER_TOKEN = "Transfer Token"),
          (e.APPROVE_TOKEN = "Approve Token");
      })(pe || (pe = {}));
      var we,
        Te = Object(l.default)(x.c).withConfig({ componentId: "sc-144yti9-0" })(
          ["width:100%;flex:1 1;position:relative;"]
        ),
        Ie = l.default.div.withConfig({ componentId: "sc-144yti9-1" })(
          ["font-size:14px;font-weight:500;color:", ";"],
          function (e) {
            return e.theme.deprecated_text2;
          }
        ),
        Ce = Object(l.default)(f.b).withConfig({ componentId: "sc-144yti9-2" })(
          [
            "padding:0px;background-color:transparent;color:",
            ";font-size:1.25rem;:hover,:active,:focus{outline:0px;box-shadow:none;background-color:transparent;}",
          ],
          function (e) {
            return e.theme.deprecated_text1;
          }
        ),
        Ee = l.default.div.withConfig({ componentId: "sc-144yti9-3" })(
          [
            "margin-top:10px;display:flex;flex-flow:column nowrap;border-radius:20px;border:1px solid ",
            ";background-color:",
            ";",
          ],
          function (e) {
            return e.theme.deprecated_bg2;
          },
          function (e) {
            return e.theme.deprecated_bg1;
          }
        ),
        ke = l.default.div.withConfig({ componentId: "sc-144yti9-4" })([
          "flex:1;padding:1rem;display:grid;grid-auto-rows:auto;grid-row-gap:10px;",
        ]),
        De = function (e) {
          var t = e.className,
            n = e.onClick,
            a = e.proposalAction;
          return Object(ve.jsx)(Ee, {
            children: Object(ve.jsxs)(ke, {
              className: t,
              children: [
                Object(ve.jsx)(Ie, {
                  children: Object(ve.jsx)(d.b, { id: "Proposed Action" }),
                }),
                Object(ve.jsx)(Ce, { onClick: n, children: a }),
              ],
            }),
          });
        };
      function Se(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.onProposalActionSelect,
          i = Object(T.useCallback)(
            function (e) {
              a(e), n();
            },
            [n, a]
          );
        return Object(ve.jsx)(xe.a, {
          isOpen: t,
          onDismiss: n,
          children: Object(ve.jsxs)(Te, {
            children: [
              Object(ve.jsx)(ge.d, {
                gap: "16px",
                children: Object(ve.jsxs)(Oe.b, {
                  children: [
                    Object(ve.jsx)(ye.b, {
                      fontWeight: 500,
                      fontSize: 16,
                      children: Object(ve.jsx)(d.b, { id: "Select an action" }),
                    }),
                    Object(ve.jsx)(be.d, { onClick: n }),
                  ],
                }),
              }),
              Object(ve.jsx)(ge.f, {}),
              Object(ve.jsx)(ge.c, {
                onClick: function () {
                  return i(pe.TRANSFER_TOKEN);
                },
                children: Object(ve.jsx)(x.c, {
                  children: Object(ve.jsx)(ye.b, {
                    fontWeight: 500,
                    children: Object(ve.jsx)(d.b, { id: "Transfer Token" }),
                  }),
                }),
              }),
              Object(ve.jsx)(ge.c, {
                onClick: function () {
                  return i(pe.APPROVE_TOKEN);
                },
                children: Object(ve.jsx)(x.c, {
                  children: Object(ve.jsx)(ye.b, {
                    fontWeight: 500,
                    children: Object(ve.jsx)(d.b, { id: "Approve Token" }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      !(function (e) {
        (e[(e.ADDRESS = 0)] = "ADDRESS"), (e[(e.CURRENCY = 1)] = "CURRENCY");
      })(we || (we = {}));
      var Ae = l.default.div.withConfig({ componentId: "sc-13r0ry5-0" })([
          "margin-top:10px;display:grid;grid-template-columns:repeat(1,1fr);grid-gap:10px;",
        ]),
        Ne = function (e) {
          var t,
            n = e.className,
            a = e.proposalAction,
            i = e.currency,
            o = e.amount,
            r = e.toAddress,
            s = e.onCurrencySelect,
            c = e.onAmountInput,
            l = e.onToAddressInput,
            u =
              ((t = {}),
              Object(P.a)(t, pe.TRANSFER_TOKEN, [
                { type: we.ADDRESS, label: Object(ve.jsx)(d.b, { id: "To" }) },
                { type: we.CURRENCY },
              ]),
              Object(P.a)(t, pe.APPROVE_TOKEN, [
                { type: we.ADDRESS, label: Object(ve.jsx)(d.b, { id: "To" }) },
                { type: we.CURRENCY },
              ]),
              t);
          return Object(ve.jsx)(Ae, {
            className: n,
            children: u[a].map(function (e, t) {
              return e.type === we.ADDRESS
                ? Object(ve.jsx)(
                    fe.a,
                    { label: e.label, value: r, onChange: l },
                    t
                  )
                : e.type === we.CURRENCY
                ? Object(ve.jsx)(
                    me.a,
                    {
                      value: o,
                      currency: i,
                      onUserInput: function (e) {
                        return c(e);
                      },
                      onCurrencySelect: function (e) {
                        return s(e);
                      },
                      showMaxButton: !1,
                      showCommonBases: !1,
                      showCurrencyAmount: !1,
                      disableNonToken: !0,
                      hideBalance: !0,
                      id: "currency-input",
                    },
                    t
                  )
                : null;
            }),
          });
        },
        Me = l.default.input.withConfig({ componentId: "sc-4obmhd-0" })(
          [
            "font-size:",
            ";outline:none;border:none;flex:1 1 auto;width:0;background-color:",
            ";transition:color 300ms ",
            ";color:",
            ";overflow:hidden;text-overflow:ellipsis;font-weight:500;width:100%;padding:0px;-webkit-appearance:textfield;::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;}::placeholder{color:",
            ";}",
          ],
          function (e) {
            return e.fontSize || "1.25rem";
          },
          function (e) {
            return e.theme.deprecated_bg1;
          },
          function (e) {
            return e.error ? "step-end" : "step-start";
          },
          function (e) {
            var t = e.error,
              n = e.theme;
            return t ? n.deprecated_red1 : n.deprecated_text1;
          },
          function (e) {
            return e.theme.deprecated_text4;
          }
        ),
        Re = l.default.textarea.withConfig({ componentId: "sc-4obmhd-1" })(
          [
            "font-size:",
            ";outline:none;border:none;flex:1 1 auto;width:0;resize:none;background-color:",
            ";transition:color 300ms ",
            ";color:",
            ";overflow:hidden;text-overflow:ellipsis;font-weight:500;width:100%;line-height:1.2;padding:0px;-webkit-appearance:textfield;::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;}::placeholder{color:",
            ";}",
          ],
          function (e) {
            return e.fontSize || "1.25rem";
          },
          function (e) {
            return e.theme.deprecated_bg1;
          },
          function (e) {
            return e.error ? "step-end" : "step-start";
          },
          function (e) {
            var t = e.error,
              n = e.theme;
            return t ? n.deprecated_red1 : n.deprecated_text1;
          },
          function (e) {
            return e.theme.deprecated_text4;
          }
        ),
        Pe = Object(T.memo)(function (e) {
          var t = e.className,
            n = e.value,
            a = e.onUserInput,
            i = e.placeholder,
            o = e.fontSize,
            r = Object(T.useRef)(document.createElement("textarea")),
            s = Object(T.useCallback)(
              function (e) {
                (r.current.style.height = "auto"),
                  (r.current.style.height = r.current.scrollHeight + "px"),
                  a(e.target.value);
              },
              [a]
            );
          return Object(ve.jsx)(Re, {
            style: { height: "auto", minHeight: "500px" },
            className: t,
            autoComplete: "off",
            autoCorrect: "off",
            autoCapitalize: "off",
            spellCheck: "false",
            placeholder: i || "",
            onChange: s,
            value: n,
            fontSize: o,
            ref: r,
          });
        });
      Pe.displayName = "ResizingTextArea";
      var Ue = Object(l.default)(ye.b).withConfig({
          componentId: "sc-1bp9aty-0",
        })(["font-size:14px;font-weight:500;color:", ";"], function (e) {
          return e.theme.deprecated_text2;
        }),
        _e = Object(T.memo)(
          Object(l.default)(function (e) {
            var t = e.className,
              n = e.value,
              a = e.onUserInput,
              i = e.placeholder,
              o = e.fontSize,
              r = Object(T.useCallback)(
                function (e) {
                  a(e.target.value);
                },
                [a]
              );
            return Object(ve.jsx)("div", {
              className: t,
              children: Object(ve.jsx)(Me, {
                type: "text",
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false",
                placeholder: i || "",
                onChange: r,
                value: n,
                fontSize: o,
              }),
            });
          }).withConfig({ componentId: "sc-1bp9aty-1" })([
            "margin-top:10.5px;margin-bottom:7.5px;",
          ])
        ),
        Ve = l.default.div.withConfig({ componentId: "sc-1bp9aty-2" })(
          [
            "margin-top:10px;padding:0.75rem 1rem 0.75rem 1rem;border-radius:20px;border:1px solid ",
            ";background-color:",
            ";",
          ],
          function (e) {
            return e.theme.deprecated_bg2;
          },
          function (e) {
            return e.theme.deprecated_bg1;
          }
        ),
        Be = function (e) {
          var t = e.className,
            n = e.title,
            a = e.body,
            i = e.onTitleInput,
            o = e.onBodyInput;
          return Object(ve.jsxs)(Ve, {
            className: t,
            children: [
              Object(ve.jsx)(Ue, {
                children: Object(ve.jsx)(d.b, { id: "Proposal" }),
              }),
              Object(ve.jsx)(_e, {
                value: n,
                onUserInput: i,
                placeholder: E.a._("Proposal Title"),
                fontSize: "1.25rem",
              }),
              Object(ve.jsx)("hr", {}),
              Object(ve.jsx)(Pe, {
                value: a,
                onUserInput: o,
                placeholder:
                  "## Summary\n\nInsert your summary here\n\n## Methodology\n  \nInsert your methodology here\n\n## Conclusion\n  \nInsert your conclusion here\n  \n  ",
                fontSize: "1rem",
              }),
            ],
          });
        },
        We = n(335),
        Fe = n(55),
        Le = n(87),
        Ge = function (e) {
          var t = e.isOpen,
            n = e.hash,
            a = e.onDismiss,
            i = Object(l.useTheme)();
          return Object(ve.jsx)(xe.a, {
            isOpen: t,
            onDismiss: a,
            children: n
              ? Object(ve.jsx)(We.b, {
                  onDismiss: a,
                  hash: n,
                  children: Object(ve.jsxs)(x.a, {
                    gap: "12px",
                    justify: "center",
                    children: [
                      Object(ve.jsx)(ye.b, {
                        fontWeight: 500,
                        fontSize: 20,
                        textAlign: "center",
                        children: Object(ve.jsx)(d.b, {
                          id: "Proposal Submitted",
                        }),
                      }),
                      n &&
                        Object(ve.jsx)(be.i, {
                          href: Object(Le.b)(1, n, Le.a.TRANSACTION),
                          children: Object(ve.jsx)(ye.b, {
                            fontWeight: 500,
                            fontSize: 14,
                            color: i.deprecated_primary1,
                            children: Object(ve.jsx)(d.b, {
                              id: "View on Etherscan",
                            }),
                          }),
                        }),
                      Object(ve.jsx)(f.i, {
                        as: Fe.b,
                        to: "/vote",
                        onClick: a,
                        style: { margin: "20px 0 0 0" },
                        children: Object(ve.jsx)(ye.b, {
                          fontWeight: 500,
                          fontSize: 20,
                          children: Object(ve.jsx)(d.b, { id: "Return" }),
                        }),
                      }),
                    ],
                  }),
                })
              : Object(ve.jsx)(We.a, {
                  onDismiss: a,
                  children: Object(ve.jsx)(x.a, {
                    gap: "12px",
                    justify: "center",
                    children: Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                      children: Object(ve.jsx)(d.b, {
                        id: "Submitting Proposal",
                      }),
                    }),
                  }),
                }),
          });
        },
        He = Object(l.default)(x.a).withConfig({ componentId: "sc-38qcfg-0" })(
          [
            "padding:",
            ";@media only screen and (max-width:",
            "){padding:",
            ";}@media only screen and (max-width:",
            "){padding-top:",
            ";}",
          ],
          function (e) {
            return e.navBarFlag ? "68px 8px 0px" : "0px";
          },
          function (e) {
            var t = e.theme;
            return "".concat(t.breakpoint.md, "px");
          },
          function (e) {
            return e.navBarFlag ? "48px 8px 0px" : "0px 8px 0px";
          },
          function (e) {
            var t = e.theme;
            return "".concat(t.breakpoint.sm, "px");
          },
          function (e) {
            return e.navBarFlag ? "20px" : "0px";
          }
        ),
        ze = function (e) {
          var t = e.proposalThreshold,
            n = e.hasActiveOrPendingProposal,
            a = e.hasEnoughVote,
            i = e.isFormInvalid,
            o = e.handleCreateProposal,
            r = t
              ? y.a
                  .divide(
                    t.quotient,
                    y.a.exponentiate(
                      y.a.BigInt(10),
                      y.a.BigInt(t.currency.decimals)
                    )
                  )
                  .toLocaleString()
              : void 0;
          return Object(ve.jsx)(f.e, {
            style: { marginTop: "18px" },
            error: n || !a,
            disabled: i || n || !a,
            onClick: o,
            children: n
              ? Object(ve.jsx)(d.b, {
                  id: "You already have an active or pending proposal",
                })
              : a
              ? Object(ve.jsx)(d.b, { id: "Create Proposal" })
              : Object(ve.jsx)(ve.Fragment, {
                  children: r
                    ? Object(ve.jsx)(d.b, {
                        id: "You must have {formattedProposalThreshold} votes to submit a proposal",
                        values: { formattedProposalThreshold: r },
                      })
                    : Object(ve.jsx)(d.b, {
                        id: "You don't have enough votes to submit a proposal",
                      }),
                }),
          });
        },
        qe = Object(l.default)(w.e).withConfig({ componentId: "sc-38qcfg-1" })([
          "display:flex;flex-flow:column wrap;",
        ]),
        Ye = l.default.div.withConfig({ componentId: "sc-38qcfg-2" })([
          "text-align:center;margin-top:10px;",
        ]);
      function Ke() {
        var e,
          t = Object(O.b)() === O.a.Enabled,
          n = Object(b.useWeb3React)(),
          a = n.account,
          i = n.chainId,
          o = le(
            2,
            null !==
              (e = (function (e) {
                var t,
                  n,
                  a = Z(),
                  i = Object(W.c)(a, "latestProposalIds", [e]);
                return null === i ||
                  void 0 === i ||
                  null === (t = i.result) ||
                  void 0 === t ||
                  null === (n = t[0]) ||
                  void 0 === n
                  ? void 0
                  : n.toString();
              })(null !== a && void 0 !== a ? a : void 0)) && void 0 !== e
              ? e
              : "0"
          ),
          l = ue().votes,
          f = (function () {
            var e,
              t = Object(b.useWeb3React)().chainId,
              n = Z(),
              a = Object(W.c)(n, "proposalThreshold"),
              i = Object(T.useMemo)(
                function () {
                  return t ? G.t[t] : void 0;
                },
                [t]
              );
            if (
              (null === a ||
              void 0 === a ||
              null === (e = a.result) ||
              void 0 === e
                ? void 0
                : e[0]) &&
              i
            )
              return N.CurrencyAmount.fromRawAmount(i, a.result[0]);
          })(),
          g = Object(T.useState)(!1),
          w = Object(c.a)(g, 2),
          I = w[0],
          C = w[1],
          E = Object(T.useState)(),
          k = Object(c.a)(E, 2),
          D = k[0],
          S = k[1],
          A = Object(T.useState)(!1),
          M = Object(c.a)(A, 2),
          R = M[0],
          P = M[1],
          U = Object(T.useState)(pe.TRANSFER_TOKEN),
          _ = Object(c.a)(U, 2),
          V = _[0],
          B = _[1],
          L = Object(T.useState)(""),
          H = Object(c.a)(L, 2),
          z = H[0],
          q = H[1],
          Y = Object(T.useState)(G.t[null !== i && void 0 !== i ? i : 1]),
          X = Object(c.a)(Y, 2),
          $ = X[0],
          ee = X[1],
          te = Object(T.useState)(""),
          ne = Object(c.a)(te, 2),
          ae = ne[0],
          ie = ne[1],
          oe = Object(T.useState)(""),
          re = Object(c.a)(oe, 2),
          se = re[0],
          ce = re[1],
          de = Object(T.useState)(""),
          fe = Object(c.a)(de, 2),
          me = fe[0],
          xe = fe[1],
          Oe = Object(T.useCallback)(
            function () {
              C(!0);
            },
            [C]
          ),
          ge = Object(T.useCallback)(
            function (e) {
              B(e);
            },
            [B]
          ),
          ye = Object(T.useCallback)(
            function () {
              C(!1);
            },
            [C]
          ),
          we = Object(T.useCallback)(
            function () {
              S(void 0), P(!1);
            },
            [S, P]
          ),
          Te = Object(T.useCallback)(
            function (e) {
              q(e);
            },
            [q]
          ),
          Ie = Object(T.useCallback)(
            function (e) {
              ee(e);
            },
            [ee]
          ),
          Ce = Object(T.useCallback)(
            function (e) {
              ie(e);
            },
            [ie]
          ),
          Ee = Object(T.useCallback)(
            function (e) {
              ce(e);
            },
            [ce]
          ),
          ke = Object(T.useCallback)(
            function (e) {
              xe(e);
            },
            [xe]
          ),
          Ae = Object(T.useMemo)(
            function () {
              return Boolean(
                !V ||
                  !Object(p.isAddress)(z) ||
                  !(null === $ || void 0 === $ ? void 0 : $.isToken) ||
                  "" === ae ||
                  "" === se ||
                  "" === me
              );
            },
            [V, z, $, ae, se, me]
          ),
          Me = Boolean(
            l && f && y.a.greaterThanOrEqual(l.quotient, f.quotient)
          ),
          Re = (function () {
            var e = Object(b.useWeb3React)(),
              t = e.account,
              n = e.chainId,
              a = Z(),
              i = Object(K.g)();
            return Object(T.useCallback)(
              function (e) {
                var o;
                if (t && a && e && n) {
                  var r = [
                    e.targets,
                    e.values,
                    e.signatures,
                    e.calldatas,
                    e.description,
                  ];
                  return (o = a.estimateGas).propose
                    .apply(o, r)
                    .then(function (e) {
                      return a.propose
                        .apply(a, r.concat([{ gasLimit: Object(F.a)(e) }]))
                        .then(function (e) {
                          return i(e, { type: Q.a.SUBMIT_PROPOSAL }), e.hash;
                        });
                    });
                }
              },
              [t, i, a, n]
            );
          })(),
          Pe = (function () {
            var e = Object(s.a)(
              r.a.mark(function e() {
                var t, n, a, i, o, s, c;
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((P(!0), (n = {}), Re && V && $.isToken)) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return");
                      case 4:
                        if ((a = Object(v.a)(ae, $))) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt("return");
                      case 7:
                        (n.targets = [$.address]),
                          (n.values = ["0"]),
                          (n.description = "# "
                            .concat(se, "\n\n")
                            .concat(me, "\n")),
                          (e.t0 = V),
                          (e.next =
                            e.t0 === pe.TRANSFER_TOKEN
                              ? 13
                              : e.t0 === pe.APPROVE_TOKEN
                              ? 17
                              : 21);
                        break;
                      case 13:
                        return (
                          (i = [["address", "uint256"]]),
                          (o = [
                            [Object(p.getAddress)(z), a.quotient.toString()],
                          ]),
                          (n.signatures = [
                            "transfer(".concat(i[0].join(","), ")"),
                          ]),
                          e.abrupt("break", 21)
                        );
                      case 17:
                        return (
                          (i = [["address", "uint256"]]),
                          (o = [
                            [Object(p.getAddress)(z), a.quotient.toString()],
                          ]),
                          (n.signatures = [
                            "approve(".concat(i[0].join(","), ")"),
                          ]),
                          e.abrupt("break", 21)
                        );
                      case 21:
                        for (
                          n.calldatas = [], s = 0;
                          s < n.signatures.length;
                          s++
                        )
                          n.calldatas[s] = u.b.encode(i[s], o[s]);
                        return (
                          (e.next = 25),
                          null ===
                            (t = Re(null !== n && void 0 !== n ? n : void 0)) ||
                          void 0 === t
                            ? void 0
                            : t.catch(function () {
                                P(!1);
                              })
                        );
                      case 25:
                        (c = e.sent) && S(c);
                      case 27:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(ve.jsx)(h.a, {
          page: j.h.VOTE_PAGE,
          shouldLogImpression: !0,
          children: Object(ve.jsx)(He, {
            navBarFlag: t,
            children: Object(ve.jsxs)(he.b, {
              maxWidth: "800px",
              children: [
                Object(ve.jsx)(je.b, {}),
                Object(ve.jsxs)(qe, {
                  children: [
                    Object(ve.jsx)(m.a, {
                      children: Object(ve.jsx)(x.a, {
                        gap: "10px",
                        children: Object(ve.jsx)(be.t.DeprecatedLink, {
                          fontWeight: 400,
                          color: "deprecated_primaryText1",
                          children: Object(ve.jsx)(d.b, {
                            id: "<0>Tip:</0> Select an action and describe your proposal for the community. The proposal cannot be modified after submission, so please verify all information before submitting. The voting period will begin immediately and last for 7 days. To propose a custom action, <1>read the docs</1>.",
                            components: {
                              0: Object(ve.jsx)("strong", {}),
                              1: Object(ve.jsx)(be.i, {
                                href: "https://docs.uniswap.org/protocol/reference/Governance/governance-reference#propose",
                              }),
                            },
                          }),
                        }),
                      }),
                    }),
                    Object(ve.jsx)(De, { onClick: Oe, proposalAction: V }),
                    Object(ve.jsx)(Ne, {
                      proposalAction: V,
                      currency: $,
                      amount: ae,
                      toAddress: z,
                      onCurrencySelect: Ie,
                      onAmountInput: Ce,
                      onToAddressInput: Te,
                    }),
                    Object(ve.jsx)(Be, {
                      title: se,
                      body: me,
                      onTitleInput: Ee,
                      onBodyInput: ke,
                    }),
                    Object(ve.jsx)(ze, {
                      proposalThreshold: f,
                      hasActiveOrPendingProposal:
                        (null === o || void 0 === o ? void 0 : o.status) ===
                          J.ACTIVE ||
                        (null === o || void 0 === o ? void 0 : o.status) ===
                          J.PENDING,
                      hasEnoughVote: Me,
                      isFormInvalid: Ae,
                      handleCreateProposal: Pe,
                    }),
                    Me
                      ? null
                      : Object(ve.jsxs)(Ye, {
                          children: [
                            "Don\u2019t have 2.5M votes? Anyone can create an autonomous proposal using",
                            " ",
                            Object(ve.jsx)(be.i, {
                              href: "https://fish.vote",
                              children: "fish.vote",
                            }),
                          ],
                        }),
                  ],
                }),
                Object(ve.jsx)(Se, {
                  isOpen: I,
                  onDismiss: ye,
                  onProposalActionSelect: function (e) {
                    return ge(e);
                  },
                }),
                Object(ve.jsx)(Ge, { isOpen: R, hash: D, onDismiss: we }),
              ],
            }),
          }),
        });
      }
      var Qe = n(99),
        Xe = n(31),
        $e = n(75),
        Je = n(230),
        Ze = n(143),
        et = n(201),
        tt = n(271),
        nt = n(1515),
        at = n(214),
        it = n(269),
        ot = n(104),
        rt = Object(l.default)(x.a).withConfig({ componentId: "sc-1t2p2c9-0" })(
          ["width:100%;padding:24px;"]
        ),
        st = Object(l.default)(nt.a).withConfig({
          componentId: "sc-1t2p2c9-1",
        })([":hover{cursor:pointer;}"]),
        ct = l.default.div.withConfig({ componentId: "sc-1t2p2c9-2" })([
          ":hover{cursor:pointer;}",
        ]);
      function lt(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.title,
          i = Object(b.useWeb3React)(),
          o = i.account,
          l = i.chainId,
          u = Object(T.useState)(!1),
          j = Object(c.a)(u, 2),
          h = j[0],
          m = j[1],
          O = Object(T.useState)(""),
          g = Object(c.a)(O, 2),
          y = g[0],
          v = g[1];
        var w = h ? y : o,
          I = Object(it.a)(w).address,
          C = Object(ot.f)(
            null !== o && void 0 !== o ? o : void 0,
            l ? G.t[l] : void 0
          ),
          E = (function () {
            var e = Object(b.useWeb3React)(),
              t = e.account,
              n = e.chainId,
              a = e.provider,
              i = Object(K.g)(),
              o = ee();
            return Object(T.useCallback)(
              function (e) {
                var r;
                if (
                  a &&
                  n &&
                  t &&
                  e &&
                  Object(p.isAddress)(null !== e && void 0 !== e ? e : "")
                ) {
                  var s = [e];
                  if (!o) throw new Error("No UNI Contract!");
                  return (r = o.estimateGas).delegate
                    .apply(r, s.concat([{}]))
                    .then(function (t) {
                      return o.delegate
                        .apply(
                          o,
                          s.concat([{ value: null, gasLimit: Object(F.a)(t) }])
                        )
                        .then(function (t) {
                          return (
                            i(t, { type: Q.a.DELEGATE, delegatee: e }), t.hash
                          );
                        });
                    });
                }
              },
              [t, i, n, a, o]
            );
          })(),
          k = Object(T.useState)(),
          D = Object(c.a)(k, 2),
          S = D[0],
          A = D[1],
          N = Object(T.useState)(!1),
          M = Object(c.a)(N, 2),
          R = M[0],
          P = M[1];
        function U() {
          A(void 0), P(!1), n();
        }
        function _() {
          return (
            (_ = Object(s.a)(
              r.a.mark(function e() {
                var t, n;
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((P(!0), E)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (
                          (e.next = 5),
                          null ===
                            (t = E(null !== I && void 0 !== I ? I : void 0)) ||
                          void 0 === t
                            ? void 0
                            : t.catch(function (e) {
                                P(!1), console.log(e);
                              })
                        );
                      case 5:
                        (n = e.sent) && A(n);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            _.apply(this, arguments)
          );
        }
        return Object(ve.jsxs)(xe.a, {
          isOpen: t,
          onDismiss: U,
          maxHeight: 90,
          children: [
            !R &&
              !S &&
              Object(ve.jsx)(rt, {
                gap: "lg",
                children: Object(ve.jsxs)(x.a, {
                  gap: "lg",
                  justify: "center",
                  children: [
                    Object(ve.jsxs)(Oe.b, {
                      children: [
                        Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                          fontWeight: 500,
                          children: a,
                        }),
                        Object(ve.jsx)(st, { stroke: "black", onClick: U }),
                      ],
                    }),
                    Object(ve.jsx)(be.t.DeprecatedBody, {
                      children: Object(ve.jsx)(d.b, {
                        id: "Earned UNI tokens represent voting shares in Uniswap governance.",
                      }),
                    }),
                    Object(ve.jsx)(be.t.DeprecatedBody, {
                      children: Object(ve.jsx)(d.b, {
                        id: "You can either vote on each proposal yourself or delegate your votes to a third party.",
                      }),
                    }),
                    h &&
                      Object(ve.jsx)(fe.a, {
                        value: y,
                        onChange: function (e) {
                          v(e);
                        },
                      }),
                    Object(ve.jsx)(f.i, {
                      disabled: !Object(p.isAddress)(
                        null !== I && void 0 !== I ? I : ""
                      ),
                      onClick: function () {
                        return _.apply(this, arguments);
                      },
                      children: Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                        color: "white",
                        children: h
                          ? Object(ve.jsx)(d.b, { id: "Delegate Votes" })
                          : Object(ve.jsx)(d.b, { id: "Self Delegate" }),
                      }),
                    }),
                    Object(ve.jsx)(ct, {
                      onClick: function () {
                        return m(!h);
                      },
                      children: Object(ve.jsx)(be.t.DeprecatedBlue, {
                        children: h
                          ? Object(ve.jsx)(d.b, { id: "Remove Delegate" })
                          : Object(ve.jsx)(d.b, { id: "Add Delegate +" }),
                      }),
                    }),
                  ],
                }),
              }),
            R &&
              !S &&
              Object(ve.jsx)(We.a, {
                onDismiss: U,
                children: Object(ve.jsxs)(x.a, {
                  gap: "12px",
                  justify: "center",
                  children: [
                    Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                      children: h
                        ? Object(ve.jsx)(d.b, { id: "Delegating votes" })
                        : Object(ve.jsx)(d.b, { id: "Unlocking Votes" }),
                    }),
                    Object(ve.jsxs)(be.t.DeprecatedMain, {
                      fontSize: 36,
                      children: [" ", Object(at.a)(C, 4)],
                    }),
                  ],
                }),
              }),
            S &&
              Object(ve.jsx)(We.b, {
                onDismiss: U,
                hash: S,
                children: Object(ve.jsxs)(x.a, {
                  gap: "12px",
                  justify: "center",
                  children: [
                    Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                      children: Object(ve.jsx)(d.b, {
                        id: "Transaction Submitted",
                      }),
                    }),
                    Object(ve.jsx)(be.t.DeprecatedMain, {
                      fontSize: 36,
                      children: Object(at.a)(C, 4),
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      var dt = l.default.div.withConfig({ componentId: "sc-s6ucod-0" })(
          [
            "border:1px solid ",
            ";padding:16px 12px;border-radius:12px;display:flex;flex-direction:column;justify-content:center;align-items:center;",
          ],
          function (e) {
            return e.theme.deprecated_text4;
          }
        ),
        ut = l.default.i.withConfig({ componentId: "sc-s6ucod-1" })([
          "align-items:center;display:flex;justify-content:center;text-align:center;",
        ]),
        pt = function (e) {
          var t = e.HeaderContent,
            n = e.SubHeaderContent;
          return Object(ve.jsxs)(dt, {
            children: [
              Object(ve.jsx)(be.t.DeprecatedBody, {
                style: { marginBottom: "8px" },
                children: Object(ve.jsx)(t, {}),
              }),
              Object(ve.jsx)(be.t.DeprecatedSubHeader, {
                children: Object(ve.jsx)(ut, {
                  children: Object(ve.jsx)(n, {}),
                }),
              }),
            ],
          });
        };
      function bt() {
        var e = Object(b.useWeb3React)().chainId;
        return e && e !== U.f.MAINNET
          ? Object(ve.jsx)(pt, {
              HeaderContent: function () {
                return Object(ve.jsx)(d.b, {
                  id: "Please connect to Layer 1 Ethereum",
                });
              },
              SubHeaderContent: function () {
                return Object(ve.jsx)(d.b, {
                  id: "Uniswap governance is only available on Layer 1. Switch your network to Ethereum Mainnet to view Proposals and Vote.",
                });
              },
            })
          : Object(ve.jsx)(pt, {
              HeaderContent: function () {
                return Object(ve.jsx)(d.b, { id: "No proposals found." });
              },
              SubHeaderContent: function () {
                return Object(ve.jsx)(d.b, {
                  id: "Proposals submitted by community members will appear here.",
                });
              },
            });
      }
      var jt = n(46),
        ht = n(425),
        ft = n(53),
        mt = n(57),
        xt = n(91),
        Ot = n(71),
        gt = function (e, t) {
          switch (e) {
            case J.PENDING:
            case J.ACTIVE:
              return t.deprecated_blue1;
            case J.SUCCEEDED:
            case J.EXECUTED:
              return t.deprecated_green1;
            case J.DEFEATED:
              return t.deprecated_red1;
            case J.QUEUED:
            case J.CANCELED:
            case J.EXPIRED:
            default:
              return t.deprecated_text3;
          }
        };
      function yt(e) {
        switch (e.status) {
          case J.PENDING:
            return Object(ve.jsx)(d.b, { id: "Pending" });
          case J.ACTIVE:
            return Object(ve.jsx)(d.b, { id: "Active" });
          case J.SUCCEEDED:
            return Object(ve.jsx)(d.b, { id: "Succeeded" });
          case J.EXECUTED:
            return Object(ve.jsx)(d.b, { id: "Executed" });
          case J.DEFEATED:
            return Object(ve.jsx)(d.b, { id: "Defeated" });
          case J.QUEUED:
            return Object(ve.jsx)(d.b, { id: "Queued" });
          case J.CANCELED:
            return Object(ve.jsx)(d.b, { id: "Canceled" });
          case J.EXPIRED:
            return Object(ve.jsx)(d.b, { id: "Expired" });
          default:
            return Object(ve.jsx)(d.b, { id: "Undetermined" });
        }
      }
      var vt,
        wt = l.default.span.withConfig({ componentId: "sc-1z0b5a1-0" })(
          [
            "font-size:0.825rem;font-weight:600;padding:0.5rem;border-radius:8px;color:",
            ";border:1px solid ",
            ";width:fit-content;justify-self:flex-end;text-transform:uppercase;flex:0 0 100px;text-align:center;",
          ],
          function (e) {
            var t = e.status,
              n = e.theme;
            return gt(t, n);
          },
          function (e) {
            var t = e.status,
              n = e.theme;
            return gt(t, n);
          }
        );
      function Tt(e) {
        var t = e.status;
        return Object(ve.jsx)(wt, {
          status: t,
          children: Object(ve.jsx)(yt, { status: t }),
        });
      }
      var It = Object(l.default)(x.a).withConfig({
          componentId: "sc-uxt6ak-0",
        })(
          [
            "padding-top:",
            ";@media only screen and (max-width:",
            "){padding:",
            ";}@media only screen and (max-width:",
            "){padding-top:",
            ";}",
          ],
          function (e) {
            return e.navBarFlag ? "68px" : "0px";
          },
          function (e) {
            var t = e.theme;
            return "".concat(t.breakpoint.md, "px");
          },
          function (e) {
            return e.navBarFlag ? "48px 8px 0px" : "0px 8px 0px";
          },
          function (e) {
            var t = e.theme;
            return "".concat(t.breakpoint.sm, "px");
          },
          function (e) {
            return e.navBarFlag ? "20px" : "0px";
          }
        ),
        Ct = Object(l.default)(x.a).withConfig({ componentId: "sc-uxt6ak-1" })([
          "max-width:640px;width:100%;",
        ]),
        Et = Object(l.default)(ht.Button).withConfig({
          componentId: "sc-uxt6ak-2",
        })(
          [
            "padding:0.75rem 1rem;width:100%;margin-top:1rem;border-radius:12px;display:flex;justify-content:space-between;align-items:center;text-align:left;outline:none;cursor:pointer;color:",
            ";text-decoration:none;background-color:",
            ";&:focus{background-color:",
            ";}&:hover{background-color:",
            ";}",
          ],
          function (e) {
            return e.theme.deprecated_text1;
          },
          function (e) {
            return e.theme.deprecated_bg1;
          },
          function (e) {
            var t = e.theme;
            return Object(jt.a)(0.05, t.deprecated_bg1);
          },
          function (e) {
            return e.theme.deprecated_bg2;
          }
        ),
        kt = l.default.span.withConfig({ componentId: "sc-uxt6ak-3" })(
          ["opacity:", ";flex:0 0 40px;"],
          function (e) {
            return e.theme.opacity.hover;
          }
        ),
        Dt = l.default.span.withConfig({ componentId: "sc-uxt6ak-4" })([
          "font-weight:600;flex:1;max-width:420px;white-space:initial;word-wrap:break-word;padding-right:10px;",
        ]),
        St = Object(l.default)($e.f).withConfig({ componentId: "sc-uxt6ak-5" })(
          [
            "background:radial-gradient(76.02% 75.41% at 1.84% 0%,#27ae60 0%,#000000 100%);overflow:hidden;",
          ]
        ),
        At = Object(l.default)(Oe.b).withConfig({ componentId: "sc-uxt6ak-6" })(
          ["margin-bottom:1rem;", ";"],
          function (e) {
            return e.theme.deprecated_mediaWidth.deprecated_upToSmall(
              vt || (vt = Object(Xe.a)(["\n    flex-wrap: wrap;\n  "]))
            );
          }
        ),
        Nt = Object(l.default)(be.t.DeprecatedMain).withConfig({
          componentId: "sc-uxt6ak-7",
        })(
          ["color:", ";:hover{cursor:pointer;text-decoration:underline;}"],
          function (e) {
            return e.theme.deprecated_primary1;
          }
        ),
        Mt = l.default.div.withConfig({ componentId: "sc-uxt6ak-8" })(
          [
            "border:1px solid ",
            ";padding:2px 4px;border-radius:8px;display:flex;justify-content:center;align-items:center;",
          ],
          function (e) {
            return e.theme.deprecated_bg3;
          }
        ),
        Rt = Object(l.default)(be.i).withConfig({ componentId: "sc-uxt6ak-9" })(
          ["color:", ";"],
          function (e) {
            return e.theme.deprecated_text1;
          }
        );
      function Pt() {
        var e,
          t,
          n,
          a = Object(O.b)() === O.a.Enabled,
          i = Object(l.useTheme)(),
          o = Object(b.useWeb3React)(),
          r = o.account,
          s = o.chainId,
          u = Object(T.useState)(!0),
          p = Object(c.a)(u, 2),
          m = p[0],
          g = p[1],
          v = Object(ft.d)(mt.a.DELEGATE),
          w = Object(ft.h)(),
          I = ce(),
          C = I.data,
          E = I.loading,
          k = ue(),
          D = k.loading,
          S = k.votes,
          A = Object(ot.f)(
            null !== r && void 0 !== r ? r : void 0,
            s ? G.t[s] : void 0
          ),
          N = de(),
          M = Boolean(
            A && y.a.notEqual(A.quotient, y.a.BigInt(0)) && N === Ot.n
          );
        return Object(ve.jsxs)(ve.Fragment, {
          children: [
            Object(ve.jsx)(h.a, {
              page: j.h.VOTE_PAGE,
              shouldLogImpression: !0,
              children: Object(ve.jsxs)(It, {
                gap: "lg",
                justify: "center",
                navBarFlag: a,
                children: [
                  Object(ve.jsx)(lt, {
                    isOpen: v,
                    onDismiss: w,
                    title: M
                      ? Object(ve.jsx)(d.b, { id: "Unlock Votes" })
                      : Object(ve.jsx)(d.b, { id: "Update Delegation" }),
                  }),
                  Object(ve.jsx)(Ct, {
                    gap: "md",
                    children: Object(ve.jsxs)(St, {
                      children: [
                        Object(ve.jsx)($e.b, {}),
                        Object(ve.jsx)($e.d, {}),
                        Object(ve.jsx)($e.e, {
                          children: Object(ve.jsxs)(x.a, {
                            gap: "md",
                            children: [
                              Object(ve.jsx)(Oe.b, {
                                children: Object(ve.jsx)(be.t.DeprecatedWhite, {
                                  fontWeight: 600,
                                  children: Object(ve.jsx)(d.b, {
                                    id: "Uniswap Governance",
                                  }),
                                }),
                              }),
                              Object(ve.jsx)(Oe.b, {
                                children: Object(ve.jsx)(be.t.DeprecatedWhite, {
                                  fontSize: 14,
                                  children: Object(ve.jsx)(d.b, {
                                    id: "UNI tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party.",
                                  }),
                                }),
                              }),
                              Object(ve.jsx)(be.i, {
                                style: {
                                  color: i.deprecated_white,
                                  textDecoration: "underline",
                                },
                                href: "https://uniswap.org/blog/uni",
                                target: "_blank",
                                children: Object(ve.jsx)(be.t.DeprecatedWhite, {
                                  fontSize: 14,
                                  children: Object(ve.jsx)(d.b, {
                                    id: "Read more about Uniswap governance",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        Object(ve.jsx)($e.b, {}),
                        Object(ve.jsx)($e.d, {}),
                      ],
                    }),
                  }),
                  Object(ve.jsxs)(Ct, {
                    gap: "2px",
                    children: [
                      Object(ve.jsxs)(At, {
                        children: [
                          Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                            style: {
                              margin: "0.5rem 0.5rem 0.5rem 0",
                              flexShrink: 0,
                            },
                            children: Object(ve.jsx)(d.b, { id: "Proposals" }),
                          }),
                          Object(ve.jsxs)(Oe.a, {
                            gap: "6px",
                            justify: "flex-end",
                            children: [
                              E || D ? Object(ve.jsx)(Ze.a, {}) : null,
                              M
                                ? Object(ve.jsx)(f.i, {
                                    style: { width: "fit-content" },
                                    padding: "8px",
                                    $borderRadius: "8px",
                                    onClick: w,
                                    children: Object(ve.jsx)(d.b, {
                                      id: "Unlock Voting",
                                    }),
                                  })
                                : S &&
                                  y.a.notEqual(
                                    y.a.BigInt(0),
                                    null === S || void 0 === S
                                      ? void 0
                                      : S.quotient
                                  )
                                ? Object(ve.jsx)(be.t.DeprecatedBody, {
                                    fontWeight: 500,
                                    mr: "6px",
                                    children: Object(ve.jsx)(d.b, {
                                      id: "<0/> Votes",
                                      components: {
                                        0: Object(ve.jsx)(Je.a, {
                                          currencyAmount: S,
                                        }),
                                      },
                                    }),
                                  })
                                : A &&
                                  N &&
                                  N !== Ot.n &&
                                  y.a.notEqual(
                                    y.a.BigInt(0),
                                    null === A || void 0 === A
                                      ? void 0
                                      : A.quotient
                                  )
                                ? Object(ve.jsx)(be.t.DeprecatedBody, {
                                    fontWeight: 500,
                                    mr: "6px",
                                    children: Object(ve.jsx)(d.b, {
                                      id: "<0/> Votes",
                                      components: {
                                        0: Object(ve.jsx)(Je.a, {
                                          currencyAmount: A,
                                        }),
                                      },
                                    }),
                                  })
                                : "",
                              Object(ve.jsx)(f.i, {
                                as: Fe.b,
                                to: "/create-proposal",
                                style: {
                                  width: "fit-content",
                                  borderRadius: "8px",
                                },
                                padding: "8px",
                                children: Object(ve.jsx)(d.b, {
                                  id: "Create Proposal",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      !M &&
                        Object(ve.jsxs)(Oe.b, {
                          children: [
                            Object(ve.jsx)("div", {}),
                            N && N !== Ot.n
                              ? Object(ve.jsxs)(Oe.c, {
                                  children: [
                                    Object(ve.jsx)(be.t.DeprecatedBody, {
                                      fontWeight: 500,
                                      mr: "4px",
                                      children: Object(ve.jsx)(d.b, {
                                        id: "Delegated to:",
                                      }),
                                    }),
                                    Object(ve.jsxs)(Mt, {
                                      children: [
                                        Object(ve.jsx)(Rt, {
                                          href: Object(Le.b)(
                                            1,
                                            N,
                                            Le.a.ADDRESS
                                          ),
                                          style: { margin: "0 4px" },
                                          children:
                                            N === r
                                              ? Object(ve.jsx)(d.b, {
                                                  id: "Self",
                                                })
                                              : Object(xt.e)(N),
                                        }),
                                        Object(ve.jsx)(Nt, {
                                          onClick: w,
                                          style: { marginLeft: "4px" },
                                          children: Object(ve.jsx)(d.b, {
                                            id: "(edit)",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : "",
                          ],
                        }),
                      0 === (null === C || void 0 === C ? void 0 : C.length) &&
                        Object(ve.jsx)(bt, {}),
                      (null === C || void 0 === C ? void 0 : C.length) > 0 &&
                        Object(ve.jsx)(x.a, {
                          gap: "md",
                          children: Object(ve.jsxs)(Oe.b, {
                            children: [
                              Object(ve.jsx)(be.t.DeprecatedMain, {
                                children: Object(ve.jsx)(d.b, {
                                  id: "Show Cancelled",
                                }),
                              }),
                              Object(ve.jsx)(tt.a, {
                                isActive: !m,
                                toggle: function () {
                                  return g(function (e) {
                                    return !e;
                                  });
                                },
                              }),
                            ],
                          }),
                        }),
                      null === C ||
                      void 0 === C ||
                      null === (e = C.slice(0)) ||
                      void 0 === e ||
                      null === (t = e.reverse()) ||
                      void 0 === t ||
                      null ===
                        (n = t.filter(function (e) {
                          return !m || e.status !== J.CANCELED;
                        })) ||
                      void 0 === n
                        ? void 0
                        : n.map(function (e) {
                            return Object(ve.jsxs)(
                              Et,
                              {
                                as: Fe.b,
                                to: "/vote/"
                                  .concat(e.governorIndex, "/")
                                  .concat(e.id),
                                children: [
                                  Object(ve.jsxs)(kt, {
                                    children: [e.governorIndex, ".", e.id],
                                  }),
                                  Object(ve.jsx)(Dt, { children: e.title }),
                                  Object(ve.jsx)(Tt, { status: e.status }),
                                ],
                              },
                              "".concat(e.governorIndex).concat(e.id)
                            );
                          }),
                    ],
                  }),
                  Object(ve.jsx)(be.t.DeprecatedSubHeader, {
                    color: "text3",
                    children: Object(ve.jsx)(d.b, {
                      id: "A minimum threshold of 0.25% of the total UNI supply is required to submit proposals",
                    }),
                  }),
                ],
              }),
            }),
            Object(ve.jsx)(et.a, {}),
          ],
        });
      }
      var Ut = n(69),
        _t = n(1525),
        Vt = n(299),
        Bt = Object(l.default)(x.a).withConfig({ componentId: "sc-pdulpl-0" })([
          "width:100%;padding:24px;",
        ]),
        Wt = Object(l.default)(nt.a).withConfig({ componentId: "sc-pdulpl-1" })(
          [":hover{cursor:pointer;}"]
        ),
        Ft = l.default.div.withConfig({ componentId: "sc-pdulpl-2" })([
          "width:100%;padding:24px;",
        ]),
        Lt = Object(l.default)(x.b).withConfig({ componentId: "sc-pdulpl-3" })([
          "padding:60px 0;",
        ]);
      function Gt(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.proposalId,
          i = Object(b.useWeb3React)().chainId,
          o = (function () {
            var e = Object(b.useWeb3React)(),
              t = e.account,
              n = e.chainId,
              a = Z(),
              i = Object(K.g)();
            return Object(T.useCallback)(
              function (e) {
                var o;
                if (t && a && e && n) {
                  var r = [e];
                  return (o = a.estimateGas).execute
                    .apply(o, r.concat([{}]))
                    .then(function (t) {
                      return a.execute
                        .apply(
                          a,
                          r.concat([{ value: null, gasLimit: Object(F.a)(t) }])
                        )
                        .then(function (t) {
                          return (
                            i(t, {
                              type: Q.a.EXECUTE,
                              governorAddress: a.address,
                              proposalId: parseInt(e),
                            }),
                            t.hash
                          );
                        });
                    });
                }
              },
              [t, i, a, n]
            );
          })(),
          u = Object(T.useState)(),
          p = Object(c.a)(u, 2),
          j = p[0],
          h = p[1],
          m = Object(T.useState)(!1),
          O = Object(c.a)(m, 2),
          g = O[0],
          y = O[1],
          v = Object(l.useTheme)();
        function w() {
          h(void 0), y(!1), n();
        }
        function I() {
          return (
            (I = Object(s.a)(
              r.a.mark(function e() {
                var t, n;
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((y(!0), o)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (
                          (e.next = 5),
                          null === (t = o(a)) || void 0 === t
                            ? void 0
                            : t.catch(function (e) {
                                y(!1), console.log(e);
                              })
                        );
                      case 5:
                        (n = e.sent) && h(n);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            I.apply(this, arguments)
          );
        }
        return Object(ve.jsxs)(xe.a, {
          isOpen: t,
          onDismiss: w,
          maxHeight: 90,
          children: [
            !g &&
              !j &&
              Object(ve.jsx)(Bt, {
                gap: "lg",
                children: Object(ve.jsxs)(x.a, {
                  gap: "lg",
                  justify: "center",
                  children: [
                    Object(ve.jsxs)(Oe.b, {
                      children: [
                        Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                          fontWeight: 500,
                          children: Object(ve.jsx)(d.b, {
                            id: "Execute Proposal {proposalId}",
                            values: { proposalId: a },
                          }),
                        }),
                        Object(ve.jsx)(Wt, { onClick: w }),
                      ],
                    }),
                    Object(ve.jsx)(Oe.b, {
                      children: Object(ve.jsx)(be.t.DeprecatedBody, {
                        children: Object(ve.jsx)(d.b, {
                          id: "Executing this proposal will enact the calldata on-chain.",
                        }),
                      }),
                    }),
                    Object(ve.jsx)(f.i, {
                      onClick: function () {
                        return I.apply(this, arguments);
                      },
                      children: Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                        color: "white",
                        children: Object(ve.jsx)(d.b, { id: "Execute" }),
                      }),
                    }),
                  ],
                }),
              }),
            g &&
              !j &&
              Object(ve.jsxs)(Ft, {
                children: [
                  Object(ve.jsxs)(Oe.b, {
                    children: [
                      Object(ve.jsx)("div", {}),
                      Object(ve.jsx)(Wt, { onClick: w }),
                    ],
                  }),
                  Object(ve.jsx)(Lt, {
                    children: Object(ve.jsx)(be.h, {
                      src: Vt.a,
                      alt: "loader",
                      size: "90px",
                    }),
                  }),
                  Object(ve.jsxs)(x.a, {
                    gap: "100px",
                    justify: "center",
                    children: [
                      Object(ve.jsx)(x.a, {
                        gap: "12px",
                        justify: "center",
                        children: Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                          children: Object(ve.jsx)(d.b, { id: "Executing" }),
                        }),
                      }),
                      Object(ve.jsx)(be.t.DeprecatedSubHeader, {
                        children: Object(ve.jsx)(d.b, {
                          id: "Confirm this transaction in your wallet",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            j &&
              Object(ve.jsxs)(Ft, {
                children: [
                  Object(ve.jsxs)(Oe.b, {
                    children: [
                      Object(ve.jsx)("div", {}),
                      Object(ve.jsx)(Wt, { onClick: w }),
                    ],
                  }),
                  Object(ve.jsx)(Lt, {
                    children: Object(ve.jsx)(_t.a, {
                      strokeWidth: 0.5,
                      size: 90,
                      color: v.deprecated_primary1,
                    }),
                  }),
                  Object(ve.jsxs)(x.a, {
                    gap: "100px",
                    justify: "center",
                    children: [
                      Object(ve.jsx)(x.a, {
                        gap: "12px",
                        justify: "center",
                        children: Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                          children: Object(ve.jsx)(d.b, {
                            id: "Execution Submitted",
                          }),
                        }),
                      }),
                      i &&
                        Object(ve.jsx)(be.i, {
                          href: Object(Le.b)(i, j, Le.a.TRANSACTION),
                          style: { marginLeft: "4px" },
                          children: Object(ve.jsx)(be.t.DeprecatedSubHeader, {
                            children: Object(ve.jsx)(d.b, {
                              id: "View transaction on Explorer",
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var Ht = Object(l.default)(x.a).withConfig({
          componentId: "sc-tl2fl3-0",
        })(["width:100%;padding:24px;"]),
        zt = Object(l.default)(nt.a).withConfig({ componentId: "sc-tl2fl3-1" })(
          [":hover{cursor:pointer;}"]
        ),
        qt = l.default.div.withConfig({ componentId: "sc-tl2fl3-2" })([
          "width:100%;padding:24px;",
        ]),
        Yt = Object(l.default)(x.b).withConfig({ componentId: "sc-tl2fl3-3" })([
          "padding:60px 0;",
        ]);
      function Kt(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.proposalId,
          i = Object(b.useWeb3React)().chainId,
          o = (function () {
            var e = Object(b.useWeb3React)(),
              t = e.account,
              n = e.chainId,
              a = Z(),
              i = Object(K.g)();
            return Object(T.useCallback)(
              function (e) {
                var o;
                if (t && a && e && n) {
                  var r = [e];
                  return (o = a.estimateGas).queue
                    .apply(o, r.concat([{}]))
                    .then(function (t) {
                      return a.queue
                        .apply(
                          a,
                          r.concat([{ value: null, gasLimit: Object(F.a)(t) }])
                        )
                        .then(function (t) {
                          return (
                            i(t, {
                              type: Q.a.QUEUE,
                              governorAddress: a.address,
                              proposalId: parseInt(e),
                            }),
                            t.hash
                          );
                        });
                    });
                }
              },
              [t, i, a, n]
            );
          })(),
          u = Object(T.useState)(),
          p = Object(c.a)(u, 2),
          j = p[0],
          h = p[1],
          m = Object(T.useState)(!1),
          O = Object(c.a)(m, 2),
          g = O[0],
          y = O[1],
          v = Object(l.useTheme)();
        function w() {
          h(void 0), y(!1), n();
        }
        function I() {
          return (
            (I = Object(s.a)(
              r.a.mark(function e() {
                var t, n;
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((y(!0), o)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (
                          (e.next = 5),
                          null === (t = o(a)) || void 0 === t
                            ? void 0
                            : t.catch(function (e) {
                                y(!1), console.log(e);
                              })
                        );
                      case 5:
                        (n = e.sent) && h(n);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            I.apply(this, arguments)
          );
        }
        return Object(ve.jsxs)(xe.a, {
          isOpen: t,
          onDismiss: w,
          maxHeight: 90,
          children: [
            !g &&
              !j &&
              Object(ve.jsx)(Ht, {
                gap: "lg",
                children: Object(ve.jsxs)(x.a, {
                  gap: "lg",
                  justify: "center",
                  children: [
                    Object(ve.jsxs)(Oe.b, {
                      children: [
                        Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                          fontWeight: 500,
                          children: Object(ve.jsx)(d.b, {
                            id: "Queue Proposal {proposalId}",
                            values: { proposalId: a },
                          }),
                        }),
                        Object(ve.jsx)(zt, { onClick: w }),
                      ],
                    }),
                    Object(ve.jsx)(Oe.b, {
                      children: Object(ve.jsx)(be.t.DeprecatedBody, {
                        children: Object(ve.jsx)(d.b, {
                          id: "Adding this proposal to the queue will allow it to be executed, after a delay.",
                        }),
                      }),
                    }),
                    Object(ve.jsx)(f.i, {
                      onClick: function () {
                        return I.apply(this, arguments);
                      },
                      children: Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                        color: "white",
                        children: Object(ve.jsx)(d.b, { id: "Queue" }),
                      }),
                    }),
                  ],
                }),
              }),
            g &&
              !j &&
              Object(ve.jsxs)(qt, {
                children: [
                  Object(ve.jsxs)(Oe.b, {
                    children: [
                      Object(ve.jsx)("div", {}),
                      Object(ve.jsx)(zt, { onClick: w }),
                    ],
                  }),
                  Object(ve.jsx)(Yt, {
                    children: Object(ve.jsx)(be.h, {
                      src: Vt.a,
                      alt: "loader",
                      size: "90px",
                    }),
                  }),
                  Object(ve.jsxs)(x.a, {
                    gap: "100px",
                    justify: "center",
                    children: [
                      Object(ve.jsx)(x.a, {
                        gap: "12px",
                        justify: "center",
                        children: Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                          children: Object(ve.jsx)(d.b, { id: "Queueing" }),
                        }),
                      }),
                      Object(ve.jsx)(be.t.DeprecatedSubHeader, {
                        children: Object(ve.jsx)(d.b, {
                          id: "Confirm this transaction in your wallet",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            j &&
              Object(ve.jsxs)(qt, {
                children: [
                  Object(ve.jsxs)(Oe.b, {
                    children: [
                      Object(ve.jsx)("div", {}),
                      Object(ve.jsx)(zt, { onClick: w }),
                    ],
                  }),
                  Object(ve.jsx)(Yt, {
                    children: Object(ve.jsx)(_t.a, {
                      strokeWidth: 0.5,
                      size: 90,
                      color: v.deprecated_primary1,
                    }),
                  }),
                  Object(ve.jsxs)(x.a, {
                    gap: "100px",
                    justify: "center",
                    children: [
                      Object(ve.jsx)(x.a, {
                        gap: "12px",
                        justify: "center",
                        children: Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                          children: Object(ve.jsx)(d.b, {
                            id: "Transaction Submitted",
                          }),
                        }),
                      }),
                      i &&
                        Object(ve.jsx)(be.i, {
                          href: Object(Le.b)(i, j, Le.a.TRANSACTION),
                          style: { marginLeft: "4px" },
                          children: Object(ve.jsx)(be.t.DeprecatedSubHeader, {
                            children: Object(ve.jsx)(d.b, {
                              id: "View transaction on Explorer",
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var Qt,
        Xt = n(194),
        $t = n(362),
        Jt = n(1518),
        Zt = n(1677),
        en = n.n(Zt),
        tn = Object(l.default)(x.a).withConfig({ componentId: "sc-km2t4x-0" })([
          "width:100%;padding:24px;",
        ]),
        nn = Object(l.default)(nt.a).withConfig({ componentId: "sc-km2t4x-1" })(
          [":hover{cursor:pointer;}"]
        ),
        an = l.default.div.withConfig({ componentId: "sc-km2t4x-2" })([
          "width:100%;padding:24px;",
        ]),
        on = Object(l.default)(x.b).withConfig({ componentId: "sc-km2t4x-3" })([
          "padding:60px 0;",
        ]);
      function rn(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.proposalId,
          i = e.voteOption,
          o = Object(b.useWeb3React)().chainId,
          u = (function () {
            var e = Object(b.useWeb3React)(),
              t = e.account,
              n = e.chainId,
              a = Z(),
              i = Object(K.g)();
            return Object(T.useCallback)(
              function (e, o) {
                var r;
                if (t && a && e && n) {
                  var s = [e, o === X.a.Against ? 0 : o === X.a.For ? 1 : 2];
                  return (r = a.estimateGas).castVote
                    .apply(r, s.concat([{}]))
                    .then(function (t) {
                      return a.castVote
                        .apply(
                          a,
                          s.concat([{ value: null, gasLimit: Object(F.a)(t) }])
                        )
                        .then(function (t) {
                          return (
                            i(t, {
                              type: Q.a.VOTE,
                              decision: o,
                              governorAddress: a.address,
                              proposalId: parseInt(e),
                              reason: "",
                            }),
                            t.hash
                          );
                        });
                    });
                }
              },
              [t, i, a, n]
            );
          })(),
          p = ue().votes,
          j = Object(T.useState)(),
          h = Object(c.a)(j, 2),
          m = h[0],
          O = h[1],
          g = Object(T.useState)(!1),
          y = Object(c.a)(g, 2),
          v = y[0],
          w = y[1],
          I = Object(l.useTheme)();
        function C() {
          O(void 0), w(!1), n();
        }
        function E() {
          return (
            (E = Object(s.a)(
              r.a.mark(function e() {
                var t, n;
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((w(!0), u && void 0 !== i)) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (
                          (e.next = 5),
                          null === (t = u(a, i)) || void 0 === t
                            ? void 0
                            : t.catch(function (e) {
                                w(!1), console.log(e);
                              })
                        );
                      case 5:
                        (n = e.sent) && O(n);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            E.apply(this, arguments)
          );
        }
        return Object(ve.jsxs)(xe.a, {
          isOpen: t,
          onDismiss: C,
          maxHeight: 90,
          children: [
            !v &&
              !m &&
              Object(ve.jsx)(tn, {
                gap: "lg",
                children: Object(ve.jsxs)(x.a, {
                  gap: "lg",
                  justify: "center",
                  children: [
                    Object(ve.jsxs)(Oe.b, {
                      children: [
                        Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                          fontWeight: 500,
                          children:
                            i === X.a.Against
                              ? Object(ve.jsx)(d.b, {
                                  id: "Vote against proposal {proposalId}",
                                  values: { proposalId: a },
                                })
                              : i === X.a.For
                              ? Object(ve.jsx)(d.b, {
                                  id: "Vote for proposal {proposalId}",
                                  values: { proposalId: a },
                                })
                              : Object(ve.jsx)(d.b, {
                                  id: "Vote to abstain on proposal {proposalId}",
                                  values: { proposalId: a },
                                }),
                        }),
                        Object(ve.jsx)(nn, { onClick: C }),
                      ],
                    }),
                    Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                      children: Object(ve.jsx)(d.b, {
                        id: "{0} Votes",
                        values: { 0: Object(at.a)(p, 4) },
                      }),
                    }),
                    Object(ve.jsx)(f.i, {
                      onClick: function () {
                        return E.apply(this, arguments);
                      },
                      children: Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                        color: "white",
                        children:
                          i === X.a.Against
                            ? Object(ve.jsx)(d.b, {
                                id: "Vote against proposal {proposalId}",
                                values: { proposalId: a },
                              })
                            : i === X.a.For
                            ? Object(ve.jsx)(d.b, {
                                id: "Vote for proposal {proposalId}",
                                values: { proposalId: a },
                              })
                            : Object(ve.jsx)(d.b, {
                                id: "Vote to abstain on proposal {proposalId}",
                                values: { proposalId: a },
                              }),
                      }),
                    }),
                  ],
                }),
              }),
            v &&
              !m &&
              Object(ve.jsxs)(an, {
                children: [
                  Object(ve.jsxs)(Oe.b, {
                    children: [
                      Object(ve.jsx)("div", {}),
                      Object(ve.jsx)(nn, { onClick: C }),
                    ],
                  }),
                  Object(ve.jsx)(on, {
                    children: Object(ve.jsx)(be.h, {
                      src: Vt.a,
                      alt: "loader",
                      size: "90px",
                    }),
                  }),
                  Object(ve.jsxs)(x.a, {
                    gap: "100px",
                    justify: "center",
                    children: [
                      Object(ve.jsx)(x.a, {
                        gap: "12px",
                        justify: "center",
                        children: Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                          children: Object(ve.jsx)(d.b, {
                            id: "Submitting Vote",
                          }),
                        }),
                      }),
                      Object(ve.jsx)(be.t.DeprecatedSubHeader, {
                        children: Object(ve.jsx)(d.b, {
                          id: "Confirm this transaction in your wallet",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            m &&
              Object(ve.jsxs)(an, {
                children: [
                  Object(ve.jsxs)(Oe.b, {
                    children: [
                      Object(ve.jsx)("div", {}),
                      Object(ve.jsx)(nn, { onClick: C }),
                    ],
                  }),
                  Object(ve.jsx)(on, {
                    children: Object(ve.jsx)(_t.a, {
                      strokeWidth: 0.5,
                      size: 90,
                      color: I.deprecated_primary1,
                    }),
                  }),
                  Object(ve.jsxs)(x.a, {
                    gap: "100px",
                    justify: "center",
                    children: [
                      Object(ve.jsx)(x.a, {
                        gap: "12px",
                        justify: "center",
                        children: Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                          children: Object(ve.jsx)(d.b, {
                            id: "Transaction Submitted",
                          }),
                        }),
                      }),
                      o &&
                        Object(ve.jsx)(be.i, {
                          href: Object(Le.b)(o, m, Le.a.TRANSACTION),
                          style: { marginLeft: "4px" },
                          children: Object(ve.jsx)(be.t.DeprecatedSubHeader, {
                            children: Object(ve.jsx)(d.b, {
                              id: "View transaction on Explorer",
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var sn = Object(l.default)(x.a).withConfig({
          componentId: "sc-1vobn0f-0",
        })(
          [
            "padding-top:",
            ";width:100%;@media only screen and (max-width:",
            "){padding:",
            ";}@media only screen and (max-width:",
            "){padding-top:",
            ";}",
          ],
          function (e) {
            return e.navBarFlag ? "68px" : "0px";
          },
          function (e) {
            var t = e.theme;
            return "".concat(t.breakpoint.md, "px");
          },
          function (e) {
            return e.navBarFlag ? "48px 8px 0px" : "0px 8px 0px";
          },
          function (e) {
            var t = e.theme;
            return "".concat(t.breakpoint.sm, "px");
          },
          function (e) {
            return e.navBarFlag ? "20px" : "0px";
          }
        ),
        cn = Object(l.default)(x.a).withConfig({ componentId: "sc-1vobn0f-1" })(
          [
            "background:",
            ";border-radius:12px;padding:1.5rem;position:relative;max-width:640px;width:100%;",
          ],
          function (e) {
            return e.theme.deprecated_bg0;
          }
        ),
        ln = Object(l.default)(be.r).withConfig({
          componentId: "sc-1vobn0f-2",
        })(
          [
            "display:flex;align-items:center;gap:8px;height:24px;color:",
            ";a{color:",
            ";text-decoration:none;}:hover{text-decoration:none;}",
          ],
          function (e) {
            return e.theme.deprecated_text1;
          },
          function (e) {
            return e.theme.deprecated_text1;
          }
        ),
        dn = l.default.div.withConfig({ componentId: "sc-1vobn0f-3" })([
          "display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;",
        ]),
        un = Object(l.default)($e.f).withConfig({
          componentId: "sc-1vobn0f-4",
        })(
          [
            "width:100%;background:none;background-color:",
            ";height:fit-content;z-index:2;",
          ],
          function (e) {
            return e.theme.deprecated_bg1;
          }
        ),
        pn = l.default.div.withConfig({ componentId: "sc-1vobn0f-5" })(
          [
            "width:100%;margin-top:1rem;height:4px;border-radius:4px;background-color:",
            ";position:relative;",
          ],
          function (e) {
            return e.theme.deprecated_bg3;
          }
        ),
        bn = l.default.div.withConfig({ componentId: "sc-1vobn0f-6" })(
          ["height:4px;border-radius:4px;background-color:", ";width:", ";"],
          function (e) {
            var t = e.theme;
            return "for" === e.status ? t.deprecated_green1 : t.deprecated_red1;
          },
          function (e) {
            var t = e.percentageString;
            return null !== t && void 0 !== t ? t : "0%";
          }
        ),
        jn = l.default.div.withConfig({ componentId: "sc-1vobn0f-7" })([
          "max-width:640px;overflow:hidden;",
        ]),
        hn = Object(l.default)(Oe.b).withConfig({
          componentId: "sc-1vobn0f-8",
        })(["", ";"], function (e) {
          return e.theme.deprecated_mediaWidth.deprecated_upToSmall(
            Qt ||
              (Qt = Object(Xe.a)([
                "\n    align-items: flex-start;\n    flex-direction: column;\n  ",
              ]))
          );
        }),
        fn = l.default.div.withConfig({ componentId: "sc-1vobn0f-9" })([
          "word-break:break-all;",
        ]),
        mn = Object(l.default)(be.i).withConfig({
          componentId: "sc-1vobn0f-10",
        })(["word-break:break-all;"]);
      function xn(e, t, n, a) {
        if (e && t && n && a) {
          var i = new Date();
          return (
            i.setTime(
              1e3 * a.add(Ut.a.from(n).mul(Ut.a.from(e - t))).toNumber()
            ),
            i
          );
        }
      }
      function On() {
        var e,
          t,
          n,
          a,
          i,
          o,
          r,
          s,
          l,
          u,
          p,
          g = Object(O.b)() === O.a.Enabled,
          v = Object(Qe.h)(),
          w = v.governorIndex,
          I = v.id,
          E = Number.parseInt(w),
          k = Object(b.useWeb3React)(),
          D = k.chainId,
          S = k.account,
          A = (function (e) {
            var t,
              n,
              a = Z(),
              i =
                null === (t = Object(W.c)(a, "quorumVotes")) ||
                void 0 === t ||
                null === (n = t.result) ||
                void 0 === n
                  ? void 0
                  : n[0],
              o = Object(b.useWeb3React)().chainId,
              r = Object(T.useMemo)(
                function () {
                  return o ? G.t[o] : void 0;
                },
                [o]
              );
            if (a && i && o === U.f.MAINNET && r && 2 === e)
              return N.CurrencyAmount.fromRawAmount(r, i);
          })(E),
          M = le(E, I),
          R = Object(T.useState)(void 0),
          P = Object(c.a)(R, 2),
          B = P[0],
          F = P[1],
          L = Object(ft.d)(mt.a.VOTE),
          z = Object(ft.q)(),
          q = Object(ft.d)(mt.a.DELEGATE),
          Y = Object(ft.h)(),
          K = Object(ft.d)(mt.a.QUEUE),
          Q = Object(ft.m)(),
          $ = Object(ft.d)(mt.a.EXECUTE),
          te = Object(ft.i)(),
          ne = Object($t.a)(),
          ae = Object(H.b)(),
          ie = xn(
            null === M || void 0 === M ? void 0 : M.startBlock,
            ae,
            null !== (e = D && V[D]) && void 0 !== e ? e : 13,
            ne
          ),
          oe = xn(
            null === M || void 0 === M ? void 0 : M.endBlock,
            ae,
            null !== (t = D && V[D]) && void 0 !== t ? t : 13,
            ne
          ),
          re = new Date(),
          se = Object(Xt.c)(),
          ce = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          },
          ue = (null === M || void 0 === M ? void 0 : M.eta)
            ? new Date(M.eta.mul(1e3).toNumber())
            : void 0,
          pe =
            null === M ||
            void 0 === M ||
            null === (n = M.forCount) ||
            void 0 === n
              ? void 0
              : n.add(M.againstCount),
          je = pe
            ? null === M ||
              void 0 === M ||
              null === (a = M.forCount) ||
              void 0 === a ||
              null === (i = a.asFraction) ||
              void 0 === i ||
              null === (o = i.divide(pe.asFraction)) ||
              void 0 === o
              ? void 0
              : o.multiply(100)
            : void 0,
          he = je ? new N.Fraction(100).subtract(je) : void 0,
          fe = (function (e) {
            var t,
              n,
              a = Object(b.useWeb3React)(),
              i = a.account,
              o = a.chainId,
              r = ee(),
              s = Object(T.useMemo)(
                function () {
                  return o ? G.t[o] : void 0;
                },
                [o]
              ),
              c =
                null ===
                  (t = Object(W.c)(r, "getPriorVotes", [
                    null !== i && void 0 !== i ? i : void 0,
                    null !== e && void 0 !== e ? e : void 0,
                  ])) ||
                void 0 === t ||
                null === (n = t.result) ||
                void 0 === n
                  ? void 0
                  : n[0];
            return c && s ? N.CurrencyAmount.fromRawAmount(s, c) : void 0;
          })(
            null !== (r = null === M || void 0 === M ? void 0 : M.startBlock) &&
              void 0 !== r
              ? r
              : void 0
          ),
          me =
            fe &&
            y.a.greaterThan(fe.quotient, y.a.BigInt(0)) &&
            M &&
            M.status === J.ACTIVE,
          xe =
            S &&
            (null === M || void 0 === M ? void 0 : M.status) === J.SUCCEEDED,
          ge =
            S && (null === M || void 0 === M ? void 0 : M.status) === J.QUEUED,
          ye = Object(ot.f)(
            null !== S && void 0 !== S ? S : void 0,
            D ? G.t[D] : void 0
          ),
          we = de(),
          Te = Boolean(
            ye && y.a.notEqual(ye.quotient, y.a.BigInt(0)) && we === Ot.n
          ),
          Ie = function (e) {
            if (Object(xt.c)(e) && D) {
              var t,
                n,
                a =
                  null !==
                    (t = null === (n = _[D]) || void 0 === n ? void 0 : n[e]) &&
                  void 0 !== t
                    ? t
                    : e;
              return Object(ve.jsx)(be.i, {
                href: Object(Le.b)(D, e, Le.a.ADDRESS),
                children: a,
              });
            }
            return Object(ve.jsx)("span", { children: e });
          };
        return Object(ve.jsx)(h.a, {
          page: j.h.VOTE_PAGE,
          shouldLogImpression: !0,
          children: Object(ve.jsxs)(ve.Fragment, {
            children: [
              Object(ve.jsxs)(sn, {
                gap: "lg",
                justify: "center",
                navBarFlag: g,
                children: [
                  Object(ve.jsx)(rn, {
                    isOpen: L,
                    onDismiss: z,
                    proposalId: null === M || void 0 === M ? void 0 : M.id,
                    voteOption: B,
                  }),
                  Object(ve.jsx)(lt, {
                    isOpen: q,
                    onDismiss: Y,
                    title: Object(ve.jsx)(d.b, { id: "Unlock Votes" }),
                  }),
                  Object(ve.jsx)(Kt, {
                    isOpen: K,
                    onDismiss: Q,
                    proposalId: null === M || void 0 === M ? void 0 : M.id,
                  }),
                  Object(ve.jsx)(Gt, {
                    isOpen: $,
                    onDismiss: te,
                    proposalId: null === M || void 0 === M ? void 0 : M.id,
                  }),
                  Object(ve.jsxs)(cn, {
                    gap: "lg",
                    justify: "start",
                    children: [
                      Object(ve.jsxs)(Oe.b, {
                        style: { width: "100%" },
                        children: [
                          Object(ve.jsx)(ln, {
                            to: "/vote",
                            children: Object(ve.jsx)(d.b, {
                              id: "<0/> All Proposals",
                              components: {
                                0: Object(ve.jsx)(Jt.a, { size: 20 }),
                              },
                            }),
                          }),
                          M && Object(ve.jsx)(Tt, { status: M.status }),
                        ],
                      }),
                      Object(ve.jsxs)(x.a, {
                        gap: "10px",
                        style: { width: "100%" },
                        children: [
                          Object(ve.jsx)(be.t.DeprecatedLargeHeader, {
                            style: { marginBottom: ".5rem" },
                            children:
                              null === M || void 0 === M ? void 0 : M.title,
                          }),
                          Object(ve.jsx)(Oe.b, {
                            children: Object(ve.jsx)(be.t.DeprecatedMain, {
                              children:
                                ie && ie > re
                                  ? Object(ve.jsx)(d.b, {
                                      id: "Voting starts approximately {0}",
                                      values: { 0: ie.toLocaleString(se, ce) },
                                    })
                                  : null,
                            }),
                          }),
                          Object(ve.jsx)(Oe.b, {
                            children: Object(ve.jsx)(be.t.DeprecatedMain, {
                              children:
                                oe &&
                                (oe < re
                                  ? Object(ve.jsx)(d.b, {
                                      id: "Voting ended {0}",
                                      values: { 0: oe.toLocaleString(se, ce) },
                                    })
                                  : Object(ve.jsx)(d.b, {
                                      id: "Voting ends approximately {0}",
                                      values: { 0: oe.toLocaleString(se, ce) },
                                    })),
                            }),
                          }),
                          M &&
                            M.status === J.ACTIVE &&
                            !me &&
                            Object(ve.jsx)(m.d, {
                              children: Object(ve.jsxs)(be.t.DeprecatedBlack, {
                                children: [
                                  Object(ve.jsx)(d.b, {
                                    id: "Only UNI votes that were self delegated or delegated to another address before block {0} are eligible for voting.",
                                    values: { 0: M.startBlock },
                                  }),
                                  " ",
                                  Te &&
                                    Object(ve.jsx)("span", {
                                      children: Object(ve.jsx)(d.b, {
                                        id: "<0>Unlock voting</0> to prepare for the next proposal.",
                                        components: {
                                          0: Object(ve.jsx)(be.r, {
                                            to: "/vote",
                                          }),
                                        },
                                      }),
                                    }),
                                ],
                              }),
                            }),
                        ],
                      }),
                      me &&
                        Object(ve.jsxs)(Oe.c, {
                          style: { width: "100%", gap: "12px" },
                          children: [
                            Object(ve.jsx)(f.i, {
                              padding: "8px",
                              $borderRadius: "8px",
                              onClick: function () {
                                F(X.a.For), z();
                              },
                              children: Object(ve.jsx)(d.b, { id: "Vote For" }),
                            }),
                            Object(ve.jsx)(f.i, {
                              padding: "8px",
                              $borderRadius: "8px",
                              onClick: function () {
                                F(X.a.Against), z();
                              },
                              children: Object(ve.jsx)(d.b, {
                                id: "Vote Against",
                              }),
                            }),
                          ],
                        }),
                      xe &&
                        Object(ve.jsx)(Oe.c, {
                          style: { width: "100%", gap: "12px" },
                          children: Object(ve.jsx)(f.i, {
                            padding: "8px",
                            $borderRadius: "8px",
                            onClick: function () {
                              Q();
                            },
                            children: Object(ve.jsx)(d.b, { id: "Queue" }),
                          }),
                        }),
                      ge &&
                        Object(ve.jsxs)(ve.Fragment, {
                          children: [
                            ue &&
                              Object(ve.jsx)(Oe.b, {
                                children: Object(ve.jsx)(be.t.DeprecatedBlack, {
                                  children: Object(ve.jsx)(d.b, {
                                    id: "This proposal may be executed after {0}.",
                                    values: { 0: ue.toLocaleString(se, ce) },
                                  }),
                                }),
                              }),
                            Object(ve.jsx)(Oe.c, {
                              style: { width: "100%", gap: "12px" },
                              children: Object(ve.jsx)(f.i, {
                                padding: "8px",
                                $borderRadius: "8px",
                                onClick: function () {
                                  te();
                                },
                                disabled:
                                  !ne ||
                                  !(null === M || void 0 === M
                                    ? void 0
                                    : M.eta) ||
                                  ne.lt(M.eta),
                                children: Object(ve.jsx)(d.b, {
                                  id: "Execute",
                                }),
                              }),
                            }),
                          ],
                        }),
                      Object(ve.jsxs)(dn, {
                        children: [
                          Object(ve.jsx)(un, {
                            children: Object(ve.jsxs)($e.e, {
                              children: [
                                Object(ve.jsx)(x.a, {
                                  gap: "md",
                                  children: Object(ve.jsxs)(hn, {
                                    children: [
                                      Object(ve.jsx)(be.t.DeprecatedBlack, {
                                        fontWeight: 600,
                                        children: Object(ve.jsx)(d.b, {
                                          id: "For",
                                        }),
                                      }),
                                      M &&
                                        Object(ve.jsxs)(be.t.DeprecatedBlack, {
                                          fontWeight: 600,
                                          children: [
                                            M.forCount.toFixed(0, {
                                              groupSeparator: ",",
                                            }),
                                            A &&
                                              Object(ve.jsx)("span", {
                                                style: { fontWeight: 400 },
                                                children: " / ".concat(
                                                  A.toExact({
                                                    groupSeparator: ",",
                                                  })
                                                ),
                                              }),
                                          ],
                                        }),
                                    ],
                                  }),
                                }),
                                Object(ve.jsx)(pn, {
                                  children: Object(ve.jsx)(bn, {
                                    status: "for",
                                    percentageString: (
                                      null === M || void 0 === M
                                        ? void 0
                                        : M.forCount.greaterThan(0)
                                    )
                                      ? "".concat(
                                          null !==
                                            (s =
                                              null === je || void 0 === je
                                                ? void 0
                                                : je.toFixed(0)) && void 0 !== s
                                            ? s
                                            : 0,
                                          "%"
                                        )
                                      : "0%",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          Object(ve.jsx)(un, {
                            children: Object(ve.jsxs)($e.e, {
                              children: [
                                Object(ve.jsx)(x.a, {
                                  gap: "md",
                                  children: Object(ve.jsxs)(hn, {
                                    children: [
                                      Object(ve.jsx)(be.t.DeprecatedBlack, {
                                        fontWeight: 600,
                                        children: Object(ve.jsx)(d.b, {
                                          id: "Against",
                                        }),
                                      }),
                                      M &&
                                        Object(ve.jsx)(be.t.DeprecatedBlack, {
                                          fontWeight: 600,
                                          children: M.againstCount.toFixed(0, {
                                            groupSeparator: ",",
                                          }),
                                        }),
                                    ],
                                  }),
                                }),
                                Object(ve.jsx)(pn, {
                                  children: Object(ve.jsx)(bn, {
                                    status: "against",
                                    percentageString: (
                                      null === M ||
                                      void 0 === M ||
                                      null === (l = M.againstCount) ||
                                      void 0 === l
                                        ? void 0
                                        : l.greaterThan(0)
                                    )
                                      ? "".concat(
                                          null !==
                                            (u =
                                              null === he || void 0 === he
                                                ? void 0
                                                : he.toFixed(0)) && void 0 !== u
                                            ? u
                                            : 0,
                                          "%"
                                        )
                                      : "0%",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(ve.jsxs)(x.a, {
                        gap: "md",
                        children: [
                          Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                            fontWeight: 600,
                            children: Object(ve.jsx)(d.b, { id: "Details" }),
                          }),
                          null === M ||
                          void 0 === M ||
                          null === (p = M.details) ||
                          void 0 === p
                            ? void 0
                            : p.map(function (e, t) {
                                return Object(ve.jsxs)(
                                  fn,
                                  {
                                    children: [
                                      t + 1,
                                      ": ",
                                      Ie(e.target),
                                      ".",
                                      e.functionSig,
                                      "(",
                                      e.callData
                                        .split(",")
                                        .map(function (t, n) {
                                          return Object(ve.jsxs)(
                                            "span",
                                            {
                                              children: [
                                                Ie(t),
                                                e.callData.split(",").length -
                                                  1 ===
                                                n
                                                  ? ""
                                                  : ",",
                                              ],
                                            },
                                            n
                                          );
                                        }),
                                      ")",
                                    ],
                                  },
                                  t
                                );
                              }),
                        ],
                      }),
                      Object(ve.jsxs)(x.a, {
                        gap: "md",
                        children: [
                          Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                            fontWeight: 600,
                            children: Object(ve.jsx)(d.b, {
                              id: "Description",
                            }),
                          }),
                          Object(ve.jsx)(jn, {
                            children: Object(ve.jsx)(en.a, {
                              source:
                                null === M || void 0 === M
                                  ? void 0
                                  : M.description,
                              renderers: {
                                image: function (e) {
                                  var t = Object.assign({}, e);
                                  return Object(ve.jsx)(
                                    "img",
                                    Object(C.a)(
                                      Object(C.a)({}, t),
                                      {},
                                      {
                                        style: {
                                          width: "100%",
                                          height: "100$",
                                          objectFit: "cover",
                                        },
                                        alt: "",
                                      }
                                    )
                                  );
                                },
                              },
                            }),
                          }),
                        ],
                      }),
                      Object(ve.jsxs)(x.a, {
                        gap: "md",
                        children: [
                          Object(ve.jsx)(be.t.DeprecatedMediumHeader, {
                            fontWeight: 600,
                            children: Object(ve.jsx)(d.b, { id: "Proposer" }),
                          }),
                          Object(ve.jsx)(mn, {
                            href:
                              (null === M || void 0 === M
                                ? void 0
                                : M.proposer) && D
                                ? Object(Le.b)(
                                    D,
                                    null === M || void 0 === M
                                      ? void 0
                                      : M.proposer,
                                    Le.a.ADDRESS
                                  )
                                : "",
                            children: Object(ve.jsx)(en.a, {
                              source:
                                null === M || void 0 === M
                                  ? void 0
                                  : M.proposer,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(ve.jsx)(et.a, {}),
            ],
          }),
        });
      }
      function gn() {
        return Object(ve.jsxs)(Qe.d, {
          children: [
            Object(ve.jsx)(Qe.b, {
              path: "/",
              element: Object(ve.jsx)(Pt, {}),
            }),
            Object(ve.jsx)(Qe.b, {
              path: ":governorIndex/:id",
              element: Object(ve.jsx)(On, {}),
            }),
            Object(ve.jsx)(Qe.b, {
              path: "create-proposal",
              element: Object(ve.jsx)(Ke, {}),
            }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=17.2dbb4cf7.chunk.js.map
