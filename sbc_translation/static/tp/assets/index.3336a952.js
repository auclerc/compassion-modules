var g=Object.defineProperty;var c=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))L.call(e,t)&&u(r,t,e[t]);if(c)for(var t of c(e))y.call(e,t)&&u(r,t,e[t]);return r};var n=(r,e,t)=>(u(r,typeof e!="symbol"?e+"":e,t),t);import{C as T,B as E,a as C,u as w,b,e as I,j as S,m as h,n as l,_ as o}from"./index.79c05fa8.js";import{t as x,L as B,C as P}from"./LetterSubmittedModal.c843f75a.js";import{S as k,L as D}from"./LetterViewer.1e13920c.js";import"./TranslatorButton.809c59a7.js";import"./TranslatorModal.0abf5672.js";import"./TranslationSkills.c9d4f6f3.js";class p extends T{constructor(){super(...arguments);n(this,"state",w({dirty:!1,loading:!1,saveLoading:!1,internalLoading:!1,letter:void 0,signalProblemModal:!1,letterSubmitted:!1,saveTimeout:void 0}));n(this,"currentTranslator",b())}setup(){this.state.loading=!0,I(()=>this.refreshLetter()),S(()=>{const t=s=>{this.queueSave(),s.ctrlKey&&s.key==="s"&&(s.preventDefault(),this.state.saveTimeout&&(clearTimeout(this.state.saveTimeout),this.state.saveTimeout=void 0),this.save(!0))};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)})}addParagraph(){var t;!((t=this.state.letter)!=null&&t.translatedElements)||(this.state.letter.translatedElements.push({id:Date.now(),type:"paragraph",readonly:!1,source:"",content:""}),this.props.onChange&&this.props.onChange())}addPageBreak(){var t;!((t=this.state.letter)!=null&&t.translatedElements)||(this.state.letter.translatedElements.push({id:Date.now(),type:"pageBreak",readonly:!1}),this.props.onChange&&this.props.onChange())}remove(t){var a;if(!((a=this.state.letter)!=null&&a.translatedElements))return;const s=this.state.letter.translatedElements.findIndex(i=>i.id===t);this.state.letter.translatedElements.splice(s,1),this.props.onChange&&this.props.onChange()}move(t,s){var m;if(!((m=this.state.letter)!=null&&m.translatedElements))return;const a=[...this.state.letter.translatedElements],i=a.findIndex(v=>v.id===t),d=a[i];a.splice(i,1),a.splice(i+s,0,d),this.state.letter.translatedElements=a,this.props.onChange&&this.props.onChange()}async submit(){var s;if(!((s=this.state.letter)!=null&&s.translatedElements))return;await this.currentTranslator.loadIfNotInitialized(),this.state.internalLoading=!0,await h.letters.submit(f({},this.state.letter))?(this.state.internalLoading=!1,this.state.letterSubmitted=!0):(l.error(o("Unable to save and submit letter, please save it first and retry.")),this.state.internalLoading=!1)}queueSave(){this.state.saveTimeout&&clearTimeout(this.state.saveTimeout),this.state.saveTimeout=setTimeout(()=>this.save(!0),1500)}async save(t=!1){var i,d;if(!((i=this.state.letter)!=null&&i.translatedElements)||this.state.saveLoading)return;t||(this.state.internalLoading=!0),this.state.saveLoading=!0,this.currentTranslator.data||await this.currentTranslator.refresh(),this.state.letter.translatorId||(this.state.letter.translatorId=(d=this.currentTranslator.data)==null?void 0:d.translatorId),await h.letters.update(f({},this.state.letter))?t||l.success(o("Letter saved")):l.error(o("Unable to save letter"));const a=await h.letters.find(this.props.letterId);a?this.state.letter=a:(console.error("Saved letter cannot be found!"),l.error(o("An error occured while trying to retrieve updated state"))),t||(this.state.internalLoading=!1),this.state.saveLoading=!1}async refreshLetter(){h.letters.find(this.props.letterId).then(t=>{t?this.state.letter=t:l.error(o("Unable to find letter with identifier")+this.props.letterId),this.state.loading=!1})}}n(p,"template",x),n(p,"props",{letterId:{type:String}}),n(p,"components",{SignalProblem:k,LetterViewer:D,LetterSubmittedModal:B,ContentEditor:P,Button:E,BlurLoader:C});export{p as default};
