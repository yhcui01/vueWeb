<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
	name: 'App',
	components: {},
	data() {
		return {
			locale: zhCN
		};
	},
	mounted() {}
};
</script>

<style lang="stylus" scoped></style>
