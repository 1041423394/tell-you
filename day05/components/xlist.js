Vue.component("xlist", {
	template:`
		<div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">图文组合列表</div>
            <div class="weui-panel__bd">
                <a v-for="n in news" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img @click="showGallery(n.thumbnails[0])" class="weui-media-box__thumb" :src="n.thumbnails[0]" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{n.source?n.source:"正在加载中..."}}</h4>
                        <p class="weui-media-box__desc">{{n.title?n.title:"正在加载中..."}}</p>
                    </div>
                </a>
            </div>
            <div class="weui-panel__ft" v-show="bool">
                <a @click="loadMore" href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>    
            </div>
            <div class="weui-loadmore" v-show="!bool">
	            <i class="weui-loading"></i>
	            <span class="weui-loadmore__tips">正在加载</span>
        	</div>
        </div>
	`,
	data:function(){
		return {
			news:[],
			bool:true
		}
		
	},
	methods:{
		loadMore: function(){
			this.bool = false;
			bus.$emit("showloading", true)
			var self = this;
			$.ajax({
				type:"get",
				url:"http://localhost/Vue/qqnews.json",
				async:true,
				success: function(data){
					setTimeout(function(){
						self.bool = true;
						bus.$emit("showloading", false)
						
						self.news = self.news.concat(data.newslist);
					}, 1000)
					
				}
			});
		}
	},
	mounted: function(){
		this.loadMore();
	}
})