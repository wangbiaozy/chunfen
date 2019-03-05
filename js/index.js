//记住哪点击的活动规则
var rules='';
//记住首页的是否关注
var count = 0;
//游戏次数
var play_cont=0;
//游戏次数
var play_conts=0;
//工具太阳次数
var tool_cont1=0;
var tool_cont12=0;
var tool_cont13=0;
//工具水壶次数
var tool_cont2=0;
var tool_cont22=0;
var tool_cont23=0;
//工具施肥次数
var tool_cont3=0;
var tool_cont32=0;
var tool_cont33=0;
// 初中成熟1
var stage_cont;
// 初中成熟2
var stage_cont2;
// 初中成熟3
var stage_cont3;
//是否绑定手机 是1 否0
var photo_num = 0;
//异网还是本网 本网为1  异网为0
var network = 0;
//奖品1领取状态
var prizeStatus1 = 0;
//奖品2领取状态
var prizeStatus2 = 0;
//奖品3领取状态
var prizeStatus3 = 0;
//领取的第几次的奖品
var prize='';
//第一论游戏的参数
var play_arr=[
    {
        "1":[
            {"本网":["风信子","兰花"]},
            {"异网":"牡丹"}
        ]
    },
    {
        "2":[
            {"本网":["兰花","雏菊","马蹄莲"]},
            {"异网":"马蹄莲"}
        ]
    },
    {
        "3":"郁金香"
    }
    ];
//游戏奖励对照表
var prize_arr=[
    {"风信子":"200MB"},
    {"兰花":"500MB"},
    {"雏菊":"1GB"},
    {"马蹄莲":"2GB"},
    {"牡丹":"电子券"},
    {"郁金香":"抽大奖"}
];
//点工具重复
var tool_arr=[
    {"0":"您已经为种子添加过阳光了"},
    {"1":"您已经为种子浇过水了"},
    {"2":"您已经为种子施过肥了"}
];
//初期  中期 成熟期
var stage1_arr=["初","中","成熟"];
//阳光 浇水 施肥
var stage_arr=["添加了阳光","浇水","施肥"];

// 普通页面跳
function changes(user1,user2) {
    var aa = document.getElementById(user1);
    aa.style.display = "none";
    var bb = document.getElementById(user2);
    bb.style.display = "block";
}
//取消方法
function cancel(user) {
    var bb = document.getElementById(user);
    bb.style.display = "none";
}

//跳转公共页面的方法
function activityRules(user1,user2){
    rules = user1;
    var user2 = user2;
    if ((rules=='homepage'||rules=='friendEntrance')&& user2=='qrcode'){
        verification(rules);
        return;
    }
    var aa = document.getElementById(user1);
    aa.style.display = "none";
    var bb = document.getElementById(user2);
    bb.style.display = "block";
}
//共有页面里面确定的方法
function activityDetermination(user) {
    var rule = rules;
    var a = document.getElementById(user);
    a.style.display = "none";
    var b = document.getElementById(rule);
    b.style.display = "block";
}
//验证那里跳转的二维码
function verification(a) {
    console.log("二维码验证中。。。"+count);
    var zhengchang = document.getElementById("homepage");
    var erweima = document.getElementById("qrcode");
    if(a=='homepage'){
        console.log("正常入口");
        if(count==0){
            console.log("没有点击过");
            zhengchang.style.display = 'none';
            erweima.style.display = 'block';
            //TODO 像后台请求返回判断跳转
            setTimeout(function () {
                erweima.style.display = 'none';
                document.getElementById("gameplay_box").style.display = 'block';
            },2000);
            count=1;
            return;
        }
        if(count==1){
            console.log("正常入口直接进入。。。");
            zhengchang.style.display = 'none';
            document.getElementById("gameplay_box").style.display = 'block';
            return;
        }
    }
    if(a=='friendEntrance'){
        console.log("好友入口");
        document.getElementById("friendEntrance").style.display = 'none';
        document.getElementById("qrcode").style.display = 'block';
        setTimeout(function () {
            document.getElementById("qrcode").style.display = 'none';
            document.getElementById("homepage").style.display = 'block';
            document.getElementById("helpFriends").style.display = 'block';
            count=1;
            rules='homepage';
            return;
        },2000);
        return;
    }
    return;
}
//活动规则
document.getElementById("confirm").addEventListener('click',function(){
    var huodong_rules =rules;
    var activityRules_box = document.getElementById("activityRules_box");
    if(huodong_rules=="homepage"||huodong_rules=="friendEntrance"){
            activityRules_box.style.display = "none";
            document.getElementById(huodong_rules).style.display = "block";
    }else {
        activityRules_box.style.display = "none";
        document.getElementById(huodong_rules).style.display = "block";
    }
});
//玩法锦囊
document.getElementById("gameplay").addEventListener('click',function(){
   var gameplay_box = document.getElementById("gameplay_box");
    if(rules=="homepage"||rules=="friendEntrance"){
        gameplay_box.style.display = "none";
        document.getElementById("homepage").style.display = "block";
        document.getElementById("first_").style.display = "block";
    }else {
        gameplay_box.style.display = "none";
        document.getElementById(rules).style.display = "block";
    }
});
//去种植
document.getElementById("toplant").addEventListener('click',function(){
        document.getElementById("helpFriends").style.display = "none";
});
//奖励花园
document.getElementById("reward").addEventListener('click',function(){
    document.getElementById("index").style.display = "none";
    document.getElementById("gardenAward_box").style.display = "block";
    rules='gardenAward_box';
});
//花园返回
document.getElementById("returns").addEventListener('click',function(){
    document.getElementById("gardenAward_box").style.display = "none";
    document.getElementById("index").style.display = "block";
    rules='index';
});
//花园里面规则
document.getElementById("garden_active").addEventListener('click',function(){
    document.getElementById("gardenAward_box").style.display = "none";
    document.getElementById("activityRules_box").style.display = "block";
});
//第一次弹窗确定
document.getElementById("fisrt_true").addEventListener('click',function () {
    document.getElementById("first_").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("index").style.display = "block";
    play_cont=1;
    tool_cont1=1;
    tool_cont2=1;
    tool_cont3=1;
    defaultCont();
});

