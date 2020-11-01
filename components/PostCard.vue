<template>
  <article>
    <NuxtLink :to="getRedirrectLink(postData.slug)" class="post-card-container">
      <div class="post-card-img-container">
        <img :src="getPostTopicImgSrc(postData.topic)" :alt="postData.topic">
      </div>
      <div class="post-card-content-container">
        <h3>{{ postData.title }}</h3>
        <p>{{ postData.description }}</p>
      </div>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  props: {
    postData: {
      type: Object,
      default: () => {},
      validation: (prop) => {
        return Object.prototype.hasOwnProperty.call(prop, 'topic') && Object.prototype.hasOwnProperty.call(prop, 'title') && Object.prototype.hasOwnProperty.call(prop, 'description') && Object.prototype.hasOwnProperty.call(prop, 'slug')
      },
      required: true
    }
  },
  methods: {
    getPostTopicImgSrc (topic) {
      return require(`~/assets/img/blog/topics/${topic}.png`)
    },
    getRedirrectLink (slug) {
      return `/blog/${slug}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .post-card-container {
    display: flex;
    max-width: 1000px;
    align-items: center;
    margin-bottom: 20px;
    background-color: $primary-color;
    border: 1px solid $tertiary-color;
    cursor: pointer;
    text-decoration: none;
    color: $tertiary-color;
    &:hover {
      box-shadow: 0 0 11px $tertiary-color;
    }
    .post-card-img-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10px;
      img {
        width: 150px;
      }
    }
    .post-card-content-container {
      margin: 10px;
    }
  }
</style>
