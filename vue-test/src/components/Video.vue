<template>
    <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="http://www.youtube.com/embed?listType=playlist&list=PLC77007E23FF423C6"
        frameborder="0"/> 
        <button v-bind:click="getWord">이회사인터넷거지같애-_-</button>
    </div>
</template>

<script>
import { VideoService } from '@/services'
export default {
    methods: {
    }
}
</script>

