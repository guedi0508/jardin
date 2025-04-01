<script setup> 
import gardenImage from '@/assets/SMARTGARDEN.jpg';
</script>

<template>
  <div class="container">
    <div class="hero">
      <div class="hero-content">
        <h1>Bienvenido a Smart Garden </h1>
        <p>Transforma tu jardín en un espacio inteligente y sostenible. Con nuestra tecnología, podrás monitorear y controlar el riego, la temperatura y mucho más, todo desde la palma de tu mano.</p>
      </div>
      <img :src="gardenImage" alt="Smart Garden" class="garden-image" />
    </div>

    <div class="about">
      <h2>¿Qué es Smart Garden?</h2>
      <p>Smart Garden es una solución innovadora que te permite automatizar el cuidado de tu jardín mediante dispositivos inteligentes. Con nuestra app, puedes controlar el riego, gestionar los sensores de temperatura y humedad, y recibir notificaciones cuando tu jardín lo necesite.</p>
    </div>

    <div class="instagram-container">
      <h2>Síguenos en Instagram 📸</h2>
      <div class="instagram-background">
        <iframe
          src="https://www.instagram.com/p/DH4MmQMSde_/embed"
          width="400"
          height="480"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  color: #333;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
}

.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #a5d6a7, #81c784);
  width: 100%;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.hero-content {
  text-align: left;
  max-width: 500px;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  color: #2e7d32;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  color: #555;
}

.garden-image {
  width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.about {
  text-align: center;
  max-width: 800px;
  margin-top: 40px;
}

.about h2 {
  font-size: 2rem;
  color: #1b5e20;
  margin-bottom: 10px;
}

.about p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

.instagram-container {
  text-align: center;
  width: 100%;
  padding: 2rem;
  margin-top: 40px;
}

h2 {
  font-size: 2rem;
  color: #1b5e20;
}

.instagram-background {
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  margin: 0 auto;
}

iframe {
  border-radius: 10px;
  width: 100%;
  height: 480px;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .garden-image {
    width: 100%;
    max-width: 300px;
    margin-top: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  iframe {
    height: 300px;
  }
}
</style>
