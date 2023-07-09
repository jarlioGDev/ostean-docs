<template>
    <span ref="target" style="position: relative;">
        <span @click="change" ref="titleEl" class="popup-text">{{ title }}</span>
        <span v-if="isOpen" class="popup" ref="popup" :style="style" style="position: fixed">
            <Icon size="1em" name="material-symbols:close-rounded" color="black" class="close" @click="close" />
            <div ref="handle">
                <Icon size="1em" name="bi:arrows-move" color="black" class="move" />
            </div>
            <slot></slot>
        </span>
    </span>
</template>

<script setup>
const isOpen = ref(false)
const target = ref(null)
const popup = ref(null)
const handle = ref(null)
const titleEl = ref(null)
const { title } = defineProps({ title: String })

const change = () => { isOpen.value = !isOpen.value; }
const close = () => { isOpen.value = false }


onClickOutside(target, () => close())
const { x, y } = useElementBounding(titleEl);
const { style } = useDraggable(popup, {
    initialValue: { x, y },
    handle: handle
})
</script>

<style lang="less" scoped>
.move {
    position: absolute;
    left: 0;
    top: 0;
    padding: 5px;
}

.close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px 10px;
}

.popup-text:hover {
    text-decoration: underline;
    cursor: pointer;
}

.popup {
    display: block;
    border: solid 1px black;
    position: absolute;
    width: 500px;
    top: 20px;
    left: 0;
    padding: 10px 10px 10px 10px;
    background: white;
    z-index: 4;
}
</style>