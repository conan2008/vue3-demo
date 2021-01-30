<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>X: {{ x }} Y:{{ y }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useMouseCLick from "../hooks/useMouseClick";

export default defineComponent({
  setup() {
    const { x, y } = useMouseCLick();

    return {
      x,
      y
    };
  }
});
</script>
