(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(146),o=n(147);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},145:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return y}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f}),n.d(e,"useStaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(143),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var c=n(144),l=n.n(c);n.d(e,"PageRenderer",function(){return l.a});var d=n(32);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(t){r.a.useContext;var e=r.a.useContext(p);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(t,e,n){"use strict";var a=n(150),r=n.n(a),i=n(0),o=n.n(i),s=n(4),u=n.n(s);n(152);function c(){var t=r()(["\n  grid-row: last-child;\n"]);return c=function(){return t},t}var l=n(151).a.footer(c()),d=function(t){var e=t.children;return o.a.createElement("div",null,e,o.a.createElement(l,null,"© ",(new Date).getFullYear()))};d.propTypes={children:u.a.node.isRequired},e.a=d},147:function(t,e,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),s=n.n(o),u=n(153),c=n.n(u),l=n(145);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,s=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d;var p="1025518380"},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},149:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(52),u=n(2),c=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c}}]);
//# sourceMappingURL=component---src-pages-404-js-bf823a845da64bb12acb.js.map