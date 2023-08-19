<template>
    <section class="hero-header">
        <div class="body">
            <h1>
                <slot name="title"></slot>
            </h1>
            <h3>
                <slot name="sub-title"></slot>
            </h3>
            <p class="body">
                <slot name="body"></slot>
            </p>
        </div>
        <div class="image">
            <slot name="image"></slot>
        </div>
    </section>
</template>

<style scoped>
.hero-header {
    max-height: 50vh;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    padding: 5rem 0rem;
}

.hero-header .body {
    width: 70%;
    height: 100%;
}

.hero-header .image {
    width: 30%;
}

.hero-header .image img {
    width: auto !important;
    height: 100%;
}

@media (max-width: 1080px) {
    section {
        padding: 1rem !important;
    }
    .hero-header {
        max-height: none!important;
        display: flex;
        align-content: center;
        justify-content: flex-start;
        padding: .5rem;
    }

    .hero-header .body {
        width: 100%;
        height: auto;
    }

    .hero-header .image {
        display: none;
    }
}


@media (max-width: 700px) {
    .hero-header {
        max-height: none!important;
        display: flex;
        align-content: center;
        justify-content: flex-start;
        padding: .5rem;
    }

    .hero-header .body {
        width: 100%;
        height: auto;
    }

    .hero-header .image {
        display: none;
    }
}
</style>