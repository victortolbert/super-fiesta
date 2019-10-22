<template>
  <div id="app">
    <h1 class="mb-4 py-4 p-8 text-2xl font-semibold">
      Testing
    </h1>

    <Splitpanes class="default-theme bg-gray-200">
      <Pane size="99" class="h-screen">
        <div class="h-screen bg-white p-8 shadow-lg rounded-lg w-full m-8">
          Testing
        </div>
      </Pane>
      <Pane size="1" />
    </Splitpanes>
  </div>
</template>

<script>
// Documentation @https://antoniandre.github.io/splitpanes.
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  components: { Splitpanes, Pane },
}
</script>

<style lang="scss" scoped>
.splitpanes {
  .splitpanes__pane {
    box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
  }
}

.splitpanes span {
  font-family: Helvetica, Arial, sans-serif;
  color: #fff;
  opacity: 0.7;
}
</style>
