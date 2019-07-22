<template>
  <div>
    <ul id="filters">
      <li>
        <a href="#" @click="display('All')">ALL</a>
      </li>
      <li>
        <a href="#" @click="display('Actived')">Active</a>
      </li>
      <li>
        <a href="#" @click="display('Completed')">Complete</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Filters",
  methods: {
    display(flag) {
      if (flag == "All") {
        this.$emit("clickFilter", this.$store.getters.getAllItems);
      } else if (flag == "Actived") {
        this.$emit("clickFilter", this.$store.getters.getActiveItems);
      } else {
        this.$emit("clickFilter", this.$store.getters.getCompletedItems);
      }
    }
  }
};
</script>
<style></style>