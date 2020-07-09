<template>
	<div class="login-box">
		<div class="login-container">
		<div class="login-top">
			<div class="left-box">
			<div class="logo">
				<a href="//www.jd.com/">
					<img  src="@/assets/images/jdlogo.png" alt="京东" width="170" height="60" />
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
				<span class="iconfont  iconinfo-outline"></span>依据《网络安全法》，为保障您的账户安全和正常使用，请尽快完成手机号验证！ 新版
				<a href="https://about.jd.com/privacy/" class="black" target="_blank">《京东隐私政策》</a>
				已上线，将更有利于保护您的个人隐私。
		</div>
		<div class="login-banner" ref="bannerContainer">
			
				<div class="img-container">
				<img v-show="isShowColor" @load="imgLoad" ref ="bannerImg" class="login-img" :src=" bannerData ? `http://${bannerData[bannerNumber%bannerData.length]}`:'javascript;'" >
				</img>
				
				<div class="login-pwd-container">
					<div class="safety-message">
						<span class="iconfont  iconinfo-outline	"></span>京东不会以任何理由要求您转账汇款，谨防诈骗。
					</div>
					<div class="qrcode-login">
						<div class="qrcode-button">
							<div class="button ">
								<span>
									扫码登录
								</span>
							</div>
							<div class="button active">
								<span>
									账户登录
								</span>
							</div>
						</div>
						<div class="user-message-container">
						<a-form layout="inline" :form="form" @submit="handleSubmit">
    <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>

    <a-form-item style="display:flex">
      <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
        登录
      </a-button>
    </a-form-item>
  </a-form>

						</div>
					</div>
				</div>
				</div>
		
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
					<li @click='handleChartTools' class="text">
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
					 <a-upload
				name="file"
				:headers="headers"
				method="post"	
				action="http://localhost:3000/upload_banner"
				@change="handleChange"
			>
					<li class="text">
					<a href="javascript:;">
						广告服务
					</a>
				</li>
			</a-upload>
			</ul>
			<p class="copyright">Copyright © 2004-2020  京东JD.com 版权所有 </p>
		</div>

	</div>
</template>
 
<script>
import RGBaster from 'rgbaster';

window.currentPath = '/login';
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
	components: {
		// Button , Upload
	},
	data() {
		return {
			hasErrors,
			form: this.$form.createForm(this, { name: 'horizontal_login' }),
			headers: {
					authorization: 'authorization-text',
			},
			bannerNumber:localStorage.getItem('banner_number') || 0,
			bannerData:[],
			isShowColor:false
		};
	},
	methods: {
		handleChartTools(){
			// console.log(this,'$socket')
			this.$socket.emit('login',{a:1})
			this.$socket.listeners('relogin', (data) => {
				console.log(data,'xxxxxxx')
			})
		},
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
	async imgLoad (mes){
		let refs = this.$refs;
		let color = await RGBaster(refs.bannerImg.src);
		this.isShowColor = true
		refs.bannerContainer.style.background = color[0].color;
	// downloadPic(src)
	// function downloadPic(url) {
	// 	const img = new Image;
	// 	const canvas = document.createElement('canvas');
	// 	const ctx = canvas.getContext('2d');
	// 	img.onload = function() {
	// 	canvas.width = this.width;
	// 	canvas.height = this.height;
	// 	ctx.drawImage(this, 0, 0);
		
	// 	const elt = document.createElement('a');
	// 	elt.setAttribute('href', canvas.toDataURL('image/png'));
	// 	elt.setAttribute('download', 'file.png');
	// 	elt.style.display = 'none';
	// 	document.body.appendChild(elt);
	// 	elt.click();
	// 	document.body.removeChild(elt);
	// 	};
		// img.crossOrigin = 'anonymous';
		// img.src = url;
		// }
		// refs.
	},
	userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
	this.ApiObj.loginApi.test({},(res)=>{
		console.log(res,'res')
	})

		this.ApiObj.loginApi.loginEnter({
			data:JSON.stringify({	
				user_name:values.userName,
				user_pwd:values.password
				})
		},(res)=>{
			console.log(res,'log')
		})
      });
    },
  },
	computed: {
		
	},
	
	mounted() {
		let self = this;
		let ls = window.localStorage;
		ls && ls.setItem('banner_number',(Number(self.bannerNumber))+1) 
		this.ApiObj.loginApi.getLoginCode({
			method:'get',
			params:{
				id:'cui'
			}
		},function(res){
		});
		this.ApiObj.loginApi.getBanner({
			method:'post',
		},function(res){
			if(res.status === 200){
				self.bannerData = res.data.data
			}else{
				 this.$message.error('接口报错');
			}
		})
		    this.$nextTick(() => {
     	 // To disabled submit button at the beginning.
      	this.form.validateFields();
    });
	},


};
</script>
 
<style scoped lang = "stylus">
.login-box
	.login-banner
		position relative
		width: 100%;
		height: 475px;
		padding 0 22.5%;
		background  rgb(197, 49, 49)
		.login-pwd-container
			background rgb(255, 255, 255)
			margin-top 10px
			margin-bottom 10px
			width 346px
			overflow hidden
			position absolute
			right 25%
			top 0	
			.safety-message
				margin-top 0
			.qrcode-login
				.qrcode-button
					display flex
					justify-content space-between 
					.button 
						width: 173px;
						height: 54px;
						font-size: 18px;
						text-align center;
						> span
							cursor pointer
						&.active
							font-weight: 700;
							color: #e4393c;
						&:hover
							font-weight: 700;
							color: #e4393c;
			.user-message-container
				width: 306px;
				padding: 20px;
				margin: 0 auto;
				.ant-form-inline
					height 200px
					display flex
					justify-content space-around
					flex-direction column
					>span 
						margin-left 200px
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
		font-size 14px
		color #999999
		text-align center
		padding 0.07rem 0
		.black
			color: #333

	.login-bottom
		margin-top 0.2rem
		.list 
			display flex
			justify-content center
			.ant-upload-list-text
				display none
			.text
			a
				color #666
				box-sizing: border-box;
				margin: 0;
				padding: 0;
				color: rgba(0, 0, 0, 0.65);
				font-size: 14px;
				font-variant: tabular-nums;
				line-height: 1.5;
				list-style: none;
				font-feature-settings: 'tnum';
				outline: 0;
				&:hover
					color #e4393c
			.margin 
				margin 0 0.1rem
		.copyright
			text-align center


















</style>