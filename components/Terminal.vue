<template>
    <div class="terminal" :class="{ 'terminal-hidden': !isShown }">
        <div class="upper-bar">
            <button @click="hideTerminal">
                <Icon size="1.5em" name="material-symbols:close-rounded" />
            </button>
            <button @click="hideTerminal">
                <Icon size="1.5em" name="material-symbols:chrome-minimize" />
            </button>
        </div>
        <div class="content">
            <h1>Terminal still in developement</h1>
        </div>
        <div class="input">
            <input name="" />
        </div>
    </div>
</template>

<script setup>
const isShown = ref(false);
const hideTerminal = () => isShown.value = false;
const showTerminal = () => isShown.value = true;
defineExpose({ hideTerminal, showTerminal, isShown })
</script>

<style scoped lang="less">
.terminal.terminal-hidden {
    display: none;
}

.terminal {
    width: 600px;
    height: 850px;
    border: solid 2px white;
    position: fixed;
    right: 100px;
    background: black;
    top: 40px;
    display: flex;
    flex-direction: column;
    padding: 4px;
}

.content {
    color: white;
    width: 100%;
    border: solid 2px white;
    width: calc(100% - 8px);
    flex-grow: 1;
    margin: 4px;
    font-size: 1.2em;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 2px;
        margin-right: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: white;
        outline: 1px solid white;
    }
}

.input {
    margin: 4px;

    input {
        border: solid 2px white;
        background: transparent;
        width: calc(100% - 4px);
        color: white;
    }

    width: calc(100% - 8px);
}

.upper-bar {
    button {
        cursor: pointer;
        float: right;
        color: white;
        widows: 100px;
        border: solid 2px white;
        background-color: black;
        margin-left: 4px;
    }
}
</style>