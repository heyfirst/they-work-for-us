"use strict";(self.webpackChunkthey_work_for_us=self.webpackChunkthey_work_for_us||[]).push([[6018],{9325:function(t,e,n){n.r(e);var l=n(4382),s=n(3366),i=(n(7294),n(4514)),a=n(6125),o=n(2584),r=n(4164),m=n(9501),c=n(7714),p=n(8331),u=n(5614),g=n(5117),Z=n(305),f=n(143),d=["person","peopleVoteYaml","partyYaml","allVotelogYaml"];var h={fontSize:"4rem"},v={fontSize:"2.4rem"},y={paddingTop:"3rem",paddingBottom:"8rem",h2:{fontSize:"4.8rem",textAlign:"center"}},b=Object.assign({},y,{color:"var(--cl-white)",background:"var(--cl-black)",h2:Object.assign({},y.h2,{color:"var(--cl-white)"}),blockquote:{color:"var(--cl-white)",lineHeight:1.8,border:"none",fontSize:"3.6rem",fontStyle:"normal",fontFamily:"var(--ff-title)"}}),_={fontSize:"2.4rem",textAlign:"left",margin:"1.5rem 0 1.2rem 0"},k={fontSize:"1.8rem",p:{marginBottom:"1rem"},a:{color:"var(--cl-black)",textDecoration:"underline"},".official-website a":{textDecoration:"none"}},x={name:"1efi8gv",styles:"font-weight:bold"},w=function(t){return(0,l.tZ)("div",null,t.is_mp?(0,l.tZ)("p",{css:x},t.party?(0,l.tZ)(i.Link,{to:"/party/"+t.party},"พรรค ",t.party):"ไม่สังกัดพรรค"):null)},z={name:"1efi8gv",styles:"font-weight:bold"},N={name:"1efi8gv",styles:"font-weight:bold"},S={name:"1efi8gv",styles:"font-weight:bold"},Y={name:"1efi8gv",styles:"font-weight:bold"},j=function(t){return(0,l.tZ)("div",null,t.is_cabinet?(0,l.tZ)("p",{css:z},"คณะรัฐมนตรี"):null,t.is_senator?(0,l.tZ)("p",{css:N},"สมาชิกวุฒิสภา ",t.senator_method):null,t.is_mp?"แบ่งเขต"===t.mp_type?(0,l.tZ)("p",{css:S},"สมาชิกสภาผู้แทนราษฎร แบ่งเขต จังหวัด ",t.mp_province,"เขต ",t.mp_zone," จากคะแนนโหวต ",(0,m.uf)(t.vote)," คะแนน"):(0,l.tZ)("p",{css:Y},"สมาชิกสภาผู้แทนราษฎร บัญชีรายชื่อ ลำดับที่ ",t.mp_list):null)},O={name:"18stq5z",styles:"font-size:1.4rem"},q=function(t){return(0,l.tZ)("div",{css:O},t.cabinet_position.length>0?(0,l.tZ)("p",null,t.cabinet_position.map((function(t,e){return(0,l.tZ)("span",{key:t},e>0&&", ",t," ")}))):null,t.committee.length>0?(0,l.tZ)("p",null,t.committee.filter((function(t){return t.set&&t.position})).map((function(t,e){return(0,l.tZ)("span",{key:t.set+" "+t.position},e>0&&", ",t.position," ",t.set," ")}))):null)},V=function(t){return(0,l.tZ)("p",null,(0,l.tZ)("span",null,(0,l.tZ)("strong",null,"เพศ")," ",t.gender)," ",(0,l.tZ)("span",null,(0,l.tZ)("strong",null,"อายุ")," ",(0,m.QM)(t.birthdate)," ปี")," ",(0,l.tZ)("span",null,(0,l.tZ)("strong",null,"การศึกษา")," ",t.education)," ",(0,l.tZ)("span",null,t.graduation,t.degree?" ("+t.degree+")":null)," ",(0,l.tZ)("span",null,(0,l.tZ)("strong",null,"อาชีพเดิม")," ",t.ex_occupation))},A=function(t){return(0,l.tZ)("p",null,(0,l.tZ)("span",null,(0,l.tZ)("strong",null,"ทรัพย์สิน")," ",null===t.asset?"ไม่มีข้อมูล":(0,m.uf)(t.asset)+" บาท")," ",(0,l.tZ)("span",null,(0,l.tZ)("strong",null,"หนี้สิน")," ",null===t.debt?"ไม่มีข้อมูล":(0,m.uf)(t.debt)+" บาท")," ",""!==t.mp_type&&(e=t.name,n=t.lastname,s=t.party,(0,l.tZ)(c.Z,{href:"https://elect.in.th/politics-and-business/#/p/"+s+"/person/"+e+" "+n},(0,l.tZ)("strong",null,"ตรวจสอบประวัติทางธุรกิจ"))));var e,n,s},B={name:"craf4i",styles:"text-align:center;margin-top:5rem"},D={name:"1n2pgbo",styles:"height:160px;width:160px;border-radius:80px;margin:0 auto;overflow:hidden;margin-bottom:20px"},I={name:"1ftipyo",styles:"margin-top:3rem;margin-bottom:5rem"},T={name:"x47l91",styles:"display:flex;margin-bottom:3.6rem"},C={name:"1k2deg6",styles:"font-size:12rem;font-family:var(--ff-text);margin-top:-3rem;margin-right:1.6rem"},F={name:"pffyll",styles:"display:flex;justify-content:flex-end;font-family:var(--ff-title);font-size:3.6rem"},G={name:"fztsha",styles:"margin-right:4rem"},H={name:"mlc87v",styles:"margin-bottom:0.5rem;line-height:1"},L={name:"oclihc",styles:"text-decoration:underline;font-size:2.4rem;color:white"};e.default=function(t){var e=t.data,n=e.person,i=e.peopleVoteYaml,m=e.partyYaml,y=e.allVotelogYaml,x=(0,s.Z)(e,d),z=null!==m?m.color:"var(--cl-gray-4)",N=n.title+" "+n.name+" "+n.lastname;return(0,l.tZ)(o.Z,{pageStyles:{background:z}},(0,l.tZ)(r.Z,{title:N,imageUrl:"/seo/share/people.png"}),(0,l.tZ)("section",{className:"section"},(0,l.tZ)("div",{className:"book"},(0,l.tZ)("div",{className:"page leftPage"},(0,l.tZ)("div",{css:B},(0,l.tZ)("div",{css:D},(0,l.tZ)(f.Z,n)),(0,l.tZ)("h1",{css:(0,l.iv)(Object.assign({},h,{margin:"1rem 0 0 0"}),"","","","")},N),(0,l.tZ)(g.Z,{isActive:n.is_active})),(0,l.tZ)("p",{css:I},n.bio)),(0,l.tZ)("div",{className:"page",css:k},(0,l.tZ)("h2",{css:(0,l.iv)(Object.assign({},v,{marginTop:"1rem",textAlign:"center"}),"","","","")},(0,l.tZ)(a.G,{image:x.infoImage.childImageSharp.gatsbyImageData,style:{verticalAlign:"bottom",margin:"0 0.8rem"}}),"ข้อมูลพื้นฐาน"),(0,l.tZ)("hr",{className:Z.hr}),(0,l.tZ)(w,n),(0,l.tZ)(j,n),(0,l.tZ)(q,n),(0,l.tZ)("hr",{className:Z.hr}),(0,l.tZ)(V,n),(0,l.tZ)("hr",{className:Z.hr}),(0,l.tZ)(A,n),(0,l.tZ)("hr",{className:Z.hr}),(0,l.tZ)("h2",{css:(0,l.iv)(Object.assign({},_),"","","","")},"Official Website"),(0,l.tZ)(p.Z,n)))),n.quotes?(0,l.tZ)("section",{css:(0,l.iv)(Object.assign({},b,{paddingTop:"6.4rem",paddingBottom:"5.2rem"}),"","","","")},(0,l.tZ)("div",{className:"container"},(0,l.tZ)("div",{css:T},(0,l.tZ)("div",{css:C},"“"),(0,l.tZ)("blockquote",null,n.quotes)),(0,l.tZ)("div",{css:F},(0,l.tZ)("div",{css:G},"⎯⎯"),(0,l.tZ)("div",null,(0,l.tZ)("div",{css:H},N),(0,l.tZ)("div",null,(0,l.tZ)(c.Z,{href:n.quotes_url,css:L},"อ้างอิง")))))):null,n.is_mp&&i?(0,l.tZ)(u.Z,{peopleVoteYaml:i,allVotelogYaml:y}):null)}}}]);
//# sourceMappingURL=79702030-b216eeaea825c7150608.js.map