Vue.component("xGallery", {
	template:`
		<div class="weui-gallery" :style="{display:bool?'block':'none'}">
	        <span class="weui-gallery__img" :style="{'backgroundImage': 'url('+url+')'}"></span>
	        <div class="weui-gallery__opr">
	            <a @click="hideGallery" href="javascript:" class="weui-gallery__del">
	                <i class="weui-icon-delete weui-icon_gallery-delete"></i>
	            </a>
	        </div>
    	</div>
	`,
	data:function(){
		return {
			bool:false,
			url:""
		}
	},
	methods:{
		hideGallery:function(){
			this.bool = false
		}
	}
})