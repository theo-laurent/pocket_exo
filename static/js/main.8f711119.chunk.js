(this.webpackJsonpexo_pocket=this.webpackJsonpexo_pocket||[]).push([[0],[,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),r=c(6),a=c.n(r),s=c(2),o=(c(12),c(13),c(0));function l(e){var t=Object(i.useState)(""),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(i.useEffect)((function(){0===n.length&&e.setMovieSearch(null)})),Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("input",{type:"text",className:"header__input",placeholder:"Rechercher un film",name:"headerSearch",value:n,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("button",{type:"submit",onClick:function(){fetch("https://api.themoviedb.org/3/search/movie/?api_key=d4dfced817985d414b727774821c9678&query=".concat(n,"&language=fr"),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setMovieSearch(t.results)})).catch((function(e){return e}))},htmlFor:"headerSearch",className:"header__btn",children:"Rechercher"})]})}c(15);var d=c(4);c(16);function j(e){var t=Object(i.useState)(),c=Object(s.a)(t,2),n=c[0],r=c[1];if(Object(i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e.movieId,"?api_key=d4dfced817985d414b727774821c9678&language=fr"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){return e}))}),[e.movieId]),null!=n){var a="https://image.tmdb.org/t/p/w500/"+n.poster_path,l=n.title,j=" (".concat(new Date(n.release_date).getFullYear(),")"),h=new Date(n.release_date).toLocaleDateString(),u=n.genres.map((function(e){return e.name+", "})),b=Math.floor(n.runtime/60)+"h "+n.runtime%60+"m",v=n.overview,m=10*n.vote_average;return Object(o.jsxs)("div",{className:"containerMovieDetails",children:[Object(o.jsx)("h1",{children:"Description"}),Object(o.jsx)("div",{className:"containerMovieDetails__background",style:{backgroundImage:" url(".concat(a,")")}}),Object(o.jsxs)("div",{className:"containerMovieDetails__infos",children:[Object(o.jsx)("img",{src:a,alt:""}),Object(o.jsxs)("div",{className:"containerMovieDetails__infos__txt",children:[Object(o.jsxs)("div",{className:"containerMovieDetails__infos__title",children:[Object(o.jsx)("h1",{children:l}),Object(o.jsx)("p",{children:j})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"liNone",children:h}),Object(o.jsx)("li",{children:u}),Object(o.jsx)("li",{children:b})]}),Object(o.jsx)("div",{className:"divGraphique",children:Object(o.jsxs)("div",{style:{width:70},children:[Object(o.jsx)(d.a,{value:m,text:m+"%",styles:Object(d.b)({pathColor:"#18D07A",textColor:"white",textSize:"24px"})}),Object(o.jsx)("h3",{children:"Note des utilisateurs"})]})}),Object(o.jsx)("h2",{children:"Synopsis"}),Object(o.jsx)("p",{children:v})]})]})]})}return Object(o.jsx)("div",{children:"loading"})}c(5);var h=c(18);function u(e){var t=Object(i.useState)(0),c=Object(s.a)(t,2),n=c[0],r=c[1],a={year:"numeric",month:"short",day:"numeric"};return Object(i.useEffect)((function(){e.movieSearch&&r(e.movieSearch[0].id)}),[e.movieSearch]),Object(o.jsx)("div",{children:e.movieSearch?Object(o.jsxs)("div",{className:"containerMoviePopular",children:[Object(o.jsx)("h1",{children:"Recherche"}),Object(o.jsx)("div",{className:"moviePopular",children:e.movieSearch.map((function(t){return Object(o.jsxs)("div",{className:t.id===n?"moviePopular__card":"moviePopular__card moviePopular__card-unfocus",onClick:function(){window.scrollTo(1e3,0),e.setMovieId(t.id),r(t.id)},children:[Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path,alt:""}),Object(o.jsx)("h3",{children:t.title}),Object(o.jsx)("p",{children:new Date(t.release_date).toLocaleDateString("fr-FR",a)})]},Object(h.a)())}))})]}):null})}function b(e){var t=Object(i.useState)([]),c=Object(s.a)(t,2),n=c[0],r=c[1],a=Object(i.useState)(0),l=Object(s.a)(a,2),d=l[0],j=l[1],u=e.setMovieId;Object(i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular/?api_key=d4dfced817985d414b727774821c9678&language=fr",{method:"GET"}).then((function(e){return e.json()})).then((function(e){u(e.results[0].id),r(e.results),j(e.results[0].id)})).catch((function(e){return e}))}),[u]),n.splice(5,15);var b={year:"numeric",month:"short",day:"numeric"};return Object(o.jsxs)("div",{className:"containerMoviePopular",children:[Object(o.jsx)("h1",{children:"Films populaires"}),Object(o.jsx)("div",{className:"moviePopular",children:n.map((function(t){return Object(o.jsxs)("div",{className:t.id===d?"moviePopular__card":"moviePopular__card moviePopular__card-unfocus",onClick:function(){window.scrollTo(1e3,0),e.setMovieId(t.id),j(t.id)},children:[Object(o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+t.poster_path,alt:""}),Object(o.jsx)("h3",{children:t.title}),Object(o.jsx)("p",{children:new Date(t.release_date).toLocaleDateString("fr-FR",b)})]},Object(h.a)())}))})]})}var v=function(){var e=Object(i.useState)(55555),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(""),a=Object(s.a)(r,2),d=a[0],h=a[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{setMovieSearch:h}),Object(o.jsx)(j,{movieId:c,setMovieId:n}),Object(o.jsx)(u,{movieSearch:d,setMovieId:n,setMovieSearch:h}),Object(o.jsx)(b,{setMovieId:n})]})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.8f711119.chunk.js.map