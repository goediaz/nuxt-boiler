<template>
  <section class="blog-list-container">
    <header class="blog-header">
      <div class="blog-header-img">
        <img :src="getBannerImgSrc()" alt="blog-banner">
      </div>
      <h2>Blog posts</h2>
    </header>
    <div class="blog-posts-container">
      <PostCard v-for="post in posts" :key="post.slug" :post-data="formatPostData(post)" />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'slug', 'topic'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      posts
    }
  },
  methods: {
    getBannerImgSrc () {
      return require('~/assets/img/blog/blog_banner.jpg')
    },
    formatPostData (post) {
      return {
        title: post.title,
        description: post.description,
        slug: post.slug,
        topic: post.topic
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .blog-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .blog-header {
      margin: 10px;
      h2 {
        margin: 10px;
        text-decoration: underline;
      }
      .blog-header-img {
        img {
          width: 1000px;
       }
      }
    }
  }
</style>
