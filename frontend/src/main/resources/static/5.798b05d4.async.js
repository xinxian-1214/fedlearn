(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"61Lz":function(n,e,r){"use strict";r("5NDa");var t=r("5rEg"),a=r("htGi"),o=r.n(a),u=r("/HRN"),s=r.n(u),i=r("WaGi"),c=r.n(i),l=r("ZDA2"),p=r.n(l),f=r("/+P4"),d=r.n(f),h=r("N9n2"),m=r.n(h),g=r("xHqa"),v=r.n(g),w=r("q1tI"),M=r.n(w),P=function(n){function e(){return s()(this,e),p()(this,d()(e).apply(this,arguments))}return m()(e,n),c()(e,[{key:"render",value:function(){var n=this;return M.a.createElement(t.a.TextArea,o()({},this.props,{onBlur:function(e){e.target.value=(e.target.value||"").trim(),n.props.onChange(e),n.props.onBlur(e)}}))}}]),e}(w.PureComponent);v()(P,"defaultProps",{onChange:function(){},onBlur:function(){}});var E=function(n){function e(){return s()(this,e),p()(this,d()(e).apply(this,arguments))}return m()(e,n),c()(e,[{key:"render",value:function(){var n=this;return M.a.createElement(t.a,o()({},this.props,{onBlur:function(e){e.target.value=(e.target.value||"").trim(),n.props.onChange(e),n.props.onBlur(e)}}))}}]),e}(w.PureComponent);v()(E,"defaultProps",{onChange:function(){},onBlur:function(){}}),E.TextArea=P,e.a=E},Mlzr:function(n,e,r){"use strict";function t(n){var e=new RegExp("(^|&|\\?)"+n+"=([^&]*)(&|$)"),r=window.location.href.match(e);return null!=r?r[2]:null}r.d(e,"a",function(){return t})},RhEb:function(n,e,r){"use strict";r.r(e);r("IzEo");var t,a,o=r("bx4M"),u=(r("+L6B"),r("2/Rp")),s=r("/HRN"),i=r.n(s),c=r("WaGi"),l=r.n(c),p=r("ZDA2"),f=r.n(p),d=r("/+P4"),h=r.n(d),m=r("N9n2"),g=r.n(m),v=r("q1tI"),w=r.n(v),M=r("MuoO"),P=r("7DNP"),E=r("NTd/"),b=r.n(E),y=r("htGi"),N=r.n(y),C=(r("miYZ"),r("tsqr")),x=r("K47E"),k=r.n(x),q=r("xHqa"),D=r.n(q),O=r("2taU"),A=r.n(O),j=(r("y8nQ"),r("Vl3Y")),B=(r("Mlzr"),r("61Lz")),H=(r("f/1Y"),r("xaQC")),R=(r("tutt"),r("20nU"),r("jaE0"),r("TVw2")),G=r("aCH8"),T=r.n(G),V=j.a.Item,I=Object(M.connect)(function(n){return A()(n.taskJoin),{username:n.user.currentUser.username}})(t=j.a.create({})(t=Object(H.a)(["detail"])(t=function(n){function e(){var n,r;i()(this,e);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return r=f()(this,(n=h()(e)).call.apply(n,[this].concat(a))),D()(k()(r),"handlePwdBlur",function(n){var e=r.props.form,t=e.getFieldValue,a=e.resetFields;n.target.value!=t("rePassword")&&(a(["conPassword"]),C.a.error(Object(R.b)({id:"userManager.passwordEqu"})))}),D()(k()(r),"handlePwdChange",function(n){var e=r.props.form,t=e.getFieldValue,a=e.resetFields;n.target.value!=t("conPassword")&&a(["conPassword"])}),D()(k()(r),"handleSubmit",function(n){n&&n.preventDefault();var e=r.props,t=e.dispatch;(0,e.form.validateFields)(function(n,e){n||t({type:"user/register",payload:{username:e.userName,password:T()(e.rePassword)}}).then(function(n){n&&t(P.routerRedux.push("/user/manager/list"))})})}),r}return g()(e,n),l()(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var n=this,e=this.props.form.getFieldDecorator,r=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,16})"),t={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:12}}};return w.a.createElement(j.a,{className:"task-train-form"},w.a.createElement(V,N()({label:Object(R.b)({id:"userManager.userName"})},t),e("userName",{rules:[{required:!0,message:b.a.formatMessage({id:"userManager.userNameNull"})}]})(w.a.createElement(B.a,{placeholder:Object(R.b)({id:"userManager.userName"})}))),w.a.createElement(V,N()({label:Object(R.b)({id:"userManager.password"})},t),e("rePassword",{rules:[{required:!0,message:b.a.formatMessage({id:"userManager.passwordNull"})},{pattern:r,message:b.a.formatMessage({id:"userManager.passwordSimple"})}]})(w.a.createElement(B.a,{type:"password",placeholder:Object(R.b)({id:"userManager.passwordTips"}),onBlur:function(e){return n.handlePwdChange(e)}}))),w.a.createElement(V,N()({label:Object(R.b)({id:"userManager.rePassword"})},t),e("conPassword",{rules:[{required:!0,message:b.a.formatMessage({id:"userManager.rePasswordNull"})}]})(w.a.createElement(B.a,{type:"password",placeholder:Object(R.b)({id:"userManager.passwordTips"}),onBlur:function(e){return n.handlePwdBlur(e)}}))),w.a.createElement(V,{wrapperCol:{xs:{span:24},sm:{span:12,offset:6}}},w.a.createElement(u.a,{type:"primary",onClick:this.handleSubmit},b.a.formatMessage({id:"join.ok"}))))}}]),e}(v.PureComponent))||t)||t)||t;r.d(e,"default",function(){return z});var z=Object(M.connect)(function(n){return{userManager:n.userManager}})(a=function(n){function e(){return i()(this,e),f()(this,h()(e).apply(this,arguments))}return g()(e,n),l()(e,[{key:"render",value:function(){var n=this.props.dispatch;return w.a.createElement(o.a,{title:b.a.formatMessage({id:"userManager.add"}),extra:w.a.createElement(u.a,{type:"primary",onClick:function(){n(P.routerRedux.push("/user/manager/list"))}},b.a.formatMessage({id:"join.goback"}))},w.a.createElement(I,null))}}]),e}(v.PureComponent))||a},TVw2:function(n,e,r){"use strict";r.d(e,"b",function(){return s}),r.d(e,"d",function(){return i}),r.d(e,"e",function(){return c}),r.d(e,"a",function(){return l}),r.d(e,"c",function(){return p});var t=r("Cg2A"),a=r.n(t),o=r("NTd/"),u=r.n(o),s=function(n){return u.a.formatMessage(n)},i={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:12}},style:{textAlign:"left"}},c={wrapperCol:{xs:{span:24},sm:{span:12,offset:6}}},l=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:+a()(),r=(+new Date(e)-+new Date(n))/1e3,t=Math.floor(r%86400/3600),o=Math.floor(r%3600/60),u=Math.floor(r%60);return"".concat(t<10?"0":"").concat(t,":").concat(o<10?"0":"").concat(o,":").concat(u<10?"0":"").concat(u)},p=function(n,e){return e.map(function(e){return"add"!==n&&"edit"!==n||(e.value="NUMS"===e.type?Number(e.defaultValue):e.defaultValue,"NUMS"===e.type&&0==e.defaultValue&&(e.value=0)),e})}},"f/1Y":function(n,e,r){"use strict";r.d(e,"a",function(){return T});var t=r("hfKm"),a=r.n(t),o=r("2Eek"),u=r.n(o),s=r("XoMD"),i=r.n(s),c=r("Jo+v"),l=r.n(c),p=r("4mXO"),f=r.n(p),d=r("pLtp"),h=r.n(d),m=r("htGi"),g=r.n(m),v=r("/HRN"),w=r.n(v),M=r("WaGi"),P=r.n(M),E=r("ZDA2"),b=r.n(E),y=r("/+P4"),N=r.n(y),C=r("K47E"),x=r.n(C),k=r("N9n2"),q=r.n(k),D=r("xHqa"),O=r.n(D),A=r("q1tI"),j=r.n(A);function B(n,e){var r=h()(n);if(f.a){var t=f()(n);e&&(t=t.filter(function(e){return l()(n,e).enumerable})),r.push.apply(r,t)}return r}function H(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(r,!0).forEach(function(e){O()(n,e,r[e])}):i.a?u()(n,i()(r)):B(r).forEach(function(e){a()(n,e,l()(r,e))})}return n}var R={options:{status:"normal",percent:0}},G=function(n){function e(n){var r;return w()(this,e),r=b()(this,N()(e).call(this,n)),O()(x()(r),"changeProgressOptions",function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.setState(function(e){return{options:H({},e.options,{},n)}})}),r.state={options:H({},R.options,{},n.options)},r}return q()(e,n),P()(e,[{key:"render",value:function(){return this.props.children({changeProgress:this.changeProgressOptions,progress:this.state.options})}}]),e}(A.PureComponent);O()(G,"defaultProps",R);var T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){return function(r){function t(){return w()(this,t),b()(this,N()(t).apply(this,arguments))}return q()(t,r),P()(t,[{key:"render",value:function(){var r=this;return j.a.createElement(G,{options:n},function(n){var t=n.progress,a=n.changeProgress;return j.a.createElement(e,g()({},r.props,{progress:t,changeProgress:a}))})}}]),t}(A.PureComponent)}}},t33a:function(n,e,r){n.exports=r("cHUP")(10)},tutt:function(n,e,r){"use strict";var t=r("htGi"),a=r.n(t),o=(r("+L6B"),r("2/Rp")),u=r("/HRN"),s=r.n(u),i=r("WaGi"),c=r.n(i),l=r("ZDA2"),p=r.n(l),f=r("/+P4"),d=r.n(f),h=r("K47E"),m=r.n(h),g=r("N9n2"),v=r.n(g),w=r("xHqa"),M=r.n(w),P=(r("y8nQ"),r("Vl3Y")),E=(r("5NDa"),r("5rEg")),b=r("q1tI"),y=r.n(b),N=r("61Lz"),C=r("NTd/"),x=r.n(C),k=E.a.Group,q=P.a.Item;b.PureComponent},xaQC:function(n,e,r){"use strict";r.d(e,"a",function(){return G});var t=r("hfKm"),a=r.n(t),o=r("2Eek"),u=r.n(o),s=r("XoMD"),i=r.n(s),c=r("Jo+v"),l=r.n(c),p=r("4mXO"),f=r.n(p),d=r("htGi"),h=r.n(d),m=r("pLtp"),g=r.n(m),v=r("/HRN"),w=r.n(v),M=r("WaGi"),P=r.n(M),E=r("ZDA2"),b=r.n(E),y=r("/+P4"),N=r.n(y),C=r("K47E"),x=r.n(C),k=r("N9n2"),q=r.n(k),D=r("xHqa"),O=r.n(D),A=r("q1tI"),j=r.n(A);function B(n,e){var r=g()(n);if(f.a){var t=f()(n);e&&(t=t.filter(function(e){return l()(n,e).enumerable})),r.push.apply(r,t)}return r}function H(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?B(r,!0).forEach(function(e){O()(n,e,r[e])}):i.a?u()(n,i()(r)):B(r).forEach(function(e){a()(n,e,l()(r,e))})}return n}var R=function(n){function e(n){var r;w()(this,e),r=b()(this,N()(e).call(this,n)),O()(x()(r),"handleModalActive",function(n){var e=n.name,t=n.opt,a=void 0===t?{}:t;r.setState(function(n){return{modal:H({},n.modal,O()({},e,a))}})});var t=(n.options?n.options instanceof Array?n.options:g()(n.options):[]).reduce(function(n,e){return n[e]={show:!1,data:null},n},{});return r.state={modal:t},r}return q()(e,n),P()(e,[{key:"render",value:function(){var n=this.state.modal;return this.props.children({modal:n,changeModal:this.handleModalActive})}}]),e}(A.PureComponent),G=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){return function(r){function t(){return w()(this,t),b()(this,N()(t).apply(this,arguments))}return q()(t,r),P()(t,[{key:"render",value:function(){var r=this;return j.a.createElement(R,{options:n},function(n){var t=n.modal,a=n.changeModal;return j.a.createElement(e,h()({},r.props,{changeModal:a,modal:t}))})}}]),t}(A.PureComponent)}}}}]);