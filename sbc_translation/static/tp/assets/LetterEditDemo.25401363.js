var c=Object.defineProperty;var p=(n,o,e)=>o in n?c(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e;var s=(n,o,e)=>(p(n,typeof o!="symbol"?o+"":o,e),e);import{C as u,u as g,b as y,B as f,a as b,e as w,_ as t,c as v}from"./index.79c05fa8.js";import{S as T,L as x}from"./LetterViewer.1e13920c.js";import{b as k}from"./tutorial.228562da.js";import{t as C,L,C as P}from"./LetterSubmittedModal.c843f75a.js";import"./TranslatorButton.809c59a7.js";import"./TranslatorModal.0abf5672.js";import"./TranslationSkills.c9d4f6f3.js";const S={letter:{id:1,status:"to do",priority:3,pdfUrl:"/text.pdf",title:"Demo Letter",source:"English",target:"French",unreadComments:!1,date:new Date,child:{preferredName:"Demo",fullName:"Child",sex:"M",age:12},sponsor:{preferredName:"Demo",fullName:"Sponsor",sex:"F",age:39},translatedElements:[{id:1,type:"paragraph",readonly:!0,content:"",source:"Dear, how do you do on this lovely day ?"},{id:2,type:"pageBreak",readonly:!0}]},signalProblemModal:!1,letterSubmitted:!1,loading:!0,saveLoading:!1,internalLoading:!1};class l extends u{constructor(){super(...arguments);s(this,"state",g(S));s(this,"currentTranslator",y())}setup(){this.currentTranslator.loadIfNotInitialized().then(()=>{this.state.loading=!1}),w(()=>{const e=k([{text:t("Welcome to the translation editor. This small tutorial will walk you through the various tools at your disposal")},{text:t("This panel displays the letter which you must translate, showing the text in paragraphs over one or multiple pages"),attachTo:{element:"#letter-viewer",on:"right"}},{text:t("This panel displays information about the child, sponsor and letter you can use if necessary"),attachTo:{element:"#letter-viewer-header",on:"bottom"}},{text:t("This panel is where you will write the translated text. Note that content is divided into paragraphs (where content goes) and page breaks (which represent a new page)"),attachTo:{element:"#letter-viewer-content",on:"left"}},{text:t("When translating content you will write it in this box"),attachTo:{element:"#letter-viewer-content .editor-paragraph-content",on:"bottom"}},{text:t("If there is a problem in a paragraph, such as a word you cannot read or something that seems strange, you can leave a comment which will be reviewed by the Compassion team"),attachTo:{element:"#letter-viewer-content .editor-paragraph-comment",on:"bottom"}},{text:t("Some elements are locked, which means they cannot be moved or deleted. Those are mandatory paragraphs and page breaks which you can write translated content in, assumed to represent the layout of the letter"),attachTo:{element:"#letter-viewer-content .editor-paragraph-locked",on:"left"}},{text:t("If you think the letter has more paragraphs or page break (such as writing outside of the boxes), you can add elements by clicking those buttons"),attachTo:{element:"#letter-viewer-content .buttons-add-elements",on:"bottom"}},{beforeShowPromise:async()=>this.state.letter.translatedElements=[...this.state.letter.translatedElements,{id:3,type:"paragraph",readonly:!1,content:"",source:""},{id:4,type:"paragraph",readonly:!1,content:"",source:""},{id:5,type:"pageBreak",readonly:!1}],text:t("We added a few elements for you, same as if you had clicked on the two buttons displayed earlier.")},{text:t("Note that those elements are not locked, which means you can move and remove them as you want"),attachTo:{element:"#letter-viewer-content .editor-element:nth-child(4) .buttons-element-state",on:"left"}},{text:t("The letter is automatically saved while you edit it, so that you can come back to it later, but you can force save it by clicking here"),attachTo:{element:".action-save",on:"bottom"}},{text:t("You can click the submit button once you are done with translating the letter"),attachTo:{element:".action-submit",on:"bottom"}},{text:t("If you encounter a problem, such as the PDF not displaying, a content issue or a wrong identity, you can click here to signal a problem"),attachTo:{element:".action-problem",on:"bottom"}},{beforeShowPromise:()=>new Promise(a=>{this.state.signalProblemModal=!0,setTimeout(a,300)}),text:t("Once clicking it, you will be brought here where your can select a problem and provide additional details to the Compassion team"),attachTo:{element:".modal",on:"bottom"}},{beforeShowPromise:()=>new Promise(a=>{this.state.signalProblemModal=!1,setTimeout(a,300)}),text:t("This bar can be dragged horizontally to expand or reduce the panel displaying the letter if you need more space to read it"),attachTo:{element:".letter-viewer-dragger",on:"right"}},{beforeShowPromise:async()=>this.state.letter.pdfUrl="http://yoyo.emma",text:t('Sometimes the PDF might not load. As an alternative you can click the "source" button which appears when you hover the panel where the letter is supposed to be'),attachTo:{element:"#letter-viewer",on:"right"}},{text:t("If you have any question do not hesitate to contact us. Thanks for your help in translating letters and bringing joy to children and sponsors alike")}]);e.start();const r=()=>v("/");e.on("cancel",r),e.on("complete",r)})}async submit(){this.state.internalLoading=!0,setTimeout(()=>{this.state.internalLoading=!1,this.state.letterSubmitted=!0},1e3)}queueSave(){this.state.saveLoading=!0,setTimeout(()=>{this.state.saveLoading=!1},300)}async save(e=!1){this.state.saveLoading=!0,e||(this.state.internalLoading=!0),setTimeout(()=>{this.state.saveLoading=!1,this.state.internalLoading=!1},1e3)}async refreshLetter(){this.state.saveLoading=!0,setTimeout(()=>{this.state.internalLoading=!1},1e3)}addParagraph(){var e;!((e=this.state.letter)!=null&&e.translatedElements)||(this.state.letter.translatedElements.push({id:Date.now(),type:"paragraph",readonly:!1,source:"",content:""}),this.props.onChange&&this.props.onChange())}addPageBreak(){var e;!((e=this.state.letter)!=null&&e.translatedElements)||(this.state.letter.translatedElements.push({id:Date.now(),type:"pageBreak",readonly:!1}),this.props.onChange&&this.props.onChange())}remove(e){var a;if(!((a=this.state.letter)!=null&&a.translatedElements))return;const r=this.state.letter.translatedElements.findIndex(i=>i.id===e);this.state.letter.translatedElements.splice(r,1),this.props.onChange&&this.props.onChange()}move(e,r){var h;if(!((h=this.state.letter)!=null&&h.translatedElements))return;const a=[...this.state.letter.translatedElements],i=a.findIndex(m=>m.id===e),d=a[i];a.splice(i,1),a.splice(i+r,0,d),this.state.letter.translatedElements=a,this.props.onChange&&this.props.onChange()}}s(l,"template",C),s(l,"props",{letterId:{type:Number,optional:!0}}),s(l,"defaultProps",{letterId:1}),s(l,"components",{SignalProblem:T,LetterViewer:x,LetterSubmittedModal:L,ContentEditor:P,Button:f,BlurLoader:b});export{l as default};
