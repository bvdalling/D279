<template>
    <section class="contact">
        <div id="sidePanel">
            <h1>Contact Us!</h1>
            <p>We look forward to assisting you! Please provide
                your contact information and we will get back to
                you shortly.</p>
            <form action="" @submit.prevent="e => null">
                <input type="text" placeholder="name">
                <input type="email" placeholder="jane.doe@example.com">
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message..."></textarea>
                <div>
                    <button class="btn btn__primary">Send</button>
                    <button class="btn btn__link">Reset Form</button>
                </div>
            </form>
        </div>
        <div ref="right-panel"
            data-src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80">
        </div>
    </section>
</template>

<script setup>
onMounted(async () => {
    let sidePanel = document.getElementById('sidePanel')

    window.requestAnimationFrame(() => {
        document.querySelectorAll('[data-src]').forEach(el => {
            el.style.backgroundImage = 'url(' + el.getAttribute('data-src') + ')'
            el.style.height = sidePanel.clientHeight + 'px'
        })
    })
})
</script>

<style scoped>
.contact {
    display: flex;
    flex-wrap: nowrap;
    gap: 2rem;
}

.contact>div {
    width: 50%;
}

.contact>div:last-of-type {
    --data-src: '';
    padding: 1rem;
    height: 100%;
    background-image: var(--data-src);
    background-repeat: no-repeat;
    background-size: cover;
}

form {
    display: flex;
    flex-direction: column;
}

form>input,
form>textarea {
    margin: .5rem 0;
    background-color: white;
    padding: 1rem .5rem;
    border: 1px solid var(--border-color);
    border-radius: 5px;
}

@media (max-width: 700px) {
    .contact>div:last-of-type {
        display: none !important;
    }

    .contact>div {
        width: 100%;
    }
}</style>