<template>
  <main>
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      <ContentRenderer :value="data" />
    </ContentQuery>
  </main>
</template>