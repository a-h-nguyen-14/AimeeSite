<script>
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import { onMount } from 'svelte';

    let activeClass = "!text-red-600";
    let nonActiveClass = "bg-green text-red-600 hover:bg-red hover:text-green";
    let svg;
    $: activeUrl = $page.url.pathname;

</script>


<Navbar let:hidden let:toggle class="!bg-autism-blue">
    <NavBrand href="/">
      <img src="/icons/AdaptedJudo.svg" class="mr-3 h-20 " alt="Logo" style="fill: white" bind:this={svg}/>
      <Heading class="text-white">Adapted Judo</Heading>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} class="bg-autism-blue" {activeUrl}>
      <NavLi href="/" class="text-white">Home</NavLi>
      <NavLi class="cursor-pointer text-white">
        FactSheets<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
      </NavLi>
      <Dropdown class="w-44 z-20" {activeClass} >
        <DropdownItem href="/characteristics">What is Autism?</DropdownItem>
        <DropdownItem href="/judo">Why Judo?</DropdownItem>
        <DropdownItem href="/classes">Coaching Guidelines</DropdownItem>
      </Dropdown>
      <NavLi class="cursor-pointer text-white">
        Getting Started<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem href="/docs/components/navbar">Enrolment Process</DropdownItem>
        <DropdownItem href="/">Class Ideas</DropdownItem>
        <DropdownItem href="/">Resources</DropdownItem>
      </Dropdown>
    </NavUl>
  </Navbar>

<style>

</style>