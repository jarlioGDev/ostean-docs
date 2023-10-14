<script setup>
import bgImage from "assets/images/holoDarkBgHd.png"
const { links, books } = await queryContent('/homepage').findOne()
const booksShown = ref(false);

const showBooks = () => {
    console.log(booksShown.value)
    booksShown.value = !booksShown.value
}
</script>


<template>
    <main class="home" :style="{ backgroundImage: `url('${bgImage}')` }">
        <div class="links-container">
            <ul>
                <Links :links="links" />
                <li @click="showBooks">
                    <Icon size="3em" name="ph:terminal-window" color="white" />
                </li>
            </ul>
        </div>
        <Info v-if="booksShown" :elems="books"/>
    </main>
</template>

<style lang="less">
body {
    margin: 0;
}

main.home {
    width: 100%;
    height: 100vh;
    position: absolute;
    background: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.links-container {
    float: right;
    max-height: 100vh;
    overflow: auto;
    margin-top: 10px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        border-radius: 50px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 50px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        /* background: #b30000; */
    }
}

.links-container {
    li {
        margin: 20px;
        cursor: pointer;
    }

    ul {
        color: white;
        list-style-type: none;
    }

}
</style>