//工具默认显示次数
function defaultCont(){
    var conts_1= document.getElementById("conts_1");
    var conts_2= document.getElementById("conts_2");
    var conts_3= document.getElementById("conts_3");
    var planting = document.getElementById("planting");
    if(play_cont==1){
        xianshi(1);
    }
    if(play_cont==2){
        xianshi(2);
    }
    if(play_cont==3){
        xianshi(3);
    }
    function xianshi(a) {
        conts_1.innerHTML = a;
        conts_2.innerHTML = a;
        conts_3.innerHTML = a;
        planting.innerHTML = 3-a;
    }
}
//分享能量
document.getElementById("obtain").addEventListener('click',function () {
    document.getElementById("toolTipBox").style.display = 'block';
    document.getElementById("immature").style.display = 'none';
    document.getElementById("acquiringEnergy").style.display = 'block';
});

//发送好友
document.getElementById("sharing").addEventListener('click',function () {
    document.getElementById("toolTipBox").style.display = 'none';
    document.getElementById("homepage").style.display = 'none';
    document.getElementById("share").style.display = 'block';
});
//点击花弹出
document.getElementById("flower1").addEventListener('click',function () {
    document.getElementById("toolTipBox").style.display = 'block';
});
document.getElementById("flower2").addEventListener('click',function () {
    document.getElementById("toolTipBox").style.display = 'block';
});
document.getElementById("flower3").addEventListener('click',function () {
    //收获
    harvestingMethod();
});
//点击小手
document.getElementById("hand").addEventListener('click',function () {
    //收获
    if(play_cont==1){
        harvestingMethod();
        play_conts =2;
        return;
    }
    if(play_cont==2){
        harvestingMethod2();
        play_conts=3;
        return;
    }
    if(play_cont==3){
        harvestingMethod3();

    }
});
document.getElementById("binding_bth").addEventListener('click',function () {
    //异网本网调用方法
    document.getElementById("flower").style.display = 'none';
    document.getElementById("hand").style.display = 'none';
    photo_num =1;
    netWorks();
});
//第一次收获
function harvestingMethod() {
    document.getElementById("flower").style.display = 'none';
    document.getElementById("hand").style.display = 'none';
    if(photo_num==1){
        netWorks();
    }else if(photo_num==0){
        document.getElementById("index").style.display = 'none';
        document.getElementById("binding").style.display = 'block';
    }
}
//第二次收获
function harvestingMethod2() {
    document.getElementById("flower").style.display = 'none';
    document.getElementById("hand").style.display = 'none';

    if(photo_num==1){
        netWorks();
    }else if(photo_num==0){
        document.getElementById("index").style.display = 'none';
        document.getElementById("binding").style.display = 'block';
    }
}
//第三次收获
function harvestingMethod3() {
    if(network == 1){
        document.getElementById("flower").style.display = 'none';
        document.getElementById("hand").style.display = 'none';
        document.getElementById("index").style.display = "none";
        document.getElementById("homepage").style.display = "block";
        document.getElementById("jackpot").style.display = "block";
        gardenPrize(3,'111','tulips1','333','change');
    }
    if(network == 0){
        document.getElementById("index").style.display = "none";
        document.getElementById("homepage").style.display = "block";
        document.getElementById("jackpot").style.display = "block";
        gardenPrize(3,'111','tulips1','333','change');
    }
}
//点击工具栏的操作方法
function toolbarClick(id1,id2,cont){
    document.getElementById(id1).addEventListener('click',function () {
        console.log(play_cont+"/n"+tool_cont1);

        if(play_cont==1){
            console.log("play_cont==1");
            if(id2=="conts_1"){
                if(tool_cont1==0){
                    document.getElementById("tips").style.display = 'block';
                    document.getElementById("tips").innerHTML= tool_arr[0]["0"];
                    console.log(tool_arr[0]["0"]);
                    tool_cont1=0;
                    setTimeout(function () {
                        document.getElementById("tips").style.display = 'none';
                    },1000);
                }else{
                    tool_cont1 = tool_cont1-1;
                    document.getElementById(id2).innerHTML =tool_cont1;

                    if(tool_cont1==0){
                        document.getElementById(id1).style.background= 'url("img/bg_'+ cont +'.png")'+'no-repeat';
                        document.getElementById(id1).style.backgroundSize= 'contain';
                        document.getElementById(id2).style.display = 'none';
                    }
                    maturePeriod("toolbar_1");
                }

            }else if(id2=="conts_2"){
                if(tool_cont2==0){

                    document.getElementById("tips").style.display = 'block';
                    document.getElementById("tips").innerHTML= tool_arr[1]["1"];
                    console.log(tool_arr[1]["1"]);
                    tool_cont2=0;
                    setTimeout(function () {
                        document.getElementById("tips").style.display = 'none';
                    },1000);
                }else{
                    tool_cont2 = tool_cont2-1;
                    document.getElementById(id2).innerHTML =tool_cont2;
                    if(tool_cont2==0){
                        document.getElementById(id1).style.background= 'url("img/bg_'+ cont +'.png")'+'no-repeat';
                        document.getElementById(id1).style.backgroundSize= 'contain';
                        document.getElementById(id2).style.display = 'none';
                    }
                    maturePeriod("toolbar_2");
                }

            }else if(id2=="conts_3"){
                if(tool_cont3==0){
                    document.getElementById("tips").style.display = 'block';
                    document.getElementById("tips").innerHTML= tool_arr[2]["2"];
                    console.log(tool_arr[2]["2"]);
                    tool_cont3=0;
                    setTimeout(function () {
                        document.getElementById("tips").style.display = 'none';
                    },1000);
                }else{
                    tool_cont3 = tool_cont3-1;
                    document.getElementById(id2).innerHTML =tool_cont3;
                    if(tool_cont3==0){
                        document.getElementById(id1).style.background= 'url("img/bg_'+ cont +'.png")'+'no-repeat';
                        document.getElementById(id1).style.backgroundSize= 'contain';
                        document.getElementById(id2).style.display = 'none';
                    }
                    maturePeriod("toolbar_3");
                }
            }

        }
        if(play_cont==2){
            console.log("play_cont==2");
            if(id2=="conts_1"){
                console.log("conts_1");
                if(tool_cont12==0){
                    document.getElementById("tips").style.display = 'block';
                    document.getElementById("tips").innerHTML= tool_arr[0]["0"];
                    console.log(tool_arr[0]["0"]);
                    tool_cont12=0;
                    setTimeout(function () {
                        document.getElementById("tips").style.display = 'none';
                    },1000);
                }else{
                    tool_cont12 = tool_cont12 - 1;
                    document.getElementById(id2).innerHTML =tool_cont12;

                    if(tool_cont12 == 0){
                        document.getElementById(id1).style.background= 'url("img/bg_'+ cont +'.png")'+'no-repeat';
                        document.getElementById(id1).style.backgroundSize= 'contain';
                        document.getElementById(id2).style.display = 'none';
                    }
                    maturePeriod("toolbar_1");
                }

            }else if(id2=="conts_2"){
                console.log("conts_2");
                if(tool_cont22==0){

                    document.getElementById("tips").style.display = 'block';
                    document.getElementById("tips").innerHTML= tool_arr[1]["1"];
                    console.log(tool_arr[1]["1"]);
                    tool_cont22=0;
                    setTimeout(function () {
                        document.getElementById("tips").style.display = 'none';
                    },1000);
                }else{
                    tool_cont22 = tool_cont22-1;
                    console.log(tool_cont22);
                    document.getElementById(id2).innerHTML =tool_cont22;
                    if(tool_cont22==0){
                        document.getElementById(id1).style.background= 'url("img/bg_'+ cont +'.png")'+'no-repeat';
                        document.getElementById(id1).style.backgroundSize= 'contain';
                        document.getElementById(id2).style.display = 'none';
                    }
                    maturePeriod("toolbar_2");
                }

            }else if(id2=="conts_3"){
                console.log("conts_3");
                if(tool_cont32==0){
                    document.getElementById("tips").style.display = 'block';
                    document.getElementById("tips").innerHTML= tool_arr[2]["2"];
                    console.log(tool_arr[2]["2"]);
                    tool_cont32=0;
                    setTimeout(function () {
                        document.getElementById("tips").style.display = 'none';
                    },1000);
                }else{
                    tool_cont32 = tool_cont32-1;
                    console.log(tool_cont32);
                    document.getElementById(id2).innerHTML =tool_cont32;
                    if(tool_cont32==0){
                        document.getElementById(id1).style.background= 'url("img/bg_'+ cont +'.png")'+'no-repeat';
                        document.getElementById(id1).style.backgroundSize= 'contain';
                        document.getElementById(id2).style.display = 'none';
                    }
                    maturePeriod("toolbar_3");
                }
            }
        }
        if(play_cont==3){
            console.log("play_cont==2");
            if(id2=="conts_1"){
                console.log("conts_1");
                if(tool_cont13==0){
                    document.getElementById("tips").style.display = 'block';
                    document.getElementById("tips").innerHTML= tool_arr[0]["0"];
                    console.log(tool_arr[0]["0"]);
                    tool_cont13=0;
                    setTimeout(function () {
                        document.getElementById("tips").style.display = 'none';
                    },1000);
                }else{
                    tool_cont13 = tool_cont13 - 1;
                    document.getElementById(id2).innerHTML =tool_cont13;

                    if(tool_cont13 == 0){
                        document.getElementById(id1).style.background= 'url("img/bg_'+ cont +'.png")'+'no-repeat';
                        document.getElementById(id1).style.backgroundSize= 'contain';
                        document.getElementById(id2).style.display = 'none';
                    }
                    maturePeriod("toolbar_1");
                }

            }else if(id2=="conts_2"){
                console.log("conts_2");
                if(tool_cont23==0){

                    document.getElementById("tips").style.display = 'block';
                    document.getElementById("tips").innerHTML= tool_arr[1]["1"];
                    console.log(tool_arr[1]["1"]);
                    tool_cont23=0;
                    setTimeout(function () {
                        document.getElementById("tips").style.display = 'none';
                    },1000);
                }else{
                    tool_cont23 = tool_cont23-1;
                    console.log(tool_cont23);
                    document.getElementById(id2).innerHTML =tool_cont23;
                    if(tool_cont23==0){
                        document.getElementById(id1).style.background= 'url("img/bg_'+ cont +'.png")'+'no-repeat';
                        document.getElementById(id1).style.backgroundSize= 'contain';
                        document.getElementById(id2).style.display = 'none';
                    }
                    maturePeriod("toolbar_2");
                }

            }else if(id2=="conts_3"){
                console.log("conts_3");
                if(tool_cont33==0){
                    document.getElementById("tips").style.display = 'block';
                    document.getElementById("tips").innerHTML= tool_arr[2]["2"];
                    console.log(tool_arr[2]["2"]);
                    tool_cont33=0;
                    setTimeout(function () {
                        document.getElementById("tips").style.display = 'none';
                    },1000);
                }else{
                    tool_cont33 = tool_cont33-1;
                    console.log(tool_cont33);
                    document.getElementById(id2).innerHTML =tool_cont33;
                    if(tool_cont33==0){
                        document.getElementById(id1).style.background= 'url("img/bg_'+ cont +'.png")'+'no-repeat';
                        document.getElementById(id1).style.backgroundSize= 'contain';
                        document.getElementById(id2).style.display = 'none';
                    }
                    maturePeriod("toolbar_3");
                }
            }
        }
        toolbar_top();
    });
}
toolbarClick('toolbar_1','conts_1',1);
toolbarClick('toolbar_2','conts_2',2);
toolbarClick('toolbar_3','conts_3',3);


