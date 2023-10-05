<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { isMobile } from '~/composables/deviceType'

const itemsToShow = ref(isMobile.value ? 1 : 3.95)

const slides = ref([
  '/feedback/feedback1.jpg',
  '/feedback/feedback2.jpg',
  '/feedback/feedback3.jpg',
  '/feedback/feedback4.jpg',
  '/feedback/feedback5.jpg',
  '/feedback/feedback6.jpg',
  '/feedback/feedback7.jpg',
  '/feedback/feedback8.jpg',
  '/feedback/feedback9.jpg',
  '/feedback/feedback10.jpg',
  '/feedback/feedback11.jpg',
  '/feedback/feedback12.jpg',
  '/feedback/feedback13.jpg',
  '/feedback/feedback14.jpg',
  '/feedback/feedback15.jpg',
  '/feedback/feedback16.jpg',
  '/feedback/feedback17.jpg',
  '/feedback/feedback18.jpg',
  '/feedback/feedback19.jpg',
  '/feedback/feedback20.jpg',
  '/feedback/feedback21.jpg',
])
</script>

<template>
  <Carousel :items-to-show="itemsToShow" :wrap-around="true" :transition="500">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <img :src="slide" alt="Slideshow image">
      </div>
    </slide>
    <template #addons>
      <Navigation v-if="slides.length > 1" />
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
.carousel__slide {
    padding: 5px;
    max-height: 33rem;
}

.carousel__slide>img {
    max-width: 30%;
    max-height: 100%;
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
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
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
</style>
