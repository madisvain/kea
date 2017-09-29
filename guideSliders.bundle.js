webpackJsonp([3],{588:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return k});var i,s,l=n(742),c=(n.n(l),n(6)),u=n.n(c),d=n(54),p=(n.n(d),n(155)),m=n(642),f=n(744),h=n(745),g=n(243),y=n(628),b=n(615),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E={full:n(746),static:n(747),addSagaImports:n(748),addSagaStart:n(749),saga1Before:n(750),saga1After:n(751),saga2Effects:n(752)},k=(i=Object(d.connect)({actions:[b.a,["toggleFeature"]],props:[b.a,["features"]]}))(s=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),w(t,[{key:"render",value:function(){var e=this.props.features,t=this.actions.toggleFeature;return u.a.createElement("div",{className:"sliders-scene"},u.a.createElement("div",{className:"description"},u.a.createElement("h2",null,"Example #3 - Sliders"),u.a.createElement("p",null,"This example demonstrates side effects through sagas."),u.a.createElement("p",null,"We will build a slider that will update its image every 5 seconds."),u.a.createElement("h2",null,"Final result"),u.a.createElement("p",null,"The final result will look like this:"),u.a.createElement("div",{className:"demo"},u.a.createElement("div",{className:"slider-container"},u.a.createElement(m.a,{id:1,initialSlide:0}))),u.a.createElement("p",null,"Whenever you press any of the dots the 5 second counter will reset."),u.a.createElement(y.a,null),u.a.createElement("h2",null,"1. The static component"),u.a.createElement("p",null,"Based on the knowledge from the previous chapters, you should be able to build a static slider."),u.a.createElement("p",null,"The code for it will look something like this:"),u.a.createElement(g.default,{className:"javascript"},E.static),u.a.createElement("p",null,"Giving us the following result:"),u.a.createElement("div",{className:"demo"},u.a.createElement("div",{className:"slider-container"},u.a.createElement(f.a,null))),u.a.createElement("p",null,"Click it! It works, but won't change the slides automatically."),u.a.createElement("h2",null,"2. Just Add Sagas"),u.a.createElement("p",null,"For that we need to write some ",u.a.createElement("a",{href:"https://redux-saga.js.org/"},"sagas"),"."),u.a.createElement("p",null,u.a.createElement("a",{href:"https://redux-saga.js.org/"},"Sagas")," provide a nice way to write code that has side effects. They might be unfamiliar at first, but when you get to know them, you'll wonder how you ever wrote your frontend code without them."),u.a.createElement("p",null,u.a.createElement("button",{onClick:function(){return t("sagas")}},"I need to brush up on my Sagas")),e.sagas?u.a.createElement("div",{className:"extra-help"},u.a.createElement("p",null,"Here is a quick refresher on sagas. Please read ",u.a.createElement("a",{href:"https://redux-saga.js.org/"},"the redux-saga documentation")," for more details."),u.a.createElement("p",null,"The cool thing with sagas is that they let you write async code in a sequential manner."),u.a.createElement("p",null,"When before you would write:"),u.a.createElement(g.default,{className:"javascript"},E.saga1Before),u.a.createElement("p",null,"With sagas you can write the same code like this:"),u.a.createElement(g.default,{className:"javascript"},E.saga1After),u.a.createElement("p",null,"This is a simple example, but you can probably see how the magical ",u.a.createElement("code",null,"yield")," keyword will make your life so much easier."),u.a.createElement("p",null,u.a.createElement("button",{onClick:function(){return t("sagasGenerators")}},"What the ...?")),e.sagasGenerators?u.a.createElement("div",{className:"extra-help"},u.a.createElement("p",null,"Notice the ",u.a.createElement("code",null,"*")," between ",u.a.createElement("code",null,"function * doSomething()")," and the ",u.a.createElement("code",null,"yield")," before ",u.a.createElement("code",null,"yield api.fetchUsers()"),"."),u.a.createElement("p",null,"The ",u.a.createElement("code",null,"*")," indicates that youre creating a ",u.a.createElement("a",{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/function*"},u.a.createElement("em",null,"generator function")),". From MDN: ",u.a.createElement("em",null,"Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.")),u.a.createElement("p",null,"It's a bit like using the new ES ",u.a.createElement("code",null,"async")," and ",u.a.createElement("code",null,"await")," features.")):null,u.a.createElement("p",null,"In addition to simplifying promise-based callbacks, redux-saga provides a lot of helpers which make working with redux actions very simple."),u.a.createElement("p",null,"Here are a few of the special effects you can use to control your sagas:"),u.a.createElement(g.default,{className:"javascript"},E.saga2Effects),u.a.createElement("p",null,"For this example it's important that you understand how the ",u.a.createElement("code",null,"put"),", ",u.a.createElement("code",null,"take")," and ",u.a.createElement("code",null,"race")," effects work."),u.a.createElement("p",null,u.a.createElement("a",{href:"https://redux-saga.js.org/docs/advanced/Concurrency.html"},u.a.createElement("code",null,"takeEvery"))," and ",u.a.createElement("a",{href:"https://redux-saga.js.org/docs/advanced/Concurrency.html"},u.a.createElement("code",null,"takeLatest"))," are very useful as well!")):null,u.a.createElement("p",null,"First we must import the ",u.a.createElement("code",null,"redux-saga/effects")," that we need. We'll also import a ",u.a.createElement("code",null,"delay")," effect that just sleeps for the given amount of milliseconds."),u.a.createElement(g.default,{className:"javascript"},E.addSagaImports),u.a.createElement("p",null,"And then we create a ",u.a.createElement("code",null,"start")," generator function inside ",u.a.createElement("code",null,"@kea({})"),". This function is called every time your component is mounted."),u.a.createElement("p",null,"Inside this ",u.a.createElement("code",null,"start")," function we create a ",u.a.createElement("code",null,"race")," condition between two competing effects: a delay of 5 seconds and the action ",u.a.createElement("code",null,"updateSlide")," being triggered."),u.a.createElement("p",null,"The code pauses at the ",u.a.createElement("code",null,"yield race()")," call until one of the two conditions is met."),u.a.createElement("p",null,"In case the timeout won the race, we fetch the latest slide (",u.a.createElement("code",null,"yield this.get(..)")," is a shorthand to use the selectors defined in ",u.a.createElement("code",null,"@kea({})"),")... and then we dispatch (",u.a.createElement("code",null,"yield put()"),") the ",u.a.createElement("code",null,"updateSlide")," action with the next slide."),u.a.createElement(g.default,{className:"javascript"},E.addSagaStart),u.a.createElement("p",null,"All of this results in this:"),u.a.createElement("div",{className:"demo"},u.a.createElement("div",{className:"slider-container"},u.a.createElement(h.a,null))),u.a.createElement("p",null,"Now if you will always just have one slider on your screen, you're done. If you wish to have many slider instances, you will run into the same issue as with the dynamic counter example - both sliders will listen to and react to the ",u.a.createElement("code",null,"updateSlide")," actions unless you explicitly prohibit them."),u.a.createElement("p",null,"The code below demonstrates a way to prevent this from happening. It also shows how to listen to actions using the ",u.a.createElement("code",null,"takeEvery")," helper and the ",u.a.createElement("code",null,"workers")," object.")),u.a.createElement("div",{className:"code"},u.a.createElement("h2",null,"Full source"),u.a.createElement("p",null,"Better documentation is coming one day. Until then, read the comments in the code and the ",u.a.createElement("a",{href:"https://redux-saga.js.org/"},"redux-saga")," documentation."),u.a.createElement(g.default,{className:"javascript"},E.full),u.a.createElement("p",null,"Next page: ",u.a.createElement(p.a,{to:"/guide/github"},"Github API"))))}}]),t}(c.Component))||s},615:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(11),o=n.n(r),i=n(54),s=(n.n(i),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e});t.a=Object(i.kea)({actions:function(){return{toggleFeature:function(e){return{feature:e}}}},reducers:function(e){var t=e.actions;return{features:[{},o.a.object,a({},t.toggleFeature,function(e,t){var n=t.feature;return s({},e,a({},n,!e[n]))})]}}})},624:function(e,t,n){var a=n(643);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(102)(a,r);a.locals&&(e.exports=a.locals)},625:function(e,t,n){"use strict";var a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(n){return setTimeout(function(){return n(t)},e)})};t.a=a},626:function(e,t,n){"use strict";t.a=function(e){return Array.apply(null,{length:e}).map(Number.call,Number)}},627:function(e,t,n){"use strict";t.a=[{src:n(644),url:"https://www.flickr.com/photos/kevinglisson/5855716978",author:"Kevin Glisson"},{src:n(645),url:"https://www.flickr.com/photos/geoftheref/9770370326/",author:"Geof Wilson"},{src:n(646),url:"https://www.flickr.com/photos/apertureeffect/20391690360",author:"Rafal Wadowski"}]},628:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var i=n(6),s=n.n(i),l=n(155),c=n(243),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d={importSaga:n(629),installSaga:n(630)},p=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h2",null,"0. Install ",s.a.createElement("code",null,"kea-saga")),s.a.createElement("p",null,"We'll be using sagas in this example. To add support for them, install the ",s.a.createElement("code",null,"kea-saga")," and ",s.a.createElement("code",null,"redux-saga")," packages."),s.a.createElement(c.default,{className:"bash"},d.installSaga),s.a.createElement("p",null,"Then import ",s.a.createElement("code",null,"kea-saga")," somewhere in your app's entrypoint or ",s.a.createElement("code",null,"store.js"),", before any calls to ",s.a.createElement("code",null,"kea()")," and ",s.a.createElement("code",null,"getStore()")," are made:"),s.a.createElement(c.default,{className:"javascript"},d.importSaga),s.a.createElement("p",null,s.a.createElement(l.a,{to:"/effects/saga"},"Read here for more")))}}]),t}(i.Component)},629:function(e,t){e.exports="import 'kea-saga'\n"},630:function(e,t){e.exports="# if using yarn\nyarn add kea-saga redux-saga\n\n# if using npm\nnpm install kea-saga redux-saga --save\n"},642:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return E});var s,l,c=n(624),u=(n.n(c),n(6)),d=n.n(u),p=n(11),m=n.n(p),f=n(54),h=(n.n(f),n(55)),g=n(625),y=n(626),b=n(627),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E=(s=Object(f.kea)({key:function(e){return e.id},path:function(e){return["scenes","homepage","slider",e]},actions:function(){return{updateSlide:function(e){return{index:e}}}},reducers:function(e){var t=e.actions,n=e.key;return{currentSlide:[e.props.initialSlide||0,m.a.number,i({},t.updateSlide,function(e,t){return t.key===n?t.index%b.a.length:e})]}},selectors:function(e){var t=e.selectors;return{currentImage:[function(){return[t.currentSlide]},function(e){return b.a[e]},m.a.object]}},start:regeneratorRuntime.mark(function e(){var t,n,a,r,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.actions.updateSlide,console.log("Starting homepage slider saga");case 2:return e.next=5,Object(h.race)({change:Object(h.take)(function(e){return e.type===t.toString()&&e.payload.key===o.key}),timeout:Object(g.a)(5e3)});case 5:if(n=e.sent,!(a=n.timeout)){e.next=13;break}return e.next=10,this.get("currentSlide");case 10:return r=e.sent,e.next=13,Object(h.put)(t(r+1));case 13:e.next=2;break;case 15:case"end":return e.stop()}},e,this)}),stop:regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Stopping homepage slider saga");case 1:case"end":return e.stop()}},e,this)}),takeEvery:function(e){var t=e.actions,n=e.workers;return i({},t.updateSlide,n.updateSlide)},workers:{updateSlide:regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.payload.key===this.key&&console.log("slide update triggered",t.payload.key,this.key,this.props.id);case 1:case"end":return e.stop()}},e,this)})}}))(l=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),w(t,[{key:"render",value:function(){var e=this.props,t=e.currentSlide,n=e.currentImage,a=this.actions.updateSlide,r="Image copyright by "+n.author;return d.a.createElement("div",{className:"kea-slider"},d.a.createElement("img",{src:n.src,alt:r,title:r}),d.a.createElement("div",{className:"buttons"},Object(y.a)(b.a.length).map(function(e){return d.a.createElement("span",{key:e,className:e===t?"selected":"",onClick:function(){return a(e)}})})))}}]),t}(u.Component))||l},643:function(e,t,n){t=e.exports=n(101)(void 0),t.push([e.i,".kea-slider {\n  display: block;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  position: relative;\n}\n\n  .kea-slider img {\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  .kea-slider .buttons {\n    position: absolute;\n    bottom: 10px;\n    width: 100%;\n    text-align: center;\n    z-index: 2;\n    line-height: 10px;\n    height: 10px;\n  }\n\n  .kea-slider .buttons span {\n      background: #fff;\n      cursor: pointer;\n      display: inline-block;\n      width: 10px;\n      height: 10px;\n      border-radius: 10px;\n      margin: 0 5px\n    }\n\n  .kea-slider .buttons span.selected {\n  background: #08FF04;\n}\n",""])},644:function(e,t,n){e.exports=n.p+"f3950cfdf9b297de16cb49e4405ee0d3.jpg"},645:function(e,t,n){e.exports=n.p+"a63cfb870de9e2d5a64f396ede8c30b0.jpg"},646:function(e,t,n){e.exports=n.p+"278689e0ed22536cefa31c0ad4ef72bd.jpg"},742:function(e,t,n){var a=n(743);"string"==typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(102)(a,r);a.locals&&(e.exports=a.locals)},743:function(e,t,n){t=e.exports=n(101)(void 0),t.push([e.i,".sliders-scene {\n  text-align: center;\n}\n\n  .sliders-scene .slider-container {\n    max-width: 500px;\n    margin: 0 auto;\n  }\n",""])},744:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return b});var s,l,c=n(624),u=(n.n(c),n(6)),d=n.n(u),p=n(11),m=n.n(p),f=n(54),h=(n.n(f),n(626)),g=n(627),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),b=(s=Object(f.kea)({actions:function(){return{updateSlide:function(e){return{index:e}}}},reducers:function(e){var t=e.actions;return{currentSlide:[0,m.a.number,i({},t.updateSlide,function(e,t){return t.index%g.a.length})]}},selectors:function(e){var t=e.selectors;return{currentImage:[function(){return[t.currentSlide]},function(e){return g.a[e]},m.a.object]}}}))(l=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),y(t,[{key:"render",value:function(){var e=this.props,t=e.currentSlide,n=e.currentImage,a=this.actions.updateSlide,r="Image copyright by "+n.author;return d.a.createElement("div",{className:"kea-slider"},d.a.createElement("img",{src:n.src,alt:r,title:r}),d.a.createElement("div",{className:"buttons"},Object(h.a)(g.a.length).map(function(e){return d.a.createElement("span",{key:e,className:e===t?"selected":"",onClick:function(){return a(e)}})})))}}]),t}(u.Component))||l},745:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return E});var s,l,c=n(624),u=(n.n(c),n(6)),d=n.n(u),p=n(11),m=n.n(p),f=n(54),h=(n.n(f),n(55)),g=n(626),y=n(625),b=n(627),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E=(s=Object(f.kea)({actions:function(){return{updateSlide:function(e){return{index:e}}}},reducers:function(e){var t=e.actions;return{currentSlide:[0,m.a.number,i({},t.updateSlide,function(e,t){return t.index%b.a.length})]}},selectors:function(e){var t=e.selectors;return{currentImage:[function(){return[t.currentSlide]},function(e){return b.a[e]},m.a.object]}},start:regeneratorRuntime.mark(function e(){var t,n,a,r,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.actions.updateSlide,console.log("Starting homepage slider saga"),console.log(this,this.actions,this.props);case 3:return e.next=6,Object(h.race)({change:Object(h.take)(function(e){return e.type===t.toString()&&e.payload.key===o.key}),timeout:Object(y.a)(5e3)});case 6:if(n=e.sent,!(a=n.timeout)){e.next=14;break}return e.next=11,this.get("currentSlide");case 11:return r=e.sent,e.next=14,Object(h.put)(t(r+1));case 14:e.next=3;break;case 16:case"end":return e.stop()}},e,this)})}))(l=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),w(t,[{key:"render",value:function(){var e=this.props,t=e.currentSlide,n=e.currentImage,a=this.actions.updateSlide,r="Image copyright by "+n.author;return d.a.createElement("div",{className:"kea-slider"},d.a.createElement("img",{src:n.src,alt:r,title:r}),d.a.createElement("div",{className:"buttons"},Object(g.a)(b.a.length).map(function(e){return d.a.createElement("span",{key:e,className:e===t?"selected":"",onClick:function(){return a(e)}})})))}}]),t}(u.Component))||l},746:function(e,t){e.exports="// slider/index.js\nimport './styles.scss'\n\nimport React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nimport { take, race, put } from 'redux-saga/effects'\n\nimport delay from '~/utils/delay'\nimport range from '~/utils/range'\n\nimport images from './images'\n\n@kea({\n  key: (props) => props.id,\n\n  path: (key) => ['scenes', 'homepage', 'slider', key],\n\n  actions: () => ({\n    updateSlide: index => ({ index })\n  }),\n\n  reducers: ({ actions, key, props }) => ({\n    currentSlide: [props.initialSlide || 0, PropTypes.number, {\n      [actions.updateSlide]: (state, payload) => {\n        return payload.key === key ? payload.index % images.length : state\n      }\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    currentImage: [\n      () => [selectors.currentSlide],\n      (currentSlide) => images[currentSlide],\n      PropTypes.object\n    ]\n  }),\n\n  // This saga is run when the component is mounted.\n  // The function is a regular redux-saga worker that has access to:\n  // 1) this.actions, 2) this.key and 3) this.props\n  //\n  // Read the redux-saga documentation to understand the different\n  // functions like: race(), put(), take(), etc\n  start: function * () {\n    const { updateSlide } = this.actions\n\n    console.log('Starting homepage slider saga')\n    // console.log(this, this.actions, this.props)\n\n    while (true) {\n      // wait until the updateSlide() action is triggered or a 5sec timeout occurs\n      // to ignore actions from other slider instances we must also match the key\n      const { timeout } = yield race({\n        change: take(action => action.type === updateSlide.toString() &&\n                               action.payload.key === this.key),\n        timeout: delay(5000)\n      })\n\n      if (timeout) {\n        // use this.get(..) to select the latest data from redux\n        const currentSlide = yield this.get('currentSlide')\n\n        // actions are not automatically bound to dispatch, so\n        // you must use redux-saga's put() with them\n        yield put(updateSlide(currentSlide + 1))\n      }\n    }\n  },\n\n  // this saga is run when the component is unmounted\n  stop: function * () {\n    console.log('Stopping homepage slider saga')\n  },\n\n  // The redux-saga takeEvery function.\n  // It waits for actions and runs the relevant functions.\n  // Also available: takeLatest\n  takeEvery: ({ actions, workers }) => ({\n    [actions.updateSlide]: workers.updateSlide\n  }),\n\n  // it's recommended to group all the logic under the workers: {} object.\n  workers: {\n    updateSlide: function * (action) {\n      // check if it was this component that triggered the action\n      if (action.payload.key === this.key) {\n        console.log('slide update triggered', action.payload.key, this.key, this.props.id)\n        // console.log(action, this)\n      }\n    }\n  }\n})\nexport default class Slider extends Component {\n  render () {\n    const { currentSlide, currentImage } = this.props\n    const { updateSlide } = this.actions\n\n    const title = `Image copyright by ${currentImage.author}`\n\n    return (\n      <div className='kea-slider'>\n        <img src={currentImage.src} alt={title} title={title} />\n        <div className='buttons'>\n          {range(images.length).map(i => (\n            <span key={i}\n                  className={i === currentSlide ? 'selected' : ''}\n                  onClick={() => updateSlide(i)} />\n          ))}\n        </div>\n      </div>\n    )\n  }\n}\n\n// index.js\nexport default class SlidersScene extends Component {\n  render () {\n    return (\n      <div className='slider-container'>\n        <Slider id={1} initialSlide={0} />\n        <Slider id={2} initialSlide={1} />\n      </div>\n    )\n  }\n}\n\n"},747:function(e,t){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nimport images from './images'     // array of objects [{ src, author }, ...]\nimport range from '~/utils/range' // helper, range(3) === [0, 1, 2]\n\n@kea({\n  actions: () => ({\n    updateSlide: index => ({ index })\n  }),\n\n  reducers: ({ actions }) => ({\n    currentSlide: [0, PropTypes.number, {\n      [actions.updateSlide]: (state, payload) => payload.index % images.length\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    currentImage: [\n      () => [selectors.currentSlide],\n      (currentSlide) => images[currentSlide],\n      PropTypes.object\n    ]\n  })\n})\nexport default class Slider extends Component {\n  render () {\n    const { currentSlide, currentImage } = this.props\n    const { updateSlide } = this.actions\n\n    const title = `Image copyright by ${currentImage.author}`\n\n    return (\n      <div className='kea-slider'>\n        <img src={currentImage.src} alt={title} title={title} />\n        <div className='buttons'>\n          {range(images.length).map(i => (\n            <span key={i}\n                  className={i === currentSlide ? 'selected' : ''}\n                  onClick={() => updateSlide(i)} />\n          ))}\n        </div>\n      </div>\n    )\n  }\n}\n"},748:function(e,t){e.exports="import { take, race, put } from 'redux-saga/effects'\nimport delay from '~/utils/delay'\n"},749:function(e,t){e.exports="@kea({\n  actions: () => ({\n    updateSlide: index => ({ index })\n  }),\n\n  // ...\n\n  // run this saga when the component is mounted\n  start: function * () {\n    const { updateSlide } = this.actions\n\n    while (true) {\n      const { timeout } = yield race({\n        change: take(updateSlide.toString()),\n        timeout: delay(5000)\n      })\n\n      if (timeout) {\n        const currentSlide = yield this.get('currentSlide')\n        yield put(updateSlide(currentSlide + 1))\n      }\n    }\n  }\n})\nexport default class StaticSlider extends Component {\n  // as it was\n}\n"},750:function(e,t){e.exports="import api from './api'\n\nfunction doSomething () {\n  // get all visible users\n  api.fetchUsers().then(result => {\n    console.log('api returned', result)\n\n    // get the posts for the first user\n    api.fetchUserPosts(result.users[0].username).then(posts => {\n      // do something with the user's posts\n      console.log('got the posts', posts)\n    })\n  })\n}\n"},751:function(e,t){e.exports="import api from './api'\n\nfunction * doSomething () {\n  // get all visible users\n  const result = yield api.fetchUsers()\n  console.log('api returned', result)\n\n  // get the posts for the first user\n  const posts = yield api.fetchUserPosts(result.users[0].username)\n\n  // do something with the user's posts\n  console.log('got the posts', posts)\n}\n"},752:function(e,t){e.exports="import api from './api'\nimport { take, race, put, fork, call } from 'redux-saga/effects'\n\n// redux action creator\nconst loadUsers = (search) => ({ type: 'LOAD_USERS', payload: { search } })\n\n// all saga effects must be run in generator functions\nfunction * saga () {\n\n  // here are some things you can do inside sagas\n\n  // block until an action with the type \"LOAD_USERS\" was dispatched\n  yield take('LOAD_USERS')\n\n  // dispatch the redux action \"loadUsers('something')\"\n  // == { type: 'LOAD_USERS', payload: { search: 'something' } }\n  yield put(loadUsers('something'))\n\n  // block until either the action 'LOAD_USERS' or the action 'LOAD_POSTS' got dispatched\n  const winner = yield race({\n    loadUsers: take('LOAD_USERS'),\n    loadPosts: take('LOAD_POSTS'),\n  })\n\n  // in case the winner was loadUsers:\n  // winner == { loadUsers: /* something */, loadPosts: undefined }\n  console.log(winner)\n\n  // anything that returns a promise (.then(result => {})) can also be accessed like this:\n  const result = yield api.loadUsers()\n\n  // start another saga in the background (will not block)\n  yield fork(waitForUsersAction)\n\n  // start another saga in the foreground (will block until it finishes)\n  yield call(otherWorker)\n}\n\nfunction * otherWorker () {\n  console.log('inside otherworker')\n}\n\nfunction * waitForUsersAction () {\n  while (true) {\n    yield take('LOAD_USERS')\n    const result = yield api.loadUsers()\n    yield put({ type: 'USERS_LOADED', payload: { result } })\n  }\n}\n"}});