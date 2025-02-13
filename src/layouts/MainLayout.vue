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
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <main-drawer
      :menu="menu"
      :full-width-menu="fullWidthMenu"
      v-model:show-menu="showMenu"
      @select-menu-item="selectMenuItem"
    />
    <q-page-container style="padding-left: 57px">
      <index-page :rows="selectedRows" />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useQuasar } from "quasar";
import IndexPage from "src/pages/IndexPage.vue";
import MainDrawer from "src/components/MainDrawer.vue";
import { menuArr } from "src/static/menu";

export default defineComponent({
  name: "MainLayout",
  components: {
    IndexPage,
    MainDrawer,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const selectedGroupId = ref(0);
    const fullWidthMenu = ref(false);
    const quasar = useQuasar();
    const showMenu = ref(true);
    const isMobile = computed(() => quasar.screen.lt.md);
    if (isMobile.value) {
      showMenu.value = false;
      fullWidthMenu.value = true;
    }

    const selectedRows = computed(() => {
      const group = menuArr.find((group) => group.id === selectedGroupId.value);
      return group ? group.rows : [];
    });

    const toggleMenu = () => {
      fullWidthMenu.value = !fullWidthMenu.value;
    };

    const selectMenuItem = (id) => {
      selectedGroupId.value = id;
    };

    const menu = [
      { id: 0, title: "Clear", icon: "close" },
      { id: 1, title: "Тестовый текст", icon: "settings" },
      { id: 2, title: "Справочники", icon: "key" },
      { id: 3, title: "Справочники тест", icon: "storage" },
    ];

    return {
      leftDrawerOpen,
      menu,
      selectedRows,
      toggleMenu,
      fullWidthMenu,
      showMenu,
      selectMenuItem,
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
