<template>
  <nuxt-link :to="link" type="button">
    {{ text }} <Font-awesome v-if="showArrowIcon" :icon="['fas','chevron-right']" />
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
    },
    showArrowIcon: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    font-size: 18px;
    padding: 0.3em 1.2em;
    margin: 0 0.3em 0.3em 0;
    text-decoration :none;
    font-weight: 300;
    background-color: $secondary-color;
    text-align: center;
    max-width: 165px;
    color: $button-font-color;
    transition: border-radius 1s;
    &:hover {
      border-radius: 2em;
    }
  }

</style>
