<template>
    <div :class="{dark_links:isDark}" class='nav-link'>
        <nav v-if="!isMobile()">
        <ul>
          <li>
            <router-link to="/">
              EN
            </router-link>
          </li>

          <li @click="handleOpeningHostPage">
              Become a host
              
            </li>

          <li>
            <router-link to="/blog">
              Blog
            </router-link>
          </li>

          <li v-if="!isLoggedIn" v-on:click="handleSignin(2)">Sign up</li>
          <li v-else v-on:click="$router.push('/profile')">
              Welcome {{
                  getFirstName
              }} 
          </li>

          <li v-if="!isLoggedIn" v-on:click="handleSignin(1)">Login</li>
          <li v-else v-on:click="logout">Logout</li>

        </ul>
      </nav>
    </div>
</template>


<script>

import { mapGetters, mapActions } from 'vuex';


export default {
    name:'nav_link',
    props:{
        isDark:{
            type:Boolean,
            required:true
        }
    },

    methods:{
        ...mapGetters(['isMobile']),
        ...mapActions(['setModalState']),

        handleOpeningHostPage(){
            if(this.isLoggedIn){
                this.$router.push("/become-a-host");
                
            }
            else{
                this.handleSignin(1)
            }
        },

        handleSignin(val){
        this.setModalState(val)
        },

        logout(){
            this.$store.dispatch('logout')
        }
    },

    computed:{
        ...mapGetters(['getToken', 'getFirstName', 'isLoggedIn']),
    }
}
</script>


<style lang='scss' scoped>
    .nav-link {
        width:100%;
           nav {
            width: 100%;
            margin-right: 2%;

            ul {
                float: right;
                // width: 400px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                flex-direction: row;
                li {
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                padding: 0 10px;
                margin-left: 20px;
                // border:1px solid red;
                // width: 100px;
                color: #ffffff;
                list-style: none;
                cursor: pointer;

                a{
                    text-decoration: none;
                    color: #ffffff;
                }
                }
            }
            }
    }
    .dark_links{
        li, a{
            color: black !important;
        }
    }
</style>