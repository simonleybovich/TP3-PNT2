<template>
  <div class="conteiner mt-3">
    <div class="jumbotron">
      <section class="src-components-usuarios">
        <h2>Usuarios</h2>
        <br>
        <hr>
        <div class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
            </tr>
            <tr v-for="(usuario, index) in usuarios" :key="index">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.telefono }}</td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  </div>
  </template>

<script lang="js">
import * as usuarioServices from '../services/UserServices'
  export default  {
    name: 'src-components-usuarios',
    props: [],
    mounted () {
      this.cargarUsuarios()
    },
    data () {
      return {
        usuarios: [],
      }
    },
    methods: {
      async cargarUsuarios() {
        try {
          const response = await usuarioServices.get()
          this.usuarios = response
        } catch (error){
          console.error('No se cargaron usuarios', error)
        }
      }
    },
    computed: {

    }
}

</script>

<style scoped lang="css">
  .src-components-usuarios {

  }
</style>
