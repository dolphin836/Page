(window["webpackJsonprecommend-windows-software-list"]=window["webpackJsonprecommend-windows-software-list"]||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(16),r=a.n(i),c=a(13),l=a(14),o=a(4),m=a(5),u=a(7),h=a(6),p=a(8),d=a(3);var g,f=(g=function(e){return s.a.createElement(d.f,{style:{paddingBottom:"3rem",background:"#F5F5F5"}},s.a.createElement(d.d,null,s.a.createElement(d.e,{className:"has-text-centered"},s.a.createElement("p",{style:{marginBottom:".4rem"}},"\xa9 ",(new Date).getFullYear()," ",s.a.createElement("a",{href:"https://www.haibing.site"},"\u6d77\u5175\u5927\u4fa0")," BY ",s.a.createElement("a",{href:"https://github.com/dolphin836",target:"_blank",rel:"noopener noreferrer"},"dolphin")),s.a.createElement("p",{className:"is-size-7",style:{marginBottom:".4rem"}},s.a.createElement("a",{href:"http://www.beian.miit.gov.cn",className:"has-text-grey",target:"_blank",rel:"noopener noreferrer"},"\u82cf ICP \u5907 15001763 \u53f7 - 4")),s.a.createElement("p",{className:"is-size-7"},e.nowDateTime))))},function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={nowDateTime:a.getDateTime(new Date)},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.clock=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.clock)}},{key:"tick",value:function(){this.setState({nowDateTime:this.getDateTime(new Date)})}},{key:"getDateTime",value:function(e){var t=e.getMonth()+1;return e.getFullYear()+"-"+this.zFill(t)+"-"+this.zFill(e.getDate())+" "+this.zFill(e.getHours())+":"+this.zFill(e.getMinutes())+":"+this.zFill(e.getSeconds())}},{key:"zFill",value:function(e){var t="0"+e;return t.substr(t.length-2)}},{key:"render",value:function(){return s.a.createElement(g,Object.assign({nowDateTime:this.state.nowDateTime},this.props))}}]),t}(s.a.Component));var E=function(){return s.a.createElement(d.e,{className:"back"},s.a.createElement(c.b,{to:"/"},s.a.createElement(d.m,{as:"p",size:6,className:"has-text-weight-light"},"Back Home")))},w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.title=this.props.title}},{key:"render",value:function(){return s.a.createElement(d.e,{className:"has-text-centered",style:{padding:"0 0 2rem 0"}},s.a.createElement(d.m,{size:2,style:{marginBottom:"2rem"}},this.props.title),s.a.createElement(d.m,{subtitle:!0,size:5,className:"has-text-grey has-text-weight-light"},this.props.subtitle))}}]),t}(n.PureComponent);var v=function(e){return s.a.createElement("div",{className:"awesome"},s.a.createElement("div",{className:"app"},s.a.createElement(d.d,null,s.a.createElement(E,null),s.a.createElement(w,{title:e.title,subtitle:e.subtitle}),e.children)),s.a.createElement(f,null))},C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).switchTimeState=function(){a.setState({isRunning:!a.state.isRunning,switchName:a.state.isRunning?"\u5f00 \u542f":"\u6682 \u505c"})},a.transform=function(){if(a.state.dateTime.length>0){var e=a.stringToInt(a.state.dateTime);isNaN(e)||a.setState({timeStamp:e})}if(a.state.timeStamp.length>0){var t=a.intToString(a.state.timeStamp);isNaN(t)||a.setState({dateTime:t})}},a.clean=function(){a.setState({dateTime:"",timeStamp:""})},a.dateTimeChange=function(e){a.setState({dateTime:e.target.value})},a.timeStampChange=function(e){a.setState({timeStamp:e.target.value})},a.state={nowDateTime:a.getNowDateTme(),nowTimeStamp:a.getNowTimestamp(),isRunning:!0,switchName:"\u6682 \u505c",dateTime:"",timeStamp:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.clock=setInterval((function(){return e.running()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.clock)}},{key:"running",value:function(){this.state.isRunning&&this.setState({nowDateTime:this.getNowDateTme(),nowTimeStamp:this.getNowTimestamp()})}},{key:"getNowDateTme",value:function(){var e=new Date;return this.getDateTime(e)}},{key:"getNowTimestamp",value:function(){return this.stringToInt(this.getNowDateTme())}},{key:"getDateTime",value:function(e){var t=e.getMonth()+1;return e.getFullYear()+"-"+this.zFill(t)+"-"+this.zFill(e.getDate())+" "+this.zFill(e.getHours())+":"+this.zFill(e.getMinutes())+":"+this.zFill(e.getSeconds())}},{key:"zFill",value:function(e){var t="0"+e;return t.substr(t.length-2)}},{key:"stringToInt",value:function(e){return new Date(e).getTime()/1e3}},{key:"intToString",value:function(e){var t=new Date(1e3*e);return this.getDateTime(t)}},{key:"render",value:function(){return s.a.createElement(v,{title:"\u65f6\u95f4\u5b57\u7b26\u4e32\u4e0e Unix \u65f6\u95f4\u6233\u4e92\u8f6c",subtitle:"\u65f6\u95f4\u5b57\u7b26\u4e32\u4e0e Unix \u65f6\u95f4\u6233\u4e92\u8f6c"},s.a.createElement(d.c.Group,{style:{paddingBottom:"3rem"}},s.a.createElement(d.c,{className:"is-5 has-text-centered"},s.a.createElement(d.m,{size:5,className:"has-text-dark has-text-weight-light"},"\u5f53\u524d\u65f6\u95f4\uff1a",this.state.nowDateTime)),s.a.createElement(d.c,{className:"is-2"},s.a.createElement(d.a,{color:"primary",fullwidth:!0,rounded:!0,onClick:this.switchTimeState},this.state.switchName)),s.a.createElement(d.c,{className:"is-5 has-text-centered"},s.a.createElement(d.m,{size:5,className:"has-text-dark has-text-weight-light"},"Unix \u65f6\u95f4\u6233\uff1a",this.state.nowTimeStamp))),s.a.createElement(d.c.Group,{className:"is-centered"},s.a.createElement(d.c,{className:"is-5"},s.a.createElement("div",{className:"control"},s.a.createElement("textarea",{value:this.state.dateTime,onChange:this.dateTimeChange,className:"textarea is-focused has-fixed-size",rows:"20",placeholder:"\u65f6\u95f4\u5b57\u7b26\u4e32"}))),s.a.createElement(d.c,{className:"is-2"},s.a.createElement(d.a,{color:"success",fullwidth:!0,rounded:!0,onClick:this.transform},"\u8f6c \u6362"),s.a.createElement(d.a,{color:"info",fullwidth:!0,rounded:!0,style:{marginTop:"2rem"},onClick:this.clean},"\u6e05 \u7a7a")),s.a.createElement(d.c,{className:"is-5"},s.a.createElement("div",{className:"control"},s.a.createElement("textarea",{value:this.state.timeStamp,onChange:this.timeStampChange,className:"textarea is-focused has-fixed-size",rows:"20",placeholder:"Unix \u65f6\u95f4\u6233"})))))}}]),t}(n.PureComponent),k=a(21),y=a.n(k),N=a(17),b=a.n(N),x=(a(38),function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).charConfig=[["Cap","ABCDEFGHIJKLMNOPQRSTUVWXYZ"],["Low","abcdefghijklmnopqrstuvwxyz"],["Num","0123456789"],["Oth","#%*^&-_+=|[]{}()?/`~'"]],a.defaultPasswordLength=16,a.defaultPasswordCount=10,a.getPasswordSuccess=function(){N.store.addNotification({title:"\u6210\u529f",message:"\u5df2\u590d\u5236\u5bc6\u7801\u5230\u526a\u5207\u677f",type:"success",insert:"bottom",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,onScreen:!0}})},a.passwordLengthChange=function(e){a.setState({passwordLength:e.target.value})},a.passwordCountChange=function(e){a.setState({passwordCount:e.target.value})},a.getPassword=function(){for(var e=[],t=[],n=a.getCharConfig(),i=0;i<a.state.passwordCount;i++)e.push(a.generatePassword(n,a.state.passwordLength));for(var r=0;r<e.length;r++)t.push(s.a.createElement("div",{key:r},s.a.createElement(y.a,{onSuccess:a.getPasswordSuccess,component:"h5","data-clipboard-text":e[r],"button-title":"\u5355\u51fb\u590d\u5236\u5230\u526a\u5207\u677f"},e[r])));a.setState({password:e,passwordGroup:t})},a.isCapChange=function(){console.log(1),(a.getCharConfigCount()>1||!a.state.isCap)&&a.setState({isCap:!a.state.isCap})},a.isLowChange=function(){(a.getCharConfigCount()>1||!a.state.isLow)&&a.setState({isLow:!a.state.isLow})},a.isNumChange=function(){(a.getCharConfigCount()>1||!a.state.isNum)&&a.setState({isNum:!a.state.isNum})},a.isOthChange=function(){(a.getCharConfigCount()>1||!a.state.isOth)&&a.setState({isOth:!a.state.isOth})},a.state={passwordLength:a.defaultPasswordLength,passwordCount:a.defaultPasswordCount,isCap:!0,isLow:!0,isNum:!0,isOth:!0};for(var n=[],i=a.getCharConfig(),r=0;r<a.state.passwordCount;r++)n.push(a.generatePassword(i,a.state.passwordLength));for(var c=[],l=0;l<n.length;l++)c.push(s.a.createElement("div",{key:l},s.a.createElement(y.a,{onSuccess:a.getPasswordSuccess,component:"h5","data-clipboard-text":n[l],"button-title":"\u5355\u51fb\u590d\u5236\u5230\u526a\u5207\u677f"},n[l])));return a.state.password=n,a.state.passwordGroup=c,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getCharConfigCount",value:function(){return this.state.isCap+this.state.isLow+this.state.isNum+this.state.isOth}},{key:"getCharConfig",value:function(){for(var e="",t=0;t<this.charConfig.length;t++)"Cap"===this.charConfig[t][0]&&this.state.isCap&&(e+=this.charConfig[t][1]),"Low"===this.charConfig[t][0]&&this.state.isLow&&(e+=this.charConfig[t][1]),"Num"===this.charConfig[t][0]&&this.state.isNum&&(e+=this.charConfig[t][1]),"Oth"===this.charConfig[t][0]&&this.state.isOth&&(e+=this.charConfig[t][1]);return e}},{key:"generatePassword",value:function(e,t){for(var a="",n=0;n<t;n++)a+=e[this.randomInt(e.length)];return a}},{key:"randomInt",value:function(e){var t=new Uint32Array(1);return window.crypto.getRandomValues(t),t[0]%e}},{key:"render",value:function(){return s.a.createElement(v,{title:"\u751f\u6210\u66f4\u5b89\u5168\u7684\u968f\u673a\u5bc6\u7801",subtitle:"Generator random and safe password"},s.a.createElement(b.a,null),s.a.createElement(d.c.Group,null,s.a.createElement(d.c,{className:"is-5"},s.a.createElement(d.e,null,s.a.createElement(d.l.Group,{gapless:!0,style:{justifyContent:"center"}},s.a.createElement(d.l,null,"\u5bc6\u7801\u957f\u5ea6"),s.a.createElement(d.l,{color:"primary"},this.state.passwordLength)),s.a.createElement("input",{type:"range",onChange:this.passwordLengthChange,className:"slider",step:"1",min:"6",max:"40",value:this.state.passwordLength})),s.a.createElement(d.e,null,s.a.createElement(d.l.Group,{gapless:!0,style:{justifyContent:"center"}},s.a.createElement(d.l,null,"\u5bc6\u7801\u4e2a\u6570"),s.a.createElement(d.l,{color:"primary"},this.state.passwordCount)),s.a.createElement("input",{type:"range",onChange:this.passwordCountChange,className:"slider",step:"1",min:"1",max:"20",value:this.state.passwordCount})),s.a.createElement(d.m,{size:4},"\u5b57\u7b26\u96c6"),s.a.createElement(d.e,null,s.a.createElement(d.h,{style:{paddingLeft:0},onClick:this.isCapChange},s.a.createElement(d.b,{as:"span",checked:this.state.isCap,className:this.state.isCap?"is-checked":""}," A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"))),s.a.createElement(d.e,null,s.a.createElement(d.h,{style:{paddingLeft:0},onClick:this.isLowChange},s.a.createElement(d.b,{as:"span",checked:this.state.isLow,className:this.state.isLow?"is-checked":""}," a b c d e f g h i j k l m n o p q r s t u v w x y z"))),s.a.createElement(d.e,null,s.a.createElement(d.h,{style:{paddingLeft:0},onClick:this.isNumChange},s.a.createElement(d.b,{as:"span",checked:this.state.isNum,className:this.state.isNum?"is-checked":""}," 0 1 2 3 4 5 6 7 8 9"))),s.a.createElement(d.e,null,s.a.createElement(d.h,{style:{paddingLeft:0},onClick:this.isOthChange},s.a.createElement(d.b,{as:"span",checked:this.state.isOth,className:this.state.isOth?"is-checked":""}," # % * ^ & - _ + = | [ ] "," ( ) ? / ` ~ '"))),s.a.createElement(d.a,{color:"info",size:"medium",fullwidth:!0,rounded:!0,onClick:this.getPassword,style:{marginTop:"4rem"}},"\u6362\u4e00\u7ec4")),s.a.createElement(d.c,{className:"is-2"}),s.a.createElement(d.c,{className:"is-5"},s.a.createElement("div",{className:"password-group"},this.state.passwordGroup))))}}]),t}(n.PureComponent));var T=function(e){var t,a,n=e.color,i=e.isPage,r=e.link,l=e.name,o=e.content;return t=i?s.a.createElement(c.b,{to:r,style:{textDecoration:"none"}},l):s.a.createElement("a",{href:r,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer"},l),o&&(a=s.a.createElement(d.m,{size:6,subtitle:!0,className:"has-text-grey has-text-weight-light"},o)),s.a.createElement(d.j,{color:n,size:"large"},s.a.createElement(d.j.Body,{className:"is-radiusless"},s.a.createElement(d.m,{as:"p",size:4},t),a))};var O=function(){return s.a.createElement("div",{className:"awesome"},s.a.createElement("div",{className:"app"},s.a.createElement(d.k,null,s.a.createElement(d.d,null,s.a.createElement(d.m,{as:"h5",size:3},"\u5de5 \u5177"),s.a.createElement(d.c.Group,null,s.a.createElement(d.c,null,s.a.createElement(T,{name:"\u65f6\u95f4\u5b57\u7b26\u4e32\u4e0e Unix \u65f6\u95f4\u6233\u4e92\u8f6c",content:"Transform Unix Time Stamp And Data Time",link:"TimestampTransform",color:"link",isPage:!0})),s.a.createElement(d.c,null,s.a.createElement(T,{name:"\u751f\u6210\u66f4\u5b89\u5168\u7684\u968f\u673a\u5bc6\u7801",content:"Generator Random And Safe Password",link:"GeneratorRandomPassword",color:"link",isPage:!0}))),s.a.createElement(d.m,{as:"h5",size:3},"\u5e94 \u7528"),s.a.createElement(d.c.Group,null,s.a.createElement(d.c,null,s.a.createElement(T,{name:"\u9ad8\u54c1\u8d28\u56fe\u7247\u5206\u4eab",link:"https://36photo.cn/photos",color:"success"})),s.a.createElement(d.c,null,s.a.createElement(T,{name:"\u7cbe\u9009\u7f51\u7edc\u5e94\u7528\u5bfc\u822a",link:"https://36awesome.com",color:"success"}))),s.a.createElement(d.c.Group,null,s.a.createElement(d.c,null,s.a.createElement(T,{name:"\u5b89\u5168\u7684\u5bc6\u7801\u7ba1\u7406",link:"https://my.36password.com",color:"success"})),s.a.createElement(d.c,null,s.a.createElement(T,{name:"\u97f3\u4e50\u7535\u53f0",link:"Fm",color:"success",isPage:!0}))),s.a.createElement(d.m,{as:"h5",size:3},"\u793e \u4ea4"),s.a.createElement(d.c.Group,null,s.a.createElement(d.c,null,s.a.createElement(T,{name:"\u5fae\u535a",content:"\u90e8\u5206\u8f6c\u53d1\u5185\u5bb9\u5e76\u4e0d\u4ee3\u8868\u672c\u4eba\u89c2\u70b9",link:"https://www.weibo.com/dolphin836",color:"warning"})),s.a.createElement(d.c,null,s.a.createElement(T,{name:"\u535a\u5ba2",content:"\u7f16\u7a0b\u3001PHP\u3001Java\u3001React",link:"https://github.com/dolphin836/Blog",color:"warning"}))),s.a.createElement(d.c.Group,null,s.a.createElement(d.c,{size:"half"},s.a.createElement(T,{name:"\u90ae\u7bb1",content:"dolphin@36photo.cn",color:"warning"})))))),s.a.createElement(f,null))},S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={data:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=function(t){var a=e;fetch("../Asset/Fm/"+t+".json").then((function(e){e.ok&&e.json().then((function(e){var t={name:e.name,content:e.content,photo:e.photo};a.setState({data:a.state.data.concat(t)})}))})).catch((function(e){console.log(JSON.stringify(e))}))},a=1;a<=1;a++)t(a)}},{key:"render",value:function(){return s.a.createElement(v,{title:"\u97f3\u4e50\u7535\u53f0",subtitle:"\u6211\u5e74\u540e\u865a\u5ea6\uff0c\u7a7a\u6709\u4e00\u8eab\u75b2\u60eb"},s.a.createElement(d.c.Group,null,this.state.data.map((function(e,t){return s.a.createElement(d.c,{key:t,size:3},s.a.createElement(d.g.Container,null,s.a.createElement(c.b,{to:"/FM/Channel/"+(t+1)},s.a.createElement(d.g,{src:"../Asset/Fm/Photo/"+e.photo,className:"channel-photo"}))),s.a.createElement(d.m,{as:"h5",size:5},e.name),s.a.createElement(d.m,{as:"p",size:7,subtitle:!0,className:"has-text-grey has-text-weight-light"},e.content))}))))}}]),t}(n.PureComponent);var j=function(){return s.a.createElement(d.e,{className:"back"},s.a.createElement(c.b,{to:"/Fm"},s.a.createElement(d.m,{as:"p",size:6,className:"has-text-weight-light"},"Back Fm")))};var z=function(e){return s.a.createElement("div",{className:"awesome"},s.a.createElement("div",{className:"app"},s.a.createElement(d.d,null,s.a.createElement(j,null),s.a.createElement(w,{title:e.title,subtitle:e.subtitle}),e.children)))},D="../../Asset/Fm/Mp3/",P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).song=function(e){a.setState({mp3:D+a.state.data[e].mp3,i:e},(function(){a.music.current.play(),a.text()}))},a.next=function(){var e=a.state.i+1;e>=a.state.data.length&&(e=0),a.song(e),a.text()},a.last=function(){var e=a.state.i-1;e<=0&&(e=a.state.data.length-1),a.song(e),a.text()},a.mute=function(){a.music.current.muted=!a.music.current.muted,a.text()},a.play=function(){a.music.current.paused?a.music.current.play():a.music.current.pause(),a.text()},a.volumeChange=function(e){a.music.current.volume=e.target.value,a.text()},a.state={name:"",content:"",photo:"",mp3:"",i:0,data:[],text:{mute:"\u9759\u97f3",play:"\u6682\u505c",volume:100}},a.music=s.a.createRef(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.clock=setInterval((function(){return e.tick()}),1e3);var t="../../Asset/Fm/"+this.props.match.params.Id+".json",a=this;fetch(t).then((function(e){e.ok&&e.json().then((function(e){a.setState({name:e.name,content:e.content,photo:e.photo,data:e.data,mp3:D+e.data[0].mp3}),document.title=e.name}))})).catch((function(e){console.log(JSON.stringify(e))}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.clock)}},{key:"tick",value:function(){}},{key:"text",value:function(){this.setState({text:{mute:this.music.current.muted?"\u53d6\u6d88\u9759\u97f3":"\u9759\u97f3",play:this.music.current.paused?"\u64ad\u653e":"\u6682\u505c",volume:Math.trunc(100*this.music.current.volume)}})}},{key:"render",value:function(){var e=this;return s.a.createElement(z,{title:this.state.name,subtitle:this.state.content},s.a.createElement("audio",{src:this.state.mp3,ref:this.music,onEnded:function(){return e.next()},autoPlay:!0}),s.a.createElement(d.a.Group,null,s.a.createElement(d.a,{onClick:function(){return e.mute()}},this.state.text.mute),s.a.createElement(d.a,{onClick:function(){return e.play()}},this.state.text.play),s.a.createElement(d.a,{onClick:function(){return e.next()}},"\u4e0b\u4e00\u9996"),s.a.createElement(d.a,{onClick:function(){return e.last()}},"\u4e0a\u4e00\u9996")),s.a.createElement("input",{type:"range",onChange:this.volumeChange,step:"0.01",min:"0",max:"1"})," ",this.state.text.volume,s.a.createElement(d.i,null,this.state.data.map((function(t,a){return s.a.createElement(d.i.Item,{key:a,onClick:function(){return e.song(a)}},t.name)}))))}}]),t}(n.PureComponent);a(39),a(40);var F=function(){return s.a.createElement(c.a,null,s.a.createElement(l.a,{exact:!0,path:"/",component:O}),s.a.createElement(l.a,{exact:!0,path:"/TimestampTransform",component:C}),s.a.createElement(l.a,{exact:!0,path:"/GeneratorRandomPassword",component:x}),s.a.createElement(l.a,{exact:!0,path:"/Fm",component:S}),s.a.createElement(l.a,{exact:!0,path:"/Fm/Channel/:Id",component:P}))};r.a.render(s.a.createElement(F,null),document.getElementById("app"))}},[[26,1,2]]]);
//# sourceMappingURL=main.49d92312.chunk.js.map