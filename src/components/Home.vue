<template>
  <div
        
    m-1 mb-9 border-pink-9 rounded-2 p-4 opacity-75 transition-all-900 hover:mx-9 hover:border-1 hover:rounded-10 hover:bg-gray-8 hover:p-1 hover:opacity-100 
  >
    <div text-6xl>
      <div i-carbon-campsite inline-block />
    </div>

    <div class="hero">
      <h1 text-3xl>
        Welcome to the Hero Section
      </h1>
      <div class="welcome-message" mt-12 p-5>
        <img src="logo-light.jpeg" alt="Welcome Image">
        <p>This is a welcome message.</p>
      </div>
    </div>
    <div py-4 />
  </div>
</template>

<style scoped>
.welcome-message {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.welcome-message img {
    width: 300px;
    margin-right: 10px;
}
</style>
