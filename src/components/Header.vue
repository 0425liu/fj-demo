<template>
  <header>
    <ul class="nav_left">
      <li><router-link to="/" exact>首页</router-link></li>
      <li>/</li>
      <li><router-link to="/">上一页</router-link></li>
      <li>/</li>
      <li><router-link to="/">下一页</router-link></li>
      <li>/</li>
      <li><router-link to="/FjRect">风机矩阵</router-link></li>
      <li>/</li>
      <li><router-link to="/">风机列表</router-link></li>
      <li>/</li>
      <li><router-link to="/">升压站</router-link></li>
      <li>/</li>
      <li><router-link to="/">报警一览</router-link></li>
    </ul>
    <ul class="nav_right">
      <li><router-link to="/">系统日志</router-link></li>
      <li>/</li>
      <li><router-link to="/">数据管理</router-link></li>
      <li>/</li>
      <li><router-link to="/">数据一览</router-link></li>
      <li>/</li>
      <li><router-link to="/">操作日志</router-link></li>
      <li>/</li>
      <li><router-link to="/">用户管理</router-link></li>
      <li>/</li>
      <li><router-link to="/">密码管理</router-link></li>
      <li>/</li>
      <li><router-link to="/">退出</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
header {
  background: url("../assets/image/header.png") no-repeat;
  height: 74px;
  line-height: 62px;
  font-size: 16px;
  color: #fff;
  .router-link-active {
    color: #ebe362;
    border-bottom: 1px solid #ebe362;
  }
  li {
    float: left;
    padding-right: 13px;
    a {
      padding-bottom: 4px;
      color: #fff;
      border-bottom: 1px solid transparent;
      &:hover {
        @extend .router-link-active;
      }
    }
  }
  .nav_left {
    float: left;
    padding-left: 57px;
  }
  .nav_right {
    float: right;
    padding-right: 21px;
  }
}
</style>
