<script>
import { defineComponent, ref, computed } from "vue";
import MainDrawer from "src/components/MainDrawer.vue";
import MainCard from "src/components/MainCard.vue";
import { menuArr } from "src/static/menu";

export default defineComponent({
  name: "AppDashboard", // Изменено на многословное имя
  components: {
    MainDrawer,
    MainCard,
  },
  setup() {
    const fullWidthMenu = ref(false);
    const showMenu = ref(true);
    const selectedGroupId = ref(0);

    const selectedRows = computed(() => {
      const group = menuArr.find((group) => group.id === selectedGroupId.value);
      return group ? group.rows : [];
    });

    const menu = [
      { id: 0, title: "Clear", icon: "close" },
      { id: 1, title: "Тестовый текст", icon: "settings" },
      { id: 2, title: "Справочники", icon: "storage" },
      { id: 3, title: "Справочники тест", icon: "storage" },
    ];

    const selectMenuItem = (id) => {
      selectedGroupId.value = id;
    };

    return {
      fullWidthMenu,
      showMenu,
      menu,
      selectedRows,
      selectMenuItem,
    };
  },
});
</script>
<!--  -->
