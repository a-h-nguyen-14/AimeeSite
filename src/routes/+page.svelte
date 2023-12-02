<script>
    import { Input } from 'flowbite-svelte';
    import TopCard from './topCard.svelte'; 

    let password = 'Peek2023';
    let attempt = 'Peek2023';
    
</script>

<div id="main" class="">
    <br>
    {#if attempt != password}
      <div class="flex flex-col justify-center items-center px-5 bg-opacity-10">
        <form>
        <p>Please enter website password:</p>
        <Input type="password" bind:value={attempt} />
      </form>
      </div>
    

    {:else}
    <br>

    <div class="flex flex-col items-center px-5 bg-opacity-10">
      <p class="font-Caveat text-4xl px-20">Creating safe, therapeutic and life-changing Judo programs for young people with Autism. </p>
    </div>

    <br>
    <div class="flex flex-col md:flex-row justify-center items-center px-5 bg-opacity-10">
      <TopCard href="/characteristics" iconName="autism" title="What is Autism?"/>
      <TopCard href="/judo" iconName="judo" title="Why Judo?"/>
      <TopCard href="/coaching" iconName="coaching" title="Coaching Guidelines"/>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center px-5 bg-opacity-10">
      <TopCard href="classes" iconName="class" title="Class Ideas"/>
      <TopCard href="classes" iconName="enrol" title="Enrolment Process"/>
      <TopCard href="classes" iconName="resources" title="Resources"/>
    </div>
    <br>
    <!-- <Tabs class="justify-center">
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
        <TabItem title="Fact Sheet">
          <Judo />
        </TabItem>
        <TabItem title="Getting Started">
          <Judo />
        </TabItem>
      </Tabs> -->
      {/if}
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