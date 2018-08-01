<template>
    <div  class="col-large push-top">

        <!-- <ul class="breadcrumbs">
              <li><a href="#"><i class="fa fa-home fa-btn"></i>Home</a></li>
              <li><a href="category.html">Discussions</a></li>
              <li class="active"><a href="#">Cooking</a></li>
          </ul> -->

          <h1>{{thread.title}}</h1>

          <p>
              By <a href="#" class="link-unstyled">Robin</a>, 2 hours ago.
              <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
          </p>

          <div class="post-list">
              <div v-for="postId in thread.posts" class="post">
                  <div class="user-info">
                      <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>

                      <a href="profile.html#profile-details">
                          <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
                      </a>

                      <p class="desktop-only text-small">107 posts</p>

                  </div>

                  <div class="post-content">
                      <div>
                        {{posts[postId].text}}
                      </div>
                      
                  </div>



                  <div class="post-date text-faded">
                      {{posts[postId].published}}
                  </div>

                 
              </div>

              
          </div>
      </div>
</template>
<script>
import sourceData from '@/data.json'
export default {
props: {
    id: {
        required: true,
        type: String
        }
    },
    data() {
        return {
            thread: sourceData.threads[this.$route.params.id],
            posts: sourceData.posts,
            users: sourceData.users
        }
    }
}
</script>
