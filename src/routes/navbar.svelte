<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Heading } from 'flowbite-svelte';
  </script>

<Navbar let:hidden let:toggle class="bg-black">
    <NavBrand href="/">
      <Heading>Judo Autism</Heading>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">Our Purpose</NavLi>
      <NavLi href="/bibliography">Bibliography</NavLi>
    </NavUl>
  </Navbar>