<template>
    <footer>
        <div class="top-row">
            <div class="logo">
                <img src="data:image/png;base64,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"
                    alt="Paradigm Pet Consulting Logo" style="max-width: 150px; box-shadow: none;">
            </div>
            <div class="links">
                <h3>Popular Links</h3>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dogs">Dogs</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/cats">Cats</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/birds">Birds</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>

                </ul>
            </div>
        </div>
        <div class="bottom-row">
            &copy; Paradigm Pet Professionals
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: white;
}

footer .top-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

footer .top-row > * {
    margin: 0 1rem;
}

footer .bottom-row {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}

footer ul {
    list-style: none;
    padding: 0;
}

footer ul li {
    margin: .5rem 0;
    text-align: right;
}

</style>