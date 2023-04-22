const app = Vue.createApp({
  data() {
    return {
      
      calc: ""
    }
  
  },
  methods:{
    add(){
      this.calc++;
    },
    subt(){
      this.calc--;
    }
  }
});

app.mount('#events');
