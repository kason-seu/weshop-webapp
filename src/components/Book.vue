<template>
    <div>
        <h1>{{title}}</h1>
        <span>{{rating}}</span>
    </div>
</template>

<script>
export default {
    name:'Book',
    props:["title", "rating"]
}  
</script>
