(function numbersAnimation() {
    const state = {
        element: document.querySelector('#numbers-animation'),
        maxValue: 100000,
        value: 0,
        animationInterval: null,
        animationIntervalTimeout: 15,
        class: 'numbers-animation'
    }

    function init() {
        state.element.classList.add(state.class);
    }

    function animationStep() {
        if (state.value !== state.maxValue) {
            state.value += 1000;
            state.element.textContent = state.value;
        } else {
            clearInterval(state.animationInterval);
        }
    }

    function observerCallback(entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                init();
                state.animationInterval = setInterval(animationStep, state.animationIntervalTimeout);
            }
        });
    }

    const observerConfig = {
        options: {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        },
        observingElement: document.querySelector('.achievements__link')
    }

    const observer = new IntersectionObserver(observerCallback, observerConfig.options);

    observer.observe(observerConfig.observingElement);
})()

