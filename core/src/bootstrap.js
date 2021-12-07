import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

 

// Mount function to start up the app
const mount = (el) => {
    new Vue({
        render: h => h(App)
      }).$mount(el)
  };
  
  // If we are in development and in isolation,
  // call mount immediately
  if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#core');
  
    if (devRoot) {
        new Vue({
            render: h => h(App)
          }).$mount('#core')
    }
  }
  
  // We are running through container
  // and we should export the mount function
  export {mount};