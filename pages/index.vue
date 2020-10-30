<template>
  <section class="home-page-container">
    <div class="cards-container">
      <Card :card-data="nintendoCardData" />
      <Card :card-data="xboxCardData" />
      <div class="blog-section">
        <p>Want to more ?</p>
        <Button link="/blog" text="Go to the Blog" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'saveHomeData',
  data () {
    return {
      nintendoCardData: this.getNintendoCardData(),
      xboxCardData: this.getXboxCardData()
    }
  },
  methods: {
    getNintendoCardData () {
      return this.$store.state.homeData.nintendo
    },
    getXboxCardData () {
      return this.$store.state.homeData.xbox
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
