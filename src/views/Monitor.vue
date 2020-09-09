<template>
  <div class="monitor">
    <div class="m_l">
      <HomeBox title="#1风机" height="413">
        <template v-slot:content>
          <ul class="tabs">
            <li class="active">
              <span>振动测点></span>
            </li>
            <li>
              <span>电机自由端1点</span>
            </li>
            <li>
              <span>电机自由端2点</span>
            </li>
            <li>
              <span>增速箱高速轴3点</span>
            </li>
            <li>
              <span>增速箱高速轴4点</span>
            </li>
            <li>
              <span>增速箱低速轴5点</span>
            </li>
            <li>
              <span>增速箱低速轴6点</span>
            </li>
            <li>
              <span>主轴7点</span>
            </li>
          </ul>
        </template>
      </HomeBox>
      <div class="m_t10">
        <HomeBox titile="诊断结论" height="413">
          <template v-slot:content>
            <div class="result">
              <h2>诊断日期：2020-03-04</h2>
              <dl>
                <dt><span class="purple">较严重</span> ：</dt>
                <dd>电机自由端轴承磨损</dd>
              </dl>
              <dl>
                <dt><span class="yellow">中度</span> ：</dt>
                <dd>电机驱动端轴承润滑不良</dd>
              </dl>
            </div>
          </template>
        </HomeBox>
      </div>
    </div>
    <div class="m_r">
      <HomeBox title="通频值" height="413">
        <template v-slot:content>
          <div class="form_wrap passval overflow">
            <div class="f_l p_t10">
              方向：
              <el-radio v-model="radio1" label="1">水平</el-radio>
              <el-radio v-model="radio1" label="2">垂直</el-radio>
              <el-radio v-model="radio1" label="3">轴向</el-radio>
            </div>
            <div class="f_l  m_l20">
              选择时间段：<el-select
                v-model="selectVal"
                placeholder="请选择"
                size="small"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="f_l m_l20">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
              >
              </el-date-picker>
            </div>
            <div class="f_l m_l20">
              <el-button type="primary" size="small">查询数据</el-button>
            </div>
          </div>
          <div id="passVal" style="height:280px;"></div>
        </template>
      </HomeBox>
      <div class="m_t10">
        <div class="f_l" style="width:714px">
          <HomeBox title="时域波形图" height="413">
            <template v-slot:content>
              <div class="form_wrap waveform overflow">
                <div class="f_l p_t10">
                  <el-radio v-model="radio2" label="1">低频</el-radio>
                  <el-radio v-model="radio2" label="2">高频</el-radio>
                  <el-radio v-model="radio2" label="3">包络</el-radio>
                </div>
                <div class="f_r ">
                  <span>2020-03-07 4:04:38</span>
                  <el-button type="primary" size="small">放大</el-button>
                </div>
              </div>
              <div id="wave"></div>
            </template>
          </HomeBox>
        </div>
        <div class="f_r" style="width:851px">
          <HomeBox title="频谱" height="413">
            <template v-slot:content>
              <div class="form_wrap  overflow">
                <div class="f_l">
                  轴承名称：<el-select
                    v-model="selectVal2"
                    placeholder="请选择"
                    size="small"
                  >
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="f_l p_t10 m_l20">
                  方向：
                  <el-radio v-model="radio3" label="1">三轴</el-radio>
                  <el-radio v-model="radio3" label="2">水平</el-radio>
                </div>
                <div class="f_l p_t10 m_l20">
                  类型：
                  <el-radio v-model="radio4" label="1">低频</el-radio>
                  <el-radio v-model="radio4" label="2">高频</el-radio>
                  <el-radio v-model="radio4" label="3">包塔</el-radio>
                </div>
              </div>
              <div class="form_wrap  overflow">
                <div class="btn_wrap">
                  <span>Hertz</span>
                  <span>CPM</span>
                  <span class="active">√Orders</span>
                </div>
                <div class="f_l m_l20">
                  <el-select
                    v-model="selectVal3"
                    placeholder="请选择"
                    size="small"
                  >
                    <el-option
                      v-for="item in options3"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="btn_wrap">
                  <span class="active">谐波追踪</span>
                  <span>峰值差计算</span>
                </div>
                <div class="f_r">
                  <el-button type="primary" size="small">查询数据</el-button>
                </div>
              </div>
              <div class="form_wrap overflow">
                <div class="f_r" style="color:#97b7f1">2020-03-07 04:07:38</div>
              </div>

              <div id="pp" style="height:220px"></div>
            </template>
          </HomeBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBox from "@/components/HomeBox";
