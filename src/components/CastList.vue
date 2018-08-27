<template>
  <div class="cast-list">
    <ul>
      <li v-for='item in items.directors' :key='item.id'>
        <a :href="item.alt">
          <img :src="item.avatars.small" class="list-img" alt="error">
          <p class='cast-name'>{{ item.name }}</p>
          <p>导演</p>
        </a>
      </li>
      <li v-for='item in items.casts'>
        <a :href="item.alt">
          <img :src="item.avatars.small" class="list-img">
          <p class='cast-name'>{{ item.name }}</p>
          <p>演员</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="scss" scoped>
.cast-list {
  font-size: 14px;
  color: #d1cdcd;
  ul {
    overflow-x: auto;
    white-space: nowrap;
    li {
      display: inline-block;
      margin-right: 5px;
    }
  }
  img {
    width: 100px;
  }
}
</style>

