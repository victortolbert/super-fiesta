<template>
  <select class="theme-switcher">
    <option value="default">
      Select A Theme
    </option>
    <option value="theme-1">
      Theme 1
    </option>
    <option value="theme-2">
      Theme 2
    </option>
    <option value="theme-3">
      Theme 3
    </option>
    <option value="theme-4">
      Theme 4
    </option>
    <option value="theme-5">
      Theme 5
    </option>
  </select>
</template>

<script>
export default {
  name: 'ThemeSelector',
  mounted() {
    var themeSwitcher = document.querySelector('.theme-switcher');
    themeSwitcher.addEventListener('change', function() {
      var themeName = this.value;
      console.log('name: ' + themeName);
      document.body.className = '';
      document.body.classList.add(themeName);
    });
  },
}
</script>
