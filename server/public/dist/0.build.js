webpackJsonp([0],{55:function(t,o,a){"use strict";function e(t){a(57)}Object.defineProperty(o,"__esModule",{value:!0});var r=a(56),i=a(60),s=a(1),n=e,l=s(r.a,i.a,!1,n,"data-v-fa63965c",null);o.default=l.exports},56:function(t,o,a){"use strict";var e=a(14),r=a(15),i=a(59),s=a(16);o.a={components:{"imagem-responsiva":e.a,"meu-botao":r.a},data:function(){return{foto:new i.a,id:this.$route.params.id}},methods:{grava:function(){var t=this;this.$validator.validateAll().then(function(o){o&&t.service.cadastra(t.foto).then(function(){t.id&&t.$router.push({name:"home"}),t.foto=new i.a},function(t){return console.log(t)})})}},created:function(){var t=this;this.service=new s.a(this.$resource),this.id&&this.service.busca(this.id).then(function(o){return t.foto=o})}}},57:function(t,o,a){var e=a(58);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(2)("7b7bc223",e,!0,{})},58:function(t,o,a){o=t.exports=a(0)(),o.push([t.i,".controle[data-v-fa63965c]{font-size:1.2em;margin-bottom:20px}.controle label[data-v-fa63965c]{display:block;font-weight:700}.controle label+input[data-v-fa63965c],.controle textarea[data-v-fa63965c]{width:100%;font-size:inherit;border-radius:5px}.centralizado[data-v-fa63965c]{text-align:center}.erro[data-v-fa63965c]{color:red}",""])},59:function(t,o,a){"use strict";function e(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var r=function t(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e(this,t),this.titulo=o,this.url=a,this.descricao=r};o.a=r},60:function(t,o,a){"use strict";var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("h1",{staticClass:"centralizado"},[t._v("Cadastro")]),t._v(" "),a("h2",{staticClass:"centralizado"},[t._v(t._s(t.foto.titulo))]),t._v(" "),t.foto._id?a("h2",{staticClass:"centralizado"},[t._v("Alterando")]):a("h2",{staticClass:"centralizado"},[t._v("Incluindo")]),t._v(" "),a("form",{on:{submit:function(o){return o.preventDefault(),t.grava()}}},[a("div",{staticClass:"controle"},[a("label",{attrs:{for:"titulo"}},[t._v(t._s(t.foto.titulo))]),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:t.foto.titulo,expression:"foto.titulo"}],attrs:{"data-vv-as":"título",name:"titulo","data-vv-rules":"required|min:3|max:30",id:"titulo",autocomplete:"off"},domProps:{value:t.foto.titulo},on:{input:function(o){o.target.composing||t.$set(t.foto,"titulo",o.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("titulo"),expression:"errors.has('titulo')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("titulo")))])]),t._v(" "),a("div",{staticClass:"controle"},[a("label",{attrs:{for:"url"}},[t._v("URL")]),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate"},{name:"model",rawName:"v-model",value:t.foto.url,expression:"foto.url"}],attrs:{name:"url","data-vv-rules":"required",id:"url",autocomplete:"off"},domProps:{value:t.foto.url},on:{input:function(o){o.target.composing||t.$set(t.foto,"url",o.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("url"),expression:"errors.has('url')"}],staticClass:"erro"},[t._v(t._s(t.errors.first("url")))]),t._v(" "),a("imagem-responsiva",{directives:[{name:"show",rawName:"v-show",value:t.foto.url,expression:"foto.url"}],attrs:{url:t.foto.url,titulo:t.foto.titulo}})],1),t._v(" "),a("div",{staticClass:"controle"},[a("label",{attrs:{for:"descricao"}},[t._v("DESCRIÇÃO")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.foto.descricao,expression:"foto.descricao"}],attrs:{id:"descricao",autocomplete:"off"},domProps:{value:t.foto.descricao},on:{input:function(o){o.target.composing||t.$set(t.foto,"descricao",o.target.value)}}})]),t._v(" "),a("div",{staticClass:"centralizado"},[a("meu-botao",{attrs:{rotulo:"GRAVAR",tipo:"submit"}}),t._v(" "),a("router-link",{attrs:{to:{name:"home"}}},[a("meu-botao",{attrs:{rotulo:"VOLTAR",tipo:"button"}})],1)],1)])])},r=[],i={render:e,staticRenderFns:r};o.a=i}});
//# sourceMappingURL=0.build.js.map