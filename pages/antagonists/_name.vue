<template>
  <div class="antagonist-page-container">
    {{ name }}
  </div>
</template>

<script>
export default {
  middleware: 'antagonistNotFound',
  data () {
    return {
      name: this.checkParamName(this.$route.params.name)
    }
  },
  methods: {
    checkParamName: (param) => {
      if (param === 'nintendo') {
        return 'Nintendo'
      } else if (param === 'xbox') {
        return 'Xbox'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .antagonist-page-container {
    display: flex;
    font-size: 50px;
    align-items: center;
    justify-content: center;
  }
</style>
