(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,r){e.exports=r(34)},,,,,function(e,t,r){},function(e,t,r){},,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n,a=r(0),c=r.n(a),i=r(8),o=r.n(i),u=(r(20),r(21),r(1)),l=r(2),s=r(4),p=r(3),h=r(6),v=r(7),f=r(14),d=r(5);!function(e){e.KEYWORD="Keyword",e.MASC="MASC",e.CAESAR="CAESAR"}(n||(n={}));var y={input:"Enter your text here...",output:"",cipher:n.CAESAR,decrypt:!1,preserveFormatting:!0,keywordSection:{keyword:"",keyletter:"",validKeyword:!1,validKeyletter:!1},mascSection:{letters:Array(26).fill("")},caesarSection:{shift:0}},m="abcdefghijklmnopqrstuvwxyz";function b(e,t,r){for(var n="",a=0;a<e.length;a++){if(-1!==r.indexOf(e[a]))n+=t[r.indexOf(e[a])].toLowerCase();else if(-1!==r.indexOf(e[a].toLowerCase())){n+=t[r.indexOf(e[a].toLowerCase())]}else n+=e[a]}return n}function E(e,t){for(var r=function(e){for(var t="",r=0;r<e.length;r++)-1===t.indexOf(e[r].toLowerCase())&&(t+=e[r].toLowerCase());return t}(e+m).toUpperCase(),n="",a=t.toLowerCase().charCodeAt(0)-97,c=0;c<26;c++){n+=r[(c+(26-a))%26]}return n}function C(e,t){return(j(t.keyword)||0===t.keyword.length)&&(e=Object(d.a)(Object(d.a)({},e),{},{keyword:t.keyword})),(A(t.keyLetter)||0===t.keyLetter.length)&&(e=Object(d.a)(Object(d.a)({},e),{},{keyletter:t.keyLetter})),e=Object(d.a)(Object(d.a)({},e),{},{validKeyword:j(e.keyword),validKeyletter:A(e.keyletter)})}function O(e,t){return g(e)?(r=t,n=e.keyword,a=e.keyletter,b(r,E(n,a),m)):"";var r,n,a}function k(e,t){return g(e)?function(e,t,r){var n=E(t,r);return b(e,m.toUpperCase(),n.toLowerCase())}(t,e.keyword,e.keyletter):""}function g(e){return j(e.keyword)&&A(e.keyletter)}function j(e){if(0===e.length)return!1;for(var t=0;t<e.length;t++){var r=e.toLowerCase().charCodeAt(t)-97;if(r<0||r>25)return!1}return!0}function A(e){return 1===e.length&&j(e)}function w(){return Array.from(m.toUpperCase())}function S(e,t,r){for(var n="",a=0;a<r.length;a++)if(-1!==e.indexOf(r[a])){var c=e.indexOf(r[a]);""===t[c]?n+="*":n+=t[c]}else if(-1!==e.indexOf(r[a].toUpperCase())){var i=e.indexOf(r[a].toUpperCase());""===t[i]?n+="*":n+=t[i].toLowerCase()}else-1!==m.indexOf(r[a])||-1!==m.toUpperCase().indexOf(r[a])?n+="*":n+=r[a];return n}function x(e,t){var r=t.newValue.toUpperCase();return r.length<2&&(""===r||!e.letters.includes(r))&&(e.letters[t.changedIndex]=r),e.letters=Array.from(e.letters),e}function N(e,t){return r=t,n=e.letters,S(w(),n,r);var r,n}function K(e,t){return r=t,S(e.letters,w(),r);var r}function D(e){return Array.from(m).map((function(t,r){return m[(r+e)%26]})).join("").toUpperCase()}function L(e,t){return e.shift=(t.shift+26)%26,e}function T(e,t){return r=t,n=e.shift,b(r,D(n),m);var r,n}function U(e,t){return function(e,t){var r=D(t);return b(e,m.toUpperCase(),r.toLowerCase())}(t,e.shift)}function P(e,t){if(t)return e;var r=function(e){for(var t="",r=0;r<e.length;r++)n=e[r],/^[A-Z]$/i.test(n)&&(t+=e[r]);var n;return t}(e);return r=function(e,t){for(var r="",n=0;n<e.length;n++)r+=e[n],n>0&&(n+1)%t===0&&(r+=" ");return r}(r=r.toUpperCase(),5)}function I(e){var t=P(e.input,e.preserveFormatting);switch(e.cipher){case n.KEYWORD:return e.decrypt?k(e.keywordSection,t):O(e.keywordSection,t);case n.MASC:return e.decrypt?K(e.mascSection,t):N(e.mascSection,t);case n.CAESAR:return e.decrypt?U(e.caesarSection,t):T(e.caesarSection,t)}}var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CIPHERSECTION":e=Object(d.a)(Object(d.a)({},e),{},{cipher:t.cipher,decrypt:t.decrypt,preserveFormatting:t.preserveFormatting,output:""});break;case"UPDATE_KEYWORDSECTION":e=Object(d.a)(Object(d.a)({},e),{},{keywordSection:C(e.keywordSection,t)});break;case"UPDATE_MASCLETTER":e=Object(d.a)(Object(d.a)({},e),{},{mascSection:x(e.mascSection,t)});break;case"UPDATE_CAESARSECTION":e=Object(d.a)(Object(d.a)({},e),{},{caesarSection:L(e.caesarSection,t)});break;case"UPDATE_INPUT":e=Object(d.a)(Object(d.a)({},e),{},{input:t.inputText})}return e=Object(d.a)(Object(d.a)({},e),{},{output:I(e)})},F=Object(v.createStore)(R,Object(f.composeWithDevTools)());function M(e,t){return{type:"UPDATE_KEYWORDSECTION",keyword:e,keyLetter:t}}function V(e,t,r){return{type:"UPDATE_CIPHERSECTION",cipher:e,decrypt:t,preserveFormatting:r}}function _(e){F.dispatch(e)}var W=function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).state={input:n.props.input},n}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"InputBox"},c.a.createElement("textarea",{onChange:function(t){return e.updateInputValue(t)},value:this.state.input}))}},{key:"updateInputValue",value:function(e){var t=e.target.value;this.setState({input:t}),_({type:"UPDATE_INPUT",inputText:t})}}]),r}(c.a.Component);var Y=Object(h.b)((function(e){return{input:e.input}}))(W),B=function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return c.a.createElement("div",{className:"OutputBox"},c.a.createElement("textarea",{value:this.props.output,readOnly:!0}))}}]),r}(c.a.Component);var H=Object(h.b)((function(e){return{output:e.output}}))(B),J=(r(28),function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).state={keyword:"",keyletter:""},n}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"KeyInput"},c.a.createElement("div",{className:"gridLayout"},c.a.createElement("label",null,"Keyword"),c.a.createElement("input",{type:"text",value:this.props.keyword,onChange:function(t){return e.updateKeywordValue(t)}}),c.a.createElement("label",null,"Key letter"),c.a.createElement("input",{type:"text",value:this.props.keyletter,onChange:function(t){return e.updateKeyLetterValue(t)}})))}},{key:"updateKeywordValue",value:function(e){var t=e.target.value;this.setState({keyword:t}),_(M(t,this.props.keyletter))}},{key:"updateKeyLetterValue",value:function(e){var t=e.target.value;this.setState({keyletter:t}),_(M(this.props.keyword,t))}}]),r}(c.a.Component)),q=(r(29),function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return c.a.createElement("div",{className:"AlphabetDisplay"},c.a.createElement("div",{className:"AlphabetDisplayHeader"},c.a.createElement("p",null,"Plaintext"),c.a.createElement("p",null,"Ciphertext")),this.generateAlphabets())}},{key:"generateAlphabets",value:function(){for(var e=[],t=0;t<m.length;t++)e.push(c.a.createElement("div",{className:"AlphabetDisplayLetter",key:t},c.a.createElement("p",null,m[t]),c.a.createElement("p",null,this.props.ctAlphabet[t])));return e}}]),r}(c.a.Component)),z=function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(J,{keyword:this.props.keyword,keyletter:this.props.keyletter}),this.props.validKeyword&&this.props.validKeyletter&&c.a.createElement(q,{ctAlphabet:this.getCtAlphabet()}))}},{key:"getCtAlphabet",value:function(){return E(this.props.keyword,this.props.keyletter)}}]),r}(c.a.Component);var Z=Object(h.b)((function(e){return e.keywordSection}))(z),$=(r(30),new Map([["Caesar",n.CAESAR],["MASC",n.MASC],["Keyword",n.KEYWORD]])),G=function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=[];return $.forEach((function(r,n){t.push(c.a.createElement("option",{key:r,value:n,selected:r===e.props.cipher},n))})),c.a.createElement("div",{className:"CipherSelector"},c.a.createElement("div",{className:"Cipher"},c.a.createElement("select",{onChange:function(t){return e.handleCipherChange(t)}},t)),c.a.createElement("div",{className:"Direction"},c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"direction",value:"encrypt",checked:!1===this.props.decrypt,onChange:function(){return e.handleDirectionChange(!1)}}),"Encrypt"),c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement("input",{type:"radio",name:"direction",value:"decrypt",checked:!0===this.props.decrypt,onChange:function(){return e.handleDirectionChange(!0)}}),"Decrypt")),c.a.createElement("div",{className:"PreserveFormatting"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"preserveFormatting",checked:this.props.preserveFormatting,onChange:function(){return e.handlePreserveFormattingChange()}}),"Preserve Formatting")))}},{key:"handleCipherChange",value:function(e){var t=$.get(e.target.value);void 0!==t&&_(V(t,this.props.decrypt,this.props.preserveFormatting))}},{key:"handleDirectionChange",value:function(e){_(V(this.props.cipher,e,this.props.preserveFormatting))}},{key:"handlePreserveFormattingChange",value:function(){_(V(this.props.cipher,this.props.decrypt,!this.props.preserveFormatting))}}]),r}(c.a.Component);var Q=Object(h.b)((function(e){return{cipher:e.cipher,preserveFormatting:e.preserveFormatting,decrypt:e.decrypt}}))(G),X=function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).state={value:n.props.value},n}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"KeyLetter"},c.a.createElement("label",null,m[this.props.index]),c.a.createElement("input",{type:"text",value:this.props.value,onChange:function(t){return e.handleChange(t)}}))}},{key:"handleChange",value:function(e){var t=e.target.value.toUpperCase();_(function(e,t){return{type:"UPDATE_MASCLETTER",changedIndex:e,newValue:t}}(this.props.index,t))}}]),r}(c.a.Component),ee=(r(31),function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){for(var e=[],t=0;t<m.length;t++)e.push(c.a.createElement(X,{key:t,index:t,value:this.props.letterValues[t]}));return c.a.createElement("div",null,c.a.createElement("div",{className:"MascSection"},c.a.createElement("div",{className:"header"},c.a.createElement("p",{className:"plaintextLabel"},"Plaintext"),c.a.createElement("p",{className:"ciphertextLabel"},"Ciphertext")),e))}}]),r}(c.a.Component));var te=Object(h.b)((function(e){return{letterValues:e.mascSection.letters}}))(ee),re=(r(32),function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"CaesarSection"},c.a.createElement("label",null,"Shift"),c.a.createElement("input",{type:"number",value:this.props.shift,onChange:function(t){return e.handleKeyLetterChange(t)}})),c.a.createElement(q,{ctAlphabet:this.getCtAlphabet()}))}},{key:"handleKeyLetterChange",value:function(e){var t=e.target.value;_({type:"UPDATE_CAESARSECTION",shift:parseInt(t)})}},{key:"getCtAlphabet",value:function(){return D(this.props.shift)}}]),r}(c.a.Component));var ne=Object(h.b)((function(e){return{shift:e.caesarSection.shift}}))(re),ae=function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(Q,null),this.props.cipher===n.KEYWORD&&c.a.createElement(Z,null),this.props.cipher===n.MASC&&c.a.createElement(te,null),this.props.cipher===n.CAESAR&&c.a.createElement(ne,null))}}]),r}(c.a.Component);var ce=Object(h.b)((function(e){return{cipher:e.cipher}}))(ae),ie=(r(33),function(){return c.a.createElement("div",{className:"Credits"},c.a.createElement("p",null,"Created by ",c.a.createElement("a",{className:"name",href:"https://github.com/maples3"},"Anthony Mapes")," for ",c.a.createElement("span",{className:"course"},"CSC 483 (Cryptology)")," at ",c.a.createElement("span",{className:"university"},"Northern Kentucky University"),"."))}),oe=function(){return c.a.createElement(h.a,{store:F},c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Krypter"),c.a.createElement(Y,null),c.a.createElement(ce,null),c.a.createElement(H,null),c.a.createElement(ie,null)))};o.a.render(c.a.createElement(oe,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.6d405fc7.chunk.js.map