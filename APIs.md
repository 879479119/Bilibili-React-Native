# 通过APP抓包或者网页访问得到的一些API
---
另外还使用了WhiteBlue提供的一些接口  [这里](https://github.com/WhiteBlue/bilibili-go)

+ XML形式的一些视频信息（不够详细
http://interface.bilibili.com/player?id=cid:1&aid=10492

+ 移动端网页，便于抓取
http://www.bilibili.com/mobile/video/av6100376.html

+ XML形式的视频评论
http://comment.bilibili.com/9903732.xml

+ 视频详情信息超级坑（不是XHR
http://api.bilibili.com/archive_stat/stat?aid=10492&type=jsonp

+ 视频评论详细信息
http://api.bilibili.com/x/reply?callback=jQuery172049116931556159527_1472867219779&jsonp=jsonp&type=1&sort=2&oid=6100376&pn=1&nohot=1&_=1472867219969

## APP端接口

---

+ 手机启动splash屏的图片
http://app.bilibili.com/x/splash?plat=0&width=1080&height=1920

+ 首页Banner图详情以及活动连接
http://app.bilibili.com/x/banner?plat=4&build=425000

+ 首页番剧推荐信息（参数比较多，应该还可以有其他用途
http://bangumi.bilibili.com/api/get_season_by_tag?build=425000&mobi_app=android&page=1&pagesize=4&platform=android&tag_id=109&ts=1473084707000

+ 推荐页面全部信息（每访问一次就会换内容
http://app.bilibili.com/x/show/old?build=425000&mobi_app=android&platform=android&screen=xxhdpi&ts=1473084707000

+ 直播page图标获取
http://live.bilibili.com/AppIndex/areas?_device=android&_hwid=b86ac54e605e398f&_ulv=10000&access_key=7397d44cbf7fb47e2e788003ebce9f2d&appkey=1d8b6e7d45233436&build=425000&mobi_app=android&platform=android&scale=xxhdpi&sign=ecb5e444e3ecfa14baa5926de0546da0

+ ... 如果有其他用到的还会更新