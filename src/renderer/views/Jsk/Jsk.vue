<template>
  <div>
    <ft-card class="card">
      <h1>
        {{ $t("Jsk1.Jsk1") }}
      </h1>
      <section class="brand">
        <img
          src="_icons/logoColor.png"
          class="logo"
        >
        <div class="version"> {{ versionNumber }} {{ $t("Jsk1.Beta") }}</div>
      </section>
      <section class="jsk-chunks">
        <figure
          v-for="chunk in chunks"
          :key="chunk.title"
          class="chunk"
        >
          <font-awesome-icon class="icon" :icon="chunk.icon" />
          <h3 class="title"> {{ chunk.title }} </h3>
          <div
            class="content"
            v-html="chunk.content"
          />
        </figure>
      </section>
    </ft-card>
  </div>
</template>

<script src="./Jsk.js" />
<style scoped src="./Jsk.sass" lang="sass" />
