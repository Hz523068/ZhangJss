// 图片轮播效果
function initializeSliders() {
    const sliders = document.querySelectorAll('.card-slider');
    
    if (!sliders.length) return;
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        
        if (images.length < 2) return;
        
        let currentIndex = 0;
        
        // 初始化显示第一张图片
        images[0].style.opacity = '1';
        images[1].style.opacity = '0';
        
        // 定时切换图片
        setInterval(() => {
            images[currentIndex].style.opacity = '0';
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.opacity = '1';
        }, 3000);
    });
}

// 图片加载错误处理
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.onerror = function() {
            this.onerror = null;
            this.src = '#';
            this.classList.add('img-error');
            console.error(`Failed to load image: ${img.src}`);
        };
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeSliders();
        handleImageErrors();
    } catch (error) {
        console.error('Initialization error:', error);
    }
}); 