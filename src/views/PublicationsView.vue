<template>
  <div class="w-2/3 text-left mx-auto mt-10 text-2xl">
    <p class="title font-bold text-xl my-8">{{ t("menu.publications") }}</p>
    <ol class="list-with-index">
      <li
        v-for="(item, index) in tm('publications')"
        :key="index"
        class="mb-8 text-base"
      >
        {{ item.title }}
        <span v-if="item.link"><a :href="item.link">[PDF]</a></span>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "PublicationsView",
  setup() {
    const { t, tm } = useI18n();
    return { t, tm };
  },
});
</script>
