"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7157],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={title:"Moodle App Coding Style",sidebar_position:2},l=void 0,d={unversionedId:"guides/moodleapp/coding-style",id:"guides/moodleapp/coding-style",title:"Moodle App Coding Style",description:"This document outlines the exceptions to the Coding style and [[JavaScript Coding Style]] which apply to the Moodle App and also includes rules for other technologies that are used in the app, like Typescript and Angular.",source:"@site/docs/guides/moodleapp/coding-style.md",sourceDirName:"guides/moodleapp",slug:"/guides/moodleapp/coding-style",permalink:"/devdocs/docs/guides/moodleapp/coding-style",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/coding-style.md",tags:[],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1650553906,formattedLastUpdatedAt:"21/04/2022",sidebarPosition:2,frontMatter:{title:"Moodle App Coding Style",sidebar_position:2},sidebar:"docs",previous:{title:"Moodle App Overview",permalink:"/devdocs/docs/guides/moodleapp/overview"},next:{title:"API Guides",permalink:"/devdocs/docs/apis"}},c={},p=[{value:"Goals",id:"goals",level:2},{value:"TypeScript",id:"typescript",level:2},{value:"Disabling ESLint rules",id:"disabling-eslint-rules",level:3},{value:"Using async / await",id:"using-async--await",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document outlines the exceptions to the ",(0,r.kt)("a",{parentName:"p",href:"/general/development/policies/codingstyle"},"Coding style")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/JavaScript_Coding_Style"},"JavaScript Coding Style")," which apply to the Moodle App and also includes rules for other technologies that are used in the app, like Typescript and Angular."),(0,r.kt)("p",null,"Unless otherwise specified, developers should follow the indications included on those documents."),(0,r.kt)("p",null,"Most rules are enforced with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint"},"ESLint")," and won\u2019t be mentioned in this document, make sure to integrate a linter in your development environment."),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"Consistent coding style is important in any development project, and particularly when many developers are involved. A standard style helps to ensure that the code is easier to read and understand, which helps overall quality."),(0,r.kt)("p",null,"Abstract goals we strive for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"simplicity"),(0,r.kt)("li",{parentName:"ul"},"readability"),(0,r.kt)("li",{parentName:"ul"},"tool friendliness")),(0,r.kt)("p",null,"Note that much of the existing code may not follow all of these guidelines \u2014 we continue to upgrade this code when we see it."),(0,r.kt)("h2",{id:"typescript"},"TypeScript"),(0,r.kt)("h3",{id:"disabling-eslint-rules"},"Disabling ESLint rules"),(0,r.kt)("p",null,"In some situations, it may be necessary to ",(0,r.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/rules#disabling-rules"},"disable ESLint rules using inline comments"),". Although this is discouraged, it is allowed on certain use-cases."),(0,r.kt)("p",null,"Most of the time, however, this could be solved by refactoring code. So think twice before disabling a rule."),(0,r.kt)("p",null,"Warnings should be treated with the same severity as errors, even if they are allowed by the linter. The reasoning behind this is that warnings are useful when new rules are introduced that affect existing code, but new code should always conform to the rules or explicitly disable them."),(0,r.kt)("h3",{id:"using-async--await"},"Using async / await"),(0,r.kt)("p",null,"Using async/await is encouraged, but it shouldn\u2019t be mixed with .then/.catch/.finally. Using both can make code difficult to understand. As a rule of thumb, there should only be one style in a given function."),(0,r.kt)("p",null,"\u2714\ufe0f Good"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function greet() {\n    const response = await fetch('/profile.json');\n    const data = await response.json();\n\n    alert(`Hello, ${data.name}!`);\n}\n")),(0,r.kt)("p",null,"\u26a0\ufe0f Allowed, but discouraged"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function greet() {\n    return fetch('/profile.json')\n        .then(response => response.json())\n        .then(data => {\n            alert(`Hello, ${data.name}!`);\n        });\n}\n")),(0,r.kt)("p",null,"\u274c Bad"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function greet() {\n    const response = await fetch('/profile.json');\n\n    return response.json().then(data => {\n        alert(`Hello, ${data.name}!`);\n    });\n}\n")),(0,r.kt)("p",null,"Async/await is ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Syntactic_sugar"},"syntactic sugar")," for Promises, so it should always be possible to avoid using .then/.catch/.finally."),(0,r.kt)("p",null,"To prevent making asynchronous operations difficult to spot, using await should be limited to simple statements such as one liners, assignments and if guards with a single condition."))}h.isMDXComponent=!0}}]);