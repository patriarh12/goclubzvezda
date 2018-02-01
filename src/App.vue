<template>
  <div id="app">
    <header>
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link class="navbar-brand" to="/">
          Го-клуб «Звезда»
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" class="nav-item" active-class="active" to="/users" exact>
              <a class="nav-link">Список игроков</a>
            </router-link>
            <router-link tag="li" class="nav-item" active-class="active" to="/users/add/">
              <a class="nav-link">Редактировать игрока</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Begin page content -->
    <main role="main" class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'

  export default {
  name: 'App'
}
</script>

<style>
  #app {
    margin-top: 60px;
  }
</style>
