<template>
  <div class="item" :style="{ height: height + 'px' }">
    <div class="item_title">
      <img src="../assets/image/icon1.png" />{{ title }}
      <div class="f_r" v-if="more"><a>详情</a>></div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "HomeBox",
  props: {
    title: String,
    height: String,
    more: {
      default: false,
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #1b4693;
  background-color: #071d6d;
  .item_title {
    border-bottom: 1px solid #1b4693;
    padding-left: 10px;
    line-height: 40px;
    font-size: 18px;
    background-image: linear-gradient(
      90deg,
      rgba(7, 29, 75, 0.4),
      rgba(21, 48, 109, 0.4)
    );
    .f_r {
      padding-right: 15px;
      a {
        text-decoration: none;
      }
    }
    &:after {
      content: "";
      width: 0;
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    img {
      margin-right: 7px;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