export default {
  data() {
    return {
      selectVal: "",
      selectVal2: 1,
      selectVal3: 1,
      value1: [new Date(2000, 10, 10), new Date(2000, 10, 11)],
      options: [
        {
          value: 1,
          label: "最近一个月"
        }
      ],
      options2: [
        {
          value: 1,
          label: "电机自由端轴承1"
        }
      ],
      options3: [
        {
          value: 1,
          label: "扰拼标注"
        }
      ],
      radio1: 1,
      radio2: 1,
      radio3: 1,
      radio4: 1
    };
  },
  methods: {
    _waveData() {
      let xArray = [0],
        yArray = [0];
      for (let i = 1; i <= 600; i++) {
        xArray.push((6 / 600) * i);
        yArray.push((-0.4 * Math.random()).toFixed(4));
      }

      return { xArray, yArray };
    },
    _passData() {
      let xArray = [],
        yArray = [];
      for (let i = 1; i < 20; i++) {
        xArray.push("2020-02-10 00:00:00");
        yArray.push((1.5 * Math.random()).toFixed(4));
      }

      return { xArray, yArray };
    },
    _ppData() {
      let xArray = [],
        yArray = [];
      for (let i = 0; i < 10; i++) {
        xArray.push(i);
        yArray.push((0.75 * Math.random()).toFixed(3));
      }

      return { xArray, yArray };
    },
    drawWave() {
      let myChart = this.$echarts.init(document.getElementById("wave"));
      let { xArray, yArray } = this._waveData();
      myChart.setOption({
        color: ["#6ddbf6"],
        tooltip: {
          backgroundColor: "#12a992",
          trigger: "axis",
          formatter: "{a}({b},{c})",
          textStyle: {
            align: "left"
          }
        },
        xAxis: {
          name: "秒",
          nameTextStyle: {
            color: "#fff"
          },
          scale: true,
          axisLine: {
            lineStyle: {
              color: "#567ca0"
            },
            onZero: false
          },
          axisLabel: {
            color: "#fff",
            fontSize: 14,
            interval: 99,
            formatter: function(value) {
              return value;
            }
          },
          data: xArray
        },
        yAxis: {
          name: "水平（H）",
          nameLocation: "middle",
          nameTextStyle: {
            color: "#fff"
          },
          nameGap: -600,
          nameRotate: -90,

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
            color: "#fff",
            fontSize: 14
          }
        },
        series: {
          name: "水平（H）",
          type: "line",
          symbol: "circle",
          symbolSize: 6,
          data: yArray
        }
      });
    },
    drawPass() {
      let myChart = this.$echarts.init(document.getElementById("passVal"));
      let { xArray, yArray } = this._passData();
      myChart.setOption({
        color: ["#6ddbf6"],
        title: {
          text: "通频值",
          left: 30,
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          backgroundColor: "#12a992",
          trigger: "axis",
          formatter: "{a}({b},{c})",
          textStyle: {
            align: "left"
          }
        },
        grid: {
          top: 40,
          left: 100,
          right: 80
        },
        xAxis: {
          scale: true,
          axisLine: {
            lineStyle: {
              color: "#567ca0"
            },
            onZero: false
          },
          axisLabel: {
            color: "#fff",
            fontSize: 14,

            formatter: function(value) {
              return value;
            }
          },
          data: xArray
        },
        yAxis: {
          name: "水平（H）",
          nameLocation: "middle",
          nameTextStyle: {
            color: "#fff"
          },
          nameGap: -1430,
          nameRotate: -90,

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
            color: "#fff",
            fontSize: 14,
            formatter: function(value) {
              return value.toFixed(4);
            }
          }
        },
        series: {
          name: "水平（H）",
          type: "line",
          symbol: "none",

          data: yArray
        }
      });
    },
    ppPass() {
      let myChart = this.$echarts.init(document.getElementById("pp"));
      let { xArray, yArray } = this._ppData();
      myChart.setOption({
        color: ["#6ddbf6"],
        tooltip: {
          backgroundColor: "#12a992",
          trigger: "axis",
          formatter: "{a}({b},{c})",
          textStyle: {
            align: "left"
          }
        },
        grid: {
          top: 20,
          left: 100,
          right: 80
        },
        xAxis: {
          scale: true,
          axisLine: {
            lineStyle: {
              color: "#567ca0"
            },
            onZero: false
          },
          axisLabel: {
            color: "#fff",
            fontSize: 14,

            formatter: function(value) {
              return value;
            }
          },
          data: xArray
        },
        yAxis: {
          name: "水平（H）",
          nameLocation: "middle",
          nameTextStyle: {
            color: "#fff"
          },
          nameGap: -700,
          nameRotate: -90,

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
            color: "#fff",
            fontSize: 14
          }
        },
        series: {
          name: "水平（H）",
          type: "line",
          symbol: "none",
          markLine: {
            symbol: "none",

            data: [
              {
                xAxis: 1,
                name: "1X",
                label: {
                  formatter: "1X"
                }
              },
              {
                xAxis: 2,
                name: "1X",
                label: {
                  formatter: "2X"
                }
              },
              {
                xAxis: 3,
                name: "1X",
                label: {
                  formatter: "3X"
                }
              },
              {
                xAxis: 4,
                name: "1X",
                label: {
                  formatter: "4X"
                }
              }
            ]
          },
          data: yArray
        }
      });
    }
  },
  components: {
    HomeBox
  },
  mounted() {
    this.drawWave();
    this.drawPass();
    this.ppPass();
  }
};
</script>

