<template>
  <q-drawer
    :dense="!fullWidthMenu"
    :elevated="fullWidthMenu"
    :mini="!fullWidthMenu"
    :width="220"
    mini-to-overlay
    overlay
    persistent
    v-model="localShowMenu"
    @update:model-value="$emit('update:show-menu', $event)"
  >
    <q-list>
      <q-item
        v-for="(menuItem, index) in menu"
        :key="index"
        clickable
        @click="selectMenuItem(menuItem.id)"
        :class="{ 'mini-mode': !fullWidthMenu }"
      >
        <q-item-section avatar>
          <q-icon :name="menuItem.icon" size="20px" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ menuItem.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  name: "MainDrawer",
  props: {
    menu: {
      type: Array,
      required: true,
    },
    fullWidthMenu: {
      type: Boolean,
      required: true,
    },
    showMenu: {
      type: Boolean,
      required: true,
    },
  },

  emits: ["update:show-menu", "select-menu-item"],
  data() {
    return {
      localShowMenu: this.showMenu,
    };
  },
  watch: {
    showMenu(newVal) {
      this.localShowMenu = newVal;
    },
    localShowMenu(newVal) {
      this.$emit("update:show-menu", newVal);
    },
  },
  methods: {
    selectMenuItem(id) {
      if (this.fullWidthMenu || (!this.fullWidthMenu && id !== undefined)) {
        this.$emit("select-menu-item", id);
      }
    },
  },
};
</script>

<style scoped>
.q-item {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.q-item:hover {
  background-color: #f5f5f5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.q-item.mini-mode {
  padding-left: 8px;
}
.q-item.mini-mode .q-item__section--avatar {
  margin-right: 0;
}
.q-item.mini-mode .q-item__section--main {
  display: none;
}
.q-item.mini-mode:hover {
  background-color: #f5f5f5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
