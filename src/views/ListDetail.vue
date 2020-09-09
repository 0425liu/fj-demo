<template>
  <div>
    <div class="d_l">
      <div class="btn_list">
        <router-link tag="div" class="btn" to="/fjlist/monitor"
          >轴系在线监测模拟</router-link
        >
        <router-link tag="div" class="btn" to="/fjlist/detail"
          >螺栓松动监测模块</router-link
        >
      </div>
      <div class="list">
        <HomeBox title="XX风场风机列表">
          <template v-slot:content>
            <ul>
              <li class="nav" v-for="(item, key) in navs" :key="key">
                <div class="head" @click="tabChange(key)">
                  {{ item }}
                  <i
                    :class="
                      key === index ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
                    "
                  ></i>
                </div>
                <ul class="box" v-show="key === index">
                  <li>
                    <span class="f_l">设备状态</span>
                    <span>运行中</span>
                  </li>
                  <li>
                    <span class="f_l">风速</span>
                    <span>2432kw</span>
                  </li>
                  <li>
                    <span class="f_l">功率</span>
                    <span>13.6m/s</span>
                  </li>
                  <li>
                    <span class="f_l">通讯状态</span>
                    <span>正常</span>
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </HomeBox>
      </div>
    </div>
    <div class="d_r">
      <div class="overflow">
        <div class="f_l">
          <img :src="require('../assets/image/img.jpg')" />
        </div>
        <div class="f_r info">
          <HomeBox title="轴系振动监测" height="535" :more="true">
            <template v-slot:content>
              <dl>
                <dt>生成报告：2011-11-10 21:10:30</dt>
                <dt>数据获得：2019-11-10 21:05:30</dt>
              </dl>
              <dl>
                <dt>发电机转速：1502rpm</dt>
                <dt>最大值得：3.4mm/s位于1.00x在发电机驱动端水平</dt>
              </dl>
              <dl>
                <dt>建议：</dt>
                <dt><span class="purple">重要的</span>：改善发电机轴承润滑</dt>
                <dt>
                  <span class="yellow">重要的重要的</span>：改善发电机轴承润滑
                </dt>
              </dl>
              <dl>
                <dt>建议：</dt>
                <dt>
                  <span class="purple">较严重</span>：发电机自由端轴承润滑不良
                </dt>
                <dt><span class="yellow">重要的重要的</span>：发电机驱动端</dt>
              </dl>
            </template>
          </HomeBox>
        </div>
      </div>
      <ul>
        <li v-for="(item, index) in titles" :key="item">
          <dl>
            <dt>
              <span>{{ item }}</span>
            </dt>
            <dd>监测螺栓：{{ index > 2 ? 8 : 20 }}</dd>
            <dd>螺栓松动：3个</dd>
            <dd>最大松动角：4</dd>
            <dd>嘴松螺栓：Q7</dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HomeBox from "@/components/HomeBox";
export default {
  data() {
    return {
      index: 0,
      navs: [
        "XX风场#1风机",
        "XX风场#2风机",
        "XX风场#3风机",
        "XX风场#4风机",
        "XX风场#5风机",
        "XX风场#6风机",
        "XX风场#7风机",
        "XX风场#8风机",
        "XX风场#9风机",
        "XX风场#10风机",
        "XX风场#11风机"
      ],
      titles: [
        "叶片法兰A",
        "叶片法兰B",
        "叶片法兰C",
        "轮䡰法兰",
        "偏航室",
        "塔筒一级",
        "塔筒二级"
      ]
    };
  },
  components: {
    HomeBox
  },
  methods: {
    tabChange(index) {
      this.index = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  .nav {
    border-bottom: 1px solid #1547a1;
  }
  .head {
    line-height: 48px;
    padding-left: 20px;
    font-size: 16px;
    position: relative;
    i {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .box {
    background-color: #1547a1;
    padding-bottom: 20px;
    li {
      overflow: hidden;
      padding-left: 32px;
      padding-top: 20px;
      span.f_l {
        width: 160px;
      }
    }
  }
}
.btn_list {
  margin-bottom: 10px;
  .btn {
    width: 154px;
    line-height: 44px;
    text-align: center;
    border-radius: 5px;
    background: #4aa1e7;
  }
  display: flex;
  justify-content: space-between;
}
.d_r ul {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  li {
    background-color: #1c51b1;
    text-align: center;
    height: 280px;
    width: 213px;
    dl {
      dt {
        font-size: 20px;
        padding-top: 25px;
        padding-bottom: 30px;
        span {
          position: relative;
          &:after {
            position: absolute;
            width: 62px;
            height: 2px;
            content: "";
            background-color: #759cf0;
            bottom: -5px;
            left: 50%;
            margin-left: -31px;
          }
        }
      }
      dd {
        color: #ebe362;
        font-size: 18px;
        padding-bottom: 10px;
      }
    }
  }
}
.purple {
  color: #b957e4;
}
.yellow {
  color: #ebe362;
}
.d_l {
  width: 320px;
  float: left;
}
.d_r {
  float: right;
  width: 1548px;
}
.info {
  width: 500px;
  dl {
    padding-top: 40px;
    padding-left: 40px;
  }
}
</style>
