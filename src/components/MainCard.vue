<template>
  <q-card
    class="q-ma-md cursor-pointer"
    style="width: 400px; height: 240px"
    @click="goTo(item)"
  >
    <q-img v-if="!!item.image" :src="item.image" basic style="height: 150px" />
    <q-card-section>
      <q-toolbar text-color="primary">
        <q-icon
          v-if="!!item.icon"
          :name="item.icon"
          class="q-pr-md"
          style="font-size: 1.8rem"
        />
        <q-toolbar-title style="white-space: normal; font-size: 18px">
          {{ item.title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-card-section>
    <q-separator inset />
    <q-card-section>
      <div v-if="!!item.text" class="text-body2">
        {{ item.text }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "MainCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goTo(item) {
      if (item.link) {
        window.location.href = item.link;
      }
    },
  },
};
</script>

<style scoped>
/* Карточка */
.q-card {
  background-color: #ffffff;
  border: 1px solid #a3bfa8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}
.q-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}
.q-img {
  border-bottom: 1px solid #a3bfa8;
}
.q-toolbar-title {
  color: #59594a;
  font-size: 18px;
  font-weight: bold;
}
.q-icon {
  color: #a3bfa8;
}
.text-body2 {
  color: #59594a;
  font-size: 14px;
}
.q-separator {
  background-color: #a3bfa8;
}
</style>
