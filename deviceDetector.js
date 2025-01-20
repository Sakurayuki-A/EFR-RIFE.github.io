function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function checkDevice() {
    const isMobileDevice = isMobile();
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const isMobilePage = currentPage.startsWith('mobile-');

    // 如果是移动设备但不在移动页面
    if (isMobileDevice && !isMobilePage) {
        const mobilePage = 'mobile-' + currentPage;
        window.location.href = mobilePage;
    }
    // 如果是桌面设备但在移动页面
    else if (!isMobileDevice && isMobilePage) {
        const desktopPage = currentPage.replace('mobile-', '');
        window.location.href = desktopPage;
    }
}

// 页面加载时检查设备
document.addEventListener('DOMContentLoaded', checkDevice); 