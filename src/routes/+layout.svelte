<script>
  import "../app.postcss";
  import "../app.postcss";
  import Navbar from "./navbar.svelte";
  import Footer from "./footer.svelte";
</script>

<Navbar />

<div class="bg-gray-100 xl:w-10/12 mx-auto">
<slot />

</div>
<Footer></Footer>

