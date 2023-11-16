<script>
    import { Card } from 'flowbite-svelte';
    import { ChalkboardUserSolid, HandsHoldingSolid, GavelSolid } from 'svelte-awesome-icons';

    export let title = '';
    export let imgName = '';
    export let description = '';
    export let altText = '';
    
</script>


<Card padding='none' class="items-center m-1 bg-black/90">
    <div class="relative">
        <img src='/img/{imgName}' alt={altText} class='px-0 w-100 h-80' />
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
            <h3 class="text-xl text-white font-bold">
                {title.toUpperCase()}</h3>
            <p class="mt-2 text-sm text-gray-300">{description}</p>
        </div>
    </div>
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
