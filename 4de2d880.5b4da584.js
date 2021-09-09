(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{66:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return u})),n.d(r,"default",(function(){return p}));var t=n(2),o=n(6),a=(n(0),n(96)),i=["components"],c={id:"references",title:"resume -> references:",sidebar_label:"references"},s={unversionedId:"resume_schema/references",id:"resume_schema/references",isDocsHomePage:!1,title:"resume -> references:",description:"`yaml",source:"@site/docs/resume_schema/references.md",slug:"/resume_schema/references",permalink:"/profileio/docs/resume_schema/references",editUrl:"https://github.com/acrlakshman/profileio/edit/master/docs/docs/resume_schema/references.md",version:"current",sidebar_label:"references",sidebar:"docs",previous:{title:"resume -> interests:",permalink:"/profileio/docs/resume_schema/interests"},next:{title:"resume -> gallery:",permalink:"/profileio/docs/resume_schema/gallery"}},u=[],l={rightToc:u};function p(e){var r=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"references:\n  # required\n  label: References\n\n  # optional\n  rank: 9\n\n  # required\n  list:\n    - value:\n        # required\n        name: John Doe\n        # required\n        title: Prof.\n        # required\n        affiliation: University Name\n        # optional\n        address: XXXX University Ave\n        # optional\n        postalCode: WI XXXXX\n        # optional\n        city: City\n        # optional\n        countryName: USA\n        # optional\n        region: State\n        phoneNumber: '1111111111' # string (if you want to just enter numbers, enclose it in quotes)\n        # required\n        email: user@domain.edu\n      render: false # required\n")))}p.isMDXComponent=!0},96:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=t,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return n?o.a.createElement(d,c(c({ref:r},u),{},{components:n})):o.a.createElement(d,c({ref:r},u))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);