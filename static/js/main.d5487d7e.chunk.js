(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,o){e.exports=o(31)},17:function(e,t,o){},19:function(e,t,o){},21:function(e,t,o){},23:function(e,t,o){},25:function(e,t,o){},29:function(e,t,o){},31:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(10),c=o.n(r),i=o(9),s=o(8),l=o(1),d=o(2),u=o(4),m=o(3),f=o(5),p=(o(17),o(19),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.form,o=e.children;return a.a.createElement("main",{className:"todo-list-template"},a.a.createElement("div",{className:"title"},"\uc624\ub298 \ud560 \uc77c"),a.a.createElement("section",{className:"form-wrapper"},t),a.a.createElement("section",{className:"todos-wrapper"},o))}}]),t}(n.Component)),h=(o(21),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,o=e.checked,n=e.id,r=e.onToggle,c=e.onRemove,i=e.onEdit,s=e.color;return a.a.createElement("div",{className:"todo-item",onClick:function(){return r(n)}},a.a.createElement("div",{className:"remove",onClick:function(e){e.stopPropagation(),c(n)}}," \xd7 "),a.a.createElement("div",{className:"todo-text ".concat(o?"checked":""," ").concat(s)},a.a.createElement("div",null,t)),o&&a.a.createElement("div",{className:"check-mark"},"\u2713"),a.a.createElement("div",{className:"edit-btn",onClick:function(e){e.stopPropagation(),i(n)}},a.a.createElement("img",{src:"imgs/edit.png",alt:"edit_pecil_Image"})))}}]),t}(n.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.todos!==e.todos}},{key:"render",value:function(){var e=this.props,t=e.todos,o=e.onToggle,n=e.onRemove,r=e.onEdit;return a.a.createElement("div",null,t.map(function(e){return a.a.createElement(h,Object.assign({},e,{onToggle:o,onRemove:n,onEdit:r,key:e.id}))}))}}]),t}(n.Component),g=(o(23),o(25),function(e){var t=e.color,o=e.onSelect,n=e.selected;return a.a.createElement("span",{className:"palette-".concat(t," color ").concat(n===t?"active":""),onClick:function(){o(t)}})}),C=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.colors,o=e.onSelect,n=e.selected;return a.a.createElement("div",{className:"palette"},t.map(function(e){return a.a.createElement(g,{color:e,selected:n,onSelect:o,key:e})}))}}]),t}(n.Component),E=function(e){var t=e.value,o=e.onChange,n=e.onKeyPress,r=e.onColor,c=e.onCreate,i=e.addTargetInput;return a.a.createElement("div",{className:"form"},a.a.createElement("input",{value:t,onChange:o,onKeyPress:n,className:r,ref:i}),a.a.createElement("div",{className:"create-button",onClick:c},"\ucd94\uac00"))},b=function(e){var t=e.value,o=e.onChange,n=e.onKeyPress,r=e.onColor,c=e.onEditSubmit,i=e.editTargetInput;return a.a.createElement("div",{className:"form"},a.a.createElement("input",{value:t,onChange:o,onKeyPress:n,className:r,ref:i}),a.a.createElement("div",{className:"create-button",onClick:c},"Edit"))},k=function(e){var t=e.value,o=e.onChange,n=e.onCreate,r=e.onKeyPress,c=e.colors,i=e.onColor,s=e.onSelect,l=e.onEditSubmit,d=e.formState,u=e.addTargetInput,m=e.editTargetInput;return a.a.createElement("div",null,a.a.createElement(C,{colors:c,selected:i,onSelect:s}),"add"===d.mode?a.a.createElement(E,{value:t,onChange:o,onKeyPress:r,onColor:i,onCreate:n,addTargetInput:u}):a.a.createElement(b,{value:t,onChange:o,onKeyPress:r,onColor:i,onEditSubmit:l,editTargetInput:m}))},S=o(6),j=o.n(S),y=function(e){function t(){var e,o;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={input:"",todos:[],colors:["color1","color2","color3","color4"],selectedColor:"",formState:{mode:"add",editTarget:""}},o._onChange=function(e){o.setState({input:e.target.value})},o._onCreate=function(){var e=o.state,t=e.input,n=e.todos,a=e.selectedColor;if(0!==t.length){var r=0===n.length?-1:n[n.length-1].id,c=n.concat({id:++r,text:t,checked:!1,color:a});o._setCookie("todos",c,300),o.setState({input:"",todos:c,selectedColor:""})}},o._onKeyPress=function(e){"Enter"===e.key&&("add"===o.state.formState.mode?o._onCreate():o._onEditSubmit())},o._onToggle=function(e){var t=o.state.todos,n=t.findIndex(function(t){return t.id===e}),a=t[n],r=Object(s.a)(t);r[n]=Object(i.a)({},a,{checked:!a.checked});var c=r;o._setCookie("todos",c,300),o.setState({todos:c})},o._onRemove=function(e){var t=o.state.todos.filter(function(t){return t.id!==e});o._setCookie("todos",t,300),o.setState({todos:t})},o._onEdit=function(e){if("add"===o.state.formState.mode){var t=o.state.todos,n=t.findIndex(function(t){return t.id===e}),a=t[n];o.setState({input:a.text,formState:{mode:"edit",editTarget:a},selectedColor:a.color})}else o.setState({input:"",formState:{mode:"add",editTarget:""},selectedColor:""});o.editInput&&o.editInput.focus()},o._onEditSubmit=function(){var e=o.state,t=e.todos,n=e.formState,a=e.input,r=e.selectedColor,c=t.findIndex(function(e){return e.id===n.editTarget.id}),l=t[c],d=Object(s.a)(t);d[c]=Object(i.a)({},l,{text:a,color:r});var u=d;o._setCookie("todos",u,300),o.setState({todos:u,formState:{mode:"add",editTarget:""},input:"",selectedColor:""})},o._onSelect=function(e){o.setState({selectedColor:e})},o._setCookie=function(e,t,o){var n=new Date,a=n.getDate();n.setDate(a+o);var r={expires:n};j.a.save(e,t,r)},o._getCookie=function(e){return new Promise(function(t,o){t(j.a.load(e))})},o._deleteCookie=function(e){j.a.remove(e)},o}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=[{id:0,text:"\uc624\ub298\uc758 \ud560 \uc77c1",checked:!1,color:""},{id:1,text:"\ud074\ub9ad\ud558\uba74 \uccb4\ud06c\uac00 \ub429\ub2c8\ub2e4.",checked:!0,color:""},{id:2,text:"\uae00\uc528 \uc0c9\ub3c4 \ubc14\uafd4\ubcf4\uc138\uc694.",checked:!1,color:"color3"}];this._getCookie("todos").then(function(o){void 0!==o?e.setState({todos:o}):e.setState({todos:t})})}},{key:"componentDidUpdate",value:function(){this.editInput&&this.editInput.focus(),this.addInput&&this.addInput.focus()}},{key:"shouldComponentUpdate",value:function(e,t){return console.log(this.state),console.log(t),!0}},{key:"render",value:function(){var e=this,t=this.state,o=t.input,n=t.todos,r=t.colors,c=t.selectedColor,i=t.formState,s=this._onChange,l=this._onCreate,d=this._onKeyPress,u=this._onToggle,m=this._onRemove,f=this._onSelect,h=this._onEdit,g=this._onEditSubmit;return a.a.createElement(p,{form:a.a.createElement(k,{value:o,onKeyPress:d,onChange:s,onCreate:l,onEditSubmit:g,formState:i,addTargetInput:function(t){e.addInput=t},editTargetInput:function(t){e.editInput=t},colors:r,onColor:c,onSelect:f})},a.a.createElement(v,{todos:n,onToggle:u,onRemove:m,onEdit:h}))}}]),t}(n.Component);o(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.d5487d7e.chunk.js.map