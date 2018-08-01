<template>
    <div class="col-full" :class="$style.centered">
        <h1 :class="$style.headingLarge" >Not Found</h1>
        <p :class="$style['text-large']">Opps...we couldn't find what youa re looking for. Why don't you go to 
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

<style module>
.centered {
  text-align: center;
}
.headingLarge {
  font-size: 100px;
}
.text-large {
  font-size: 50px;
}
</style>
