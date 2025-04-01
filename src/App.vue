<template>
  <header>
    <nav>
      <div class="logo">
        <RouterLink to="/">
          <img :src="gardenLogo" alt="Smart Garden Logo" class="logo-image" />
          <span class="logo-text">Smart Garden</span>
        </RouterLink>
      </div>
      <ul class="nav-links">
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/about">Sobre Nosotros</RouterLink></li>
        <li v-if="!isAuthenticated"><RouterLink to="/login">Iniciar Sesión</RouterLink></li>
        <li v-if="!isAuthenticated"><RouterLink to="/registro">Registro</RouterLink></li>
        <li v-if="isAuthenticated"><RouterLink to="/jardin">Jardín</RouterLink></li>

        <li v-if="isAuthenticated"><button @click="logout">Cerrar Sesión</button></li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import gardenLogo from '@/assets/SMARTGARDEN.jpg';

const store = useStore();
const router = useRouter();
const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);

onMounted(() => {
  store.dispatch('auth/checkAuthStatus');
});

const logout = () => {
  store.dispatch('auth/logout');
  router.push('/login');
};
</script>

<style scoped>
body {
  background: linear-gradient(135deg, #e0f7fa, #c8e6c9);
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

header {
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  padding: 1.2rem 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo a {
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-text {
  margin-left: 0.8rem;
  font-size: 1.5rem;
  color: #f1f1f1;
}

.logo-image {
  width: 60px;
  height: auto;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links li {
  margin: 0;
}

nav a {
  text-decoration: none;
  color: #ecf0f1;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #42b983;
  transform: translateY(-2px);
}

button {
  background: linear-gradient(135deg, #e84118, #ff4757);
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

button:hover {
  background: #ff6b81;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .nav-links li {
    width: 100%;
  }

  nav a,
  button {
    width: 100%;
    text-align: center;
  }
}
</style>