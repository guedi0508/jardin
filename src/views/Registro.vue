<template>
  <div class="background-container">
    <div class="register-container">
      <h2>Registro</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="name">Nombre Completo:</label>
          <input v-model="name" type="text" required placeholder="Introduce tu nombre completo" />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input v-model="email" type="email" required placeholder="Introduce tu correo" />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input v-model="password" type="password" required placeholder="Crea una contraseña" />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p class="login-link">¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión aquí</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    const response = await axios.post('http://localhost:3000/registro', {
      nombre: name.value,
      email: email.value,
      password: password.value,
    });

    alert(response.data.message);
    router.push('/login');
  } catch (error) {
    console.error('Error detallado:', error);
    alert(error.response?.data?.message || 'Error al registrar');
  }
};
</script>

<style scoped>
.background-container {
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #1f1c2c, #928dab);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

.register-container {
  width: 100%;
  max-width: 450px;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  font-size: 1rem;
  font-weight: 600;
  color: #444;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 12px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #8e44ad;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(142, 68, 173, 0.2);
  outline: none;
}

button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #8e44ad, #6a11cb);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 1rem;
}

button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(142, 68, 173, 0.4);
}

.login-link {
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #666;
}

.login-link a {
  color: #8e44ad;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.login-link a:hover {
  color: #6a11cb;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .register-container {
    width: 90%;
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;
  }

  input {
    padding: 0.9rem;
  }

  button {
    padding: 1rem;
  }
}
</style>