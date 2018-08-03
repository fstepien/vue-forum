<template>
    <div class="post">
        <div class="user-info">
            <a href="#" class="user-name">{{user.name}}</a>

            <a href="profile.html#profile-details">
                <img class="avatar-large" :src="user.avatar" alt="">
            </a>

            <p class="desktop-only text-small">{{userPostsCount}} posts</p>

        </div>

        <div class="post-content">
            <div>
                {{post.text}}
            </div>

        </div>
        <AppDate :timestamp="post.publishedAt"></AppDate>
    </div>
</template>

<script>

export default {
 
    props: {
        post: {
            type: Object, 
            required: true
        }
    },
    computed: {
        user(){
            return this.$store.state.users[this.post.userId]
        },
        userPostsCount() {
            
            return  Object.keys(this.user.posts).length
        }
        
    }
    
}
</script>

<style>
</style>
