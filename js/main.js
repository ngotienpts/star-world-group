document.addEventListener("DOMContentLoaded", function () {

    // xử lý sự kiện chuyển tab
    

    // Xử lý video tỉ lệ 16:9
     function handleVideo_16x9() {
        const video169s = document.querySelectorAll(".js__video169");
        if (video169s.length === 0) return;
        video169s.forEach((video169) => {
            var videos = video169.querySelectorAll("iframe");
            if (videos.length === 0) return;
            videos.forEach((video) => {
                var w = video.offsetWidth;
                video.style.height = (w * 9) / 16 + "px";
            });
        });
    }


    // xử lý sự kiện collapse
   function handleCollapse() {
        const collapseContainers = document.querySelectorAll('.js__collapseContainer');
        if (collapseContainers.length === 0) return;

        collapseContainers.forEach((collapseContainer) => {
            const trigger = collapseContainer.querySelector('.js__collapse');
            
            if (!trigger) return; // Bảo vệ code nếu không tìm thấy nút bấm

            trigger.onclick = function() {
                // Kiểm tra xem item hiện tại đã active chưa
                const isActive = collapseContainer.classList.contains('active');

                // 1. Loại bỏ class 'active' khỏi TẤT CẢ các containers
                collapseContainers.forEach(container => {
                    container.classList.remove('active');
                });

                // 2. Nếu item vừa bấm lúc đầu CHƯA active, thì giờ hãy bật nó lên
                // (Nếu nó đang active rồi thì việc click sẽ đóng nó lại - cơ chế toggle)
                if (!isActive) {
                    collapseContainer.classList.add('active');
                }
            };
        });
    }


    // xử lý sự kiện show menu mobile
    function handleMenuMobile () {
        // show menu
        const bod = document.querySelector('body')
        const clickShowMenuMbs = document.querySelectorAll('.js__clickShowMenuMb');
        const closeSubMenuMb = document.querySelector('.js__closeSubMenuMb');
        const subMenuMb = document.querySelector('.js__subMenuMb');

        if(clickShowMenuMbs.length === 0 && !closeSubMenuMb) return;
        clickShowMenuMbs.forEach((clickShowMenuMb)=>{
            clickShowMenuMb.onclick = function() {
                subMenuMb.classList.add('active');
                bod.classList.add('hidden')
            }
        })
        closeSubMenuMb.onclick = function(){
            subMenuMb.classList.remove('active');
            bod.classList.remove('hidden')
        }

        const subMenuMbContainers = document.querySelectorAll('.js__subMenuMbContainer');

        if (subMenuMbContainers.length === 0 ) return;
        
        subMenuMbContainers.forEach((subMenuMbContainer)=>{

            const subMenuMbItems = subMenuMbContainer.querySelectorAll('.js__subMenuMbItem');
            const subMenuMbDropdowns = subMenuMbContainer.querySelectorAll('.js__subMenuMbDropdown');
            
            if (subMenuMbItems.length === 0 ) return;
            
            subMenuMbItems.forEach((subMenuMbItem)=>{
                const showSubMenuMbItem = subMenuMbItem.querySelector('.js__showSubMenuMbItem');
                
                if(!showSubMenuMbItem) return

                showSubMenuMbItem.onclick = function() {
                    subMenuMbItem.classList.toggle('active')
                }
            });

            if (subMenuMbDropdowns.length === 0 ) return;

            subMenuMbDropdowns.forEach((subMenuMbDropdown)=>{
                const showSubMenuMbDropdown = subMenuMbDropdown.querySelector('.js__showSubMenuMbDropdown');
                
                if(!showSubMenuMbDropdown) return

                showSubMenuMbDropdown.onclick = function() {
                    subMenuMbDropdown.classList.toggle('active')
                }
            });

            

        });

    }


    // Khởi tạo fancybox
    function initFancybox() {
        const fancyboxes = document.querySelectorAll(".fancybox-full");
        if (fancyboxes) {
            fancyboxes.forEach(function () {
                $(".fancybox-full a").fancybox();
            });
        }
    }

    // Xử lý thanh header dính
    function handleStickyHeader() {
        const stickyHeaderPC = document.querySelector(".js__stickyHeader");
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }


    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        handleStickyHeader();
        // handleBackTopVisibility();
        if (typeof scrollToVideo === 'function') {
            const list = document.querySelector(".js__shortList");
            if (list) list.style.transition = "none"; 
            
            scrollToVideo(currentIndex);
        }
        
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleMenuMobile();
        handleCollapse();
        // slide
        // end slide
        // initFancybox();
        // handleChangeTab();
        window.addEventListener('scroll',handleWindowScroll);
        window.addEventListener('resize',handleWindowScroll);
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});