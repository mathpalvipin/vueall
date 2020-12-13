const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.usertext.value;
      console.log(this.$refs.usertext.value);
    }
  },
  beforeCreate(){
     console.log('beforeCreate');
  },
  created(){
    console.log('vreate()');
  },
  beforeMount(){
    console.log("beforeMount");
  },
  mounted(){
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('beforeUpdate');

  },
  updated(){
    console.log('updated');
  },
  beforeUnmount(){
    console.log('beforeUnmount');

  },
  unmount(){
    console.log('unmounted');
  }


});
app.mount('#app');
setTimeout(function(){
app.unmount();

},3000);

