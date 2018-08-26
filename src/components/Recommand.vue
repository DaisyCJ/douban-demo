<template>
  <div class="recommand">
    <div class="list-head">
      <span>{{ title }}</span>
    </div>
    <ul>
      <li v-for="item in items.slice(0,4)" :key="item.id">
        <a :href="item.url" class="list-item" 
          :style="{'border-color': item.color, 'color': item.color}">{{ item.tag }}</a>
      </li>
      <li class="empty"></li>
      <li v-for="item in items.slice(4-7)" :key="item.id">
        <a :href="item.url" class="list-item"
          :style="{'border-color': item.color, 'color': item.color}">{{ item.tag }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items', 'title']
}
</script>

<style lang="scss" scoped>
.recommand {
  padding-left: 20px;
  .list-head {
    display: inline;
    padding: 5px 0;
  }
  ul {
    overflow-x: auto;
    white-space: nowrap;
    margin: 15px 0;
    li {
      display: inline-block;
    }
  }
  .list-item {
    margin: 3px;
    padding: 12px 22px;
    border: 1px solid;
    border-radius: 5px;
    overflow: auto;
    display: block;
    text-align: center;
    font-size: 15px;
  }
  .empty {
    width: 100%;
    display: block;
  }
}
</style>
