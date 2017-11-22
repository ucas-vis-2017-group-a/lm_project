###用iframe添加html示例，虽然没有用。。。(因为现在大家已经在框架基础上做了)
<script>
                // 热力图加载时总有点延迟，需要添加过度元素
                $("#container").append("<iframe> </iframe>"); //用jquery加载iframe的原因在于iframe一开始出现的小框框
                //$("iframe").hide();
                $("iframe").attr("src", "BaiduMap.html");
                $("iframe").attr("width", $(window).width() + 'px').attr("height", $(window).height()-56.4 + 'px').attr("margin","0");
                /*$("iframe").on("load", function () {
                    var content = $("iframe").contents()[0];
                    //$(".heatmap-canvas", content).on("load", function () {
                        $("iframe").show();
                    //});
                });*/

</script>