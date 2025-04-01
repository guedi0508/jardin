<template>
  <div class="main-container">
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input v-model="email" type="email" required placeholder="Introduce tu correo" />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input v-model="password" type="password" required placeholder="Introduce tu contraseña" />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p class="register-link">
        ¿No tienes una cuenta? <router-link to="/registro">Regístrate aquí</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import axios from 'axios';

const store = useStore();
const router = useRouter();
const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      email: email.value,
      password: password.value,
    });
    alert(response.data.message);
    const user = { email: email.value, token: response.data.token };
    store.dispatch('auth/login', user);
    router.push('/jardin');
  } catch (error) {
    alert(error.response?.data?.message || 'Error al iniciar sesión');
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1f4037, #99f2c8); 
  background-size: cover;
}

.login-container {
  max-width: 420px;
  padding: 2.8rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px); 
  -webkit-backdrop-filter: blur(15px);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.3);
}

h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  text-transform: capitalize;
}

.form-group {
  margin-bottom: 1.6rem;
  text-align: left;
}

label {
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.4rem;
  display: block;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.7);
  color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
}

input:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 12px rgba(76, 175, 80, 0.5);
}

button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #4caf50, #2e7d32); 
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease;
}

button:hover {
  background: linear-gradient(135deg, #43a047, #1e7d32);
  transform: scale(1.05);
}

.register-link {
  margin-top: 1.8rem;
  font-size: 0.95rem;
  color: #444;
}

.register-link a {
  text-decoration: none;
  font-weight: 700;
  color: #2e7d32;
  transition: color 0.3s ease;
}

.register-link a:hover {
  color: #4caf50;
}

@media (max-width: 768px) {
  .login-container {
    padding: 2rem;
    width: 90%;
  }

  h2 {
    font-size: 1.8rem;
  }

  input {
    padding: 0.8rem;
  }

  button {
    padding: 0.9rem;
  }
}
</style>