//判断点击哪个工具  是否成熟
function maturePeriod(id1) {
    if(tool_cont1<0){
        tool_cont1 = 0;
    }else if(tool_cont2<0){
        tool_cont2 = 0;
    }else if(tool_cont3<0){
        tool_cont3 = 0;
    }

    console.log("弹窗开始");
    // console.log(tool_cont1);
    // console.log(tool_cont2);
    // console.log(tool_cont3);
    // console.log(tool_cont12);
    // console.log(tool_cont22);
    // console.log(tool_cont32);
    console.log(tool_cont13);
    console.log(tool_cont23);
    console.log(tool_cont33);
    document.getElementById("stage").style.display = "block";
    var stage_1 = document.getElementById("stage_1");
    var stage_2 = document.getElementById("stage_2");
    var flower1 = document.getElementById("flower1");
    var flower2 = document.getElementById("flower2");
    var flower3 = document.getElementById("flower3");
    var hand = document.getElementById("hand");
    var toolbar_top = document.getElementById("toolbar_top");
    stage_cont = tool_cont1 + tool_cont2 + tool_cont3;
    stage_cont2 = tool_cont12 + tool_cont22 + tool_cont32;
    stage_cont3 = tool_cont13 + tool_cont23 + tool_cont33;
    console.log("stage_cont2:"+stage_cont2);
    if(id1=="toolbar_1"){
        console.log(stage_arr[0]);
        stage_1.innerHTML = stage_arr[0];
    }else if(id1=="toolbar_2"){
        console.log(stage_arr[1]);
        stage_1.innerHTML = stage_arr[1];
    }else if(id1=="toolbar_3"){
        console.log(stage_arr[2]);
        stage_1.innerHTML = stage_arr[2];
    }
    if(play_cont ==1){
        console.log("1111");
        if(stage_cont==2){
            console.log(stage1_arr[0]);
            stage_2.innerHTML = stage1_arr[0];
            console.log(flower1.style.display);
            console.log(flower2.style.display);
            console.log(flower3.style.display);
        }
        if(stage_cont==1){
            console.log(stage1_arr[1]);
            stage_2.innerHTML = stage1_arr[1];
            flower1.style.display = 'none';
            flower2.style.display = 'block';
            console.log(flower1.style.display);
            console.log(flower2.style.display);
            console.log(flower3.style.display);
        }
        if(stage_cont==0){
            console.log(stage1_arr[2]);
            stage_2.innerHTML = stage1_arr[2];
            flower2.style.display = 'none';
            flower3.style.display = 'block';
            console.log(flower1.style.display);
            console.log(flower2.style.display);
            console.log(flower3.style.display);
            toolbar_top.style.display = 'none';
            hand.style.display = 'block';
        }
    }
    if(play_cont ==2){
        console.log("2222");
        if((stage_cont2 == 5)||(stage_cont2 == 4)){
            console.log(stage1_arr[0]);
            stage_2.innerHTML = stage1_arr[0];
            console.log(flower1.style.display);
            console.log(flower2.style.display);
            console.log(flower3.style.display);
            return;
        }else if((stage_cont2 == 1)||(stage_cont2 == 2)||(stage_cont2 == 3)){
            console.log(stage1_arr[1]);
            stage_2.innerHTML = stage1_arr[1];
            flower1.style.display = 'none';
            flower2.style.display = 'block';
            console.log(flower1.style.display);
            console.log(flower2.style.display);
            console.log(flower3.style.display);
            return;
        }else if(stage_cont2 == 0){
            console.log(stage1_arr[2]);
            stage_2.innerHTML = stage1_arr[2];
            flower2.style.display = 'none';
            flower3.style.display = 'block';
            console.log(flower1.style.display);
            console.log(flower2.style.display);
            console.log(flower3.style.display);
            toolbar_top.style.display = 'none';
            hand.style.display = 'block';
            return;
        }
    }
    if(play_cont ==3){
        console.log("3333"+stage_cont3);
        if(stage_cont3 == 8 || stage_cont3 == 7 || stage_cont3 == 6 || stage_cont3 == 5){
            console.log(stage1_arr[0]);
            stage_2.innerHTML = stage1_arr[0];
            console.log(flower1.style.display);
            console.log(flower2.style.display);
            console.log(flower3.style.display);
            return;
        }else if(stage_cont3 == 4 || stage_cont3== 3 || stage_cont3== 2 || stage_cont3== 1){
            console.log(stage1_arr[1]);
            stage_2.innerHTML = stage1_arr[1];
            flower1.style.display = 'none';
            flower2.style.display = 'block';
            console.log(flower1.style.display);
            console.log(flower2.style.display);
            console.log(flower3.style.display);
            return;
        }else if(stage_cont3 == 0){
            console.log(stage1_arr[2]);
            stage_2.innerHTML = stage1_arr[2];
            flower2.style.display = 'none';
            flower3.style.display = 'block';
            console.log(flower1.style.display);
            console.log(flower2.style.display);
            console.log(flower3.style.display);
            toolbar_top.style.display = "none";
            hand.style.display = 'block';
            return;
        }
    }
    // console.log("弹窗结束");
    // console.log(tool_cont1);
    // console.log(tool_cont2);
    // console.log(tool_cont3);
    console.log("弹窗结束");
    // console.log(tool_cont12);
    // console.log(tool_cont22);
    // console.log(tool_cont32);
    console.log(tool_cont13);
    console.log(tool_cont23);
    console.log(tool_cont33);

}
//上面工具栏点击
document.getElementById("toolbar_top").addEventListener('click',function () {


    console.log("按钮开始");
    // console.log(tool_cont1);
    // console.log(tool_cont2);
    // console.log(tool_cont3);
    // console.log(tool_cont12);
    // console.log(tool_cont22);
    // console.log(tool_cont32);
    console.log(tool_cont13);
    console.log(tool_cont23);
    console.log(tool_cont33);
    var toolbar_top = document.getElementById("toolbar_top");
    var toolbar_1 =  document.getElementById("toolbar_1");
    var toolbar_2 =  document.getElementById("toolbar_2");
    var toolbar_3 =  document.getElementById("toolbar_3");
    if(play_cont==1){
        if(tool_cont1 != 0){
            // toolbar_top.src = "img/sunshine.png";
            tool_cont1 = tool_cont1 -1;

            maturePeriod("toolbar_1");
            if(tool_cont1 <= 0){
                tool_cont1 =0;
                toolbar_top.src = "img/kettle.png";
                toolbar_1.style.background= 'url("img/bg_1.png")'+'no-repeat';
                toolbar_1.style.backgroundSize= 'contain';
                document.getElementById("conts_1").style.display = 'none';
            }
            document.getElementById("conts_1").innerHTML = tool_cont1;
        }else if(tool_cont1 == 0 && tool_cont2 != 0 && tool_cont3 != 0 ){
            tool_cont2 = tool_cont1 -1;

            maturePeriod("toolbar_2");
            if(tool_cont2 <= 0){
                tool_cont2 =0;
                toolbar_2.style.background= 'url("img/bg_2.png")'+'no-repeat';
                toolbar_2.style.backgroundSize= 'contain';
                document.getElementById("conts_2").style.display = 'none';

                toolbar_top.src = "img/fertilizer1.png";
                document.getElementById("flower1").style.display = 'block';
                document.getElementById("flower2").style.display = 'block';
            }
            document.getElementById("conts_2").innerHTML = tool_cont2;
        }else if(tool_cont1 == 0 && tool_cont2 == 0 && tool_cont3 != 0){
            tool_cont3 = tool_cont1 -1;

            maturePeriod("toolbar_3");
            if(tool_cont3 <= 0){
                tool_cont3 =0;
                toolbar_3.style.background= 'url("img/bg_3.png")'+'no-repeat';
                toolbar_3.style.backgroundSize= 'contain';
                document.getElementById("conts_3").style.display = 'none';

                toolbar_top.style.display = 'none';
                document.getElementById("hand").style.display = 'block';
                document.getElementById("flower2").style.display = 'none';
                document.getElementById("flower3").style.display = 'block';
            }
            document.getElementById("conts_3").innerHTML = tool_cont3;
        }
    }
    if(play_cont==2){
        if(tool_cont12 != 0){
            // toolbar_top.src = "img/sunshine.png";
            tool_cont12 = tool_cont12 -1;
            maturePeriod("toolbar_1");
            if(tool_cont12 <= 0){
                tool_cont12 =0;
                toolbar_top.src = "img/kettle.png";
                toolbar_1.style.background= 'url("img/bg_1.png")'+'no-repeat';
                toolbar_1.style.backgroundSize= 'contain';
                document.getElementById("conts_1").style.display = 'none';
            }
            document.getElementById("conts_1").innerHTML = tool_cont12;
        }else if(tool_cont12 == 0 && tool_cont22 != 0 && tool_cont32 != 0 ){
            tool_cont22 = tool_cont22 -1;

            maturePeriod("toolbar_2");
            if(tool_cont22 <= 0){
                tool_cont22 =0;
                toolbar_2.style.background= 'url("img/bg_2.png")'+'no-repeat';
                toolbar_2.style.backgroundSize= 'contain';
                document.getElementById("conts_2").style.display = 'none';

                toolbar_top.src = "img/fertilizer1.png";
                document.getElementById("flower1").style.display = 'block';
                document.getElementById("flower2").style.display = 'block';
            }
            document.getElementById("conts_2").innerHTML = tool_cont22;
        }else if(tool_cont12 == 0 && tool_cont22 == 0 && tool_cont32 != 0){
            tool_cont32 = tool_cont32 -1;

            maturePeriod("toolbar_3");
            if(tool_cont32 <= 0){
                tool_cont32 =0;
                toolbar_3.style.background= 'url("img/bg_3.png")'+'no-repeat';
                toolbar_3.style.backgroundSize= 'contain';
                document.getElementById("conts_3").style.display = 'none';

                toolbar_top.style.display = 'none';
                document.getElementById("hand").style.display = 'block';
                document.getElementById("flower2").style.display = 'none';
                document.getElementById("flower3").style.display = 'block';
            }
            document.getElementById("conts_3").innerHTML = tool_cont32;
        }
    }
    if(play_cont==3){
        console.log("play_cont:3333333333333");
        if(tool_cont13 != 0){
            tool_cont13 = tool_cont13 -1;
            maturePeriod("toolbar_1");
            if(tool_cont13 <= 0){
                tool_cont13 =0;
                toolbar_top.src = "img/kettle.png";
                toolbar_1.style.background= 'url("img/bg_1.png")'+'no-repeat';
                toolbar_1.style.backgroundSize= 'contain';
                document.getElementById("conts_1").style.display = 'none';
            }
            document.getElementById("conts_1").innerHTML = tool_cont13;
        }else if(tool_cont13 == 0 && tool_cont23 != 0 && tool_cont33 != 0 ){
            tool_cont23 = tool_cont23 -1;
            maturePeriod("toolbar_2");
            if(tool_cont23 <= 0){
                tool_cont23 =0;
                toolbar_2.style.background= 'url("img/bg_2.png")'+'no-repeat';
                toolbar_2.style.backgroundSize= 'contain';
                document.getElementById("conts_2").style.display = 'none';

                toolbar_top.src = "img/fertilizer1.png";
                document.getElementById("flower1").style.display = 'block';
                document.getElementById("flower2").style.display = 'block';
            }
            document.getElementById("conts_2").innerHTML = tool_cont23;
        }else if(tool_cont13 == 0 && tool_cont23 == 0 && tool_cont33 != 0){
            tool_cont33 = tool_cont33 -1;

            maturePeriod("toolbar_3");
            if(tool_cont33 <= 0){
                tool_cont33 =0;
                toolbar_3.style.background= 'url("img/bg_3.png")'+'no-repeat';
                toolbar_3.style.backgroundSize= 'contain';
                document.getElementById("conts_3").style.display = 'none';

                toolbar_top.style.display = 'none';
                document.getElementById("hand").style.display = 'block';
                document.getElementById("flower2").style.display = 'none';
                document.getElementById("flower3").style.display = 'block';
            }
            document.getElementById("conts_3").innerHTML = tool_cont33;
        }
    }

    console.log("按钮完成");
    // console.log(tool_cont1);
    // console.log(tool_cont2);
    // console.log(tool_cont3);
    // console.log(tool_cont12);
    // console.log(tool_cont22);
    // console.log(tool_cont32);
    console.log(tool_cont13);
    console.log(tool_cont23);
    console.log(tool_cont33);
});
//上面工具栏的显示
function toolbar_top() {
    console.log("tool_cont1:::"+tool_cont12);
    console.log("tool_cont1:::"+tool_cont22);
    console.log("tool_cont1:::"+tool_cont32);
    var toolbar_top = document.getElementById("toolbar_top");
    if(play_cont==1){
        console.log("play_cont==1:"+play_cont);
        if(tool_cont1 != 0){
            toolbar_top.src = "img/sunshine.png";
        }else if(tool_cont1 == 0 && tool_cont2 != 0){
            toolbar_top.src = "img/kettle.png";
        }else if(tool_cont1 == 0 && tool_cont2 == 0 && tool_cont3 != 0){
            toolbar_top.src = "img/fertilizer1.png";
        }else{
            toolbar_top.src = "img/sunshine.png";
        }
    }else if(play_cont==2){
        console.log("play_cont==2:"+play_cont);
        if(tool_cont12 != 0){
            toolbar_top.src = "img/sunshine.png";
        }else if(tool_cont12 == 0 && tool_cont22 != 0 && tool_cont32 != 0){
            toolbar_top.src = "img/kettle.png";
        }else if(tool_cont12 == 0 && tool_cont22 == 0 && tool_cont32 != 0){
            toolbar_top.src = "img/fertilizer1.png";
        }else{
            toolbar_top.src = "img/sunshine.png";
        }
    }else if(play_cont==3){
        console.log("play_cont==3:"+play_cont);
        if(tool_cont13 != 0){
            toolbar_top.src = "img/sunshine.png";
        }else if(tool_cont13 == 0 && tool_cont23 != 0){
            toolbar_top.src = "img/kettle.png";
        }else if(tool_cont13 == 0 && tool_cont23 == 0 && tool_cont33 != 0){
            toolbar_top.src = "img/fertilizer1.png";
        }else{
            toolbar_top.src = "img/sunshine.png";
        }    }
}
//弹窗阶段的确定
document.getElementById("stage_true").addEventListener('click',function () {
    cancel("stage");
});
//奖励花园显示
function gardenPrize(conts,names,imgs,prizes,imgss){
    document.getElementById("name_"+ conts).innerHTML = names;
    document.getElementById("img_"+ conts).src = 'img/'+ imgs + '.png';
    document.getElementById("prize_"+ conts).innerHTML = prizes;
    document.getElementById("card_"+ conts).style.background ='url("img/'+ imgss +'.png")'+'no-repeat';
    document.getElementById("card_"+ conts).style.backgroundSize= 'contain';
}

