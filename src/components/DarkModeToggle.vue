<template>
  <div class="language-darkmode-toggle">
    <button
      class="mode-toggle"
      @click="toggleDarkMode"
      aria-label="Toggle dark/light mode"
    >
      <img
        :src="isDarkMode ? moonIcon : sunIcon"
        alt="Change to dark/light mode"
        class="mode-icon"
      />
    </button>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue';

export default {
  name: 'DarkModeToggle',

  setup() {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const savedTheme = localStorage.getItem('darkMode');
    const isDarkMode = ref(savedTheme ? savedTheme === 'true' : prefersDark);

    onMounted(() => {
      document.documentElement.setAttribute(
        'data-theme',
        isDarkMode.value ? 'dark' : 'light'
      );
    });

    const sunIcon = '/images/Dark-mode.png';
    const moonIcon = '/images/Light-mode.png';

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.documentElement.setAttribute(
        'data-theme',
        isDarkMode.value ? 'dark' : 'light'
      );
      localStorage.setItem('darkMode', isDarkMode.value.toString());
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('darkMode')) {
        isDarkMode.value = e.matches;
        document.documentElement.setAttribute(
          'data-theme',
          e.matches ? 'dark' : 'light'
        );
      }
    });

    watchEffect(() => {
      document.documentElement.setAttribute(
        'data-theme',
        isDarkMode.value ? 'dark' : 'light'
      );
    });

    return {
      isDarkMode,
      toggleDarkMode,
      moonIcon,
      sunIcon,
    };
  },
};
</script>

<style scoped>
:root {
  --color-background: #ffffff;
  --color-text: #000000;
}

[data-theme='dark'] {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-text-green: #518885;
}

.language-darkmode-toggle {
  position: absolute;
  top: 0;
  right: 85px;
}

.mode-toggle {
  background: none;
  border: none;
  cursor: pointer;
}

.mode-toggle:focus {
  outline: none;
}

.mode-toggle:focus-visible {
  outline: 2px solid rgb(16, 16, 16);
  outline-offset: 2px;
}

.mode-icon {
  width: 24px;
  height: 24px;
}
</style>
