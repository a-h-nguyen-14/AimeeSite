<script>
  import "../app.postcss";
  import "../app.postcss";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";
    import { Input } from "flowbite-svelte";

  let password = 'Peek2023';
  let attempt = '';
</script>

{#if attempt !== password}
  <div class="flex flex-col justify-center items-center px-5 bg-opacity-10">
    <form>
    <p>Please enter website password:</p>
    <Input type="password" bind:value={attempt} />
  </form>
  </div>
{:else}

<Navbar />

<div class="bg-gray-100 xl:w-10/12 mx-auto">
<slot />

</div>

{/if}
<Footer></Footer>

