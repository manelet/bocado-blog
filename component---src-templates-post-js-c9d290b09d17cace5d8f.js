(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6qSS":function(e,t,a){"use strict";a.r(t),a.d(t,"BlogPostTemplate",(function(){return y})),a.d(t,"pageQuery",(function(){return d}));a("f3/d");var n=a("q1tI"),r=a.n(n),l=a("TJpk"),i=a.n(l),c=a("Wbzz"),s=a("ZMKu"),o={enter:{opacity:1,transition:{when:"beforeChildren"}},exit:{opacity:0}},m={enter:{y:0,opacity:1,transition:{delay:.6,duration:1}},exit:{opacity:0,y:50}},u={enter:{y:0,opacity:1,transition:{delay:1}},exit:{opacity:0,y:50}},p={enter:{opacity:1,transition:{delay:0}},exit:{opacity:0}},y=function(e){var t=e.content,a=e.categories,n=e.image,l=e.title,i=e.date,y=e.author;return r.a.createElement("section",{className:"flex justify-center items-center w-full py-3 px-6 md:px-32 lg:px-64"},r.a.createElement(s.b.div,{variants:o,initial:"exit",animate:"enter",className:"flex flex-col justify-center items-center"},r.a.createElement(s.b.div,{className:"w-full flex flex-col md:flex-row justify-center relative",variants:{enter:{opacity:1},exit:{opacity:0}}},r.a.createElement(s.b.div,{variants:m,className:"relative md:absolute bg-white flex flex-col justify-center items-center mb-8 p-4"},a&&a.length?a.map((function(e){return r.a.createElement("span",{key:e.slug+"cat",style:{color:"#e72c50"}},r.a.createElement(c.a,{to:"/categories/"+e.slug+"/"},e.name))})):null,r.a.createElement("h1",{className:"flex text-3xl text-center w-full md:max-w-md",dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("p",{className:"text-gray-500 text-sm"},r.a.createElement(c.a,{to:"/author/"+y.slug},y.name),i)),n?r.a.createElement(s.b.div,{variants:p,className:"post-image"},r.a.createElement("img",{src:n})):null),r.a.createElement(s.b.div,{variants:u,className:"post-content",dangerouslySetInnerHTML:{__html:t}})))};t.default=function(e){var t=e.data.wordpressPost;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{title:t.title+" | Blog"}),r.a.createElement(y,t))};var d="2492698289"}}]);
//# sourceMappingURL=component---src-templates-post-js-c9d290b09d17cace5d8f.js.map