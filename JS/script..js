let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let progressBar = entry.target.querySelectorAll(".progress-bar");
            progressBar.forEach(bar => {
                let target = bar.getAttribute("data-target");
                bar.style.width = target + "%";
                observer.unobserve(entry.target);
            })
        }
    })
}, { threshold: 0.5 });
observer.observe(document.querySelector(".progress-section"));