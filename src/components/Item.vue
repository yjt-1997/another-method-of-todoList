<template>
  <div>
    <input name="todo-list" type="checkbox" v-model="item.isCompleted" @change="update" />
    <span>{{item.content}}</span>
  </div>
</template>
<script>
export default {
  name: "Item",
  props: {
    item: Object
  },
  methods: {
    update() {
      this.$store.commit("update", this.item.id);
    }
  }
};
</script>
<style></style>