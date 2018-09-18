import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VProgressLinear,
  transitions,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VProgressLinear,
    transitions,
  },
});
