<template>
  <div class="antagonist-page-container">
    {{ antagonistData }}
  </div>
</template>

<script>
export default {
  middleware: ['antagonistNotFound', 'getAndSaveAntagonistsData'],
  data () {
    return {
      antagonistData: this.checkParamName(this.$route.params.name)
    }
  },
  methods: {
    checkParamName (param) {
      return param === 'nintendo' ? this.$store.getters.getNintendoData : this.$store.getters.getXboxData
    }
  }
}
</script>

<style lang="scss" scoped>
  .antagonist-page-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    font-size: 50px;
  }
</style>
