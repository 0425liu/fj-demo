<template>
  <div class="detail">
    <div class="top clear">
      <div class="top_l">
        <div class="item" style="height:236px">
          <div class="item_t_title">
            <img src="@/assets/image/icon4.png" />自动诊断结论
            <a href="" class="f-r">查看详情</a>
          </div>
          <ul class="top_l_c">
            <li>风机不平衡</li>
            <li>滚柱轴承磨损</li>
          </ul>
        </div>
      </div>
      <div class="top_m" :class="{ top_active: show }">
        <router-link
          tag="dl"
          v-for="(item, i) in names"
          :key="i"
          to="/fjlist/bolt"
        >
          <dt>
            {{ item }}
          </dt>
          <dd>
            <p>螺栓状态</p>

            <h2 v-if="i == 1 || i == 3" class="green">正常</h2>
            <h2 v-else>异常</h2>
            <p>最大角度值</p>
            <h2 v-if="i == 1 || i == 3" class="green">1°</h2>
            <h2 v-else>1.5°</h2>
          </dd>
        </router-link>
      </div>
      <div class="top_r">
        <div class="item" style="height:236px">
          <div class="item_t_title">
            <img src="@/assets/image/icon4.png" />各点震动通频值
            <a href="" class="f-r">查看详情</a>
          </div>
          <table class="t_r_c">
            <tr>
              <th width="40%">点名</th>
              <th width="30%">25</th>
              <th width="30%">29</th>
            </tr>
            <tr>
              <th>描述</th>
              <th>26</th>
              <th>30</th>
            </tr>
            <tr>
              <th>类型</th>
              <th>27</th>
              <th>31</th>
            </tr>
            <tr>
              <th>报警类型</th>
              <th>25</th>
              <th>30</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="wrap clear" :class="{ open_animate: show }">
      <transition>
        <div class="content">
          <div class="c-l">
            <div class="c_l_t">
              <h2>廉江塘蓬 红卫 #003风机</h2>
              <ul class="status">
                <li>未知状态</li>
                <li>未知状态</li>
              </ul>
              <img src="@/assets/image/img1.png" />
              <ul class="buttom">
                <li>上一台</li>
                <li>下一台</li>
              </ul>
            </div>
            <ul class="status_btn">
              <li>启动</li>
              <li>停止</li>
              <li>台风模式</li>
              <li>挂牌</li>
            </ul>
            <ul class="c_l_m ">
              <li>挂牌说明：</li>
              <li>0：取消挂牌</li>
              <li>1：正常发电</li>
              <li>2：告警发电</li>
              <li>3：调度限电</li>
              <li>4：异常限电</li>
              <li>5：待机</li>
              <li>6：限电停机</li>
              <li>7：场内受累</li>
              <li>8：场外受累</li>
              <li>9：天气停机</li>
              <li>10：维护停机</li>
              <li>11：定检停机</li>
              <li>12：不可复位停机</li>
              <li>13：可复位停机</li>
              <li>14：离线</li>
            </ul>
            <div class="item">
              <div class="item_title">
                <img src="@/assets/image/icon1.png" />基本信息
                <div class="f-r">统计</div>
              </div>
              <ul class="info">
                <li v-for="(item, key) in infos" :key="key">
                  <span>{{ item.name }}</span
                  ><span class="unit">{{ item.unit }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="c_r">
            <div class="table_info" v-for="(item, i) in list" :key="i">
              <h2 :style="{ background: item.color }">{{ item.name }}</h2>
              <ul>
                <li v-for="v in item.list" :key="v.name">
                  <p>{{ v.name }}</p>
                  <p>{{ v.val }}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="c_b">
            <h2></h2>
            <table border="1" bordercolor="#27478e" cellspacing="0">
              <tr>
                <th>点名</th>
                <th>描述</th>
                <th>类型</th>
                <th>报警类型</th>
                <th>事件发生时值</th>
                <th>状态</th>
                <th>报警状态</th>
                <th>报警开始时间</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </transition>
      <div class="open" @click="show = !show" :class="{ open_active: show }">
        <img
          :src="
            !show
              ? require('../assets/image/icon5.png')
              : require('../assets/image/icon6.png')
          "
        />
        风力发电机组
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      names: [
        "变桨盘A螺旋监测",
        "变桨盘B螺旋监测",
        "变桨盘C螺旋监测",
        "偏航室螺栓监测",
        "塔筒螺栓监测"
      ],
      infos: [
        { name: "逆时针偏航", unit: "32.61°" },
        { name: "顺时针偏航", unit: "32.61°" },
        { name: "偏航手动控制模式", unit: "27.8" },
        { name: "手动偏航停止", unit: "56.67" },
        { name: "刹车程序", unit: "20.67" },
        { name: "运行模式", unit: "32.61其他模式" },
        { name: "偏航程序", unit: "27.80其他模式" },
        { name: "当天的机组可利用率", unit: "15.22" },
        { name: "总的机组可利用率", unit: "50.00" },
        { name: "机组当天运行时间", unit: "20.67" },
        { name: "机组运行总数", unit: "32.61" }
      ],
      list: [
        {
          name: "发电机信息",
          color: "#39b79e",
          list: [
            { name: "发电机转速实时值", val: "32.61 rpm" },
            { name: "发电机有功设定值", val: "8.67 KW" },
            { name: "发电机功率实时值", val: "61.50 KW" },
            { name: "转速设定值", val: "29.66 rpm" },
            { name: "发电机DE端温度", val: "43.28 ℃" },
            { name: "发电机NDE端温度", val: "36.55 ℃" },
            { name: "发电机冷风温度", val: "25.92 ℃" },
            { name: "定子绕组U温度", val: "32.61 ℃" },
            { name: "定子绕组V端温度", val: "32.61 ℃" },
            { name: "定子绕组W温度", val: "32.61 ℃" },
            { name: "发电机转速设定值", val: "32.61 ℃" },
            { name: "发电机有功电量", val: "32.61 rpm" },
            { name: "发电机有功电量plc", val: "32.61 kwh" },
            { name: "发电机当天有功电量", val: "32.61 kwh" },
            { name: "主轴轴承A温度", val: "32.61 ℃" },
            { name: "主轴轴承B温度", val: "32.61 ℃" }
          ]
        },
        {
          name: "变桨信息",
          color: "#583fca",
          list: [
            { name: "发电机转速实时值", val: "32.61 rpm" },
            { name: "发电机有功设定值", val: "8.67 KW" },
            { name: "发电机功率实时值", val: "61.50 KW" },
            { name: "转速设定值", val: "29.66 rpm" },
            { name: "发电机DE端温度", val: "43.28 ℃" },
            { name: "发电机NDE端温度", val: "36.55 ℃" },
            { name: "发电机冷风温度", val: "25.92 ℃" },
            { name: "定子绕组U温度", val: "32.61 ℃" }
          ]
        },
        {
          name: "齿轮箱信息",
          color: "#583fca",
          list: [
            { name: "发电机转速实时值", val: "32.61 rpm" },
            { name: "发电机有功设定值", val: "8.67 KW" },
            { name: "发电机功率实时值", val: "61.50 KW" },
            { name: "转速设定值", val: "29.66 rpm" },
            { name: "发电机DE端温度", val: "43.28 ℃" },
            { name: "发电机NDE端温度", val: "36.55 ℃" }
          ]
        },
        {
          name: "变流器信息",
          color: "#b2834a",
          list: [
            { name: "发电机转速实时值", val: "32.61 rpm" },
            { name: "发电机有功设定值", val: "8.67 KW" },
            { name: "发电机功率实时值", val: "61.50 KW" },
            { name: "转速设定值", val: "29.66 rpm" },
            { name: "发电机DE端温度", val: "43.28 ℃" },
            { name: "发电机NDE端温度", val: "36.55 ℃" },
            { name: "发电机冷风温度", val: "25.92 ℃" },
            { name: "定子绕组U温度", val: "32.61 ℃" },
            { name: "定子绕组V端温度", val: "32.61 ℃" }
          ]
        },
        {
          name: "其他信息",
          color: "#01a1af",
          list: [
            { name: "发电机转速实时值", val: "32.61 rpm" },
            { name: "发电机有功设定值", val: "8.67 KW" },
            { name: "发电机功率实时值", val: "61.50 KW" },
            { name: "转速设定值", val: "29.66 rpm" },
            { name: "发电机DE端温度", val: "43.28 ℃" },
            { name: "发电机NDE端温度", val: "36.55 ℃" },
            { name: "发电机冷风温度", val: "25.92 ℃" },
            { name: "定子绕组U温度", val: "32.61 ℃" },
            { name: "定子绕组V端温度", val: "32.61 ℃" },
            { name: "定子绕组W温度", val: "32.61 ℃" },
            { name: "发电机转速设定值", val: "32.61 ℃" }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$color: #1b4693;
.border {
  border: 1px solid $color;
}
.wrap.open_animate {
  transform: translateX(-20px);
  height: 100%;
}
.open {
  transition: all 3s ease;
  width: 44px;
  line-height: 18px;
  height: 172px;
  padding: 10px;
  text-align: center;
  background-color: #1c8ae1;
  font-size: 18px;
  float: left;
  img {
    padding-bottom: 5px;
  }
}
.c_b {
  clear: both;
  table {
    text-align: center;
    background-color: #023487;
    width: 100%;
    th,
    td {
      line-height: 34px;
      height: 34px;
    }
    th {
      background-color: #0d1f69;
    }
  }
}
.c_r {
  float: left;
  width: 1450px;
  margin-left: 10px;
  .table_info {
    margin-bottom: 15px;
    display: inline-block;
  }
  h2 {
    line-height: 56px;
    text-align: center;
    font-size: 20px;
  }
  li {
    float: left;
    width: 145px;
    border-left: 1px solid $color;
    border-bottom: 1px solid $color;
    &:last-child,
    &:nth-child(10) {
      border-right: 1px solid $color;
    }
    p {
      line-height: 35px;
      text-align: center;
      &:last-child {
        color: #e9e276;
        border-top: 1px solid $color;
      }
    }
  }
}
.info {
  padding: 10px 0 10px 32px;
  color: #e9e276;
  li {
    line-height: 30px;
    span:first-child {
      width: 180px;
      color: #fff;
      float: left;
    }
  }
}
.status_btn {
  display: flex;
  margin: 6px 0;
  justify-content: space-between;
  li {
    padding: 0 18px;
    line-height: 34px;
    font-size: 16px;
    text-align: center;
    background-color: #0aa3ee;
    &:first-child {
      background-color: #0ec6a1;
    }
    &:nth-child(2) {
      background-color: #f44e4f;
    }
  }
}
.wrap {
  transform: translateX(-1880px);
  transition: all 3s ease;
  margin-top: 10px;
  width: 1904px;
  height: 172px;
  overflow: hidden;
}
.content {
  border-top: 1px solid #1b4693;
  padding: 30px 20px;
  width: 1860px;
  border-bottom: 1px solid #1b4693;
  border-right: 1px solid #1b4693;
  float: left;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  .item .item_title {
    background-image: linear-gradient(
      90deg,
      rgba(7, 29, 75, 0.4),
      rgba(21, 48, 109, 0.4)
    );
    .f-r {
      background-color: #0aa3ee;
      width: 72px;
      line-height: 30px;
      text-align: center;
      float: right;
      margin-right: 15px;
      margin-top: 5px;
    }
  }
}
.c_l_m {
  @extend .border;
  overflow: hidden;
  padding: 20px 0 20px 20px;
  margin-bottom: 5px;
  li {
    min-width: 100px;
    float: left;
    color: #00f5fd;
  }
}
.c_l_t {
  @extend .border;
  height: 220px;
  padding: 0 15px;
  text-align: center;
  position: relative;
  h2 {
    font-size: 20px;
    padding-top: 19px;
    padding-bottom: 20px;
  }
  .status {
    position: absolute;
    left: 15px;
    top: 76px;
    li {
      margin-bottom: 10px;
      color: #e9e276;
    }
  }
  .buttom {
    position: absolute;
    right: 20px;
    top: 122px;
    li {
      line-height: 34px;
      width: 88px;
      background-color: #0ec6a1;
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
}
.c-l {
  float: left;
}
.top_l,
.c-l,
.top_r {
  width: 334px;
}
.top_m {
  float: left;
  margin-left: 5px;
  overflow: hidden;
  dl {
    float: left;
    margin-left: 35px;
    width: 200px;
    text-align: center;
    dt {
      font-size: 24px;
      padding-bottom: 10px;
    }
    dd {
      background: url(./../assets/image/bg2.png) no-repeat;
      width: 200px;
      height: 451px;
      padding-top: 244px;
      p {
        padding-top: 25px;
      }
      h2 {
        color: #e9e276;
      }
      h2.green {
        color: #0ec6a1;
      }
    }
  }
}
.top_m {
  transform: translateY(150px);
  transition: transform 1s ease;
}
.top_active {
  transform: translateY(0);
}
.top_l {
  float: left;
}
.top_r {
  float: right;
}
.t_r_c {
  width: 100%;
  border-spacing: 0;
  tr:nth-child(even) {
    background-color: #023487;
  }
  th {
    border-bottom: 1px solid #1b4693;
    padding: 12px 0;
    text-align: center;
    color: #e9e276;
    border-left: 1px solid #1b4693;
    &:first-child {
      text-align: left;
      padding-left: 29px;
      color: #fff;
    }
  }
}
.top_l_c {
  padding: 12px 0 0 22px;
  li {
    color: #e9e276;
    padding-bottom: 12px;
  }
}
.item {
  border: 1px solid #1b4693;
  background-color: #071d6d;
  .item_t_title {
    background-color: #1c8ae1;
  }
  .item_t_title,
  .item_title {
    border-bottom: 1px solid #1b4693;
    padding-left: 10px;
    line-height: 40px;
    font-size: 18px;
    &:after {
      content: "";
      width: 0;
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    a {
      float: right;
      color: #fff;
      text-decoration: underline;
      margin-right: 15px;
    }
    img {
      margin-right: 7px;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
