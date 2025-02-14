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
  emits: ["update:show-menu", "select-menu-item"],
  setup(props, { emit }) {
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

    watch(
      () => localShowMenu.value,
      (newValue) => {
        emit("update:show-menu", newValue);
      }
    );

    const selectMenuItem = (id) => {
      if (props.fullWidthMenu || (!props.fullWidthMenu && id !== undefined)) {
        emit("select-menu-item", id);
      }
    };

    return {
      localShowMenu,
      selectMenuItem,
    };
  },
});
</script>

<style scoped>
/* Стили для обычного режима */
.q-item {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.q-item:hover {
  background-color: #f5f5f5; /* Светло-серый фон при наведении */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Тень при наведении */
}

/* Стили для мини-режима */
.q-item.mini-mode {
  padding-left: 8px; /* Уменьшаем отступ слева */
}

.q-item.mini-mode .q-item__section--avatar {
  margin-right: 0; /* Убираем отступ справа от иконки */
}

.q-item.mini-mode .q-item__section--main {
  display: none; /* Скрываем текст в мини-режиме */
}

.q-item.mini-mode:hover {
  background-color: #f5f5f5; /* Светло-серый фон при наведении на иконку */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Тень при наведении на иконку */
}
</style>
