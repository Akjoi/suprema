<template>
    <div class="story_item">
        <div style="padding: 0px 4px;">
            <h2 class="subheader">{{ year }}</h2>
            <h1 style="height: fit-content;"> {{ title }}</h1>
            <h2 style="margin-top: 4px;">{{ text }}</h2>
        </div>
        <img :src="'/img/archive/' + src">
    </div>
</template>
  
<script>
export default {
    name: 'StoryItem',
    props: {
        title: { type: String, required: true },
        year: { type: String, required: true },
        text: { type: String, required: false },
        src: { type: String, required: true },
    }
}
</script>
<style scoped>
.story_item {
    padding-top: 8px;
    margin: 0px 4px;
}

img {
    width: 100%;
    margin-top: 12px;
}
</style>
  