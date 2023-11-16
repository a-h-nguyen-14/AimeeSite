<script>
    import { Tabs, TabItem } from 'flowbite-svelte';
    import TopCard from './topCard.svelte'; 
    import ClassCard from './classCard.svelte';
    import TrainerCard from './trainerCard.svelte';
	import Footer from './footer.svelte';
    import Characteristics from './Characteristics.svelte';
    import Judo from './Judo.svelte';
    import SPELL from './SPELL.svelte';
    import Coaching from './Coaching.svelte';
    import Classes from './Classes.svelte';
</script>

<div id="main">
    <div class="flex flex-col md:flex-row justify-center items-center px-5 bg-opacity-10">
        <p class="text-base dark:text-white">Autism Spectrum Disorder (ASD) is a developmental condition which changes the way a person interacts with the world around them (Autism Spectrum AustraLia 2023). People with ASD see and interact with the world differently than neurotypical individuals. As the world is set up for neurotypical people, it can be challenging for people with ASD to navigate the world.

Each young person with ASD is individual. </p>  
    </div>
    <br>
    <Tabs class="justify-center">
        <TabItem open title="Characteristics">
            <Characteristics />
        </TabItem>
        <TabItem title="Judo">
          <Judo />
        </TabItem>
        <TabItem title="Coaching">
            <Coaching />
          </TabItem>
        <TabItem title="SPELL">
          <SPELL />
        </TabItem>
        <TabItem title="Class Structure and Activities">
          <Classes />
        </TabItem>
        <TabItem disabled>
          <span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Disabled:</b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </TabItem>
      </Tabs>
    
</div>

<style>
    .top-container {
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    .top-item {
        border: 1px red dotted;
        display: flex;
        /* justify-content: center; */
        flex-direction: column;
        text-aLign: center;
        aLign-items: center;
        width: 30%;
        padding: 0 10px;
    }
    #main {
        
    }

    #accordion {
        background-color: blue;
    }
</style>