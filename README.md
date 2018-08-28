# vue-douban-demo

> 这是一个使用vue全家桶仿的豆瓣应用，移动端查看效果更佳，[预览地址](https://daisycj.github.io/douban-demo/index.html#/pages/home)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 豆瓣API的使用
[豆瓣Api V2](https://developers.douban.com/wiki/?title=api_v2)

``` bash
# 豆瓣Top250
https://api.douban.com/v2/movie/top250

# 正在热映
https://api.douban.com/v2/movie/in_theaters

# 北美票房榜
https://api.douban.com/v2/movie/us_box

# 即将上映
https://api.douban.com/v2/movie/coming_soon

# 电影条目信息（两个有点区别）
https://api.douban.com/v2/movie/id
https://api.douban.com/v2/movie/subject/id

# 电影查询
https://api.douban.com/v2/movie/search?q=
```