//异网确认验证手机号
document.getElementById("confirm2").addEventListener('click',function(){
    var oP=document.getElementById('tel');
    var val=document.getElementById('tel').value;
    var reg=/^1[345678]\d{9}$/;
    if (val=='') {
        oP.style.color="#00783f";
        oP.placeholder="请输入手机号!";
    }else if(reg.test(val)){
        changes('different2','different3');
    }else{
        oP.value='';
        oP.style.color="#00783f";
        oP.placeholder="输入错误，请重新输入！";
    }
});
//确认是否领取奖励
function prizeStatus(conts,imgss) {
    if(prizeStatus1==0){
        document.getElementById("card_"+ conts).style.background ='url("img/'+ imgss +'.png")'+'no-repeat';
        document.getElementById("card_"+ conts).style.backgroundSize= 'contain';
    }
    if(prizeStatus2==0){
        document.getElementById("card_"+ conts).style.background ='url("img/'+ imgss +'.png")'+'no-repeat';
        document.getElementById("card_"+ conts).style.backgroundSize= 'contain';
    }
    if(prizeStatus3==0){
        document.getElementById("card_"+ conts).style.background ='url("img/'+ imgss +'.png")'+'no-repeat';
        document.getElementById("card_"+ conts).style.backgroundSize= 'contain';
    }
}
//异网本网调用方法
function netWorks() {
    if(play_cont==1){
        if(network == 1){
            console.log("本网");
            document.getElementById("binding").style.display = "none";
            document.getElementById("index").style.display = "none";
            document.getElementById("homepage").style.display = "block";
            document.getElementById("harvest").style.display = "block";
            gardenPrize(1,'111','tulips1','333','change');
        }
        if(network == 0){
            console.log("异网");
            document.getElementById("binding").style.display = "none";
            document.getElementById("homepage").style.display = "block";
            document.getElementById("harvest").style.display = "block";
            gardenPrize(1,'111','tulips1','333','change');
        }
    }
    // TODO 二次奖励替换
    if(play_cont==2){
        if(network == 1){
            console.log("本网");
            document.getElementById("binding").style.display = "none";
            document.getElementById("index").style.display = "none";
            document.getElementById("homepage").style.display = "block";
            document.getElementById("harvest").style.display = "block";
            gardenPrize(2,'111','tulips1','333','change');
        }
        if(network == 0){
            console.log("异网");
            document.getElementById("index").style.display = "none";
            document.getElementById("homepage").style.display = "block";
            document.getElementById("harvest").style.display = "block";
            gardenPrize(2,'111','tulips1','333','change');
        }
    }
    // TODO 三次奖励替换
    if(play_cont==3){
        if(network == 1){
            console.log("本网");
            // document.getElementById("binding").style.display = "none";
            // document.getElementById("index").style.display = "none";
            // document.getElementById("homepage").style.display = "block";
            // document.getElementById("harvest").style.display = "block";
            // document.getElementById("plantingAnotherOne").style.display = "none";
            // document.getElementById("toExchange").style.top = "7rem";
            // document.getElementById("toExchange").style.left = "4.3rem";
            document.getElementById("binding").style.display = "none";
            document.getElementById("homepage").style.display = "block";
            document.getElementById("jackpot").style.display = "block";
            gardenPrize(3,'111','tulips1','333','change');
        }
        if(network == 0){
            console.log("异网");
            document.getElementById("binding").style.display = "none";
            document.getElementById("homepage").style.display = "block";
            document.getElementById("jackpot").style.display = "block";
            gardenPrize(3,'111','tulips1','333','change');
        }
    }

}
//收获页面的前往兑换
document.getElementById("toExchange").addEventListener('click',function () {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("harvest").style.display = "none";
    document.getElementById("gardenAward_box").style.display = "block";
    rules='gardenAward_box';
});
//中大奖确定
document.getElementById("jackpot_ture").addEventListener('click',function (){
    document.getElementById("gardenAward_box").style.display = "block";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("jackpot").style.display = "none";
    gardenPrize(3,'333','tulips1','333','yiduihuan');
    prizeStatus3 =1;
})

