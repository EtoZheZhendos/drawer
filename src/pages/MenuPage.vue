<template><div></div></template>
<script>
import { menuArr } from "src/static/menu";

export default {
  name: "MenuPage",
  components: {},
  data() {
    return {
      selectedGroupId: null,
    };
  },
  computed: {
    selectedRows() {
      const group = menuArr.find((group) => group.id === this.selectedGroupId);
      return group ? group.rows : [];
    },
  },
  created() {
    this.selectedGroupId = parseInt(this.$route.params.id, 10);
  },
};
</script>
