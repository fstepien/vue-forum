<template>
    <div class="thread">
        <div>
            <p>
                <router-link :to="{name: 'ThreadShow', params: { id: thread['.key']}}">{{thread.title}}</router-link>
            </p>
            <p class="text-faded text-xsmall">
                By
                <a href="#">{{user.name}}</a>,
                <AppDate :timestamp="thread.publishedAt"></AppDate>.
            </p>
        </div>
        <div class="activity">
            <p class="replies-count">
                {{repliesCount}} replies
            </p>
            <img class="avatar-medium" src="#" alt="">
        </div>
    </div>
</template>
<script>

export default {
    props: {
        thread: {
            required: true, 
            type: Object
        }
    },
    computed: {
        repliesCount() {
            return Object.keys(this.thread.posts).length - 1
        },
        user() {
            return this.$store.state.users[this.thread.userId]
        }
    }
}
</script>

