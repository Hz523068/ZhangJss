// 等待 DOM 完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 初始化 Swiper 轮播图
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 800,
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
        on: {
            init: function() {
                // 确保图片加载完成后更新swiper
                const images = document.querySelectorAll('.swiper-slide img');
                images.forEach(img => {
                    img.onload = function() {
                        swiper.update();
                    };
                });
            }
        }
    });

    // 数据统计动画
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // 创建 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                animateValue(element, 0, target, 2000);
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.1
    });

    // 观察所有数字元素
    document.querySelectorAll('.stat-number').forEach(el => {
        observer.observe(el);
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
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