<template>
  <div class="jardin-container">
    <h2>Bienvenido al Jardín Inteligente</h2>
  
    <div class="plantas-section">
      <h3>Monitoreo de Plantas</h3>
      <table class="plantas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Humedad</th>
            <th>Temperatura</th>
            <th>Riego</th>
            <th>Fecha Registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="planta in plantas" :key="planta.id">
            <td>{{ planta.id }}</td>
            <td>{{ planta.nombre }}</td>
            <td>{{ planta.humedad }}%</td>
            <td>{{ planta.temperatura }}°C</td>
            <td>{{ planta.riego ? '✅ Activo' : '❌ Inactivo' }}</td>
            <td>{{ planta.fechaRegistro }}</td>
            <td>
              <button @click="editarPlanta(planta)" class="btn editar">✏️ Editar</button>
              <button @click="eliminarPlanta(planta.id)" class="btn eliminar">🗑️ Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="formulario-planta">
        <h3>{{ modoEdicion ? '✏️ Editar Planta' : '🌱 Agregar Planta' }}</h3>
        <input v-model="plantaForm.nombre" placeholder="Nombre de la planta" />
        <input v-model.number="plantaForm.humedad" placeholder="Humedad (%)" />
        <input v-model.number="plantaForm.temperatura" placeholder="Temp. Ambiente (°C)" />
        <select v-model="plantaForm.riego">
          <option :value="true">✅ Riego Activo</option>
          <option :value="false">❌ Riego Inactivo</option>
        </select>
        <input v-model="plantaForm.fechaRegistro" type="date" :disabled="!modoEdicion" />
        <button @click="guardarPlanta" class="btn">
          {{ modoEdicion ? '💾 Actualizar' : '➕ Agregar' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const plantas = ref([
  { id: 1, nombre: 'Cactus', humedad: 35, temperatura: 27, riego: false, fechaRegistro: '2024-03-20' },
  { id: 2, nombre: 'Centella Asiática', humedad: 70, temperatura: 20, riego: true, fechaRegistro: '2024-03-21' },
  { id: 3, nombre: 'Nopal', humedad: 40, temperatura: 26, riego: true, fechaRegistro: '2024-03-19' },
  { id: 4, nombre: 'Suculentas', humedad: 55, temperatura: 22, riego: false, fechaRegistro: '2024-03-18' },
]);

const modoEdicion = ref(false);
const plantaForm = ref({ id: null, nombre: '', humedad: '', temperatura: '', riego: true, fechaRegistro: '' });

const guardarPlanta = () => {
  if (modoEdicion.value) {
    const index = plantas.value.findIndex((p) => p.id === plantaForm.value.id);
    plantas.value[index] = { ...plantaForm.value };
    modoEdicion.value = false;
    alert('✅ Planta actualizada correctamente.');
  } else {
    const nuevaPlanta = {
      ...plantaForm.value,
      id: plantas.value.length + 1,
      fechaRegistro: new Date().toISOString().slice(0, 10),
    };
    plantas.value.push(nuevaPlanta);
    alert('🌱 Planta agregada correctamente.');
  }
  limpiarFormulario();
};

const eliminarPlanta = (id) => {
  plantas.value = plantas.value.filter((p) => p.id !== id);
  alert('🗑️ Planta eliminada correctamente.');
};

const editarPlanta = (planta) => {
  plantaForm.value = { ...planta };
  modoEdicion.value = true;
};

const limpiarFormulario = () => {
  plantaForm.value = { id: null, nombre: '', humedad: '', temperatura: '', riego: true, fechaRegistro: '' };
};
</script>

<style scoped>
.jardin-container {
  font-family: 'Arial', sans-serif;
  margin: 20px;
  text-align: center;
  background-color: #f0f8ea;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2d6a4f;
}

.plantas-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: #f9fbe7;
  border-radius: 10px;
  overflow: hidden;
}

.plantas-table thead {
  background-color: #a3b18a;
  color: white;
}

.plantas-table th, .plantas-table td {
  padding: 12px;
  text-align: center;
}

.plantas-table tr:nth-child(even) {
  background-color: #e6f4ea;
}

.btn {
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.btn.editar {
  background-color: #ffb703;
  color: white;
}

.btn.eliminar {
  background-color: #d90429;
  color: white;
}

.formulario-planta {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
}

.formulario-planta input,
.formulario-planta select {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
}
</style>
