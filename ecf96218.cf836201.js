(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{92:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return l})),n.d(r,"default",(function(){return u}));var t=n(2),a=n(6),o=(n(0),n(96)),i={id:"skills",title:"resume -> skills:",sidebar_label:"skills"},s={unversionedId:"resume_schema/skills",id:"resume_schema/skills",isDocsHomePage:!1,title:"resume -> skills:",description:"`yaml",source:"@site/docs/resume_schema/skills.md",slug:"/resume_schema/skills",permalink:"/profileio/docs/resume_schema/skills",editUrl:"https://github.com/acrlakshman/profileio/edit/master/docs/docs/resume_schema/skills.md",version:"current",sidebar_label:"skills",sidebar:"docs",previous:{title:"resume -> awards:",permalink:"/profileio/docs/resume_schema/awards"},next:{title:"resume -> languages:",permalink:"/profileio/docs/resume_schema/languages"}},l=[],c={rightToc:l};function u(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"skills:\n  # required\n  label: Skills\n\n  # optional\n  rank: 6\n\n  # required\n  list:\n    - value:\n        # required\n        name: Web development\n        # optional\n        level: Master\n        # required\n        keywords:\n          - HTML\n          - CSS\n          - Javascript\n      render: false # required\n")))}u.isMDXComponent=!0},96:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return f}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var r=a.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=u(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(f,s(s({ref:r},c),{},{components:n})):a.a.createElement(f,s({ref:r},c))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);