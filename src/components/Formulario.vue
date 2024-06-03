<template>
  <div class="container mt-3">
    <section class="jumbotron">
      <h2>Formulario</h2>
      <hr />
      <form novalidate @submit.prevent="enviar()">
        <!-- Nombre -->
        <div class="form-group">
          <label for="nombre">nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model.trim="formData.nombre"
            @input="formDirty.nombre = true"
          />

          <!-- validaciones -->
          <div
            v-if="!formData.nombre && formDirty.nombre"
            class="alert alert-danger mt-1"
          >
            <span v-if="!formData.nombre">Campo Requerido</span>
          </div>
          <div
            v-else-if="!this.nombreValido() && formDirty.nombre"
            class="alert alert-danger mt-1"
          >
            <span>El campo debe tener entre 5 y 15 caracteres</span>
          </div>
        </div>

        <!-- edad -->
        <div class="form-group">
          <label for="edad">edad</label>
          <input type="number" class="form-control" id="edad" v-model.number="formData.edad" @input="formDirty.edad = true"/>

          <!-- validaciones -->
          <div
            v-if="!formData.edad && formDirty.edad" class="alert alert-danger mt-1">
            <span v-if="!formData.edad">Campo Requerido</span>
          </div>
          <div v-else-if="this.edadValida() && formDirty.edad" class="alert alert-danger mt-1">
            <span>La edad debe ser entre 18 y 120</span>
          </div>
        </div>

        <!-- email -->
        <div class="form-group">
          <label for="email">email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="formData.email"
            @input="formDirty.email = true"
          />

          <!-- validaciobnes -->
          <div
            v-if="!formData.email && formDirty.email"
            class="alert alert-danger mt-1"
          >
            <span v-if="!formData.email">Campo Requerido</span>
          </div>
          <div
            v-else-if="!this.emailValido() && formDirty.email"
            class="alert alert-danger mt-1"
          >
            <span>El mail ingresado es invalido</span>
          </div>
        </div>

        <div class="table-responsive">
          <table class="table">
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>{{ formData.nombre }}</td>
              <td>{{ formData.edad }}</td>
              <td>{{ formData.email }}</td>
            </tr>
          </table>
        </div>
        <button
          type="submit" class="btn btn-primary my-3" v-if="this.camposValidos()" @click="this.enviar()" :disabled="!this.camposValidos()">
          Enviar
        </button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "formulario",
  props: [],
  mounted() {
    
  },
  data() {
    return {
      formData: this.getInitialData(),
      formDirty: this.getInitialData(),
    };
  },
  methods: {
    getInitialData() {
      return {
        nombre: null,
        edad: null,
        email: null,
      };
    },
    nombreValido() {
      const nombre = this.formData.nombre
      if (!nombre) {
        return false;
      }
      return nombre.length >= 5 && nombre.length <= 15
    },
    edadValida() {
      const edad = this.formData.edad
      if (!edad) {
        return false;
      }
      return edad < 18 || edad > 120
    },
    emailValido() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const email = this.formData.email
      if (!email) {
        return false;
      }
      return regex.test(email)
    },
    camposValidos() {
      return this.nombreValido && this.edadValida && this.emailValido
    },
    enviar() {
      const datos = {...this.formData}
      console.log(datos)

      this.formData = this.getInitialData()
      this.formDirty = this.getInitialData()
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: #3c3c3c;
  color: white;
  margin-left: auto;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
}
h2 {
  color: white;
}

hr {
  background-color: #eee;
}

label {
  text-transform: capitalize;
  margin-right: 1000px;
}

pre {
  color: white;
}

label {
  text-transform: capitalize;
}

th, td{
  color: white;
}
</style>
