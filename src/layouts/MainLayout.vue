<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat icon="menu" round @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold"> Qwitter</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="282"
      bordered
      show-if-above
      side="left"
    >
      <!-- drawer content -->
      <q-icon
        class="q-pa-md"
        color="primary"
        name="fa-brands fa-earlybirds"
        size="lg"
      />

      <!-- left nav links -->
      <q-list>
        <q-item v-ripple :to="{ name: 'Home' }" clickable>
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item v-ripple :to="{ name: 'About' }" clickable>
          <q-item-section avatar>
            <q-icon name="contact_support" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold"
            >About
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer bordered show-if-above side="right">
      <!-- drawer content -->
      <q-input
        class="q-ma-md"
        outlined
        rounded
        placeholder="Search Qwitter"
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <!-- qweet feed -->
      <q-list separator padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Programming</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Programming</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Programming</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something amazing happened!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
