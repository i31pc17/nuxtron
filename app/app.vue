<template>
  <UContainer class="py-8">
    <!-- Header -->
    <header class="flex justify-between items-center mb-12">
      <div class="text-2xl font-bold">
        MyApp
      </div>
      <nav class="flex gap-4">
        <UButton variant="ghost" to="/">Home</UButton>
        <UButton variant="ghost" to="/about">About</UButton>
        <UButton variant="ghost" to="/contact">Contact</UButton>
      </nav>
    </header>

    <!-- Main Page Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="text-center text-sm text-gray-400 dark:text-gray-600 mt-12">
      &copy; 2025 MyApp. All rights reserved.
    </footer>
  </UContainer>
</template>
