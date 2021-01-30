import { ref, onMounted, onUnmounted } from "vue";

function useMouseCLick() {
  const [x, y] = [ref(0), ref(0)];
  const onMouseClick = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    document.addEventListener("click", onMouseClick);
  });

  onUnmounted(() => {
    document.removeEventListener("click", onMouseClick);
  })

  return { x, y }
}

export default useMouseCLick