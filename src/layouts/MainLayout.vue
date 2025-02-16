<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="flex justify-between">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleMenu"
        />
        <q-btn flat round icon="arrow_left" @click="goToIndexPage" />
        <q-btn flat round icon="arrow_right" @click="goToTestPage" />
        <q-toolbar-title> Квазар.Статистика </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container :style="{ paddingLeft: isMobile ? '0px' : '57px' }">
      <app-dashboard
        v-model:show-menu="showMenu"
        v-model:full-width-menu="fullWidthMenu"
        :initial-selected-group-id="parseInt($route.params.id, 10)"
      />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from "quasar";
import AppDashboard from "src/components/AppDashboard.vue";

export default {
  name: "MainLayout",
  components: {
    AppDashboard,
  },
  data() {
    return {
      showMenu: true,
      fullWidthMenu: false,
    };
  },
  computed: {
    isMobile() {
      return this.$q.screen.lt.md;
    },
  },
  watch: {
    isMobile(newVal) {
      if (newVal) {
        this.showMenu = false;
        this.fullWidthMenu = true;
      }
    },
  },
  methods: {
    toggleMenu() {
      this.fullWidthMenu = !this.fullWidthMenu;
    },
    goToIndexPage() {
      this.$router.push({ name: "IndexPage" });
    },
    goToTestPage() {
      this.$router.push({ name: "TestPage" });
    },
  },
};
</script>

<style scoped>
.q-header {
  background-color: #59594a;
  color: #ffffff;
}
.q-toolbar__title {
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
}
</style>
