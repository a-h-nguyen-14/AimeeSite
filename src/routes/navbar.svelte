<script>
    import { page } from '$app/stores';
    import { P, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading, Dropdown, DropdownItem, DropdownDivider } from 'flowbite-svelte';
    import { ChevronDownOutline } from 'flowbite-svelte-icons';
    import { onMount } from 'svelte';

    let menuClass = "text-white text-2xl !bg-autism-blue";
    let dropDownItemClass = "hover:text-autism-blue";
    let svg;
    $: activeUrl = $page.url.pathname;

</script>

<div class="bg-autism-blue">
  <Navbar let:hidden let:toggle class="!bg-autism-blue">
    <NavBrand href="/" class="mx-auto">
      <span class="flex flex-row items-center bg-autism-blue">
        <img src="/icons/AdaptedJudo.svg" style="height:120px" alt="Logo" bind:this={svg}/>
        <p class="text-white font-Caveat text-7xl"><strong>Adapted Judo</strong></p>
    </span>
    </NavBrand>
  </Navbar>
  <Navbar let:hidden let:toggle class="!bg-autism-blue">
    <NavHamburger on:click={toggle} class="!bg-autism-blue"/>
      <NavUl {hidden} class="!bg-autism-blue mx-auto" {activeUrl}>
        <NavLi href="/" class={menuClass}>Home</NavLi>
        <NavLi class={menuClass + " cursor-pointer"}>
          Factsheets<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown class="w-44 z-20 bg-autism-blue text-white" >
          <DropdownItem href="/characteristics" class={dropDownItemClass}>What is Autism?</DropdownItem>
          <DropdownItem href="/judo" class={dropDownItemClass}>Why Judo?</DropdownItem>
          <DropdownItem href="/coaching" class={dropDownItemClass}>Coaching Guidelines</DropdownItem>
        </Dropdown>
        <NavLi class={menuClass + " cursor-pointer"}>
          Getting Started<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
        </NavLi>
        <Dropdown class="w-44 z-20 bg-autism-blue text-white">
          <DropdownItem href="/enrolment" class={dropDownItemClass}>Enrolment Process</DropdownItem>
          <DropdownItem href="/classes" class={dropDownItemClass}>Class Ideas</DropdownItem>
          <DropdownItem href="/resources" class={dropDownItemClass}>Resources</DropdownItem>
        </Dropdown>
      </NavUl>
  </Navbar>
</div>

  
<style>

</style>