/*! For license information please see 2.f1b823c2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{105:function(e,t,a){"use strict";var n=a(2),r=a(6),c=a(0),o=a.n(c),l=a(97),i=a(101),s=a(102),u=a(103),d=a(118),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],m=["items","position","className"],h=["className"],v=["items","className","position"],b=["className"],p=["mobile"];function g(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,h=e.prependBaseUrlToHref,v=Object(r.a)(e,f),b=Object(s.a)(c),p=Object(s.a)(t),g=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{target:"_blank",rel:"noopener noreferrer",href:h?g:l}:Object.assign({isNavLink:!0,activeClassName:m,to:b},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(p)}}:null),v),u)}function k(e){var t=e.items,a=e.position,i=e.className,s=Object(r.a)(e,m),u=Object(c.useRef)(null),d=Object(c.useRef)(null),f=Object(c.useState)(!1),v=f[0],b=f[1];Object(c.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var p=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:u,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":v})},o.a.createElement(g,Object(n.a)({className:p(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!v))}}),s.label),o.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var c=e.className,l=Object(r.a)(e,h);return o.a.createElement("li",{key:a},o.a.createElement(g,Object(n.a)({onKeyDown:function(e){if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var n=u.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:p(c,!0)},l)))})))):o.a.createElement(g,Object(n.a)({className:p(i)},s))}function E(e){var t=e.items,a=e.className,i=(e.position,Object(r.a)(e,v)),s=Object(u.useLocation)().pathname,f=Object(c.useState)((function(){var e;return null===(e=!(null!=t&&t.some((function(e){return Object(d.a)(e.to,s)}))))||void 0===e||e})),m=f[0],h=f[1],p=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};return t?o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":m})},o.a.createElement(g,Object(n.a)({role:"button",className:p(a,!0)},i,{onClick:function(){h((function(e){return!e}))}}),i.label),o.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,c=Object(r.a)(e,b);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(g,Object(n.a)({activeClassName:"menu__link--active",className:p(a)},c,{onClick:i.onClick})))})))):o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(g,Object(n.a)({className:p(a)},i)))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,p),c=a?E:k;return o.a.createElement(c,n)}},106:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(97),o=a(98),l=a(111),i=a(47),s=a.n(i);var u=function(){var e,t=Object(l.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,i=Object(o.a)().announcementBar;if(!i)return null;var u=i.content,d=i.backgroundColor,f=i.textColor,m=i.isCloseable;return!u||m&&a?null:r.a.createElement("div",{className:s.a.announcementBar,style:{backgroundColor:d,color:f},role:"banner"},r.a.createElement("div",{className:Object(c.a)(s.a.announcementBarContent,(e={},e[s.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:u}}),m?r.a.createElement("button",{type:"button",className:s.a.announcementBarClose,onClick:n,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},d=a(2),f=a(101),m=a(99),h=function(){return null},v=a(121),b=a.n(v),p=a(48),g=a.n(p),k=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(g.a.toggle,g.a.dark),style:a},t)},E=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(g.a.toggle,g.a.light),style:a},t)},O=function(e){var t=Object(o.a)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,l=t.lightIconStyle,i=Object(m.a)().isClient;return r.a.createElement(b.a,Object(d.a)({disabled:!i,icons:{checked:r.a.createElement(k,{icon:a,style:n}),unchecked:r.a.createElement(E,{icon:c,style:l})}},e))},j=a(108),y=a(103);var _=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},w=a(114),C=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],l=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),f=d[0],m=d[1],h=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(y.useLocation)(),b=_(v.hash),p=b[0],g=b[1];return Object(w.a)((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<f))){if(o)return l(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,f]),Object(n.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&l(!0)}),[p]),{navbarRef:h,isNavbarVisible:a}},N=a(115),S=a(116),T=a(117),I=a(49),L=a.n(I),B=a(6),x=a(105),D=["type"],P={default:function(){return x.a},docsVersion:function(){return a(126).default},docsVersionDropdown:function(){return a(130).default},doc:function(){return a(131).default}};function M(e){var t=e.type,a=Object(B.a)(e,D),n=function(e){void 0===e&&(e="default");var t=P[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var A="right";var V=function(){var e,t,a=Object(m.a)().isClient,l=Object(o.a)(),i=l.navbar,s=i.title,u=i.items,v=i.hideOnScroll,b=i.style,p=l.colorMode.disableSwitch,g=Object(n.useState)(!1),k=g[0],E=g[1],y=Object(n.useState)(!1),_=y[0],w=y[1],I=Object(j.a)(),B=I.isDarkTheme,x=I.setLightTheme,D=I.setDarkTheme,P=C(v),V=P.navbarRef,X=P.isNavbarVisible,F=Object(T.a)(),U=F.logoLink,H=F.logoLinkProps,R=F.logoImageUrl,G=F.logoAlt;Object(N.a)(k);var W=Object(n.useCallback)((function(){E(!0)}),[E]),Y=Object(n.useCallback)((function(){E(!1)}),[E]),K=Object(n.useCallback)((function(e){return e.target.checked?D():x()}),[x,D]),z=Object(S.a)();Object(n.useEffect)((function(){z===S.b.desktop&&E(!1)}),[z]);var J=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:A)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:A)}))}}(u),q=J.leftItems,Q=J.rightItems;return r.a.createElement("nav",{ref:V,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===b,"navbar--primary":"primary"===b,"navbar-sidebar--show":k},e[L.a.navbarHideable]=v,e[L.a.navbarHidden]=!X,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(d.a)({className:"navbar__brand",to:U},H),null!=R&&r.a.createElement("img",{key:a,className:"navbar__logo",src:R,alt:G}),null!=s&&r.a.createElement("strong",{className:Object(c.a)("navbar__title",(t={},t[L.a.hideLogoText]=_,t))},s)),q.map((function(e,t){return r.a.createElement(M,Object(d.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},Q.map((function(e,t){return r.a.createElement(M,Object(d.a)({},e,{key:t}))})),!p&&r.a.createElement(O,{className:L.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:B,onChange:K}),r.a.createElement(h,{handleSearchBarToggle:w,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(d.a)({className:"navbar__brand",onClick:Y,to:U},H),null!=R&&r.a.createElement("img",{key:a,className:"navbar__logo",src:R,alt:G}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!p&&k&&r.a.createElement(O,{"aria-label":"Dark mode toggle in sidebar",checked:B,onChange:K})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(M,Object(d.a)({mobile:!0},e,{onClick:Y,key:t}))})))))))},X=a(102),F=a(50),U=a.n(F),H=["to","href","label","prependBaseUrlToHref"];function R(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(B.a)(e,H),l=Object(X.a)(t),i=Object(X.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(f.a,Object(d.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?i:a}:{to:l},o),n)}var G=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var W=function(){var e=Object(o.a)().footer,t=e||{},a=t.copyright,n=t.links,l=void 0===n?[]:n,i=t.logo,s=void 0===i?{}:i,u=Object(X.a)(s.src);return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(R,e))}))):null)}))),(s||a)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:U.a.footerLogoLink},r.a.createElement(G,{alt:s.alt,url:u})):r.a.createElement(G,{alt:s.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))):null},Y=a(10),K="light",z="dark",J=function(e){return e===z?z:K},q=function(){return Y.a.canUseDOM?J(document.documentElement.getAttribute("data-theme")):K},Q=function(e){try{localStorage.setItem("theme",J(e))}catch(t){console.error(t)}},Z=function(){var e=Object(o.a)().colorMode.disableSwitch,t=void 0!==e&&e,a=Object(n.useState)(q),r=a[0],c=a[1],l=Object(n.useCallback)((function(){c(K),Q(K)}),[]),i=Object(n.useCallback)((function(){c(z),Q(z)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",J(r))}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(J(e))}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?z:K)}))}),[]),{isDarkTheme:r===z,setLightTheme:l,setDarkTheme:i}},$=a(113);var ee=function(e){var t=Z(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement($.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},te="docusaurus.tab.",ae=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(te))e[n.substring(te.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},ne="docusaurus.announcement.dismiss",re="docusaurus.announcement.id",ce=function(){var e=Object(o.a)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(ne,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(re);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(re,t),n&&localStorage.setItem(ne,"false"),(n||"false"===localStorage.getItem(ne))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},oe=a(112);var le=function(e){var t=ae(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=ce(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(oe.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)},ie=a(120);function se(e){var t=e.children;return r.a.createElement(ee,null,r.a.createElement(le,null,r.a.createElement(ie.a,null,t)))}var ue=a(109);function de(e){var t=e.language,a=e.version,n=e.tag;return r.a.createElement(ue.a,null,t&&r.a.createElement("meta",{name:"docusaurus_language",content:""+t}),a&&r.a.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}var fe=a(119);function me(e){var t=Object(m.a)().siteConfig,a=t.favicon,n=t.title,c=t.themeConfig,o=c.image,l=c.metadatas,i=t.url,s=t.titleDelimiter,u=e.title,f=e.description,h=e.image,v=e.keywords,b=e.permalink,p=e.searchMetadatas,g=u?u+" "+s+" "+n:n,k=h||o,E=Object(X.a)(k,{absolute:!0}),O=Object(X.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,null,r.a.createElement("html",{lang:"en"}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),a&&r.a.createElement("link",{rel:"shortcut icon",href:O}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:E}),k&&r.a.createElement("meta",{property:"twitter:image",content:E}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),b&&r.a.createElement("meta",{property:"og:url",content:i+b}),b&&r.a.createElement("link",{rel:"canonical",href:i+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(de,Object(d.a)({tag:fe.a,language:"en"},p)),r.a.createElement(ue.a,null,l.map((function(e,t){return r.a.createElement("meta",Object(d.a)({key:"metadata_"+t},e))}))))}a(51);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return r.a.createElement(se,null,r.a.createElement(me,e),r.a.createElement(u,null),r.a.createElement(V,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(W,null))}},108:function(e,t,a){"use strict";var n=a(0),r=a(113);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},111:function(e,t,a){"use strict";var n=a(0),r=a(112);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},113:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},114:function(e,t,a){"use strict";var n=a(0),r=a(10),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r}},115:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},116:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},117:function(e,t,a){"use strict";var n=a(108),r=a(102),c=a(104),o=a(98);t.a=function(){var e=Object(o.a)().navbar.logo,t=Object(n.a)().isDarkTheme,a=Object(r.a)(e.href||"/"),l={};e.target?l={target:e.target}:Object(c.a)(a)||(l={rel:"noopener noreferrer",target:"_blank"});var i=e.srcDark&&t?e.srcDark:e.src;return{logoLink:a,logoLinkProps:l,logoImageUrl:Object(r.a)(i),logoAlt:e.alt}}},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e,t){var a=function(e){return e.endsWith("/")?e:e+"/"};return a(e)===a(t)}},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n="default";function r(e,t){return"docs-"+e+"-"+t}},121:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=f(c),l=f(a(122)),i=f(a(7)),s=f(a(123)),u=f(a(124)),d=a(125);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},122:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},123:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},124:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},125:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},126:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),c=a(0),o=a.n(c),l=a(105),i=a(100),s=a(107),u=["label","to","docsPluginId"];function d(e){var t,a=e.label,c=e.to,d=e.docsPluginId,f=Object(r.a)(e,u),m=Object(i.useActiveVersion)(d),h=Object(s.a)(d).preferredVersion,v=Object(i.useLatestVersion)(d),b=null!==(t=null!=m?m:h)&&void 0!==t?t:v,p=null!=a?a:b.label,g=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.a.createElement(l.a,Object(n.a)({},f,{label:p,to:g}))}},130:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(2),r=a(6),c=a(0),o=a.n(c),l=a(105),i=a(100),s=a(107),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,a,c=e.mobile,f=e.docsPluginId,m=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,v=e.dropdownItemsAfter,b=Object(r.a)(e,u),p=Object(i.useActiveDocContext)(f),g=Object(i.useVersions)(f),k=Object(i.useLatestVersion)(f),E=Object(s.a)(f),O=E.preferredVersion,j=E.savePreferredVersionName;var y=null!==(t=null!==(a=p.activeVersion)&&void 0!==a?a:O)&&void 0!==t?t:k,_=c?"Versions":y.label,w=c?void 0:d(y).path;return o.a.createElement(l.a,Object(n.a)({},b,{mobile:c,label:_,to:w,items:function(){var e=g.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){j(e.name)}}})),t=[].concat(h,e,v);if(!(t.length<=1))return t}(),isActive:m?function(){return!1}:void 0}))}},131:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(2),r=a(6),c=a(0),o=a.n(c),l=a(105),i=a(100),s=a(97),u=a(107),d=["docId","activeSidebarClassName","label","docsPluginId"];function f(e){var t,a,c=e.docId,f=e.activeSidebarClassName,m=e.label,h=e.docsPluginId,v=Object(r.a)(e,d),b=Object(i.useActiveDocContext)(h),p=b.activeVersion,g=b.activeDoc,k=Object(u.a)(h).preferredVersion,E=Object(i.useLatestVersion)(h),O=null!==(t=null!=p?p:k)&&void 0!==t?t:E,j=O.docs.find((function(e){return e.id===c}));if(!j)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+O.name+".\nAvailable docIds=\n- "+O.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},v,{className:Object(s.a)(v.className,(a={},a[f]=g&&g.sidebar===j.sidebar,a)),label:null!=m?m:j.id,to:j.path}))}}}]);