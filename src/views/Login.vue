<script>

</script>

<template>
  <router-link :to="{ name: 'Home' }" class="btn-back"></router-link>
  <h1>Login</h1>
  <div class="search-wrapper">
    <label for="">Email:</label>
    <input type="email">
    <label for="">Password:</label>
    <input type="password">
  </div>

</template>

<style scoped lang="scss">
  h1 {
    margin: 1rem;
    font-size: 1.4rem;
    text-align: center;
  }
  .search-wrapper {
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
    flex-direction: column;
    position: relative;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  input {
    height: 50px;
    margin-bottom: 20px;
    display: block;
    width: 100%;
    border-radius: var(--border-radius);
    background: white;
    color: #808080;
    padding: 0 1rem;
    border: none;
    font-weight: bold;
  }
  label {
    margin-bottom: 5px;
    display: block;
  }


</style>