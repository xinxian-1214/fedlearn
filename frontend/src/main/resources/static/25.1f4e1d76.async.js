(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{kLhj:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return P});n("IzEo");var a,r=n("bx4M"),i=(n("g9YV"),n("wCAj")),s=(n("+L6B"),n("2/Rp")),o=(n("Awhp"),n("KrTs")),c=(n("5Dmo"),n("3S7+")),u=(n("miYZ"),n("tsqr")),l=n("/HRN"),d=n.n(l),p=n("WaGi"),k=n.n(p),m=n("ZDA2"),f=n.n(m),h=n("/+P4"),T=n.n(h),y=n("K47E"),g=n.n(y),E=n("N9n2"),N=n.n(E),I=n("xHqa"),v=n.n(I),w=(n("y8nQ"),n("Vl3Y")),S=n("q1tI"),C=n.n(S),x=n("MuoO"),b=n("7DNP"),R=n("NTd/"),L=n.n(R),q=(w.a.Item,function(t){return L.a.formatMessage(t)}),P=Object(x.connect)(function(t){return{lists:t.taskTrain.lists,username:t.user.currentUser.username,loading:t.loading.effects["taskTrain/queryTrainList"]}})(a=function(t){function e(){var t,n;d()(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=f()(this,(t=T()(e)).call.apply(t,[this].concat(r))),v()(g()(n),"state",{visible:!1,record:{}}),v()(g()(n),"onCancel",function(){n.setState({visible:!1})}),v()(g()(n),"handleRefresh",function(){n.queryTrainList()}),v()(g()(n),"queryTrainList",function(){var t=n.props,e=t.dispatch,a=t.username,r=u.a.loading(q({id:"total.searching"}),0);e({type:"taskTrain/queryTrainList",payload:{username:a,taskId:null}}).then(function(){r()}).catch(function(){r()})}),v()(g()(n),"showdetail",function(t){var e=t.taskName,a=t.modelToken,r="COMPLETE"===t.runningStatus?2:1;(0,n.props.dispatch)(b.routerRedux.push("/task/train/detail?taskName=".concat(e,"&token=").concat(a,"&type=").concat(r)))}),v()(g()(n),"handleStop",function(t,e){var a=n.props;(0,a.dispatch)({type:e,payload:{username:a.username,modelToken:t.modelToken}}).then(function(t){0===t.code?(u.a.success(t.data.describes.join("，")),n.queryTrainList()):1===t.code&&u.a.error(t.data.describes.join("，"))})}),v()(g()(n),"operateItem",function(t){var e=n.props.dispatch,a=t.runningStatus;return C.a.createElement(S.Fragment,null,"COMPLETE"===a&&[C.a.createElement("span",{className:"point",onClick:function(){e(b.routerRedux.push("/task/predict/add?token=".concat(t.modelToken)))}},q({id:"total.reasoning"})),C.a.createElement("span",{className:"point",onClick:function(){e(b.routerRedux.push("/task/train/add?taskId=".concat(t.taskId,"&taskName=").concat(t.taskName,"&token=").concat(t.modelToken,"&type=edit")))}},q({id:"train.retrain"}))],("SUSPEND"===a||"RESTART"===a||"STOP"===a)&&C.a.createElement("span",{style:{color:"#ddd"}},"——"),"RUNNING"===a&&[C.a.createElement("span",{className:"point",onClick:function(){return n.handleStop(t,"taskTrain/resolveTaskStop")}},q({id:"train.stopBtn"})),C.a.createElement("span",{className:"point",onClick:function(){return n.handleStop(t,"taskTrain/resolveTaskSuspend")}},q({id:"train.waiting"}))],"WAITING"===a&&[C.a.createElement("span",{className:"point",onClick:function(){return n.handleStop(t,"taskTrain/resolveTaskStop")}},q({id:"train.stopBtn"})),C.a.createElement("span",{className:"point",onClick:function(){return n.handleStop(t,"taskTrain/resolveTaskRestart")}},q({id:"train.restart"}))])}),v()(g()(n),"trainColumns",function(){n.props.dispatch;return[{title:q({id:"total.taskId"}),key:"taskId",dataIndex:"taskId"},{title:q({id:"total.taskName"}),key:"taskName",dataIndex:"taskName"},{title:q({id:"total.modelId"}),key:"modelToken",dataIndex:"modelToken",render:function(t,e,a){return C.a.createElement(c.a,{title:q({id:"total.detail"})},C.a.createElement("span",{className:"point",onClick:function(){return n.showdetail(e)}},t))}},{title:q({id:"train.status"}),key:"runningStatus",dataIndex:"runningStatus",render:function(t,e,n){var a="",r="";switch(t.toLowerCase()){case"running":a="train.running",r="processing";break;case"suspend":a="train.suspend",r="processing";break;case"restart":a="train.restart",r="processing";break;case"waiting":a="train.waiting",r="warning";break;case"complete":a="train.complete",r="success";break;case"stop":a="train.stop",r="processing";break;default:a="train.unKnown",r="default"}return C.a.createElement(o.a,{status:r,text:q({id:a})})}},{title:q({id:"total.operate"}),key:"operate",dataIndex:"operate",render:function(t,e,a){return n.operateItem(e)}}]}),n}return N()(e,t),k()(e,[{key:"componentDidMount",value:function(){this.queryTrainList()}},{key:"render",value:function(){var t=this.props,e=t.lists,n=t.dispatch;return C.a.createElement(r.a,{title:q({id:"train.list"})},C.a.createElement("div",null,C.a.createElement(s.a,{icon:"undo",type:"primary",style:{marginRight:"20px"},onClick:this.handleRefresh},q({id:"total.refresh"})),C.a.createElement(s.a,{icon:"plus",type:"primary",style:{marginRight:"20px"},onClick:function(){n(b.routerRedux.push("/task/train/add"))}},q({id:"train.create"}))),C.a.createElement("div",{style:{padding:"20px 0"}},C.a.createElement(i.a,{dataSource:e,columns:this.trainColumns(),rowKey:function(t,e){return e}})))}}]),e}(S.PureComponent))||a},t33a:function(t,e,n){t.exports=n("cHUP")(10)}}]);