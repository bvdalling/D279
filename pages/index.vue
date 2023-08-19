<template>
    <div>
        <DefaultNavigation />

        <main>
            <HeroHeader>
                <template #title>
                    Paradigm Pet Professionals
                </template>
                <template #sub-title>
                    Evidence-based pet care advice for every pet lover
                </template>
                <template #body>
                    Paradigm Pet Professionals has 12 years’ experience working with pet owners, certifications in pet
                    health
                    and nutrition, and customer recognition for outstanding support
                </template>
                <template #image>
                    <img style="box-shadow: none;"
                        src="https://raw.githubusercontent.com/StephanWard/UI-Pet-Paradigm-Website/main/UI%20Webpage%20Project/Logo.png"
                        alt="Legacy PPP Logo">
                </template>
            </HeroHeader>

            <section style="">
                <h1>
                    Our Services
                </h1>

                <div class="services">
                    <div class="service">
                        <img src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJ1c2luZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            alt="Two people consulting" id="PEXSpert Counseling">
                        <label for="PEXSpert Counseling">
                            <h3 style="margin-top: 1rem;">
                                PEXSpert Counseling
                            </h3>
                            <p>
                                Our Pexperts has offered 1-1 and group
                                consulting for pet parents, breeders,
                                veterinarians, and pet shelters for over
                                12 years. Our consulting topics include
                            </p>

                            <ul>
                                <li>animal specific care</li>
                                <li>determine best breed for your family/needs</li>
                                <li>evidence based care</li>
                                <li>AND MORE!</li>
                            </ul>
                        </label>
                    </div>
                    <div class="service">
                        <img src="https://images.unsplash.com/photo-1605719125065-3dd9e3f79057?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="Women using our digital resourcs next to their cat" id="digital-resources">
                        <label for="digital-resources">
                            <h3 style="margin-top: 1rem;">
                                Digital Resources
                            </h3>
                            <p>
                                Looking for info on diet, exercise, and social requirements for your new friend?
                            </p>
                            <ul>
                                <li>
                                    Diet Information
                                </li>
                                <li>
                                    Exercise Regiments
                                </li>
                                <li>
                                    Play-Time Tips
                                </li>
                            </ul>
                        </label>
                    </div>
                    <div class="service">
                        <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="Adog waiting for adoption" id="adoption-resources">
                        <label for="adoption-resources">
                            <h3 style="margin-top: 1rem;">
                                Adoption Resources
                            </h3>
                            <p>
                                Looking for your new best friend? The following
                                organizations can help you find and adopt the
                                perfect companion:
                            </p>
                            <ul>
                                <li>
                                    General Adoption Resources
                                </li>
                                <li>
                                    ASPCA
                                </li>
                                <li>
                                    Fish Rescue
                                </li>
                                <li>
                                    Snake Rescue
                                </li>
                                <li>
                                    Bird Rescue
                                </li>
                            </ul>
                        </label>
                    </div>
                </div>
            </section>

            <ContactForm style="margin-top: 25vh; margin-bottom: 10vh;" />
        </main>
        <DefaultFooter />
    </div>
</template>

<style scoped>
.services {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
}

.services .service {
    flex-grow: 1;
    flex-shrink: 1;
    aspect-ratio: 1/1;
    width: 33%
}

@media (max-width: 700px) {
    .services {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4rem;
}

.services .service {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100% !important
}
}</style>