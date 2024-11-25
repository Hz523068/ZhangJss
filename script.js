// 初始化 Swiper
document.addEventListener('DOMContentLoaded', function() {
    // 轮播图初始化
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });

    // 数据统计动画
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000; // 动画持续时间（毫秒）
                const start = 0;
                const increment = target / (duration / 16); // 每16ms增加的值

                let current = start;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        entry.target.textContent = Math.round(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.textContent = target;
                    }
                };

                requestAnimationFrame(updateCounter);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 初始化所有工具提示
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// 产品筛选功能
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.swiper-slide').forEach(slide => {
            if (filter === 'all' || slide.getAttribute('data-type') === filter) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    });
}); 