<script>
    import { Accordion, AccordionItem, Button, Heading, Li, List } from 'flowbite-svelte';
    const items = Array(5);

    const open_all = () => items.forEach((_, i) => (items[i] = true));
    const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<div class="flex flex-col justify-center items-center px-5 bg-opacity-10">
    <Heading tag="h2" class="text-center">SPELL</Heading>
    <br>
    <p>The SPELL framework can be used to ensure best practice coaching. It was developed by the UK National Autistic Society and highlights five principles that are essential to uphold when  coaching young adults with ASD (Burns & Johnston, 2023).</p>
    <br>
    <span><Button on:click={open_all}>Open all</Button><Button on:click={close_all}>Close all</Button></span>
    <Accordion class="justify-center w-10/12" multiple>
        <AccordionItem bind:open={items[0]}>
            <span slot="header">S: Structure</span>
            <p>Routine and structure are imperative for a successful ASD class (Adami et al., 2022; Kimber et al., 2023; National Autistic Society 2020). Change is often a major anxiety source for people with ASD, and so minimising unexpected situations and preparing the athletes for change as much as possible is best practice (Autism Awareness Australia 2021).</p>
            <br>
            <p>Tips:</p>
            <List class="max-w-none pl-5 mt-2 space-y-1">
                <Li>Suggest that the students come to class 5-10 minutes early. This will allow them to get used to the environment.</Li>
                <Li>Provide a training schedule to students prior to the session (can use pictures instead of words for students who are not literate) (Burns & Johnston, 2023).</Li>
                <Li>Maintain a consistent structure and do not change too many things at once (Adami et al., 2022).</Li>
                <Li>Consider performing each section of the session in a particular area. E.g. warm up is always in the right hand corner (Burns & Johnston, 2023).</Li>
                <Li>Have a structure for unstructured times as well e.g. drink breaks (National Autistic Society 2020).</Li>
                <Li>Aim for a 1:2 staff:student ratio (Rosso, 2016).</Li>
            </List>
        </AccordionItem>
        <AccordionItem bind:open={items[1]}>
            <span slot="header">P: Positive approaches and expectations</span>
            <p>To get the most out of athletes with ASD, a positive approach should be used with clear expectations set out. (Burns & Johnston, 2023). This builds the athletes self-esteem and reduces anxiety (Burns & Johnston, 2023).</p>
            <List class="max-w-none pl-5 mt-2 space-y-1">
                <Li>Clearly set out the rules and what is expected. Explain that Judo is not to be practiced outside of class (Burns & Johnston, 2023).</Li>
                <Li>For adolescents, printing out the rules and getting them to sign them can be a good method. (Burns & Johnston, 2023).</Li>
                <Li>Use positive reinforcement as much as possible and celebrate all successes (Rosso, 2016).</Li>
                <Li>Incorporate calming techniques throughout the lesson.</Li>
                <Li>Use any interests of students as motivators. E.g. if they love superheroes, name each station in a circuit after a superhero (Burns & Johnston, 2023).</Li>
                <Li>Link changes to an activity the athlete is familiar with (Burns & Johnston, 2023). E.g. if introducing skipping sidewards and doing seoi nage for the first time, relate it to previously done activity of walking backwards and doing seoi nage.</Li>
                <Li>If a student is stimming, unless it is harming someone, do not stop them (Adami et al., 2022).</Li>
            </List>
        </AccordionItem>
        <AccordionItem bind:open={items[2]}>
            <span slot="header">E: Empathy</span>
            <p>It is important to understand each judoka as much as possible to increase the trust and communication between the judoka and coach (Burns & Johnston, 2023).</p>
            <List class="max-w-none pl-5 mt-2 space-y-1">
                <Li>Establish their strengths, weaknesses, interests and triggers (Burns & Johnston, 2023).</Li>
            </List>
        </AccordionItem>
        <AccordionItem bind:open={items[3]}>
            <span slot="header">L: Low Arousal</span>
            <p>ASD Judo classes should be run in a quiet and distraction free environment (Kimber et al., 2023; National Autistic Society 2020).</p>
            <br>
            <p>Tips:</p>
            <List class="max-w-none pl-5 mt-2 space-y-1">
                <Li>Don’t run other classes at the same time (National Autistic Society 2020).</Li>
                <Li>Keep the environment distraction free e.g. no toys on the side of the mat (Adami et al., 2022; National Autistic Society 2020).</Li>
                <Li>Only get out the equipment you are currently using (National Autistic Society 2020).</Li>
                <Li>Designate a quiet area, for example a tent, where Judoka can go if they feel overstimulated/overwhelmed (Adami et al., 2022).</Li>
            </List>
        </AccordionItem>
        <AccordionItem bind:open={items[4]}>
            <span slot="header">L: Links</span>
            <p>A relationship should be formed between the coach and the athlete and their parents/carers if possible. Open communication between all parties ensures the coach has as much valuable information as possible (Burns & Johnston, 2023).</p>
            <br>
            <p>Prior to the athlete commencing their first class, provide parents with a form to ascertain what works at home, what triggers the athlete, and what works best in response to any behavioural issues (Kimber et al., 2023). (link to screening form)</p>
            <List class="max-w-none pl-5 mt-2 space-y-1">
                <Li>What are their interests?</Li>
                <Li>What upsets them?</Li>
                <Li>How do you know if they are upset?</Li>
                <Li>How do you redirect them when they are upset?</Li>
                <Li>Do they exhibit any stimming behaviours?</Li>
                <Li>Are they hyper/hypo sensitive to any senses?</Li>
            </List>
        </AccordionItem>
    </Accordion>
</div>