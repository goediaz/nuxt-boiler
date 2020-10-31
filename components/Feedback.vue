<template>
  <article class="content-feedback-container">
    <p>Do you prefer {{ capitalizeFirstLetter(consoleName) }} ?</p>
    <Font-awesome v-if="!consoleLovedValue" :icon="['far', 'heart']" class="love-icon" @click="toggleHeartIcon()" />
    <Font-awesome v-if="consoleLovedValue" :icon="['fas', 'heart']" class="love-icon" @click="toggleHeartIcon()" />
    <p v-if="consoleLovedValue" class="thanks-text">
      Thank you for voting!
    </p>
  </article>
</template>

<script>
export default {
  props: {
    consoleName: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      consoleLovedValue: false
    }
  },
  computed: {
    consoleLovedFromStore () {
      return this.$store.state.userPreferredConsole[this.consoleName]
    }
  },
  watch: {
    consoleLovedFromStore (newValue, oldValue) {
      this.consoleLovedValue = newValue
    }
  },
  mounted () {
    this.checkIfUserLovesConsole()
  },
  methods: {
    capitalizeFirstLetter (antagonistUrlName) {
      return antagonistUrlName.charAt(0).toUpperCase() + antagonistUrlName.slice(1)
    },
    toggleHeartIcon () {
      this.consoleLovedValue = !this.consoleLovedValue
      this.$store.commit('savePreferredConsole', {
        selectedConsole: this.$route.params.name,
        value: this.consoleLovedValue
      })
    },
    checkIfUserLovesConsole () {
      const preferredConsoleOptions = this.$store.getters.getPreferredConsole
      this.consoleLovedValue = preferredConsoleOptions[this.$route.params.name]
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-feedback-container {
    display: flex;
    font-size: 20px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p {
      margin: 10px;
    }
    .love-icon {
      color: red;
      font-size: 70px;
      cursor: pointer;
    }
    .thanks-text {
      font-weight: bold;
    }
  }
</style>
