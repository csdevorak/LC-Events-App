"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2584],{2584:(O,c,a)=>{a.r(c),a.d(c,{HomePageModule:()=>P});var i=a(6895),o=a(4556),m=a(433),r=a(1407),e=a(8256),l=a(2468);function p(n,s){if(1&n&&(e.TgZ(0,"ion-item",1)(1,"ion-label",2)(2,"ion-note",3),e._uU(3),e.qZA(),e.TgZ(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"h3"),e._uU(7),e.qZA(),e.TgZ(8,"h3"),e._UZ(9,"ion-icon",4),e._uU(10),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.qZA()()()),2&n){const t=e.oxw();e.Q6J("routerLink","/message/"+t.message.id)("detail",!1),e.xp6(3),e.Oqu(t.message.date),e.xp6(2),e.Oqu(t.message.subject),e.xp6(2),e.Oqu(t.message.schoolName),e.xp6(3),e.hij(" ",t.message.location,""),e.xp6(2),e.Oqu(t.message.description)}}let u=(()=>{class n{isIos(){const t=window;return t&&t.Ionic&&"ios"===t.Ionic.mode}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-message"]],inputs:{message:"message"},decls:1,vars:1,consts:[[3,"routerLink","detail",4,"ngIf"],[3,"routerLink","detail"],[1,"ion-text-wrap"],[1,"date"],["name","map"]],template:function(t,g){1&t&&e.YNc(0,p,13,7,"ion-item",0),2&t&&e.Q6J("ngIf",g.message)},dependencies:[i.O5,o.gu,o.Ie,o.Q$,o.uN,o.YI,r.rH],styles:["ion-item[_ngcontent-%COMP%]{--padding-start: 0;--inner-padding-end: 0}ion-label[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:12px}ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;margin-left:3%;margin-right:3%;white-space:nowrap}ion-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-left:3%;margin-right:3%}ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:95%;margin-left:3%;margin-right:3%}ion-item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{text-align:center}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#c9c9ca}.dot[_ngcontent-%COMP%]{display:block;height:12px;width:12px;border-radius:50%;align-self:start;margin:16px 10px 16px 16px}.dot-unread[_ngcontent-%COMP%]{background:var(--ion-color-primary)}ion-footer[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.date[_ngcontent-%COMP%]{font-size:15px;margin:auto;width:94%;font-weight:400;display:block;text-align:center}"]}),n})();function d(n,s){1&n&&e._UZ(0,"app-message",6),2&n&&e.Q6J("message",s.$implicit)}const f=[{path:"",component:(()=>{class n{constructor(t){this.data=t}refresh(t){setTimeout(()=>{t.detail.complete()},3e3)}getMessages(){return this.data.getMessages()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.D))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:13,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["collapse","condense"],["size","large"],[3,"message",4,"ngFor","ngForOf"],[3,"message"]],template:function(t,g){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Lewiston Schools Calendar "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-refresher",2),e.NdJ("ionRefresh",function(C){return g.refresh(C)}),e._UZ(6,"ion-refresher-content"),e.qZA(),e.TgZ(7,"ion-header",3)(8,"ion-toolbar")(9,"ion-title",4),e._uU(10," Lewiston Schools Calendar "),e.qZA()()(),e.TgZ(11,"ion-list"),e.YNc(12,d,1,1,"app-message",5),e.qZA()()),2&t&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(8),e.Q6J("ngForOf",g.getMessages()))},dependencies:[i.sg,o.W2,o.Gu,o.q_,o.nJ,o.Wo,o.wd,o.sr,u]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.Bz.forChild(f),r.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.ez,m.u5,o.Pc,r.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[i.ez,m.u5,o.Pc,M,h]}),n})()}}]);