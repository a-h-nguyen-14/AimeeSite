<script>
    import { Accordion, AccordionItem, Button, Heading, Li, List } from 'flowbite-svelte';
    import { PlusSolid, MinusSolid, MinusOutline } from 'flowbite-svelte-icons';

    const items = Array(5);

    const open_all = () => items.forEach((_, i) => (items[i] = true));
    const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<div class="flex flex-col justify-center items-center px-5 bg-opacity-10">
    <Heading tag="h2" class="text-center mt-5">Coaching Guidelines</Heading>
    <br>
    <div class="w-10/12"><Button on:click={open_all} outline={true} class="float-right" size="sm"><PlusSolid class="w-2.5"></PlusSolid></Button><Button on:click={close_all} class="float-right" outline={true} size="sm"><MinusOutline class="w-2.5"></MinusOutline></Button></div>
    <Accordion class="justify-center w-10/12" multiple>
        <AccordionItem bind:open={items[0]}>
            <span slot="header">Communication:</span>
            <List class="!max-w-none pl-5 mt-2 space-y-1">
                <Li>Always speak in a calm and clear voice (Adami et al., 2022).</Li>
                <Li>Don’t force eye-contact, this can be very uncomfortable for them (a lack of eye-contact does not mean the student is not paying attention) (Kimber et al., 2023).</Li>
                <Li>Don’t rely on facial expression/body language to communicate information (National Autistic Society, 2020).</Li>
                <Li>If you make a joke and they do not get it, explain the joke (Adami et al., 2022).</Li>
            </List>
        </AccordionItem>
        <AccordionItem bind:open={items[1]}>
            <span slot="header">Demonstrating activities</span>
            <p>The use of clear and literal instructions accompanied by a demonstration are a good coaching strategy.</p>
            <br>
            <p>Tips:</p>
            <List class="!max-w-none pl-5 mt-2 space-y-1">
                <Li>Use brief and clear instructions and try to repeat the same instructions in the future (Kimber et al., 2023).</Li>
                <Li>Accompany instructions with a demonstration (Kimber et al., 2023).</Li>
                <Li>Avoid using non-literal phrases (National Autistic Society 2020).</Li>
                <Li>Allow for time to process information (around 6 seconds) before adding more (National Autistic Society, 2020).</Li>
            </List>
        </AccordionItem>
        <AccordionItem bind:open={items[2]}>
            <span slot="header">Behavioural management in response to a meltdown/tantrum</span>
            <p>Meltdowns/tantrums are due to an inability to regulate emotions in response to an issue (Adami et al., 2022). This can be over-simulation, sudden change, hunger, etc.
            </p>
            <br>
            <p>Steps to take:</p>
            <List tag="ol" class="!max-w-none pl-5 mt-2 space-y-1">
                <Li>Try to not get mad and never raise your voice (Adami et al., 2022)This will only further over-simulate the student and make it harder for them to regain control of their emotions</Li>
                <Li>Attempt to identify the cause of the misbehaviour (Adami et al., 2022).</Li>
                <Li>If possible, send the student to a ‘time-in’ area. This should be a pre-designated quiet area that they can go to when they are over-simulated. Tell them you will leave them there for two minutes, and then come back and see if they are ready to talk/come back to the group. If not, set another two minutes. (Burns & Johnston, 2023).</Li>
                <Li>When the student has calmed down, give them advice if appropriate (Adami et al., 2022).</Li>
            </List>
        </AccordionItem>
    </Accordion>
</div>