(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{qebg:function(e,t,s){"use strict";s.r(t),s.d(t,"ResourcesModule",(function(){return K}));var i=s("ofXK"),r=s("tyNb"),a=s("fXoL"),n=s("1kSV");let o=(()=>{class e{constructor(e){this.activeModal=e}ngOnInit(){this.setTable()}onClose(){this.activeModal.close()}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(n.a))},e.\u0275cmp=a.Db({type:e,selectors:[["ng-component"]],inputs:{object:"object"},decls:0,vars:0,template:function(e,t){},encapsulation:2}),e})();function c(e,t){if(1&e&&(a.Ob(0,"tr"),a.Ob(1,"td",2),a.yc(2),a.Nb(),a.Ob(3,"td"),a.yc(4),a.Nb(),a.Nb()),2&e){const e=t.$implicit;a.xb(2),a.Ac("",e.title,":"),a.xb(2),a.zc(e.value)}}let l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Db({type:e,selectors:[["app-table-info"]],inputs:{data:"data"},decls:3,vars:1,consts:[[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"title"]],template:function(e,t){1&e&&(a.Ob(0,"table",0),a.Ob(1,"tbody"),a.wc(2,c,5,2,"tr",1),a.Nb(),a.Nb()),2&e&&(a.xb(2),a.gc("ngForOf",t.data))},directives:[i.j],encapsulation:2}),e})(),p=(()=>{class e{constructor(){this.closeModal=new a.n}ngOnInit(){}onClose(){this.closeModal.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Db({type:e,selectors:[["app-modal"]],inputs:{title:"title",data:"data"},outputs:{closeModal:"closeModal"},decls:11,vars:2,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"data"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(a.Ob(0,"div",0),a.Ob(1,"h4",1),a.yc(2),a.Nb(),a.Ob(3,"button",2),a.Zb("click",(function(){return t.onClose()})),a.Ob(4,"span",3),a.yc(5,"\xd7"),a.Nb(),a.Nb(),a.Nb(),a.Ob(6,"div",4),a.Kb(7,"app-table-info",5),a.Nb(),a.Ob(8,"div",6),a.Ob(9,"button",7),a.Zb("click",(function(){return t.onClose()})),a.yc(10," Close "),a.Nb(),a.Nb()),2&e&&(a.xb(2),a.zc(t.title),a.xb(5),a.gc("data",t.data))},directives:[l],encapsulation:2}),e})(),u=(()=>{class e extends o{constructor(e){super(e),this.activeModal=e}setTable(){this.data=[{title:"Title",value:this.object.title},{title:"Episode",value:this.object.episode_id},{title:"Description",value:this.object.opening_crawl},{title:"Director",value:this.object.director},{title:"Producer",value:this.object.producer},{title:"Release Date",value:this.object.release_date}]}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(n.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-film-detail-modal"]],features:[a.ub],decls:1,vars:2,consts:[[3,"title","data","closeModal"]],template:function(e,t){1&e&&(a.Ob(0,"app-modal",0),a.Zb("closeModal",(function(){return t.onClose()})),a.Nb()),2&e&&a.gc("title",t.object.title)("data",t.data)},directives:[p],encapsulation:2}),e})();var b=s("lJxs");function d(...e){const t=e.length;if(0===t)throw new Error("list of properties cannot be empty.");return s=>Object(b.a)(function(e,t){return s=>{let i=s;for(let r=0;r<t;r++){const t=i[e[r]];if(void 0===t)return;i=t}return i}}(e,t))(s)}var h=s("AytR"),m=s("tk/3");let f=(()=>{class e{constructor(e){this.http=e}getFilms(){return this.http.get(h.a.swapi+"films").pipe(d("results"),Object(b.a)(e=>e.map(e=>({id:parseInt(e.url.split("/")[5],10),title:`${e.title}  | Episode ${e.episode_id}`,description:e.opening_crawl,options:[e.director,e.producer],url:e.url}))))}getFilmById(e){return this.http.get(`${h.a.swapi}films/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(m.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=s("3Pt+");let g=(()=>{class e{constructor(e,t,s){this.fb=e,this.router=t,this.elementRef=s,this.search=""}fixInternalHeaderOnTop(e){this.fixed=window.pageYOffset>this.initialHeaderPosition}ngOnInit(){this.fixed=!1,this.initialHeaderPosition=this.elementRef.nativeElement.getBoundingClientRect().y,this.formGroup=this.fb.group({search:[this.search,v.l.required]})}onGoToHome(){this.router.navigate(["/"])}onSearch(){this.formGroup.valid&&this.router.navigate(["/resources"],{queryParams:{search:this.formGroup.get("search").value}})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(v.b),a.Jb(r.b),a.Jb(a.l))},e.\u0275cmp=a.Db({type:e,selectors:[["app-internal-header"]],hostBindings:function(e,t){1&e&&a.Zb("scroll",(function(e){return t.fixInternalHeaderOnTop(e)}),!1,a.oc)},inputs:{search:"search"},decls:18,vars:5,consts:[[1,"internal-header","pt-medium","pb-small"],[1,"row"],[1,"col-1-6"],[1,"internal-header__logo-element"],[1,"heading-logo",3,"click"],[1,"heading-logo--main"],[1,"heading-logo--subtitle"],[1,"col-3-6"],[1,"internal-header__form-element"],[1,"internal-header__form-element--main-box"],[3,"formGroup","keyup.enter"],["for","search-box"],["type","text","id","search-box","formControlName","search"],[1,"icon-basic-magnifier",3,"click"]],template:function(e,t){1&e&&(a.Ob(0,"div"),a.Ob(1,"div",0),a.Ob(2,"div",1),a.Ob(3,"div",2),a.Ob(4,"div",3),a.Ob(5,"h1",4),a.Zb("click",(function(){return t.onGoToHome()})),a.Ob(6,"span",5),a.yc(7,"Star Wars (Pedia)"),a.Nb(),a.Ob(8,"span",6),a.yc(9,"Everything about Star Wars franchise"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(10,"div",7),a.Ob(11,"div",8),a.Ob(12,"div",9),a.Ob(13,"form",10),a.Zb("keyup.enter",(function(){return t.onSearch()})),a.Ob(14,"label",11),a.yc(15,"Search again..."),a.Nb(),a.Kb(16,"input",12),a.Ob(17,"i",13),a.Zb("click",(function(){return t.onSearch()})),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.Bb("fixed-clearfix",t.fixed),a.xb(1),a.Bb("fixed",t.fixed),a.xb(12),a.gc("formGroup",t.formGroup))},directives:[v.n,v.i,v.d,v.a,v.h,v.c],encapsulation:2}),e})(),_=(()=>{class e{transform(e,t=144){return e.substr(0,t)+(e.length>t?"...":"")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=a.Ib({name:"shortDescription",type:e,pure:!0}),e})();function y(e,t){if(1&e){const e=a.Pb();a.Ob(0,"li"),a.Ob(1,"a",6),a.Zb("click",(function(){return a.pc(e),a.bc().onOpenResult()})),a.yc(2),a.Nb(),a.Nb()}if(2&e){const e=t.$implicit;a.xb(2),a.zc(e)}}let O=(()=>{class e{constructor(){this.openResult=new a.n,this.shortDescription=new _}ngOnInit(){}onOpenResult(){this.openResult.emit(this.object.id)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Db({type:e,selectors:[["app-result-card"]],inputs:{object:"object"},outputs:{openResult:"openResult"},decls:7,vars:3,consts:[[1,"result-card"],[1,"result-card__title","mb-small"],[3,"innerHTML","click"],[1,"result-card__description",3,"innerHTML"],[1,"result-card__links","mt-small"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,t){1&e&&(a.Ob(0,"div",0),a.Ob(1,"h3",1),a.Ob(2,"a",2),a.Zb("click",(function(){return t.onOpenResult()})),a.Nb(),a.Nb(),a.Kb(3,"p",3),a.Ob(4,"div",4),a.Ob(5,"ul"),a.wc(6,y,3,1,"li",5),a.Nb(),a.Nb(),a.Nb()),2&e&&(a.xb(2),a.gc("innerHTML",t.object.title,a.qc),a.xb(1),a.gc("innerHTML",t.shortDescription.transform(t.object.description,300),a.qc),a.xb(3),a.gc("ngForOf",t.object.options))},directives:[i.j],encapsulation:2}),e})();function w(e,t){if(1&e){const e=a.Pb();a.Ob(0,"div",2),a.Ob(1,"div",3),a.Ob(2,"app-result-card",4),a.Zb("openResult",(function(t){return a.pc(e),a.bc().onOpenResult(t)})),a.Nb(),a.Nb(),a.Nb()}if(2&e){const e=t.$implicit;a.xb(2),a.gc("object",e)}}let j=(()=>{class e{constructor(){this.openResult=new a.n}ngOnInit(){}onOpenResult(e){this.openResult.emit(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Db({type:e,selectors:[["app-result-block"]],inputs:{results$:"results$"},outputs:{openResult:"openResult"},decls:3,vars:3,consts:[[1,"container","mt-medium","mb-medium"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col-2-3"],[3,"object","openResult"]],template:function(e,t){1&e&&(a.Ob(0,"div",0),a.wc(1,w,3,1,"div",1),a.cc(2,"async"),a.Nb()),2&e&&(a.xb(1),a.gc("ngForOf",a.dc(2,1,t.results$)))},directives:[i.j,O],pipes:[i.b],encapsulation:2}),e})(),S=(()=>{class e{constructor(e,t){this.filmService=e,this.modalService=t}ngOnInit(){this.films$=this.filmService.getFilms()}onOpenFilm(e){this.filmService.getFilmById(e).subscribe(e=>{this.modalService.open(u).componentInstance.object={title:e.title,episode_id:e.episode_id,opening_crawl:e.opening_crawl,director:e.director,producer:e.producer,release_date:e.release_date,url:e.url}})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(f),a.Jb(n.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-films"]],decls:2,vars:1,consts:[[3,"results$","openResult"]],template:function(e,t){1&e&&(a.Kb(0,"app-internal-header"),a.Ob(1,"app-result-block",0),a.Zb("openResult",(function(e){return t.onOpenFilm(e)})),a.Nb()),2&e&&(a.xb(1),a.gc("results$",t.films$))},directives:[g,j],encapsulation:2}),e})(),N=(()=>{class e extends o{constructor(e){super(e),this.activeModal=e}setTable(){this.data=[{title:"Name",value:this.object.name},{title:"Birth Year",value:this.object.birth_year},{title:"Eye Color",value:this.object.eye_color},{title:"Gender",value:this.object.gender},{title:"Hair Color",value:this.object.hair_color},{title:"Height",value:this.object.height},{title:"Mass",value:this.object.mass},{title:"Skin Color",value:this.object.skin_color},{title:"Homeworld",value:this.object.homeworld}]}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(n.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-person-detail-modal"]],features:[a.ub],decls:1,vars:2,consts:[[3,"title","data","closeModal"]],template:function(e,t){1&e&&(a.Ob(0,"app-modal",0),a.Zb("closeModal",(function(){return t.onClose()})),a.Nb()),2&e&&a.gc("title",t.object.name)("data",t.data)},directives:[p],encapsulation:2}),e})(),$=(()=>{class e{constructor(e){this.http=e}getPeople(){return this.http.get(h.a.swapi+"people").pipe(d("results"),Object(b.a)(e=>e.map(e=>({id:parseInt(e.url.split("/")[5],10),title:""+e.name,description:`From: ${e.homeworld} - Birth Year: ${e.birth_year}`,options:["Skin Color: "+e.skin_color,"Hair Color: "+e.hair_color,"Eye Color: "+e.eye_color],url:e.url}))))}getPersonById(e){return this.http.get(`${h.a.swapi}people/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(m.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),I=(()=>{class e{constructor(e,t){this.personService=e,this.modalService=t}ngOnInit(){this.people$=this.personService.getPeople()}onOpenPerson(e){this.personService.getPersonById(e).subscribe(e=>{this.modalService.open(N).componentInstance.object={name:e.name,birth_year:e.birth_year,eye_color:e.eye_color,gender:e.gender,hair_color:e.hair_color,height:e.height,mass:e.mass,skin_color:e.skin_color,homeworld:e.homeworld}})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb($),a.Jb(n.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-people"]],decls:2,vars:1,consts:[[3,"results$","openResult"]],template:function(e,t){1&e&&(a.Kb(0,"app-internal-header"),a.Ob(1,"app-result-block",0),a.Zb("openResult",(function(e){return t.onOpenPerson(e)})),a.Nb()),2&e&&(a.xb(1),a.gc("results$",t.people$))},directives:[g,j],encapsulation:2}),e})(),x=(()=>{class e extends o{constructor(e){super(e),this.activeModal=e}setTable(){this.data=[{title:"Name",value:this.object.name},{title:"Diameter",value:this.object.diameter},{title:"Rotation Period",value:this.object.rotation_period},{title:"Orbital Period",value:this.object.orbital_period},{title:"Gravity",value:this.object.gravity},{title:"Population",value:this.object.population},{title:"Climate",value:this.object.climate},{title:"Terrain",value:this.object.terrain},{title:"Surface Water",value:this.object.surface_water}]}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(n.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-planet-detail-modal"]],features:[a.ub],decls:1,vars:2,consts:[[3,"title","data","closeModal"]],template:function(e,t){1&e&&(a.Ob(0,"app-modal",0),a.Zb("closeModal",(function(){return t.onClose()})),a.Nb()),2&e&&a.gc("title",t.object.name)("data",t.data)},directives:[p],encapsulation:2}),e})(),k=(()=>{class e{constructor(e){this.http=e}getPlanets(){return this.http.get(h.a.swapi+"planets/").pipe(d("results"),Object(b.a)(e=>e.map(e=>({id:parseInt(e.url.split("/")[5],10),title:e.name,description:"Population: "+e.population,options:["Diameter: "+e.diameter,"Population: "+e.population,"Orbital Period: "+e.orbital_period],url:e.url}))))}getPlanetById(e){return this.http.get(`${h.a.swapi}planets/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(m.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),C=(()=>{class e{constructor(e,t){this.planetService=e,this.modalService=t}ngOnInit(){this.planets$=this.planetService.getPlanets()}onOpenPlanet(e){this.planetService.getPlanetById(e).subscribe(e=>{this.modalService.open(x).componentInstance.object={name:e.name,diameter:e.diameter,rotation_period:e.rotation_period,orbital_period:e.orbital_period,gravity:e.gravity,population:e.population,climate:e.climate,terrain:e.terrain,surface_water:e.surface_water}})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(k),a.Jb(n.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-planets"]],decls:2,vars:1,consts:[[3,"results$","openResult"]],template:function(e,t){1&e&&(a.Kb(0,"app-internal-header"),a.Ob(1,"app-result-block",0),a.Zb("openResult",(function(e){return t.onOpenPlanet(e)})),a.Nb()),2&e&&(a.xb(1),a.gc("results$",t.planets$))},directives:[g,j],encapsulation:2}),e})(),R=(()=>{class e{transform(e,t,s){const i=t.charAt(0).toUpperCase()+t.slice(1),r=s.replace(new RegExp(t,"i"),i);return e.replace(new RegExp(` ${t} `,"i"),` ${s} `).replace(new RegExp(i,"i"),r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=a.Ib({name:"replaceAll",type:e,pure:!0}),e})(),M=(()=>{class e{constructor(e){this.http=e,this.replaceAll=new R}search(e){const t=(new m.c).append("search",e);return this.http.get(h.a.swapi+"films",{params:t}).pipe(d("results"),Object(b.a)(t=>{const s=`<span class="result-card__result-key">${e}</span>`;return t.map(t=>({id:parseInt(t.url.split("/")[5],10),title:this.replaceAll.transform(t.title,e,s),description:this.replaceAll.transform(t.opening_crawl,e,s),options:[t.director,t.producer],url:t.url}))}))}getResultById(e){return this.http.get(`${h.a.swapi}films/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(m.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),P=(()=>{class e{constructor(e,t,s){this.activatedRoute=e,this.searchService=t,this.modalService=s}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{this.search=e.search,this.results$=this.searchService.search(this.search)})}onOpenResult(e){this.searchService.getResultById(e).subscribe(e=>{this.modalService.open(u).componentInstance.object={title:e.title,episode_id:e.episode_id,opening_crawl:e.opening_crawl,director:e.director,producer:e.producer,release_date:e.release_date,url:e.url}})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(r.a),a.Jb(M),a.Jb(n.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-result-search"]],decls:2,vars:2,consts:[[3,"search"],[3,"results$","openResult"]],template:function(e,t){1&e&&(a.Kb(0,"app-internal-header",0),a.Ob(1,"app-result-block",1),a.Zb("openResult",(function(e){return t.onOpenResult(e)})),a.Nb()),2&e&&(a.gc("search",t.search),a.xb(1),a.gc("results$",t.results$))},directives:[g,j],encapsulation:2}),e})(),D=(()=>{class e extends o{constructor(e){super(e),this.activeModal=e}setTable(){this.data=[{title:"Name",value:this.object.name},{title:"Classification",value:this.object.classification},{title:"Designation",value:this.object.designation},{title:"Average Height",value:this.object.average_height},{title:"Average Lifespan",value:this.object.average_lifespan},{title:"Eye Colors",value:this.object.eye_colors},{title:"Hair Colors",value:this.object.hair_colors},{title:"Skin Colors",value:this.object.skin_colors},{title:"Language",value:this.object.language},{title:"Homeworld",value:this.object.homeworld}]}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(n.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-species-detail-modal"]],features:[a.ub],decls:1,vars:2,consts:[[3,"title","data","closeModal"]],template:function(e,t){1&e&&(a.Ob(0,"app-modal",0),a.Zb("closeModal",(function(){return t.onClose()})),a.Nb()),2&e&&a.gc("title",t.object.name)("data",t.data)},directives:[p],encapsulation:2}),e})(),J=(()=>{class e{constructor(e){this.http=e}getSpecies(){return this.http.get(h.a.swapi+"species/").pipe(d("results"),Object(b.a)(e=>e.map(e=>({id:parseInt(e.url.split("/")[5],10),title:e.name,description:`From: ${e.homeworld} - Language: ${e.language}`,options:["Skin Colors: "+e.skin_colors,"Hair Colors: "+e.hair_colors,"Eye Colors: "+e.eye_colors],url:e.url}))))}getSpeciesById(e){return this.http.get(`${h.a.swapi}species/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(m.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),F=(()=>{class e{constructor(e,t){this.speciesService=e,this.modalService=t}ngOnInit(){this.species$=this.speciesService.getSpecies()}onOpenSpecies(e){this.speciesService.getSpeciesById(e).subscribe(e=>{this.modalService.open(D).componentInstance.object={name:e.name,classification:e.classification,designation:e.designation,average_height:e.average_height,average_lifespan:e.average_lifespan,eye_colors:e.eye_colors,hair_colors:e.hair_colors,skin_colors:e.skin_colors,language:e.language,homeworld:e.homeworld}})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(J),a.Jb(n.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-species"]],decls:2,vars:1,consts:[[3,"results$","openResult"]],template:function(e,t){1&e&&(a.Kb(0,"app-internal-header"),a.Ob(1,"app-result-block",0),a.Zb("openResult",(function(e){return t.onOpenSpecies(e)})),a.Nb()),2&e&&(a.xb(1),a.gc("results$",t.species$))},directives:[g,j],encapsulation:2}),e})(),Z=(()=>{class e extends o{constructor(e){super(e),this.activeModal=e}setTable(){this.data=[{title:"Name",value:this.object.name},{title:"Model",value:this.object.model},{title:"Starship Class",value:this.object.starship_class},{title:"Manufacturer",value:this.object.manufacturer},{title:"Cost In Credits",value:this.object.cost_in_credits},{title:"Length",value:this.object.length},{title:"Crew",value:this.object.crew},{title:"Passengers",value:this.object.passengers},{title:"Max Atmosphering Speed",value:this.object.max_atmosphering_speed},{title:"Hyperdrive Rating",value:this.object.hyperdrive_rating},{title:"MGLT",value:this.object.MGLT},{title:"Cargo Capacity",value:this.object.cargo_capacity},{title:"Consumables",value:this.object.consumables}]}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(n.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-starship-detail-modal"]],features:[a.ub],decls:1,vars:2,consts:[[3,"title","data","closeModal"]],template:function(e,t){1&e&&(a.Ob(0,"app-modal",0),a.Zb("closeModal",(function(){return t.onClose()})),a.Nb()),2&e&&a.gc("title",t.object.name)("data",t.data)},directives:[p],encapsulation:2}),e})(),H=(()=>{class e{constructor(e){this.http=e}getStarships(){return this.http.get(h.a.swapi+"starships/").pipe(d("results"),Object(b.a)(e=>e.map(e=>({id:parseInt(e.url.split("/")[5],10),title:e.name,description:"Starship Class: "+e.starship_class,options:["Starship Model: "+e.model],url:e.url}))))}getStarshipById(e){return this.http.get(`${h.a.swapi}starships/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(m.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),T=(()=>{class e{constructor(e,t){this.starshipService=e,this.modalService=t}ngOnInit(){this.starships$=this.starshipService.getStarships()}onOpenStarship(e){this.starshipService.getStarshipById(e).subscribe(e=>{this.modalService.open(Z).componentInstance.object={name:e.name,model:e.model,starship_class:e.starship_class,manufacturer:e.manufacturer,cost_in_credits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,max_atmosphering_speed:e.max_atmosphering_speed,hyperdrive_rating:e.hyperdrive_rating,MGLT:e.MGLT,cargo_capacity:e.cargo_capacity,consumables:e.consumables}})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(H),a.Jb(n.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-starships"]],decls:2,vars:1,consts:[[3,"results$","openResult"]],template:function(e,t){1&e&&(a.Kb(0,"app-internal-header"),a.Ob(1,"app-result-block",0),a.Zb("openResult",(function(e){return t.onOpenStarship(e)})),a.Nb()),2&e&&(a.xb(1),a.gc("results$",t.starships$))},directives:[g,j],encapsulation:2}),e})(),B=(()=>{class e extends o{constructor(e){super(e),this.activeModal=e}setTable(){this.data=[{title:"Name",value:this.object.name},{title:"Model",value:this.object.model},{title:"Vehicle Class",value:this.object.vehicle_class},{title:"Manufacturer",value:this.object.manufacturer},{title:"Length",value:this.object.length},{title:"Cost In Credits",value:this.object.cost_in_credits},{title:"Crew",value:this.object.crew},{title:"Passengers",value:this.object.passengers},{title:"Max Atmosphering Speed",value:this.object.max_atmosphering_speed},{title:"Cargo Capacity",value:this.object.cargo_capacity},{title:"Consumables",value:this.object.consumables}]}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(n.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-vehicle-detail-modal"]],features:[a.ub],decls:1,vars:2,consts:[[3,"title","data","closeModal"]],template:function(e,t){1&e&&(a.Ob(0,"app-modal",0),a.Zb("closeModal",(function(){return t.onClose()})),a.Nb()),2&e&&a.gc("title",t.object.name)("data",t.data)},directives:[p],encapsulation:2}),e})(),G=(()=>{class e{constructor(e){this.http=e}getVehicles(){return this.http.get(h.a.swapi+"vehicles/").pipe(d("results"),Object(b.a)(e=>e.map(e=>({id:parseInt(e.url.split("/")[5],10),title:e.name,description:"Vehicle Class: "+e.vehicle_class,options:["Passengers Ideal Quantity: "+e.passengers],url:e.url}))))}getVehicleById(e){return this.http.get(`${h.a.swapi}vehicles/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(m.a))},e.\u0275prov=a.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const L=[{path:"",component:P},{path:"people",component:I},{path:"films",component:S},{path:"starships",component:T},{path:"vehicles",component:(()=>{class e{constructor(e,t){this.vehicleService=e,this.modalServices=t}ngOnInit(){this.vehicles$=this.vehicleService.getVehicles()}onOpenVehicle(e){this.vehicleService.getVehicleById(e).subscribe(e=>{this.modalServices.open(B).componentInstance.object={name:e.name,model:e.model,vehicle_class:e.vehicle_class,manufacturer:e.manufacturer,length:e.length,cost_in_credits:e.cost_in_credits,crew:e.crew,passengers:e.passengers,max_atmosphering_speed:e.max_atmosphering_speed,cargo_capacity:e.cargo_capacity,consumables:e.consumables}})}}return e.\u0275fac=function(t){return new(t||e)(a.Jb(G),a.Jb(n.b))},e.\u0275cmp=a.Db({type:e,selectors:[["app-vehicles"]],decls:2,vars:1,consts:[[3,"results$","openResult"]],template:function(e,t){1&e&&(a.Kb(0,"app-internal-header"),a.Ob(1,"app-result-block",0),a.Zb("openResult",(function(e){return t.onOpenVehicle(e)})),a.Nb()),2&e&&(a.xb(1),a.gc("results$",t.vehicles$))},directives:[g,j],encapsulation:2}),e})()},{path:"species",component:F},{path:"planets",component:C}];let E=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[r.c.forChild(L)],r.c]}),e})();var A=s("PCNd");let K=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(t){return new(t||e)},imports:[[i.c,E,A.a]]}),e})()}}]);