<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
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
            unelevated
            @click="addNewQweet(newQweetContent)"/>
        </div>
      </div>
      <q-separator class="divider" color="grey-2" size="10px"/>

      <!-- qweet list -->
      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            v-for="qweet in qweets"
            :key="qweet.id"
            class="q-py-md">
            <q-item-section avatar top>
              <q-avatar>
                <q-img
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQF3aIRxq4BlBw/profile-displayphoto-shrink_100_100/0/1599398358509?e=1668038400&v=beta&t=TBvwQjR_MjdYI9Cz85N_7dPI4Ux0hUDfX5Uvw9YWt44"/>
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>
                  Lorem Bdr. Ipsum
                </strong>
                <span class="text-grey-7">
              @lorem_ipsum
              <br class="lt-md"/>
              &bull;
               {{ moment(qweet.date).fromNow() }}
            </span>
              </q-item-label>
              <q-item-label class="qweet-content text-body1">
                {{ qweet.content }}
              </q-item-label>
              <div class="row qweet-icons justify-between q-mt-sm">
                <q-btn color="grey" flat icon="far fa-comment" round size="sm"/>
                <q-btn color="grey" flat icon="fas fa-retweet" round size="sm"/>
                <q-btn
                  @click="toggleLike(qweet)"
                  :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'"
                       :color="qweet.liked ? 'pink' : 'grey'"
                       flat
                       round
                       size="sm"/>
                <q-btn color="grey" flat icon="fas fa-trash" round size="sm" @click="deleteQweet(qweet)"/>
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import moment from 'moment'
import {addDoc, collection, updateDoc, deleteDoc, doc, onSnapshot, orderBy, query} from "firebase/firestore"
import {db} from 'boot/firebase'

let newQweetContent = ref()
const q = query(collection(db, "qweets"), orderBy('date'))

onMounted(() => {

  // get Qweets from firebase
  onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const qweetChange = change.doc.data()
      qweetChange.id = change.doc.id
      if (change.type === "added") {
        console.log("New Qweet: ", qweetChange);
        qweets.value.unshift(qweetChange)
      }
      if (change.type === "modified") {
        console.log("Modified Qweet: ", qweetChange);
        let index = qweets.value.findIndex(qweet => qweet.id === qweetChange.id)
        Object.assign(qweets.value[index], qweetChange)
      }
      if (change.type === "removed") {
        console.log("Removed Qweet: ", qweetChange);
        let index = qweets.value.findIndex(qweet => qweet.id === qweetChange.id)
        qweets.value.splice(index, 1)
      }
    });
  });
})
const qweets = ref([])

let props = defineProps({
  date: String
});

/** add new qweet */
async function addNewQweet(qweetContent) {
  let newQweet = {
    content: qweetContent,
    date: Date.now(),
    liked: false
  }

  // add a new Qweet with a generated id
  const docRef = await addDoc(collection(db, "qweets"), newQweet)
  console.log("Document written with ID: ", docRef.id)

  // clear qweet input field
  newQweetContent.value = ''
}

/** delete qweet */
async function deleteQweet(qweet) {
  await deleteDoc(doc(db, 'qweets', qweet.id))
}

/** update qweet */
async function toggleLike(qweet) {
  await updateDoc(doc(db, 'qweets', qweet.id), {
    liked: !qweet.liked
  })
}
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
