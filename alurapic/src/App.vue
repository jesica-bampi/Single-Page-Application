<template>
  <div class="corpo">
    <meu-menu :rotas="routes"/>
    
    <transition name="pagina">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './componentes/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu': Menu
  },
  data(){
    return {
      routes: routes.filter(route => route.menu)
    }
  }
}

  
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0px auto;
    padding: 5px 5px 5px;
    width: 96%;
    background-color: rgba(248, 225, 244, 0.123);
    border-radius: 5px;
    box-shadow: 5px 5px rgba(104, 103, 103, 0.685);
  }

  .pagina-enter, .pagina-leave-active {
    opacity: 0;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .4s;;
  }

</style>