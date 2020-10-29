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
// import data from '~/static/data/home.json'

export default {
  // async asyncData({ req, isServer, params, store }) {
  // const data = {}

  // if (process.server) {
  //   data = JSON.parse(require('fs').readFileSync('../static/data/home.json', 'utf8'))
  // } else {
  //   data = await axios.get('/data/home.json').then(res => res.data)
  // }

  // return { data }
  // },
  data () {
    return {
      nintendoCardData: this.getNintendoCardData(),
      xboxCardData: this.getXboxCardData()
    }
  },
  methods: {
    getNintendoCardData () {
      // console.log(data);
      return {
        imgName: 'nintendo_logo.png',
        buttonLink: '/antagonists/nintendo',
        buttonText: 'Go to Nintendo',
        extract: 'The Nintendo Company, Ltd. is a Japanese multinational consumer electronics and video game company headquartered in Kyoto. The company was founded in 1889 as Nintendo Karuta by craftsman Fusajiro Yamauchi and originally produced handmade hanafuda playing cards. After venturing into various lines of business during the 1960s and acquiring a legal status as a public company under the current company name, Nintendo distributed its first video game console, the Color TV-Game, in 1977. It gained international recognition with the release of the Nintendo Entertainment System in 1985.'
      }
    },
    getXboxCardData () {
      return {
        imgName: 'xbox_logo.png',
        buttonLink: '/antagonists/xbox',
        buttonText: 'Go to Xbox',
        extract: 'Xbox is a video gaming brand created and owned by Microsoft. It represents a series of video game consoles developed by Microsoft, with three consoles released in the sixth, seventh, and eighth generations, respectively. The brand also represents applications (games), streaming services, an online service by the name of Xbox Live, and the development arm by the name of Xbox Game Studios. The brand was first introduced in the United States in November 2001, with the launch of the original Xbox console.'
      }
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
