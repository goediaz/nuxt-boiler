<template>
  <footer class="footer-component">
    <div class="footer-text-container">
      Hello. I'm your friendly footer. Information gathered from Wikipedia and various gaming news sites.
    </div>
    <div class="footer-socials-container">
      <p>Follow us on social media:</p>
      <Font-awesome v-for="icon in socials" :key="icon.name" class="social-icon" :icon="icon.properties" />
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      socials: [
        {
          name: 'github',
          properties: ['fab', 'github']
        },
        {
          name: 'linkedin',
          properties: ['fab', 'linkedin-in']
        },
        {
          name: 'facebook',
          properties: ['fab', 'facebook']
        },
        {
          name: 'twitter',
          properties: ['fab', 'twitter']
        },
        {
          name: 'instagram',
          properties: ['fab', 'instagram']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer-component {
    display: flex;
    min-height: 40px;
    max-height: 40px;
    background-color: $tertiary-color;
    color: #f5f5f7;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    font-size: 11px;
    .footer-socials-container {
      display: flex;
      margin-left: 10px;
      align-items: center;
      p {
        margin-right: 10px;
      }
      .social-icon {
        font-size: 23px;
        margin-right: 10px;
        cursor: pointer;
        &:hover {
          color: grey;
        }
      }
    }
  }
</style>
