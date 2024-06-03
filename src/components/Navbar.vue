<template>
  <div class="conteiner mt-3">
    <section class="navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="#">Inicio</router-link>
        <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/src/components/Formulario.vue">
              Formulario
              <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/src/components/Usuarios.vue">Usuarios</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: [],
  mounted() {
    
    },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.navbar{
  margin-left: auto;
  margin-right: auto;
}
.jumbotron {
  background-color: #3c3c3c;
  color: white;
}
h2 {
  color: white;
}

hr {
  background-color: #eee;
}

label {
  text-transform: capitalize;
}

pre {
  color: white;
}

label {
  text-transform: capitalize;
}
</style>
