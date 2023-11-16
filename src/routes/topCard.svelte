<script>
    import { Card } from 'flowbite-svelte';
    import { ChalkboardUserSolid, HandsHoldingSolid, GavelSolid } from 'svelte-awesome-icons';

    export let title = '';
    export let iconName = '';
    export let description = 'arst';
    
</script>


<Card class="items-center m-1 w-150 bg-opacity-0 border-none">
    <div style='height: 350px' class="text-center">
        <div class='flex rounded-full outline outline-3 outline-senshi-blue mx-auto w-32 h-32 place-content-center pt-3 bg-opacity-100'>
            {#if iconName === 'ChalkboardUserSolid'}  
                <ChalkboardUserSolid class="text-senshi-blue" size="100" />
            {:else if iconName === 'HandsHoldingSolid'}
                <HandsHoldingSolid class="text-senshi-blue" size="100" />
            {:else if iconName === 'GavelSolid'}
                <GavelSolid class="text-senshi-blue" size="100" />
            {/if}
        </div>
        <br>
        <h5 class='text-xl font-bold tracking-tight text-white'>{ title.toUpperCase()}</h5>
        <p class="text-white/75">{ description }</p>
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
