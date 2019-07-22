<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <Item :item="item"></Item>
      </li>
    </ol>
  </div>
</template>
<script>
import Item from "./Item";
export default {
  name: "List",
  components: {
    Item
  },
  props: {
    items: Array
  }
};
</script>
<style></style>