webpackJsonp([1],[function(e,t,n){e.exports=n(65)},,,,,,function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(4),a=n(66),s="https://hacker-news.firebaseio.com",c="/v0";t.STORIES_PER_PAGE=20;var p=function(){function e(){this.cache=[],this.db=a.initializeApp({databaseURL:s}).database().ref(c)}return e.prototype.fetchStories=function(e){var t=this;return new Promise(function(n,r){t.db.child(e).on("value",function(e){n(e.val())},r)})},e.prototype.fetchItemsOnPage=function(e,n){var r=(n-1)*t.STORIES_PER_PAGE,i=n*t.STORIES_PER_PAGE,o=e.slice(r,i);return this.fetchItems(o)},e.prototype.fetchItems=function(e){var t=this;return e.length<1?Promise.resolve([]):Promise.all(e.map(function(e){return t.fetchItem(e)}))},e.prototype.fetchItem=function(e){var t=this;return new Promise(function(n,r){t.cache[e]?n(t.cache[e]):t.db.child("item/"+e).once("value",function(r){t.cache[e]=r.val(),n(t.cache[e]),13045413===e&&console.log(JSON.stringify(t.cache[e]))},r)})},e=r([o.autoinject(),i("design:paramtypes",[])],e)}();t.HackerNewsApi=p},,,,,function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(4),a=n(10),s=n(6),c=function(){function e(e,t){this.allStories=[],this.api=e,this.path=t}return e.prototype.determineActivationStrategy=function(){return a.activationStrategy.invokeLifecycle},e.prototype.activate=function(e){var t=this;void 0===e.page||isNaN(e.page)||e.page<1?this.currentPage=1:this.currentPage=Number(e.page),this.api.fetchStories(this.path).then(function(e){t.allStories=e})},e.prototype.allStoriesChanged=function(e,t){var n=this;e!==t&&void 0!==this.api&&this.api.fetchItemsOnPage(this.allStories,this.currentPage).then(function(e){n.stories=e,n.totalPages=Math.ceil(n.allStories.length/s.STORIES_PER_PAGE)})},e.prototype.currentPageChanged=function(e,t){e!==t&&(this.offset=s.STORIES_PER_PAGE*(e-1))},r([o.observable(),i("design:type",Array)],e.prototype,"allStories",void 0),r([o.observable(),i("design:type",Number)],e.prototype,"currentPage",void 0),e}();t.StoryList=c},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(4),a=n(6),s=function(){function e(e){this.expanded=!0,this.api=e}return e.prototype.bind=function(){var e=this;return void 0===this.comment.kids||this.comment.kids.length<1?Promise.resolve():this.api.fetchItems(this.comment.kids).then(function(t){e.replies=t})},e.prototype.toggle=function(){this.expanded=!this.expanded},r([o.bindable(),i("design:type",Object)],e.prototype,"comment",void 0),e=r([o.customElement("hn-comment"),o.inject(a.HackerNewsApi),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.HackerNewsApi&&a.HackerNewsApi)&&t||Object])],e);var t}();t.Comment=s},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(4),a=function(){function e(){}return r([o.bindable(),i("design:type",Object)],e.prototype,"item",void 0),e=r([o.customElement("hn-item-preview"),i("design:paramtypes",[])],e)}();t.ItemPreview=a},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(4),a=function(){function e(){}return r([o.bindable(),i("design:type",Array)],e.prototype,"navigation",void 0),e=r([o.customElement("hn-nav-bar"),i("design:paramtypes",[])],e)}();t.NavBar=a},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(4),a=function(){function e(){}return r([o.bindable(),i("design:type",Array)],e.prototype,"stories",void 0),r([o.bindable(),i("design:type",Number)],e.prototype,"offset",void 0),e=r([o.customElement("hn-news-list"),i("design:paramtypes",[])],e)}();t.NewsList=a},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(4),a=function(){function e(){}return r([o.bindable(),i("design:type",Number)],e.prototype,"current",void 0),r([o.bindable(),i("design:type",Number)],e.prototype,"total",void 0),r([o.bindable(),i("design:type",String)],e.prototype,"route",void 0),e=r([o.customElement("hn-paginator"),i("design:paramtypes",[])],e)}();t.Paginator=a},function(e,t){"use strict";function n(e){return""+(e<10&&e>=0?"0"+e:e)}var r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=function(){function e(){}return e.prototype.toView=function(e){var t=new Date(1e3*e),i=t.getHours(),o="am";return i>=12&&(i-=12,o="pm"),i+":"+n(t.getMinutes())+o+" on "+t.getDate()+" "+r[t.getMonth()]},e}();t.DateFormatValueConverter=i},function(e,t){"use strict";var n=function(){function e(){this.anchor=document.createElement("a")}return e.prototype.toView=function(e){this.anchor.href=e;var t=this.anchor.hostname.replace("www.","");return"localhost"===t?void 0:"("+t+")"},e}();t.HostnameValueConverter=n},function(e,t,n){"use strict";function r(e){e.use.standardConfiguration().developmentLogging(),e.start().then(function(){return e.setRoot("app")})}n(80),t.configure=r},,,,,,function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(4),a=n(6),s=function(){function e(){}return e.prototype.configureRouter=function(e,t){this.navigation=t.navigation,e.title="Aurelia HN",e.mapRoute({route:"",redirect:"news"}).mapRoute({route:"news",moduleId:"./pages/news/index",name:"topstories"}).mapRoute({route:"newest",moduleId:"./pages/newest/index",name:"newstories",nav:!0,title:"New"}).mapRoute({route:"best",moduleId:"./pages/best/index",name:"beststories",nav:!0,title:"Best"}).mapRoute({route:"show",moduleId:"./pages/show/index",name:"showstories",nav:!0,title:"Show"}).mapRoute({route:"ask",moduleId:"./pages/ask/index",name:"askstories",nav:!0,title:"Ask"}).mapRoute({route:"jobs",moduleId:"./pages/jobs/index",name:"jobstories",nav:!0,title:"Jobs"}).mapRoute({route:"item/:id",moduleId:"./pages/item/index",name:"item"}).mapUnknownRoutes("./pages/not-found")},e=r([o.inject(a.HackerNewsApi),i("design:paramtypes",[])],e)}();t.App=s},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(4),s=n(6),c=n(11),p=function(e){function t(t){e.call(this,t,"askstories")}return r(t,e),t=i([a.inject(s.HackerNewsApi),o("design:paramtypes",["function"==typeof(n="undefined"!=typeof s.HackerNewsApi&&s.HackerNewsApi)&&n||Object])],t);var n}(c.StoryList);t.AskStories=p},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(4),s=n(6),c=n(11),p=function(e){function t(t){e.call(this,t,"beststories")}return r(t,e),t=i([a.inject(s.HackerNewsApi),o("design:paramtypes",["function"==typeof(n="undefined"!=typeof s.HackerNewsApi&&s.HackerNewsApi)&&n||Object])],t);var n}(c.StoryList);t.BestStories=p},function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=n(4),a=n(10),s=n(6),c=function(){function e(e,t){this.router=e,this.api=t}return e.prototype.activate=function(e){var t=this;return void 0===e.id||isNaN(e.id)||e.id<0?(this.router.navigateToRoute("news"),Promise.resolve()):(this.id=e.id,this.api.fetchItem(this.id).then(function(e){if(t.item=e,!(void 0===t.item.kids||t.item.kids.length<1))return t.api.fetchItems(t.item.kids).then(function(e){t.comments=e})}))},e=r([o.inject(a.Router,s.HackerNewsApi),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.Router&&a.Router)&&t||Object,"function"==typeof(n="undefined"!=typeof s.HackerNewsApi&&s.HackerNewsApi)&&n||Object])],e);var t,n}();t.Item=c},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(4),s=n(6),c=n(11),p=function(e){function t(t){e.call(this,t,"jobstories")}return r(t,e),t=i([a.inject(s.HackerNewsApi),o("design:paramtypes",["function"==typeof(n="undefined"!=typeof s.HackerNewsApi&&s.HackerNewsApi)&&n||Object])],t);var n}(c.StoryList);t.JobStories=p},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(4),s=n(6),c=n(11),p=function(e){function t(t){e.call(this,t,"newstories")}return r(t,e),t=i([a.inject(s.HackerNewsApi),o("design:paramtypes",["function"==typeof(n="undefined"!=typeof s.HackerNewsApi&&s.HackerNewsApi)&&n||Object])],t);var n}(c.StoryList);t.NewStories=p},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(4),s=n(6),c=n(11),p=function(e){function t(t){e.call(this,t,"topstories")}return r(t,e),t=i([a.inject(s.HackerNewsApi),o("design:paramtypes",["function"==typeof(n="undefined"!=typeof s.HackerNewsApi&&s.HackerNewsApi)&&n||Object])],t);var n}(c.StoryList);t.TopStories=p},function(e,t){"use strict";var n=function(){function e(){}return e}();t.NotFound=n},function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=n(4),s=n(6),c=n(11),p=function(e){function t(t){e.call(this,t,"showstories")}return r(t,e),t=i([a.inject(s.HackerNewsApi),o("design:paramtypes",["function"==typeof(n="undefined"!=typeof s.HackerNewsApi&&s.HackerNewsApi)&&n||Object])],t);var n}(c.StoryList);t.ShowStories=p},function(e,t){},function(e,t,n){e.exports=n.p+"images/y18.gif"},,,,,function(e,t){e.exports="<template> <require from=./components/nav-bar></require> <div class=container> <header> <hn-nav-bar navigation.bind=navigation></hn-nav-bar> </header> <router-view></router-view> </div> </template> "},function(e,t){e.exports="<template> <li class=comment if.bind=!comment.deleted> <span click.delegate=toggle() class=comment__toggle>[${expanded ? '-' : '+' + replies.length}]</span> <p class=comment__author>${comment.by}</p> <p class=comment__text innerhtml.bind=comment.text if.bind=expanded></p> </li> <ul class=comment__reply repeat.for=\"reply of replies\" if.bind=expanded> <hn-comment comment.bind=reply></hn-comment> </ul> </template> "},function(e,t){e.exports='<template> <require from=../converters/hostname></require> <require from=../converters/date-format></require> <div class=item-preview> <template if.bind=item.url> <a class=item-preview__link href.bind=item.url target=_blank>${item.title}</a> </template> <template if.bind=!item.url> <a class=item-preview__link route-href="route: item; params.bind: { id: item.id}">${item.title}</a> </template> <a class=item-preview__site-link>${item.url | hostname}</a> <p class=item-preview__info> ${item.score} points by ${item.by} at ${item.time | dateFormat} | <a class=item-preview__comments-link route-href="route: item; params.bind: { id: item.id}"> <template if.bind="item.descendants < 1">discuss</template> <template if.bind="item.descendants >= 1">${item.descendants} comments</template> </a> </p> </div> </template> '},function(e,t,n){e.exports="<template> <nav class=nav-bar> <div class=nav-bar__right> Built with <a class=nav-bar__author-url href=http://aurelia.io/ target=_blank> Aurelia</a> | Made with <span class=nav-bar__author-heart>♥</span> by <a class=nav-bar__author-url href=https://www.michael-bull.com/ target=_blank>Mike</a> </div> <div class=nav-bar__left> <a href=http://www.ycombinator.com target=_blank> <img class=nav-bar__ycombinator src="+n(81)+" alt=YCombinator width=18 height=18 /></a> <a class=nav-bar__title href=#>Hacker News</a> <div class=nav-bar__links> <a repeat.for=\"nav of navigation\" href.bind=nav.href class=\"nav-bar__link ${nav.isActive ? 'nav-bar__link--active' : ''}\"> ${nav.title} </a> </div> </div> </nav> </template> "},function(e,t){e.exports='<template> <require from=./item-preview></require> <div class=news-list> <p class=news-list__loading if.bind=!stories>Loading...</p> <div class=news-list__item repeat.for="story of stories"> <span class=news-list__index> ${$index + offset + 1}. </span> <hn-item-preview item.bind=story></hn-item-preview> </div> </div> </template> '},function(e,t){e.exports="<template> <div class=paginator> <a class=\"paginator__selector ${current > 1 ? '' : 'paginator__selector--disabled'}\" route-href=\"route.bind: route; params.bind: { page: current > 1 ? current - 1 : 1 }\"> &laquo;</a> <div class=paginator__current>Page ${current} of ${total}</div> <a class=\"paginator__selector ${current < total ? '' : 'paginator__selector--disabled'}\" route-href=\"route.bind: route; params.bind: { page: current < total ? current + 1 : total }\"> &raquo;</a> </div> </template> "},function(e,t){e.exports="<template> <require from=../../components/news-list></require> <require from=../../components/paginator></require> <hn-news-list stories.bind=stories offset.bind=offset> </hn-news-list> <hn-paginator if.bind=stories current.bind=currentPage total.bind=totalPages route=askstories> </hn-paginator> </template> "},function(e,t){e.exports="<template> <require from=../../components/news-list></require> <require from=../../components/paginator></require> <hn-news-list stories.bind=stories offset.bind=offset> </hn-news-list> <hn-paginator if.bind=stories current.bind=currentPage total.bind=totalPages route=beststories> </hn-paginator> </template> "},function(e,t){e.exports='<template> <require from=../../components/comment></require> <require from=../../components/item-preview></require> <div class=news-item> <hn-item-preview item.bind=item></hn-item-preview> <p class=news-item__text if.bind=item.text innerhtml.bind=item.text></p> <p class=news-item__no-comments if.bind=!comments> No comments yet. </p> <ul class=news-item__comments if.bind=comments> <template repeat.for="comment of comments"> <hn-comment comment.bind=comment></hn-comment> </template> </ul> </div> </template> '},function(e,t){e.exports="<template> <require from=../../components/news-list></require> <require from=../../components/paginator></require> <hn-news-list stories.bind=stories offset.bind=offset> </hn-news-list> <hn-paginator if.bind=stories current.bind=currentPage total.bind=totalPages route=jobstories> </hn-paginator> </template> "},function(e,t){e.exports="<template> <require from=../../components/news-list></require> <require from=../../components/paginator></require> <hn-news-list stories.bind=stories offset.bind=offset> </hn-news-list> <hn-paginator if.bind=stories current.bind=currentPage total.bind=totalPages route=newstories> </hn-paginator> </template> "},function(e,t){e.exports="<template> <require from=../../components/news-list></require> <require from=../../components/paginator></require> <hn-news-list stories.bind=stories offset.bind=offset> </hn-news-list> <hn-paginator if.bind=stories current.bind=currentPage total.bind=totalPages route=topstories> </hn-paginator> </template> "},function(e,t){e.exports="<template> <h2>Error - Page Not Found</h2> <p>We couldn't find that page for you.</p> </template> "},function(e,t){e.exports="<template> <require from=../../components/news-list></require> <require from=../../components/paginator></require> <hn-news-list stories.bind=stories offset.bind=offset> </hn-news-list> <hn-paginator if.bind=stories current.bind=currentPage total.bind=totalPages route=showstories> </hn-paginator> </template> "},,function(e,t,n){function r(e){return n(i(e))}function i(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./app":71,"./app.html":86,"./aurelia-bootstrapper-webpack":37,"./aurelia-event-aggregator":16,"./aurelia-framework":4,"./aurelia-history-browser":38,"./aurelia-http-client":39,"./aurelia-logging-console":41,"./aurelia-templating-binding":45,"./aurelia-templating-resources":49,"./aurelia-templating-resources/attr-binding-behavior":18,"./aurelia-templating-resources/attr-binding-behavior.js":18,"./aurelia-templating-resources/binding-mode-behaviors":20,"./aurelia-templating-resources/binding-mode-behaviors.js":20,"./aurelia-templating-resources/compose":21,"./aurelia-templating-resources/compose.js":21,"./aurelia-templating-resources/debounce-binding-behavior":22,"./aurelia-templating-resources/debounce-binding-behavior.js":22,"./aurelia-templating-resources/focus":23,"./aurelia-templating-resources/focus.js":23,"./aurelia-templating-resources/hide":24,"./aurelia-templating-resources/hide.js":24,"./aurelia-templating-resources/if":25,"./aurelia-templating-resources/if.js":25,"./aurelia-templating-resources/repeat":26,"./aurelia-templating-resources/repeat.js":26,"./aurelia-templating-resources/replaceable":27,"./aurelia-templating-resources/replaceable.js":27,"./aurelia-templating-resources/sanitize-html":28,"./aurelia-templating-resources/sanitize-html.js":28,"./aurelia-templating-resources/show":29,"./aurelia-templating-resources/show.js":29,"./aurelia-templating-resources/signal-binding-behavior":30,"./aurelia-templating-resources/signal-binding-behavior.js":30,"./aurelia-templating-resources/throttle-binding-behavior":31,"./aurelia-templating-resources/throttle-binding-behavior.js":31,"./aurelia-templating-resources/update-trigger-binding-behavior":32,"./aurelia-templating-resources/update-trigger-binding-behavior.js":32,"./aurelia-templating-resources/with":33,"./aurelia-templating-resources/with.js":33,"./aurelia-templating-router":57,"./aurelia-templating-router/route-href":34,"./aurelia-templating-router/route-href.js":34,"./aurelia-templating-router/router-view":35,"./aurelia-templating-router/router-view.js":35,"./components/comment":58,"./components/comment.html":87,"./components/comment.ts":58,"./components/item-preview":59,"./components/item-preview.html":88,"./components/item-preview.ts":59,"./components/nav-bar":60,"./components/nav-bar.html":89,"./components/nav-bar.ts":60,"./components/news-list":61,"./components/news-list.html":90,"./components/news-list.ts":61,"./components/paginator":62,"./components/paginator.html":91,"./components/paginator.ts":62,"./converters/date-format":63,"./converters/date-format.ts":63,"./converters/hostname":64,"./converters/hostname.ts":64,"./main":65,"./pages/ask/index":72,"./pages/ask/index.html":92,"./pages/best/index":73,"./pages/best/index.html":93,"./pages/item/index":74,"./pages/item/index.html":94,"./pages/jobs/index":75,"./pages/jobs/index.html":95,"./pages/newest/index":76,"./pages/newest/index.html":96,"./pages/news/index":77,"./pages/news/index.html":97,"./pages/not-found":78,"./pages/not-found.html":98,"./pages/show/index":79,"./pages/show/index.html":99,"./pages/story-list":11,"./services/api":6};r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=101}]);