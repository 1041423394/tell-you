Vue.component("xList", {
	template:`
		<div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">图文组合列表</div>
            <div class="weui-panel__bd">
                <a v-for="n in computednews" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img @click="showGallery(n.thumbnails[0])" class="weui-media-box__thumb" :src="n.thumbnails[0]" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{n.source?n.source:"正在加载中..."}}</h4>
                        <p class="weui-media-box__desc">{{n.title?n.title:"正在加载中..."}}</p>
                    </div>
                </a>
            </div>
            <div class="weui-panel__ft">
                <a @click="loadMore" href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>    
            </div>
        </div>
	`,
	data:function(){
		return {
			search: '',
		news: []
		}
		
	},
	methods:{
		//加载更多
		loadMore:function(){
			var self = this;
			$.ajax({
				type:"get",
				url:"http://localhost/Vue/day04/qqnews.json",
				async:true,
				success: function(data){
					self.news = self.news.concat(data.newslist);
				}
			});
		},
		//预览图片
		showGallery:function(url){
			console.log(url);
			console.log(this.$parent.$children)
			this.$parent.$children[3].bool = true
			this.$parent.$children[3].url = url
		}
	},
	mounted: function(){
		this.loadMore();
	},
	computed:{
		computednews: function(){
			var self = this;
			var newArr = this.news.filter(function(value) {
				return value.title.indexOf(self.search) !== -1
			})
			return newArr
		}
	}
})