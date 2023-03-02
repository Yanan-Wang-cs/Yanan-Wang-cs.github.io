<template>
  <div class="mt-10">
    <p class="title font-bold text-xl my-8">{{ t("menu.education") }}</p>
    <div class="flex flex-row justify-around pt-10">
      <el-card v-for="item in tm('education')" :key="item.icon" class="w-5/12">
        <img :src="`/image/${item.icon}.png`" class="image w-16" />
        <div style="padding: 14px">
          <div class="text-lg">{{ item.title }}</div>
          <time class="time text-sm block mb-8">{{ item.date }}</time>
          <div
            class="bottom flex flex-row justify-between items-center text-left"
          >
            <div>
              <p>{{ item.major }}</p>
              <p class="mt-8">
                <b>{{ item.courses.title }}</b
                >:
              </p>
              <p>{{ item.courses.content }}</p>
              <p class="mt-8">
                <b>{{ item.gpa.title }}</b
                >:{{ item.gpa.content }}
              </p>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "EducationView",
  setup() {
    const { t, tm } = useI18n();
    return { t, tm };
  },
});
</script>
