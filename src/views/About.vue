<template>
  <div class="main-container">
    <div class="about-us">
      <h1>Sobre Nosotros 🌱</h1>
      <p>
        Bienvenido a Smart Garden. Aquí puedes controlar y monitorear tu jardín de manera inteligente.
      </p>

      <div class="image-container">
        <img src="@/assets/SMARTGARDEN.jpg" alt="Smart Garden" class="about-image" />
      </div>

      <p class="description">
        En Smart Garden, nos apasiona crear soluciones innovadoras para que puedas cuidar de tu jardín de forma más
        eficiente. Nuestro sistema te permite monitorear la salud de tus plantas, controlar el riego y mucho más, todo
        desde la comodidad de tu hogar.
      </p>

      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5639189309345!2d-103.53318189999999!3d20.4830966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f55f2173b24d1%3A0xb3fc2b0647d8a722!2sUniversidad%20Tecnol%C3%B3gica%20de%20la%20Zona%20Metropolitana%20de%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1742951326794!5m2!1ses-419!2smx"
          width="800"
          height="600"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background: linear-gradient(to right, #f0f8ff, #e0f7fa); 
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}

.about-us {
  background-color: #ffffff;
  color: #333;
  padding: 3rem;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 950px;
  margin: 2rem auto;
  transition: transform 0.3s ease-in-out;
}

.about-us:hover {
  transform: translateY(-10px);
}

h1 {
  font-size: 3.2rem;
  color: #2e7d32;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #555;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.about-image {
  width: 350px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.about-image:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-top: 1rem;
  text-align: justify;
  padding: 0 1rem;
}

.map-container {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .about-image {
    width: 280px;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.1rem;
  }

  .map-container iframe {
    width: 100%;
    height: 300px;
  }

  .about-us {
    padding: 2rem;
  }
}

iframe {
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}
</style>