//异网取消
document.getElementById("different_flase").addEventListener('click',function () {
    document.getElementById("gardenAward_box").style.display = "block";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("jackpot").style.display = "none";
    rules='gardenAward_box';
});

//奖品一
document.getElementById("card_1").addEventListener('click',function () {
    console.log(stage_cont);
    var name_1 = document.getElementById("name_1").innerHTML;
    console.log(name_1);
    if(stage_cont==0){
        if(name_1 != ''){
            if(prizeStatus1==0){
                idId("card_1");
                //没领取
                if(network == 1){
                    //内网
                    document.getElementById("gardenAward_box").style.display = 'none';
                    document.getElementById("homepage").style.display = 'block';
                    document.getElementById("exchange").style.display = 'block';
                }else {
                    //外网
                    document.getElementById("gardenAward_box").style.display = 'none';
                    document.getElementById("homepage").style.display = 'none';
                    document.getElementById("thiswoek").style.display = 'none';
                    document.getElementById("differentnetworks").style.display = 'block';
                    document.getElementById("different1").style.display = 'block';
                }
            }else if(prizeStatus1==1){
                //已领取
                if(network == 1){
                    //内网
                    document.getElementById("homepage").style.display = 'block';
                    document.getElementById("gardenAward_box").style.display = 'none';
                    document.getElementById("thiswoek").style.display = 'block';
                    document.getElementById("exchange").style.display = 'none';
                }else {
                    //外网
                    document.getElementById("homepage").style.display = 'block';
                    document.getElementById("gardenAward_box").style.display = 'none';
                    document.getElementById("differentnetworks").style.display = 'block';
                    document.getElementById("different4").style.display = 'block';
                }
            }
        }
    }
    console.log("奖品一:"+prize);
});
//奖品二
document.getElementById("card_2").addEventListener('click',function () {
    console.log(stage_cont2);
    var name_2 = document.getElementById("name_2").innerHTML;
    console.log(name_2);
    if(stage_cont2==0){
        if(name_2 != ''){
            if(prizeStatus2==0){
                idId("card_2");
                //没领取
                if(network == 1){
                    //内网
                    document.getElementById("gardenAward_box").style.display = 'none';
                    document.getElementById("homepage").style.display = 'block';
                    document.getElementById("exchange").style.display = 'block';
                }else {
                    //外网
                    document.getElementById("gardenAward_box").style.display = 'none';
                    document.getElementById("homepage").style.display = 'block';
                    document.getElementById("differentnetworks").style.display = 'block';
                    document.getElementById("different1").style.display = 'block';
                }
            }else {
                //已领取
                if(network == 1){
                    //内网
                    document.getElementById("homepage").style.display = 'block';
                    document.getElementById("gardenAward_box").style.display = 'none';
                    document.getElementById("thiswoek").style.display = 'block';
                }else {
                    //外网
                    document.getElementById("gardenAward_box").style.display = 'none';
                    document.getElementById("differentnetworks").style.display = 'block';
                    document.getElementById("different4").style.display = 'block';
                }
            }
        }
    }
    console.log("奖品二:"+prize);
});
//奖品三
document.getElementById("card_3").addEventListener('click',function () {
    console.log(stage_cont3);
    var name_3 = document.getElementById("name_3").innerHTML;
    console.log(name_3);
    if(stage_cont3==0){
        if(name_3 != ''){
            if(prizeStatus3==0){
                idId("card_3");
                //没领取
                if(network == 1){
                    //内网
                    document.getElementById("gardenAward_box").style.display = "none";
                    document.getElementById("homepage").style.display = "block";
                    document.getElementById("jackpot").style.display = "block";
                }else {
                    //外网
                    document.getElementById("gardenAward_box").style.display = "none";
                    document.getElementById("homepage").style.display = "block";
                    document.getElementById("jackpot").style.display = "block";
                }
            }else {
                //已领取
                if(network == 1){
                    //内网
                    document.getElementById("gardenAward_box").style.display = "none";
                    document.getElementById("homepage").style.display = "block";
                    document.getElementById("jackpot").style.display = "block";
                }else {
                    //外网
                    document.getElementById("gardenAward_box").style.display = "none";
                    document.getElementById("homepage").style.display = "block";
                    document.getElementById("jackpot").style.display = "block";
                }
            }
        }
    }
    console.log("奖品三:"+prize);
});
//领取哪个奖品
function idId(id1){
    prize = id1;
}
// 兑换流量取消
document.getElementById("exchange_flase").addEventListener('click',function () {
    document.getElementById("gardenAward_box").style.display = 'block';
    document.getElementById("homepage").style.display = 'none';
    document.getElementById("exchange").style.display = 'none';
});
// 兑换流量确定
document.getElementById("exchange_true").addEventListener('click',function () {
    document.getElementById("thiswoek").style.display = 'block';
    document.getElementById("homepage").style.display = 'block';
    document.getElementById("exchange").style.display = 'none';
    document.getElementById("gardenAward_box").style.display = 'none';
});
// 中流量确定
document.getElementById("thiswoek_ture").addEventListener('click',function () {
    console.log(prize);
    document.getElementById("thiswoek").style.display = 'none';
    document.getElementById("homepage").style.display = 'none';
    document.getElementById("gardenAward_box").style.display = 'block';
    if(prize ==  'card_1'){
        console.log("card_1:"+prize);
        if(stage_cont==0){
            if(prizeStatus1==0){
                gardenPrize(1,'111','tulips1','111','yiduihuan');
                prizeStatus1 =1;
            }
        }
    }
    if(prize == 'card_2'){
        console.log("card_2:"+prize);
        if(stage_cont2==0){
            if(prizeStatus2==0){
                gardenPrize(2,'222','tulips1','222','yiduihuan');
                prizeStatus2 =1;
            }
        }
    }
    // if(prize == 'card_3'){
    //     if(stage_cont3==0){
    //         if(prizeStatus3==0){
    //             gardenPrize(3,'111','tulips1','333','yiduihuan');
    //             prizeStatus3 =1;
    //         }
    //     }
    // }
});

