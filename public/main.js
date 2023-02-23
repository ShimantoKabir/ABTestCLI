(()=>{"use strict";var t={211:(t,e)=>{var n;Object.defineProperty(e,"__esModule",{value:!0}),e.TestInfo=void 0,(n=e.TestInfo||(e.TestInfo={})).ID="BL027",n.SITE="baliblinds",n.CLIENT="brainlab",n.VARIATION="1"},803:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MainComponent=void 0;var o=n(951),i=n(211),s=n(897);e.MainComponent=function(){var t=this;this.mobileTabSelector="div.mobile-tabs-selector",this.optionModes=[],this.init=function(){var e;document.querySelectorAll(t.mobileTabSelector+">select>option").forEach((function(e){t.optionModes.push({href:e.value,text:e.innerText})})),null===(e=document.querySelector(t.mobileTabSelector))||void 0===e||e.classList.add(i.TestInfo.ID+"__hide");var n=new s.SwappableMobileTabComponent;n.render(t.optionModes),window.addEventListener("resize",(function(){n.showOnlyOnMobile(window.innerWidth)}),!0)},o.Initializer.init(i.TestInfo,"0.0.2")}},897:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SwappableMobileTabComponent=void 0;var o=n(211),i=n(90);e.SwappableMobileTabComponent=function(){var t=this;this.tabSectionSelector="section.tabs-section",this.getHtml=function(t){return'<div class="'.concat(o.TestInfo.ID,'__swappable-mobile-tab container" >\n      ').concat(t.map((function(t){return i.TabComponent.render(t)})).join("\n"),"\n    </div>")},this.render=function(e){var n;null===(n=document.querySelector(t.tabSectionSelector))||void 0===n||n.insertAdjacentHTML("beforeend",t.getHtml(e))},this.showOnlyOnMobile=function(t){var e=document.querySelector("div."+o.TestInfo.ID+"__swappable-mobile-tab");t>=768?null==e||e.classList.add(o.TestInfo.ID+"__hide"):null==e||e.classList.remove(o.TestInfo.ID+"__hide")}}},90:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.TabComponent=void 0;var n=function(){function t(){}return t.isActive=function(t){return!window.location.search&&t.text===this.defaultActiveText||-1!==window.location.href.indexOf(t.href)},t.defaultActiveText="Shades",t.render=function(e){return"<a ".concat(t.isActive(e)?"class='active'":"",' href="https://www.baliblinds.com').concat(e.href,'" >').concat(e.text,"</a>").trim()},t}();e.TabComponent=n},951:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Initializer=void 0;var n=function(){function t(){}return t.init=function(t,e){document.documentElement.classList.add(t.ID),document.documentElement.classList.add("".concat(t.ID,"-").concat(t.VARIATION)),console.info("ID: ".concat(t.ID,", VARIATION: ").concat(t.VARIATION,", VERSION: ").concat(e," is running.....!"))},t}();e.Initializer=n},454:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Poller=void 0;var o=n(704);e.Poller=function(){var t=this;this.options=null,this.timeout=null,this.successfulConditions=[],this.callback=function(){},this.conditionsLength=0,this.poll=function(e,n,i){t.callback=n,t.options=new o.UserOptions,t.conditionsLength=e.length,i&&(t.options=i),t.timeout=t.options.timeout?new Date(t.getNow()+t.options.timeout).getTime():null;for(var s=0;s<e.length;s++)t.pollForCondition(e[s],t.options.wait,!0,t.options.multiplier)},this.getNow=function(){return(new Date).getTime()},this.isTimeOut=function(){return!!(t.timeout&&t.getNow()>t.timeout)},this.evaluateCondition=function(t){return!!t&&("function"==typeof t?t():!("string"!=typeof t||!document.querySelector(t)))},this.isAllConditionPassed=function(){return t.conditionsLength===t.successfulConditions.length},this.pollForCondition=function(e,n,o,i){if(t.timeout&&t.isTimeOut())return!1;var s=t.evaluateCondition(e);return s?(t.successfulConditions.push(s),t.isAllConditionPassed()&&t.callback(t.successfulConditions)):setTimeout((function(){t.pollForCondition(e,n*i,o,i)}),o?0:n),!0}}},704:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.UserOptions=void 0;e.UserOptions=function(){this.wait=50,this.multiplier=1.1,this.timeout=0}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}(()=>{var t=n(454),e=n(803);if(!/MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent)){var o=new e.MainComponent;(new t.Poller).poll(["body","div.mobile-tabs-selector",function(){return window.innerWidth<768}],o.init)}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFBZixRQUFrQixDQUNwQixDLEdDSEl3QixFQUEyQixDQUFDLEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFFLFFBR3JCLElBQUlDLEVBQVNOLEVBQXlCRSxHQUFZLENBR2pERyxRQUFTLENBQUMsR0FPWCxPQUhBRSxFQUFvQkwsR0FBVUksRUFBUUEsRUFBT0QsUUFBU0osR0FHL0NLLEVBQU9ELE9BQ2YsQyxNQ3RCQSxhQUNBLFNBVUEsSUFSaUIsNENBQTRDRyxLQUMzRDlELE9BQU8rRCxVQUFVQyxXQU9KLENBQ2IsSUFBTUMsRUFBTyxJQUFJLEVBQUFyRixlQUNGLElBQUksRUFBQWdELFFBQ1pNLEtBQUssQ0FBQyxPQUFRLDJCQVBBLFdBQ3JCLE9BQU9sQyxPQUFPRyxXQUFhLEdBQzdCLEdBS29FOEQsRUFBS2xGLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2JhbGlibGluZHMvQkwwMjcvY29tbW9uL3Rlc3QuaW5mby50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2JhbGlibGluZHMvQkwwMjcvY29tcG9uZW50cy9tYWluLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy9jbGllbnRzL2JyYWlubGFiL2JhbGlibGluZHMvQkwwMjcvY29tcG9uZW50cy9zd2FwcGFibGUtbW9iaWxlLXRhYi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvY2xpZW50cy9icmFpbmxhYi9iYWxpYmxpbmRzL0JMMDI3L2NvbXBvbmVudHMvdGFiLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy91dGlsaXRpZXMvaW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vYWItdGVzdC10cy1jbGkvLi9zcmMvdXRpbGl0aWVzL3BvbGxlci50cyIsIndlYnBhY2s6Ly9hYi10ZXN0LXRzLWNsaS8uL3NyYy91dGlsaXRpZXMvdXNlci5vcHRpb25zLnRzIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FiLXRlc3QtdHMtY2xpLy4vc3JjL2NsaWVudHMvYnJhaW5sYWIvYmFsaWJsaW5kcy9CTDAyNy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBUZXN0SW5mbyB7SUQgPSAnQkwwMjcnLCBTSVRFID0gJ2JhbGlibGluZHMnLCBDTElFTlQgPSAnYnJhaW5sYWInLCBWQVJJQVRJT04gPSAnMSd9XG4gICAgIiwiaW1wb3J0IHsgSW5pdGlhbGl6ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2luaXRpYWxpemVyXCI7XHJcbmltcG9ydCB7IFRlc3RJbmZvIH0gZnJvbSBcIi4uL2NvbW1vbi90ZXN0LmluZm9cIjtcclxuaW1wb3J0IHsgT3B0aW9uTW9kZWwgfSBmcm9tIFwiLi4vbW9kZXMvb3B0aW9uLm1vZGVsXCI7XHJcbmltcG9ydCB7IFN3YXBwYWJsZU1vYmlsZVRhYkNvbXBvbmVudCB9IGZyb20gXCIuL3N3YXBwYWJsZS1tb2JpbGUtdGFiLmNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgbW9iaWxlVGFiU2VsZWN0b3I6IHN0cmluZyA9IFwiZGl2Lm1vYmlsZS10YWJzLXNlbGVjdG9yXCI7XHJcbiAgcHJpdmF0ZSBvcHRpb25Nb2RlczogT3B0aW9uTW9kZWxbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIEluaXRpYWxpemVyLmluaXQoVGVzdEluZm8sIFwiMC4wLjJcIik7XHJcbiAgfVxyXG5cclxuICBpbml0ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgbW9iaWxlVGFiRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MU2VsZWN0RWxlbWVudD4oXHJcbiAgICAgIHRoaXMubW9iaWxlVGFiU2VsZWN0b3IgKyBcIj5zZWxlY3Q+b3B0aW9uXCJcclxuICAgICk7XHJcblxyXG4gICAgbW9iaWxlVGFiRWxtLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLm9wdGlvbk1vZGVzLnB1c2goe1xyXG4gICAgICAgIGhyZWY6IG9wdGlvbi52YWx1ZSxcclxuICAgICAgICB0ZXh0OiBvcHRpb24uaW5uZXJUZXh0LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMubW9iaWxlVGFiU2VsZWN0b3IpXHJcbiAgICAgID8uY2xhc3NMaXN0LmFkZChUZXN0SW5mby5JRCArIFwiX19oaWRlXCIpO1xyXG5cclxuICAgIGNvbnN0IHN3YXBwYWJsZU1vYmlsZVRhYkNvbXBvbmVudCA9IG5ldyBTd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQoKTtcclxuICAgIHN3YXBwYWJsZU1vYmlsZVRhYkNvbXBvbmVudC5yZW5kZXIodGhpcy5vcHRpb25Nb2Rlcyk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwicmVzaXplXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBzd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQuc2hvd09ubHlPbk1vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRydWVcclxuICAgICk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBUZXN0SW5mbyB9IGZyb20gXCIuLi9jb21tb24vdGVzdC5pbmZvXCI7XHJcbmltcG9ydCB7IE9wdGlvbk1vZGVsIH0gZnJvbSBcIi4uL21vZGVzL29wdGlvbi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tIFwiLi90YWIuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3dhcHBhYmxlTW9iaWxlVGFiQ29tcG9uZW50IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHRhYlNlY3Rpb25TZWxlY3Rvcjogc3RyaW5nID0gXCJzZWN0aW9uLnRhYnMtc2VjdGlvblwiO1xyXG5cclxuICBnZXRIdG1sID0gKG9wdGlvbk1vZGVzOiBPcHRpb25Nb2RlbFtdKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7VGVzdEluZm8uSUR9X19zd2FwcGFibGUtbW9iaWxlLXRhYiBjb250YWluZXJcIiA+XHJcbiAgICAgICR7b3B0aW9uTW9kZXNcclxuICAgICAgICAubWFwKChvcHRpb25Nb2RlbCkgPT4gVGFiQ29tcG9uZW50LnJlbmRlcihvcHRpb25Nb2RlbCkpXHJcbiAgICAgICAgLmpvaW4oXCJcXG5cIil9XHJcbiAgICA8L2Rpdj5gO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlciA9IChvcHRpb25Nb2RlczogT3B0aW9uTW9kZWxbXSk6IHZvaWQgPT4ge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy50YWJTZWN0aW9uU2VsZWN0b3IpXHJcbiAgICAgID8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIHRoaXMuZ2V0SHRtbChvcHRpb25Nb2RlcykpO1xyXG4gIH07XHJcblxyXG4gIHNob3dPbmx5T25Nb2JpbGUgPSAod2lkdGg6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgdGFiRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCJkaXYuXCIgKyBUZXN0SW5mby5JRCArIFwiX19zd2FwcGFibGUtbW9iaWxlLXRhYlwiXHJcbiAgICApO1xyXG4gICAgaWYgKHdpZHRoID49IDc2OCkge1xyXG4gICAgICB0YWJFbG0/LmNsYXNzTGlzdC5hZGQoVGVzdEluZm8uSUQgKyBcIl9faGlkZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhYkVsbT8uY2xhc3NMaXN0LnJlbW92ZShUZXN0SW5mby5JRCArIFwiX19oaWRlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgT3B0aW9uTW9kZWwgfSBmcm9tIFwiLi4vbW9kZXMvb3B0aW9uLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBkZWZhdWx0QWN0aXZlVGV4dDogc3RyaW5nID0gXCJTaGFkZXNcIjtcclxuXHJcbiAgc3RhdGljIHJlbmRlciA9IChvcHRpb25Nb2RlbDogT3B0aW9uTW9kZWwpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgaHRtbCA9IGA8YSAke1xyXG4gICAgICBUYWJDb21wb25lbnQuaXNBY3RpdmUob3B0aW9uTW9kZWwpID8gXCJjbGFzcz0nYWN0aXZlJ1wiIDogXCJcIlxyXG4gICAgfSBocmVmPVwiaHR0cHM6Ly93d3cuYmFsaWJsaW5kcy5jb20ke29wdGlvbk1vZGVsLmhyZWZ9XCIgPiR7XHJcbiAgICAgIG9wdGlvbk1vZGVsLnRleHRcclxuICAgIH08L2E+YDtcclxuICAgIHJldHVybiBodG1sLnRyaW0oKTtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgaXNBY3RpdmUob3B0aW9uTW9kZWw6IE9wdGlvbk1vZGVsKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF3aW5kb3cubG9jYXRpb24uc2VhcmNoICYmXHJcbiAgICAgIG9wdGlvbk1vZGVsLnRleHQgPT09IHRoaXMuZGVmYXVsdEFjdGl2ZVRleHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZihvcHRpb25Nb2RlbC5ocmVmKSA9PT0gLTEgPyBmYWxzZSA6IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbml0aWFsaXplciB7XHJcbiAgc3RhdGljIGluaXQgPSAoXHJcbiAgICB0ZXN0SW5mbzoge1xyXG4gICAgICBJRDogc3RyaW5nO1xyXG4gICAgICBTSVRFOiBzdHJpbmc7XHJcbiAgICAgIENMSUVOVDogc3RyaW5nO1xyXG4gICAgICBWQVJJQVRJT046IHN0cmluZztcclxuICAgIH0sXHJcbiAgICB2ZXJzaW9uOiBzdHJpbmdcclxuICApOiB2b2lkID0+IHtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRlc3RJbmZvLklEKTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFxyXG4gICAgICBgJHt0ZXN0SW5mby5JRH0tJHt0ZXN0SW5mby5WQVJJQVRJT059YFxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUuaW5mbyhcclxuICAgICAgYElEOiAke3Rlc3RJbmZvLklEfSwgVkFSSUFUSU9OOiAke3Rlc3RJbmZvLlZBUklBVElPTn0sIFZFUlNJT046ICR7dmVyc2lvbn0gaXMgcnVubmluZy4uLi4uIWBcclxuICAgICk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBVc2VyT3B0aW9ucyB9IGZyb20gXCIuL3VzZXIub3B0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvbGxlciB7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBVc2VyT3B0aW9ucyB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgdGltZW91dDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzdWNjZXNzZnVsQ29uZGl0aW9uczogYm9vbGVhbltdID0gW107XHJcbiAgcHJpdmF0ZSBjYWxsYmFjazogRnVuY3Rpb24gPSAoKSA9PiB7fTtcclxuICBwcml2YXRlIGNvbmRpdGlvbnNMZW5ndGg6IG51bWJlciA9IDA7XHJcblxyXG4gIHBvbGwgPSAoXHJcbiAgICBjb25kaXRpb25zOiAoRnVuY3Rpb24gfCBzdHJpbmcpW10sXHJcbiAgICBjYWxsYmFjazogRnVuY3Rpb24sXHJcbiAgICB1c2VyT3B0aW9ucz86IFVzZXJPcHRpb25zXHJcbiAgKSA9PiB7XHJcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBuZXcgVXNlck9wdGlvbnMoKTtcclxuICAgIHRoaXMuY29uZGl0aW9uc0xlbmd0aCA9IGNvbmRpdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgIGlmICh1c2VyT3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSB1c2VyT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRpbWVvdXQgPSB0aGlzLm9wdGlvbnMudGltZW91dFxyXG4gICAgICA/IG5ldyBEYXRlKHRoaXMuZ2V0Tm93KCkgKyB0aGlzLm9wdGlvbnMudGltZW91dCkuZ2V0VGltZSgpXHJcbiAgICAgIDogbnVsbDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy5wb2xsRm9yQ29uZGl0aW9uKFxyXG4gICAgICAgIGNvbmRpdGlvbnNbaV0sXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLndhaXQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICB0aGlzLm9wdGlvbnMubXVsdGlwbGllclxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGdldE5vdyA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIH07XHJcblxyXG4gIGlzVGltZU91dCA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIGlmICh0aGlzLnRpbWVvdXQgJiYgdGhpcy5nZXROb3coKSA+IHRoaXMudGltZW91dCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBldmFsdWF0ZUNvbmRpdGlvbiA9IChjb25kaXRpb246IEZ1bmN0aW9uIHwgc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoIWNvbmRpdGlvbikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gY29uZGl0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb25kaXRpb24gPT09IFwic3RyaW5nXCIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25kaXRpb24pKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBpc0FsbENvbmRpdGlvblBhc3NlZCA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbnNMZW5ndGggPT09IHRoaXMuc3VjY2Vzc2Z1bENvbmRpdGlvbnMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gIHBvbGxGb3JDb25kaXRpb24gPSAoXHJcbiAgICBjb25kaXRpb246IEZ1bmN0aW9uIHwgc3RyaW5nLFxyXG4gICAgd2FpdFRpbWU6IG51bWJlcixcclxuICAgIHNraXBXYWl0OiBib29sZWFuLFxyXG4gICAgbXVsdGlwbGllcjogbnVtYmVyXHJcbiAgKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodGhpcy50aW1lb3V0ICYmIHRoaXMuaXNUaW1lT3V0KCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKTtcclxuXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHRoaXMuc3VjY2Vzc2Z1bENvbmRpdGlvbnMucHVzaChyZXN1bHQpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNBbGxDb25kaXRpb25QYXNzZWQoKSkge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5zdWNjZXNzZnVsQ29uZGl0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wb2xsRm9yQ29uZGl0aW9uKFxyXG4gICAgICAgICAgICBjb25kaXRpb24sXHJcbiAgICAgICAgICAgIHdhaXRUaW1lICogbXVsdGlwbGllcixcclxuICAgICAgICAgICAgc2tpcFdhaXQsXHJcbiAgICAgICAgICAgIG11bHRpcGxpZXJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBza2lwV2FpdCA/IDAgOiB3YWl0VGltZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFVzZXJPcHRpb25zIHtcclxuICB3YWl0OiBudW1iZXIgPSA1MDtcclxuICBtdWx0aXBsaWVyOiBudW1iZXIgPSAxLjE7XHJcbiAgdGltZW91dDogbnVtYmVyID0gMDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgUG9sbGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxpdGllcy9wb2xsZXJcIjtcclxuaW1wb3J0IHsgTWFpbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IGllQ2hlY2tzID0gL01TSUV8VHJpZGVudHxFZGdlXFwvKDEyfDEzfDE0fDE1fDE2fDE3fDE4KS8udGVzdChcclxuICB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4pO1xyXG5cclxuY29uc3QgaXNNb2JpbGVEZXZpY2UgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4O1xyXG59O1xyXG5cclxuaWYgKCFpZUNoZWNrcykge1xyXG4gIGNvbnN0IG1haW4gPSBuZXcgTWFpbkNvbXBvbmVudCgpO1xyXG4gIGNvbnN0IHBvbGxlciA9IG5ldyBQb2xsZXIoKTtcclxuICBwb2xsZXIucG9sbChbXCJib2R5XCIsIFwiZGl2Lm1vYmlsZS10YWJzLXNlbGVjdG9yXCIsIGlzTW9iaWxlRGV2aWNlXSwgbWFpbi5pbml0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiVGVzdEluZm8iLCJNYWluQ29tcG9uZW50IiwibW9iaWxlVGFiU2VsZWN0b3IiLCJvcHRpb25Nb2RlcyIsImluaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwib3B0aW9uIiwicHVzaCIsImhyZWYiLCJ2YWx1ZSIsInRleHQiLCJpbm5lclRleHQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiSUQiLCJzd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQiLCJTd2FwcGFibGVNb2JpbGVUYWJDb21wb25lbnQiLCJyZW5kZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd09ubHlPbk1vYmlsZSIsImlubmVyV2lkdGgiLCJJbml0aWFsaXplciIsInRhYlNlY3Rpb25TZWxlY3RvciIsImdldEh0bWwiLCJtYXAiLCJvcHRpb25Nb2RlbCIsIlRhYkNvbXBvbmVudCIsImpvaW4iLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ3aWR0aCIsInRhYkVsbSIsInJlbW92ZSIsImlzQWN0aXZlIiwibG9jYXRpb24iLCJzZWFyY2giLCJ0aGlzIiwiZGVmYXVsdEFjdGl2ZVRleHQiLCJpbmRleE9mIiwidHJpbSIsInRlc3RJbmZvIiwidmVyc2lvbiIsImRvY3VtZW50RWxlbWVudCIsIlZBUklBVElPTiIsImNvbnNvbGUiLCJpbmZvIiwiUG9sbGVyIiwib3B0aW9ucyIsInRpbWVvdXQiLCJzdWNjZXNzZnVsQ29uZGl0aW9ucyIsImNhbGxiYWNrIiwiY29uZGl0aW9uc0xlbmd0aCIsInBvbGwiLCJjb25kaXRpb25zIiwidXNlck9wdGlvbnMiLCJVc2VyT3B0aW9ucyIsImxlbmd0aCIsIkRhdGUiLCJnZXROb3ciLCJnZXRUaW1lIiwiaSIsInBvbGxGb3JDb25kaXRpb24iLCJ3YWl0IiwibXVsdGlwbGllciIsImlzVGltZU91dCIsImV2YWx1YXRlQ29uZGl0aW9uIiwiY29uZGl0aW9uIiwiaXNBbGxDb25kaXRpb25QYXNzZWQiLCJ3YWl0VGltZSIsInNraXBXYWl0IiwicmVzdWx0Iiwic2V0VGltZW91dCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9