(self.webpackChunkthey_work_for_us=self.webpackChunkthey_work_for_us||[]).push([[1933],{2580:function(t,n,e){e(5743),t.exports=function(){"use strict";var t=1e3,n=6e4,e=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",h="month",f="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},v={s:m,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),i=n.clone().add(r,h),s=e-i<0,u=n.clone().add(r+(s?-1:1),h);return+(-(r+(e-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:h,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=y;var S=function(t){return t instanceof O},p=function t(n,e,r){var i;if(!n)return g;if("string"==typeof n){var s=n.toLowerCase();D[s]&&(i=s),e&&(D[s]=e,i=s);var u=n.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=n.name;D[a]=n,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,n){if(S(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new O(e)},_=v;_.l=p,_.i=S,_.w=function(t,n){return w(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var O=function(){function y(t){this.$L=p(t.locale,null,!0),this.parse(t)}var m=y.prototype;return m.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(_.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return _},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,n){var e=w(t);return this.startOf(n)<=e&&e<=this.endOf(n)},m.isAfter=function(t,n){return w(t)<this.startOf(n)},m.isBefore=function(t,n){return this.endOf(n)<w(t)},m.$g=function(t,n,e){return _.u(t)?this[n]:this.set(e,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,n){var e=this,r=!!_.u(n)||n,f=_.p(t),$=function(t,n){var i=_.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?i:i.endOf(a)},l=function(t,n){return _.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},M=this.$W,y=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case c:return r?$(1,0):$(31,11);case h:return r?$(1,y):$(0,y+1);case o:var g=this.$locale().weekStart||0,D=(M<g?M+7:M)-g;return $(r?m-D:m+(6-D),y);case a:case d:return l(v+"Hours",0);case u:return l(v+"Minutes",1);case s:return l(v+"Seconds",2);case i:return l(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,n){var e,o=_.p(t),f="set"+(this.$u?"UTC":""),$=(e={},e[a]=f+"Date",e[d]=f+"Date",e[h]=f+"Month",e[c]=f+"FullYear",e[u]=f+"Hours",e[s]=f+"Minutes",e[i]=f+"Seconds",e[r]=f+"Milliseconds",e)[o],l=o===a?this.$D+(n-this.$W):n;if(o===h||o===c){var M=this.clone().set(d,1);M.$d[$](l),M.init(),this.$d=M.set(d,Math.min(this.$D,M.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,n){return this.clone().$set(t,n)},m.get=function(t){return this[_.p(t)]()},m.add=function(r,f){var d,$=this;r=Number(r);var l=_.p(f),M=function(t){var n=w($);return _.w(n.date(n.date()+Math.round(t*r)),$)};if(l===h)return this.set(h,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return M(1);if(l===o)return M(7);var y=(d={},d[s]=n,d[u]=e,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*y;return _.w(m,this)},m.subtract=function(t,n){return this.add(-1*t,n)},m.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),s=this.$H,u=this.$m,a=this.$M,o=e.weekdays,h=e.months,f=function(t,e,i,s){return t&&(t[e]||t(n,r))||i[e].slice(0,s)},c=function(t){return _.s(s%12||12,t,"0")},d=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:_.s(a+1,2,"0"),MMM:f(e.monthsShort,a,h,3),MMMM:f(h,a),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:f(e.weekdaysMin,this.$W,o,2),ddd:f(e.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:_.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:_.s(u,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(M,(function(t,n){return n||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,M=_.p(d),y=w(r),m=(y.utcOffset()-this.utcOffset())*n,v=this-y,g=_.m(this,y);return g=(l={},l[c]=g/12,l[h]=g,l[f]=g/3,l[o]=(v-m)/6048e5,l[a]=(v-m)/864e5,l[u]=v/e,l[s]=v/n,l[i]=v/t,l)[M]||v,$?g:_.a(g)},m.daysInMonth=function(){return this.endOf(h).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=p(t,n,!0);return r&&(e.$L=r),e},m.clone=function(){return _.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},y}(),b=O.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",h],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),w.extend=function(t,n){return t.$i||(t(n,O,w),t.$i=!0),w},w.locale=p,w.isDayjs=S,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}()},3366:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)e=s[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}e.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-templates-votelog-list-template-js-71e4967d9ae856b350a5.js.map