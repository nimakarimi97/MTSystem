<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="wrapper">
    <!-- checked is the day mode -->
    <input
      type="checkbox"
      name="checkbox"
      class="switch"
      :checked="isDark ? false : true"
      @click="toggleDark()"
    >
  </div>
</template>

<style>
.switch {
  --switch-width: 70px;
  --switch-height: 25px;
  --switch-after-width: 22px;
  --switch-after-height: 22px;
  --switch-before-width: 12px;
  --switch-before-height: 12px;
  position: relative;
  width: var(--switch-width);
  height: var(--switch-height);
  margin: 0px;
  appearance: none;
  -webkit-appearance: none;
  background-color: rgb(4, 52, 73);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
  transition: background-image 0.7s ease-in-out;
  outline: none;
  cursor: pointer;
  overflow: hidden;
}

.switch:checked {
  background-color: rgb(0, 195, 255);
  background-size: cover;
  transition: background-image 1s ease-in-out;
}

.switch:after {
  content: "";
  width: var(--switch-after-width);
  height: var(--switch-after-height);
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: 2px;
  top: 2px;
  transform: translateX(0px);
  animation: off 0.7s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  box-shadow: inset 5px -5px 4px rgba(53, 53, 53, 0.3);
}

@keyframes off {
  0% {
    transform: translateX(80px);
    width: var(--switch-after-width);
  }

  50% {
    width: 75px;
    border-radius: 25px;
  }

  100% {
    transform: translateX(0px);
    width: var(--switch-after-width);
  }
}

.switch:checked:after {
  animation: on 0.7s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  box-shadow: inset -5px -5px 4px rgba(53, 53, 53, 0.3);
}

@keyframes on {
  0% {
    transform: translateX(0px);
    width: var(--switch-after-width);
  }

  50% {
    width: 75px;
    border-radius: 25px;
  }

  100% {
    transform: translateX(calc(var(--switch-width) / 1.6));
    width: var(--switch-after-width);
  }
}

.switch:checked:before {
  content: "";
  width: var(--switch-before-width);
  height: var(--switch-before-height);
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 7px;
  transform-origin: 43px 10px;
  background-color: transparent;
  box-shadow: 5px -1px 0px #fff;
  filter: blur(0px);
  animation: sun 0.7s forwards ease;
}

@keyframes sun {
  0% {
    transform: rotate(170deg);
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
  }

  50% {
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
  }

  90% {
    background-color: #f5daaa;
    box-shadow: 0px 0px 10px #f5deb4, 0px 0px 20px #f5deb4, 0px 0px 30px #f5deb4,
      inset 0px 0px 2px #efd3a3;
    filter: blur(1px);
  }

  100% {
    transform: rotate(0deg);
    background-color: #f5daaa;
    box-shadow: 0px 0px 10px #f5deb4, 0px 0px 20px #f5deb4, 0px 0px 30px #f5deb4,
      inset 0px 0px 2px #efd3a3;
    filter: blur(1px);
  }
}

/* moon */
.switch:before {
  content: "";
  width: var(--switch-before-width);
  height: var(--switch-before-height);
  border-radius: 50%;
  position: absolute;
  left: 18px;
  top: 4px;
  filter: blur(1px);
  background-color: #f5daaa;
  box-shadow: 0px 0px 10px #f5deb4, 0px 0px 20px #f5deb4, 0px 0px 30px #f5deb4,
    inset 0px 0px 2px #efd3a3;
  transform-origin: 25px 8px;
  animation: moon 0.7s forwards ease;
}

@keyframes moon {
  0% {
    transform: rotate(0deg);
    filter: blur(1px);
  }

  50% {
    filter: blur(1px);
  }

  90% {
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
  }

  100% {
    transform: rotate(170deg);
    background-color: transparent;
    box-shadow: 5px -1px 0px #fff;
    filter: blur(0px);
  }
}
</style>
