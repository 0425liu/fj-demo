<template>
  <header>
    <ul class="nav_left">
      <li><router-link to="/" exact>首页</router-link></li>
      <li>/</li>
      <li><a> 上一页</a></li>
      <li>/</li>
      <li><a> 下一页</a></li>
      <li>/</li>
      <li><router-link to="/fjrect">风场矩阵</router-link></li>
      <li>/</li>
      <li><router-link to="/fjlist">风场列表</router-link></li>
      <li>/</li>
      <li><router-link to="/fjlist/monitor">振动检测</router-link></li>
      <li>/</li>
      <li><a> 报警一览</a></li>
    </ul>
    <ul class="nav_right">
      <li><a> 系统日志</a></li>
      <li>/</li>
      <li><a> 数据管理</a></li>
      <li>/</li>
      <li><a> 数据一览</a></li>
      <li>/</li>
      <li><a> 操作日志</a></li>
      <li>/</li>
      <li><a> 用户管理</a></li>
      <li>/</li>
      <li><a> 密码管理</a></li>
      <li>/</li>
      <li><a> 退出</a></li>
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
