<script>
    import { Card } from 'flowbite-svelte';
    import { ChalkboardUserSolid, HandsHoldingSolid, GavelSolid } from 'svelte-awesome-icons';

    export let title = '';
    export let imgName = '';
    export let altText = '';
    
</script>


<Card padding='none' class="items-center m-1 bg-black/90">
    <img src='/img/{imgName}' alt={altText} class='px-0' />
    <h5 class='text-xl font-bold tracking-tight text-gray-900 text-white'>{ title.toUpperCase()}</h5>    
</Card>

<style>
    /* .circle {
        display: flex;
        border: 1px solid #0c7fc3;
        width: 150px;
        height: 150px;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    } */
</style>
