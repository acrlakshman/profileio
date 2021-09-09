(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(96)),i=["components"],s={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"This project was started with an intention to provide an easy way for students and researchers to create and deploy a delightfully simple website and a r&eacute;sum&eacute; based on their profile.",source:"@site/docs/introduction.md",slug:"/introduction",permalink:"/profileio/docs/introduction",editUrl:"https://github.com/acrlakshman/profileio/edit/master/docs/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Quick Start",permalink:"/profileio/docs/"},next:{title:"Getting Started",permalink:"/profileio/docs/getting_started"}},l=[{value:"Things to watch out for",id:"things-to-watch-out-for",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This project was started with an intention to provide an easy way for students and researchers to ",Object(o.b)("u",null,Object(o.b)("strong",{parentName:"p"},"create and deploy"))," a delightfully simple website and a r","\xe9","sum","\xe9"," based on their profile."),Object(o.b)("p",null,"Due to the structured nature of the various jobs and achievements by students or researchers, many developers naturally extended an individual's career fields to create a format with predefined fields (e.g. work, education, publications, skills, etc.) either in ",Object(o.b)("a",{parentName:"p",href:"https://yaml.org/"},"YAML"),", ",Object(o.b)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"json")," formats or as html elements and made several web applications to build r","\xe9","sum","\xe9","s. Almost all of the r","\xe9","sum","\xe9"," builders available online, or the projects that generate r","\xe9","sum","\xe9"," from YAML (e.g. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/bamos/cv"},"basmos/cv"),"), from json (e.g. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prat0318/json_resume"},"prat0318/json_resume"),"), or those that aim to create a standard format (e.g. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jsonresume/resume-cli"},"jsonresume/resume-cli"),") successfully provided schemas and demonstrated with working solutions."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Due to the wide use of ",Object(o.b)("a",{parentName:"p",href:"https://jsonresume.org/"},"JSON Resume")," schema, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/acrlakshman/profileio"},"ProfileIO")," adopted it in YAML format and extended it."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Unlike most of the existing projects, ",Object(o.b)("a",{parentName:"strong",href:"https://github.com/acrlakshman/profileio"},"ProfileIO")," aims to generate website and r","\xe9","sum","\xe9"," independently along with providing the required content to seemlessly deploy your website (with automatically linked r","\xe9","sum","\xe9",") using GitHub pages or netlify.")),Object(o.b)("h2",{id:"things-to-watch-out-for"},"Things to watch out for"),Object(o.b)("p",null,"In its current form, a basic knowledge of ",Object(o.b)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," is expected from the user, in order to edit ",Object(o.b)("inlineCode",{parentName:"p"},"profile_web.yml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"profile_resume.yml")," files. Few web applications will be made available in future to make it easy for beginners to populate YAML document."))}u.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(b,s(s({ref:t},l),{},{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);