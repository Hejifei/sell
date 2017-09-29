<template>
	<div class="cartcontrol">
		<div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0"></div>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'Vue';
	export default {
		props: {
			food: {
				type: Object
			}
		},
		created() {
		},
		methods: {
			addCart(event) {
				console.log("click")
				if(!event._constructed){
					return;
				}
				if(!this.food.count){
					/*this.food.count = 1;无效，因为vue中无法检测到不存在属性的变化，所以要用Vue.set*/
					/*Vue.set只能使得视图变化一次，用this.$set可以持续变化*/
					this.$set(this.food, 'count', 1);
				}else{
					this.food.count++;
				}
				
				console.log(this.food.count)
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol{font-size: 0;
		.cart-decrease,.cart-add{display: inline-block;padding: 6px;line-height: 24px;font-size: 24px;color: rgb(0,160,220);}}
		.cart-count{display: inline-block;vertical-align: top;width: 12px;padding-top: 6px;line-height: 24px;text-align: center;font-size: 10px;color: rgb(147,153,159);}
		.cart-decrease{count}
		.cart-add{
	}
</style>