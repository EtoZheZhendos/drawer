<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md">
      <!-- Карточка 1 -->
      <div class="col-12 col-md-6">
        <q-card class="my-card">
          <q-img src="https://via.placeholder.com/600x300" basic>
            <div class="absolute-bottom text-h6">Заголовок карточки 1</div>
          </q-img>
          <q-card-section>
            <p>
              Это описание первой карточки. Здесь можно разместить любой текст
              или дополнительные элементы.
            </p>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Подробнее" color="primary" />
          </q-card-actions>
        </q-card>
      </div>

      <!-- Карточка 2 -->
      <div class="col-12 col-md-6">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Заголовок карточки 2</div>
            <div class="text-subtitle2">Подзаголовок</div>
          </q-card-section>
          <q-card-section>
            <p>
              Это вторая карточка. Она может содержать текст, кнопки или другие
              элементы.
            </p>
          </q-card-section>
          <q-separator />
          <q-card-actions>
            <q-btn flat label="Кнопка 1" color="primary" />
            <q-btn flat label="Кнопка 2" color="secondary" />
          </q-card-actions>
        </q-card>
      </div>

      <!-- Список элементов -->
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Список элементов</div>
          </q-card-section>
          <q-list bordered separator>
            <q-item v-for="item in items" :key="item.id" clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>{{ item.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TestPage",
  data() {
    return {
      items: [
        { id: 1, label: "Элемент 1", icon: "folder" },
        { id: 2, label: "Элемент 2", icon: "person" },
        { id: 3, label: "Элемент 3", icon: "settings" },
        { id: 4, label: "Элемент 4", icon: "mail" },
      ],
    };
  },
});
</script>

<style scoped>
.my-card {
  border-radius: 8px;
}
</style>
