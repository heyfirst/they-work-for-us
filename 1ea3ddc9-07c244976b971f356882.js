(self.webpackChunkthey_work_for_us=self.webpackChunkthey_work_for_us||[]).push([[3745],{5614:function(e,t,o){"use strict";var r=o(7329),i=o(2122),n=o(3552),a=o(4382),l=o(3311),c=o.n(l),s=o(3105),m=o.n(s),v=o(7294),p=o(4514),u=o(9501);var d=Object.assign({},{paddingBottom:"8rem"},{background:"var(--cl-white)"}),f=[{text:"ทั้งหมด",choice:0},{text:"เห็นด้วย",choice:1},{text:"ไม่เห็นด้วย",choice:2},{text:"งดออกเสียง",choice:3},{text:"ไม่ลงคะแนน",choice:4}],h={1:"var(--cl-vote-yes)",2:"var(--cl-vote-no)",3:"var(--cl-vote-abstained)",4:"#272727","":"-"},g={1:"เห็นด้วย",2:"ไม่เห็นด้วย",3:"งดออกเสียง",4:"ไม่ลงคะแนน","":"-"},b={name:"p686fh",styles:"font-family:var(--ff-title);font-size:2.4rem"},k={name:"co91ok",styles:"font-size:1.5rem;margin:15px 0px"},y=function(e){var t=e.choice,o=e.fields,r=e.title,i=(e.legal_title,e.vote_date);return(0,a.tZ)(p.Link,{to:o.slug,css:(0,a.iv)({display:"block",color:"var(--cl-black)",padding:"0.5rem 2rem",fontSize:"2.4rem",borderRadius:4,border:"1px solid black",borderLeft:"1rem solid "+h[t],margin:"20px 0px","&:hover":{textDecoration:"none"}},"","","","")},(0,a.tZ)("div",{css:(0,a.iv)({color:"3"===t?"var(--cl-black)":h[t],margin:"15px 0px",fontSize:"2.4rem"},"","","","")},(0,a.tZ)("div",{css:(0,a.iv)({display:"inline-block",height:15,width:15,marginRight:10,backgroundColor:h[t]},"","","","")}),g[t]),(0,a.tZ)("p",{css:b},r),(0,a.tZ)("p",{css:k},(0,u.p6)(i)))},x={name:"1rj4qp",styles:"font-size:4.8rem;text-align:center;margin-bottom:3rem"},Z={name:"1pcmrxu",styles:"display:block;list-style:none;text-align:center;> li{display:inline-block;font-size:2.4rem;padding:1rem 0 0;margin:0 1rem;cursor:pointer;&.active{border-bottom:8px solid var(--cl-black);}}"},_={name:"1xbzohv",styles:"font-family:var(--ff-title);font-size:3.2rem;text-align:center;margin:6rem 0"},z=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={allVote:t.props.allVote,activeFilter:0},t.handleFilter=function(e){var o=t.props.allVote;0===e||(o=m()(o,(function(t){return t.choice===String(e)}))),t.setState({allVote:o,activeFilter:e})},t}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this,t=this.state,o=t.allVote,r=t.activeFilter;return(0,a.tZ)("section",{css:(0,a.iv)(Object.assign({},d,{paddingTop:"6rem"}),"","","","")},(0,a.tZ)("div",{className:"container"},(0,a.tZ)("h2",{css:x},"สรุปการลงมติในสภา"),(0,a.tZ)("ul",{css:Z},f.map((function(t){var o=t.text,i=t.choice;return(0,a.tZ)("li",{key:i,className:r===i?"active":"",onClick:function(){return e.handleFilter(i)},style:r===i?{borderBottomColor:h[i]}:null},o)}))),o.length>0?o.map((function(e){return(0,a.tZ)(y,(0,i.Z)({key:e.id},e))})):(0,a.tZ)("div",{css:_},"ยังไม่เคยลงมติประเภทนี้")))},t}(v.Component);t.Z=function(e){var t=e.peopleVoteYaml,o=e.allVotelogYaml,i=t.votelog||[],n=(0,r.Z)(o.nodes);n.forEach((function(e){var t=c()(i,["key",e.id]);t&&(e.choice=t.value)}));var l=n.filter((function(e){return e.choice})).sort((function(e,t){return t.vote_date.localeCompare(e.vote_date)}));return(0,a.tZ)(z,{allVote:l})}}}]);
//# sourceMappingURL=1ea3ddc9-07c244976b971f356882.js.map