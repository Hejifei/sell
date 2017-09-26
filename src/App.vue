<template>
  <div id="app">
  	<v-header :seller="seller"></v-header>
  	<div class="tab border-1px">
  		<div class="tab-item">
  			<router-link to="/goods">商品</router-link>
  		</div>
  		<div class="tab-item">
  			<router-link to="/ratings">评论</router-link>
  		</div>
  		<div class="tab-item">
  			<router-link to="/seller">商家</router-link>
  		</div>
  	</div>
  	<router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
	import header from 'components/header/header.vue'
	
	const ERR_OK = 0;//定义ok的状态码
	
	export default {
  	data() {
	  	return{
		  	seller:{}
	  	}
  	},
  	created(){
//		ajax请求
  		this.$http.get('/api/seller').then(response => {
    		// get body data
    		response = response.body;
				if(response.errno === ERR_OK){
					this.seller = response.data;
				}
  		});
  	},
  	components:{
  		'v-header':header
  	}
	}

</script>

<style  lang="stylus" rel="stylesheet/stylus">
	@import "../src/common/stylus/mixin.styl"
	.tab{
		display: flex;width: 100%;height: 40px;line-height: 40px;;
		.tab-item{flex: 1;text-align: center;border-1px(rgba(7, 17, 27, 0.1));
			& > a{display: block;font-size: 14px;color: rgb(77,85,93);
				&.active{color: rgb(240,20,20);}
			}
		}
	}
</style>
