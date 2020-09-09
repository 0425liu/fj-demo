<template>
  <div class="bolt">
    <h2>1号风机塔身地角螺栓状态分布图</h2>
    <div class="circle">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" v-show="show">
        <line
          x1="609"
          y1="100"
          x2="758"
          y2="121"
          style="stroke:rgb(37,105,183);stroke-width:2"
        />
      </svg>
      <div
        class="shape"
        v-for="(val, k) in nums"
        :key="k"
        @click="show = !show"
        :style="{
          background:
            'url(' + require(`../assets/image/shape${val.value}.png`) + ')'
        }"
      >
        {{ val.name }}
        <span v-if="k == 2">30°</span>
      </div>
      <div class="btn_wrap">
        <div class="compass">
          <img src="@/assets/image/compass.png" alt="" />
          <p>0点方位</p>
        </div>
        <div class="prev">上一个</div>
        <div class="next">下一个</div>
      </div>
      <div class="chart_box" v-show="show">
        <h3>螺栓角度变化曲线</h3>
        <div id="line"></div>
        <ul class="btn_list">
          <li>时段选择</li>
          <li>数据保存</li>
          <li>屏幕打印</li>
          <li>关闭报警</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      nums: [
        {
          name: 1,
          value: 1
        },
        {
          name: 2,
          value: 1
        },
        { name: 3, value: 2 },
        {
          name: 4,
          value: 1
        },
        { name: 5, value: 4 },
        {
          name: 6,
          value: 1
        },
        { name: 7, value: 1 },
        {
          name: 8,
          value: 1
        },
        { name: 9, value: 3 },
        {
          name: 10,
          value: 1
        },

        {
          name: 11,
          value: 1
        },
        { name: 12, value: 1 },
        {
          name: 13,
          value: 1
        },
        { name: 14, value: 1 },
        {
          name: 15,
          value: 1
        },
        { name: 16, value: 1 }
      ]
    };
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("line"));
      myChart.setOption({
        legend: {
          data: ["1号螺栓", "2号螺栓"],
          icon: "circle",
          textStyle: { color: "#fff" },
          right: 0
        },
        color: ["#0277fa", "#75fbfd"],
        tooltip: {
          backgroundColor: "transprant",
          formatter: function(params) {
            return `<div style="color:${params.color}">日期:${params.name}<br/>角度:${params.value}°<div>`;
          },
          textStyle: {
            align: "left"
          }
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
            fontSize: 14
          },
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
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
            color: "#fff",
            formatter: "{value}°",
            fontSize: 14
          }
        },
        series: [
          {
            name: "1号螺栓",
            type: "line",
            symbol: "circle",
            symbolSize: 6,
            data: [0.3, 0.4, 0.3, -1.2, -2, -1.5, -0.4, -0.5, -1.5]
          },
          {
            name: "2号螺栓",
            type: "line",
            symbol: "circle",
            symbolSize: 6,
            data: [0, -1.5, -1.3, 0, 1.5, 2, 1.5, 0, -1.5, -2]
          }
        ]
      });
    }
  },
  mounted() {
    const radius = 334;
    let divs = document.querySelectorAll(".circle >div.shape");
    let dotLeft = 334 - 31; //31多边形宽度/2
    let dotTop = 334 - 35; //多边形高度/2
    let length = divs.length;
    let avd = 360 / length;
    var ahd = (avd * Math.PI) / 180;
    for (let i = 0; i < length; i++) {
      let ele = document.querySelectorAll(".circle >div")[i];
      ele.style.left = `${Math.sin(ahd * i) * radius + dotLeft}px`;
      ele.style.bottom = `${Math.cos(ahd * i) * radius + dotTop}px`;
    }
    this.drawLine();
  }
};
</script>

<style lang="scss" scoped>
svg {
  width: 668px;
  height: 668px;
  overflow: visible;
}
.chart_box {
  background: url(./../assets/image/bg3.png) no-repeat;
  width: 461px;
  height: 436px;
  padding: 20px 0 0 30px;
  position: absolute;
  left: 758px;
  top: -100px;
  h3 {
    text-align: center;
    line-height: 35px;
    font-size: 20px;
  }
  #line {
    width: 396px;
    height: 261px;
  }
  .btn_list {
    li {
      padding-left: 23px;
      width: 90px;
      line-height: 40px;
      margin-right: 13px;
      float: left;
      &:nth-child(1) {
        background: url(./../assets/image/btn1.png) no-repeat;
      }
      &:nth-child(2) {
        background: url(./../assets/image/btn2.png) no-repeat;
      }
      &:nth-child(3) {
        background: url(./../assets/image/btn3.png) no-repeat;
      }
      &:nth-child(4) {
        background: url(./../assets/image/btn4.png) no-repeat;
      }
    }
  }
}
.bolt {
  text-align: center;
}
h2 {
  font-size: 26px;
}
.circle {
  background: url(./../assets/image/circlebg.png) no-repeat;
  width: 668px;
  height: 668px;
  margin: 65px auto 0;
  position: relative;
}
.shape {
  width: 70px;
  text-align: center;
  line-height: 62px;
  font-size: 24px;
  position: absolute;
  background: url(./../assets/image/shape1.png) no-repeat;
  span {
    position: absolute;
    top: -44px;
    width: 70px;
    text-align: center;
    left: 0;
  }
}
.btn_wrap {
  position: absolute;
  bottom: 0;
  right: -400px;
  .compass {
    float: left;
    font-size: 12px;
  }

  .prev,
  .next {
    float: left;
    padding-left: 30px;
    width: 101px;
    line-height: 39px;
    background: url(./../assets/image/next.png) no-repeat;
  }
  .prev {
    margin-left: 40px;
    margin-right: 12px;
    background: url(./../assets/image/prev.png) no-repeat;
  }
}
</style>
