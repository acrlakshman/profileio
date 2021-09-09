(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(96)),i=["components"],c={id:"education",title:"resume -> education:",sidebar_label:"education"},u={unversionedId:"resume_schema/education",id:"resume_schema/education",isDocsHomePage:!1,title:"resume -> education:",description:"`yaml",source:"@site/docs/resume_schema/education.md",slug:"/resume_schema/education",permalink:"/profileio/docs/resume_schema/education",editUrl:"https://github.com/acrlakshman/profileio/edit/master/docs/docs/resume_schema/education.md",version:"current",sidebar_label:"education",sidebar:"docs",previous:{title:"resume -> work:",permalink:"/profileio/docs/resume_schema/work"},next:{title:"resume -> projects:",permalink:"/profileio/docs/resume_schema/projects"}},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"education:\n  # required\n  label: Education\n\n  # optional\n  rank: 1\n\n  # required\n  list:\n    - value:\n        # optional\n        institution: University of Wisconsin-Madison\n        # optional\n        url: https://wisc.edu\n        # optional\n        major: Computer Science\n        # optional\n        minor: ''\n        # optional\n        degree: Ph.D.\n        # optional\n        grade: 3.9 # Must not enclose in quotes, this is a number\n        # optional\n        gradeTotal: 4.0 # Must not enclose in quotes, this is a number\n        # optional\n        courses:\n          - CS521 - Computer Graphics\n          - CS801 - HPC\n      render: true # required\n")))}p.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return t?o.a.createElement(f,c(c({ref:n},s),{},{components:t})):o.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);