(function progressBarAnimation() {
    const state = {
        value: 0,
        maxValue: 80,
        valueElement: document.querySelector('.progress-bar__value'),
        animationInterval: null,
        animationIntervalTimeout: 15
    }

    function animationStep() {
        if (state.value !== state.maxValue) {
            state.value++;
            state.valueElement.style.width = `${state.value}%`;
        } else {
            clearInterval(state.animationInterval);
        }
    }

    function observerCallback(entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
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
        observingElement: document.querySelector('.achievements__link'),
    }

    const observer = new IntersectionObserver(observerCallback, observerConfig.options);

    observer.observe(observerConfig.observingElement);
}())