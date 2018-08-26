<template>
  <div class="category">
    <div class="list-head">
      <span>{{ title }}</span>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <a :href="item.url" class="list-item"
          :style="{'border-color': item.color, 'color': item.color}">{{ item.tag }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'items']
}
</script>

<style lang="scss" scoped>
.category {
  padding-left: 20px;
  .list-head {
    display: inline;
    padding: 5px 0;
  }
  ul {
    white-space: nowrap;
    margin: 15px 0;
    border-top: 1px solid #eeeeee;
    li {
      float: left;
      width: 50%;
      border-bottom: 1px solid #eeeeee;
      border-right: 1px solid #eeeeee;
      background: url(../assets/more.png) no-repeat 90% 50%;
      background-size: 15px 15px;
    }
    li:nth-of-type(2n) {
      padding: 0 15px;
    }
  }
  .list-item {
    margin: 3px;
    padding: 10px 0;
    display: block;
    font-size: 15px;
    color: #42bd56;
  }
}
</style>
