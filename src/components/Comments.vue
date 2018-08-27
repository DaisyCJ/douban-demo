  <template>
  <div class="comments">
    <ul>
      <li v-for="item in items" :key="item.id" class="comment">
        <header class="comment-head">
          <a class="user-pic" href="">
            <img src="../assets/user_face.jpg" alt="error">
          </a>
          <div class="user-msg">
            <p>{{ item.name }}</p>
            <rating-star :rating='item.score'></rating-star>
            <span>{{ item.time }}</span>
          </div>
        </header>
        <section class="comment-content">
          <p>{{ item.content }}</p>
          <div class="call">
            <span>{{ item.callNum }}</span>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import RatingStar from '../components/RatingStar'

export default {
  props: ['items'],
  components: {
    RatingStar
  }
}
</script>

<style lang="scss" scoped>
.comments {
  .comment {
    margin: 10px 0;
    border-bottom: 1px solid #e2dede;
  }
  .comment-head {
    .user-pic {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      overflow: hidden;
    }
    img {
      float: left;
      width: 30px;
    }
    .user-msg {
      display: inline-block;
      .rating-star {
        float: left;
      }
      span {
        font-size: 12px;
      }
    }
  }
  .comment-content {
    padding: 10px 0;
    .call {
      padding: 10px 30px;
      background: url(../assets/call.png) no-repeat;
      background-position: left;
      background-size: 25px 25px;
      font-size: 14px;
    }
  }
}
</style>

