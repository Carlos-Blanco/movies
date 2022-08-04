<script>
const API_KEY = 'k_79orqyvt';
const API_URL = `https://imdb-api.com/en/API`;
export default {
  name: "ActorDetail",
  props: ["id"],
  data() {
    return {
      actor: ""
    }
  },
  methods: {
    actorInfo(id) {
      fetch(API_URL + `/Name/${API_KEY}/` + id)
        .then(res => res.json())
        .then(actor => {
          this.actor = actor;
        });
    }
  },
  mounted() {
    this.actorInfo(this.id);
  }
}
</script>

<template>
  {{ actor.name }}
</template>

<style scoped lang="scss">

</style>
