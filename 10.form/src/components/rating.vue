<template>
	<ul>
		<li><button type='button' @click='active("poor")' >poor</button></li>
		<li><button type='button' @click='active("medium")'>medium</button></li>
		<li><button type='button' @click='active("average")'>average</button></li>
	</ul>
</template>
<script >
	export default{
		props:['modelValue'], 
		emits:['update:modelValue'],
		computed:{
   activeOption(){
   return this.modelValue;
   }
		},
		
		
	methods:{
	active(option){
	this.$emit('update:modelValue',option)
	}
	}
	}
</script>