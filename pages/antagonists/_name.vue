<template>
  <article class="antagonist-page-container">
    <header class="header-container">
      <img :src="getBannerSrc()" alt="antagonist banner">
    </header>
    <div class="content-container">
      <div class="content-left-container">
        <div class="content-facts">
          <h2 class="facts-title">
            Awesome {{ capitalizeFirstLetter($route.params.name) }} facts:
          </h2>
          <div class="facts-list">
            <ul>
              <li v-for="fact in antagonistData.facts" :key="fact">
                {{ fact }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content-right-container">
        <StatsCard :stats="antagonistData.stats" />
      </div>
    </div>
  </article>
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
    },
    getBannerSrc () {
      return require(`../../assets/img/banners/${this.antagonistData.bannerSrc}.png`)
    },
    capitalizeFirstLetter (antagonistUrlName) {
      return antagonistUrlName.charAt(0).toUpperCase() + antagonistUrlName.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .antagonist-page-container {
    display: flex;
    flex-direction: column;
    .header-container {
      display: flex;
      flex-direction: column;
      margin: 50px 10px 0 10px;
      align-items: center;
      img {
        width: 600px;
        margin-bottom: 50px;
      }
    }
    .content-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .content-left-container {
        margin-right: 10px;
        .content-facts {
          margin-top: 10px;
          .facts-title {
            margin-bottom: 10px;
            text-align: center;
            text-decoration: underline;
          }
          .facts-list {
            max-width: 900px;
            ul {
              list-style-type: square;
              li {
                // font-size: 22px;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
