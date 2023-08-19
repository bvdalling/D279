<template>
    <div>
        <DefaultNavigation />

        <main>
            <ContactForm style="margin: 10vh auto;" />
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