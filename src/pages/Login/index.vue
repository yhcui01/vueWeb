<template>
	<div class="login-box">
		<div class="login-container">
		<div class="login-top">
			<div class="left-box">
			<div class="logo">
				<a href="//www.jd.com/">
					<img src="@/assets/images/jdlogo.png" alt="京东" width="170" height="60" />
				</a>
			<div class="top-text"></div>
				</div>
			
			</div>
			<div class="top-survey">
					<a class="top-survey-container">
						<span class="iconfont  iconcomment-single"></span>
						<a class="top-survey-text" href="//surveys.jd.com/index.php?r=survey/index/sid/568245/lang/zh-Hans">登录页面,调查问卷</a>
					</a>
			</div>
		</div>
		</div>

		<div class="safety-message">
				依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版
				<a href="https://about.jd.com/privacy/" class="black" target="_blank">《京东隐私政策》</a>
				已上线，将更有利于保护您的个人隐私。
		</div>
		<div class="login-banner">
			<swiper ref="mySwiper" :options="swiperOptions">
				<swiper-slide>Slide 1</swiper-slide>
				<swiper-slide>Slide 2</swiper-slide>
				<swiper-slide>Slide 3</swiper-slide>
				<swiper-slide>Slide 4</swiper-slide>
				<swiper-slide>Slide 5</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="login-bottom">
			<ul class="list">
				<li class="text">
					<a href="javascript:;">
						关于我们
					</a>
				</li>
				<li class="margin">
					|
				</li>
					<li class="text">
					<a href="javascript:;">
						联系我们
					</a>
				</li>
				<li class="margin">
					|
				</li>
					<li class="text">
					<a href="javascript:;">
						人才招聘
					</a>
				</li>
				<li class="margin">
					|
				</li>
					<li class="text">
					<a href="javascript:;">
						商家入驻
					</a>
				</li>
				<li class="margin">
					|
				</li>
					<li class="text">
					<a href="javascript:;">
						广告服务
					</a>
				</li>
			</ul>
			<p class="copyright">Copyright © 2004-2020  京东JD.com 版权所有 </p>
		</div>

	</div>
</template>
 
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
window.currentPath = '/login';
export default {
	components: {
		Swiper,
		SwiperSlide
	},
	directives: {
		swiper: directive
	},
	data() {
		return {
			swiperOptions: {
				pagination: {
					el: '.swiper-pagination'
				}
				// Some Swiper option/callback...
			}
		};
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper;
		}
	},
	mounted() {
		// console.log(this.ApiObj,'xx')
		this.ApiObj.loginApi.getLoginCode({
			method:'get',
			url:'/api/get_code',
			params:{
				id:'cui'
			}
		},function(res){
			console.log(res)
		})
		// console.log('Current Swiper instance object', this.swiper);
		// this.swiper.slideTo(3, 1000, false);
	}
};
</script>
 
<style scoped lang = "stylus">
.login-box
	/* padding 0 25% */
	.login-container
		margin 0 auto
		width 50%		
		.logo
		.left-box
			display:flex;
			.top-text
				width  1.1rem;
				height 0.4rem;
				background url('../../assets/images/logintext.png') no-repeat 50% 100%;

		.top-survey
			float right;
			margin-top: -0.12rem;
			.top-survey-container
				cursor pointer
				&:hover
					.top-survey-text
						color #e4393c
				.iconcomment-single
					margin-right 0.02rem
					color red
					position relative
					top 0.01rem
				.top-survey-text
					font-size 0.09rem
					text-decoration none
					color #999

	.safety-message
		margin-top 0.03rem
		background #fff8f0
		font-size 0.09rem
		color #999999
		text-align center
		padding 0.07rem 0
		.black
			color: #333

	.login-bottom
		margin-top 0.2rem
		.list 
			display flex
			/* margin 0 auto */
			justify-content center
			.text
			a
				color #666
				&:hover
					color #e4393c	
			.margin 
				margin 0 0.1rem
		.copyright
			text-align center


















</style>