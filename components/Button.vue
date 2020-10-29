<template>
  <nuxt-link :to="link">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    font-size: 18px;
    padding: 0.3em 1.2em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 2em;
    text-decoration :none;
    font-weight: 300;
    background-color: $secondary-color;
    text-align: center;
    max-width: 165px;
    color: $button-font-color;
  }
</style>
