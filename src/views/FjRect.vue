<template>
  <div class="list">
    <div class="list_item" v-for="(item, key) in data" :key="key">
      <ul class="status">
        <li>
          <span class="name green">运行</span
          ><span class="num">{{ item.status[0] }} 台</span>
        </li>
        <li>
          <span class="name purple">检修</span
          ><span class="num">{{ item.status[1] }} 台</span>
        </li>
        <li>
          <span class="name red">故障</span
          ><span class="num">{{ item.status[2] }} 台</span>
        </li>
        <li>
          <span class="name yellow">待风</span
          ><span class="num">{{ item.status[3] }} 台</span>
        </li>
        <li>
          <span class="name gray">离线</span
          ><span class="num">{{ item.status[4] }} 台</span>
        </li>
      </ul>
      <dl>
        <dt>{{ key }}</dt>
        <dd>
          <span v-for="(v, k) in item.num" :key="k"
            >{{ v }}<img src="images/icon2.png"
          /></span>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        大同: {
          status: [74, 16, 0, 0, 0],
          num: []
        },
        平鲁: {
          status: [50, 10, 10, 2, 18],
          num: []
        },
        寿阳: {
          status: [70, 1, 0, 19, 0],
          num: []
        },
        临猗: {
          status: [40, 38, 10, 2, 0],
          num: []
        }
      }
    };
  },

  created() {
    let array = [91, 90, 50, 99];
    let index = 0;
    for (let v of Object.values(this.data)) {
      for (let i = 0; i < array[index]; i++) {
        v.num.push(i);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.green {
  background: #75e2a7;
}
.purple {
  background: #a53cc0;
}

.red {
  background: #ea3839;
}

.yellow {
  background: #ebe362;
}
.gray {
  background: #b1aeae;
}

.list {
  display: flex;
  flex-direction: column;
}
.status {
  padding-left: 217px;
  li {
    float: left;
    font-size: 20px;
    padding-right: 35px;
    line-height: 24px;
    .name {
      font-size: 18px;
      width: 52px;
      display: inline-block;
      height: 24px;
      text-align: center;
      margin-right: 15px;
      color: #06144c;
    }
  }
}
.list_item {
  padding-bottom: 15px;

  dl {
    display: flex;
    padding-top: 20px;
    clear: both;
    dt {
      flex: 0 0 187px;
      text-align: center;
      margin-bottom: 10px;
      font-size: 32px;
      background-color: #1276d9;
      &:after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
      }
    }
    dd {
      padding-left: 30px;
      span {
        display: inline-block;
        position: relative;
        margin-right: 14px;
        font-size: 18px;
        line-height: 24px;
        height: 24px;
        width: 52px;
        padding-right: 12px;
        background-color: #06487f;
        border: 1px solid #3579a2;
        text-align: center;
        margin-bottom: 10px;
        img {
          position: absolute;
          right: 1px;
          top: 1px;
        }
      }
    }
  }
}
</style>
