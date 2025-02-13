<template>
  <div>
    <app-dashboard />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppDashboard from "src/components/AppDashboard.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    AppDashboard,
  },
});
</script>
