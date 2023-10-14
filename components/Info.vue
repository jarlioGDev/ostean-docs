<template>
    <div class="info">
        <ul>
            <li v-for="elem in  elems "><a :href="elem.link">{{ elem.title }}</a></li>
        </ul>
    </div>
</template>

<style lang="less">
.info {
    float: right;
    margin-top: 50px;
    margin-right: 50px;
    color: white;
    
    a {
        color: white
    }
}
</style>

<script lang="ts" setup>
interface ElemLink {
    link: string,
    title: string
}

const { elems } = defineProps({ elems: Array<ElemLink> })
</script>