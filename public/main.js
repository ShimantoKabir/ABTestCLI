(() => {
  "use strict";
  var t,
    e,
    o,
    n,
    i,
    s,
    r,
    c,
    u = {
      52: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.selectors = void 0),
          (e.selectors = {
            checkoutBtn1: "div.btn-checkout>a",
            checkoutBtn2: "div.review-order-button>a",
            shopingPageContainer: "div#shopping-page-container",
          });
      },
      626: (t, e) => {
        var o;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TestInfo = void 0),
          ((o = e.TestInfo || (e.TestInfo = {})).ID = "CC002"),
          (o.SITE = "consumercellular"),
          (o.CLIENT = "brainlab"),
          (o.VARIATION = "2");
      },
      8: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ButtonObserver = void 0);
        e.ButtonObserver = function (t) {
          var e = this;
          (this.targetNode = null),
            (this.config = {}),
            (this.observe = function (t) {
              new MutationObserver(t).observe(e.targetNode, e.config);
            }),
            (this.targetNode = document.querySelector(t)),
            (this.config = { attributes: !0, childList: !0, subtree: !0 });
        };
      },
      951: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Initializer = void 0);
        var o = (function () {
          function t() {}
          return (
            (t.init = function (t, e) {
              document.documentElement.classList.add(t.ID),
                document.documentElement.classList.add(
                  "".concat(t.ID, "-").concat(t.VARIATION)
                ),
                console.info(
                  "ID: "
                    .concat(t.ID, ", VARIATION: ")
                    .concat(t.VARIATION, ", VERSION: ")
                    .concat(e, " is running.....!")
                );
            }),
            t
          );
        })();
        e.Initializer = o;
      },
      454: (t, e, o) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Poller = void 0);
        var n = o(704);
        e.Poller = function () {
          var t = this;
          (this.options = null),
            (this.timeout = null),
            (this.successfulConditions = []),
            (this.callback = function () {}),
            (this.conditionsLength = 0),
            (this.poll = function (e, o, i) {
              (t.callback = o),
                (t.options = new n.UserOptions()),
                (t.conditionsLength = e.length),
                i && (t.options = i),
                (t.timeout = t.options.timeout
                  ? new Date(t.getNow() + t.options.timeout).getTime()
                  : null);
              for (var s = 0; s < e.length; s++)
                t.pollForCondition(
                  e[s],
                  t.options.wait,
                  !0,
                  t.options.multiplier
                );
            }),
            (this.getNow = function () {
              return new Date().getTime();
            }),
            (this.isTimeOut = function () {
              return !!(t.timeout && t.getNow() > t.timeout);
            }),
            (this.evaluateCondition = function (t) {
              return (
                !!t &&
                ("function" == typeof t
                  ? t()
                  : !("string" != typeof t || !document.querySelector(t)))
              );
            }),
            (this.isAllConditionPassed = function () {
              return t.conditionsLength === t.successfulConditions.length;
            }),
            (this.pollForCondition = function (e, o, n, i) {
              if (t.timeout && t.isTimeOut()) return !1;
              var s = t.evaluateCondition(e);
              return (
                s
                  ? (t.successfulConditions.push(s),
                    t.isAllConditionPassed() &&
                      t.callback(t.successfulConditions))
                  : setTimeout(
                      function () {
                        t.pollForCondition(e, o * i, n, i);
                      },
                      n ? 0 : o
                    ),
                !0
              );
            });
        };
      },
      704: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.UserOptions = void 0);
        e.UserOptions = function () {
          (this.wait = 50), (this.multiplier = 1.1), (this.timeout = 0);
        };
      },
    },
    l = {};
  function a(t) {
    var e = l[t];
    if (void 0 !== e) return e.exports;
    var o = (l[t] = { exports: {} });
    return u[t](o, o.exports, a), o.exports;
  }
  (t = a(951)),
    (e = a(454)),
    (o = a(52)),
    (n = a(626)),
    (i = a(8)),
    (s = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(
      window.navigator.userAgent
    )),
    (r = function (t, e) {
      t.forEach(function (t) {
        t.textContent = e;
      });
    }),
    (c = function () {
      var t = document.querySelectorAll(
        ""
          .concat(o.selectors.checkoutBtn1, ", ")
          .concat(o.selectors.checkoutBtn2)
      );
      t &&
        t.length > 0 &&
        ("1" === n.TestInfo.VARIATION.toString()
          ? r(t, "Checkout")
          : "2" === n.TestInfo.VARIATION.toString() &&
            r(t, "Continue To Shipping"));
    }),
    s ||
      new e.Poller().poll(
        ["body", o.selectors.checkoutBtn1, o.selectors.checkoutBtn2],
        function () {
          t.Initializer.init(n.TestInfo, "0.0.1"),
            c(),
            new i.ButtonObserver(o.selectors.shopingPageContainer).observe(
              function (t, e) {
                for (var o = 0, n = t; o < n.length; o++) {
                  var i = n[o];
                  if (
                    "https://consumercellular.com/shopping/checkout" ===
                      i.target.href ||
                    i.target.classList.contains("affix") ||
                    i.target.classList.contains("price-detail")
                  ) {
                    c();
                    break;
                  }
                }
              }
            );
        }
      );
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdOLEdBR0YsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvY29uc3VtZXJjZWxsdWxhci9DQzAwMi9pbmRleC50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2NvbnN1bWVyY2VsbHVsYXIvQ0MwMDIvY29tbW9uL2Fzc2V0LnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvY29uc3VtZXJjZWxsdWxhci9DQzAwMi9jb21tb24vdGVzdC5pbmZvLnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvY29uc3VtZXJjZWxsdWxhci9DQzAwMi9vYnNlcnZlci9idXR0b24ub2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvdXRpbGl0aWVzL2luaXRpYWxpemVyLnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL3V0aWxpdGllcy9wb2xsZXIudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvdXRpbGl0aWVzL3VzZXIub3B0aW9ucy50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS93ZWJwYWNrL2Jvb3RzdHJhcCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbml0aWFsaXplciB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsaXRpZXMvaW5pdGlhbGl6ZXJcIjtcclxuaW1wb3J0IHsgUG9sbGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxpdGllcy9wb2xsZXJcIjtcclxuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSBcIi4vY29tbW9uL2Fzc2V0XCI7XHJcbmltcG9ydCB7IFRlc3RJbmZvIH0gZnJvbSBcIi4vY29tbW9uL3Rlc3QuaW5mb1wiO1xyXG5pbXBvcnQgeyBCdXR0b25PYnNlcnZlciB9IGZyb20gXCIuL29ic2VydmVyL2J1dHRvbi5vYnNlcnZlclwiO1xyXG5cclxuY29uc3QgaWVDaGVja3MgPSAvTVNJRXxUcmlkZW50fEVkZ2VcXC8oMTJ8MTN8MTR8MTV8MTZ8MTd8MTgpLy50ZXN0KFxyXG4gIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50XHJcbik7XHJcblxyXG5jb25zdCBjaGFuZ2VCdG5UZXh0ID0gKGNoZWNrb3V0QnRuczogTm9kZUxpc3RPZjxFbGVtZW50PiwgdGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgY2hlY2tvdXRCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLnRleHRDb250ZW50ID0gdGV4dDtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHN0YXJ0T3BlcmF0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNoZWNrb3V0QnRuczogbnVsbCB8IE5vZGVMaXN0T2Y8RWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgYCR7c2VsZWN0b3JzLmNoZWNrb3V0QnRuMX0sICR7c2VsZWN0b3JzLmNoZWNrb3V0QnRuMn1gXHJcbiAgKTtcclxuXHJcbiAgaWYgKGNoZWNrb3V0QnRucyAmJiBjaGVja291dEJ0bnMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKFRlc3RJbmZvLlZBUklBVElPTi50b1N0cmluZygpID09PSBcIjFcIikge1xyXG4gICAgICBjaGFuZ2VCdG5UZXh0KGNoZWNrb3V0QnRucywgXCJDaGVja291dFwiKTtcclxuICAgIH0gZWxzZSBpZiAoVGVzdEluZm8uVkFSSUFUSU9OLnRvU3RyaW5nKCkgPT09IFwiMlwiKSB7XHJcbiAgICAgIGNoYW5nZUJ0blRleHQoY2hlY2tvdXRCdG5zLCBcIkNvbnRpbnVlIFRvIFNoaXBwaW5nXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcnVuVGVzdCA9ICgpID0+IHtcclxuICBJbml0aWFsaXplci5pbml0KFRlc3RJbmZvLCBcIjAuMC4xXCIpO1xyXG5cclxuICBzdGFydE9wZXJhdGlvbigpO1xyXG5cclxuICBjb25zdCBidXR0b25PYnNlcnZlciA9IG5ldyBCdXR0b25PYnNlcnZlcihzZWxlY3RvcnMuc2hvcGluZ1BhZ2VDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBjYWxsYmFjayA9IChtdXRhdGlvbkxpc3Q6IGFueSwgb2JzZXJ2ZXI6IGFueSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIG11dGF0aW9uLnRhcmdldC5ocmVmID09PVxyXG4gICAgICAgIFwiaHR0cHM6Ly9jb25zdW1lcmNlbGx1bGFyLmNvbS9zaG9wcGluZy9jaGVja291dFwiIHx8XHJcbiAgICAgICAgbXV0YXRpb24udGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFmZml4XCIpIHx8IFxyXG4gICAgICAgIG11dGF0aW9uLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmljZS1kZXRhaWxcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgc3RhcnRPcGVyYXRpb24oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGJ1dHRvbk9ic2VydmVyLm9ic2VydmUoY2FsbGJhY2spO1xyXG59O1xyXG5cclxuaWYgKCFpZUNoZWNrcykge1xyXG4gIGNvbnN0IHBvbGxlciA9IG5ldyBQb2xsZXIoKTtcclxuICBwb2xsZXIucG9sbChcclxuICAgIFtcImJvZHlcIiwgc2VsZWN0b3JzLmNoZWNrb3V0QnRuMSwgc2VsZWN0b3JzLmNoZWNrb3V0QnRuMl0sXHJcbiAgICBydW5UZXN0XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xyXG4gICAgY2hlY2tvdXRCdG4xIDogXCJkaXYuYnRuLWNoZWNrb3V0PmFcIixcclxuICAgIGNoZWNrb3V0QnRuMjogXCJkaXYucmV2aWV3LW9yZGVyLWJ1dHRvbj5hXCIsXHJcbiAgICBcclxuICAgIHNob3BpbmdQYWdlQ29udGFpbmVyOiBcImRpdiNzaG9wcGluZy1wYWdlLWNvbnRhaW5lclwiXHJcbn1cclxuIiwiZXhwb3J0IGVudW0gVGVzdEluZm8ge0lEID0gJ0NDMDAyJywgU0lURSA9ICdjb25zdW1lcmNlbGx1bGFyJywgQ0xJRU5UID0gJ2JyYWlubGFiJywgVkFSSUFUSU9OID0gJzInfSIsImV4cG9ydCBjbGFzcyBCdXR0b25PYnNlcnZlciB7XHJcbiAgICBwcml2YXRlIHRhcmdldE5vZGU6IEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29uZmlnID0ge307XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXROb2RlOiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy50YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXROb2RlKTtcclxuICAgICAgdGhpcy5jb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgb2JzZXJ2ZSA9IChjYWxsQmFjazogTXV0YXRpb25DYWxsYmFjaykgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxCYWNrKTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnRhcmdldE5vZGUgYXMgRWxlbWVudCwgdGhpcy5jb25maWcpO1xyXG4gICAgfTtcclxuICB9IiwiZXhwb3J0IGNsYXNzIEluaXRpYWxpemVyIHtcclxuICBzdGF0aWMgaW5pdCA9IChcclxuICAgIHRlc3RJbmZvOiB7XHJcbiAgICAgIElEOiBzdHJpbmc7XHJcbiAgICAgIFNJVEU6IHN0cmluZztcclxuICAgICAgQ0xJRU5UOiBzdHJpbmc7XHJcbiAgICAgIFZBUklBVElPTjogc3RyaW5nO1xyXG4gICAgfSxcclxuICAgIHZlcnNpb246IHN0cmluZ1xyXG4gICk6IHZvaWQgPT4ge1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGVzdEluZm8uSUQpO1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgIGAke3Rlc3RJbmZvLklEfS0ke3Rlc3RJbmZvLlZBUklBVElPTn1gXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5pbmZvKFxyXG4gICAgICBgSUQ6ICR7dGVzdEluZm8uSUR9LCBWQVJJQVRJT046ICR7dGVzdEluZm8uVkFSSUFUSU9OfSwgVkVSU0lPTjogJHt2ZXJzaW9ufSBpcyBydW5uaW5nLi4uLi4hYFxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IFVzZXJPcHRpb25zIH0gZnJvbSBcIi4vdXNlci5vcHRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9sbGVyIHtcclxuICBwcml2YXRlIG9wdGlvbnM6IFVzZXJPcHRpb25zIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSB0aW1lb3V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIHN1Y2Nlc3NmdWxDb25kaXRpb25zOiBib29sZWFuW10gPSBbXTtcclxuICBwcml2YXRlIGNhbGxiYWNrOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xyXG4gIHByaXZhdGUgY29uZGl0aW9uc0xlbmd0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgcG9sbCA9IChcclxuICAgIGNvbmRpdGlvbnM6IChGdW5jdGlvbiB8IHN0cmluZylbXSxcclxuICAgIGNhbGxiYWNrOiBGdW5jdGlvbixcclxuICAgIHVzZXJPcHRpb25zPzogVXNlck9wdGlvbnNcclxuICApID0+IHtcclxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIHRoaXMub3B0aW9ucyA9IG5ldyBVc2VyT3B0aW9ucygpO1xyXG4gICAgdGhpcy5jb25kaXRpb25zTGVuZ3RoID0gY29uZGl0aW9ucy5sZW5ndGg7XHJcblxyXG4gICAgaWYgKHVzZXJPcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IHVzZXJPcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGltZW91dCA9IHRoaXMub3B0aW9ucy50aW1lb3V0XHJcbiAgICAgID8gbmV3IERhdGUodGhpcy5nZXROb3coKSArIHRoaXMub3B0aW9ucy50aW1lb3V0KS5nZXRUaW1lKClcclxuICAgICAgOiBudWxsO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnBvbGxGb3JDb25kaXRpb24oXHJcbiAgICAgICAgY29uZGl0aW9uc1tpXSxcclxuICAgICAgICB0aGlzLm9wdGlvbnMud2FpdCxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5tdWx0aXBsaWVyXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2V0Tm93ID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgfTtcclxuXHJcbiAgaXNUaW1lT3V0ID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKHRoaXMudGltZW91dCAmJiB0aGlzLmdldE5vdygpID4gdGhpcy50aW1lb3V0KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGV2YWx1YXRlQ29uZGl0aW9uID0gKGNvbmRpdGlvbjogRnVuY3Rpb24gfCBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIGlmICghY29uZGl0aW9uKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgIHJldHVybiBjb25kaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gXCJzdHJpbmdcIiAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmRpdGlvbikpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGlzQWxsQ29uZGl0aW9uUGFzc2VkID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc0xlbmd0aCA9PT0gdGhpcy5zdWNjZXNzZnVsQ29uZGl0aW9ucy5sZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgcG9sbEZvckNvbmRpdGlvbiA9IChcclxuICAgIGNvbmRpdGlvbjogRnVuY3Rpb24gfCBzdHJpbmcsXHJcbiAgICB3YWl0VGltZTogbnVtYmVyLFxyXG4gICAgc2tpcFdhaXQ6IGJvb2xlYW4sXHJcbiAgICBtdWx0aXBsaWVyOiBudW1iZXJcclxuICApOiBib29sZWFuID0+IHtcclxuICAgIGlmICh0aGlzLnRpbWVvdXQgJiYgdGhpcy5pc1RpbWVPdXQoKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihjb25kaXRpb24pO1xyXG5cclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgdGhpcy5zdWNjZXNzZnVsQ29uZGl0aW9ucy5wdXNoKHJlc3VsdCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0FsbENvbmRpdGlvblBhc3NlZCgpKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLnN1Y2Nlc3NmdWxDb25kaXRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBvbGxGb3JDb25kaXRpb24oXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbixcclxuICAgICAgICAgICAgd2FpdFRpbWUgKiBtdWx0aXBsaWVyLFxyXG4gICAgICAgICAgICBza2lwV2FpdCxcclxuICAgICAgICAgICAgbXVsdGlwbGllclxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNraXBXYWl0ID8gMCA6IHdhaXRUaW1lXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVXNlck9wdGlvbnMge1xyXG4gIHdhaXQ6IG51bWJlciA9IDUwO1xyXG4gIG11bHRpcGxpZXI6IG51bWJlciA9IDEuMTtcclxuICB0aW1lb3V0OiBudW1iZXIgPSAwO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iXSwibmFtZXMiOlsiaWVDaGVja3MiLCJjaGFuZ2VCdG5UZXh0Iiwic3RhcnRPcGVyYXRpb24iLCJzZWxlY3RvcnMiLCJjaGVja291dEJ0bjEiLCJjaGVja291dEJ0bjIiLCJzaG9waW5nUGFnZUNvbnRhaW5lciIsIlRlc3RJbmZvIiwiQnV0dG9uT2JzZXJ2ZXIiLCJ0YXJnZXROb2RlIiwiY29uZmlnIiwib2JzZXJ2ZSIsImNhbGxCYWNrIiwiTXV0YXRpb25PYnNlcnZlciIsInRoaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImluaXQiLCJ0ZXN0SW5mbyIsInZlcnNpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJJRCIsIlZBUklBVElPTiIsImNvbnNvbGUiLCJpbmZvIiwiSW5pdGlhbGl6ZXIiLCJQb2xsZXIiLCJvcHRpb25zIiwidGltZW91dCIsInN1Y2Nlc3NmdWxDb25kaXRpb25zIiwiY2FsbGJhY2siLCJjb25kaXRpb25zTGVuZ3RoIiwicG9sbCIsImNvbmRpdGlvbnMiLCJ1c2VyT3B0aW9ucyIsIlVzZXJPcHRpb25zIiwibGVuZ3RoIiwiRGF0ZSIsImdldE5vdyIsImdldFRpbWUiLCJpIiwicG9sbEZvckNvbmRpdGlvbiIsIndhaXQiLCJtdWx0aXBsaWVyIiwiaXNUaW1lT3V0IiwiZXZhbHVhdGVDb25kaXRpb24iLCJjb25kaXRpb24iLCJpc0FsbENvbmRpdGlvblBhc3NlZCIsIndhaXRUaW1lIiwic2tpcFdhaXQiLCJyZXN1bHQiLCJwdXNoIiwic2V0VGltZW91dCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwidGVzdCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImNoZWNrb3V0QnRucyIsInRleHQiLCJmb3JFYWNoIiwiYnRuIiwidGV4dENvbnRlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9TdHJpbmciLCJtdXRhdGlvbkxpc3QiLCJvYnNlcnZlciIsIm11dGF0aW9uIiwidGFyZ2V0IiwiaHJlZiIsImNvbnRhaW5zIl0sInNvdXJjZVJvb3QiOiIifQ==
