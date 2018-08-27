<template>
  <div class="summary">
    <p class="summary-content">
      {{ tip }}
      <span v-if="needOpen">
        <span @click='seeMore' v-if="hasClose" class="set-tip">......(展开)</span>
        <span @click='seeTip' v-else class="set-tip"> 收起</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data () { 
    return {
      tip: '',
      hasClose: true,
      needOpen: false
    }
  },
  methods: {
    seeMore: function() {
      this.hasClose = false,
      this.tip = this.msg
    },
    seeTip: function() {
      this.tip = this.msg.slice(0, 90),
      this.hasClose = true
    }
  },
  watch: {
    msg: function(){
      if(this.msg.length > 90) {
        this.tip = this.msg.slice(0, 90),
        this.needOpen = true
      }
      else {
        this.tip = this.msg,
        this.needOpen = false
      }
    }
  }
}
</script>

<style>
.set-tip {
  color: #00b600;
}
</style>
