<template>
    <div class="col-full">
        <h1>Not Found</h1>
        <p>Opps...we couldn't find what youa re looking for. Why don't you go to 
            <router-link :to="{name: 'Home'}">
                home instead?
            </router-link>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  text-align: center;
}
h1 {
  font-size: 100px;
}
p {
  font-size: 50px;
}
</style>
