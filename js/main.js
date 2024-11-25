// 图片轮播效果
function initializeSliders() {
    const sliders = document.querySelectorAll('.card-slider');
    
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
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
            this.onerror = null; // 防止循环调用
            this.src = '#'; // 使用空白图片
            this.classList.add('img-error');
        };
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initializeSliders();
    handleImageErrors();
}); 