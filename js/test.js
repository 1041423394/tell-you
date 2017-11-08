new Vue({
	el: "#demo",
	data: {
		name: "qd"
	},
	//监听数据模型
	watch: {
		name: function(value, oldValue) {
			console.log(value)
			console.log(oldValue)
		}
	}
})