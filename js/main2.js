var _$_d1a3=["touchmove","preventDefault","addEventListener","body","DOMContentLoaded","attach","menuButton","getElementById","sideBar","mask","loading","onclick","open","toggle","classList","show","remove","ten-drop.wilddog.com","https://ten-drop.wilddogio.com","initializeApp","ref","sync","user","child","userImg","levelRank","userName","canvas","2d","getContext","width","height","leftDrop","NONE","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","push","info","restartBtn","level","bestLevel","todayBest","best","loadBg","x","y","generation","direction","colorArr","#43A6FF","#1BD369","#FF7575","prototype","chooseDraw","color","draw_1","draw_2","draw_3","draw_4","draw_5","left","add_broken","dropCollection","right","up","down","save","fillStyle","scale","beginPath","moveTo","PI","arc","closePath","fill","restore","w","h","hor","ver","boardArr","lineTo","stroke","dropArr","brokenArr","clearRect","length","process","splice","isInto","board","floor","gameStart","pause","startTime","endTime","name","init","add","innerHTML","timeChange","clickSelect","getTime","isGameOver","Game over!","offsetX","offsetY","You win! Try your best to go to next level!","nextLevel","You lose!","fly","Level ","setBest","today","Try your best! Give you another "," drop!","","0","round","userAgent","\u5929 ","\u5c0f\u65f6 "," \u5206\u949f"," \u79d2","src","encrypt","_","update","random","reset","code","response","avatar_url","href","https://bupt-hjm.github.io/ten-drop/","GET","users/profile","user_id","data","ajax","API","on","visitor","value","val","set","toDateString","playTime","rank","UA","time","t","token","once","img","unshift","log","forEach","<p><span class='user-rank'>","</span><img src=","><span class='user-rank-name'>","</span><span class='user-level'>level ","</span></p>","limitToLast","orderByChild","\u672a\u77e5","todayRank","hide","switch","rankTitle","\u4eca\u65e5\u5b9e\u65f6\u6392\u884c\u699c","\u5386\u53f2\u6392\u884c\u699c","\u4eca\u65e5","\u5386\u53f2"];document[_$_d1a3[3]][_$_d1a3[2]](_$_d1a3[0],function(a){a[_$_d1a3[1]]()},false);if(_$_d1a3[2] in  document){document[_$_d1a3[2]](_$_d1a3[4],function(){FastClick[_$_d1a3[5]](document[_$_d1a3[3]])},false)};var menuButton=document[_$_d1a3[7]](_$_d1a3[6]);var sideBar=document[_$_d1a3[7]](_$_d1a3[8]);var mask=document[_$_d1a3[7]](_$_d1a3[9]);var loading=document[_$_d1a3[7]](_$_d1a3[10]);menuButton[_$_d1a3[11]]= function(){sideBar[_$_d1a3[14]][_$_d1a3[13]](_$_d1a3[12]);mask[_$_d1a3[14]][_$_d1a3[13]](_$_d1a3[15])};mask[_$_d1a3[11]]= function(){sideBar[_$_d1a3[14]][_$_d1a3[16]](_$_d1a3[12]);mask[_$_d1a3[14]][_$_d1a3[16]](_$_d1a3[15])};var pastPlayTime;var todayPlayTime= new Date();var userData;var config={authDomain:_$_d1a3[17],syncURL:_$_d1a3[18]};var defApp=wilddog[_$_d1a3[19]](config);var ref=wilddog[_$_d1a3[21]]()[_$_d1a3[20]]();var user_ref=ref[_$_d1a3[23]](_$_d1a3[22]);var userImg=document[_$_d1a3[7]](_$_d1a3[24]);var levelRank=document[_$_d1a3[7]](_$_d1a3[25]);var userNameP=document[_$_d1a3[7]](_$_d1a3[26]);var canvas=document[_$_d1a3[7]](_$_d1a3[27]);var ctx=canvas[_$_d1a3[29]](_$_d1a3[28]);canvas[_$_d1a3[30]]= 600;canvas[_$_d1a3[31]]= 600;var w=canvas[_$_d1a3[30]];var h=canvas[_$_d1a3[31]];var leftDropNum=10;var leftDropSpan=document[_$_d1a3[7]](_$_d1a3[32]);var leftDropArr=[_$_d1a3[33],_$_d1a3[34],_$_d1a3[35],_$_d1a3[36],_$_d1a3[37],_$_d1a3[38],_$_d1a3[39],_$_d1a3[40],_$_d1a3[41],_$_d1a3[42],_$_d1a3[43]];for(var i=11;i< 100;i++){leftDropArr[_$_d1a3[44]](i)};var infoP=document[_$_d1a3[7]](_$_d1a3[45]);var restartBtn=document[_$_d1a3[7]](_$_d1a3[46]);var levelP=document[_$_d1a3[7]](_$_d1a3[47]);var bestLevel=document[_$_d1a3[7]](_$_d1a3[48]);var todayBest=document[_$_d1a3[7]](_$_d1a3[49]);var best=document[_$_d1a3[7]](_$_d1a3[50]);var loadBg=document[_$_d1a3[7]](_$_d1a3[51]);var game=null;var Drop=function(){this[_$_d1a3[52]]= w/ 2;this[_$_d1a3[53]]= h/ 2;this[_$_d1a3[54]]= 1;this[_$_d1a3[55]]= null;this[_$_d1a3[56]]= [_$_d1a3[57],_$_d1a3[58],_$_d1a3[59]]};Drop[_$_d1a3[60]]= {process:function(){this[_$_d1a3[61]]()},chooseDraw:function(){var b=(game[_$_d1a3[47]]- 1)% 3;this[_$_d1a3[62]]= this[_$_d1a3[56]][b];switch(this[_$_d1a3[54]]){case 1:this[_$_d1a3[63]]();break;case 2:this[_$_d1a3[64]]();break;case 3:this[_$_d1a3[65]]();break;case 4:this[_$_d1a3[66]]();break;case 5:this[_$_d1a3[67]]();break;default:break}},draw_1:function(){EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]],15,20,this[_$_d1a3[62]])},draw_2:function(){EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]],30,30,this[_$_d1a3[62]])},draw_3:function(){EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]],45,35,this[_$_d1a3[62]])},draw_4:function(){EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]],50,50,this[_$_d1a3[62]])},draw_5:function(){var c=this[_$_d1a3[52]];var d=this[_$_d1a3[53]];if(this[_$_d1a3[55]]== null){this[_$_d1a3[54]]= 6;EvenCompEllipse(ctx,this[_$_d1a3[52]]- 20,this[_$_d1a3[53]],10,10,this[_$_d1a3[62]]);EvenCompEllipse(ctx,this[_$_d1a3[52]]+ 20,this[_$_d1a3[53]],10,10,this[_$_d1a3[62]]);EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]]- 20,10,10,this[_$_d1a3[62]]);EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]]+ 20,10,10,this[_$_d1a3[62]])}else {EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]],10,10,this[_$_d1a3[62]]);EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]],10,10,this[_$_d1a3[62]]);EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]],10,10,this[_$_d1a3[62]]);EvenCompEllipse(ctx,this[_$_d1a3[52]],this[_$_d1a3[53]],10,10,this[_$_d1a3[62]]);return};var f= new Drop();f[_$_d1a3[52]]= c- 20;f[_$_d1a3[53]]= d;f[_$_d1a3[54]]= 5;f[_$_d1a3[55]]= _$_d1a3[68];game[_$_d1a3[70]][_$_d1a3[69]](f);var g= new Drop();g[_$_d1a3[52]]= c+ 20;g[_$_d1a3[53]]= d;g[_$_d1a3[54]]= 5;g[_$_d1a3[55]]= _$_d1a3[71];game[_$_d1a3[70]][_$_d1a3[69]](g);var j= new Drop();j[_$_d1a3[52]]= c;j[_$_d1a3[53]]= d+ 20;j[_$_d1a3[54]]= 5;j[_$_d1a3[55]]= _$_d1a3[72];game[_$_d1a3[70]][_$_d1a3[69]](j);var e= new Drop();e[_$_d1a3[52]]= c;e[_$_d1a3[53]]= d- 20;e[_$_d1a3[54]]= 5;e[_$_d1a3[55]]= _$_d1a3[73];game[_$_d1a3[70]][_$_d1a3[69]](e)}};function EvenCompEllipse(T,m,n,R,S,U){T[_$_d1a3[74]]();T[_$_d1a3[75]]= U;var V=(R> S)?R:S;var W=R/ V;var X=S/ V;T[_$_d1a3[76]](W,X);T[_$_d1a3[77]]();T[_$_d1a3[78]]((m+ R)/ W,n/ X);T[_$_d1a3[80]](m/ W,n/ X,V,0,2* Math[_$_d1a3[79]]);T[_$_d1a3[81]]();T[_$_d1a3[82]]();T[_$_d1a3[83]]()}var Board=function(){this[_$_d1a3[84]]= canvas[_$_d1a3[30]];this[_$_d1a3[85]]= canvas[_$_d1a3[31]];this[_$_d1a3[86]]= 6;this[_$_d1a3[87]]= 6;this[_$_d1a3[88]]= []};Board[_$_d1a3[60]]= {init:function(){for(var i=0;i< this[_$_d1a3[86]];i++){for(var k=0;k< this[_$_d1a3[87]];k++){var m=i* this[_$_d1a3[84]]/ this[_$_d1a3[86]]+ this[_$_d1a3[84]]/ this[_$_d1a3[86]]/ 2;var n=k* this[_$_d1a3[85]]/ this[_$_d1a3[87]]+ this[_$_d1a3[85]]/ this[_$_d1a3[87]]/ 2;var l={x:m,y:n};this[_$_d1a3[88]][_$_d1a3[44]](l)}}},draw:function(){for(var i=0;i<= this[_$_d1a3[86]];i++){ctx[_$_d1a3[74]]();ctx[_$_d1a3[77]]();ctx[_$_d1a3[78]](i* this[_$_d1a3[84]]/ this[_$_d1a3[86]],0);ctx[_$_d1a3[89]](i* this[_$_d1a3[84]]/ this[_$_d1a3[86]],this[_$_d1a3[85]]);ctx[_$_d1a3[81]]();ctx[_$_d1a3[90]]();ctx[_$_d1a3[83]]()};for(var i=0;i<= this[_$_d1a3[87]];i++){ctx[_$_d1a3[74]]();ctx[_$_d1a3[77]]();ctx[_$_d1a3[78]](0,i* this[_$_d1a3[85]]/ this[_$_d1a3[87]]);ctx[_$_d1a3[89]](this[_$_d1a3[84]],i* this[_$_d1a3[85]]/ this[_$_d1a3[87]]);ctx[_$_d1a3[81]]();ctx[_$_d1a3[90]]();ctx[_$_d1a3[83]]()}}};var DropCollection=function(){this[_$_d1a3[91]]= [];this[_$_d1a3[92]]= []};DropCollection[_$_d1a3[60]]= {process:function(){ctx[_$_d1a3[93]](0,0,canvas[_$_d1a3[30]],canvas[_$_d1a3[31]]);for(var i=0;i< this[_$_d1a3[91]][_$_d1a3[94]];i++){if(this[_$_d1a3[91]][i][_$_d1a3[54]]== 6){continue};this[_$_d1a3[91]][i][_$_d1a3[95]]()};for(var i=0;i< this[_$_d1a3[92]][_$_d1a3[94]];i++){if(this[_$_d1a3[92]][i][_$_d1a3[54]]== 6){continue};this[_$_d1a3[92]][i][_$_d1a3[95]]()}},add:function(o){this[_$_d1a3[91]][_$_d1a3[44]](o)},remove:function(o){for(var i=0;i< this[_$_d1a3[91]][_$_d1a3[94]];i++){if(this[_$_d1a3[91]][i]== o){this[_$_d1a3[91]][_$_d1a3[96]](i,1)}}},add_broken:function(o){this[_$_d1a3[92]][_$_d1a3[44]](o)},remove_broken:function(o){for(var i=0;i< this[_$_d1a3[92]][_$_d1a3[94]];i++){if(this[_$_d1a3[92]][i]== o){this[_$_d1a3[92]][_$_d1a3[96]](i,1)}}},fly:function(o){for(var i=0;i< this[_$_d1a3[92]][_$_d1a3[94]];i++){if(this[_$_d1a3[92]][i][_$_d1a3[54]]== 6){continue};if(this[_$_d1a3[97]](this[_$_d1a3[92]][i][_$_d1a3[52]],this[_$_d1a3[92]][i][_$_d1a3[53]])|| this[_$_d1a3[92]][i][_$_d1a3[52]]< -5|| this[_$_d1a3[92]][i][_$_d1a3[52]]> canvas[_$_d1a3[30]]+ 5|| this[_$_d1a3[92]][i][_$_d1a3[53]]> canvas[_$_d1a3[31]]+ 5|| this[_$_d1a3[92]][i][_$_d1a3[53]]<  -5){this[_$_d1a3[92]][i][_$_d1a3[54]]= 6;continue};switch(this[_$_d1a3[92]][i][_$_d1a3[55]]){case _$_d1a3[68]:this[_$_d1a3[92]][i][_$_d1a3[52]]--;break;case _$_d1a3[71]:this[_$_d1a3[92]][i][_$_d1a3[52]]++;break;case _$_d1a3[72]:this[_$_d1a3[92]][i][_$_d1a3[53]]++;break;case _$_d1a3[73]:this[_$_d1a3[92]][i][_$_d1a3[53]]--;break;default:break}}},isInto:function(m,n){var p=game[_$_d1a3[98]];var q=game[_$_d1a3[70]][_$_d1a3[91]];var i=Math[_$_d1a3[99]](m/ (p[_$_d1a3[84]]/ p[_$_d1a3[86]]));var k=Math[_$_d1a3[99]](n/ (p[_$_d1a3[85]]/ p[_$_d1a3[87]]));for(var r=0;r< q[_$_d1a3[94]];r++){if((q[r][_$_d1a3[52]]== (i* p[_$_d1a3[84]]/ p[_$_d1a3[86]]+ p[_$_d1a3[84]]/ p[_$_d1a3[86]]/ 2))&& (q[r][_$_d1a3[53]]== (k* p[_$_d1a3[85]]/ p[_$_d1a3[87]]+ p[_$_d1a3[85]]/ p[_$_d1a3[87]]/ 2))&& (q[r][_$_d1a3[54]]<= 4)){q[r][_$_d1a3[54]]++;if(q[r][_$_d1a3[54]]> 6){q[r][_$_d1a3[54]]= 6};return true}};return false}};var Game=function(){this[_$_d1a3[98]]= null;this[_$_d1a3[70]]= null;this[_$_d1a3[100]]= false;this[_$_d1a3[47]]= 1;this[_$_d1a3[101]]= false;this[_$_d1a3[102]]= 0;this[_$_d1a3[103]]= 0;this[_$_d1a3[104]]= null};Game[_$_d1a3[60]]= {init:function(){ctx[_$_d1a3[93]](0,0,canvas[_$_d1a3[30]],canvas[_$_d1a3[31]]);var p= new Board();p[_$_d1a3[105]]();this[_$_d1a3[98]]= p;var s= new DropCollection();for(var i=0;i< p[_$_d1a3[88]][_$_d1a3[94]];i++){var o= new Drop();o[_$_d1a3[54]]= getNumberInRange(1,4);o[_$_d1a3[52]]= p[_$_d1a3[88]][i][_$_d1a3[52]];o[_$_d1a3[53]]= p[_$_d1a3[88]][i][_$_d1a3[53]];s[_$_d1a3[106]](o)};leftDropSpan[_$_d1a3[107]]= leftDropArr[10];this[_$_d1a3[108]]();this[_$_d1a3[70]]= s;this[_$_d1a3[109]]();this[_$_d1a3[102]]=  new Date()[_$_d1a3[110]]()},clickSelect:function(){var t=this;var p=this[_$_d1a3[98]];canvas[_$_d1a3[11]]= function(u){u[_$_d1a3[1]]();if(this[_$_d1a3[101]]){return};if(leftDropNum== 0|| t[_$_d1a3[111]]()){alert(_$_d1a3[112]);return};t[_$_d1a3[100]]= true;var i=Math[_$_d1a3[99]](u[_$_d1a3[113]]/ (p[_$_d1a3[84]]/ p[_$_d1a3[86]]));var k=Math[_$_d1a3[99]](u[_$_d1a3[114]]/ (p[_$_d1a3[85]]/ p[_$_d1a3[87]]));var q=t[_$_d1a3[70]][_$_d1a3[91]];for(var r=0;r< q[_$_d1a3[94]];r++){if((q[r][_$_d1a3[52]]== (i* p[_$_d1a3[84]]/ p[_$_d1a3[86]]+ p[_$_d1a3[84]]/ p[_$_d1a3[86]]/ 2))&& (q[r][_$_d1a3[53]]== (k* p[_$_d1a3[85]]/ p[_$_d1a3[87]]+ p[_$_d1a3[85]]/ p[_$_d1a3[87]]/ 2))){if(q[r][_$_d1a3[54]]>= 5){continue};q[r][_$_d1a3[54]]++;leftDropNum--;leftDropSpan[_$_d1a3[107]]= leftDropArr[leftDropNum];t[_$_d1a3[70]][_$_d1a3[95]]()}}}},timeChange:function(){var t=this;if(this[_$_d1a3[100]]&& this[_$_d1a3[111]]()&& !this[_$_d1a3[101]]){info[_$_d1a3[107]]= _$_d1a3[115];this[_$_d1a3[101]]= true;setTimeout(function(){t[_$_d1a3[116]]();t[_$_d1a3[101]]= false},1000)};if(leftDropNum== 0&& !this[_$_d1a3[111]]()){info[_$_d1a3[107]]= _$_d1a3[117]};var t=this;setTimeout(function(){t[_$_d1a3[70]][_$_d1a3[118]]();t[_$_d1a3[70]][_$_d1a3[95]]();t[_$_d1a3[108]]()},4)},isGameOver:function(){var v=0;var q=this[_$_d1a3[70]][_$_d1a3[91]];for(var r=0;r< q[_$_d1a3[94]];r++){if(q[r][_$_d1a3[54]]== 6){v++}};if(v== q[_$_d1a3[94]]){return true}else {return false}},nextLevel:function(){this[_$_d1a3[47]]++;levelP[_$_d1a3[107]]= _$_d1a3[119]+ this[_$_d1a3[47]];if(this[_$_d1a3[47]]> +bestLevel[_$_d1a3[107]]){this[_$_d1a3[120]](this[_$_d1a3[47]])};if(this[_$_d1a3[47]]> +todayBest[_$_d1a3[107]]){this[_$_d1a3[120]](this[_$_d1a3[47]],_$_d1a3[121])};ctx[_$_d1a3[93]](0,0,canvas[_$_d1a3[30]],canvas[_$_d1a3[31]]);this[_$_d1a3[100]]= false;this[_$_d1a3[70]]= null;var p=this[_$_d1a3[98]];var s= new DropCollection();var v=0;for(var i=0;i< p[_$_d1a3[88]][_$_d1a3[94]];i++){var o= new Drop();o[_$_d1a3[54]]= getNumberInRange(1,4);v+= o[_$_d1a3[54]];o[_$_d1a3[52]]= p[_$_d1a3[88]][i][_$_d1a3[52]];o[_$_d1a3[53]]= p[_$_d1a3[88]][i][_$_d1a3[53]];s[_$_d1a3[106]](o)};var z;if(leftDropNum+ 7<= 20){z= 7}else {z= 20- leftDropNum};leftDropNum+= z;leftDropSpan[_$_d1a3[107]]= leftDropArr[leftDropNum];info[_$_d1a3[107]]= _$_d1a3[122]+ z+ _$_d1a3[123];this[_$_d1a3[70]]= s},setBest:function(I,B){var N=userData[_$_d1a3[104]]+ _$_d1a3[124];var H=I+ _$_d1a3[124];var G=H[_$_d1a3[94]];for(var i=0;i< 6- G;i++){H= _$_d1a3[125]+ H};var K= new Date()+ _$_d1a3[124];this[_$_d1a3[103]]=  new Date()[_$_d1a3[110]]();var M=this[_$_d1a3[103]]- this[_$_d1a3[102]];var A=Math[_$_d1a3[99]](M/ (24* 3600* 1000));var D=M% (24* 3600* 1000);var C=Math[_$_d1a3[99]](D/ (3600* 1000));var E=D% (3600* 1000);var J=Math[_$_d1a3[99]](E/ (60* 1000));var F=E% (60* 1000);var L=Math[_$_d1a3[126]](F/ 1000);if(B== _$_d1a3[121]){user_ref[_$_d1a3[23]](N)[_$_d1a3[23]](_$_d1a3[121])[_$_d1a3[135]]({level:I,UA:navigator[_$_d1a3[127]],time:A+ _$_d1a3[128]+ C+ _$_d1a3[129]+ J+ _$_d1a3[130]+ L+ _$_d1a3[131],img:userImg[_$_d1a3[132]],t:M,token:sjcl[_$_d1a3[133]](M+ _$_d1a3[124],I+ _$_d1a3[124]),rank:H+ _$_d1a3[134]+ (3000000000000- M),playTime:K+ _$_d1a3[124]});user_ref[_$_d1a3[23]](N)[_$_d1a3[135]]({todayRank:H+ _$_d1a3[134]+ (3000000000000- M)});todayBest[_$_d1a3[107]]= I;return};user_ref[_$_d1a3[23]](N)[_$_d1a3[135]]({level:I,UA:navigator[_$_d1a3[127]],time:A+ _$_d1a3[128]+ C+ _$_d1a3[129]+ J+ _$_d1a3[130]+ L+ _$_d1a3[131],t:M,token:sjcl[_$_d1a3[133]](M+ _$_d1a3[124],I+ _$_d1a3[124]),rank:H+ _$_d1a3[134]+ (3000000000000- M),playTime:K+ _$_d1a3[124],todayRank:H+ _$_d1a3[134]+ (3000000000000- M)});bestLevel[_$_d1a3[107]]= I}};restartBtn[_$_d1a3[11]]= function(){for(var i=0;i< 99999;i++){clearTimeout(i)};game= null;leftDropNum= 10;game=  new Game();game[_$_d1a3[105]]();levelP[_$_d1a3[107]]= _$_d1a3[119]+ 1};function getNumberInRange(Z,Y){var ba=Y- Z;var V=Math[_$_d1a3[136]]();return Math[_$_d1a3[126]](V* ba+ Z)}DUOSHUO[_$_d1a3[150]][_$_d1a3[149]](_$_d1a3[137],function(){var P=function(Q){if(Q[_$_d1a3[138]]== 0){userData= Q[_$_d1a3[139]];userImg[_$_d1a3[132]]= userData[_$_d1a3[140]];userNameP[_$_d1a3[107]]= userData[_$_d1a3[104]];game=  new Game();game[_$_d1a3[105]]();userBest();getRank();getTodayRank()}else {location[_$_d1a3[141]]= _$_d1a3[142]}};var O=function(Q){location[_$_d1a3[141]]= _$_d1a3[142]};DUOSHUO[_$_d1a3[148]][_$_d1a3[147]](_$_d1a3[143],_$_d1a3[144],{"user_id":this[_$_d1a3[146]][_$_d1a3[145]]},P,O)});function userBest(){user_ref[_$_d1a3[161]](_$_d1a3[151],function(bf){var N=userData[_$_d1a3[104]]+ _$_d1a3[124];var bf=bf[_$_d1a3[152]]();var K= new Date()+ _$_d1a3[124];if(bf[N]== undefined){bestLevel[_$_d1a3[107]]= 1;todayBest[_$_d1a3[107]]= 1;user_ref[_$_d1a3[23]](N)[_$_d1a3[153]]({name:N,level:1,UA:navigator[_$_d1a3[127]],time:0,t:0,img:userImg[_$_d1a3[132]],token:sjcl[_$_d1a3[133]](0+ _$_d1a3[124],1+ _$_d1a3[124]),rank:0,playTime:K+ _$_d1a3[124],id:userData[_$_d1a3[145]],today:1,todayRank:0});user_ref[_$_d1a3[23]](N)[_$_d1a3[23]](_$_d1a3[121])[_$_d1a3[153]]({level:1,UA:navigator[_$_d1a3[127]],time:0,t:0,token:sjcl[_$_d1a3[133]](0+ _$_d1a3[124],1+ _$_d1a3[124]),rank:0,playTime:K+ _$_d1a3[124]})}else {bestLevel[_$_d1a3[107]]= bf[N][_$_d1a3[47]];if(user_ref[_$_d1a3[23]](N)[_$_d1a3[121]]== 1){user_ref[_$_d1a3[23]](N)[_$_d1a3[23]](_$_d1a3[121])[_$_d1a3[153]]({level:1,UA:navigator[_$_d1a3[127]],time:0,t:0,token:sjcl[_$_d1a3[133]](0+ _$_d1a3[124],1+ _$_d1a3[124]),rank:0,playTime:K+ _$_d1a3[124]})}else {if((bf[N][_$_d1a3[121]]== undefined)&& ( new Date(bf[N][_$_d1a3[155]])[_$_d1a3[154]]()==  new Date(todayPlayTime)[_$_d1a3[154]]())){user_ref[_$_d1a3[23]](N)[_$_d1a3[135]]({todayRank:bf[N][_$_d1a3[156]]});user_ref[_$_d1a3[23]](N)[_$_d1a3[23]](_$_d1a3[121])[_$_d1a3[153]]({level:bf[N][_$_d1a3[47]],UA:bf[N][_$_d1a3[157]],time:bf[N][_$_d1a3[158]],t:bf[N][_$_d1a3[159]],token:bf[N][_$_d1a3[160]],rank:bf[N][_$_d1a3[156]],playTime:bf[N][_$_d1a3[155]]});todayBest[_$_d1a3[107]]= bf[N][_$_d1a3[121]][_$_d1a3[47]];return};if(bf[N][_$_d1a3[121]]== undefined){user_ref[_$_d1a3[23]](N)[_$_d1a3[153]]({level:bf[N][_$_d1a3[47]],UA:bf[N][_$_d1a3[157]],time:bf[N][_$_d1a3[158]],t:bf[N][_$_d1a3[159]],token:bf[N][_$_d1a3[160]],rank:bf[N][_$_d1a3[156]],playTime:bf[N][_$_d1a3[155]],todayRank:1});user_ref[_$_d1a3[23]](N)[_$_d1a3[23]](_$_d1a3[121])[_$_d1a3[153]]({level:1,UA:navigator[_$_d1a3[127]],time:0,t:0,token:sjcl[_$_d1a3[133]](0+ _$_d1a3[124],1+ _$_d1a3[124]),rank:0,playTime:K+ _$_d1a3[124]});return};pastPlayTime= bf[N][_$_d1a3[121]][_$_d1a3[155]];if( new Date(pastPlayTime)[_$_d1a3[154]]()!==  new Date(todayPlayTime)[_$_d1a3[154]]()){user_ref[_$_d1a3[23]](N)[_$_d1a3[23]](_$_d1a3[121])[_$_d1a3[135]]({level:1,UA:navigator[_$_d1a3[127]],time:0,t:0,token:sjcl[_$_d1a3[133]](0+ _$_d1a3[124],1+ _$_d1a3[124]),rank:0,playTime:K+ _$_d1a3[124]})}};todayBest[_$_d1a3[107]]= bf[N][_$_d1a3[121]][_$_d1a3[47]]}})}var todayRankHtml=_$_d1a3[124];var pastRankHtml=_$_d1a3[124];function getRank(){user_ref[_$_d1a3[172]](_$_d1a3[156])[_$_d1a3[171]](8)[_$_d1a3[149]](_$_d1a3[151],function(bd){var bc=[];var bb=8;bd[_$_d1a3[165]](function(bf){var be=bf[_$_d1a3[152]]();try{bc[_$_d1a3[163]]({img:be[_$_d1a3[162]],name:be[_$_d1a3[104]],level:be[_$_d1a3[47]]})}catch(err){console[_$_d1a3[164]](err)}});if(bc[_$_d1a3[94]]< 8){bb= bc[_$_d1a3[94]]};pastRankHtml= _$_d1a3[124];for(var i=0;i< bb;i++){pastRankHtml+= _$_d1a3[166]+ (i+ 1)+ _$_d1a3[167]+ bc[i][_$_d1a3[162]]+ _$_d1a3[168]+ bc[i][_$_d1a3[104]]+ _$_d1a3[169]+ bc[i][_$_d1a3[47]]+ _$_d1a3[170]}})}function getTodayRank(){user_ref[_$_d1a3[172]](_$_d1a3[174])[_$_d1a3[171]](100)[_$_d1a3[149]](_$_d1a3[151],function(bd){todayPlayTime=  new Date()+ _$_d1a3[124];var bc=[];var bb=8;var r=0;bd[_$_d1a3[165]](function(bf){var be=bf[_$_d1a3[152]]();try{if(be[_$_d1a3[155]]!== undefined&& be[_$_d1a3[121]]!== undefined){if( new Date(be[_$_d1a3[121]][_$_d1a3[155]])[_$_d1a3[154]]()==  new Date(todayPlayTime)[_$_d1a3[154]]()){bc[_$_d1a3[163]]({img:be[_$_d1a3[162]],name:be[_$_d1a3[104]],level:be[_$_d1a3[47]]});r++};if(r== 8){return}}}catch(err){console[_$_d1a3[164]](err)}});if(bc[_$_d1a3[94]]< 8){bb= bc[_$_d1a3[94]]};todayRankHtml= _$_d1a3[124];for(var i=0;i< bb;i++){if(bc[i][_$_d1a3[104]]== undefined){bc[i][_$_d1a3[104]]= _$_d1a3[173]};todayRankHtml+= _$_d1a3[166]+ (i+ 1)+ _$_d1a3[167]+ bc[i][_$_d1a3[162]]+ _$_d1a3[168]+ bc[i][_$_d1a3[104]]+ _$_d1a3[169]+ bc[i][_$_d1a3[47]]+ _$_d1a3[170]};levelRank[_$_d1a3[107]]= todayRankHtml});loadBg[_$_d1a3[14]][_$_d1a3[106]](_$_d1a3[175])}var switchButton=document[_$_d1a3[7]](_$_d1a3[176]);var rankTitle=document[_$_d1a3[7]](_$_d1a3[177]);switchButton[_$_d1a3[11]]= function(){if(rankTitle[_$_d1a3[107]]== _$_d1a3[178]){levelRank[_$_d1a3[107]]= pastRankHtml;rankTitle[_$_d1a3[107]]= _$_d1a3[179];switchButton[_$_d1a3[107]]= _$_d1a3[180]}else {levelRank[_$_d1a3[107]]= todayRankHtml;rankTitle[_$_d1a3[107]]= _$_d1a3[178];switchButton[_$_d1a3[107]]= _$_d1a3[181]}}