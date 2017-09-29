<template>
	<div class="cartcontrol">
		<div class="cart-decrease" v-show="food.count>0">
			<i class="icon-remove_circle_outline"></i>
		</div>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add" @click=addCart>
			<i class="icon-add_circle"></i>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {
			food: {
				type: Object
			}
		},
		created() {
			console.log(this.food)
		},
		methods: {
			addCart(event) {
				if(!event._constructed){
					return;
				}
				if(this.food.count){
					this.food.count = 1;
				}else{
					this.food.count++;
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol{font-size: 0;
		.cart-decrease,.cart-add{display: inline-block;padding: 6px;line-height: 24px;font-size: 24px;}
		.cart-count{display: inline-block;}
		.cart-decrease{}
		.cart-add{color: rgb(0,160,220);}
	}
</style>