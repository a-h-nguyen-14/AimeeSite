<script>
    import { Accordion, AccordionItem, List, Li, Heading } from 'flowbite-svelte';
</script>



<div class="flex flex-col justify-center items-center px-5 bg-opacity-10">
    <Heading tag="h2" class="text-center">What is Autism?</Heading>
    <p class="text-base dark:text-white"><em>Autism Spectrum Disorder (ASD) is a developmental condition which changes the way a person interacts with the world around them (Autism Spectrum Australia, 2023). People with ASD see and interact with the world differently than neurotypical individuals. As the world is set up for neurotypical people, it can be challenging for people with ASD to navigate the world.

        Each young person with ASD is individual.</em></p> 
    <br>
    <Heading tag="h4" class="text-center">Some common characteristics you may see in a judoka with autism are:</Heading>
    <br>
    <Accordion class="justify-center w-10/12">
        <AccordionItem>
            <span slot="header">Communication</span>
            <p class="font-black dark:text-white">Spoken</p>
            <List class="!max-w-none pl-5 mt-2 space-y-1">
                <Li>Less Likely to initiate conversation (NHS, 2022).</Li>
                <Li>Frequent use of certain phrases, sometimes out of context (Autism Spectrum Australia, 2023).</Li>
                <Li>Unusual patterns of speech e.g. talking at people, monotonous tone (Autism SA, 2023).</Li>
            </List>
            <br>
            <p class="font-black dark:text-white">Responding to others</p>
            <List class="!max-w-none pl-5 mt-2 space-y-1">
                <Li>Increased time to process spoken information (Autism Spectrum Australia, 2023).</Li>
                <Li>Difficulty understanding non-verbal communication such as facial expressions (Autism Awareness Australia, 2021).</Li>
                <Li>Difficulty with small talk, jokes, and sarcasm. (Autism Spectrum Australia, 2023).</Li>
                <Li>Avoiding eye contact (this does not mean they are not Listening) (NHS, 2022).</Li>
            </List>
        </AccordionItem>
        <AccordionItem>
            <span slot="header">Social Interaction</span>
            <List class="!max-w-none pl-5 mt-2 space-y-1">
               <Li>Prefer to play alone or next to others rather than with them (Autism Awareness Australia, 2021).</Li>
                <Li>Often Like hanging out with children younger than them or adults (Autism SA, 2023).</Li>
                <Li>Enjoy structured sociaLisation e.g. gaming (Autism Spectrum Australia, 2023).</Li>
                <Li>Difficulty with the concept of personal space (Autism, SA 2023).</Li>
            </List>
        </AccordionItem>
        <AccordionItem>
            <span slot="header">Interests/Strengths</span>
            <List class="!max-w-none pl-5 mt-2 space-y-1">
                <Li>Strong logical/visual thinking (Autism Spectrum Australia, 2023).</Li>
                <Li>Large knowledge on certain topics (Autism Spectrum Australia, 2023).</Li>
                <Li>Good memory for facts and figures (Autism Spectrum Australia, 2023).</Li>
                <Li>Skilled with technology (Autism Spectrum Australia, 2023).</Li>
                <Li>Often keen gamers (Autism Spectrum Australia, 2023).</Li>
            </List>
        </AccordionItem>
        <AccordionItem>
            <span slot="header">Behaviour</span>
            <List class="!max-w-none pl-5 mt-2 space-y-1">
                <Li>Rigid in following rules at school/sport/games. May get upset when others are not following rules correctly. (Autism Awareness Australia, 2021)</Li>
                <Li>Repetitive movements e.g. pacing, hand flapping, body-rocking, clapping (NHS, 2022).</Li>
                <Li>Difficulty with emotional regulation which often result in tantrums/aggression (Autism Awareness Australia 2021; Autism Spectrum Australia, 2023).</Li>
                <Li>Enjoy strict daily routine, get upset by change (Autism Awareness Australia, 2021).</Li>
                <Li>Repetitive behaviour e.g. lining up toys, computer games, books (Autism SA, 2023)</Li>
            </List>
        </AccordionItem>
        <AccordionItem>
            <span slot="header">Sensory</span>
            <List class="!max-w-none pl-5 mt-2 space-y-1">
                <Li>Can be very sensitive to certain sensations e.g. bright lights, loud noises, textures of clothes, foods of a certain texture (Autism SA, 2023).</Li>
                <Li>Can lack sensitivity to certain sensations e.g. temperature, pain (Autism SA, 2023).</Li>
            </List>
        </AccordionItem>
        <AccordionItem>
            <span slot="header">Stimming (self-stimulatory behaviour) (raisingchildren, 2022)</span>
            <p>Stimming is the repetition of movements or noises (raisingchildren, 2022). Common stims displayed by neurotypical individuals are clicking pens, bouncing leg, humming, and biting nails. Common stims displayed by individuals with autism are pacing, shaking objects, finger flicking and rocking.</p>

            <p>Everyone stims to regulates stress. People with ASD also stim to process sensory input, when they are experiencing under stimulation and for emotional expression (raisingchildren, 2022).</p>
        </AccordionItem>
    </Accordion>
</div>