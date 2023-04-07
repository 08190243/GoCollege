window.addEventListener("load", function () {


    // 图片懒加载
    const images = document.querySelectorAll("img");

    // entries是参数且为数组
    const callback = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                const data_src = image.getAttribute("data_src");
                image.setAttribute("src", data_src);
                observer.unobserve(image);
            }


        });

    }
    const observer = new IntersectionObserver(callback);
    images.forEach(image => {
        observer.observe(image);
        // 看见了触发一次，不可见又触发一次callback函数

    });

})