<style lang="scss" scoped>
.m_l20 {
  margin-left: 20px;
}
.btn_wrap {
  background-color: #08195c;
  border: 1px solid #154ba4;
  border-radius: 5px;
  line-height: 27px;
  float: left;
  margin-right: 22px;
  text-align: center;
  span {
    display: inline-block;
    padding: 0 17px;
    border-right: 1px solid #154ba4;
    &:hover,
    &.active {
      background-color: #0b70be;
    }
    &:last-child {
      border: none;
    }
  }
}
.p_t10 {
  padding-top: 10px;
}
.form_wrap {
  margin: 20px;
  font-size: 14px;
}
#wave {
  height: 300px;
}
.waveform {
  .f_r {
    span {
      color: #97b7f1;
      margin-right: 10px;
    }
  }
}
.m_t10 {
  margin-top: 10px;
}
.purple {
  color: #c74beb;
}
.yellow {
  color: #ebe362;
}
.m_l {
  width: 286px;
  float: left;
}
.result {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  h2 {
    font-size: 18px;
  }
  dl {
    margin-top: 20px;
    dt {
      font-size: 20px;
    }
  }
}
.m_r {
  width: 1581px;
  float: right;
}
.tabs {
  font-size: 18px;
  color: #ebe362;
  li {
    padding-top: 18px;
    text-align: center;
    span {
      position: relative;
    }
    &.active,
    &:hover {
      span {
        color: #fff;
        &:after {
          position: absolute;
          width: 50%;
          height: 1px;
          background-color: #699bf6;
          content: "";
          bottom: -10px;
          left: 50%;
          margin-left: -25%;
        }
      }
    }
  }
}
</style>
