<template>
  <q-page>
    <!-- qweet form -->
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
              <q-img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQF3aIRxq4BlBw/profile-displayphoto-shrink_100_100/0/1599398358509?e=1668038400&v=beta&t=TBvwQjR_MjdYI9Cz85N_7dPI4Ux0hUDfX5Uvw9YWt44"/>
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

    <!-- qweet list -->
    <q-list>

      <q-item clickableq-py-md>
        <q-item-section avatar top>
          <q-avatar>
            <q-img src="https://cdn.quasar.dev/img/avatar2.jpg"/>
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>
              Lorem Bdr. Ipsum
            </strong>
            <span class="text-grey-7">
              @lorem_ipsum
            </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.

            A consequatur cupiditate doloremque eaque eius
            enim, et eveniet, excepturi explicabo fuga, labore
            libero officiis optio tempora totam? Cupiditate earum id.
          </q-item-label>
          <div class="row qweet-icons justify-between q-mt-sm">
            <q-btn color="grey" flat icon="far fa-comment" round size="sm"/>
            <q-btn color="grey" flat icon="fas fa-retweet" round size="sm"/>
            <q-btn color="grey" flat icon="far fa-heart" round size="sm"/>
            <q-btn color="grey" flat icon="fas fa-trash" round size="sm"/>
          </div>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

    </q-list>
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

.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left: -5px
</style>
