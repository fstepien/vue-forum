<template>
    <form @submit.prevent="save">
        <div class="form-group">
            <textarea name="" id="" cols="30" rows="10" v-model="text"></textarea>
        </div>
        <div class="form-actions">
            <button class="btn-blue">Submit Post</button>
        </div>
    </form>

</template>
<script>

import PostList from '@/components/PostList'
export default {
    props: {
        threadId: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            thread: this.$store.state.threads[this.$route.params.id],
            text: ''
        }
    },
    computed: {
        posts() {
            const postIds = Object.values(this.thread.posts)
           return  Object.values(this.$store.state.posts).filter(post => postIds.includes(post['.key']))
        }
    },
    methods: {
        save() {
            const postId = 'greatPost' + Math.random()
            const post = {
                text: this.text, 
                publishedAt: Math.floor(Date.now()/1000),
                threadId: this.threadId,
                userId: 'ALXhxjwgY9PinwNGHpfai6OWyDu2',
                '.key': postId
            }
           
            this.text = ''
            this.$emit('save', {post})
        }
    }
}
</script>
