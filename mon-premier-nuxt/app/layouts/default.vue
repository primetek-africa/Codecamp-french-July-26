<script setup></script>
<template>
    <div>
        <header>
        <h1>Mon aplication</h1>
        <nav>
            <NuxtLink to="/">Acceuil</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
        </nav>
        </header>

        <main>
              <slot />
        </main>

        <footer>
            <p>@ 2026 le footer</p>
        </footer>
    </div>
</template>