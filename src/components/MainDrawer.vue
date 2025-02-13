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
  >
    <q-list>
      <q-item
        v-for="(menuItem, index) in menu"
        :key="index"
        clickable
        @click="selectMenuItem(menuItem.id)"
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
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
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
  emits: ["update:showMenu", "select-menu-item"],
  setup(props, { emit }) {
    const localShowMenu = ref(true);

    const selectMenuItem = (id) => {
      emit("select-menu-item", id);
    };

    return {
      localShowMenu,
      selectMenuItem,
    };
  },
});
</script>
<style scoped>
/* Боковое меню */
.q-drawer {
  background-color: #59594a; /* Темный цвет для фона */
}

/* Элементы списка */

.q-item:hover {
  background-color: #a3bfa8; /* Светло-зеленый цвет при наведении */
  color: #59594a; /* Темный цвет для текста при наведении */
}

/* Заголовок элемента */
.q-item-label {
  font-size: 16px;
  font-weight: 500;
}
</style>
