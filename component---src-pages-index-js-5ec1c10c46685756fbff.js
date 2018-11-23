(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(152),o=t(141),u=t(173),c=t.n(u),s={div:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"150px"},img:{borderRadius:"50%",boxSizing:"border-box",padding:"10px",border:"1px solid "+o.a,marginBottom:"15px",maxWidth:"150px",maxHeight:"150px"}},l=function(){return r.a.createElement("div",{style:s.div},r.a.createElement("img",{src:c.a,alt:"Lucas Viera",style:s.img}))},d=t(150),f=t(143),p=t(139),m=t.n(p),g=t(140);function h(){var e=m()(["\n    height: 2px;\n    background: ",";\n    margin: 30px 0;\n    width: 100%;\n"]);return h=function(){return e},e}var v=g.a.hr(h(),o.a),x=t(151);function b(){var e=m()(["\n    display: flex;\n    justify-content: space-around;\n"]);return b=function(){return e},e}var y=g.a.div(b()),w=t(174);n.default=function(){return r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(l,null),r.a.createElement(v,null),r.a.createElement(f.a,null,"LUCAS VIEIRA"),r.a.createElement(x.a,null,"Front-end developer"),r.a.createElement(v,null),r.a.createElement(y,null,r.a.createElement("a",{href:"https://github.com/Bilusca",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(w.a,{size:"1.8em",color:o.a})),r.a.createElement("a",{href:"https://www.linkedin.com/in/lucas-assis-vieira/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(w.b,{size:"1.8em",color:o.a})))))}},141:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a="#5f72bd"},142:function(e,n,t){var a;e.exports=(a=t(146))&&a.default||a},143:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t(139),r=t.n(a),i=t(140),o=t(141);function u(){var e=r()(["\n    font-size: 1.8em;\n    color: ",";\n    margin-bottom: 15px;\n    text-align: center;\n    font-family: 'Anton', sans-serif;\n    @media (max-width: 480px) {\n        font-size: 1.7em\n    }\n"]);return u=function(){return e},e}var c=i.a.p(u(),o.a)},144:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return m}),t.d(n,"StaticQueryContext",function(){return f}),t.d(n,"StaticQuery",function(){return p});var a=t(0),r=t.n(a),i=t(4),o=t.n(i),u=t(138),c=t.n(u);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return u.withPrefix}),t.d(n,"navigate",function(){return u.navigate}),t.d(n,"push",function(){return u.push}),t.d(n,"replace",function(){return u.replace}),t.d(n,"navigateTo",function(){return u.navigateTo});var s=t(142),l=t.n(s);t.d(n,"PageRenderer",function(){return l.a});var d=t(34);t.d(n,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Lucas Vieira"}}}}},146:function(e,n,t){"use strict";t.r(n);t(33);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),u=t(51),c=t(2),s=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(u.a,Object.assign({location:n,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=s},147:function(e,n,t){},150:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var a=t(139),r=t.n(a);function i(){var e=r()(["\n    box-sizing: border-box;\n    padding: 66px 44px 44px 44px;\n    width: 325px;\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n    @media (max-width: 480px) {\n        width: 80%;\n    }\n"]);return i=function(){return e},e}var o=t(140).a.div(i())},151:function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t(139),r=t.n(a),i=t(140),o=t(143);function u(){var e=r()(["\n    font-weight: 300;\n    font-size: 1.2em;\n    font-family: 'Roboto', sans-serif;\n    letter-spacing: 0;\n    @media (max-width: 480px) {\n        font-size: 1.2em;\n    }\n"]);return u=function(){return e},e}var c=Object(i.a)(o.a)(u())},152:function(e,n,t){"use strict";var a=t(145),r=t(0),i=t.n(r),o=t(4),u=t.n(o),c=t(153),s=t.n(c),l=t(144),d=(t(147),t(139)),f=t.n(d);function p(){var e=f()(["\n    background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n"]);return p=function(){return e},e}var m=t(140).a.div(p()),g=function(e){var n=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"title",content:"VieiraDev"},{name:"author",content:"Lucas Assis Vieira"},{name:"description",content:"I'm front-end developer. I build things in exchange of paçoquita."},{name:"keywords",content:"frontend, javascript, es6, react, react-native, css3"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(m,null,n))},data:a})};g.propTypes={children:u.a.node.isRequired};n.a=g},173:function(e,n,t){e.exports=t.p+"static/lucas-assis-vieira-5a3592e8682a90407b91e5954474b541.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-5ec1c10c46685756fbff.js.map