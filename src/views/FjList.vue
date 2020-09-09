<template>
  <div>
    <ul class="tabs">
      <li v-for="(v, k) in tabs" :key="k">
        <span :class="k === 2 ? 'active' : ''">{{ v }}</span>
      </li>
    </ul>
    <ul class="info">
      <li>装机容量:99mW</li>
      <li>风机数量:30 台</li>
      <li><span class="green">运行</span> 21台</li>
      <li><span class="purple">检修</span> 5 台</li>
      <li><span class="red">故障</span> 2 台</li>
      <li><span class="yellow">待风</span> 1 台</li>
      <li><span class="gray">离线</span> 1 台</li>
      <li>平均风速:13m/s</li>
      <li>日均风速:13m/s</li>
      <li>月均风速:13m/s</li>
      <li>总有功功率:25.40MW</li>
      <li>日发电量:39.69万kw-h</li>
      <li>年发电量:1.34万kw-h</li>
      <li>总发电量:59万kw-h</li>
    </ul>
    <table border="1" bordercolor="#27478e" cellspacing="0">
      <tr v-for="(item, k) in data" :key="k">
        <td class="name">{{ k }}</td>
        <td>
          <dl v-for="(dl, index) in item" :key="index">
            <router-link
              :to="{ name: 'ListDetail', params: { id: index } }"
              tag="dt"
              :class="dt.status"
              v-for="(dt, i) in dl.list"
              :key="i"
            >
              <img src="images/icon1.png" alt="" class="icon" />
              <h2>{{ dt.name }}</h2>
              <div class="item">
                <img src="images/icon3.png" />
                <p class="first">{{ dt.val1 }}m/s</p>
                <p>{{ dt.val2 }}kw</p>
              </div>
            </router-link>
            <!-- <dd>
              <p>{{ dl.name }}</p>
              <div class="label">挂牌</div>
            </dd> -->
          </dl>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["风场", "南澳", "饶平", " 汕尾", " 阳江", "红卫"],
      data: {
        一期: [
          {
            name: "华电三线",
            list: [
              {
                name: "D08",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D09",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D10",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D11",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D12",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D13",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D14",
                val1: "80.00",
                val2: "90.0",
                status: "purple"
              },
              {
                name: "D15",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D16",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              }
            ]
          },
          {
            name: "华电四线",
            list: [
              {
                name: "D01",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D02",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D03",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D04",
                val1: "80.00",
                val2: "90.0",
                status: "red"
              },
              {
                name: "D05",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D06",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "D07",
                val1: "80.00",
                val2: "90.0",
                status: "purple"
              }
            ]
          }
        ],
        二期: [
          {
            name: "华电一线",
            list: [
              {
                name: "N12",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "N13",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "N14",
                val1: "80.00",
                val2: "90.0",
                status: "gray"
              },
              {
                name: "N15",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "N16",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              }
            ]
          },
          {
            name: "华电二线",
            list: [
              {
                name: "N01",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "N02",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "N03",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "N04",
                val1: "80.00",
                val2: "90.0",
                status: "red"
              },
              {
                name: "N05",
                val1: "80.00",
                val2: "90.0",
                status: "green"
              },
              {
                name: "N06",
                val1: "80.00",
                val2: "90.0",
                status: "yellow"
              },
              {
                name: "N07",
                val1: "80.00",
                val2: "90.0",
                status: "purple"
              },
              {
                name: "N08",
                val1: "80.00",
                val2: "90.0",
                status: "purple"
              },
              {
                name: "N09",
                val1: "80.00",
                val2: "90.0",
                status: "purple"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.green {
  background-color: #34bd85;
}
.purple {
  background-color: #a53cc0;
}
.red {
  background-color: #db484f;
}
.yellow {
  background-color: #ebe362;
}
.gray {
  background-color: #b4b3b3;
}
.tabs li {
  width: 106px;
  height: 44px;
  padding-top: 7px;
  text-align: center;
  margin-right: 30px;
  float: left;
  background: url(/images/bg.png) no-repeat;
  span {
    width: 90px;
    height: 31px;
    line-height: 31px;
    display: inline-block;
    font-size: 20px;
    color: #aecbff;
    &:hover,
    &.active {
      background-color: #3b98df;
      color: #fff;
    }
  }
}
.info {
  clear: both;
  font-size: 20px;
  overflow: hidden;
  li {
    padding-top: 20px;
    padding-right: 30px;
    float: left;
    span {
      color: #06144c;
      display: inline-block;
      width: 52px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      margin-right: 10px;
    }
  }
}
table {
  margin-top: 20px;
  clear: both;
  width: 100%;
  border-collapse: collapse;

  background-color: #0d1f68;
  td.name {
    font-size: 32px;
    width: 34px;
    vertical-align: middle;
    padding-left: 40px;
    padding-right: 40px;
  }

  dl {
    position: relative;
    width: 100%;
    padding-right: 130px;
    padding-top: 20px;
    overflow: hidden;
    border-top: 1px solid #27478e;
    &:first-child {
      border-top: none;
    }
  }
  dd {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    p {
      font-size: 22px;
    }
    .label {
      background-color: #4f90c2;
      font-size: 18px;
      line-height: 29px;
      text-align: center;
    }
  }
  dt {
    float: left;
    margin-left: 12px;
    position: relative;
    width: 168px;
    height: 108px;
    padding: 10px;
    margin-bottom: 20px;
    h2 {
      font-size: 22px;
    }
    .icon {
      position: absolute;
      top: 10px;
      right: 10px;
    }
    .item {
      img {
        float: left;
        margin-right: 20px;
      }
      p {
        font-size: 16px;
        &.first {
          padding-top: 14px;
        }
      }
    }
  }
}
</style>
