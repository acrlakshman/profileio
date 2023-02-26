(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{78:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return s})),n.d(r,"default",(function(){return u}));var t=n(2),o=n(6),a=(n(0),n(96)),i={id:"references",title:"web -> references:",sidebar_label:"references"},c={unversionedId:"web_schema/references",id:"web_schema/references",isDocsHomePage:!1,title:"web -> references:",description:"`yaml",source:"@site/docs/web_schema/references.md",slug:"/web_schema/references",permalink:"/profileio/docs/web_schema/references",editUrl:"https://github.com/acrlakshman/profileio/edit/master/docs/docs/web_schema/references.md",version:"current",sidebar_label:"references",sidebar:"docs",previous:{title:"web -> interests:",permalink:"/profileio/docs/web_schema/interests"},next:{title:"web -> gallery:",permalink:"/profileio/docs/web_schema/gallery"}},s=[],l={rightToc:s};function u(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"references:\n  # required\n  label: References\n\n  # optional\n  rank: 9\n\n  # required\n  list:\n    - value:\n        # required\n        name: John Doe\n        # required\n        title: Prof.\n        # required\n        affiliation: University Name\n        # optional\n        address: XXXX University Ave\n        # optional\n        postalCode: WI XXXXX\n        # optional\n        city: City\n        # optional\n        countryName: USA\n        # optional\n        region: State\n        phoneNumber: '1111111111' # string (if you want to just enter numbers, enclose it in quotes)\n        # required\n        email: user@domain.edu\n      render: false # required\n")))}u.isMDXComponent=!0},96:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(m,c(c({ref:r},l),{},{components:n})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);