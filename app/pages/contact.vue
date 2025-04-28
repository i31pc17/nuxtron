<template>
  <section class="max-w-2xl mx-auto text-center mb-20">
    <h1 class="text-5xl font-bold mb-4">Contact Us</h1>
    <p class="text-gray-500 dark:text-gray-400 text-lg mb-8">
      We'd love to hear from you! Please fill out the form below.
    </p>

    <form class="space-y-6">
      <!-- Name Input -->
      <div class="text-left">
        <label class="block text-sm font-medium mb-1">Name</label>
        <UInput size="lg" placeholder="Your Name" />
      </div>

      <!-- Email Input -->
      <div class="text-left">
        <label class="block text-sm font-medium mb-1">Email</label>
        <UInput size="lg" placeholder="you@example.com" type="email" />
      </div>

      <!-- Message Textarea -->
      <div class="text-left">
        <label class="block text-sm font-medium mb-1">Message</label>
        <UTextarea size="lg" placeholder="Your message..." :rows="5" />
      </div>

      <!-- Submit Button -->
      <div class="pt-4">
        <UButton size="lg" color="primary" block>
          Send Message
        </UButton>
      </div>
    </form>
  </section>
</template>
