/*!
* CookieConsent 3.0.0-rc.9
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='show--consent',a='show--preferences',s='disable--interaction',c='data-category',r='div',i='button',l='aria-hidden',d='btn-group',f='click',_='data-role',u='consentModal',p='preferencesModal';class m{constructor(){this.t={mode:t,revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,lazyHtmlGeneration:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],g:!1,v:null,h:null,C:null,S:'',T:!0,M:!1,D:!1,k:!1,A:!1,N:!1,H:!1,I:!1,V:!1,P:[],j:!1,O:!0,F:[],B:!1,R:'',G:!1,J:[],L:[],U:[],$:[],q:!1,K:!1,W:!1,X:[],Y:[],Z:[],ee:{},te:{},oe:{},ne:{},ae:{},se:[],ce:[]},this.re={ie:{},le:{}},this.de={},this.fe={_e:'cc:onFirstConsent',ue:'cc:onConsent',pe:'cc:onChange',me:'cc:onModalShow',ge:'cc:onModalHide',be:'cc:onModalReady'}}}const g=new m,b=(e,t)=>e.indexOf(t),y=(e,t)=>-1!==b(e,t),v=e=>Array.isArray(e),h=e=>'string'==typeof e,w=e=>!!e&&'object'==typeof e&&!v(e),C=e=>'function'==typeof e,S=e=>Object.keys(e),T=e=>Array.from(new Set(e)),x=()=>document.activeElement,M=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),k=e=>e.dispatchEvent(new Event('change')),A=e=>{const t=document.createElement(e);return e===i&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),N=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),I=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),P=(e,t)=>V(e,'cm__'+t),j=(e,t)=>V(e,'pm__'+t),O=(e,t)=>e.classList.remove(t),F=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=F(n)}return t},B=()=>{const e={},{J:t,ee:o,te:n}=g.o;for(const a of t)e[a]=L(n[a],S(o[a]));return e},R=(e,t)=>window.dispatchEvent(new CustomEvent(e,{detail:t})),G=(e,t,o,n)=>{e.addEventListener(t,o),n&&g.o.m.push({ye:e,ve:t,he:o})},J=()=>{const e=g.t.cookie.expiresAfterDays;return C(e)?e(g.o.R):e},L=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!y(n,e))).concat(n.filter((e=>!y(o,e))))},U=e=>{g.o.L=T(e),g.o.R=(()=>{let e='custom';const{L:t,J:o,U:n}=g.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},z=(e,t,o,n)=>{const{show:a,showPreferences:s,hide:c,hidePreferences:r,acceptCategory:i}=t,l=e||document,d=e=>D(l,`[data-cc="${e}"]`),_=(e,t)=>{M(e),i(t),r(),c()},u=d('show-preferencesModal'),p=d('show-consentModal'),m=d('accept-all'),b=d('accept-necessary'),y=d('accept-custom'),v=g.t.lazyHtmlGeneration;for(const e of u)E(e,'aria-haspopup','dialog'),G(e,f,(e=>{M(e),s()})),v&&G(e,'mouseenter',(e=>{M(e),g.o.A||o(t,n)}),!0);for(let e of p)E(e,'aria-haspopup','dialog'),G(e,f,(e=>{M(e),a(!0)}),!0);for(let e of m)G(e,f,(e=>{_(e,'all')}),!0);for(let e of y)G(e,f,(e=>{_(e)}),!0);for(let e of b)G(e,f,(e=>{_(e,[])}),!0)},$=()=>{const{T:e,L:t,J:o}=g.o;return{accepted:t,rejected:e?[]:o.filter((e=>!y(t,e)))}};let q;const K=e=>{clearTimeout(q),e?V(g.re.we,s):q=setTimeout((()=>{O(g.re.we,s)}),500)},Q=()=>{const e=g.o,t=g.re,o=['[href]',i,'input','details','[tabindex="0"]'].join(':not([tabindex="-1"]), '),n=(e,t)=>{const n=D(e,o);t[0]=n[0],t[1]=n[n.length-1]};e.M&&n(t.Ce,e.X),e.A&&n(t.Se,e.Y),e.I=!1,e.H=!1},W=(e,t,o)=>{const n=g.de,a=g.fe,s={cookie:g.o.p};if(t){const s={modalName:t};return e===a.me?C(n.me)&&n.me(s):e===a.ge?C(n.ge)&&n.ge(s):(s.modal=o,C(n.be)&&n.be(s)),R(e,s)}e===a._e?C(n._e)&&n._e(F(s)):e===a.ue?C(n.ue)&&n.ue(F(s)):(s.changedCategories=g.o.F,s.changedServices=g.o.ne,C(n.pe)&&n.pe(F(s))),R(e,F(s))},X=e=>{const{te:t,ne:o,J:n,ee:a,se:s,ce:r,p:i,F:l}=g.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o],{onAccept:s,onReject:c}=n;n&&(!n.Te&&y(t[e],o)&&C(s)?(n.Te=!0,s()):n.Te&&!y(t[e],o)&&C(c)&&(n.Te=!1,c()))}}if(!g.t.manageScriptTags)return;const d=s,f=e||i.categories||[],_=(e,n)=>{if(n<e.length){const a=e[n],s=r[n],i=s.xe,d=s.Me,u=y(f,i),p=!!d&&y(t[i],d);if(!s.De){let t=!d&&!s.ke&&u,r=d&&!s.ke&&p,f=!d&&s.ke&&!u&&y(l,i),m=d&&s.ke&&!p&&y(o[i]||[],d);if(t||f||r||m){s.De=!0;const t=H(a,'type',!0);N(a,'type',!!t),N(a,c);let o=H(a,'src',!0);o&&N(a,'src',!0);const r=A('script');r.textContent=a.innerHTML;for(const{nodeName:e}of a.attributes)E(r,e,a[e]||H(a,e));if(t&&(r.type=t),o?r.src=o:o=a.src,o&&(r.onload=r.onerror=()=>{_(e,++n)}),a.replaceWith(r),o)return}}_(e,++n)}};_(d,0)},Y='bottom',Z='left',ee='center',te='right',oe='inline',ne='wide',ae='pm--',se=['middle','top',Y],ce=[Z,ee,te],re={box:{Ae:[ne,oe],Ee:se,Ne:ce,He:Y,Ie:te},cloud:{Ae:[oe],Ee:se,Ne:ce,He:Y,Ie:ee},bar:{Ae:[oe],Ee:se.slice(1),Ne:[],He:Y,Ie:''}},ie={box:{Ae:[],Ee:[],Ne:[],He:'',Ie:''},bar:{Ae:[ne],Ee:[],Ne:[Z,te],He:'',Ie:Z}},le=e=>{const t=g.o.i.guiOptions,o=t?.consentModal,n=t?.preferencesModal;0===e&&de(g.re.Ce,re,o,'cm--','box','cm'),1===e&&de(g.re.Se,ie,n,ae,'box','pm')},de=(e,t,o,n,a,s)=>{if(!o)return;e.className=s;const{layout:c,position:r,flipButtons:i}=o,l=!1!==o.equalWeightButtons,d=c?.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=y(p.Ae,_)&&_,b=r?.split(' ')||[],v=b[0],h=n===ae?b[0]:b[1],w=y(p.Ee,v)?v:p.He,C=y(p.Ne,h)?h:p.Ie,S=t=>V(e,n+t);S(u),S(m),S(w),S(C),i&&S('flip');const T=s+'__btn--secondary';if('cm'===s){const{Ve:e,Pe:t}=g.re;e&&(l?O(e,T):V(e,T)),t&&(l?O(t,T):V(t,T))}else{const{je:e}=g.re;e&&(l?O(e,T):V(e,T))}},fe=(e,t)=>{const o=g.o,n=g.re,{hide:a,hidePreferences:s,acceptCategory:c}=e,u=e=>{c(e),s(),a()},m=o.u&&o.u.preferencesModal;if(!m)return;const b=m.title,y=m.closeIconLabel,v=m.acceptAllBtn,C=m.acceptNecessaryBtn,T=m.savePreferencesBtn,x=m.sections,M=v||C||T;if(n.Oe)n.Fe=A(r),j(n.Fe,'body');else{n.Oe=A(r),V(n.Oe,'pm-wrapper'),n.Se=A(r),n.Se.style.visibility='hidden',V(n.Se,'pm'),E(n.Se,'role','dialog'),E(n.Se,l,!0),E(n.Se,'aria-modal',!0),E(n.Se,'aria-labelledby','pm__title'),G(n.we,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Be=A(r),j(n.Be,'header'),n.Re=A(r),j(n.Re,'title'),n.Re.id='pm__title',E(n.Re,'role','heading'),E(n.Re,'aria-level','2'),n.Ge=A(i),j(n.Ge,'close-btn'),E(n.Ge,'aria-label',m.closeIconLabel||''),G(n.Ge,f,s),n.Je=A(r),j(n.Je,'body'),n.Le=A(r),j(n.Le,'footer');var D=A(r);V(D,'btns');var k=A(r),N=A(r);j(k,d),j(N,d),I(n.Le,k),I(n.Le,N),I(n.Be,n.Re),I(n.Be,n.Ge),I(n.Se,n.Be),I(n.Se,n.Je),M&&I(n.Se,n.Le),I(n.Oe,n.Se)}let H;b&&(n.Re.innerHTML=b,y&&E(n.Ge,'aria-label',y)),x&&x.forEach((e=>{const t=e.title,a=e.description,s=e.linkedCategory,c=s&&o.G[s],d=e.cookieTable,_=d?.body,u=_?.length>0,p=!!c,g=p&&o.ee[s],b=w(g)&&S(g)||[],y=p&&(!!a||!!u||S(g).length>0);var v=A(r);if(j(v,'section'),y||a){var C=A(r);j(C,'section-desc-wrapper')}let T=b.length;if(y&&T>0){const e=A(r);j(e,'section-services');for(const t of b){const o=g[t]?.label||t,n=A(r),a=A(r),i=A(r),l=A(r);j(n,'service'),j(l,'service-title'),j(a,'service-header'),j(i,'service-icon');const d=_e(o,t,c,!0,s);l.innerHTML=o,I(a,i),I(a,l),I(n,a),I(n,d),I(e,n)}I(C,e)}if(t){var x=A(r),M=A(p?i:r);if(j(x,'section-title-wrapper'),j(M,'section-title'),M.innerHTML=t,I(x,M),p){const e=A('span');j(e,'section-arrow'),I(x,e),v.className+='--toggle';const o=_e(t,s,c);let n=m.serviceCounterLabel;if(T>0&&h(n)){let e=A('span');j(e,'badge'),j(e,'service-counter'),E(e,l,!0),E(e,'data-servicecounter',T),n&&(n=n.split('|'),n=n.length>1&&T>1?n[1]:n[0],E(e,'data-counterlabel',n)),e.innerHTML=T+(n?' '+n:''),I(M,e)}if(y){j(v,'section--expandable');var D=s+'-desc';E(M,'aria-expanded',!1),E(M,'aria-controls',D)}I(x,o)}else E(M,'role','heading'),E(M,'aria-level','3');I(v,x)}if(a){var k=A(r);j(k,'section-desc'),k.innerHTML=a,I(C,k)}if(y&&(E(C,l,'true'),C.id=D,((e,t,o)=>{G(M,f,(()=>{t.classList.contains('is-expanded')?(O(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,l,'true')):(V(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,l,'false'))}))})(C,v,M),u)){const e=A('table'),t=A('thead'),o=A('tbody');j(e,'section-table'),j(t,'table-head'),j(o,'table-body');const a=d.headers,s=S(a),c=n.Ue.createDocumentFragment(),i=A('tr');E(i,'role','row');for(const e of s){const t=a[e],o=A('th');o.id='cc__row-'+t,E(o,'role','columnheader'),E(o,'scope','col'),j(o,'table-th'),o.innerHTML=t,I(c,o)}I(i,c),I(t,i);const l=n.Ue.createDocumentFragment();for(const e of _){const t=A('tr');E(t,'role','row'),j(t,'table-tr');for(const o of s){const n=a[o],s=e[o],c=A('td'),i=A(r);j(c,'table-td'),E(c,'data-column',n),E(c,'headers','cc__row-'+n),i.insertAdjacentHTML('beforeend',s),I(c,i),I(t,c)}I(l,t)}I(o,l),I(e,t),I(e,o),I(C,e)}(y||a)&&I(v,C);const N=n.Fe||n.Je;p?(H||(H=A(r),j(H,'section-toggles')),H.appendChild(v)):H=null,I(N,H||v)})),(v||C)&&(C&&(n.je||(n.je=A(i),j(n.je,'btn'),E(n.je,_,'necessary'),I(k,n.je),G(n.je,f,(()=>u([])))),n.je.innerHTML=C),v&&(n.ze||(n.ze=A(i),j(n.ze,'btn'),E(n.ze,_,'all'),I(k,n.ze),G(n.ze,f,(()=>u('all')))),n.ze.innerHTML=v)),T&&(n.$e||(n.$e=A(i),j(n.$e,'btn'),j(n.$e,'btn--secondary'),E(n.$e,_,'save'),I(N,n.$e),G(n.$e,f,(()=>u()))),n.$e.innerHTML=T),n.Fe&&(n.Se.replaceChild(n.Fe,n.Je),n.Je=n.Fe),le(1),o.A||(o.A=!0,W(g.fe.be,p,n.Se),t(e),setTimeout(Q,10),I(n.qe,n.Oe),setTimeout((()=>V(n.Oe,'cc--anim')),100))};function _e(e,t,o,n,a){const s=g.o,r=g.re,i=A('label'),d=A('input'),_=A('span'),u=A('span'),p=A('span'),m=A('span');if(d.type='checkbox',V(i,'section__toggle-wrapper'),V(d,'section__toggle'),V(p,'toggle__icon-on'),V(m,'toggle__icon-off'),V(_,'toggle__icon'),V(u,'toggle__label'),E(_,l,'true'),n?(V(i,'toggle-service'),E(d,c,a),r.le[a][t]=d):r.ie[t]=d,n?(e=>{G(d,'change',(()=>{const t=r.le[e],o=r.ie[e];s.oe[e]=[];for(let o in t){const n=t[o];n.checked&&s.oe[e].push(n.value)}o.checked=s.oe[e].length>0}))})(a):(e=>{G(d,f,(()=>{const t=r.le[e];s.oe[e]=[];for(let e in t)t[e].checked=d.checked}))})(t),d.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(_,m),I(_,p),s.T)(o.enabled||o.readOnly)&&(d.checked=!0);else if(n){const e=s.te[a];d.checked=o.readOnly||y(e,t)}else y(s.L,t)&&(d.checked=!0);return o.readOnly&&(d.disabled=!0),I(i,d),I(i,_),I(i,u),i}const ue=(e,t)=>{const o=g.o,n=g.re,{hide:a,showPreferences:s,acceptCategory:c}=e,p=o.u&&o.u.consentModal;if(!p)return;const m=p.acceptAllBtn,b=p.acceptNecessaryBtn,y=p.showPreferencesBtn,v=p.closeIconLabel,h=p.footer,w=p.label,C=p.title,S=e=>{a(),c(e)};if(!n.Ke){n.Ke=A(r),n.Ce=A(r),n.Qe=A(r),n.We=A(r),n.Xe=A(r),V(n.Ke,'cm-wrapper'),V(n.Ce,'cm'),P(n.Qe,'body'),P(n.We,'texts'),P(n.Xe,'btns'),E(n.Ce,'role','dialog'),E(n.Ce,'aria-modal','true'),E(n.Ce,l,'false'),E(n.Ce,'aria-describedby','cm__desc'),w?E(n.Ce,'aria-label',w):C&&E(n.Ce,'aria-labelledby','cm__title'),n.Ce.style.visibility='hidden';const e='box',t=o.i.guiOptions?.consentModal,a=(t?.layout||e).split(' ')[0]===e;C&&v&&a&&(n.Pe||(n.Pe=A(i),P(n.Pe,'btn'),P(n.Pe,'btn--close'),G(n.Pe,f,(()=>{S([])})),I(n.Qe,n.Pe)),E(n.Pe,'aria-label',v)),I(n.Qe,n.We),(m||b||y)&&I(n.Qe,n.Xe),I(n.Ce,n.Qe),I(n.Ke,n.Ce)}C&&(n.Ye||(n.Ye=A(r),n.Ye.className=n.Ye.id='cm__title',E(n.Ye,'role','heading'),E(n.Ye,'aria-level','2'),I(n.We,n.Ye)),n.Ye.innerHTML=C);let T=p.description;if(T&&(o.j&&(T=T.replace('{{revisionMessage}}',o.O?'':p.revisionMessage||'')),n.Ze||(n.Ze=A(r),n.Ze.className=n.Ze.id='cm__desc',I(n.We,n.Ze)),n.Ze.innerHTML=T),m&&(n.et||(n.et=A(i),P(n.et,'btn'),E(n.et,_,'all'),G(n.et,f,(()=>{S('all')}))),n.et.innerHTML=m),b&&(n.Ve||(n.Ve=A(i),P(n.Ve,'btn'),E(n.Ve,_,'necessary'),G(n.Ve,f,(()=>{S([])}))),n.Ve.innerHTML=b),y&&(n.tt||(n.tt=A(i),P(n.tt,'btn'),P(n.tt,'btn--secondary'),E(n.tt,_,'show'),G(n.tt,'mouseenter',(()=>{o.A||fe(e,t)})),G(n.tt,f,s)),n.tt.innerHTML=y),n.ot||(n.ot=A(r),P(n.ot,d),b&&I(n.ot,n.Ve),m&&I(n.ot,n.et),(m||b)&&I(n.Qe,n.ot),I(n.Xe,n.ot)),n.tt&&!n.nt&&(n.nt=A(r),n.Ve&&n.et?(P(n.nt,d),I(n.nt,n.tt),I(n.Xe,n.nt)):(I(n.ot,n.tt),P(n.ot,'btn-group--uneven'))),h){if(!n.st){let e=A(r),t=A(r);n.st=A(r),P(e,'footer'),P(t,'links'),P(n.st,'link-group'),I(t,n.st),I(e,t),I(n.Ce,e)}n.st.innerHTML=h}le(0),o.M||(o.M=!0,W(g.fe.be,u,n.Ce),t(e),setTimeout(Q,10),I(n.qe,n.Ke),setTimeout((()=>V(n.Ke,'cc--anim')),100)),z(n.Qe,e,fe,t)},pe=e=>h(e)&&e in g.o._,me=()=>g.o.l||g.o.i.language.default,ge=e=>{e&&(g.o.l=e)},be=async e=>{const t=g.o;let o;o=e&&pe(e)?e:me();let n=t._[o];if(!n)return!1;if(h(n)){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(n);if(!e)return!1;n=e}return t.u=n,ge(o),!0},ye=()=>{let e=g.o.i.language.rtl,t=g.re.qe;e&&t&&(v(e)||(e=[e]),y(e,g.o.l)?V(t,'cc--rtl'):O(t,'cc--rtl'))},ve=e=>{const t=g.re;if(!t.qe){t.qe=A(r),t.qe.id='cc-main',t.qe.style.position='fixed',t.qe.style.zIndex='2147483647',ye();let o=g.o.i.root;o&&h(o)&&(o=document.querySelector(o)),I(o||t.Ue.body,t.qe),(({hidePreferences:e})=>{const t=g.re;G(t.qe,f,(o=>{const n=g.o;n.V?t.Se.contains(o.target)?n.N=!0:(e(),n.N=!1):n.D&&t.Ce.contains(o.target)&&(n.N=!0)}))})(e)}},he=e=>{const{hostname:t,protocol:o}=window.location,{name:n,path:a,domain:s,sameSite:c}=g.t.cookie,r=encodeURIComponent(JSON.stringify(g.o.p)),i=e?(()=>{const e=g.o.C,t=e?new Date-e:0;return 864e5*J()-t})():864e5*J(),l=new Date;l.setTime(l.getTime()+i);let d=n+'='+r+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;y(t,'.')&&(d+='; Domain='+s),'https:'===o&&(d+='; Secure'),document.cookie=d,g.o.p},we=(e,t,o)=>{const n=o||g.t.cookie.domain,a=t||g.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Ce=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(Se(e||g.t.cookie.name,!0)),Se=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Te=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},xe=(e,n=[])=>{((e,t)=>{const{J:o,U:n,p:a,A:s}=g.o;let c=[];e?v(e)?c.push(...e):h(e)&&('all'===e?c=o:c.push(e)):c=s?(()=>{const{oe:e}=g.o,t=g.re.ie;if(!t)return[];let o=[];for(let e in t)t[e].checked&&o.push(e);for(let t in e)e[t].length>0&&o.push(t);return o})():a.categories,c=c.filter((e=>!y(o,e)||!y(t,e))),c.push(...n),U(c)})(e,n),(()=>{const e=g.o,{R:t,oe:o,U:n,L:a,te:s,ee:c,J:r}=e;e.ae=F(s);for(const i of r){const r=c[i],l=S(r),d=o[i]?.length>0,f=y(n,i);if(0!==l.length){if(s[i]=[],f)s[i].push(...l);else{if('all'===t)if(d){const e=o[i];s[i].push(...e)}else s[i].push(...l);else if('necessary'===t)s[i]=[];else if(d){const e=o[i];s[i].push(...e)}else y(a,i)&&s[i].push(...l);e.oe={}}s[i]=T(s[i])}}})(),(()=>{const e=g.o;g.t.mode===o&&e.T?e.F=L(e.$,e.L):e.F=L(e.L,e.p.categories);let n=e.F.length>0,a=!1;for(const t of e.J)e.ne[t]=L(e.te[t],e.ae[t]),e.ne[t].length>0&&(a=!0);const s=g.re.ie;for(let t in s)s[t].checked=y(e.L,t);for(const t of e.J){const o=g.re.le[t],n=e.te[t];for(const e in o)o[e].checked=y(n,e)}e.h||(e.h=new Date),e.S||(e.S=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:F(e.L),revision:g.t.revision,data:e.v,consentTimestamp:e.h.toISOString(),consentId:e.S,services:F(e.te)};let c=!1;(e.T||n||a)&&(e.T&&(e.T=!1,c=!0),U(e.L),e.C?e.C=new Date:e.C=e.h,e.p.lastConsentTimestamp=e.C.toISOString(),he(),g.t.autoClearCookies&&(c||!e.T&&n)&&(e=>{const t=g.o,o=Te();t.B=!1;let n=e?t.J:t.F;n=n.filter((e=>{let o=t.G[e];return!!o&&!o.readOnly&&!!o.autoClear}));for(const a of n){const n=t.G[a].autoClear,s=n?.cookies||[],c=y(t.F,a),r=!y(t.L,a),i=c&&r;if(e&&r||!e&&i){!0===n.reloadPage&&i&&(t.B=!0);for(const e of s){let t=[];const n=e.name,a=e.domain,s=e.path;if(n instanceof RegExp)for(let e of o)n.test(e)&&t.push(e);else{let e=b(o,n);e>-1&&t.push(o[e])}t.length>0&&we(t,s,a)}}}})(c),X()),c&&(W(g.fe._e),W(g.fe.ue),g.t.mode===t)||((n||a)&&W(g.fe.pe),e.B&&window.location.reload())})()},Me=(e,t,o)=>{let n=[];const a=e=>{if(h(e)){let t=Se(e);''!==t&&n.push(t)}else n.push(...Te(e))};if(v(e))for(let t of e)a(t);else a(e);we(n,t,o)},De=e=>{const{re:t,o:o}=g;e&&!o.M&&ue(Ne,ve),o.M&&(o.D=!0,o.g&&K(!0),V(t.we,n),E(t.Ce,l,'false'),setTimeout((()=>{o.K=x(),o.P=o.X}),200),W(g.fe.me,u))},ke=()=>{const{re:e,o:t,fe:o}=g;t.M&&(t.D=!1,t.g&&K(),O(e.we,n),E(e.Ce,l,'true'),setTimeout((()=>{t.K.focus(),t.P=[]}),200),W(o.ge,u))},Ae=()=>{const e=g.o;e.A&&e.k||(e.A||fe(Ne,ve),V(g.re.we,a),E(g.re.Se,l,'false'),e.k=!0,setTimeout((()=>{e.V=!0}),1),setTimeout((()=>{e.D?e.W=x():e.K=x(),0!==e.Y.length&&(e.Y[0].focus(),e.P=e.Y)}),200),W(g.fe.me,p))},Ee=()=>{const e=g.o;e.k&&(O(g.re.we,a),E(g.re.Se,l,'true'),e.k=!1,setTimeout((()=>{e.V=!1}),1),e.D?(e.W&&e.W.focus(),e.P=e.X):(e.K&&e.K.focus(),e.P=[]),e.N=!1,W(g.fe.ge,p))};var Ne={show:De,hide:ke,showPreferences:Ae,hidePreferences:Ee,acceptCategory:xe};const He=(e,t)=>{const o=Ce(t);return e?o[e]:o},Ie=()=>!g.o.T;e.acceptCategory=xe,e.acceptService=(e,t)=>{const o=g.o;if(!(e&&t&&h(t)&&y(o.J,t)))return!1;((e,t)=>{const o=g.o,{ee:n,oe:a}=o,s=g.re.le[t]||{},c=S(n[t]);if(a[t]=[],h(e))if('all'===e)for(let e in s)s[e].checked=!0,k(s[e]);else{for(let t in s)s[t].checked=e===t,k(s[t]);y(c,e)&&a[t].push(e)}else if(v(e)){for(let t in s)s[t].checked=y(e,t),k(s[t]);for(let o in c)y(e,o)&&a[t].push(o)}})(e,t),xe()},e.acceptedCategory=e=>{let o;return o=g.o.T&&g.t.mode!==t?g.o.$:$().accepted||[],y(o,e)},e.acceptedService=(e,t)=>y(g.o.te[t]||[],e),e.eraseCookies=Me,e.getConfig=e=>{const t=g.t,o=g.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=He,e.getUserPreferences=()=>{const{R:e,te:t}=g.o,{accepted:o,rejected:n}=$();return F({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:B()})},e.hide=ke,e.hidePreferences=Ee,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=A('script'),w(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,I(document.head,o)}))},e.reset=e=>{const t=g.re,{name:o,path:c,domain:r}=g.t.cookie;e&&Me(o,c,r);for(const e of g.o.m)e.ye.removeEventListener(e.ve,e.he);t.qe&&t.qe.remove(),t.we&&(O(t.we,s),O(t.we,a),O(t.we,n));const i=new m;g.o=i.o,g.re=i.re,g.t=i.t,g.de=i.de,g.fe=i.fe,window._ccRun=!1},e.run=async e=>{const{o:t,t:n,fe:a}=g,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{re:t,t:n,o:a}=g,s=n,r=a,{cookie:i}=s,l=g.de,d=e.cookie,f=e.categories,_=S(f)||[],u=navigator,p=document;t.Ue=p,t.we=p.documentElement,i.domain=location.hostname,r.i=e,r._=e.language.translations,r.G=f,r.J=_,r.g=!!e.disablePageInteraction,l._e=e.onFirstConsent,l.ue=e.onConsent,l.pe=e.onChange,l.ge=e.onModalHide,l.me=e.onModalShow,l.be=e.onModalReady;const{mode:m,autoShow:b,autoClearCookies:v,revision:h,manageScriptTags:C,hideFromBots:T,lazyHtmlGeneration:x}=e;m===o&&(s.mode=m),'boolean'==typeof b&&(s.autoShow=b),'boolean'==typeof v&&(s.autoClearCookies=v),'boolean'==typeof C&&(s.manageScriptTags=C),'number'==typeof h&&h>=0&&(s.revision=h,r.j=!0),'boolean'==typeof x&&(s.lazyHtmlGeneration=x),!1===T&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(r.q=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),w(d)&&(s.cookie={...i,...d}),s.autoClearCookies,r.j,s.manageScriptTags,(e=>{const{G:t,ee:o,te:n,U:a}=g.o;for(let s of e){const e=t[s],c=e.services||{},r=w(c)&&S(c)||[];o[s]={},n[s]=[],e.readOnly&&(a.push(s),n[s]=r),g.re.le[s]={};for(let e of r){const t=c[e];t.Te=!1,o[s][e]=t}}})(_),(()=>{if(!g.t.manageScriptTags)return;const e=g.o;e.se=D(g.re.Ue,'script[data-category]'),e.ce=[];for(const t of e.se){let o=H(t,c),n=t.dataset.service||'',a=!1;if(o&&'!'===o.charAt(0)&&(o=o.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),y(e.J,o)&&(e.ce.push({De:!1,ke:a,xe:o,Me:n}),n)){const t=e.ee[o];t[n]||(t[n]={Te:!1})}}})(),ge((()=>{const e=g.o.i.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),pe(t))return t}return me()})())})(e),t.q)return;(()=>{const e=g.o,t=g.t,n=Ce(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=v(a);e.p=n,e.S=c;const _=!!c&&h(c);e.h=r,e.h&&(e.h=new Date(r)),e.C=i,e.C&&(e.C=new Date(i)),e.v=void 0!==l?l:null,e.j&&_&&d!==t.revision&&(e.O=!1),e.T=!(_&&e.O&&e.h&&e.C&&f),e.T,e.T?t.mode===o&&(()=>{const e=g.o;for(const t of e.J)if(e.G[t].enabled){e.$.push(t);const o=e.ee[t]||{};for(let n in o)e.te[t].push(n)}})():(e.te={...e.te,...s},U([...e.U,...a]))})();const r=Ie();if(!await be())return!1;if(await(async e=>{z(null,e,fe,ve),g.o.T&&ue(e,ve),g.t.lazyHtmlGeneration||fe(e,ve),(()=>{const e=g.re,t=g.o;G(e.we,'keydown',(e=>{if('Tab'!==e.key)return;const o=t.P;if(o.length>0){const n=x();e.shiftKey?n===o[0]&&(o[1].focus(),M(e)):n===o[1]&&(o[0].focus(),M(e)),t.H||g.o.N||(t.H=!0,!t.I&&M(e),e.shiftKey?o[1].focus():o[0].focus())}!t.H&&(t.I=!0)}),!0)})()})(Ne),n.autoShow&&!r&&De(!0),r)return X(),W(a.ue);n.mode===o&&X(t.$)}},e.setCookieData=e=>{let t,o=e.value,n=e.mode,a=!1;const s=g.o;if('update'===n){s.v=t=He('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.v=t,s.p.data=t,he(!0)),a},e.setLanguage=async(e,t)=>{if(!pe(e))return!1;const o=g.o;return!(e===me()&&!0!==t||!await be(e)||(ge(e),o.M&&ue(Ne,ve),o.A&&fe(Ne,ve),ye(),Q(),0))},e.show=De,e.showPreferences=Ae,e.validConsent=Ie,e.validCookie=e=>''!==Se(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
