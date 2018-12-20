(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(72)},41:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),s=a.n(i),l=(a(24),a(4)),o=a(5),c=a(8),u=a(6),m=a(9),b=(a(41),a(73));a(43);var v=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"current-team-summary"},r.a.createElement("span",null," ",e.currentBattingTeam," "),r.a.createElement("span",null,e.currentBattingTeamScore,"/",e.currentTeamWickets," in ",e.currentTeamOver,"/",e.totalOvers)),r.a.createElement("div",null,r.a.createElement("span",{className:"previous-team-summary"},function(e){return e.previousBattingTeam?r.a.createElement("span",{className:"previousBattingTeamScore"}," ",e.previousBattingTeam," scored ",e.previousBattingTeamScore,"/",e.previousBattingTeamWickets," in ",e.previousTeamOvers," overs "):r.a.createElement("span",null)}(e))))},g=a(7);function B(e){return Math.floor(e/6)+"."+e%6}var E=Object(g.b)(function(e){return{currentBattingTeam:e.game.currentBattingTeam,previousBattingTeam:e.game.previousBattingTeam,currentTeamOver:B(e.team[e.game.currentBattingTeam].noOfBalls),previousTeamOvers:e.team[e.game.previousBattingTeam]&&B(e.team[e.game.previousBattingTeam].noOfBalls),currentBattingTeamScore:e.team[e.game.currentBattingTeam].totalScore,previousBattingTeamScore:e.team[e.game.previousBattingTeam]&&e.team[e.game.previousBattingTeam].totalScore,currentTeamWickets:e.team[e.game.currentBattingTeam].wickets,totalOvers:e.game.noOfOvers,previousBattingTeamWickets:e.team[e.game.previousBattingTeam]&&e.team[e.game.previousBattingTeam].wickets}})(v),p=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"getTableStats",value:function(){return this.props.stats.filter(function(e){return e.length>0}).map(function(e,t){var a=e.map(function(e,t){return r.a.createElement("td",{key:t},e)});return r.a.createElement("tr",{key:t},a)})}},{key:"getTableHeaders",value:function(){return this.props.headers.map(function(e,t){return r.a.createElement("th",{key:t},e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"panel"},r.a.createElement("br",null),r.a.createElement("div",{className:"panel-header"},r.a.createElement("h5",null,this.props.tableName)),r.a.createElement("div",{className:"panel-body"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,this.getTableHeaders())),r.a.createElement("tbody",null,this.getTableStats()))))}}]),t}(r.a.Component);function h(e){var t=e.game.currentBattingTeam,a=e.team[t].players,n=function(e){var t={};return e.map(function(e,a){return e.map(function(e,a){return t.hasOwnProperty(e.batsman)||(t[e.batsman]={runs:0,balls:0,fours:0,sixes:0,isOut:!1}),t[e.batsman].runs+=e.runs,t[e.batsman].balls+="W"===e.extraType?0:1,t[e.batsman].fours+=4===e.runs?1:0,t[e.batsman].sixes+=6===e.runs?1:0,t[e.batsman].isOut=e.isOut,null})}),t}(e.team[t].overs);return Object.keys(a).map(function(e,t){return void 0===n[e]?[e,0,0,0,0,0]:[n[e].isOut?e+"(out)":e,n[e].runs,n[e].balls,n[e].fours,n[e].sixes,(a=n[e].runs,r=n[e].balls,0===r?0:(a/r*100).toFixed(2))];var a,r})}var w=Object(g.b)(function(e){return{tableName:"Batting Table",stats:h(e),headers:["Batsman","Runs","Balls","Fours","Sixes","SR"]}})(p);function O(e){var t=e.game.currentBattingTeam,a=e.game.currentBowlingTeam,n=e.team[a].players,r=function(e){var t={};return e.map(function(e,a){var n=0;return e.map(function(e,a){return t.hasOwnProperty(e.bowler)||(t[e.bowler]={balls:0,runs:0,maidens:0,wickets:0,extras:0}),t[e.bowler].runs+=e.runs+e.extraRuns,t[e.bowler].balls+=function(e){return!(e.isExtra&&(!e.isExtra||"B"!==e.extraType&&"Lb"!==e.extraType))}(e)?1:0,t[e.bowler].wickets+=e.isOut?1:0,t[e.bowler].extras+=!e.isExtra||"W"!==e.extraType&&"N"!==e.extraType?0:1,n+=e.runs+e.extraRuns,e}),0!==e.length&&(t[e[0].bowler].maidens+=0===n?1:0),e}),t}(e.team[t].overs);return Object.keys(n).map(function(e,t){return void 0===r[e]?[]:[e,(a=r[e].balls,parseInt(a/6)+"."+a%6),r[e].maidens,r[e].runs,r[e].extras,r[e].wickets];var a})}var f=Object(g.b)(function(e){return{tableName:"Bowling Table",stats:O(e),headers:["Bowler","Overs","Maidens","Runs","Extras","Wickets"]}})(p),d=(a(49),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(E,null),r.a.createElement(w,null),r.a.createElement(f,null),r.a.createElement("div",{className:"scoreentry-link-container"},r.a.createElement(b.a,{to:"/"},"Score Entry")))}}]),t}(r.a.Component)),T=a(75),N=a(74),y=(a(51),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"current-over-container"},r.a.createElement("div",null,"This Over: ",this.props.currentOverDetails),r.a.createElement("div",null,"Bowler: ",this.props.currentBowler))}}]),t}(r.a.Component)),A=Object(g.b)(function(e){return{currentBowler:e.game.currentBowler,currentOverDetails:function(){var t=e.team[e.game.currentBattingTeam].overs;return t.length>0?t[t.length-1].map(function(e){var t="";return 0===e.runs&&(e.isExtra||e.isOut)?t="":t+=e.runs,e.isExtra&&(t+=e.extraType),e.isOut&&(t+="Out"),t}).join("  "):""}()}})(y),S=(a(53),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).runs=[0,1,2,3,4,6],a.extras=["W","N","B","Lb"],a.getRunDataTemplate=function(){return a.runs.map(function(e){return r.a.createElement("button",{key:e,className:"score-button btn "+(a.state.runs===e.toString()?"btn-primary":"btn-light"),onClick:a.handleRunChange},e)})},a.getExtrasDataTemplate=function(){return a.extras.map(function(e){return r.a.createElement("button",{key:e,className:"score-button btn "+(a.state.extraType===e.toString()?"btn-primary":"btn-light"),onClick:a.handleExtraChange},e)})},a.handleRunChange=function(e){var t=e.target.innerText;a.setState({runs:a.state.runs===t?null:t})},a.handleExtraChange=function(e){var t=e.target.innerText;a.setState({extraType:a.state.extraType===t?null:t,isExtra:a.state.extraType!==t})},a.handleOutChange=function(){a.setState({isOut:!a.state.isOut})},a.handleNextBallEvent=function(){var e=a.state,t=e.runs,n=e.isExtra,r=e.isOut,i=e.extraType;a.setState({runs:null,isExtra:!1,isOut:!1,extraType:null}),a.props.recordRuns(t,n,i,r)},a.state={runs:null,isExtra:!1,isOut:!1,extraType:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"runs-container"},this.getRunDataTemplate()),r.a.createElement("div",{className:"extra-runs-container"},r.a.createElement("span",{className:"extra-label"},"Extras\xa0"),this.getExtrasDataTemplate()),r.a.createElement("div",{className:"out-container"},r.a.createElement("button",{className:"score-button btn "+(this.state.isOut?"btn-primary":"btn-light"),onClick:this.handleOutChange},"Out")),r.a.createElement("div",{className:"next-ball-container"},r.a.createElement("button",{className:"btn btn-lg "+(this.state.runs||this.state.isOut||this.state.isExtra?"btn-primary":"btn-secondary disabled"),onClick:this.handleNextBallEvent},"Next Ball")))}}]),t}(r.a.Component)),k=a(10);function j(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i={type:e};return a.forEach(function(e,t){i[a[t]]=n[t]}),i}}var x=j("OVER_COMPLETE","teamName"),F=j("UPDATE_TEAM_SCORE","teamName","totalRuns"),_=j("UPDATE_NO_OF_BALLS","teamName"),C=j("UPDATE_OVER_DETAILS","teamName","deliveryData","currentOver"),R=j("CHANGE_STRIKER"),D=j("UPDATE_WICKET","teamName","batsman"),W=j("SET_NEW_BATSMAN","batsman"),I=j("INNINGS_OVER"),L=j("DECLARE_WINNER","winningTeam"),P=j("DECLARE_TIE"),M=j("CHANGE_BOWLER","bowlingTeam","currentBowler"),G=j("SET_NEW_BOWLER","bowler");function U(e,t){return!e||e&&("Lb"===t||"B"===t)}function H(e,t,a,n){return function(i,s){var l=s(),o=Object(k.a)({},l.team[l.game.currentBattingTeam]),c=l.game.currentBattingTeam,u=l.game.currentBowlingTeam,m=l.game.previousBattingTeam,b=l.game.currentBatsmen.filter(function(e){return e.isStriker})[0].name,v=l.game.currentBowler,g=!t||"N"!==a&&"W"!==a?0:1,B=e?parseInt(e,10):0,E=l.game.noOfWickets,p=o.overs.length-1,h=o.overs[p].length>0?function(e){var t=0;return e.forEach(function(e){U(e.isExtra,e.extraType)&&t++}),t}(o.overs[p]):0,w=B+g;if((i(F(c,w)),U(t,a)&&(i(_(c)),h+=1),i(C(c,{batsman:b,bowler:v,isExtra:t,isOut:n,extraRuns:g,runs:B,extraType:a},p)),m)&&l.team[m].totalScore<o.totalScore+w)return void i(L(c));if(e%2>0&&i(R()),6===h)if(o.overs.length===l.game.noOfOvers){if(m)return void r(o,l,c,m,i,w);i(I())}else i(x(c)),i(R()),i(M(u,v));if(n)if(o.wickets+1===E){if(m)return void r(o,l,c,m,i,w);i(I())}else i(D(c,b))};function r(e,t,a,n,r,i){if(e.totalScore+i===t.team[n].totalScore)r(P());else{var s=e.totalScore+i>t.team[n].totalScore?a:n;r(L(s))}}}var K=Object(g.b)(null,function(e){return{recordRuns:function(t,a,n,r){e(H(t,a,n,r))}}})(S);a(55);var V=function(e){return r.a.createElement("div",{className:"current-striker-container"},r.a.createElement("div",null,r.a.createElement("span",null,"This Ball")),r.a.createElement("div",{className:"current-striker-btn-container"},e.strikers.map(function(e,t){var a=e.isStriker?"btn btn-success":"btn btn-secondary";return r.a.createElement("div",{key:t,className:a},e.name)})))},X=Object(g.b)(function(e){return{strikers:e.game.currentBatsmen}})(V),Y=(a(57),a(29)),J=(a(67),{fontFamily:"sans-serif",textAlign:"center"}),$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).isNewBatsman=!1,a.isNewBowler=!1,a.onCloseModal=function(){a.setState({open:!1})},a.onBatsmanSelect=function(){a.setState({displaySelectedPlayer:!0})},a.setNewPlayer=function(){a.isNewBatsman&&a.isNewBowler?(a.props.setBatsman(a.state.selectedBatsman),a.props.setBowler(a.state.selectedBowler)):a.isNewBowler?a.props.setBowler(a.state.selectedBowler):a.isNewBatsman&&a.props.setBatsman(a.state.selectedBatsman),a.isNewBatsman=!1,a.isNewBowler=!1,a.setState({open:!1})},a.state={open:!1,displaySelectedPlayer:!1,batsmen:[],bowlers:[],selectedBatsman:"",selectedBowler:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){var a,n,r=[],i=[];for(var s in e.wickets>this.props.wickets&&(this.isNewBatsman=!0,a=Object(k.a)({},e.bastmen)),e.overs>this.props.overs&&(this.isNewBowler=!0,n=Object(k.a)({},e.bowlers)),a)a[s].isAvaialbleForBatting&&r.push(s);for(var l in n)n[l].isAvaialbleForBowling&&i.push(l);(i.length>0||r.length>0)&&this.setState({batsmen:r,bowlers:i,open:!0,selectedBatsman:r&&r[0],selectedBowler:i&&i[0]})}},{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement("div",null,r.a.createElement(Y.a,{className:"modal-dialog",closeOnEsc:!1,closeOnOverlayClick:!1,showCloseIcon:!1,open:t,onClose:this.onCloseModal,center:!0},r.a.createElement("h6",{style:J},this.isNewBatsman&&"Select Batsman"),r.a.createElement("div",{className:"row "+(this.isNewBatsman?"show":"hide")},r.a.createElement("select",{className:"form-control col-sm-12",value:this.state.selectedBatsman,onChange:function(t){return e.setState({selectedBatsman:t.target.value,validationError:""===t.target.value?"You must select your favourite team":""})}},this.state.batsmen.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("br",null),r.a.createElement("h6",{style:J},this.isNewBowler&&"Select Bowler"),r.a.createElement("div",{className:"row "+(this.isNewBowler?"show":"hide")},r.a.createElement("select",{className:"form-control col-sm-12",value:this.state.selectedBowler,onChange:function(t){return e.setState({selectedBowler:t.target.value,validationError:""===t.target.value?"You must select your favourite team":""})}},this.state.bowlers.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{onClick:this.setNewPlayer,className:"btn btn-success"},"Submit"))))}}]),t}(r.a.Component),q=Object(g.b)(function(e){return{bastmen:e.team[e.game.currentBattingTeam].players,wickets:e.team[e.game.currentBattingTeam].wickets,overs:e.team[e.game.currentBattingTeam].overs.length,bowlers:e.team[e.game.currentBowlingTeam].players}},function(e){return{setBatsman:function(t){e(W(t))},setBowler:function(t){e(G(t))}}})($),z=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(E,null),r.a.createElement(A,null),r.a.createElement(X,null),r.a.createElement(K,null),r.a.createElement("div",{className:"scoreboard-link-container"},r.a.createElement(b.a,{to:"/scoreboard"},"Scoreboard")),r.a.createElement(q,null))}}]),t}(r.a.Component),Q=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(T.a,{basename:"/cricket/"},r.a.createElement("div",null,r.a.createElement(N.a,{path:"/",exact:!0,component:z}),r.a.createElement(N.a,{path:"/scoreboard",component:d})))}}]),t}(r.a.Component),Z=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(Q,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(12),te=a(17),ae=a.n(te),ne={currentBattingTeam:"India",previousBattingTeam:null,currentBowlingTeam:"Australia",currentBatsmen:[{name:"Sehwag",isStriker:!0},{name:"Sachin",isStriker:!1}],currentBowler:"McGrath",noOfOvers:5,noOfWickets:5},re={currentBattingTeam:"India",previousBattingTeam:null,currentBowlingTeam:"Australia",currentBatsmen:[{name:"Sehwag",isStriker:!0},{name:"Sachin",isStriker:!1}],currentBowler:"McGrath",noOfOvers:5,noOfWickets:5},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_STRIKER":return Object(k.a)({},e,{currentBatsmen:e.currentBatsmen.map(function(e){return Object(k.a)({},e,{isStriker:!e.isStriker})})});case"SET_NEW_BATSMAN":return Object(k.a)({},e,{currentBatsmen:e.currentBatsmen.map(function(e){return e.isStriker&&(e.name=t.batsman),e})});case"SET_NEW_BOWLER":return Object(k.a)({},e,{currentBowler:t.bowler});case"INNINGS_OVER":return ae()({text:"First inning is over!!!!!!!!!!!!",icon:"success",closeOnClickOutside:!1,button:"Start new inning"}),Object(k.a)({},e,{currentBattingTeam:"Australia",previousBattingTeam:"India",currentBowlingTeam:"India",currentBowler:"Khan",currentBatsmen:[{name:"Gilchrist",isStriker:!0},{name:"Hayden",isStriker:!1}]});case"DECLARE_WINNER":return ae()({text:"Congratulations, "+t.winningTeam+". You have won this match.",icon:"success",closeOnClickOutside:!1,button:"Start new game"}),re;case"DECLARE_TIE":return ae()({text:"The game is a draw.",icon:"success",closeOnClickOutside:!1,button:"Start new game"}),re}return e},se={India:{totalScore:0,noOfBalls:0,wickets:0,players:{Sehwag:{isAvaialbleForBatting:!1,isAvaialbleForBowling:!0},Sachin:{isAvaialbleForBatting:!1,isAvaialbleForBowling:!0},Kohli:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Dhoni:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Singh:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Khan:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0}},overs:[[]]},Australia:{totalScore:0,noOfBalls:0,wickets:0,players:{Hayden:{isAvaialbleForBatting:!1,isAvaialbleForBowling:!1},Gilchrist:{isAvaialbleForBatting:!1,isAvaialbleForBowling:!0},Ponting:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Clark:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},McGrath:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Warne:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0}},overs:[[]]}},le={India:{totalScore:0,noOfBalls:0,wickets:0,players:{Sehwag:{isAvaialbleForBatting:!1,isAvaialbleForBowling:!0},Sachin:{isAvaialbleForBatting:!1,isAvaialbleForBowling:!0},Kohli:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Dhoni:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Singh:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Khan:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0}},overs:[[]]},Australia:{totalScore:0,noOfBalls:0,wickets:0,players:{Hayden:{isAvaialbleForBatting:!1,isAvaialbleForBowling:!1},Gilchrist:{isAvaialbleForBatting:!1,isAvaialbleForBowling:!0},Ponting:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Clark:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},McGrath:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0},Warne:{isAvaialbleForBatting:!0,isAvaialbleForBowling:!0}},overs:[[]]}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,a=Object(k.a)({},e);switch(t.type){case"UPDATE_TEAM_SCORE":return a[t.teamName].totalScore+=t.totalRuns,a;case"UPDATE_NO_OF_BALLS":return a[t.teamName].noOfBalls+=1,a;case"UPDATE_OVER_DETAILS":return a[t.teamName].overs[t.currentOver].push(t.deliveryData),a;case"OVER_COMPLETE":return a[t.teamName].overs.push([]),a;case"UPDATE_WICKET":return a[t.teamName].wickets+=1,a[t.teamName].players[t.batsman].isAvaialbleForBatting=!1,a;case"CHANGE_BOWLER":return Object.keys(a[t.bowlingTeam].players).forEach(function(e){a[t.bowlingTeam].players[e].isAvaialbleForBowling=!0}),a[t.bowlingTeam].players[t.currentBowler].isAvaialbleForBowling=!1,a;case"DECLARE_TIE":case"DECLARE_WINNER":return le}return a},ce=Object(ee.c)({game:ie,team:oe}),ue=a(34),me=Object(ee.e)(ce,{},Object(ee.d)(Object(ee.a)(ue.a),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||ee.d));s.a.render(r.a.createElement(g.a,{store:me},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.f1d8ea32.chunk.js.map