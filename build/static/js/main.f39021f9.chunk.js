(window["webpackJsonprecommend-windows-software-list"]=window["webpackJsonprecommend-windows-software-list"]||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(28),c=a.n(r),i=a(20),o=a(25),l=a(76),m=a(32),u=function(e){var t=e.component,a=Object(l.a)(e,["component"]);return s.a.createElement(o.b,Object.assign({},a,{render:function(e){return function(){var e=localStorage.getItem("password");if(null===e)return!1;var t=JSON.parse(e);return!(t.timestamp<parseInt(Date.now()/1e3))&&m.password===t.password}()?s.a.createElement(t,Object.assign({},a,e)):s.a.createElement(o.a,{to:{pathname:"/password",state:{from:e.location.pathname}}})}}))},h=a(5),d=a(6),p=a(8),g=a(7),f=a(9),E=a(3);var v,w=(v=function(e){return s.a.createElement(E.g,{style:{paddingBottom:"3rem",background:"#F5F5F5"}},s.a.createElement(E.e,null,s.a.createElement(E.f,{className:"has-text-centered"},s.a.createElement("p",{style:{marginBottom:".4rem"}},"\xa9 ",(new Date).getFullYear()," ",s.a.createElement("a",{href:"https://www.haibing.site"},"\u6d77\u5175\u5927\u4fa0")," BY ",s.a.createElement("a",{href:"https://github.com/dolphin836",target:"_blank",rel:"noopener noreferrer"},"dolphin")),s.a.createElement("p",{className:"is-size-7",style:{marginBottom:".4rem"}},s.a.createElement("a",{href:"http://www.beian.miit.gov.cn",className:"has-text-grey",target:"_blank",rel:"noopener noreferrer"},"\u82cf ICP \u5907 15001763 \u53f7 - 4")),s.a.createElement("p",{className:"is-size-7"},e.nowDateTime))))},function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={nowDateTime:a.getDateTime(new Date)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.clock=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.clock)}},{key:"tick",value:function(){this.setState({nowDateTime:this.getDateTime(new Date)})}},{key:"getDateTime",value:function(e){var t=e.getMonth()+1;return e.getFullYear()+"-"+this.zFill(t)+"-"+this.zFill(e.getDate())+" "+this.zFill(e.getHours())+":"+this.zFill(e.getMinutes())+":"+this.zFill(e.getSeconds())}},{key:"zFill",value:function(e){var t="0"+e;return t.substr(t.length-2)}},{key:"render",value:function(){return s.a.createElement(v,Object.assign({nowDateTime:this.state.nowDateTime},this.props))}}]),t}(s.a.Component));var y=function(e){return s.a.createElement(E.f,{className:"back"},s.a.createElement(i.b,{to:e.back||"/"},s.a.createElement(E.q,{as:"p",size:6,className:"has-text-weight-light"},"Back ",e.backname||"Home")))},b=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){document.title=this.props.title}},{key:"render",value:function(){return s.a.createElement(E.f,{className:"has-text-centered",style:{padding:"0 0 2rem 0"}},s.a.createElement(E.q,{size:2,style:{marginBottom:"2rem"}},this.props.title),s.a.createElement(E.q,{subtitle:!0,size:5,className:"has-text-grey has-text-weight-light"},this.props.subtitle))}}]),t}(n.PureComponent);var C=function(e){return s.a.createElement("div",{className:"awesome"},s.a.createElement("div",{className:"app"},s.a.createElement(E.n,{style:{paddingTop:"0"}},s.a.createElement(E.e,null,s.a.createElement(y,{back:e.back||"/",backname:e.backname||"Home"}),s.a.createElement(b,{title:e.title,subtitle:e.subtitle}),e.children))),s.a.createElement(w,null))},k=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).switchTimeState=function(){a.setState({isRunning:!a.state.isRunning,switchName:a.state.isRunning?"\u5f00 \u542f":"\u6682 \u505c"})},a.transform=function(){if(a.state.dateTime.length>0){var e=a.stringToInt(a.state.dateTime);isNaN(e)||a.setState({timeStamp:e})}if(a.state.timeStamp.length>0){var t=a.intToString(a.state.timeStamp);isNaN(t)||a.setState({dateTime:t})}},a.clean=function(){a.setState({dateTime:"",timeStamp:""})},a.dateTimeChange=function(e){a.setState({dateTime:e.target.value})},a.timeStampChange=function(e){a.setState({timeStamp:e.target.value})},a.state={nowDateTime:a.getNowDateTme(),nowTimeStamp:a.getNowTimestamp(),isRunning:!0,switchName:"\u6682 \u505c",dateTime:"",timeStamp:""},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.clock=setInterval((function(){return e.running()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.clock)}},{key:"running",value:function(){this.state.isRunning&&this.setState({nowDateTime:this.getNowDateTme(),nowTimeStamp:this.getNowTimestamp()})}},{key:"getNowDateTme",value:function(){var e=new Date;return this.getDateTime(e)}},{key:"getNowTimestamp",value:function(){return this.stringToInt(this.getNowDateTme())}},{key:"getDateTime",value:function(e){var t=e.getMonth()+1;return e.getFullYear()+"-"+this.zFill(t)+"-"+this.zFill(e.getDate())+" "+this.zFill(e.getHours())+":"+this.zFill(e.getMinutes())+":"+this.zFill(e.getSeconds())}},{key:"zFill",value:function(e){var t="0"+e;return t.substr(t.length-2)}},{key:"stringToInt",value:function(e){return new Date(e).getTime()/1e3}},{key:"intToString",value:function(e){var t=new Date(1e3*e);return this.getDateTime(t)}},{key:"render",value:function(){return s.a.createElement(C,{title:"\u65f6\u95f4\u5b57\u7b26\u4e32\u4e0e Unix \u65f6\u95f4\u6233\u4e92\u8f6c",subtitle:"\u65f6\u95f4\u5b57\u7b26\u4e32\u4e0e Unix \u65f6\u95f4\u6233\u4e92\u8f6c"},s.a.createElement(E.d.Group,{style:{paddingBottom:"3rem"}},s.a.createElement(E.d,{className:"is-5 has-text-centered"},s.a.createElement(E.q,{size:5,className:"has-text-dark has-text-weight-light"},"\u5f53\u524d\u65f6\u95f4\uff1a",this.state.nowDateTime)),s.a.createElement(E.d,{className:"is-2"},s.a.createElement(E.b,{color:"primary",fullwidth:!0,rounded:!0,onClick:this.switchTimeState},this.state.switchName)),s.a.createElement(E.d,{className:"is-5 has-text-centered"},s.a.createElement(E.q,{size:5,className:"has-text-dark has-text-weight-light"},"Unix \u65f6\u95f4\u6233\uff1a",this.state.nowTimeStamp))),s.a.createElement(E.d.Group,{className:"is-centered"},s.a.createElement(E.d,{className:"is-5"},s.a.createElement("div",{className:"control"},s.a.createElement("textarea",{value:this.state.dateTime,onChange:this.dateTimeChange,className:"textarea is-focused has-fixed-size",rows:"20",placeholder:"\u65f6\u95f4\u5b57\u7b26\u4e32"}))),s.a.createElement(E.d,{className:"is-2"},s.a.createElement(E.b,{color:"success",fullwidth:!0,rounded:!0,onClick:this.transform},"\u8f6c \u6362"),s.a.createElement(E.b,{color:"info",fullwidth:!0,rounded:!0,style:{marginTop:"2rem"},onClick:this.clean},"\u6e05 \u7a7a")),s.a.createElement(E.d,{className:"is-5"},s.a.createElement("div",{className:"control"},s.a.createElement("textarea",{value:this.state.timeStamp,onChange:this.timeStampChange,className:"textarea is-focused has-fixed-size",rows:"20",placeholder:"Unix \u65f6\u95f4\u6233"})))))}}]),t}(n.PureComponent),N=a(45),O=a.n(N),x=a(33),S=a.n(x),j=(a(92),function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).charConfig=[["Cap","ABCDEFGHIJKLMNOPQRSTUVWXYZ"],["Low","abcdefghijklmnopqrstuvwxyz"],["Num","0123456789"],["Oth","#%*^&-_+=|[]{}()?/`~'"]],a.defaultPasswordLength=16,a.defaultPasswordCount=10,a.getPasswordSuccess=function(){x.store.addNotification({title:"\u6210\u529f",message:"\u5df2\u590d\u5236\u5bc6\u7801\u5230\u526a\u5207\u677f",type:"success",insert:"bottom",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,onScreen:!0}})},a.passwordLengthChange=function(e){a.setState({passwordLength:e.target.value})},a.passwordCountChange=function(e){a.setState({passwordCount:e.target.value})},a.getPassword=function(){for(var e=[],t=[],n=a.getCharConfig(),r=0;r<a.state.passwordCount;r++)e.push(a.generatePassword(n,a.state.passwordLength));for(var c=0;c<e.length;c++)t.push(s.a.createElement("div",{key:c},s.a.createElement(O.a,{onSuccess:a.getPasswordSuccess,component:"h5","data-clipboard-text":e[c],"button-title":"\u5355\u51fb\u590d\u5236\u5230\u526a\u5207\u677f"},e[c])));a.setState({password:e,passwordGroup:t})},a.isCapChange=function(){console.log(1),(a.getCharConfigCount()>1||!a.state.isCap)&&a.setState({isCap:!a.state.isCap})},a.isLowChange=function(){(a.getCharConfigCount()>1||!a.state.isLow)&&a.setState({isLow:!a.state.isLow})},a.isNumChange=function(){(a.getCharConfigCount()>1||!a.state.isNum)&&a.setState({isNum:!a.state.isNum})},a.isOthChange=function(){(a.getCharConfigCount()>1||!a.state.isOth)&&a.setState({isOth:!a.state.isOth})},a.state={passwordLength:a.defaultPasswordLength,passwordCount:a.defaultPasswordCount,isCap:!0,isLow:!0,isNum:!0,isOth:!0};for(var n=[],r=a.getCharConfig(),c=0;c<a.state.passwordCount;c++)n.push(a.generatePassword(r,a.state.passwordLength));for(var i=[],o=0;o<n.length;o++)i.push(s.a.createElement("div",{key:o},s.a.createElement(O.a,{onSuccess:a.getPasswordSuccess,component:"h5","data-clipboard-text":n[o],"button-title":"\u5355\u51fb\u590d\u5236\u5230\u526a\u5207\u677f"},n[o])));return a.state.password=n,a.state.passwordGroup=i,a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"getCharConfigCount",value:function(){return this.state.isCap+this.state.isLow+this.state.isNum+this.state.isOth}},{key:"getCharConfig",value:function(){for(var e="",t=0;t<this.charConfig.length;t++)"Cap"===this.charConfig[t][0]&&this.state.isCap&&(e+=this.charConfig[t][1]),"Low"===this.charConfig[t][0]&&this.state.isLow&&(e+=this.charConfig[t][1]),"Num"===this.charConfig[t][0]&&this.state.isNum&&(e+=this.charConfig[t][1]),"Oth"===this.charConfig[t][0]&&this.state.isOth&&(e+=this.charConfig[t][1]);return e}},{key:"generatePassword",value:function(e,t){for(var a="",n=0;n<t;n++)a+=e[this.randomInt(e.length)];return a}},{key:"randomInt",value:function(e){var t=new Uint32Array(1);return window.crypto.getRandomValues(t),t[0]%e}},{key:"render",value:function(){return s.a.createElement(C,{title:"\u751f\u6210\u66f4\u5b89\u5168\u7684\u968f\u673a\u5bc6\u7801",subtitle:"Generator random and safe password"},s.a.createElement(S.a,null),s.a.createElement(E.d.Group,null,s.a.createElement(E.d,{className:"is-5"},s.a.createElement(E.f,null,s.a.createElement(E.p.Group,{gapless:!0,style:{justifyContent:"center"}},s.a.createElement(E.p,null,"\u5bc6\u7801\u957f\u5ea6"),s.a.createElement(E.p,{color:"primary"},this.state.passwordLength)),s.a.createElement("input",{type:"range",onChange:this.passwordLengthChange,className:"slider",step:"1",min:"6",max:"40",value:this.state.passwordLength})),s.a.createElement(E.f,null,s.a.createElement(E.p.Group,{gapless:!0,style:{justifyContent:"center"}},s.a.createElement(E.p,null,"\u5bc6\u7801\u4e2a\u6570"),s.a.createElement(E.p,{color:"primary"},this.state.passwordCount)),s.a.createElement("input",{type:"range",onChange:this.passwordCountChange,className:"slider",step:"1",min:"1",max:"20",value:this.state.passwordCount})),s.a.createElement(E.q,{size:4},"\u5b57\u7b26\u96c6"),s.a.createElement(E.f,null,s.a.createElement(E.k,{style:{paddingLeft:0},onClick:this.isCapChange},s.a.createElement(E.c,{as:"span",checked:this.state.isCap,className:this.state.isCap?"is-checked":""}," A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"))),s.a.createElement(E.f,null,s.a.createElement(E.k,{style:{paddingLeft:0},onClick:this.isLowChange},s.a.createElement(E.c,{as:"span",checked:this.state.isLow,className:this.state.isLow?"is-checked":""}," a b c d e f g h i j k l m n o p q r s t u v w x y z"))),s.a.createElement(E.f,null,s.a.createElement(E.k,{style:{paddingLeft:0},onClick:this.isNumChange},s.a.createElement(E.c,{as:"span",checked:this.state.isNum,className:this.state.isNum?"is-checked":""}," 0 1 2 3 4 5 6 7 8 9"))),s.a.createElement(E.f,null,s.a.createElement(E.k,{style:{paddingLeft:0},onClick:this.isOthChange},s.a.createElement(E.c,{as:"span",checked:this.state.isOth,className:this.state.isOth?"is-checked":""}," # % * ^ & - _ + = | [ ] "," ( ) ? / ` ~ '"))),s.a.createElement(E.b,{color:"info",size:"medium",fullwidth:!0,rounded:!0,onClick:this.getPassword,style:{marginTop:"4rem"}},"\u6362\u4e00\u7ec4")),s.a.createElement(E.d,{className:"is-2"}),s.a.createElement(E.d,{className:"is-5"},s.a.createElement("div",{className:"password-group"},this.state.passwordGroup))))}}]),t}(n.PureComponent));var T=function(e){var t,a,n=e.color,r=e.isPage,c=e.link,o=e.name,l=e.content;return t=r?s.a.createElement(i.b,{to:c,style:{textDecoration:"none"}},o):s.a.createElement("a",{href:c,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer"},o),l&&(a=s.a.createElement(E.q,{size:6,subtitle:!0,className:"has-text-grey has-text-weight-light"},l)),s.a.createElement(E.l,{color:n,size:"large"},s.a.createElement(E.l.Body,{className:"is-radiusless"},s.a.createElement(E.q,{as:"p",size:4},t),a))};var D=function(){return s.a.createElement("div",{className:"awesome"},s.a.createElement("div",{className:"app"},s.a.createElement(E.n,null,s.a.createElement(E.e,null,s.a.createElement(E.q,{as:"h5",size:3},"\u5de5 \u5177"),s.a.createElement(E.d.Group,null,s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u65f6\u95f4\u5b57\u7b26\u4e32\u4e0e Unix \u65f6\u95f4\u6233\u4e92\u8f6c",content:"Transform Unix Time Stamp And Data Time",link:"TimestampTransform",color:"link",isPage:!0})),s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u751f\u6210\u66f4\u5b89\u5168\u7684\u968f\u673a\u5bc6\u7801",content:"Generator Random And Safe Password",link:"GeneratorRandomPassword",color:"link",isPage:!0}))),s.a.createElement(E.q,{as:"h5",size:3},"\u5e94 \u7528"),s.a.createElement(E.d.Group,null,s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u9ad8\u54c1\u8d28\u56fe\u7247\u5206\u4eab",link:"https://36photo.cn/photos",color:"success"})),s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u7cbe\u9009\u7f51\u7edc\u5e94\u7528\u5bfc\u822a",link:"https://36awesome.com",color:"success"}))),s.a.createElement(E.d.Group,null,s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u5b89\u5168\u7684\u5bc6\u7801\u7ba1\u7406",link:"https://my.36password.com",color:"success"})),s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u97f3\u4e50\u7535\u53f0",link:"Fm",color:"success",isPage:!0}))),s.a.createElement(E.q,{as:"h5",size:3},"\u793e \u4ea4"),s.a.createElement(E.d.Group,null,s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u5fae\u535a",content:"\u90e8\u5206\u8f6c\u53d1\u5185\u5bb9\u5e76\u4e0d\u4ee3\u8868\u672c\u4eba\u89c2\u70b9",link:"https://www.weibo.com/dolphin836",color:"warning"})),s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u535a\u5ba2",content:"\u7f16\u7a0b\u3001PHP\u3001Java\u3001React",link:"https://github.com/dolphin836/Blog",color:"warning"}))),s.a.createElement(E.d.Group,null,s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u90ae\u7bb1",content:"dolphin@36photo.cn",color:"warning"})),s.a.createElement(E.d,null,s.a.createElement(T,{name:"\u79c1\u4eba\u89c6\u9891",content:"\u8bf7\u52ff\u4f20\u64ad",link:"Video",color:"warning",isPage:!0})))))),s.a.createElement(w,null))},z=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={data:[]},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){for(var e=this,t=function(t){var a=e;fetch("../Asset/Fm/"+t+".json").then((function(e){e.ok&&e.json().then((function(e){var t={name:e.name,content:e.content,photo:e.photo};a.setState({data:a.state.data.concat(t)})}))})).catch((function(e){console.log(JSON.stringify(e))}))},a=1;a<=1;a++)t(a)}},{key:"render",value:function(){return s.a.createElement(C,{title:"\u97f3\u4e50\u7535\u53f0",subtitle:"\u6211\u5e74\u540e\u865a\u5ea6\uff0c\u7a7a\u6709\u4e00\u8eab\u75b2\u60eb"},s.a.createElement(E.d.Group,null,this.state.data.map((function(e,t){return s.a.createElement(E.d,{key:t,size:3},s.a.createElement(E.i.Container,null,s.a.createElement(i.b,{to:"/FM/Channel/"+(t+1)},s.a.createElement(E.i,{src:"../Asset/Fm/Photo/"+e.photo,className:"channel-photo"}))),s.a.createElement(E.q,{as:"h5",size:5},e.name),s.a.createElement(E.q,{as:"p",size:7,subtitle:!0,className:"has-text-grey has-text-weight-light"},e.content))}))))}}]),t}(n.PureComponent),P="../../Asset/Fm/Photo/";var F=function(e){return s.a.createElement("div",{className:"awesome"},s.a.createElement("div",{className:"app"},s.a.createElement(E.n,{style:{paddingTop:"0"}},s.a.createElement(E.e,null,s.a.createElement(y,{back:"/Fm",backname:"Fm"}),s.a.createElement(E.f,{className:"has-text-centered"},s.a.createElement(E.q,{as:"h5",size:5},e.title),s.a.createElement(E.q,{as:"p",size:7,subtitle:!0,className:"has-text-grey has-text-weight-light"},e.content)),s.a.createElement(E.i.Container,{className:"channel-cover"},s.a.createElement(E.i,{src:P+e.photo,className:"channel-photo"})),e.children))))},L=a(41),A=a(42);var G=function(e){var t,a=e.ListId;if(a===e.RunId)t=s.a.createElement(E.h,{color:"success",size:"small"},s.a.createElement(L.a,{icon:A.a,size:"xs"}));else{var n="0"+(a+1),r=n.substr(n.length-2);t=s.a.createElement("span",{className:"has-text-grey-lighter has-text-weight-light"},r)}return s.a.createElement("div",{className:"channel-run-icon"},t)},I="../../Asset/Fm/Mp3/",M=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).song=function(e){a.setState({mp3:I+a.state.data[e].mp3,i:e},(function(){a.music.current.play(),a.text()}))},a.next=function(){var e=a.state.i+1;e>=a.state.data.length&&(e=0),a.song(e),a.text()},a.last=function(){var e=a.state.i-1;e<=0&&(e=a.state.data.length-1),a.song(e),a.text()},a.mute=function(){a.music.current.muted=!a.music.current.muted,a.text()},a.play=function(){a.music.current.paused?a.music.current.play():a.music.current.pause(),a.text()},a.volumeChange=function(e){a.music.current.volume=e.target.value,a.text()},a.state={name:"",content:"",photo:"",mp3:"",i:0,data:[],text:{mute:"\u9759\u97f3",play:"\u6682\u505c",volume:100},duration:100,second:0},a.music=s.a.createRef(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.clock=setInterval((function(){return e.tick()}),1e3);var t="../../Asset/Fm/"+this.props.match.params.Id+".json",a=this;fetch(t).then((function(e){e.ok&&e.json().then((function(e){a.setState({name:e.name,content:e.content,photo:e.photo,data:e.data,mp3:I+e.data[0].mp3}),document.title=e.name}))})).catch((function(e){console.log(JSON.stringify(e))}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.clock)}},{key:"tick",value:function(){this.setState({duration:Math.trunc(this.music.current.duration),second:Math.trunc(this.music.current.currentTime)})}},{key:"text",value:function(){this.setState({text:{mute:this.music.current.muted?"\u53d6\u6d88\u9759\u97f3":"\u9759\u97f3",play:this.music.current.paused?"\u64ad\u653e":"\u6682\u505c",volume:Math.trunc(100*this.music.current.volume)}})}},{key:"render",value:function(){var e=this;return s.a.createElement(F,{title:this.state.name,content:this.state.content,photo:this.state.photo},s.a.createElement("audio",{src:this.state.mp3,ref:this.music,onEnded:function(){return e.next()},autoPlay:!0}),s.a.createElement(E.m,{color:"success",className:"channel-progress",value:this.state.second,max:this.state.duration}),s.a.createElement(E.f,{className:"is-pulled-right"},s.a.createElement(E.b.Group,null,s.a.createElement(E.b,{outlined:!0,color:"danger",static:!0,rounded:!0},"\u5206 \u4eab"),s.a.createElement(E.b,{outlined:!0,color:"link",static:!0,rounded:!0},"\u4e0b \u8f7d"))),s.a.createElement(E.f,{className:"channel-list"},this.state.data.map((function(t,a){return s.a.createElement(E.a,{key:a,onClick:function(){return e.song(a)},className:"channel-song"},s.a.createElement(G,{ListId:a,RunId:e.state.i}),s.a.createElement(E.q,{as:"h6",size:6,className:"has-text-grey-dark has-text-weight-light"},t.name),s.a.createElement(E.q,{as:"p",size:7,subtitle:!0,className:"has-text-grey-light has-text-weight-light"},t.name))}))))}}]),t}(n.PureComponent),B=a(29),q=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).category=function(e){var t=[];B.map((function(a){"\u5168\u90e8"!==e&&a.category!==e||t.push(a)})),a.setState((function(a){return{categoryData:a.categoryData.map((function(t){return t.name===e?Object.assign(t,{isActive:!0}):Object.assign(t,{isActive:!1})})),data:t}}))};var n=["\u5168\u90e8"],s=[{name:"\u5168\u90e8",count:0,isActive:!0}],r=[];return B.map((function(e){var t=n.indexOf(e.category);-1===t?(n.push(e.category),s.push({name:e.category,count:1,isActive:!1}),s[0].count++):(s[t].count++,s[0].count++),r.push(e)})),a.state={categoryData:s,data:r},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(C,{title:"\u79c1\u4eba\u89c6\u9891",subtitle:"\u6211\u5e74\u540e\u865a\u5ea6\uff0c\u7a7a\u6709\u4e00\u8eab\u75b2\u60eb"},s.a.createElement(E.o.Group,null,this.state.categoryData.map((function(t,a){return s.a.createElement(E.o,{active:t.isActive,key:a,onClick:function(){return e.category(t.name)}},t.name," - ",t.count)}))),s.a.createElement(E.d.Group,null,this.state.data.map((function(e,t){return s.a.createElement(E.d,{key:t,size:3},s.a.createElement(E.i.Container,null,s.a.createElement(i.b,{to:"/Video/"+e.code},s.a.createElement(E.i,{src:e.cover,className:"channel-photo"}))),s.a.createElement(E.q,{as:"p",size:6,subtitle:!0,className:"has-text-grey has-text-weight-light"},e.name))}))))}}]),t}(n.PureComponent),U=a(79),R=(a(117),function(e){function t(e){var a,n;return Object(h.a)(this,t),a=Object(p.a)(this,Object(g.a)(t).call(this,e)),B.map((function(e){e.code===a.props.match.params.Code&&(n=e)})),a.state={data:n},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement(C,{title:this.state.data.name,back:"/Video",backname:"Video"},s.a.createElement(U.Player,{autoPlay:!0,src:this.state.data.video}))}}]),t}(n.PureComponent));var W=function(e){return s.a.createElement("div",{className:"awesome"},s.a.createElement("div",{className:"app"},s.a.createElement(E.n,{style:{paddingTop:"0"}},s.a.createElement(E.e,null,s.a.createElement(y,null),e.children))),s.a.createElement(w,null))},H=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).onKeyPress=function(e){if(13===e.charCode){if(e.target.value!==m.password)return void alert("\u5bc6\u7801\u9519\u8bef");var t,n={password:e.target.value,timestamp:parseInt(Date.now()/1e3)+86400};localStorage.setItem("password",JSON.stringify(n)),null!=a.props.location.state&&(t=a.props.location.state.from);var s=t||"/";a.props.history.push(s)}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(W,null,s.a.createElement(E.d.Group,{vcentered:!0,style:{minHeight:"50vh"}},s.a.createElement(E.d,{size:4,offset:4},s.a.createElement(E.j,{type:"text",color:"info",size:"large",onKeyPress:this.onKeyPress,placeholder:"\u8f93\u5165\u5bc6\u7801"}))))}}]),t}(n.PureComponent);a(118),a(119);var J=function(){return s.a.createElement(i.a,null,s.a.createElement(o.b,{exact:!0,path:"/",component:D}),s.a.createElement(o.b,{exact:!0,path:"/TimestampTransform",component:k}),s.a.createElement(o.b,{exact:!0,path:"/GeneratorRandomPassword",component:j}),s.a.createElement(o.b,{exact:!0,path:"/Password",component:H}),s.a.createElement(o.b,{exact:!0,path:"/Fm",component:z}),s.a.createElement(o.b,{exact:!0,path:"/Fm/Channel/:Id",component:M}),s.a.createElement(u,{exact:!0,path:"/Video",component:q}),s.a.createElement(u,{exact:!0,path:"/Video/:Code",component:R}))};c.a.render(s.a.createElement(J,null),document.getElementById("app"))},29:function(e){e.exports=JSON.parse('[{"code":"B8D12B59A221C14884F664D07D4AAE53","name":"Faded - Alan Walker","category":"\u97f3\u4e50","cover":"https://36video.oss-cn-hangzhou.aliyuncs.com/Music/B8D12B59A221C14884F664D07D4AAE53.webp","video":"https://36video.oss-cn-hangzhou.aliyuncs.com/Music/B8D12B59A221C14884F664D07D4AAE53.mp4"},{"code":"AWS9BGN773F14YU7SHUPZQM8QC1ALOW2","name":"\u9ece\u660e\u524d\u7684\u9ed1\u6697 - \u5f20\u97f6\u6db5/\u738b\u6670","category":"\u97f3\u4e50","cover":"https://36video.oss-cn-hangzhou.aliyuncs.com/Music/AWS9BGN773F14YU7SHUPZQM8QC1ALOW2.webp","video":"https://36video.oss-cn-hangzhou.aliyuncs.com/Music/AWS9BGN773F14YU7SHUPZQM8QC1ALOW2.mp4"}]')},32:function(e){e.exports=JSON.parse('{"password":"pmwNXMP(QajoEAO~"}')},81:function(e,t,a){e.exports=a(120)}},[[81,1,2]]]);
//# sourceMappingURL=main.f39021f9.chunk.js.map