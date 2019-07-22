<template>
  <div>
    <input type="text" v-model="item" />
    <button @click="addItem">Add</button>
  </div>
</template>
<script>
export default {
  name: "AddItem",
  data() {
    return {
      item: ""
    };
  },
  methods: {
    addItem() {
      this.$store.commit("addItem", { content: this.item, isCompleted: false });
      this.$emit("toInit");
      this.item = "";
    }
  }
};
</script>
<style></style>