<template>
  <q-page padding>
    <div class="row q-py-md q-px-sm items-end q-col-gutter-md">
      <div class="col">
        <q-input
          v-model="newQweetContent"
          autogrow
          bottom-slots
          class="new-qweet"
          counter
          maxlength="275"
          placeholder="What's happening?"
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <q-img src="https://cdn.quasar.dev/img/avatar5.jpg"/>
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          :disable="!newQweetContent"
          class="q-mb-lg"
          color="primary"
          label="Qweet"
          no-caps
          rounded
          unelevated/>
      </div>
    </div>
    <q-separator class="divider" color="grey-2" size="10px"/>
  </q-page>
</template>

<script setup>
import {ref} from "vue";

const newQweetContent = ref("");
</script>
<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
    overflow: hidden
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>
