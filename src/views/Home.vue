<template>
  <div class="home">
    <div class="home_left">
      <HomeBox title="基础数据" height="276">
        <template v-slot:content>
          <div class="jcsj">
            <dl>
              <dt>
                <h2>501.55<span>mw</span></h2>
                <p>装机容量</p>
              </dt>
              <dd>
                <h2>380<span>台</span></h2>
                <p>风机数量</p>
              </dd>
            </dl>
            <dl>
              <dt>
                <h2>25.00<span>mw</span></h2>
                <p>实时有功功率</p>
              </dt>
              <dd>
                <h2>26.90<span>m/s</span></h2>
                <p>实时平均风速</p>
              </dd>
            </dl>
          </div>
        </template>
      </HomeBox>
      <HomeBox title="风机状态" height="277">
        <template slot="content">
          <div class="fjzt">
            <ul>
              <li class="green">
                <span class="name"> 运行（台）</span>
                <span class="bar">
                  <span style="width:50%"> </span>
                </span>
                <span class="num">15</span>
              </li>
              <li class="yellow">
                <span class="name"> 检修（台）</span>
                <span class="bar">
                  <span style="width:30%"> </span>
                </span>
                <span class="num">15</span>
              </li>
              <li class="red">
                <span class="name"> 故障（台）</span>
                <span class="bar">
                  <span style="width:70%"> </span>
                </span>
                <span class="num">27</span>
              </li>
              <li class="blue">
                <span class="name"> 待机（台）</span>
                <span class="bar">
                  <span style="width:50%"> </span>
                </span>
                <span class="num">32</span>
              </li>
              <li class="gray">
                <span class="name"> 离线（台）</span>
                <span class="bar">
                  <span style="width:20%"> </span>
                </span>
                <span class="num">50</span>
              </li>
            </ul>
          </div>
        </template>
      </HomeBox>
      <HomeBox title="实时平均风速" height="262">
        <template slot="content">
          <div class="pjfs">
            <ul>
              <li>
                <div class="pjfs_item purple">
                  <h2>日实时平均风速（m/s）</h2>
                  <p>30.87</p>
                </div>
              </li>
              <li>
                <div class="pjfs_item green">
                  <h2>月实时平均风速（m/s）</h2>
                  <p>30.87</p>
                </div>
              </li>
              <li>
                <div class="pjfs_item blue">
                  <h2>年实时平均风速（m/s）</h2>
                  <p>30.87</p>
                </div>
              </li>
            </ul>
          </div>
        </template>
      </HomeBox>
    </div>
    <div class="home_mid">
      <HomeBox title="区域数据" height="835">
        <template v-slot:content>
          <div class="map">
            <img src="../assets/image/map.png" width="100%" />
            <div class="mark" style="left:568px;top:115px;">
              <dl>
                <dt>红卫</dt>
                <dd>50.00m/s</dd>
                <dd>50.00MW</dd>
              </dl>
            </div>
            <div class="mark" style="left:415px;top:214px;">
              <dl>
                <dt>红卫</dt>
                <dd>50.00m/s</dd>
                <dd>50.00MW</dd>
              </dl>
            </div>
            <div class="mark" style="left:533px;top:388px;">
              <dl>
                <dt>红卫</dt>
                <dd>50.00m/s</dd>
                <dd>50.00MW</dd>
              </dl>
            </div>
            <div class="mark" style="left:196px;top:567px;">
              <dl>
                <dt>红卫</dt>
                <dd>50.00m/s</dd>
                <dd>50.00MW</dd>
              </dl>
            </div>
            <div class="mark" style="left:441px;top:576px;">
              <dl>
                <dt>红卫</dt>
                <dd>50.00m/s</dd>
                <dd>50.00MW</dd>
              </dl>
            </div>
          </div>
        </template>
      </HomeBox>
    </div>
    <div class="home_right">
      <div class="home_r_item">
        <HomeBox title="实时发电量概览" height="403">
          <template v-slot:content>
            <div class="ssfd">
              <dl>
                <dt>
                  年累计发电量
                </dt>
                <dd>
                  <span class="num">3</span>
                  <span class="num">3</span>
                  <span class="num">8</span>
                  <span class="num">9</span>
                  <span class="num">0</span>
                  <span class="num">0</span>
                  <span class="num">0</span>
                  <span class="num">0</span>
                  <span class="unit">KWH</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  月实时发电量
                </dt>
                <dd>
                  <span class="num">3</span>
                  <span class="num">1</span>
                  <span class="num">4</span>
                  <span class="num">9</span>
                  <span class="num">0</span>
                  <span class="num">0</span>
                  <span class="num">0</span>
                  <span class="num">0</span>
                  <span class="unit">KWH</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  年实时发电量
                </dt>
                <dd>
                  <span class="num">4</span>
                  <span class="num">3</span>
                  <span class="num">1</span>
                  <span class="num">2</span>
                  <span class="num">0</span>
                  <span class="num">0</span>
                  <span class="num">0</span>
                  <span class="num">0</span>
                  <span class="unit">KWH</span>
                </dd>
              </dl>
            </div>
          </template>
        </HomeBox>
      </div>
      <div class="home_r_item">
        <HomeBox title="日实时发电量" height="425">
          <template v-slot:content>
            <div id="bar"></div>
          </template>
        </HomeBox>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBox from "@/components/HomeBox";
