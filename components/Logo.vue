<template>
  <nuxt-link to="/" title="Home">
    <div class="logo-component-container">
      <div class="company-logo-container nintendo-logo" title="Nintendo">
        P
      </div>
      <div class="versus-word-container">
        VS
      </div>
      <div class="company-logo-container xbox-logo" title="Xbox">
        L
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .logo-component-container {
    display: flex;
    .company-logo-container {
      font-family: 'Controllers';
      &.xbox-logo {
        font-size: 55px;
        margin: 13px 4px;
      }
      &.nintendo-logo {
        font-size: 70px;
        margin: 5px 10px;
      }
    }
    .versus-word-container {
      font-family: 'StreetFighter';
      font-size: 18px;
      margin-top: 20px;
    }
  }
</style>
