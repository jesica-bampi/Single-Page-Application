import Vue from "vue";

Vue.directive("meu-transform", {
  bind(el, binding, vnode) {
    let current = 0;

    el.addEventListener('dblclick', function() {

      let incremento = 90;
      let animate = false;

      if(binding.value) {
          incremento = binding.value.incremento
          animate = binding.value.animate 

      }
      
      current += incremento;
      el.style.transition = "transform 0.5s";
      if (animate) el.style.transform = `rotate(${current}deg)`;
    });
  }
});
