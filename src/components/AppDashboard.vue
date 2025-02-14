<template>
  <div class="dashboard-container">
    <main-drawer
      :menu="menu"
      :full-width-menu="localFullWidthMenu"
      v-model:show-menu="localShowMenu"
      @select-menu-item="selectMenuItem"
    />

    <div class="cards-container q-pa-md row items-start q-gutter-md">
      <main-card v-for="item in selectedRows" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, watch } from "vue";
import MainDrawer from "src/components/MainDrawer.vue";
import MainCard from "src/components/MainCard.vue";
import { menuArr } from "src/static/menu";

export default defineComponent({
  name: "AppDashboard",
  components: {
    MainDrawer,
    MainCard,
  },
  props: {
    showMenu: {
      type: Boolean,
      required: true,
    },
    fullWidthMenu: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:full-width-menu", "update:show-menu"],
  setup(props, { emit }) {
    const selectedGroupId = ref(0);

    const localFullWidthMenu = ref(props.fullWidthMenu);
    watch(
      () => props.fullWidthMenu,
      (newValue) => {
        localFullWidthMenu.value = newValue;
      }
    );
    watch(localFullWidthMenu, (newValue) => {
      emit("update:full-width-menu", newValue);
    });

    const localShowMenu = ref(props.showMenu);
    watch(
      () => props.showMenu,
      (newValue) => {
        localShowMenu.value = newValue;
      }
    );
    watch(
      () => localShowMenu.value,
      (newValue) => {
        emit("update:show-menu", newValue);
      }
    );

    const selectedRows = computed(() => {
      const group = menuArr.find((group) => group.id === selectedGroupId.value);
      return group ? group.rows : [];
    });

    const menu = [
      { id: 0, title: "Clear", icon: "close" },
      { id: 1, title: "Тестовый текст", icon: "settings" },
      { id: 2, title: "Справочники", icon: "key" },
      { id: 3, title: "Справочники тест", icon: "storage" },
    ];

    const selectMenuItem = (id) => {
      if (id !== selectedGroupId.value) selectedGroupId.value = id;
    };

    return {
      localFullWidthMenu,
      localShowMenu,
      menu,
      selectedRows,
      selectMenuItem,
    };
  },
});
</script>

<style scoped>
/* Стили для контейнера */
.dashboard-container {
  display: flex;
  flex-direction: row;
}

/* Стили для карточек */
.cards-container {
  flex: 1;
  padding-left: 57px; /* Отступ для бокового меню */
}
</style>
