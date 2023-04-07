$(function () {
    var p1 = $(".dialogue .p1");
    var p2 = $(".dialogue .p2");
    var p3 = $(".dialogue1 .p3");
    var p4 = $(".dialogue1 .p4");
    var money = 50;
    var food = 100;
    var grades = 0;
    var width480 = $(".dialogue").width();
    var width400 = width480 - 80;

    // 显示时间
    var nowtimeinterval = setInterval(function () {
        var nowtime = nowTime();
        $(".timer").text(nowtime);
    }, 1000);


    $(".userpic").fadeIn(200, function () {
        $(".dialogue audio")[0].play();
        animationloading(p1, width400, function () {
            animationloading(p2, width480 - 100, function () {
                $(".mian h3").fadeIn();
                // 点击屏幕bottom0
                $(".bottom0").click(function (e) {
                    e.preventDefault();
                    $(".mian h3").fadeOut();
                    $(".bottom0").fadeOut(100, function () {
                        $(".bottom1").fadeIn(function () {
                            $(".userpic1").fadeIn();
                            $(".dialogue1 audio")[0].play();
                            animationloading(p3, 100, function () {
                                animationloading(p4, width400, function () {
                                    // 点击屏幕
                                    $(".bottom1Click").click(function (e) {
                                        e.preventDefault();
                                        $(this).fadeOut();
                                        $(".bottom2").fadeIn(function () {
                                            $(".dormitory").fadeIn();
                                            $(".dialogue2 audio")[0].play();
                                            animationloading($(".p5"), width400)
                                        });
                                    });
                                });
                            });
                        });

                    });
                });
            })
        })
    });
    // 宿舍样式事件处理
    $(".dormitory").mouseover(function (e) {
        $(e.target).css(
            "opacity", ".5"
        ).siblings().css("opacity", "1")
    });

    $(".dormitory").click(function (e) {
        e.preventDefault
        money -= 15;
        $(".magicVioce")[0].play();
        var src = $(e.target).attr('src');
        $(".cloud").css("display", "block").fadeIn(1000).slideUp(1000, function () {
            $(".mian").css({
                "background": 'url(' + src + ') no-repeat 0px 0px',
                " background-size": "contain"
            });
        });
        // 变装动画效果之后再显示，暂时略过
        $(".bottom2").fadeOut(function () {
            $(".coin-15").fadeIn().slideUp(500, function () {
                $(this).fadeOut(function () {
                    $(this).siblings("p").fadeIn().slideUp(300, function () {

                        $(".money").text(money);
                    }).fadeOut(function () {

                        // 手机动画
                        var flag = true;
                        var num1 = 0;
                        var player = $(".player")[0];
                        player.play();
                        var autoplayanimation = setInterval(function () {
                            num1++;
                            $(".bottom3 img").css("display", "block");
                            if (flag) {
                                flag = false;
                                animationTranslate($(".iphone"), 15, function () {
                                    animationRotate($(".iphone"), 15, function () {
                                        animationTranslate($(".iphone"), -10, function () {
                                            animationRotate($(".iphone"), -15, function () {
                                                flag = true;
                                            })
                                        })


                                    });
                                });
                            }
                            if (num1 === 5) {

                                clearInterval(autoplayanimation);
                                player.pause();
                                $(".dialogue3 audio")[0].play();
                                $(".bottom3").fadeOut(function () {
                                    // 教师出场
                                    $(".bottom4 img").fadeIn(3000, function () {
                                        $(".dialogue3").children().eq("0").fadeIn();
                                        animationloading($(".dialogue3").children().eq("2"), width480, function () {
                                            // 教师离场
                                            $(".bottom4").fadeOut(4500, function () {
                                                $(".dialogue4 audio")[0].play();
                                                $(".bottom5").fadeIn(3000, function () {
                                                    animationloading($(".dialogue4").children(".p4"), width400, function () {
                                                        animationloading($(".dialogue4").children(".p6"), width400, function () {

                                                            $(".bottom5Click").click(function (e) {
                                                                e.preventDefault;
                                                                $(".dialogue4 audio")[0].pause();
                                                                $(".mian").hide().siblings(".newhairHide").fadeIn();

                                                            });

                                                        });

                                                    });
                                                });

                                            });
                                        })
                                    });
                                });
                            }


                        }, 1000)


                    });
                })





            });
        });
    });
    // 移动发型
    var currentimg = null;
    var flagOnehair = true;
    var newhairwidth = $(".newhair").width();
    var startX = 0;
    var startY = 0;
    var startLeft = 0;
    var startTop = 0;
    var moveX = newhairwidth;
    var indexhair = 0;
    $(".hairimgsMove img").on("mousedown", function (e) {
        e.preventDefault;
        if (flagOnehair) {
            indexhair = $(this).index();
            flagOnehair = false;
            currentimg = $(this);
            startX = currentimg[0].offsetLeft;
            startY = currentimg[0].offsetTop;
            startLeft = e.pageX - startX;
            startTop = e.pageY - startY;
            e.preventDefault;
            $(".hairimgs").hide();
            $(this).css("opacity", .3).siblings().css("opacity", 1);
            $(document).on("mousemove", move);

        }
        // 

    });
    //
    $(document).on("mouseup", mouseUp);

    // mouseup
    function mouseUp(e) {
        e.preventDefault;
        $(this).off("mousemove", move);

        if (currentimg) {

            if (moveX >= newhairwidth / 2) {

                currentimg.css({ "left": startX, "top": startY });
                flagOnehair = true;


            }
            else {
                currentimg.css({ "left": startX, "top": startY });
                flagOnehair = true;

                if (indexhair >= 0) {
                    $(".magicVioce")[0].play();
                    $(".userhair img").attr({ 'src': './image/okhair' + indexhair + '.png', 'data_src': './image/okhair' + indexhair + '.png' }).fadeIn();
                    // 后面人物造型和语音
                    let arryColor = ["rgb(210, 177, 94)", "rgb(229, 204, 13)", "rgb(220, 32, 26)", "rgb(13, 229, 222)"];
                    let arryText = ["我这是长发美女！！", "我这是黄色预警！！", "我这是红色玫瑰！!", "我这是蓝色妖姬！！"];
                    // 造型
                    $(".userhairpic").attr('data_src', './image/okhair' + indexhair + '.png');
                    //语音
                    $(".differentAudio").attr("src", '../public/studio/differentAudio' + indexhair + '.mp3')
                    // 颜色和文本
                    $(".differentP").text(arryText[indexhair]).css("color", arryColor[indexhair]);
                    // 发型确定
                    $(" .hairGoClass").on("click", hairGoClass);
                    // 发型预览
                    $(" .hairLookclick").on("click", hairLook);
                }


            }
            currentimg.css("opacity", 1)
            $(".hairimgs").show();

        }





    }

    function move(e) {
        $(".hairimgs").show();
        currentimg.css("opacity", 1)
        moveX = e.pageX - startLeft - 80;
        let moveY = e.pageY - startTop - 70;
        currentimg.css({ "left": moveX, "top": moveY })

    };
    // 发型确定封装函数
    const hairGoClass = e => {
        e.preventDefault;
        flagOnehair = true;
        $(document).off("mouseup", mouseUp);
        currentimg.css({ "left": startX, "top": startY });
        // 加载
        $(".newhair").fadeOut().siblings('.iframe').show(10, loadingFinish);
    }
    // 发型预览封装函数
    const hairLook = (e) => {
        e.preventDefault;
        flagOnehair = true;
        $('.hairOK').show();
        $(".magicVioce")[0].play();
        currentimg.css({ "left": startX, "top": startY });
        $(".newhairHide").hide().siblings(".hairLookShow").fadeIn();
    }
    // 发型换好
    $(".hairOKclick").on("click", function (e) {
        e.preventDefault;
        $('.hairOK').hide();
        $('.useCheck').children("audio")[0].play();
        $('.useCheck').css('display', "block").fadeIn(1000);
    })
    // 发型返回
    $(".hairBackclick").on("click", function (e) {
        e.preventDefault;
        $(".hairLookShow").hide().siblings(".newhairHide").fadeIn();
        $('.useCheck').hide();
        $('.useCheck').children("audio")[0].pause();
    })
    // 加载转场完成
    const loadingFinish = (e) => {
        var videoshow = setTimeout(function () {
            $(".iframe").hide().siblings('.car-tool').fadeIn();
            $(".carVioce")[0].play();
        }, 3000);
    }
    // 视频
    $(".car-tool").children().eq("1").children("img").click(function () {
        // 视频进入
        $(this).parent().hide().siblings(".video").fadeIn(function () {
            food -= 50;
            money -= 10;
            $(".food").text(food);
            $(".money").text(money);
            $('.player1')[0].pause();
            $(this).children("video")[0].play();
            $(this).children("p").fadeIn().slideUp(1500);
            // 视频离开
            var videoHide = setTimeout(function () {
                $(".video").fadeOut();
                $(".car-tool").css({ "background": "url(./image/jiaoshi.jpg) no-repeat -361px -231px", "background-size": "250%" });
                // 辅导员出场
                $(".teacher2Show").fadeIn();
                $('.player1')[0].play();
                $(".teacher2Show audio")[0].play();
                animationloading($(".teacher2Text"), width400);
            }, 7000)

        });
    })
    // 辅导员离场 
    function teacher2Hide(e) {
        e.preventDefault;
        let teacher2HideFlag = true;
        if (teacher2HideFlag) {
            $(".teacher2Show audio")[0].pause();
            teacher2HideFlag = false;
            $(".teacher2Show").fadeOut(function () {
                $("this").siblings(".userhairDialogue").fadeIn();
                $(".differentAudio")[0].play();
                animationloading($(".differentP"), width480, function () {
                    // 清除监听teacher2Hide
                    $(".teacher2Show").off("click", teacher2Hide);
                });

            });
        };
    };
    $(".teacher2Show").on("click", teacher2Hide);
    // 学分-100
    const functionScores = (e) => {
        e.preventDefault;
        let scores = $('<p class="scores">学分-100</p>');
        $(".teacher2Text").css({ "width": "50%", "text-align": "center", "left": "21%" }).text("......");
        // 学生先离
        $(".userhairDialogue").fadeOut(function () {
            $(".teacher2Show").append(scores);
        });
        // 辅导员......再出
        $(".teacher2Show").fadeIn(function () {
            $(scores).fadeIn().slideUp(1000);
            grades -= 100;
            $(".grades").text(grades).css("color", "red");
            $(this).on("click", Notext)
            // 清除functionScores
            $(".userhairDialogue").off("click", functionScores);
        });

    };
    $(".userhairDialogue").on("click", functionScores);
    // 无法毕业
    let span1 = null;
    let span2 = null;
    const Notext = (e) => {
        e.preventDefault;
        // 创建span元素
        span1 = $('<span class="noText">由于你的学分被扣完，你逐渐摆烂，最</span>')
        span2 = $('<span class="noText1">终无法顺利毕业。</span>')
        $(".car-tool").append(span1, span2);
        $(".car-tool").children().eq("0").hide();
        // 辅导员......离
        $(".noGradeVioce")[0].play();
        $(".teacher2Show").hide(function () {
            animationloading(span1, width400, function () {
                animationloading(span2, width400, function () {
                    // 清除Notext
                    $(".teacher2Show").off("click", Notext)
                    // 失败调用
                    $(".car-tool").on("click", defaeat);
                });
            });
        });

    }
    // 失败
    function defaeat(e) {
        e.preventDefault;
        $(span1).hide();
        $(span2).hide();
        $("#defeat").css("display", "block").fadeIn(500, function () {
            $(".defeat audio")[0].play();
            $(".car-tool").off("click", defaeat);
            $(this).children(".userhair").fadeIn(500);
            $(this).click(function (e) {
                e.preventDefault;
                // $(".iframe iframe").attr("src", "../封面/index.html").fadeIn();
                // $(".car-tool").hide();
                // $(".iframe").fadeIn();
                location.href = "../封面/index.html";
                $('.player1')[0].pause();
            })
        });

    }

})