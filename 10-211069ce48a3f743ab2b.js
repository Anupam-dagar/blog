(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{206:function(e,t,n){"use strict";n.r(t);n(244);var o=n(0),a=n.n(o),r=n(222),i=n(216),l=n(208),c=n(275),s=n.n(c),d=l.default.nav.withConfig({displayName:"toc__StyledNav",componentId:"sc-1hwup8p-0"})([".toc-list{list-style-type:none;margin:0;padding:0;.toc-list{padding-left:17px;padding-top:10px;}}.toc-list-item{line-height:1.2em;padding-bottom:10px;&:last-child{padding-bottom:0;}}.toc-link{color:#808080;text-decoration:none;}.is-active-link{color:#404040;font-weight:700;}"]),u=function(e){var t=e.onClick;return Object(o.useEffect)(function(){return s.a.init({tocSelector:".toc",contentSelector:".post",headingSelector:"h2,h3",scrollSmooth:!0,scrollSmoothDuration:1}),function(){return s.a.destroy()}}),a.a.createElement(d,{className:"toc",onClick:t})},m=n(213),p=n.n(m),f=n(209),h=l.default.div.withConfig({displayName:"reading-progress__ReadingProgressBar",componentId:"vxjjnv-0"})(["position:sticky;height:5px;top:70px;background-color:",";z-index:500;"],function(e){return e.color?e.color:f.a.layout.primaryColor}),g=function(e){var t=e.color,n=e.target,r=Object(o.useState)(0),i=r[0],l=r[1],c=function(){if(n.current){var e=n.current,t=e.clientHeight-e.offsetTop-window.innerHeight,o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return 0===o?l(0):o>t?l(100):void l(o/t*100)}};return Object(o.useEffect)(function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),a.a.createElement(h,{style:{width:i+"%"},color:t})},y=n(210),x=n(224),C=n.n(x),b=n(239),v=function(){return a.a.createElement(a.a.Fragment,null)},E=n(220),S=n(232);n.d(t,"query",function(){return F});var w=Object(l.default)(i.a).withConfig({displayName:"post__PostContainer",componentId:"h8gzap-0"})(["display:flex;justify-content:center;padding:0 !important;"]),k=l.default.div.withConfig({displayName:"post__LeftSidebar",componentId:"h8gzap-1"})(["min-width:255px;max-width:225px;transition:opacity .5s;@media (max-width:","){position:fixed;opacity:",";z-index:1000;background-color:#fff;width:100% !important;max-width:100%;padding:0 20px;margin-top:-5px;height:calc(100vh - 70px);}"],f.a.breakpoints.xl,function(e){return e.show?1:0}),N=l.default.div.withConfig({displayName:"post__PostContent",componentId:"h8gzap-2"})(["margin-top:-5px;border-right:1px #e5eff5 solid;border-left:1px #e5eff5 solid;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.1);z-index:10;width:1035px;max-width:100%;li > a,p > a{color:",";border-bottom:2px "," solid;}pre{margin:30px 0;}blockquote{border-left:4px "," solid;background-color:",';margin:30px 0;padding:5px 20px;border-radius:.3em;}h3::before,h4::before,h5::before,h6::before{display:block;content:" ";height:90px;margin-top:-90px;visibility:hidden;}h2{border-top:1px solid #ececec;margin-top:44px;padding-top:40px;line-height:1.2;}code[class*="language-text"]{padding:5px;}p > img{max-width:100%;border-radius:.3em;margin:30px 0;}hr{border-top:1px solid #ececec;border-bottom:0;margin-top:44px;margin-bottom:40px;}.gatsby-resp-image-link{margin:30px 0;max-width:100%;.gatsby-resp-image-image{border-radius:.3em;}}'],f.a.layout.linkColor,f.a.layout.linkColor,f.a.layout.primaryColor,f.a.layout.backgroundColor),_=l.default.div.withConfig({displayName:"post__TocWrapper",componentId:"h8gzap-3"})(["position:sticky;top:70px;padding:40px 30px 40px 0;"]),L=l.default.header.withConfig({displayName:"post__PostHeader",componentId:"h8gzap-4"})(["padding:40px;@media (max-width:","){padding:20px;}"],f.a.breakpoints.sm),I=Object(l.default)(p.a).withConfig({displayName:"post__FeaturedImage",componentId:"h8gzap-5"})(["border-radius:0;@media (max-width:","){margin-left:-1px;margin-right:-1px;}"],f.a.breakpoints.xl),O=l.default.section.withConfig({displayName:"post__StyledPost",componentId:"h8gzap-6"})(["padding:40px;@media (max-width:","){padding:20px;}"],f.a.breakpoints.sm),A=l.default.section.withConfig({displayName:"post__PostMeta",componentId:"h8gzap-7"})(["display:flex;justify-content:space-between;opacity:.8;font-size:.9em;"]),T=l.default.h1.withConfig({displayName:"post__PostTitle",componentId:"h8gzap-8"})(["margin:0;padding:0;"]),z=l.default.footer.withConfig({displayName:"post__PostFooter",componentId:"h8gzap-9"})(["background-color:#fafafa;font-size:.8em;color:#666;padding:40px;line-height:1em;p{margin:5px 0;}"]),j=Object(l.default)(y.a).withConfig({displayName:"post__FooterTagLink",componentId:"h8gzap-10"})(["color:#000 !important;text-decoration:none;border-bottom:0 !important;"]),q=l.default.section.withConfig({displayName:"post__PostAddition",componentId:"h8gzap-11"})(["background-color:#fff;border-top:1px #e5eff5 solid;border-bottom:1px #e5eff5 solid;z-index:700;position:relative;padding:40px;"]),P=Object(l.default)(i.a).withConfig({displayName:"post__PostAdditionContent",componentId:"h8gzap-12"})(["display:flex;justify-content:space-between;"]),H=l.default.div.withConfig({displayName:"post__BioWrapper",componentId:"h8gzap-13"})(["width:50%;margin:auto;@media (max-width:","){width:100%;}"],f.a.breakpoints.sm),U=l.default.button.withConfig({displayName:"post__ToggleTocButton",componentId:"h8gzap-14"})(["display:flex;position:fixed;justify-content:center;right:20px;bottom:20px;border-radius:100%;box-shadow:0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.1);border:0;z-index:5000;width:50px;height:50px;background-color:#20232a;color:#fff;outline:none;@media (min-width:","){display:none;}"],f.a.breakpoints.xl),F=(t.default=function(e){var t=e.data,n=e.location,i=Object(o.useState)(!1),l=i[0],c=i[1],s=t.post,d=Object(o.createRef)(),m=t.primaryTag,p=function(){return c(!l)};return a.a.createElement(r.a,{bigHeader:!1},a.a.createElement(E.a,{location:n,title:s.frontmatter.title,publishedAt:s.frontmatter.created,updatedAt:s.frontmatter.updated,tags:s.frontmatter.tags,description:s.frontmatter.excerpt,image:s.frontmatter.featuredImage?s.frontmatter.featuredImage.childImageSharp.sizes.src:null}),a.a.createElement(g,{target:d,color:m?m.color:void 0}),a.a.createElement(w,null,s.headings.find(function(e){return e.depth>1})&&a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{show:l},a.a.createElement(_,null,a.a.createElement(u,{onClick:p}))),a.a.createElement(U,{role:"button","aria-label":"Toggle table of contents",onClick:p},l?a.a.createElement(S.h,null):a.a.createElement(S.a,null))),a.a.createElement(N,null,a.a.createElement("article",{className:"post",ref:d},a.a.createElement(L,null,a.a.createElement(A,null,s.frontmatter.tags.length>0&&a.a.createElement(y.a,{to:"/tag/"+C()(s.frontmatter.tags[0],{lower:!0})},s.frontmatter.tags[0]),a.a.createElement("time",{dateTime:s.frontmatter.created},s.frontmatter.createdPretty)),a.a.createElement(T,null,s.frontmatter.title)),s.frontmatter.featuredImage&&a.a.createElement(I,{sizes:s.frontmatter.featuredImage.childImageSharp.sizes}),a.a.createElement(O,{dangerouslySetInnerHTML:{__html:s.html},className:"post"}),a.a.createElement(z,null,a.a.createElement("p",null,"Published under ",s.frontmatter.tags.map(function(e,t){return a.a.createElement("span",{key:t},a.a.createElement(j,{to:"/tag/"+C()(e,{lower:!0})},e),s.frontmatter.tags.length>t+1&&a.a.createElement(a.a.Fragment,null,", "))})," on ",a.a.createElement("time",{dateTime:s.frontmatter.created},s.frontmatter.createdPretty),"."),s.frontmatter.updated!==s.frontmatter.created&&a.a.createElement("p",null,"Last updated on ",a.a.createElement("time",{dateTime:s.frontmatter.updated},s.frontmatter.updatedPretty),"."))))),a.a.createElement(q,null,a.a.createElement(P,null,a.a.createElement(H,null,a.a.createElement(b.a,{textAlign:"center",showName:!0})))),a.a.createElement(v,null))},"357387307")},224:function(e,t,n){var o;n(33),n(100),n(99),n(11),n(32),o=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function t(t,n){if("string"!=typeof t)throw new Error("slugify: string argument expected");n="string"==typeof n?{replacement:n}:n||{};var o=t.split("").reduce(function(t,o){return t+(e[o]||o).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,n.replacement||"-");return n.lower?o.toLowerCase():o}return t.extend=function(t){for(var n in t)e[n]=t[n]},t},e.exports=o(),e.exports.default=o()},239:function(e,t,n){"use strict";n(32);var o=n(235),a=n(0),r=n.n(a),i=n(208),l=(n(18),n(19),n(14),n(34),n(232)),c=i.default.ul.withConfig({displayName:"social-channel-list__StyledSocialChannels",componentId:"sc-16w9pwh-0"})(["list-style-type:none;margin:0;padding:0;"]),s=i.default.li.withConfig({displayName:"social-channel-list__StyledSocialChannel",componentId:"sc-16w9pwh-1"})(["display:inline-block;margin:0 10px;font-size:1.6em;opacity:.7;transition:opacity .5s;&:hover{opacity:1;}"]),d=function(e){var t=e.channels;return r.a.createElement(c,null,Object.keys(t).filter(function(e){return""!==t[e]}).map(function(e,n){return r.a.createElement(s,{key:n},r.a.createElement("a",{href:t[e],target:"_blank",rel:"noopener","aria-label":e},function(e){switch(e){case"twitter":return r.a.createElement(l.j,null);case"facebook":return r.a.createElement(l.b,null);case"github":return r.a.createElement(l.c,null);case"instagram":return r.a.createElement(l.d,null);case"linkedin":return r.a.createElement(l.e,null);case"twitch":return r.a.createElement(l.i,null);case"youtube":return r.a.createElement(l.k,null)}return r.a.createElement(l.f,null)}(e)))}))},u=n(236),m=i.default.section.withConfig({displayName:"bio__StyledBio",componentId:"sc-19adui4-0"})(["margin:auto;text-align:",";width:100%;"],function(e){return e.textAlign}),p=i.default.p.withConfig({displayName:"bio__AuthorDescription",componentId:"sc-19adui4-1"})(["margin:10px 0 13px;a{color:#000;text-decoration:underline;}"]),f=i.default.h3.withConfig({displayName:"bio__AuthorName",componentId:"sc-19adui4-2"})(["margin:10px;"]);t.a=function(e){var t=e.textAlign,n=void 0===t?"center":t,a=e.avatarStyle,i=e.showName,l=void 0!==i&&i,c=o.data.site.siteMetadata.author;return r.a.createElement(m,{textAlign:n},r.a.createElement(u.a,{alt:c.name,style:a}),l&&r.a.createElement(f,null,c.name),r.a.createElement(p,{dangerouslySetInnerHTML:{__html:c.description}}),r.a.createElement(d,{channels:c.social}))}},244:function(e,t,n){"use strict";var o=n(1),a=n(38)(5),r=!0;"find"in[]&&Array(1).find(function(){r=!1}),o(o.P+o.F*r,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(103)("find")},275:function(e,t,n){(function(o){var a,r,i,l;l=void 0!==o?o:this.window||this.global,r=[],a=function(e){"use strict";var t,o,a=n(276),r={},i={},l=n(277),c=n(278);if("undefined"!=typeof window){var s,d=!!e.document.querySelector&&!!e.addEventListener,u=Object.prototype.hasOwnProperty;return i.destroy=function(){if(!r.skipRendering)try{document.querySelector(r.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+r.tocSelector)}r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(r.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1))},i.init=function(e){if(d&&(r=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)u.call(n,o)&&(e[o]=n[o])}return e}(a,e||{}),this.options=r,this.state={},r.scrollSmooth&&(r.duration=r.scrollSmoothDuration,r.offset=r.scrollSmoothOffset,i.scrollSmooth=n(279).initSmoothScrolling(r)),t=l(r),o=c(r),this._buildHtml=t,this._parseContent=o,i.destroy(),null!==(s=o.selectHeadings(r.contentSelector,r.headingSelector)))){var p=o.nestHeadingsArray(s).nest;r.skipRendering||t.render(r.tocSelector,p),this._scrollListener=m(function(e){t.updateToc(s);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(s),r.scrollEndCallback&&r.scrollEndCallback(e))},r.throttleTimeout),this._scrollListener(),r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var f=null;return this._clickListener=m(function(e){r.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(s),f&&clearTimeout(f),f=setTimeout(function(){t.enableTocAnimation()},r.scrollSmoothDuration)},r.throttleTimeout),r.scrollContainer&&document.querySelector(r.scrollContainer)?document.querySelector(r.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},i.refresh=function(e){i.destroy(),i.init(e||this.options)},e.tocbot=i,i}function m(e,t,n){var o,a;return t||(t=250),function(){var r=n||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(a),a=setTimeout(function(){o=i,e.apply(r,l)},t)):(o=i,e.apply(r,l))}}}(l),void 0===(i="function"==typeof a?a.apply(t,r):a)||(e.exports=i)}).call(this,n(231))},276:function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:!1,orderedList:!0,scrollContainer:null,skipRendering:!1}},277:function(e,t,n){n(33),n(26),n(140),n(35),e.exports=function(e){var t=[].forEach,n=[].some,o=document.body,a=!0,r=" ";function i(n,o){var a=o.appendChild(function(n){var o=document.createElement("li"),a=document.createElement("a");e.listItemClass&&o.setAttribute("class",e.listItemClass);e.onClick&&(a.onclick=e.onClick);e.includeHtml&&n.childNodes.length?t.call(n.childNodes,function(e){a.appendChild(e.cloneNode(!0))}):a.textContent=n.textContent;return a.setAttribute("href","#"+n.id),a.setAttribute("class",e.linkClass+r+"node-name--"+n.nodeName+r+e.extraLinkClasses),o.appendChild(a),o}(n));if(n.children.length){var c=l(n.isCollapsed);n.children.forEach(function(e){i(e,c)}),a.appendChild(c)}}function l(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),a=e.listClass+r+e.extraListClasses;return t&&(a+=r+e.collapsibleClass,a+=r+e.isCollapsedClass),o.setAttribute("class",a),o}return{enableTocAnimation:function(){a=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(a=!1)},render:function(e,t){var n=l(!1);t.forEach(function(e){i(e,n)});var o=document.querySelector(e);if(null!==o)return o.firstChild&&o.removeChild(o.firstChild),0===t.length?o:o.appendChild(n)},updateToc:function(i){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var l=document.querySelector(e.scrollContainer).scrollTop;else l=document.documentElement.scrollTop||o.scrollTop;e.positionFixedSelector&&function(){if(e.scrollContainer&&document.querySelector(e.scrollContainer))var t=document.querySelector(e.scrollContainer).scrollTop;else t=document.documentElement.scrollTop||o.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=r+e.positionFixedClass):n.className=n.className.split(r+e.positionFixedClass).join("")}();var c,s=i;if(a&&null!==document.querySelector(e.tocSelector)&&s.length>0){n.call(s,function(t,n){return function t(n){var o=0;return n!=document.querySelector(e.contentSelector&&null!=n)&&(o=n.offsetTop,e.hasInnerContainers&&(o+=t(n.offsetParent))),o}(t)>l+e.headingsOffset+10?(c=s[0===n?n:n-1],!0):n===s.length-1?(c=s[s.length-1],!0):void 0});var d=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);t.call(d,function(t){t.className=t.className.split(r+e.activeLinkClass).join("")});var u=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);t.call(u,function(t){t.className=t.className.split(r+e.activeListItemClass).join("")});var m=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+c.nodeName+'[href="#'+c.id+'"]');-1===m.className.indexOf(e.activeLinkClass)&&(m.className+=r+e.activeLinkClass);var p=m.parentNode;p&&-1===p.className.indexOf(e.activeListItemClass)&&(p.className+=r+e.activeListItemClass);var f=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);t.call(f,function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=r+e.isCollapsedClass)}),m.nextSibling&&-1!==m.nextSibling.className.indexOf(e.isCollapsedClass)&&(m.nextSibling.className=m.nextSibling.className.split(r+e.isCollapsedClass).join("")),function t(n){return-1!==n.className.indexOf(e.collapsibleClass)&&-1!==n.className.indexOf(e.isCollapsedClass)?(n.className=n.className.split(r+e.isCollapsedClass).join(""),t(n.parentNode.parentNode)):n}(m.parentNode.parentNode)}}}}},278:function(e,t,n){n(42),n(99),n(33),n(100),e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function o(e){return+e.nodeName.split("H").join("")}function a(t){var n={id:t.id,children:[],nodeName:t.nodeName,headingLevel:o(t),textContent:t.textContent.trim()};return e.includeHtml&&(n.childNodes=t.childNodes),n}return{nestHeadingsArray:function(r){return t.call(r,function(t,r){return function(t,r){for(var i=a(t),l=o(t),c=r,s=n(c),d=l-(s?s.headingLevel:0);d>0;)(s=n(c))&&void 0!==s.children&&(c=s.children),d--;l>=e.collapseDepth&&(i.isCollapsed=!0),c.push(i)}(a(r),t.nest),t},{nest:[]})},selectHeadings:function(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map(function(t){return t.trim()+":not("+e.ignoreSelector+")"}));try{return document.querySelector(t).querySelectorAll(o)}catch(a){return console.warn("Element not found: "+t),null}}}}},279:function(e,t,n){function o(e,t){var n=window.pageYOffset,o={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||u},a=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),r=typeof e==="string"?o.offset+(e?a&&a.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,i=typeof o.duration==="function"?o.duration(r):o.duration,l,c;function s(e){c=e-l;window.scrollTo(0,o.easing(c,n,r,i));if(c<i){requestAnimationFrame(s)}else{d()}}function d(){if(window.scrollTo(0,n+r),"function"==typeof o.callback){o.callback()}}function u(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}requestAnimationFrame(function(e){l=e;s(e)})}n(33),n(227),n(26),t.initSmoothScrolling=function(e){document.documentElement.style;var t=e.duration,n=e.offset,a=location.hash?r(location.href):location.href;function r(e){return e.slice(0,e.lastIndexOf("#"))}!function(){document.body.addEventListener("click",function(i){if(l=i.target,"a"!==l.tagName.toLowerCase()||!(l.hash.length>0||"#"===l.href.charAt(l.href.length-1))||r(l.href)!==a&&r(l.href)+"#"!==a||i.target.className.indexOf("no-smooth-scroll")>-1||"#"===i.target.href.charAt(i.target.href.length-2)&&"!"===i.target.href.charAt(i.target.href.length-1)||-1===i.target.className.indexOf(e.linkClass))return;var l;o(i.target.hash,{duration:t,offset:n,callback:function(){var e,t;e=i.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}})},!1)}()}}}]);
//# sourceMappingURL=10-211069ce48a3f743ab2b.js.map