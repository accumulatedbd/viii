<template>
  <div class="flex">
    <div class="auto">
      数据：{{ count }}
      <p>
        <button @click="add">增加</button>
      </p>
      <p><button @click="reduce">减少</button></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
    reduce() {
      this.count -= 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  height: 100%;
  .auto {
    margin: auto;
  }
}
</style>
