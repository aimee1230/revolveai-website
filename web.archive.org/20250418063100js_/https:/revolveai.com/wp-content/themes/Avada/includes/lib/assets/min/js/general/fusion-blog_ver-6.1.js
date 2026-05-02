
document.addEventListener("DOMContentLoaded", function(){

    var grids = document.querySelectorAll(
        '.fusion-blog-layout-grid, .fusion-post-grid, .blog-grid'
    );

    grids.forEach(function(grid){

        if (typeof imagesLoaded !== 'undefined') {

            imagesLoaded(grid, function(){

                if (typeof Isotope !== 'undefined') {

                    new Isotope(grid, {
                        itemSelector: 'article, .fusion-post-grid-post',
                        layoutMode: 'fitRows',
                        percentPosition: true
                    });

                }

            });

        }

    });

});
