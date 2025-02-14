<template>
  <div class="dashboard-container">
    <main-drawer
      :menu="menu"
      v-model:full-width-menu="localFullWidthMenu"
      v-model:show-menu="localShowMenu"
      @select-menu-item="selectMenuItem"
    />
    <div class="cards-container q-pa-md row items-start q-gutter-md">
      <main-card v-for="item in selectedRows" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import MainDrawer from "src/components/MainDrawer.vue";
import MainCard from "src/components/MainCard.vue";
import { menuArr } from "src/static/menu";

export default {
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
  data() {
    return {
      selectedGroupId: 0,
      localFullWidthMenu: this.fullWidthMenu,
      localShowMenu: this.showMenu,
    };
  },
  computed: {
    selectedRows() {
      const group = menuArr.find((group) => group.id === this.selectedGroupId);
      return group ? group.rows : [];
    },
    menu() {
      return [
        { id: 0, title: "Clear", icon: "close" },
        { id: 1, title: "Тестовый текст", icon: "settings" },
        { id: 2, title: "Справочники", icon: "key" },
        { id: 3, title: "Справочники тест", icon: "storage" },
      ];
    },
  },
  watch: {
    fullWidthMenu(newVal) {
      this.localFullWidthMenu = newVal;
    },
    localFullWidthMenu(newVal) {
      this.$emit("update:full-width-menu", newVal);
    },
    showMenu(newVal) {
      this.localShowMenu = newVal;
    },
    localShowMenu(newVal) {
      this.$emit("update:show-menu", newVal);
    },
  },
  methods: {
    selectMenuItem(id) {
      if (id === 0) {
        this.selectedGroupId = id;
      } else {
        this.$router.push({ name: "IndexPage" });
      }
      if (id !== this.selectedGroupId) this.selectedGroupId = id;
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: row;
}
.cards-container {
  flex: 1;
  padding-left: 57px;
}
</style>
