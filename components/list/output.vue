<template>
  <section class="card">
    <ul v-for="(list, index) of lists" :key="index" class="card-list">
      <div class="card-list__wrapper">
        <span
          class="card-list__dialogue"
          @click="list.outputShowed = !list.outputShowed"
        >
          <svg
            :class="{ opened: list.outputShowed }"
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.5"
              x2="13.6776"
              y2="-0.5"
              transform="matrix(-0.698125 0.715976 0.698125 0.715976 10.9995 10.207)"
              stroke="#32363E"
            />
            <line
              y1="-0.5"
              x2="13.6776"
              y2="-0.5"
              transform="matrix(0.698125 0.715976 0.698125 -0.715976 0.999512 0)"
              stroke="#32363E"
            />
          </svg>
        </span>
        <p class="card-list__name">List {{ index + 1 }}</p>
      </div>

      <li
        v-for="(item, index) of list.items"
        v-show="list.outputShowed && item.checked"
        :key="index"
        class="card-item"
      >
        <div
          v-for="(block, id) in item.value"
          :key="id"
          :style="{ background: item.color }"
          class="card-item__block"
          @click="DELETE_ITEM()"
        ></div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showItemList: false,
    }
  },
  computed: {
    ...mapGetters(['items', 'lists']),
  },
  methods: {
    DELETE_ITEM(id) {
      this.block = this.block.filter((item) => item.id !== id)
    },
  },
}
</script>

<style lang="sass" scoped>
.opened
  transform: rotate(90deg)

.card
  background: rgba(255, 255, 255, 0.7)
  box-shadow: 0px 0px 20px #FFFFFF
  width: 40.625rem
  height: 46.875rem
  padding: 3rem

  &-item
    display: flex
    margin-bottom: 1rem
    flex-wrap: wrap


    &__block
      width: 1rem
      height: 1rem
      margin-top: .5rem
      margin-left: .25rem

  &-list
    display: flex
    margin-bottom: 1rem
    flex-direction: column

    &__name
      font-family: "Montserrat"
      color: #32363E
      font-size: 1.5rem
      margin-left: .75rem

    &__wrapper
      display: flex
</style>