//再种一朵
document.getElementById("plantingAnotherOne").addEventListener('click',function () {
    console.log("再种一朵");
    console.log("stage_cont:"+stage_cont);
    console.log("stage_cont2:"+stage_cont2);
    console.log("stage_cont3:"+stage_cont3);
    if(play_conts ==2){
        play_cont =2;
        if(play_cont == 2){
            tool_cont12=2;
            tool_cont22=2;
            tool_cont32=2;
            if(stage_cont==0&&stage_cont2==0){
                console.log("再种一朵"+play_cont);
                // play_cont=3;
            }
        }
    }
    if(play_conts ==3){
        play_cont =3;
        if(play_cont == 3){
            tool_cont13=3;
            tool_cont23=3;
            tool_cont33=3;
            if(stage_cont==0&&stage_cont2==0){
                console.log("再种一朵"+play_cont);
                // play_cont=3;
            }
        }
    }

    publicMethod();
});

//再种一次公用方法
function publicMethod() {
    defaultCont();
    document.getElementById("harvest").style.display = 'none';
    document.getElementById("homepage").style.display = 'none';
    document.getElementById("index").style.display = 'block';
    document.getElementById("conts_1").style.display = 'block';
    document.getElementById("conts_2").style.display = 'block';
    document.getElementById("conts_3").style.display = 'block';
    document.getElementById("toolbar_1").style.background ='url("img/sunshine.png")'+'no-repeat';
    document.getElementById("toolbar_1").style.backgroundSize= 'contain';
    document.getElementById("toolbar_2").style.background ='url("img/kettle.png")'+'no-repeat';
    document.getElementById("toolbar_2").style.backgroundSize= 'contain';
    document.getElementById("toolbar_3").style.background ='url("img/fertilizer1.png")'+'no-repeat';
    document.getElementById("toolbar_3").style.backgroundSize= 'contain';

    document.getElementById("flower").style.display = 'block';
    document.getElementById("flower1").style.display = 'block';
    document.getElementById("flower3").style.display = 'none';
    document.getElementById("hand").style.display = 'none';
    document.getElementById("toolbar_top").style.display = 'block';
    document.getElementById("toolbar_top").src = "img/sunshine.png";


}
//异网中奖确定
document.getElementById("confirm4").addEventListener('click',function (){
    document.getElementById("differentnetworks").style.display = "none";
    document.getElementById("homepage").style.display = "none";
    document.getElementById("gardenAward_box").style.display = "block";
    gardenPrize(1,'111','tulips1','333','yiduihuan');
});
//测试
function ceshi(id,int) {
    document.getElementById(id).addEventListener('click',function () {
        count = int;

        console.log("关注微信count:"+ count + "/n" +"值:"+int);
    })
}
function ceshi5(id,int) {
    document.getElementById(id).addEventListener('click',function () {
        network = int;

        console.log("网络network:"+ network + "/n" +"值:"+int);
    })
}
function ceshi7(id,int) {
    document.getElementById(id).addEventListener('click',function () {
        photo_num = int;

        console.log("绑定手机photo_num:"+ photo_num + "/n" +"值:"+int);
    })
}
function ceshi1(id1,id2,id3) {
    document.getElementById(id1).addEventListener('click',function () {
        document.getElementById(id2).style.display='none';
        document.getElementById(id3).style.display='block';
    })
}
ceshi1("testing_1","homepage","friendEntrance");
ceshi1("testing_2","friendEntrance","homepage");
ceshi("testing_3",1);
ceshi("testing_4",0);
ceshi5("testing_5",1);
ceshi5("testing_6",0);
ceshi7("testing_7",1);
ceshi7("testing_8",0);

