<template>
  <v-app-bar :elevation="6">
   <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Search templates"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
  </v-app-bar>
</template>

<script>

</script>