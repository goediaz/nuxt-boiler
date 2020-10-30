<template>
  <section class="home-page-container">
    <div class="cards-container">
      <Card v-for="console in jsonData" :key="console.name" :card-data="getConsoleData(console.name)" />
      <div class="blog-section">
        <p>Want to more ?</p>
        <Button link="/blog" text="Go to the Blog" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'getAndSaveHomeData',
  fetch () {
    this.updateConsoleData()
  },
  data () {
    return {
      jsonData: []
    }
  },
  methods: {
    getConsoleData (consoleName) {
      return this.$store.state.homeData[consoleName]
    },
    updateConsoleData () {
      this.jsonData = this.$store.state.homeData
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-page-container {
    .cards-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      flex: 1;
      .separation-line {
        width: 100%;
      }
      .blog-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100px;
        background-color: black;
        color: white;
        width: 100%;
        p {
          font-size: 30px;
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
