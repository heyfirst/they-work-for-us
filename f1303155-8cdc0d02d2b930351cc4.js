(self.webpackChunkthey_work_for_us=self.webpackChunkthey_work_for_us||[]).push([[1963],{2843:function(t,e,r){"use strict";var n,a,i,o,s=r(4382),c=r(3493),l=r.n(c),d=r(7361),u=r.n(d),p=r(7294),f=r(3219),g=r(5583),h=r(4514);var m=((n={display:"none"})[(0,f.B)(767)]={width:"100%",display:"flex"},n),v=((a={zIndex:"100",position:"absolute",top:"0.5rem",right:"0.5rem",width:"10px",height:"10px",cursor:"pointer",opacity:"0.5"})[(0,f.B)(767)]={right:"0.5rem"},a["&:hover"]={opacity:"1"},a["&:before, &:after"]={position:"absolute",top:"0",right:"1.2rem",content:'""',height:"12px",width:"1px",backgroundColor:"black"},a["&:before"]={transform:"rotate(45deg)"},a["&:after"]={transform:"rotate(-45deg)"},a),b=((i={display:"none"})[(0,f.B)(767)]={width:"100%",display:"flex",position:"relative"},i),y=((o={overflowX:"scroll",background:"rgba(238,240,144, 0.1)"})[(0,f.B)(767)]={height:"43.6rem",marginTop:"2.6rem",overflowY:"hidden",position:"relative"},o["::-webkit-scrollbar-track"]={background:"#DFDFDF"},o["::-webkit-scrollbar"]={height:7,background:"#DFDFDF"},o["::-webkit-scrollbar-thumb"]={background:"#F0324B",borderRadius:6},o),k={width:"7.6rem",height:"2.4rem",borderRadius:"0.3rem",position:"relative",background:"#EEF090",textAlign:"center",fontSize:"1.4rem",marginBottom:"0.8rem",zIndex:9,left:0},w={height:"39.4rem",width:"24rem",position:"sticky",marginTop:"-34rem",left:0,zIndex:150,pointerEvents:"none"},x={fontSize:"1.2rem"},Z={position:"fixed",width:"20.6rem",background:"#fff",boxShadow:"0px 1px 4px rgba(0, 0, 0, 0.25)",borderRadius:"0.4rem",padding:"1.2rem",zIndex:99999,p:{fontSize:"1.2rem",marginBottom:"0.4rem"},a:{textDecoration:"underline",fontSize:"1rem",color:"#999C00"}},E={position:"sticky",width:"100%",left:0,display:"flex",alignItems:"center",p:{fontSize:"1rem",margin:0,padding:0},zIndex:"100"},B={width:"100%",height:"0.1rem"},A=g.PKp().domain(["โดยตำแหน่ง","เลือกโดย คสช.","เลือกกันเอง"]).range(["#999C00","#5739AC","#FEACAC"]);function O(t){var e=t.map((function(t){return t.score})).reduce((function(t,e){return t+e}),0)/t.length,r=[50,60,70,80],n=t.filter((function(t){return t.score<50})).length,a=t.filter((function(t){return t.score>50&&t.score<60})).length,i=t.filter((function(t){return t.score>60&&t.score<70})).length,o=t.filter((function(t){return t.score>70&&t.score<80})).length,s=[{grade:"A",score:t.filter((function(t){return t.score>80})).length},{grade:"B",score:o},{grade:"C",score:i},{grade:"D",score:a},{grade:"F",score:n}],c=r.map((function(e){return t.findIndex((function(t){return Math.floor(t.score)===e}))}));return{criteriaScore:r,posScore:c,meanPos:t.filter((function(t){return Math.floor(t.score)===Math.floor(e)}))[0].id,labelGradeData:s}}function _(t){var e=t.gradeObj;return(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},k),"","","","")},(0,s.tZ)("strong",null,e.grade)," ",(0,s.tZ)("span",{css:(0,s.iv)(Object.assign({},x),"","","","")},e.score," คน"))}var S={name:"s5xdrg",styles:"display:flex;align-items:center"},F={name:"1bzi1gi",styles:"width:10px;height:10px;fill:none;margin-left:8px"},j={name:"i2ed0b",styles:"width:20rem;text-align:center;font-weight:700;color:#AEAEAE;background:rgba(255,255,255,0.8);border-radius:0.3rem"},z={name:"nfrsch",styles:"width:20rem;text-align:center;color:#F0324B;font-weight:700;background:rgba(255,255,255,0.8);border-radius:0.3rem"};e.Z=function(t){var e=(0,h.useStaticQuery)("2451565681"),r=t.senateVoteData,n=t.filter,a=O(r).labelGradeData,i=(0,p.useRef)(null),o=(0,p.useRef)(null),c=(0,p.useState)(null),d=c[0],f=c[1],k=(0,p.useState)({position:"absolute",width:0,left:null,top:null,opacity:0}),x=k[0],Y=k[1];(0,p.useEffect)((function(){!function(t,e,r,n,a,i){var o=O(t),s=o.criteriaScore,c=o.posScore,l=o.meanPos,d=u()(i,"placeholderImage.childImageSharp.fluid.src"),p=e.current.clientWidth,f=r.current.clientWidth,h=16,m=34,v=12e3,b=f/v*p,y=g.Yud().extent([[0,0],[p,88]]).on("brush",(function(){var t=-g.Ba6.selection[0]*(v/f);g.Ys(r.current).style("transform","translate("+t+"px,0px)")})),k=g.Ys(e.current).append("svg").attr("width",p).attr("height",88).style("pointer-events","none"),w=g.tiA().domain(t.map((function(t){return t.id}))).range([0,p]).padding(.2);k.append("g").attr("class","brush").call(y).call(y.move,[0,b]);var x=g.BYU().domain([0,100]).range([88,0]);k.selectAll("timelineBar").data(t).enter().append("rect").attr("class","miniBar").attr("x",(function(t){return w(t.id)})).attr("y",(function(t){return x(t.score)})).attr("width",w.bandwidth()).attr("height",(function(t){return 88-x(t.score)})).attr("fill",(function(t){return A(t.senator_method)})),g.td_(".handle").style("pointer-events","none"),g.Ys(".overlay").style("pointer-events","none"),c.forEach((function(e){-1!==e&&k.append("line").attr("x1",w(t[e].id)).attr("x2",w(t[e].id)).attr("y1",0).attr("y2",88).attr("stroke","#AEAEAE").attr("stroke-dasharray","4")})),k.append("line").attr("x1",w(l)).attr("x2",w(l)).attr("y1",0).attr("y2",88).attr("stroke","#F0324B");var E=g.Ys(r.current).append("svg").attr("height",394+m).attr("width",v).on("wheel.zoom",(function(){var t,e=g.Ys(".brush"),r=g.mN7(e.node()),n=r[1]-r[0],a=w.range(),i=g.VV$(a),o=g.Fp7(a),s=-g.Ba6.deltaX;t=r[0]-s<i?i:r[1]-s>o?o-n:r[0]-s,g.Ba6.stopPropagation(),g.Ba6.preventDefault(),e.call(y.move,[t,t+n])})),B=g.tiA().domain(t.map((function(t){return t.id}))).range([0,v]).paddingInner(.9).paddingOuter(.5);E.append("g").attr("transform","translate(0,378)").call(g.LLu(B).tickSizeOuter(0).tickSizeInner(0).tickFormat((function(t,e){return e+1})));var _=g.BYU().domain([0,100]).range([394,m+40]);E.selectAll("group").data(t).enter().append("g").attr("class","group").append("rect").attr("class","lolliBar").attr("x",(function(t){return B(t.id)})).attr("y",(function(t){return _(t.score)-h})).attr("width",B.bandwidth()).attr("height",(function(t){return 394-_(t.score)})).attr("fill",(function(t){return A(t.senator_method)})),g.td_(".group").append("text").attr("class","percentText").attr("x",(function(t){return B(t.id)-5})).attr("y",(function(t){return _(t.score)-h-20-30})).attr("fill","#828282").attr("font-size","1.2rem").attr("dominant-baseline","middle").text((function(t){return t.score.toFixed(0)+"%"})),g.Ys(".selection").attr("fill","#EEF090").attr("stroke-width",1).attr("stroke","rgba(0,0,0,0.2)").attr("z-index",9999999),s.forEach((function(t,e){var r=100===t?"stroke-width":"stroke-dasharray",n=100===t?1:.5;E.append("line").attr("x1",0).attr("x2",v).attr("y1",_(t)-h).attr("y2",_(t)-h).attr("stroke","#AEAEAE").attr(r,"2").attr("stroke-width",n)})),g.td_(".group").append("svg:defs").append("svg:pattern").attr("id",(function(t,e){return"profile"+e})).attr("width",40).attr("height",40).attr("patternUnits","userSpaceOnUse").append("svg:image").attr("xlink:href",(function(t){return"https://elect.thematter.co/data/politicians/"+t.name+"-"+t.lastname.replace(/ /g,"-")+".jpg"})).on("error",(function(t){g.Ys(this).attr("xlink:href",d)})).attr("fluid",i.placeholderImage.childImageSharp.gatsbyImageData).attr("width",40).attr("height",40).attr("x",0).attr("y",0),g.td_(".group").append("circle").attr("class",(function(t){return"circle"+t.id})).attr("transform",(function(t){return"translate("+(B(t.id)-20+B.bandwidth()/2)+", "+(_(t.score)-h-40)+")"})).attr("cx",20).attr("cy",20).attr("r",20).style("fill","#fff").style("fill",(function(t,e){return"url(#profile"+e+")"})).style("cursor","pointer").attr("stroke","black").attr("stroke-width",1).on("mouseover",(function(t){g.td_("circle").attr("stroke-width",1),g.Ys(".circle"+t.id).attr("stroke-width",2);var e=g.Ba6.clientY-h-120,r=g.Ba6.clientX+250>window.innerWidth?g.Ba6.clientX-200:g.Ba6.clientX+10;n(t),a(Object.assign({},Z,{top:e,left:r,overflow:"hidden",opacity:1}))})).on("click",(function(t){g.Ys("#closeBtn").on("click",(function(){g.Ys(".circle"+t.id).attr("stroke-width",1),a({width:0,height:0,top:null,left:null,opacity:0})}))}))}(r,i,o,f,Y,e)}),[]),(0,p.useEffect)((function(){!function(t){"โดยตำแหน่ง"===t||"เลือกโดย คสช."===t||"เลือกกันเอง"===t?(g.td_(".group").style("opacity",(function(e){return t!==e.senator_method?"0.1":"1"})),g.td_(".miniBar").style("opacity",(function(e){return t!==e.senator_method?"0.1":"1"}))):(g.td_(".group").style("opacity",(function(t){return"1"})),g.td_(".miniBar").style("opacity",(function(t){return"1"})))}(n)}),[n]);var I=(0,p.useState)(!1),D=(I[0],I[1]),C=(0,p.useState)(0),V=C[0],M=C[1];return(0,p.useEffect)((function(){function t(){var t=window.pageYOffset;D(!(t>V)),M(t<=0?0:t)}return Y({position:"absolute",width:0,height:0,top:null,left:null,opacity:0}),window.addEventListener("scroll",l()(t,1e4)),window.addEventListener("scroll",l()(t,1e4))}),[V]),(0,s.tZ)("div",null,d?(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},x),"","","","")},(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},v),"","","",""),id:"closeBtn"}),(0,s.tZ)("strong",null,(0,s.tZ)("p",null,d.title," ",d.name," ",d.lastname)),(0,s.tZ)("p",null,"ระยะเวลาทำงาน 145 ครั้ง"),(0,s.tZ)("p",null,"เข้าลงมติ ",d.votelog," ครั้ง"),(0,s.tZ)("a",{href:"https://theyworkforus.elect.in.th/people/"+d.name+"-"+d.lastname.replace(/ /g,"-"),target:"_blank",rel:"noopener noreferrer",css:S},"ดูโปรไฟล์",(0,s.tZ)("svg",{css:F},(0,s.tZ)("path",{d:"M2.49999 1.66663H0.833328V9.16663H8.33333V7.49996",stroke:"#999C00"}),(0,s.tZ)("line",{x1:"8.68688",y1:"1.18693",x2:"3.68688",y2:"6.18693",stroke:"#999C00"}),(0,s.tZ)("path",{d:"M5 0.833374H9.16667V5.00004",stroke:"#999C00"})))):(0,s.tZ)(p.Fragment,null),(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},b),"","","",""),id:"timeline-viz"},(0,s.tZ)("div",{ref:i,css:(0,s.iv)(Object.assign({},m),"","","","")})),(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},y),"","","",""),className:"senate_scroll"},(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},E,{top:"8rem",pointerEvents:"none"}),"","","","")},(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},B,{background:"#AEAEAE"}),"","","","")}),(0,s.tZ)("p",{css:j},"คะแนนเต็ม 100%"),(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},B,{background:"#AEAEAE"}),"","","","")})),(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},E,{top:"16rem",pointerEvents:"none"}),"","","","")},(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},B,{background:"#F0324B"}),"","","","")}),(0,s.tZ)("p",{css:z},"คะแนนเฉลี่ย 75%"),(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},B,{background:"#F0324B"}),"","","","")})),(0,s.tZ)("div",{ref:o}),(0,s.tZ)("div",{css:(0,s.iv)(Object.assign({},w),"","","","")},a.map((function(t,e){return(0,s.tZ)(_,{gradeObj:t,key:e})})))))}}}]);
//# sourceMappingURL=f1303155-8cdc0d02d2b930351cc4.js.map