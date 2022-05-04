"use strict";(self.webpackChunkirs_lab=self.webpackChunkirs_lab||[]).push([[3],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,m=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(n),d=i,k=c["".concat(m,".").concat(d)]||c[d]||s[d]||o;return n?r.createElement(k,a(a({ref:e},u),{},{components:n})):r.createElement(k,a({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1845:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:1,title:"Git \u7248\u672c\u63a7\u5236"},m=void 0,p={unversionedId:"tools/git",id:"tools/git",title:"Git \u7248\u672c\u63a7\u5236",description:"Git \u662f\u4e00\u500b\u5c08\u9580\u8a2d\u8a08\u7d66\u7a0b\u5f0f\u78bc\u4f7f\u7528\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177\u3002",source:"@site/docs/tools/git.md",sourceDirName:"tools",slug:"/tools/git",permalink:"/docs/tools/git",editUrl:"https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/main/docs/tools/git.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Git \u7248\u672c\u63a7\u5236"},sidebar:"docsSidebar",previous:{title:"\u5de5\u5177",permalink:"/docs/tools"},next:{title:"GitHub",permalink:"/docs/tools/github"}},u={},s=[{value:"\u57fa\u672c\u77e5\u8b58",id:"\u57fa\u672c\u77e5\u8b58",level:2},{value:"\u8edf\u9ad4\u5de5\u5177",id:"\u8edf\u9ad4\u5de5\u5177",level:2},{value:"\u597d\u7684 Commit",id:"\u597d\u7684-commit",level:2},{value:"\u79fb\u52d5\u6a94\u6848\u6216\u91cd\u65b0\u547d\u540d",id:"\u79fb\u52d5\u6a94\u6848\u6216\u91cd\u65b0\u547d\u540d",level:2},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:2}],c={toc:s};function d(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," \u662f\u4e00\u500b\u5c08\u9580\u8a2d\u8a08\u7d66\u7a0b\u5f0f\u78bc\u4f7f\u7528\u7684\u7248\u672c\u63a7\u5236\u5de5\u5177\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 Git \u53ef\u4ee5\u5e6b\u52a9\u4f60\u5728\u7de8\u5beb\u7a0b\u5f0f\u6642\u66f4\u65b9\u4fbf\u5730\u63a7\u5236\u7a0b\u5f0f\u78bc\u7684\u4fee\u6539\u53ca\u8b8a\u5316\uff0c\u5373\u4f7f\u4e0d\u5c0f\u5fc3\u6539\u932f\u6771\u897f\u4e86\uff0c\u4e5f\u53ef\u4ee5\u8f15\u9b06\u5730\u6062\u5fa9\uff0c\u4e26\u5728\u4e0d\u540c\u7684\u7248\u672c\u9593\u5207\u63db\u3002"),(0,o.kt)("h2",{id:"\u57fa\u672c\u77e5\u8b58"},"\u57fa\u672c\u77e5\u8b58"),(0,o.kt)("p",null,"Git \u7684\u6982\u5ff5\u662f\u5b83\u6703\u81ea\u52d5\u5075\u6e2c\u4e00\u500b Repository\uff08\u7a0b\u5f0f\u5eab\uff0c\u7c21\u7a31 Repo\uff09\u5167\u7684\u6a94\u6848\u53ca\u5167\u5bb9\u8b8a\u5316\u3002\u5982\u679c\u5b83\u767c\u73fe\u6709\u6a94\u6848\u6216\u5176\u5167\u5bb9\u6539\u8b8a\u4e86\uff0c\u5c31\u6703\u5c07\u6b64\u6a94\u6848\u52a0\u5230 Unstaged \u5340\u57df\u3002\u4f60\u53ef\u4ee5\u5728 Unstaged \u5340\u57df\u4e2d\u9078\u64c7\u6578\u500b\u6a94\u6848\uff0c\u518d\u5c07\u5176 Stage \u5230 Staged \u5340\u57df\u3002\u7576\u6709\u6a94\u6848\u5728 Staged \u5340\u57df\u6642\uff0c\u4f60\u5c31\u53ef\u4ee5\u7232\u5b83\u5011\u52a0\u4e0a\u4e00\u6bb5\u8a0a\u606f\uff08Summary\uff09\u4e26\u9001\u51fa\u4e00\u500b Commit\u3002\u4e00\u500b Commit \u5c31\u5982\u540c\u4e00\u500b\u7248\u672c\u7bc0\u9ede\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0d\u540c\u7684 Commit \u9593\u5207\u63db\u3002"),(0,o.kt)("p",null,"\u6709\u4f7f\u7528 Git \u7684\u8a71\uff0c\u5982\u679c\u4f60\u4fee\u6539\u7a0b\u5f0f\u5f8c\u767c\u73fe\u6539\u932f\u6771\u897f\u4e86\uff0c\u4f60\u5c31\u53ef\u4ee5\u4e0d\u7528\u4e00\u76f4 ",(0,o.kt)("kbd",null,"Ctrl"),"+",(0,o.kt)("kbd",null,"Z")," Undo\uff0c\u800c\u53ef\u4ee5\u900f\u904e Git \u4f86\u6062\u5fa9\u5230\u4e0a\u4e00\u500b\u529f\u80fd\u6b63\u5e38\u7684 Commit\u3002\u800c\u4e14 Git \u6703\u8a18\u9304\u6240\u6709\u7684\u8b8a\u5316\uff0c\u4f60\u53ef\u4ee5\u5f88\u6e05\u695a\u5730\u770b\u5230\u6bcf\u500b Commit \u4fee\u6539\u4e86\u54ea\u4e9b\u6a94\u6848\u7684\u54ea\u4e9b\u5167\u5bb9\u3002\u4f8b\u5982\u672c Repository \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nfu-irs-lab/docs/commit/ba29bf709b1a244b9b951eb565e527679b602c5f?branch=ba29bf709b1a244b9b951eb565e527679b602c5f&diff=split"},"\u5176\u4e2d\u4e00\u500b Commit"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'// Git \u6703\u8a18\u9304\u4fee\u6539\u7684\u5167\u5bb9\u3002\n// \u6b64\u8655\u5c55\u793a\u4e86\u5c07\u300cHello!\u300d\u6539\u6210\u300cHello! World!\\n\u300d\u7684 Commit\u3002\n#include <stdio.h>\n\nvoid main(void)\n{\n-    printf("Hello!");\n+    printf("Hello! World!\\n");\n}\n')),(0,o.kt)("p",null,"\u7576\u4f60\u7684\u5de5\u4f5c\u544a\u4e00\u6bb5\u843d\uff0c\u4f8b\u5982\u5b8c\u6210\u4e86\u4e00\u500b\u529f\u80fd\u6216\u4e00\u5929\u7d50\u675f\u4e86\uff0c\u53ef\u80fd\u5df2\u7d93\u7d2f\u7a4d\u4e86\u597d\u5e7e\u500b Commit\uff0c\u9019\u6642\u4f60\u53ef\u4ee5\u5c07\u9019\u4e9b Commit Push \u5230 Remote Repository\uff08\u9060\u7aef\u7a0b\u5f0f\u5eab\uff0c\u4f8b\u5982 GitHub\uff09\uff0c\u9019\u6a23\u4f60\u505a\u7684\u9019\u4e9b\u8b8a\u66f4\u5c31\u6703\u96a8\u8457\u4f60\u9001\u51fa\u7684 Commit \u4e00\u8d77\u5132\u5b58\u5728 Remote Repository\u3002\u7576 Remote Repository \u4e0a\u6709\u8b8a\u5316\u6642\uff0c\u4f8b\u5982\u5176\u4ed6\u4eba Push \u4e86\u4e00\u4e9b Commit\uff0c\u4f60\u53ef\u4ee5\u5f9e Remote Repository \u4e0a Pull \u9019\u4e9b\u8b8a\u5316\u5230\u4f60\u96fb\u8166\u4e0a\u7684 Local Repository\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\u4f60\u53ef\u4ee5\u7232\u4e00\u500b\u7279\u5b9a\u7684 Commit \u52a0\u4e0a Tag\uff08\u6a19\u7c64\uff09\uff0c\u4f46\u901a\u5e38\u6b64\u529f\u80fd\u53ea\u6703\u7528\u4f86\u7576\u4f5c\u7ba1\u7406\u767c\u884c\u7248\uff08Release\uff09\u7528\u3002"),(0,o.kt)("p",null,"\u800c Branch\uff08\u5206\u652f\uff09\u7684\u7528\u6cd5\u8acb\u898b ",(0,o.kt)("a",{parentName:"p",href:"./workflow"},"Git-Flow\u3001GitHub-Flow"),"\u3002"),(0,o.kt)("h2",{id:"\u8edf\u9ad4\u5de5\u5177"},"\u8edf\u9ad4\u5de5\u5177"),(0,o.kt)("p",null,"\u539f\u59cb\u7684 Git \u53ea\u80fd\u4f7f\u7528\u6307\u4ee4\uff08CLI\uff09\u4f86\u64cd\u4f5c\uff0c\u4f46\u73fe\u5728\u4e5f\u6709\u5f88\u591a\u5716\u5f62\u4ecb\u9762\u7684 Git \u8edf\u9ad4\u53ef\u4ee5\u4f7f\u7528\u3002\u4ee5\u4e0b\u5217\u51fa\u4e00\u4e9b\u6bd4\u8f03\u5e38\u898b\u7684\u8edf\u9ad4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.sourcetreeapp.com/"},"Sourcetree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.gitkraken.com/"},"GitKraken")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://desktop.github.com/"},"GitHub Desktop")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tortoisegit.org/"},"TortoiseGit"))),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u73fe\u5728\u591a\u6578\u7684 IDE \u4e5f\u6709\u5167\u5efa Git \u529f\u80fd\u3002\u4f8b\u5982 Visual Studio\u3002"),(0,o.kt)("h2",{id:"\u597d\u7684-commit"},"\u597d\u7684 Commit"),(0,o.kt)("p",null,"\u4e00\u500b\u597d\u7684 Commit \u61c9\u8a72\u53ea\u5305\u542b\u4e86\u6700\u5c0f\u90e8\u5206\u7684\u8b8a\u66f4\uff0c\u4fee\u6539\u4e86\u4e00\u90e8\u5206\u5c31\u9001\u4e00\u6b21 Commit\uff0c\u800c\u4e0d\u662f\u6539\u4e86\u4e00\u5927\u5806\u5f7c\u6b64\u6c92\u592a\u591a\u95dc\u4fc2\u7684\u6771\u897f\u5f8c\u624d\u9001\u4e00\u500b Commit\u3002"),(0,o.kt)("p",null,"\u800c\u4e14\u597d\u7684 Commit \u7684 Summary \u61c9\u8a72\u8981\u53ef\u4ee5\u6e05\u695a\u5730\u8868\u9054\u6b64 Commit \u7a76\u7adf\u6539\u4e86\u4e9b\u4ec0\u9ebc\uff0c\u800c\u4e0d\u662f\u53ea\u6709\u4e9b\u7c60\u7d71\u53c8\u4e0d\u5920\u660e\u78ba\u7684\u8a0a\u606f\u3002\u4e0d\u80fd\u6e05\u695a\u8868\u9054\u7684 Summary \u6c92\u6709\u610f\u7fa9\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u597d\u7684 Summary"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4e0d\u597d\u7684 Summary"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u589e\u52a0\u81ea\u52d5\u8a18\u9304 Log \u7684\u529f\u80fd"),(0,o.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u7a0b\u5f0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u589e\u52a0\u8655\u7406 Log \u6a94\u6848\u8def\u5f91\u6642\u7684\u4f8b\u5916\u8655\u7406\uff0c\u4f86\u4fee\u6b63\u76ee\u6a19\u8def\u5f91\u4e0d\u5b58\u5728\u6642\u6703\u4e2d\u65b7\u7a0b\u5f0f\u7684 bug"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4fee bug")))),(0,o.kt)("h2",{id:"\u79fb\u52d5\u6a94\u6848\u6216\u91cd\u65b0\u547d\u540d"},"\u79fb\u52d5\u6a94\u6848\u6216\u91cd\u65b0\u547d\u540d"),(0,o.kt)("p",null,"\u7576\u4e00\u500b\u6a94\u6848\u6216\u8cc7\u6599\u593e\u5728 Git \u7684\u63a7\u5236\u4e0b\u6642\uff0c\u5982\u679c\u4f60\u60f3\u8981\u79fb\u52d5\u5b83\u6216\u5c0d\u5b83\u91cd\u65b0\u547d\u540d\uff0c\u4e0d\u61c9\u8a72\u76f4\u63a5\u900f\u904e\u6a94\u6848\u7e3d\u7ba1\u4f86\u505a\u9019\u4e9b\u52d5\u4f5c\uff0c\u800c\u662f\u61c9\u8a72\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-mv"},(0,o.kt)("inlineCode",{parentName:"a"},"git mv"))," \u6307\u4ee4\u4f86\u5b8c\u6210\uff0c\u5426\u5247 Git \u6703\u5c07\u79fb\u52d5\u6216\u91cd\u65b0\u547d\u540d\u7684\u6a94\u6848\u53ca\u8cc7\u6599\u593e\u8996\u7232\u4e0d\u540c\u7684\u5168\u65b0\u6a94\u6848\uff0c\u9032\u800c\u907a\u5931\u4ee5\u5f80\u7684\u6240\u6709 Commit \u8a18\u9304\u3002\u4f7f\u7528\u6642\u53ef\u4ee5\u642d\u914d ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," \u6307\u4ee4\u4f86\u67e5\u770b\u76ee\u524d\u5de5\u4f5c\u8def\u5f91\u5167\u7684\u6a94\u6848\u53ca\u8cc7\u6599\u593e\u3001\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," \u6307\u4ee4\u4f86\u79fb\u52d5\u5de5\u4f5c\u8def\u5f91\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u4f60\u60f3\u5c07\u300cTest.txt\u300d\u79fb\u52d5\u5230\u8cc7\u6599\u593e\u300cTest\u300d\u5e95\u4e0b\u6642\uff0c\u61c9\u8a72\u57f7\u884c\u6307\u4ee4\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"git mv Test.txt Test/")),(0,o.kt)("li",{parentName:"ul"},"\u6216\u662f\u4f60\u60f3\u5c07\u300cTest.txt\u300d\u91cd\u65b0\u547d\u540d\u6210\u300cDoc.txt\u300d\u6642\uff0c\u61c9\u8a72\u57f7\u884c\u6307\u4ee4\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"git mv Test.txt Doc.txt"))),(0,o.kt)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://taichunmin.gitlab.io/progit2-zh-tw/"},"Pro Git, \u7e41\u9ad4\u4e2d\u6587\u7b2c 2 \u7248\uff08\u514d\u8cbb\u66f8\u7c4d\uff09")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitbook.tw/chapters/introduction/about-this-book.html"},"\u70ba\u4f60\u81ea\u5df1\u5b78 Git\uff01")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitbook.tw/chapters/introduction/what-is-git.html"},"\u4ec0\u9ebc\u662f Git\uff1f\u70ba\u4ec0\u9ebc\u8981\u5b78\u7fd2\u5b83\uff1f"))))}d.isMDXComponent=!0}}]);