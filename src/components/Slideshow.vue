<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { isMobile } from '~/composables/deviceType'

const totalImages = 27
const slides = ref(
  Array.from({ length: totalImages }, (_, i) => `/feedback/feedback${i + 1}.jpg`),
)
</script>

<template>
  <Carousel :items-to-show="isMobile ? 1.95 : 3.95" :wrap-around="true" :transition="500">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <img :src="slide" alt="Slideshow image" max-h-120>
      </div>
    </Slide>
    <template #addons>
      <Navigation v-if="slides.length > 1" />
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
.carousel__slide {
  padding: 1rem;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.3;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 0.6;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 0.6;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__next,
.carousel__icon {
  fill: var(--btn-text-color);
  background-color: var(--btn-bg-color);
  border-radius: 30%;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

html.dark .carousel__pagination-button::after {
  background: white;
}

html.dark .carousel__pagination-button--active::after,
.carousel__pagination-button--active::after {
  background-color: var(--btn-bg-color);
}
</style>
