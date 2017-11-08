Vue.component("xload",{
	template:`
		<div id="loadingToast" :style="{'display':bool?'block':'none'}">
		    <div class="weui-mask_transparent"></div>
		    <div class="weui-toast">
		        <i class="weui-loading weui-icon_toast"></i>
		        <p class="weui-toast__content">数据加载中</p>
		    </div>
		</div>
	`,
	data: function(){
		return {
			bool: false
		}
	},
	mounted: function(){
		var self = this
		bus.$on("showloading", function(bool){
			self.bool = bool;
		})
	}
})