import Vue from 'vue';
import SimpleVueValidation from 'simple-vue-validator';
// SimpleVueValidation.Validator.create({templates: {
//   url: 'That doesn\'t look like a valid url.'
// }});
Vue.prototype.$Validator = SimpleVueValidation.Validator.create({templates: {
  required: '必填欄位' ,
  email: '郵件格式錯誤' ,
  url: 'That doesn\'t look like a valid url.'
}});;
Vue.use(SimpleVueValidation);