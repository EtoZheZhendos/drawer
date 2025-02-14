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

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container style="padding-left: 57px">
      <app-dashboard
        v-model:show-menu="showMenu"
        v-model:full-width-menu="fullWidthMenu"
      />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import AppDashboard from "src/components/AppDashboard.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    AppDashboard,
  },
  setup() {
    const quasar = useQuasar();
    const router = useRouter();

    const showMenu = ref(true);
    const fullWidthMenu = ref(false);
    const isMobile = computed(() => quasar.screen.lt.md);

    if (isMobile.value) {
      showMenu.value = false;
      fullWidthMenu.value = true;
    }

    const toggleMenu = () => {
      fullWidthMenu.value = !fullWidthMenu.value;
    };

    const goToIndexPage = () => {
      router.push({ name: "IndexPage" });
    };

    const goToTestPage = () => {
      router.push({ name: "TestPage" });
    };

    return {
      showMenu,
      fullWidthMenu,
      toggleMenu,
      goToIndexPage,
      goToTestPage,
    };
  },
});
</script>

<style scoped>
.q-header {
  background-color: #59594a; /* Темный цвет для фона */
  color: #ffffff; /* Светлый цвет для текста */
}
.q-toolbar__title {
  font-size: 15px;
  font-weight: bold;
  color: #ffffff; /* Цвет заголовка */
}
</style>