export default {
  name: "Home",
  components: {
    HomeBox
  },
  mounted() {
    this.drawBar();
  },
  methods: {
    drawBar() {
      let myChart = this.$echarts.init(document.getElementById("bar"));

      myChart.setOption({
        title: {
          text: "单位：万kw.h",
          textStyle: {
            color: "#daf6fc"
          }
        },

        tooltip: {},
        xAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#00cbff",
            fontSize: 14
          },
          data: ["南澳", "饶平", "汕尾", "阳江", "南山", "红卫"]
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#567ca0"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: "#00cbff",
            fontSize: 14
          }
        },
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 20,
            itemStyle: {
              color: "#3DE5A2"
            },
            label: {
              show: true,
              color: "#ebe362",
              fontSize: 18,
              position: "top"
            },
            data: [79.39, 37.27, 64.69, 69.12, 93.04, 9.55]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#bar {
  height: 370px;
  padding: 40px 40px 0;
}
.home {
  display: flex;
  justify-content: space-between;
  .home_left {
    width: 502px;
    > div {
      margin-bottom: 10px;
    }
  }
  .jcsj {
    display: flex;
    justify-content: space-around;
    dl {
      width: 134px;
      text-align: center;
      h2 {
        color: #ebe362;
        font-size: 34px;
      }
      p {
        font-size: 14px;
      }
      dt {
        padding-top: 30px;
        border-bottom: 1px solid #265ba3;
        padding-bottom: 18px;
      }
      dd {
        padding-top: 30px;
      }
    }
  }
}
.fjzt li {
  display: flex;
  align-items: center;
  padding: 20px 10px 0;
  font-size: 14px;
  &.green {
    .name,
    .num {
      color: #3de5a2;
    }
    .bar > span {
      background-color: #3de5a2;
    }
  }
  &.yellow {
    .name,
    .num {
      color: #ebe362;
    }
    .bar > span {
      background-color: #ebe362;
    }
  }
  &.red {
    .name,
    .num {
      color: #f73b3b;
    }
    .bar > span {
      background-color: #f73b3b;
    }
  }
  &.blue {
    .name,
    .num {
      color: #75fbfb;
    }
    .bar > span {
      background-color: #75fbfb;
    }
  }
  &.gray {
    .name,
    .num {
      color: #b1aeae;
    }
    .bar > span {
      background-color: #b1aeae;
    }
  }
  .name,
  .num {
    flex: none;
  }
  .bar {
    background: #20347c;
    height: 10px;
    border-radius: 5px;
    margin: 0 10px;
    position: relative;
    flex: auto;
    > span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 10px;
      border-radius: 5px;
    }
  }
}
.pjfs li {
  padding-top: 30px;
  padding-left: 50px;
  width: 50%;
  float: left;
}
.pjfs_item {
  border-left: 5px;
  border-left-style: solid;
  padding-left: 18px;
  h2 {
    font-size: 14px;
  }
  p {
    font-size: 34px;
    color: #ebe362;
  }
}
.pjfs_item.purple {
  border-color: #5a52fe;
}
.pjfs_item.green {
  border-color: #75fbfd;
}
.pjfs_item.blue {
  border-color: #1284f1;
}
.home_mid {
  width: 842px;
}
.home_right {
  width: 502px;
}
.home_r_item {
  margin-bottom: 10px;
}
.ssfd {
  padding-top: 30px;
  padding-left: 60px;
  dt {
    font-size: 14px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  span {
    display: inline-block;
    margin-right: 5px;
    &.num {
      width: 37px;
      height: 46px;
      line-height: 46px;
      font-size: 34px;
      text-align: center;
      background: linear-gradient(0deg, #1670fd, #41d0f8);
    }
    &.unit {
      font-size: 18px;
      margin-left: 5px;
    }
  }
}
.map {
  position: relative;
  .mark {
    position: absolute;

    dt {
      font-size: 22px;
      color: #bc2e23;
      position: relative;
      font-weight: bold;
      -webkit-text-stroke: 1px solid #827a02;
      &:after {
        position: absolute;
        content: "";
        left: -12px;
        top: 50%;
        width: 9px;
        height: 9px;
        background: #bc2e23;
        border: 1px solid #fff;
        border-radius: 100%;
        transform: translateY(-50%);
      }
    }
    dd {
      font-size: 18px;
      color: #fff110;
      font-weight: bold;
      text-shadow: 4px 4px 4px rgba(5, 0, 1, 0.4);
    }
  }
}
</style>
