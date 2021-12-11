<template>
  <section class="card">
    <ul v-for="(list, index) of lists" :key="index" class="card-list">
      <div class="card-list__wrapper">
        <span
          class="card-list__dialogue"
          @click="list.inputShowed = !list.inputShowed"
        >
          <svg
            :class="{ opened: list.inputShowed }"
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
        <span class="card-list__checkbox" @click="list.checked = !list.checked">
          <svg
            v-show="list.checked"
            width="11"
            height="9"
            viewBox="0 0 11 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="submit"
          >
            <line
              y1="-0.5"
              x2="5.60998"
              y2="-0.5"
              transform="matrix(0.740888 0.671629 -0.65199 0.758228 0.732422 5.23218)"
              stroke="#32363E"
            />
            <line
              y1="-0.5"
              x2="9.90697"
              y2="-0.5"
              transform="matrix(0.589851 -0.807512 0.792303 0.610128 4.88867 9)"
              stroke="#32363E"
            />
          </svg>
        </span>
        <p class="card-list__name">List {{ index + 1 }}</p>
      </div>

      <li
        v-for="(item, id) of list.items"
        v-show="list.inputShowed"
        :key="id"
        class="card-item"
      >
        <div class="card-item__heading">
          <input
            v-model="item.checked"
            type="checkbox"
            class="card-item__checkbox"
          />
          <p class="card-item__name">Item {{ index + 1 }}</p>
        </div>
        <div class="card-item__inputs">
          <input
            v-model.number="item.value"
            type="number"
            class="card-item__value"
          />
          <input v-model="item.color" type="color" class="card-item__color" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
export default {
  data() {
    return {
      showItemList: false,
      value: 10,
      checked: false,
    }
  },
  computed: {
    ...mapGetters(['items', 'lists']),
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

  &-list
    margin-top: 1rem

    &__wrapper
      display: flex

    &__checkbox
      display: block
      padding: 0 .375rem
      margin: 0 .75rem
      width: 1.5rem
      height: 1.5rem
      border: .0625rem #32363E solid

    &__name
      font-family: "Montserrat"
      color: #32363E
      font-size: 1.5rem

  &-item
    display: flex
    justify-content: space-between
    margin-bottom: 1rem

    &__inputs
      display: flex
      margin: 0 3.5rem 0 0

    &__heading
      display: flex
      margin: 0 0 0 3.5rem

    &__checkbox
      width: 1.5rem
      height: 1.5rem

    &__name
      font-family: "Montserrat"
      color: #32363E
      font-size: 1.5rem
      margin-left: .75rem

    &__value
      background: none
      outline: none
      border: none
      text-align: right
      margin-right: .75rem
      font-size: 1.5rem
      width: 6.25rem

    &__color
      border: none
      width: 1.5rem
      height: 1.5rem
      background: none
</style>
