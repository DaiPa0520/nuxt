/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



// Store functionality
import actions from './actions'
import getters from './getters' 
import modules from './modules'
import mutations from './mutations'
import state from './state'
// import example2 from './modules/example2/example2'

Vue.use(Vuex)

// Create a new store
const store  = () => new Vuex.Store({
  actions,
  getters,
  modules,
  mutations,
  state
})

export default store

