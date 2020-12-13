<template>
  <div class="container">
  <list></list>
</div>
  <div class="container">
    <div class="block " :class='{animate:animatedblock}'></div>
    <button @click='animateBlock'>Animate</button>

  </div>
  <div class="container">
  <transition enter-active-class='animate ' 
   >  <p v-if='paravisible'> this is sometimes visible</p>
  </transition>

   <transition  :css='false'
   name='jsanimation'
    @before-enter='beforeentered'
    @before-leave='beforeleave' 
    @enter='enter'
    @after-enter='afterenter'
    @leave='leave'
    @after-leave='afterleave'
    @enter-cancelled='entercancelled'
    @leave-cancelled='leavecancelled'>  <p v-if='paravisible'    >js animation</p>
  </transition>  
    <button @click='togglepara'>toggle paragraph</button>
    <transition name='para'>  <p v-if='paravisible'> give name to transition tag</p>
  </transition>
  </div>
  
  <div class="container">
    <transition name='fade-button'
    mode='out-in'
    >
      <button v-if='!usershow' @click='showuser'>  show User</button>
      <button v-else  @click='hideuser'>  hide User</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open='dialogIsVisible'>
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
  import list from './components/listed.vue'
export default {
  components:{
    list
  },
  data() {
    return { 
      paravisible:false,
      animatedblock:false,
      dialogIsVisible: false,
      usershow:true,
      entercancel:null,
      leavecancel:null,
    };
  },
  methods: {
    beforeentered(el)
{
  console.log("beforeentered");
  console.log(el);
  el.style.opacity=0;
},

enter(el,done){
  let round=1;
  this.entercancel=setInterval(()=>{
    el.style.opacity=round*0.01;
    round++;
     

    if(round>=100){ console.log('opacity');
      clearInterval(this.entercancel);
      done();
    }
  },2);
  console.log('enter');
},
afterenter(el){
  el.style.color=1;
  console.log("afterenter");
},
entercancelled(){
console.log('entercancel');
clearInterval(this.entercancel);
},
beforeleave(el)
{
  console.log("beforeleave");
  console.log(el);

},
leave(el,done)
{ 
let round=1; 
this.leavecancel=setInterval(()=>{
    el.style.opacity=1-round*0.01;
    round++;
      

    if(round>=100){console.log('opacity');
      clearInterval(this.leavecancel
 );
      done();
    }
  },2);
  console.log('leave');
},
afterleave()
{
  console.log('afterleave');
},
leavecancelled(){
  console.log('leavecancel');
  clearInterval(this.leavecancel);
},

      animateBlock(){
        console.log('animation');
        this.animatedblock=!this.animatedblock;

  },
  showuser()
{
  this.usershow=true;
},
 hideuser()
{
  this.usershow=false;
} ,
togglepara(){
  this.paravisible=!this.paravisible;
 },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
 /* transition: transform 0.4s ease-out;*/
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.entercolorchange{
  color: red;
}

.animate{
  background-color: red;
  
/*  transform:translateX(-50px);*/
animation: slide-fade 6.0s ease-out forwards;

}
.v-enter-from{
  opacity: 0;
  transform: translateY(-30px) ;
}
.v-enter-active{
  transition: all 0.3s ease-out ;
}
.v-enter-to{
  opacity: 1;
  transform: translateY(0px);

}
.v-leave-from{
  opacity: 1;
  transform: translateY(0px) ;
}
.v-leave-active{
  transition: all 0.3s ease-out ;
}
.v-leave-to{
  opacity: 0;
  transform: translateY(+300px);

}
.para-enter-from{            /*name  tanstion as para  to differentiate*/
  /*opacity: 0;
  transform: translateY(-30px) ;*/
}
.para-enter-active{
  /*transition: all 0.3s ease-out ;*/
  animation: slide-fade 0.3s ease-out forwards
}
.para-enter-to{
  /*opacity: 1;
  transform: translateY(0px);*/

}
.para-leave-from{
  /*opacity: 1;
  transform: translateY(0px) ;*/
}
.para-leave-active{
 /*transition: all 0.3s ease-out ;*/
  animation: slide-fade 0.3s ease-out forwards;

}
.para-leave-to{
  /*opacity: 0;
  transform: translateY(+300px);*/

}
.fade-button-enter-to,
.fade-buton-leave-from{
  opacity: 0;
}
.fade-button-enter-active{
  transition: all 0.3s ease-out;
}
.fade-button-leave-active{
  transition: all 0.3s ease-in;
}
.fade-button-enter-from,
.fade-buton-leave-to{
  opacity: 1;
}




@keyframes slide-fade{
  0%{
    transform: translateX(0px)  scale(1);
  }
  25%{
    transform: translateX(-50px) scale(1.3);
  }
  50%{
    transform: translateX(0px) scale(1);
  }
  75%{
    transform: translateX(50px) scale(1.3);
  }
  100%{
    transform: translateX(0px) scale(1);

  }

}

</style>