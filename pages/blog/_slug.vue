<template>
  <article class="blog-post-container">
    <header class="blog-header">
      <div class="blog-header-top">
        <p>{{ formatDate(article.updatedAt) }}</p>
      </div>
      <div class="blog-header-bottom">
        <img :src="getImgSrc()" :alt="article.alt">
      </div>
    </header>
    <div class="blog-content-container">
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('posts', params.slug).fetch()
    return { article }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    getImgSrc () {
      return require(`~/assets/img/blog/${this.article.img}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .blog-post-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .blog-header {
      margin: 10px;
      .blog-header-top {
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        justify-content: flex-end
      }
      .blog-header-bottom {
        img {
          width: 1000px;
       }
      }
    }
    .blog-content-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      .nuxt-content-container {
        display: flex;
        margin-top: 10px;
        flex-direction: column;
        width: 1000px;
      }
    }
  }
</style>
