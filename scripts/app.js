// 页面加载完成后执行的代码
document.addEventListener('DOMContentLoaded', function() {
    // 显示页面加载提示
    console.log('Website has loaded successfully.');
    alert('Welcome to my website!');
    
    // 获取按钮元素
    const button = document.getElementById('myButton');
    
    // 为按钮添加点击事件
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});
