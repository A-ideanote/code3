

//画面　上部固定部分の【高さ取得】//////////////////////////
$(function() {
	var headHeight=$("#header").height();
	$("#upper").css("margin-top", headHeight);

	var headHeight2=$("#upper").height();
	$("#mozi").css("margin-top", headHeight2 + headHeight );

	var headHeight3=$("#mozi").height();
	$("#lower").css("margin-top", headHeight3 +headHeight2 + headHeight );

});

//画面　上下のバランス【高さ取得】//////////////////////////
const vh = window.innerHeight;
document.getElementById('contents').style.height = vh +'px'; 

const upper = document.getElementById('upper');
const mozi = document.getElementById('mozi');
const lower = document.getElementById('lower');
upper.style.height =  (vh * 0.37 ) +'px'; 
mozi.style.height =  (vh * 0.07 ) +'px'; 
lower.style.height =  (vh - (vh * 0.44 ))+'px';

// タブ切り替え////////////////////////////////////////
$(function () {
	$('.tab_box .tab_btn').click(function() {
		let index = $('.tab_box .tab_btn').index(this);
		$('.tab_box .tab_btn, .tab_box .tab_panel').removeClass('active');
		$(this).addClass('active');
		$('.tab_box .tab_panel').eq(index).addClass('active');

	  });
  });

//定義//////////////////////////////////////////////
// 2
const baseSelect = document.querySelector('[name="基本モデル*1"]');
//【画像】基本型画像の定義
const r_InImg = document.getElementById("r_InImg");
const r_OutImg = document.getElementById("r_OutImg");
const firstImg = document.getElementById("f_Img");

// 3
//WEB表示非表示
const webDisplay = document.getElementById("web_none");
//WEB全体を定義(▲選択項目用) 
const webselect = document.getElementsByClassName('webradio');
// WEBの種類定義 
const webDisplay_p =  document.getElementsByClassName('plist');
const webDisplay_in =  document.getElementsByClassName('ilist');
const webDisplay_out =  document.getElementsByClassName('outlist');
//【画像】WEB画像を定義　
const webImg = document.getElementsByClassName("webkind");
const uraWebImg = document.getElementsByClassName("uraWebKind");
//　WEBオプションの定義
const webOp = document.querySelector('[name="ウェブレースカラー・オプション*1"]');
const webHimo = document.getElementsByClassName("himo-special");

// 4
//バックスタイル表示非表示
const backDisplay = document.getElementById("back_none");
//バックスタイルを定義 
const backselect = document.getElementsByName('バックスタイル*5');

// 5
//「2色以上」を選択した時の取得データ設定
const kawaColor = document.getElementsByName("本体カラー*3");
const rColor = document.getElementById("colorsR");
const fColor = document.getElementById("colorsF");
const kawa1 = document.getElementById("LC2List1");
const kawa2 = document.getElementById("LC2List2");
const kawa3 = document.getElementById("LC2List3");
const kawa33 = document.getElementById("LC2List33");
const kawa4 = document.getElementById("LC2List4");
const kawa5 = document.getElementById("LC2List5");
const kawa6 = document.getElementById("LC2List6");
const kawa7 = document.getElementById("LC2List7");
const kawa8 = document.getElementById("LC2List8");
const kawa9 = document.getElementById("LC2List9");
const kawa10 = document.getElementById("LC2List10");
const kawa11 = document.getElementById("LC2List11");
const kawa12 = document.getElementById("LC2List12");
const kawa13 = document.getElementById("LC2List13");
//const kawa14 = document.getElementById("LC2List14");
const kawa15 = document.getElementById("LC2List15");
const kawa16 = document.getElementById("LC2List16");
const kawa101 = document.getElementById("LC2List101");
const kawa102 = document.getElementById("LC2List102");
const kawa106 = document.getElementById("LC2List106");
const kawa108 = document.getElementById("LC2List108");
const kawa1010 = document.getElementById("LC2List1010");
const kawa1011 = document.getElementById("LC2List1011");
const kawa1012 = document.getElementById("LC2List1012");
const kawa1013 = document.getElementById("LC2List1013");
const kawa1015 = document.getElementById("LC2List1015");
const kawa1016 = document.getElementById("LC2List1016");
//【画像】カラーの画像の関数の定義
//レギュラーバック
const imgR = document.getElementsByClassName("bodyColor");
const imgR1 = document.getElementsByClassName("bodyColor1");
const imgR2 = document.getElementsByClassName("bodyColor2");
const imgR3 = document.getElementsByClassName("bodyColor3");
const imgR33 = document.getElementsByClassName("bodyColor33");
const imgR4 = document.getElementsByClassName("bodyColor4");
const imgR5 = document.getElementsByClassName("bodyColor5");
const imgR6 = document.getElementsByClassName("bodyColor6");
const imgR7 = document.getElementsByClassName("bodyColor7");
const imgR8 = document.getElementsByClassName("bodyColor8");
const imgR9 = document.getElementsByClassName("bodyColor9");
const imgR10 = document.getElementsByClassName("bodyColor10");
const imgR11 = document.getElementsByClassName("bodyColor11");
const imgR12 = document.getElementsByClassName("bodyColor12");
const imgR13 = document.getElementsByClassName("bodyColor13");
const imgRoya_up = document.getElementsByClassName("oyayubi_up");
const imgRoya_down = document.getElementsByClassName("oyayubi_down");
const imgRkoyubi = document.getElementsByClassName("koyubi");
//ファーストバック
const imgF101 = document.getElementById("bodyColor101");
const imgF102 = document.getElementById("bodyColor102");
const imgF106 = document.getElementById("bodyColor106");
const imgF108 = document.getElementById("bodyColor108");
const imgF1010 = document.getElementById("bodyColor1010");
const imgF1011_left = document.getElementById("bodyColor1011_left"); //ベルト
const imgF1011_right = document.getElementById("bodyColor1011_right"); //ベルト
const imgF1012 = document.getElementsByClassName("bodyColor1012"); //捕球面カラー
const imgF1013 = document.getElementsByClassName("bodyColor1013");
const imgFoyayubi = document.getElementById("oyayubi_f");  //15
const imgFkoyubi_f = document.getElementById("koyubi_f");  //16

// 6
const himoColor = document.querySelector('[name="皮ひもカラー*1"]');
const hamiColor = document.querySelector('[name="ハミダシカラー*1"]');
const heriColor = document.querySelector('[name="ヘリ皮カラー*1"]');
const stitchColor = document.querySelector('[name="ステッチカラー*1"]');
const urakawaColor = document.querySelector('[name="裏革素材・カラー*1"]');

// 7
//ラベルを定義
const labelChange = document.querySelector('[name="ラベル*1"]');
//【画像】ラベル画像の定義
//レギュラーラベル元画像
const Hlabel_R = document.getElementById("H_label_R");
const Klabel_R = document.getElementById("K_label_R");
const Llabel_R = document.getElementById("L_label_R");
const Mlabel_R = document.getElementById("M_label_R");
const ABClabel_R = document.getElementById("ABC_label_R");
//ファーストバックラベル元画像
const Hlabel_F = document.getElementById("H_label_F");
const Klabel_F = document.getElementById("K_label_F");
const Llabel_F = document.getElementById("L_label_F");
const Mlabel_F = document.getElementById("M_label_F");
const ABClabel_F = document.getElementById("ABC_label_F");
//ファーストバックラベル元画像
const Hlabel_FM1 = document.getElementById("H_label_FM1");
const Klabel_FM1 = document.getElementById("K_label_FM1");
const Llabel_FM1 = document.getElementById("L_label_FM1");
const Mlabel_FM1 = document.getElementById("M_label_FM1");
const ABClabel_FM1 = document.getElementById("ABC_label_FM1");

// 8
// 指当てのデータを定義	
const selectCover = document.getElementById('指カバーAカラー');
const selectCover2 = document.getElementById('指カバーBカラー');
const selectCover3 = document.getElementById('指あてカラー');
//【画像】指当ての画像を定義
const fingerImg = document.getElementsByClassName('fingerkind');
const fingerImgA = document.getElementById("fingerImgA");
const fingerImgB = document.getElementById("fingerImgB");
const fingerImgO = document.getElementById("fingerImgO");

// 9
//芯とじ表示非表示
const coreDisplay = document.getElementById("core_none");
//芯とじデータを定義
const stList = document.getElementsByName('芯トジ形態*6');
//【画像】芯トジの画像を定義
const coreImg = document.getElementsByClassName('coreImg');
const tateImg = document.getElementById('tateImg');
const yokoImg = document.getElementById("yokoImg");
const sinImg = document.getElementById("sinImg");

// 10
//10-1【通常刺繍】
const embroThumb = document.querySelector('[name="親指部・刺繍書体*7"]');
const embroThumb_color = document.querySelector('[name="親指部・刺繍カラー*1"]');
const embroThumb_huti = document.querySelector('[name="親指部・刺繍カゲ・フチカラー*1"]');
const embroThumb_text = document.querySelector('[name="親指部・刺繍文字*1"]');

const palmUpF = document.querySelector('[name="平裏部上段・刺繍書体*8"]');
const palmUpF_color = document.querySelector('[name="平裏部上段・刺繍カラー*1"]');
const palmUpF_huti = document.querySelector('[name="平裏部上段・刺繍カゲ・フチカラー*1"]');
const palmUpF_text = document.querySelector('[name="平裏部上段・刺繍文字*1"]');

const palmDownF = document.querySelector('[name="平裏部下段・刺繍書体*9"]');
const palmDownF_color = document.querySelector('[name="平裏部下段・刺繍カラー*1"]');
const palmDownF_huti = document.querySelector('[name="平裏部下段・刺繍カゲ・フチカラー*1"]');
const palmDownF_text = document.querySelector('[name="平裏部下段・刺繍文字*1"]');

const littleF = document.querySelector('[name="小指部・刺繍書体*10"]');
const littleF_color = document.querySelector('[name="小指部・刺繍カラー*1"]');
const littleF_huti = document.querySelector('[name="小指部・刺繍カゲ・フチカラー*1"]');
const littleF_text = document.querySelector('[name="小指部・刺繍文字*1"]');

//10-2 丸抜き刺繍
const maru_EmbContents = document.getElementById("maru_EmbContents")
const maruEmbro_part = document.querySelector('[name="丸抜き刺繍位置"]');
const maruEmbro = document.querySelector('[name="丸抜き刺繍仕様*11"]');
const maruEmbro_base = document.querySelector('[name="丸抜き刺繍台カラー*1"]');
const maruEmbro_color = document.querySelector('[name="丸抜き刺繍カラー*1"]');
const maruEmbro_huti = document.querySelector('[name="丸抜き刺繍カゲカラー*1"]');
const maruEmbro_text = document.querySelector('[name="丸抜き刺繍文字*1"]');

//10-3 WEB刺繍
const web_EmbContents = document.getElementById("web_EmbContents")
const webEmbro = document.querySelector('[name="WEB刺繍・刺繍書体*12"]');
const webEmbro_color = document.querySelector('[name="WEB刺繍・刺繍カラー*1"]');
const webEmbro_huti = document.querySelector('[name="WEB刺繍・刺繍カゲ・フチカラー*1"]');
const webEmbro_text = document.querySelector('[name="WEB刺繍・刺繍文字*1"]');

//10-4 番号刺繍
const num_EmbContents = document.getElementById("num_EmbContents")
const numEmbro = document.querySelector('[name="番号刺繍書体"]');
const numEmbro_color = document.querySelector('[name="番号刺繍カラー*1"]');
const numEmbro_text = document.querySelector('[name="番号刺繍数字*1"]');

//関数//////////////////////////////////////////////
//3【動き】ウェブ「無効:選択不可」
const initWeb_Move = () => {
	for(let index in webDisplay_p) {
		webDisplay_p[index].disabled=true; 
		}
	for(let index in webDisplay_in) {
		webDisplay_in[index].disabled=true; 
	}
	for(let index in webDisplay_out) {
		webDisplay_out[index].disabled=true; 
	}
}
//3【画像】ウェブ　初期値は1枚目 
const initWeb_Img = () => {
	for(let i = 0; i < webImg.length; i++) {
		webImg[0].style.display ="block";
		webImg[i].style.display = "none";
		} 
	for(let i = 0; i < uraWebImg.length; i++) {
		uraWebImg[0].style.display ="block";
		uraWebImg[i].style.display = "none";
		} 	
}
//4【選択項目】バックスタイル「無効:選択不可」
const initBackStyle_Move = () =>{
	backselect[0].disabled=true; 
	backselect[1].disabled=true; 
}
//5【選択項目】 多色カラーボタンを「無効:選択不可」
const initColor_Move = () => {
	kawaColor[16].disabled=true; 
	kawaColor[17].disabled=true;
}
//5【項目表示】多色カラー「非表示」
const initColor_display = () =>{
	rColor.style.display = "none";
	fColor.style.display = "none";
}
//8【画像】指カバー「非表示」
const initFinger_display = () =>{
	for(let i = 0; i < fingerImg.length; i++) {
		fingerImg[i].style.display = "none";
		} 
}
//9【選択項目】芯とじ：タテトジと辻トジを「無効:選択不可」
const initCore_move = () => {
	stList[0].disabled=true; 
	stList[2].disabled=true;
}
//9【画像】芯とじ：初期ヨコトジ
const initCore_img = () => {
	coreImg[0].style.display ="none";
	coreImg[1].style.display ="block";
	coreImg[2].style.display ="none";
}
//10-2【選択項目】丸抜き刺繍「無効:選択不可」
const initMaruEmbro_move = () =>{
	maruEmbro.disabled = true;
	maruEmbro_base.disabled = true;
	maruEmbro_color.disabled = true;
	maruEmbro_huti.disabled = true;
	maruEmbro_text.disabled = true;
}
//10-3【選択項目】WEB刺繍「無効:選択不可」
const initWebEmbro_move = () =>{
	webEmbro_color.disabled = true;
	webEmbro_huti.disabled = true;
	webEmbro_text.disabled = true;
}
//10-4【選択項目】番号刺繍「無効:選択不可」
const initNumEmbro_move = () =>{
	numEmbro_color.disabled = true;
	numEmbro_text.disabled = true;
}


//3 WEB投手用・選択可 (falseでウェブ選択可)
const webForPicther = () =>{
	for(let i = 0; i < webDisplay_p.length; i++) {
		webDisplay_p[i].disabled = false; 
		}
}
//3 WEB内野手・選択可
const webForInfielder = () => {
	for(let i = 0; i < webDisplay_in.length; i++) {
		webDisplay_in[i].disabled = false;
		}
}
//3 WEB外野手・選択可
const webForOutfielder = () =>{
	for(let i = 0; i < webDisplay_out.length; i++) {
		webDisplay_out[i].disabled=false;
		}
}


//5【画像】R画像の色　クリア
const rColorImg_Clear = () => {
	for(let i = 0; i < imgR1.length; i++){
		imgR1[i].style.fill = "";
	}
	for(let i = 0; i < imgR2.length; i++){
		imgR2[i].style.fill = "";
	}
	for(let i = 0; i < imgR3.length; i++){
		imgR3[i].style.fill = "";
	}
	for(let i = 0; i < imgR4.length; i++){
		imgR4[i].style.fill = "";
	}
	for(let i = 0; i < imgR5.length; i++){
		imgR5[i].style.fill = "";
	}
	for(let i = 0; i < imgR6.length; i++){
		imgR6[i].style.fill = "";
	}
	for(let i = 0; i < imgR7.length; i++){
		imgR7[i].style.fill = "";
	}
	for(let i = 0; i < imgR8.length; i++){
		imgR8[i].style.fill = "";
	}
	for(let i = 0; i < imgR9.length; i++){
		imgR9[i].style.fill = "";
	}
	for(let i = 0; i < imgR10.length; i++){
		imgR10[i].style.fill = "";
	}
	for(let i = 0; i < imgR11.length; i++){
		imgR11[i].style.fill = "";
	}
	for(let i = 0; i < imgR12.length; i++){
		imgR12[i].style.fill = "";
	}
	for(let i = 0; i < imgR13.length; i++){
		imgR13[i].style.fill = "";
	}
	for(let i = 0; i < imgRkoyubi.length; i++){
		imgRkoyubi[i].style.fill = "";
	}
	for(let i = 0; i < imgRoya_down.length; i++){
		imgRoya_down[i].style.fill = "";
	}
	for(let i = 0; i < imgRoya_up.length; i++){
		imgRoya_up[i].style.fill = "";
	}
}
//5【画像】F画像の色　クリア
const fColorImg_Clear = () => {
imgF101.style.fill = "";
imgF102.style.fill = "";
imgF106.style.fill = "";
imgF108.style.fill = "";
imgF1010.style.fill = "";
imgF1011_left.style.fill = ""; //ベルト
imgF1011_right.style.fill = ""; //ベルト
for(let i = 0; i < imgF1012.length; i++){
	imgF1012[i].style.fill = "";
}
for(let i = 0; i < imgF1013.length; i++){
	imgF1013[i].style.fill = "";
}
imgFoyayubi.style.fill = "";
imgFkoyubi_f.style.fill = "";
}
//5 R項目　33も3もすべて「無効:選択不可」
const rColorDisabled_True = () => {
	kawa1.disabled = true;
	kawa2.disabled = true;
	kawa3.disabled = true;
	kawa33.disabled = true;
	kawa4.disabled = true;
	kawa5.disabled = true;
	kawa6.disabled = true;
	kawa7.disabled = true;
	kawa8.disabled = true;
	kawa9.disabled = true;
	kawa10.disabled = true;
	kawa11.disabled = true;
	kawa12.disabled = true;
	kawa13.disabled = true;
	// kawa14.disabled = true;
	kawa15.disabled = true;
	kawa16.disabled = true;
}
//5 F項目　「無効:選択不可」
const fColorDisabled_True = () => {
	kawa101.disabled = true;
	kawa102.disabled = true;
	kawa106.disabled = true;
	kawa108.disabled = true;
	kawa1010.disabled = true;
	kawa1011.disabled = true;
	kawa1012.disabled = true;
	kawa1013.disabled = true;
	// kawa1014.disabled = true;
	kawa1015.disabled = true;
	kawa1016.disabled = true;
}
//5 R項目　「0」にする
const rColorSelect_Clear = () => {
	kawa1.selectedIndex = 0;
	kawa2.selectedIndex = 0;
	kawa3.selectedIndex = 0;
	kawa33.selectedIndex = 0;
	kawa4.selectedIndex = 0;
	kawa5.selectedIndex = 0;
	kawa6.selectedIndex = 0;
	kawa7.selectedIndex = 0;
	kawa8.selectedIndex = 0;
	kawa9.selectedIndex = 0;
	kawa10.selectedIndex = 0;
	kawa11.selectedIndex = 0;
	kawa12.selectedIndex = 0;
	kawa13.selectedIndex = 0;
	// kawa14.selectedIndex = 0;
	kawa15.selectedIndex = 0;
	kawa16.selectedIndex = 0;
}
//5 F項目　「0」にする
const fColorSelect_Clear = () => {
	kawa101.selectedIndex = 0;
	kawa102.selectedIndex = 0;
	kawa106.selectedIndex = 0;
	kawa108.selectedIndex = 0;
	kawa1010.selectedIndex = 0;
	kawa1011.selectedIndex = 0;
	kawa1012.selectedIndex = 0;
	kawa1013.selectedIndex = 0;
	// kawa14.selectedIndex = 0;
	kawa1015.selectedIndex = 0;
	kawa1016.selectedIndex = 0;
}
//7 Rラベル　クリア
const rlabel_Clear = () =>{
	Hlabel_R.style.display ="none";
	Klabel_R.style.display ="none";
	Llabel_R.style.display ="none";
	Mlabel_R.style.display ="none";
	ABClabel_R.style.display ="none";
}
//7 Fラベル FM1以外(5,7,8)　クリア
const flabelQut1_Clear = () =>{
	Hlabel_F.style.display ="none";
	Klabel_F.style.display ="none";
	Llabel_F.style.display ="none";
	Mlabel_F.style.display ="none";
	ABClabel_F.style.display ="none";
}
//7 Fラベル FM1　クリア
const flabelIn1_Clear = () =>{
	Hlabel_FM1.style.display ="none";
	Klabel_FM1.style.display ="none";
	Llabel_FM1.style.display ="none";
	Mlabel_FM1.style.display ="none";
	ABClabel_FM1.style.display ="none";
}


////1.読み込んだ時//////////////////////////////////////////////
window.addEventListener("load", () => {
	// 2
	//【画像】初期値ファーストバックと外野の画像を非表示
	r_InImg.style.display ="block";
	r_OutImg.style.display ="none";
	firstImg.style.display ="none";
	// 3　
	//初期値WEBは非表示
	webDisplay.style.display = "none";	
	//3【動き】ウェブ「無効:選択不可」
	initWeb_Move();
	//【画像】初期値webの画像を非表示
	//1番目表示・2番目移行を非表示
	initWeb_Img();

	// 4　
	// 初期値バックスタイルは非表示
	backDisplay.style.display = "none";	
	//【動き】バックスタイル「無効:選択不可」
	initBackStyle_Move();

	// 5　
	//【項目】多色カラー「表示非表示」
	initColor_display();
	//【動き】多色カラーボタンを「無効:選択不可」
	initColor_Move();

	// 7　
	//【画像】ラベル 初期値1つだけ表示の画像を非表示
	Hlabel_R.style.display ="block";
	Klabel_R.style.display ="none";
	Llabel_R.style.display ="none";
	Mlabel_R.style.display ="none";
	ABClabel_R.style.display ="none";
	//Fラベル FM1以外　クリア
	flabelQut1_Clear();
	//Fラベル FM1　クリア
	flabelIn1_Clear(); 
	
	// 8　
	//【画像】指カバー　初期値は非表示
	initFinger_display();
	
	// 9　
	//初期値バックスタイルは非表示
	coreDisplay.style.display = "none";	
	//【動き】芯とじ：タテトジと辻トジを「無効:選択不可」
	initCore_move();
	//【画像】芯とじ：初期ヨコトジ	
	initCore_img();

	// 10　初期値
	//  10-１,【通常刺繍】初期値
	embroThumb_color.disabled = true;
	embroThumb_huti.disabled = true;
	embroThumb_text.disabled = true;
	palmUpF_color.disabled = true;
	palmUpF_huti.disabled = true;
	palmUpF_text.disabled = true;
	palmDownF_color.disabled = true;
	palmDownF_huti.disabled = true;
	palmDownF_text.disabled = true;
	littleF_color.disabled = true;
	littleF_huti.disabled = true;
	littleF_text.disabled = true;
	//10-2,【丸抜き刺繍】初期値
	initMaruEmbro_move();
	//10-3,【WEB刺繍】初期値
	initWebEmbro_move();
	//10-4,【番号刺繍】初期値
	initNumEmbro_move();
 
	//【動き】10-2丸抜き刺繍は非表示
	maru_EmbContents.style.display = "none";	
	//【動き】10-3WEB刺繍は非表示
	web_EmbContents.style.display = "none";	
	//【動き】10-4WEB刺繍は非表示
	num_EmbContents.style.display = "none";
});
 
////2.基本項目変更した時////////////////////////////////////////
baseSelect.addEventListener("change", () => { 
	//ここから初期化----------------------------------------	
	// 3 ウェブ(基本に連動初期化)///////////////////////
		//(選択したら表示させる)
		webDisplay.style.display = "block";
		//(選択されていた選択肢を初期化）
		for(let i = 0; i < webselect.length; i++) {
			webselect[i].checked = false;
		}
		//【動き】ウェブ「無効:選択不可」
		initWeb_Move();
		//【画像】初期値webの画像を非表示
		initWeb_Img();

		//【動き】WEBオプション選択項目元に戻す
		document.getElementById("web2").style.display = "none";	
		webOp.disabled = true; 
		webOp.selectedIndex = 0;
		//(選択されていた選択肢を初期化）
		for(let i = 0; i < webHimo.length; i++) {
			webHimo[i].style.fill = "";
		}

	// 4バックスタイル(基本に連動初期化)/////////////////////
		//(選択したら表示させる)
		backDisplay.style.display = "block";
		//(選択されていた選択肢を初期化）
		for(let i = 0; i < backselect.length; i++) {
			backselect[i].checked = false;
		}
		//【動き】バックスタイル「無効:選択不可」
		initBackStyle_Move();

	// 5カラー(基本に連動初期化)/////////////////////////////////////	
		//(選択されていた選択肢を初期化）
		for(let i = 0; i < kawaColor.length; i++){
			kawaColor[i].checked = false;
		}
		//【項目】多色カラー「表示非表示」
		initColor_display();
		// 多色カラーボタンを「無効:選択不可」
		initColor_Move();
		//【画像】R画像の色　クリア
		rColorImg_Clear();
		//【画像】F画像の色　クリア
		fColorImg_Clear();
		//多色選択項目の初期化
		rColorSelect_Clear();
		//F多色選択項目の初期化
		fColorSelect_Clear();
		
	// 7ラベル(基本に連動初期化)//////////////////////////////////////
		//Rラベル　クリア
		rlabel_Clear();
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		//Fラベル FM1　クリア
		flabelIn1_Clear(); 
		//▲データ(選択されていた選択肢を初期化）
		labelChange.selectedIndex = 0;

	// 8指あて(基本に連動初期化)//////////////////////////////////////
		//★画像(選択されていた選択肢を初期化）
		initFinger_display();
		//▲データ(選択されていた選択肢を初期化）
		selectCover.selectedIndex = 0;
		selectCover2.selectedIndex = 0;
		selectCover3.selectedIndex = 0;
		selectCover.disabled = false;
		selectCover2.disabled = false;
		selectCover3.disabled = false;

	// 9芯とじ(基本に連動初期化)///////////////////////////////////////
		//(選択したら表示させる)
		coreDisplay.style.display = "block";
		//★画像(選択されていた選択肢を初期化）
		initCore_img();
		//▲【動き】(選択されていた選択肢を初期化）
		initCore_move()
		//▲データ(選択されていた選択肢を初期化）
		for(let i = 0; i < stList.length; i++) {
				stList[i].checked = false;
			}

	//	10刺繍(基本に連動初期化)///////////////////////////////////////
		// 【動き】10-2該当の基本型を選択するまで非表示
		maru_EmbContents.style.display = "none";	
		//▲データ（選択されていた選択肢を初期化）
		maruEmbro_part.selectedIndex = 0;
		maruEmbro.selectedIndex = 0;
		maruEmbro_base.selectedIndex = 0;
		maruEmbro_color.selectedIndex = 0;
		maruEmbro_huti.selectedIndex = 0;
		maruEmbro_text.value = ''
		// 【動き】10-3該当のWEBを選択するまで非表示
		web_EmbContents.style.display = "none";	
		//▲データ（選択されていた選択肢を初期化）
		webEmbro.selectedIndex = 0;
		webEmbro_color.selectedIndex = 0;
		webEmbro_huti.selectedIndex = 0;
		webEmbro_text.value = '';
		// 【動き】10-4 該当のラベルを選択するまで非表示
		num_EmbContents.style.display = "none";	
		//▲データ（選択されていた選択肢を初期化）
		numEmbro.selectedIndex = 0;
		numEmbro_color.selectedIndex = 0;
		numEmbro_text.value = '';
	//ここまで初期化--------------------------------------


	//ここから動き----------------------------------------

		//基本モデルのバリューを全角で分割させる
		let type = baseSelect.value.split('\u3000');
		
		if(type[1].match(/ピッチャー・セカンド・ショート・サード用/i)){
			//基本型の画像
			r_InImg.style.display = "block";
			r_OutImg.style.display = "none";//外野
			firstImg.style.display ="none";//ファースト
			//ウェブ投手選択可
			webForPicther();
			//ウェブ内野選択可
			webForInfielder();
			// バックスタイル選択可
			backselect[0].disabled=false; 
			//多色カラーボタン選択可
			kawaColor[16].disabled=false; 			
			//トジ選択可
			stList[0].disabled=false;
			stList[2].disabled=false;
			//console.log("ピッチャー・セカンド・ショート・サード用");
		}else if(type[1].match(/ピッチャー/) && type[0] == "FM1型" ){
				//WEB投手・選択可
				webForPicther();
				//基本型の画像
				r_InImg.style.display ="none";
				r_OutImg.style.display ="none";//レギュラー外野
				firstImg.style.display = "block";//ファースト
				// 選択可
				backselect[1].disabled=false; 
				kawaColor[17].disabled=false; 
				stList[0].disabled=false;
				//console.log("ピッチャー用のファーストバッグFM1です");
		}else if(type[1].match(/ピッチャー/) && !(type[0] == "FM1型") ){
				//WEB投手・選択可
				webForPicther();
				//基本型の画像
				r_InImg.style.display = "block";
				r_OutImg.style.display = "none";//レギュラー外野
				firstImg.style.display ="none";//ファースト
				/// 選択可
				backselect[0].disabled=false; 
				kawaColor[16].disabled=false; 
				stList[0].disabled=false;
				//console.log("ピッチャー用のレギュラーバッグです");
		}else if((type[1].match(/内野/)|| type[1].match(/セカンド/)|| type[1].match(/ショート/)|| type[1].match(/サード/)) && type[0] == "FM5型"){
			//WEB内野手・選択可
			webForInfielder();
			//基本型の画像
			r_InImg.style.display = "none";
			r_OutImg.style.display = "none";//レギュラー外野
			firstImg.style.display = "block";//ファースト
			// 選択可
			backselect[1].disabled=false; //ファースト
			kawaColor[17].disabled=false; 
			stList[2].disabled=false;						
			//console.log("内野手用のファーストバッグFM5型です");
		}else if((type[1].match(/内野/)|| type[1].match(/セカンド/)|| type[1].match(/ショート/)|| type[1].match(/サード/)) && !(type[0] == "FM5型") ){
			//WEB内野手・選択可
			webForInfielder();
			//基本型の画像
			r_InImg.style.display = "block";
			r_OutImg.style.display = "none";//レギュラー外野
			firstImg.style.display ="none";//ファースト
			// 選択可
			backselect[0].disabled=false; 
			kawaColor[16].disabled=false; 
			stList[2].disabled=false;
			//console.log("内野手用のレギュラーバッグです");			
		}else if (type[1].match(/オール/)){
			//WEB投手・選択可
			webForPicther();
			//WEB内野手・選択可
			webForInfielder();
			//基本型の画像
			r_InImg.style.display = "block";
			r_OutImg.style.display = "none";//レギュラー外野
			firstImg.style.display ="none";//ファースト
			// 選択可
			backselect[0].disabled=false; 
			kawaColor[16].disabled=false; 
			stList[0].disabled=false;
			//console.log("オールラウンド用");
		}else if (type[1].match(/外野手/) && type[0] == "FM7型"){
			//WEB外野手・選択可
			webForOutfielder();
			//基本型の画像
			r_InImg.style.display = "none";
			r_OutImg.style.display = "none";//レギュラー外野
			firstImg.style.display = "block";//ファースト
			// 選択可
			backselect[1].disabled=false; //ファースト
			kawaColor[17].disabled=false; 
			stList[0].disabled=false;
			//console.log("外野手用のファーストバッグFM7です");
		}else if (type[1].match(/外野手/) && type[0] == "FM8型"){
			//WEB外野手・選択可
			webForOutfielder();
			//基本型の画像
			r_InImg.style.display = "none";
			r_OutImg.style.display = "none";//レギュラー外野
			firstImg.style.display = "block";//ファースト
			// 選択可
			backselect[1].disabled=false; //ファースト
			kawaColor[17].disabled=false; 
			stList[0].disabled=false;
			//console.log("外野手用のファーストバッグFM8です");
		}else if (type[1].match(/外野手/) && !(type[0] ==  "FM7型") && !(type[0] ==  "FM8型")){
			//WEB外野手・選択可
			webForOutfielder();
			//基本型の画像
			r_InImg.style.display = "none";
			r_OutImg.style.display = "block";//レギュラー外野
			firstImg.style.display ="none";//ファースト
			// 選択可
			backselect[0].disabled=false; 
			kawaColor[16].disabled=false; 
			stList[0].disabled=false;
			//console.log("外野手用のレギュラーバッグです");
		}else {
			console.log("マッチしなかったです…");
		}
		//丸抜き刺繍の表示非表示
		if(type[0].match(/KSN-K65/)||type[0].match(/KSN-MP19/)||type[0].match(/KSN-TA6/)||type[0].match(/KSN-25MS/)||type[0].match(/KSN-SPV/)){
			maru_EmbContents.style.display = "none";	
		}else{
			maru_EmbContents.style.display = "block";
		}

	//ここまで動き----------------------------------------
});

////3.残りの動き////////////////////////////////////////////////

// 3【画像】選んだWEBを表示（0～59番まで）。
const Webchange = () => {
	WC = document.getElementsByName('ウェブスタイル*4');	
	//W-23とW-26とW-23Sの時選択項目表示
	if(WC[20].checked || WC[22].checked|| WC[56].checked){					
		document.getElementById("web2").style.display = "block";
		webOp.disabled = false;
	} else{
		document.getElementById("web2").style.display = "none";	
		webOp.disabled = true; 
		webOp.selectedIndex = 0;
		for(let i = 0; i < webHimo.length; i++) {
			webHimo[i].style.fill = "";
		}				
	}
					
	//表ウェブ
	for (let webnum = 0; webnum < webselect.length; webnum++)
		for(let i = 0; i < webImg.length; i++){
			if (WC[webnum].checked){
				webImg[i].style.display ="none";
				webImg[webnum].style.display ="block";
			}
		}

	//裏ウェブ
	for (let urawebnum = 0; urawebnum < webselect.length; urawebnum++)
		for(let i = 0; i < uraWebImg.length; i++){
			if (WC[urawebnum].checked){
				uraWebImg[i].style.display ="none";
				uraWebImg[urawebnum].style.display ="block";
			}
	}

	//W-18，38，44，45，50，51，53，23Sの選択時、【WEB刺繍】項目表示
	if(WC[15].checked || WC[34].checked||  WC[41].checked||  WC[42].checked||  WC[47].checked||  WC[48].checked||  WC[49].checked||  WC[56].checked){					
		web_EmbContents.style.display = "block";
	} else{
		web_EmbContents.style.display = "none";	
	}
}
// 3-1【カラー】「WEBオプション」カラー設定　【W-23、W-26、W-23Sのみ】　
webOp.addEventListener("change", () => { 
	for(let i = 0; i < webHimo.length; i++) {
		webOp.value == "Fオレンジ" ? webHimo[i].style.fill = "#f13421":
		webOp.value == "オレンジ" ? webHimo[i].style.fill = "#ff5722":
		webOp.value == "ブラック" ? webHimo[i].style.fill = "#000000":
		webOp.value == "レッド" ? webHimo[i].style.fill = "#DA0000":
		webOp.value == "ブルー" ? webHimo[i].style.fill = "#174ca8":
		webOp.value == "ホワイト" ? webHimo[i].style.fill = "#e7e6eb":
		webOp.value == "Gイエロー" ? webHimo[i].style.fill = "#ddad0d":
		webOp.value == "KSブラック" ? webHimo[i].style.fill = "#292327":
		webOp.value == "タン" ? webHimo[i].style.fill = "#de7e1a":
		webOp.value == "Dグレー" ? webHimo[i].style.fill = "#817076":
		webOp.value == "トレンチ" ? webHimo[i].style.fill = "#e5c48e":
		webOp.value == "ウッド" ? webHimo[i].style.fill = "#8b1f1c":
		webOp.value == "水色" ? webHimo[i].style.fill = "#419cb1":
		webOp.value == "ピンク" ? webHimo[i].style.fill = "#e3274a":
		webOp.value == "グリーン" ? webHimo[i].style.fill = "#0e4a2e":
		webHimo[i].style.fill = "#6c2735"; // "バーガンディ" 
		}
});
// 5【カラー】本体カラー
const changeBoxColor = (newColor) => {

	//レギュラー1色
	class rColor_one {
		constructor(obj){
			const colorPlace = document.getElementsByClassName(obj.CP);
			for(let i = 0; i < colorPlace.length; i++){
				colorPlace[i].style.fill = newColor;
			}
		}
	}
	const CC1 = new rColor_one ({
		CP: 'bodyColor1'
	});
	const CC2 = new rColor_one ({
		CP: 'bodyColor2'
	});
	const CC3 = new rColor_one ({
		CP: 'bodyColor3'
	});
	const CC4 = new rColor_one ({
		CP: 'bodyColor4'
	});
	const CC5 = new rColor_one ({
		CP: 'bodyColor5'
	});
	const CC6 = new rColor_one ({
		CP: 'bodyColor6'
	});
	const CC7 = new rColor_one ({
		CP: 'bodyColor7'
	});
	const CC8 = new rColor_one ({
		CP: 'bodyColor8'
	});
	const CC9 = new rColor_one ({
		CP: 'bodyColor9'
	});
	const CC10 = new rColor_one ({
		CP: 'bodyColor10'
	});
	const CC11 = new rColor_one ({
		CP: 'bodyColor11'
	});
	const CC12 = new rColor_one ({
		CP: 'bodyColor12'
	});
	const CC13 = new rColor_one ({
		CP: 'bodyColor13'
	});
	const CC15_1 = new rColor_one ({
		CP: 'oyayubi_up'
	});
	const CC15_2 = new rColor_one ({
		CP: 'oyayubi_down'
	});
	const CC16 = new rColor_one ({
		CP: 'koyubi'
	});

	//ファーストバック1色
	imgF101.style.fill = newColor;
	imgF102.style.fill = newColor;
	imgF106.style.fill = newColor;
	imgF108.style.fill = newColor;
	imgF1010.style.fill = newColor;
	imgF1011_left.style.fill = newColor; //ベルト
	imgF1011_right.style.fill = newColor; //ベルト
	//捕球面カラー
	for(let i = 0; i < imgF1012.length; i++){
		imgF1012[i].style.fill = "newColor";
	}
	//WEBカラー
	for(let i = 0; i < imgF1013.length; i++){
		imgF1013[i].style.fill = "newColor";
	}
	//親指表
	imgFoyayubi.style.fill  = newColor;
	//親指裏
	for(let i = 0; i < imgRoya_up.length; i++){
		imgRoya_up[i].style.fill  = newColor;
	}
	for(let i = 0; i < imgRoya_down.length; i++){
		imgRoya_down[i].style.fill  = newColor;
	}
	//小指
	imgFkoyubi_f.style.fill = newColor;


	//valueの検索
	let baseModel= baseSelect.options[baseSelect.selectedIndex].value;	

		//2色以上(ファーストバック)
	if (kawaColor[17].checked) {
		fColor.style.display = "block";
		kawa101.disabled = false;
		kawa102.disabled = false;
		kawa106.disabled = false;
		kawa108.disabled = false;
		kawa1010.disabled = false;
		kawa1011.disabled = false;
		kawa1012.disabled = false;
		kawa1013.disabled = false;
		// kawa1014.disabled = false;
		kawa1015.disabled = false;
		kawa1016.disabled = false;
	
		//レギュラーの枠は非表示
		rColor.style.display = "none";
		//レギュラーの選択項目は無効
		rColorDisabled_True();
		//【画像】R画像の色　クリア
		rColorImg_Clear();
		//【画像】F画像の色　クリア
		fColorImg_Clear();
	
	}
	//2色以上(レギュラーバック（３が2と同じ））の場合
	else if (kawaColor[16].checked && (baseModel.match(/KSN-MP24/i) || baseModel.match(/KSN-YH46/i)|| baseModel.match(/KSN-AR3/i)|| baseModel.match(/KSN-T1/i) || baseModel.match(/KSN-6PSL/i) || baseModel.match(/KSN-H46/i) || baseModel.match(/KSN-L7S3/i) || baseModel.match(/KSN-24MU/i))){
			// color33が見える 「2と同じ」
			rColor.style.display = "block";	
			document.getElementById("color3").style.display = "none";
			document.getElementById("color33").style.display = "block";
			kawa1.disabled = false;
			kawa2.disabled = false;
			kawa3.disabled = true;
			kawa33.disabled = false;
			kawa4.disabled = false;
			kawa5.disabled = false;
			kawa6.disabled = false;
			kawa7.disabled = false;
			kawa8.disabled = false;
			kawa9.disabled = false;
			kawa10.disabled = false;
			kawa11.disabled = false;
			kawa12.disabled = false;
			kawa13.disabled = false;
			// kawa14.disabled = true;
			kawa15.disabled = false;
			kawa16.disabled = false;

			//ファーストバックの中身非表示
			fColor.style.display = "none";
			//ファーストバックの選択項目は無効
			fColorDisabled_True();
			//【画像】R画像の色　クリア
			rColorImg_Clear();
			//【画像】F画像の色　クリア
			fColorImg_Clear();
	}
	//2色以上(レギュラーバック（3が独立））の場合
	else if (kawaColor[16].checked && !(baseModel.match(/KSN-MP24/i) || baseModel.match(/KSN-YH46/i)|| baseModel.match(/KSN-AR3/i)|| baseModel.match(/KSN-T1/i) || baseModel.match(/KSN-6PSL/i) || baseModel.match(/KSN-H46/i) || baseModel.match(/KSN-L7S3/i) || baseModel.match(/KSN-24MU/i))){
			// color3が見える
			rColor.style.display = "block";
			document.getElementById("color3").style.display = "block";
			document.getElementById("color33").style.display = "none";
			kawa1.disabled = false;
			kawa2.disabled = false;
			kawa3.disabled = false;
			kawa33.disabled = true;
			kawa4.disabled = false;
			kawa5.disabled = false;
			kawa6.disabled = false;
			kawa7.disabled = false;
			kawa8.disabled = false;
			kawa9.disabled = false;
			kawa10.disabled = false;
			kawa11.disabled = false;
			kawa12.disabled = false;
			kawa13.disabled = false;
			// kawa14.disabled = true;
			kawa15.disabled = false;
			kawa16.disabled = false;
			//ファーストバックの中身非表示
			fColor.style.display = "none";
			//ファーストバックの選択項目は無効
			fColorDisabled_True();
			//【画像】R画像の色　クリア
			rColorImg_Clear();
			//【画像】F画像の色　クリア
			fColorImg_Clear();			

	}
	//1色に戻った場合
	else {
		rColor.style.display = "none";
		fColor.style.display = "none";
		//ファーストバックの選択項目は無効
		fColorDisabled_True();
		//レギュラーの選択項目は無効
		rColorDisabled_True();
		//R項目　「0」にする
		rColorSelect_Clear();
		//F項目　「0」にする
		fColorSelect_Clear();
	}


	//多色カラー（レギュラー）
	class ColorR{
		//初期化
		constructor(obj){		
			const kawaId = document.getElementById(obj.colorId);
			const imgRR = document.getElementsByClassName(obj.imgPlace);

			//3の非表示確認
			const DS33 = document.getElementById(obj.display33);
			//どのセレクトボックスか判定用
			const kawaId2 = document.getElementById(obj.colorId2);
			const imgRR2 = document.getElementsByClassName(obj.imgPlace2);

			kawaId.addEventListener("change",() =>{
				if( DS33.style.display ==="block" &&  kawaId2 == LC2List2){
					for(let i = 0; i < imgR2.length; i++){
						kawaId.value === "Fオレンジ" ? imgR2[i].style.fill = "#f13421":
						kawaId.value == "ピンク" ? imgR2[i].style.fill = "#e3274a":
						kawaId.value == "ブラック" ? imgR2[i].style.fill = "#000000":
						kawaId.value === "レッド" ? imgR2[i].style.fill = "#DA0000":
						kawaId.value === "ブルー" ? imgR2[i].style.fill = "#174ca8": 
						kawaId.value === "Gイエロー" ? imgR2[i].style.fill = "#ddad0d": 
						kawaId.value === "KSブラック" ? imgR2[i].style.fill = "#292327": 
						kawaId.value === "タン" ? 	imgR2[i].style.fill = "#de7e1a": 
						kawaId.value === "KSオレンジ" ? imgR2[i].style.fill = "#c94908": 
						kawaId.value === "ウッド" ? imgR2[i].style.fill = "#8b1f1c": 
						kawaId.value === "トレンチ" ? imgR2[i].style.fill = "#e5c48e": 
						kawaId.value === "Dグレー" ? 	imgR2[i].style.fill = "#817076": 
						kawaId.value === "ホワイト" ? imgR2[i].style.fill = "#e7e6eb": 
						kawaId.value === "グリーン" ? imgR2[i].style.fill = "#0e4a2e": 
						kawaId.value === "水色" ? imgR2[i].style.fill = "#419cb1": 
						imgR2[i].style.fill = "#6c2735";  //バーガンディ
						}
					for(let i = 0; i < imgR33.length; i++){
						kawaId.value === "Fオレンジ" ? imgR33[i].style.fill = "#f13421":
						kawaId.value == "ピンク" ? imgR33[i].style.fill = "#e3274a":
						kawaId.value == "ブラック" ? imgR33[i].style.fill = "#000000":
						kawaId.value === "レッド" ? imgR33[i].style.fill = "#DA0000":
						kawaId.value === "ブルー" ? imgR33[i].style.fill = "#174ca8": 
						kawaId.value === "Gイエロー" ? imgR33[i].style.fill = "#ddad0d": 
						kawaId.value === "KSブラック" ? imgR33[i].style.fill = "#292327": 
						kawaId.value === "タン" ? 	imgR33[i].style.fill = "#de7e1a": 
						kawaId.value === "KSオレンジ" ? imgR33[i].style.fill = "#c94908": 
						kawaId.value === "ウッド" ? imgR33[i].style.fill = "#8b1f1c": 
						kawaId.value === "トレンチ" ? imgR33[i].style.fill = "#e5c48e": 
						kawaId.value === "Dグレー" ? 	imgR33[i].style.fill = "#817076": 
						kawaId.value === "ホワイト" ? imgR33[i].style.fill = "#e7e6eb": 
						kawaId.value === "グリーン" ? imgR33[i].style.fill = "#0e4a2e": 
						kawaId.value === "水色" ? imgR33[i].style.fill = "#419cb1": 
						imgR33[i].style.fill = "#6c2735";  //バーガンディ
						}
						// console.log("2と同じ");				
				}else if(kawaId2 === LC2List15){
					for(let i = 0; i < imgRR.length; i++){
						kawaId.value === "Fオレンジ" ? imgRR[i].style.fill = "#f13421":
						kawaId.value == "ピンク" ? imgRR[i].style.fill = "#e3274a":
						kawaId.value == "ブラック" ? imgRR[i].style.fill = "#000000":
						kawaId.value === "レッド" ? imgRR[i].style.fill = "#DA0000":
						kawaId.value === "ブルー" ? imgRR[i].style.fill = "#174ca8": 
						kawaId.value === "Gイエロー" ? imgRR[i].style.fill = "#ddad0d": 
						kawaId.value === "KSブラック" ? imgRR[i].style.fill = "#292327": 
						kawaId.value === "タン" ? 	imgRR[i].style.fill = "#de7e1a": 
						kawaId.value === "KSオレンジ" ? imgRR[i].style.fill = "#c94908": 
						kawaId.value === "ウッド" ? imgRR[i].style.fill = "#8b1f1c": 
						kawaId.value === "トレンチ" ? imgRR[i].style.fill = "#e5c48e": 
						kawaId.value === "Dグレー" ? 	imgRR[i].style.fill = "#817076": 
						kawaId.value === "ホワイト" ? imgRR[i].style.fill = "#e7e6eb": 
						kawaId.value === "グリーン" ? imgRR[i].style.fill = "#0e4a2e": 
						kawaId.value === "水色" ? imgRR[i].style.fill = "#419cb1": 
						imgRR[i].style.fill = "#6c2735";  //バーガンディ
						}
					for(let i = 0; i < imgRR2.length; i++){
						kawaId.value === "Fオレンジ" ? imgRR2[i].style.fill = "#f13421":
						kawaId.value == "ピンク" ? imgRR2[i].style.fill = "#e3274a":
						kawaId.value == "ブラック" ? imgRR2[i].style.fill = "#000000":
						kawaId.value === "レッド" ? imgRR2[i].style.fill = "#DA0000":
						kawaId.value === "ブルー" ? imgRR2[i].style.fill = "#174ca8": 
						kawaId.value === "Gイエロー" ? imgRR2[i].style.fill = "#ddad0d": 
						kawaId.value === "KSブラック" ? imgRR2[i].style.fill = "#292327": 
						kawaId.value === "タン" ? 	imgRR2[i].style.fill = "#de7e1a": 
						kawaId.value === "KSオレンジ" ? imgRR2[i].style.fill = "#c94908": 
						kawaId.value === "ウッド" ? imgRR2[i].style.fill = "#8b1f1c": 
						kawaId.value === "トレンチ" ? imgRR2[i].style.fill = "#e5c48e": 
						kawaId.value === "Dグレー" ? 	imgRR2[i].style.fill = "#817076": 
						kawaId.value === "ホワイト" ? imgRR2[i].style.fill = "#e7e6eb": 
						kawaId.value === "グリーン" ? imgRR2[i].style.fill = "#0e4a2e": 
						kawaId.value === "水色" ? imgRR2[i].style.fill = "#419cb1": 
						imgRR2[i].style.fill = "#6c2735";  //バーガンディ
						}
						//console.log("親指2か所");
				}else{
					for(let i = 0; i < imgRR.length; i++){
					kawaId.value === "Fオレンジ" ? imgRR[i].style.fill = "#f13421":
					kawaId.value === "Fオレンジ" ? imgRR[i].style.fill = "#f13421":
					kawaId.value == "ピンク" ? imgRR[i].style.fill = "#e3274a":
					kawaId.value == "ブラック" ? imgRR[i].style.fill = "#000000":
					kawaId.value === "レッド" ? imgRR[i].style.fill = "#DA0000":
					kawaId.value === "ブルー" ? imgRR[i].style.fill = "#174ca8": 
					kawaId.value === "Gイエロー" ? imgRR[i].style.fill = "#ddad0d": 
					kawaId.value === "KSブラック" ? imgRR[i].style.fill = "#292327": 
					kawaId.value === "タン" ? 	imgRR[i].style.fill = "#de7e1a": 
					kawaId.value === "KSオレンジ" ? imgRR[i].style.fill = "#c94908": 
					kawaId.value === "ウッド" ? imgRR[i].style.fill = "#8b1f1c": 
					kawaId.value === "トレンチ" ? imgRR[i].style.fill = "#e5c48e": 
					kawaId.value === "Dグレー" ? 	imgRR[i].style.fill = "#817076": 
					kawaId.value === "ホワイト" ? imgRR[i].style.fill = "#e7e6eb": 
					kawaId.value === "グリーン" ? imgRR[i].style.fill = "#0e4a2e": 
					kawaId.value === "水色" ? imgRR[i].style.fill = "#419cb1": 
					imgRR[i].style.fill = "#6c2735";  //バーガンディ
					// console.log("2と3は別");
					}
				}
			});
		}
	}
	//「kawa1」
	const color1 = new ColorR ({
		colorId: 'LC2List1',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor1'
	});
	//「kawa2」 2と同じか判定
	const color2 = new ColorR ({
		colorId: 'LC2List2',
		display33: 'color33', //表示・非表示判定　＝＞表示
		colorId2: 'LC2List2', // どのセレクトボックスか判定用
		imgPlace: 'bodyColor2'
	});
	//「kawa3」 
	const color3 = new ColorR ({
		colorId: 'LC2List3',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor3'
	});
	//「kawa4」
	const color4 = new ColorR ({
		colorId: 'LC2List4',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor4'
	});
	//「kawa5」
	const color5 = new ColorR ({
		colorId: 'LC2List5',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor5'
	});
	//「kawa6」
	const color6 = new ColorR ({
		colorId: 'LC2List6',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor6'
	});
	//「kawa7」
	const color7 = new ColorR ({
		colorId: 'LC2List7',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor7'
	});
	//「kawa8」
	const color8 = new ColorR ({
		colorId: 'LC2List8',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor8'
	});
	//「kawa9」
	const color9 = new ColorR ({
		colorId: 'LC2List9',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor9'
	});
	//「kawa10」
	const color10 = new ColorR ({
		colorId: 'LC2List10',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor10'
	});
	//「kawa11」
	const color11 = new ColorR ({
		colorId: 'LC2List11',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor11'
	});
	//「kawa12」
	const color12 = new ColorR ({
		colorId: 'LC2List12',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor12'
	});
	//「kawa13」
	const color13 = new ColorR ({
		colorId: 'LC2List13',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'bodyColor13'
	});
	//「親指かけ」2か所
	const color15 = new ColorR ({
		colorId: 'LC2List15',
		display33: 'color33', //表示・非表示判定
		colorId2: 'LC2List15', // どのセレクトボックスか判定用
		imgPlace: 'oyayubi_up',
		imgPlace2: 'oyayubi_down'
	});
	//「小指かけ」
	const color16 = new ColorR ({
		colorId: 'LC2List16',
		display33: 'color33', //表示・非表示判定
		imgPlace: 'koyubi'
	});


	//多色カラー(ファーストバック)
	class ColorF{
		//初期化
		constructor(obj){
			const kawaIdF = document.getElementById(obj.colorId);
			const imgFF = document.getElementById(obj.imgPlace);
			//どのセレクトボックスか判定用
			const kawaIdF2 = document.getElementById(obj.colorId2);
			const imgFF2 = document.getElementsByClassName(obj.imgPlace2);
			//ベルト2か所目に色を付ける用
			const imgFF3 = document.getElementById(obj.imgPlace3);		
			//裏　親指かけ　上2か所目と下3か所目に色を付ける
			const imgFF4 = document.getElementsByClassName(obj.imgPlace4);
			const imgFF5 = document.getElementsByClassName(obj.imgPlace5);
    
			kawaIdF.addEventListener("change", () =>{
				if( kawaIdF2 == LC2List1012 || kawaIdF2 == LC2List1013 ){
					//name 
					for(let i = 0; i < imgFF2.length; i++){
						kawaIdF.value === "Fオレンジ" ? imgFF2[i].style.fill = "#f13421":
						kawaIdF.value === "ピンク" ? imgFF2[i].style.fill = "#e3274a":
						kawaIdF.value === "ブラック" ? imgFF2[i].style.fill = "#000000":
						kawaIdF.value === "レッド" ? imgFF2[i].style.fill = "#DA0000":
						kawaIdF.value === "ブルー" ? imgFF2[i].style.fill = "#174ca8": 
						kawaIdF.value === "Gイエロー" ? imgFF2[i].style.fill = "#ddad0d": 
						kawaIdF.value === "KSブラック" ? imgFF2[i].style.fill = "#292327": 
						kawaIdF.value === "タン" ? 	imgFF2[i].style.fill = "#de7e1a": 
						kawaIdF.value === "KSオレンジ" ? imgFF2[i].style.fill = "#c94908": 
						kawaIdF.value === "ウッド" ? imgFF2[i].style.fill = "#8b1f1c": 
						kawaIdF.value === "トレンチ" ? imgFF2[i].style.fill = "#e5c48e": 
						kawaIdF.value === "Dグレー" ? 	imgFF2[i].style.fill = "#817076": 
						kawaIdF.value === "ホワイト" ? imgFF2[i].style.fill = "#e7e6eb": 
						kawaIdF.value === "グリーン" ? imgFF2[i].style.fill = "#0e4a2e": 
						kawaIdF.value === "水色" ? imgFF2[i].style.fill = "#419cb1": 
						imgFF2[i].style.fill = "#6c2735";  //バーガンディ
					}
				}else if( kawaIdF2 == LC2List1011 ){
					//ベルト2か所
					if(	kawaIdF.value === "Fオレンジ" ){
						imgFF.style.fill = "#f13421";
						imgFF3.style.fill = "#f13421";
						console.log("11");
					}else if ( kawaIdF.value == "ピンク"){
						imgFF.style.fill = "#e3274a";
						imgFF3.style.fill = "#e3274a";
					}else if ( kawaIdF.value == "ブラック"){
						imgFF.style.fill = "#000000";
						imgFF3.style.fill = "#000000";
					}else if ( kawaIdF.value == "レッド"){
						imgFF.style.fill = "#DA0000";
						imgFF3.style.fill = "#DA0000";
					}else if ( kawaIdF.value == "ブルー"){
						imgFF.style.fill = "#174ca8";
						imgFF3.style.fill = "#174ca8";
					}else if ( kawaIdF.value == "Gイエロー"){
						imgFF.style.fill = "#ddad0d";
						imgFF3.style.fill = "#ddad0d";
					}else if ( kawaIdF.value == "KSブラック"){
						imgFF.style.fill = "#292327";
						imgFF3.style.fill = "#292327";
					}else if ( kawaIdF.value == "タン"){
						imgFF.style.fill = "#de7e1a";
						imgFF3.style.fill = "#de7e1a";
					}else if ( kawaIdF.value == "KSオレンジ"){
						imgFF.style.fill = "#c94908";
						imgFF3.style.fill = "#c94908";
					}else if ( kawaIdF.value == "ウッド"){
						imgFF.style.fill = "#8b1f1c";
						imgFF3.style.fill = "#8b1f1c";
					}else if ( kawaIdF.value == "トレンチ"){
						imgFF.style.fill = "#e5c48e";
						imgFF3.style.fill = "#e5c48e";
					}else if ( kawaIdF.value == "Dグレー"){
						imgFF.style.fill = "#817076";
						imgFF3.style.fill = "#817076";
					}else if ( kawaIdF.value == "ホワイト"){
						imgFF.style.fill = "#e7e6eb";
						imgFF3.style.fill = "#e7e6eb";
					}else if ( kawaIdF.value == "グリーン"){
						imgFF.style.fill = "#0e4a2e";
						imgFF3.style.fill = "#0e4a2e";
					}else if ( kawaIdF.value == "水色"){
						imgFF.style.fill = "#419cb1";
						imgFF3.style.fill = "#419cb1";
					}else{
						//バーガンディ
						imgFF.style.fill = "#6c2735";
						imgFF3.style.fill = "#6c2735";
					}
				}else if( kawaIdF2 == LC2List1015 ){
					//表　親指
					kawaIdF.value === "Fオレンジ" ? imgFF.style.fill = "#f13421":
					kawaIdF.value == "ピンク" ? imgFF.style.fill = "#e3274a":
					kawaIdF.value == "ブラック" ? imgFF.style.fill = "#000000":
					kawaIdF.value === "レッド" ? imgFF.style.fill = "#DA0000":
					kawaIdF.value === "ブルー" ? imgFF.style.fill = "#174ca8": 
					kawaIdF.value === "Gイエロー" ? imgFF.style.fill = "#ddad0d": 
					kawaIdF.value === "KSブラック" ? imgFF.style.fill = "#292327": 
					kawaIdF.value === "タン" ? 	imgFF.style.fill = "#de7e1a": 
					kawaIdF.value === "KSオレンジ" ? imgFF.style.fill = "#c94908": 
					kawaIdF.value === "ウッド" ? imgFF.style.fill = "#8b1f1c": 
					kawaIdF.value === "トレンチ" ? imgFF.style.fill = "#e5c48e": 
					kawaIdF.value === "Dグレー" ? 	imgFF.style.fill = "#817076": 
					kawaIdF.value === "ホワイト" ? imgFF.style.fill = "#e7e6eb": 
					kawaIdF.value === "グリーン" ? imgFF.style.fill = "#0e4a2e": 
					kawaIdF.value === "水色" ? imgFF.style.fill = "#419cb1": 
					imgFF.style.fill = "#6c2735";  //バーガンディ
					//裏　親指　上
					for(let i = 0; i < imgFF4.length; i++){
						kawaIdF.value === "Fオレンジ" ? imgFF4[i].style.fill = "#f13421":
						kawaIdF.value === "ピンク" ? imgFF4[i].style.fill = "#e3274a":
						kawaIdF.value === "ブラック" ? imgFF4[i].style.fill = "#000000":
						kawaIdF.value === "レッド" ? imgFF4[i].style.fill = "#DA0000":
						kawaIdF.value === "ブルー" ? imgFF4[i].style.fill = "#174ca8": 
						kawaIdF.value === "Gイエロー" ? imgFF4[i].style.fill = "#ddad0d": 
						kawaIdF.value === "KSブラック" ? imgFF4[i].style.fill = "#292327": 
						kawaIdF.value === "タン" ? 	imgFF4[i].style.fill = "#de7e1a": 
						kawaIdF.value === "KSオレンジ" ? imgFF4[i].style.fill = "#c94908": 
						kawaIdF.value === "ウッド" ? imgFF4[i].style.fill = "#8b1f1c": 
						kawaIdF.value === "トレンチ" ? imgFF4[i].style.fill = "#e5c48e": 
						kawaIdF.value === "Dグレー" ? 	imgFF4[i].style.fill = "#817076": 
						kawaIdF.value === "ホワイト" ? imgFF4[i].style.fill = "#e7e6eb": 
						kawaIdF.value === "グリーン" ? imgFF4[i].style.fill = "#0e4a2e": 
						kawaIdF.value === "水色" ? imgFF4[i].style.fill = "#419cb1": 
						imgFF4[i].style.fill = "#6c2735";  //バーガンディ
					}
					//裏　親指　下
					for(let i = 0; i < imgFF5.length; i++){
						kawaIdF.value === "Fオレンジ" ? imgFF5[i].style.fill = "#f13421":
						kawaIdF.value === "ピンク" ? imgFF5[i].style.fill = "#e3274a":
						kawaIdF.value === "ブラック" ? imgFF5[i].style.fill = "#000000":
						kawaIdF.value === "レッド" ? imgFF5[i].style.fill = "#DA0000":
						kawaIdF.value === "ブルー" ? imgFF5[i].style.fill = "#174ca8": 
						kawaIdF.value === "Gイエロー" ? imgFF5[i].style.fill = "#ddad0d": 
						kawaIdF.value === "KSブラック" ? imgFF5[i].style.fill = "#292327": 
						kawaIdF.value === "タン" ? 	imgFF5[i].style.fill = "#de7e1a": 
						kawaIdF.value === "KSオレンジ" ? imgFF5[i].style.fill = "#c94908": 
						kawaIdF.value === "ウッド" ? imgFF5[i].style.fill = "#8b1f1c": 
						kawaIdF.value === "トレンチ" ? imgFF5[i].style.fill = "#e5c48e": 
						kawaIdF.value === "Dグレー" ? 	imgFF5[i].style.fill = "#817076": 
						kawaIdF.value === "ホワイト" ? imgFF5[i].style.fill = "#e7e6eb": 
						kawaIdF.value === "グリーン" ? imgFF5[i].style.fill = "#0e4a2e": 
						kawaIdF.value === "水色" ? imgFF5[i].style.fill = "#419cb1": 
						imgFF5[i].style.fill = "#6c2735";  //バーガンディ
					}


				}else{
					kawaIdF.value === "Fオレンジ" ? imgFF.style.fill = "#f13421":
					kawaIdF.value == "ピンク" ? imgFF.style.fill = "#e3274a":
					kawaIdF.value == "ブラック" ? imgFF.style.fill = "#000000":
					kawaIdF.value === "レッド" ? imgFF.style.fill = "#DA0000":
					kawaIdF.value === "ブルー" ? imgFF.style.fill = "#174ca8": 
					kawaIdF.value === "Gイエロー" ? imgFF.style.fill = "#ddad0d": 
					kawaIdF.value === "KSブラック" ? imgFF.style.fill = "#292327": 
					kawaIdF.value === "タン" ? 	imgFF.style.fill = "#de7e1a": 
					kawaIdF.value === "KSオレンジ" ? imgFF.style.fill = "#c94908": 
					kawaIdF.value === "ウッド" ? imgFF.style.fill = "#8b1f1c": 
					kawaIdF.value === "トレンチ" ? imgFF.style.fill = "#e5c48e": 
					kawaIdF.value === "Dグレー" ? 	imgFF.style.fill = "#817076": 
					kawaIdF.value === "ホワイト" ? imgFF.style.fill = "#e7e6eb": 
					kawaIdF.value === "グリーン" ? imgFF.style.fill = "#0e4a2e": 
					kawaIdF.value === "水色" ? imgFF.style.fill = "#419cb1": 
					imgFF.style.fill = "#6c2735";  //バーガンディ
					// console.log("ファーストオレンジ");
				}
			});
		}
	}
	const colorF1 = new ColorF ({
		colorId: 'LC2List101',
		imgPlace: 'bodyColor101'
	});
	const colorF2 = new ColorF ({
		colorId: 'LC2List102',
		imgPlace: 'bodyColor102'
	});
	const colorF6 = new ColorF ({
		colorId: 'LC2List106',
		imgPlace: 'bodyColor106'
	});
	const colorF8 = new ColorF ({
		colorId: 'LC2List108',
		imgPlace: 'bodyColor108'
	});
	const colorF10 = new ColorF ({
		colorId: 'LC2List1010',
		imgPlace: 'bodyColor1010'
	});
	//ベルト　1つ変更で2か所色を付ける
	const colorF11_1 = new ColorF ({
		colorId: 'LC2List1011',
		colorId2: 'LC2List1011',//判定用
		imgPlace: 'bodyColor1011_left',
		imgPlace3: 'bodyColor1011_right'
	});
	//classname
	const colorF12 = new ColorF ({
		colorId: 'LC2List1012',
		colorId2: 'LC2List1012',//判定用
		imgPlace2: 'bodyColor1012'
	});
	//classname
	const colorF13 = new ColorF ({
		colorId: 'LC2List1013',
		colorId2: 'LC2List1013',　//判定用
		imgPlace2: 'bodyColor1013'
	});
	//親指　1つ変更で3か所色を付ける
	const colorF15 = new ColorF ({
		colorId: 'LC2List1015',
		colorId2: 'LC2List1015',　//判定用
		imgPlace: 'oyayubi_f',
		imgPlace4: 'oyayubi_up',
		imgPlace5: 'oyayubi_down'
	});
	//小指
	const colorF16 = new ColorF ({
		colorId: 'LC2List1016',
		imgPlace: 'koyubi_f'
	});
}
// 6-1【カラー】皮ひも画像カラー設定// // // // // // // // // // // // //
himoColor.addEventListener("change", () => { 
	let himo = document.getElementsByClassName("himo");
	for(let i = 0; i < himo.length; i++) {
		himoColor.value === "Fオレンジ" ?	himo[i].style.fill = "#f13421":
		himoColor.value === "オレンジ" ?	himo[i].style.fill = "#ff5722":
		himoColor.value === "ブラック" ? himo[i].style.fill = "#000000":
		himoColor.value === "レッド" ? himo[i].style.fill = "#DA0000":
		himoColor.value === "ブルー" ? himo[i].style.fill = "#174ca8":
		himoColor.value === "ホワイト" ? himo[i].style.fill = "#e7e6eb":
		himoColor.value === "Gイエロー" ? himo[i].style.fill = "#ddad0d":
		himoColor.value === "KSブラック" ? himo[i].style.fill = "#292327":
		himoColor.value === "タン" ? himo[i].style.fill = "#de7e1a":
		himoColor.value === "Dグレー" ? himo[i].style.fill = "#817076":
		himoColor.value === "トレンチ" ? himo[i].style.fill = "#e5c48e":
		himoColor.value === "ウッド" ? himo[i].style.fill = "#8b1f1c":
		himoColor.value === "水色" ? himo[i].style.fill = "#419cb1":
		himoColor.value === "ピンク" ? himo[i].style.fill = "#e3274a":
		himoColor.value === "グリーン" ? himo[i].style.fill = "#0e4a2e":
		himo[i].style.fill = "#6c2735";  //バーガンディ
		}
});
// 6-2【カラー】ハミダシカラー画像カラー設定// // // // // // // // // //
hamiColor.addEventListener("change", () => { 
	let hami = document.getElementsByClassName("hami");
	for(let i = 0; i < hami.length; i++) {
		hamiColor.value == "玉ハミFオレンジ" ? hami[i].style.fill = "#e55743":
		hamiColor.value == "玉ハミピンク" ? hami[i].style.fill = "#df465a":
		hamiColor.value == "玉ハミ黒" ? hami[i].style.fill = "#2c3438":
		hamiColor.value == "玉ハミ赤" ? hami[i].style.fill = "#c83943":
		hamiColor.value == "玉ハミブルー" ? hami[i].style.fill = "#006da9":
		hamiColor.value == "玉ハミGイエロー" ?hami[i].style.fill = "#e0ad4c":
		hamiColor.value == "玉ハミKSブラック" ?hami[i].style.fill = "#2d3f4f":
		hamiColor.value == "玉ハミタン" ? hami[i].style.fill = "#dd9845":
		hamiColor.value == "玉ハミオレンジ" ? hami[i].style.fill = "#e17039":
		hamiColor.value == "玉ハミウッド" ? hami[i].style.fill = "#a14b3f":
		hamiColor.value == "玉ハミトレンチ" ? hami[i].style.fill = "#e3bc8a":
		hamiColor.value == "玉ハミDグレー" ? hami[i].style.fill = "#818992":
		hamiColor.value == "玉ハミ白" ? hami[i].style.fill = "#e2e7eb":
		hamiColor.value == "玉ハミグリーン" ? hami[i].style.fill = "#00725e":
		hamiColor.value == "玉ハミ水色" ? hami[i].style.fill = "#00a4d6":
		hamiColor.value == "玉ハミゴールド" ? hami[i].style.fill = "#c2be61":
		hamiColor.value == "玉ハミシルバー" ? hami[i].style.fill = "#c9caca":
		hamiColor.value == "玉ハミバーガンディ" ? hami[i].style.fill = "#6c2735":
		hami[i].style.fill = "#FFFFFB"; //"切ハミ白"  
		}
});
// 6-3【カラー】ヘリ皮カラー画像カラー設定 // // // // // // // // // // // 
heriColor.addEventListener("change", () => { 
	let heri = document.getElementsByClassName("heri");
	for(let i = 0; i < heri.length; i++) {
		heriColor.value == "Fオレンジ"  ? heri[i].style.fill = "#e55743":
		heriColor.value == "ピンク" ? heri[i].style.fill = "#df465a":
		heriColor.value == "黒" ? heri[i].style.fill = "#2c3438":
		heriColor.value == "赤" ? heri[i].style.fill = "#c83943":
		heriColor.value == "ブルー" ? heri[i].style.fill = "#006da9":
		heriColor.value == "Gイエロー" ? heri[i].style.fill = "#e0ad4c":
		heriColor.value == "KSブラック" ? heri[i].style.fill = "#2d3f4f":
		heriColor.value == "タン" ? heri[i].style.fill = "#dd9845":
		heriColor.value == "オレンジ" ? heri[i].style.fill = "#e17039":
		heriColor.value == "ウッド" ? heri[i].style.fill = "#a14b3f":
		heriColor.value == "トレンチ" ? heri[i].style.fill = "#e3bc8a":
		heriColor.value == "Dグレー" ? heri[i].style.fill = "#818992":
		heriColor.value == "白" ? heri[i].style.fill = "#e2e7eb":
		heriColor.value == "グリーン" ? heri[i].style.fill = "#00725e":
		heriColor.value == "水色" ? heri[i].style.fill = "#00a4d6":
		heriColor.value == "ゴールド" ? heri[i].style.fill = "#c2be61":
		heriColor.value == "シルバー" ? heri[i].style.fill = "#c9caca":
		heri[i].style.fill = "#6c2735";  // "バーガンディ" 
	}
});
// 6-4【カラー】ステッチカラー*1の画像カラー設定 // // // // // // // // // // 
stitchColor.addEventListener("change", () => { 
	let sti = document.getElementsByClassName("stitch");
	for(let i = 0; i < sti.length; i++) {
		stitchColor.value == "白"  ? sti[i].style.fill = "#e2e7eb":
		stitchColor.value == "黒" ? sti[i].style.fill = "#2c3438":
		stitchColor.value == "ネイビー" ? sti[i].style.fill = "#1e1e3c":
		stitchColor.value == "ブルー" ? sti[i].style.fill = "#006da9":
		stitchColor.value == "レッド" ? sti[i].style.fill = "#c83943":
		stitchColor.value == "グリーン" ? sti[i].style.fill = "#80b893":
		stitchColor.value == "濃グリーン" ? sti[i].style.fill = "#19562d":
		stitchColor.value == "水色" ? sti[i].style.fill = "#72daf4":
		stitchColor.value == "ピンク" ? sti[i].style.fill = "#c692c0":
		stitchColor.value == "オレンジ" ? sti[i].style.fill = "#f48a50":
		stitchColor.value == "Fオレンジ" ? sti[i].style.fill = "#ce500b":
		stitchColor.value == "グレー" ? sti[i].style.fill = "#cfcfcf":
		stitchColor.value == "金茶" ? sti[i].style.fill = "#d6b366":
		stitchColor.value == "ウッド" ? sti[i].style.fill = "#694e15":
		stitchColor.value == "イエロー" ? sti[i].style.fill = "#e3c125":
		sti[i].style.fill = "#372ba6";  //"パープル" ?
		}
});
// 6-5【カラー】裏皮カラー*1の画像カラー設定// // // // // // // // // // //
urakawaColor.addEventListener("change", () => { 
	let ura = document.getElementsByClassName("urakawa");
		for(let i = 0; i < ura.length; i++) {
		urakawaColor.value == "共皮　Fオレンジ"  ? ura[i].style.fill = "#f13421":
		urakawaColor.value == "共皮　ピンク" ? ura[i].style.fill = "#e3274a":
		urakawaColor.value == "共皮　ブラック" ? ura[i].style.fill = "#000000":
		urakawaColor.value == "共皮　レッド" ? ura[i].style.fill = "#DA0000":
		urakawaColor.value == "共皮　ブルー" ? ura[i].style.fill = "#174ca8":
		urakawaColor.value == "共皮　Gイエロー" ? ura[i].style.fill = "#ddad0d":
		urakawaColor.value == "共皮　KSブラック" ? ura[i].style.fill = "#292327":
		urakawaColor.value == "共皮　タン" ? ura[i].style.fill = "#de7e1a":
		urakawaColor.value == "共皮　KSオレンジ" ? ura[i].style.fill = "#c94908":
		urakawaColor.value == "共皮　ウッド" ? ura[i].style.fill = "#8b1f1c":
		urakawaColor.value == "共皮　トレンチ" ? ura[i].style.fill = "#e5c48e":
		urakawaColor.value == "共皮　Dグレー" ? ura[i].style.fill = "#817076":
		urakawaColor.value == "共皮　ホワイト" ? ura[i].style.fill = "#e7e6eb":
		urakawaColor.value == "共皮　グリーン" ? ura[i].style.fill = "#0e4a2e":
		urakawaColor.value == "共皮　水色" ? ura[i].style.fill = "#419cb1":
		ura[i].style.fill = "#6c2735";  //共皮　バーガンディ"  
		}
});
// 7【画像】【カラー】選択した「ラベル」の表示とカラー設定 // // // // // // // 
labelChange.addEventListener("change", () => {

	let label_R = labelChange.value;

	//バリューを全角で分割させる
	let type = baseSelect.value.split('\u3000');

  //Hラベルの色
	let hlabel_back = document.getElementsByClassName("hlabel_back");
	let hlabel_hon = document.getElementsByClassName("hlabel_hon");
	let hlabel_logo = document.getElementsByClassName("hlabel_logo");
	//KラベルGラベルの色
	let klabel_huti = document.getElementsByClassName("klabel_huti");
	let klabel_logo = document.getElementsByClassName("klabel_logo");
	//Lラベルの色
	let Llabel_huti = document.getElementsByClassName("Llabel_huti");
	let Llabel_logo = document.getElementsByClassName("Llabel_logo");
	let Llabel_sen = document.getElementsByClassName("Llabel_sen");
	let Llabel_back = document.getElementsByClassName("Llabel_back");
	//Mラベルの色
	let Mlabel_logo = document.getElementsByClassName("Mlabel_logo");
	let Mlabel_sublogo = document.getElementsByClassName("Mlabel_sublogo");
	let Mlabel_back = document.getElementsByClassName("Mlabel_back");
	let Mlabel_back2 = document.getElementsByClassName("Mlabel_back2");
	let Mlabel_huti2 = document.getElementsByClassName("Mlabel_huti2");
	//ABCラベルの色
	let Alabel_logo = document.getElementsByClassName("Alabel_logo");
	let Alabel_back = document.getElementsByClassName("Alabel_back");
	let Alabel_hon = document.getElementsByClassName("Alabel_hon");
	let Alabel_honhuti = document.getElementsByClassName("Alabel_honhuti");

	//Hラベルの色
	if(label_R == "H1　レッド×ゴールドラメ"){		
		for(let i = 0; i < hlabel_back.length; i++){
			hlabel_back[i].style.fill = "#b6281c";
		}
		for(let h = 0; h < hlabel_hon.length; h++){
			hlabel_hon[h].style.fill = "#c5a865"; //ゴールド
		}
		for(let l = 0; l < hlabel_logo.length; l++){
			hlabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}				
		 console.log("H1です");
	} else if (label_R == "H2　ブルー×ゴールドラメ"){	
		for(let i = 0; i < hlabel_back.length; i++){
			hlabel_back[i].style.fill = "#272c6e";
		}
		for(let h = 0; h < hlabel_hon.length; h++){
			hlabel_hon[h].style.fill = "#c5a865"; //ゴールド
		}
		for(let l = 0; l < hlabel_logo.length; l++){
			hlabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}		
	} else if (label_R == "H3　水色×ゴールドラメ"){
		for(let i = 0; i < hlabel_back.length; i++){
			hlabel_back[i].style.fill = "#03a9f4";
		}
		for(let h = 0; h < hlabel_hon.length; h++){
			hlabel_hon[h].style.fill = "#c5a865"; //ゴールド
		}
		for(let l = 0; l < hlabel_logo.length; l++){
			hlabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}	
	} else if (label_R == "H4　ネイビー×ゴールドラメ"){
		for(let i = 0; i < hlabel_back.length; i++){
			hlabel_back[i].style.fill = "#252566";
		}
		for(let h = 0; h < hlabel_hon.length; h++){
			hlabel_hon[h].style.fill = "#c5a865"; //ゴールド
		}
		for(let l = 0; l < hlabel_logo.length; l++){
			hlabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}	
	} else if (label_R == "H5　ブラック×ゴールドラメ"){
		for(let i = 0; i < hlabel_back.length; i++){
			hlabel_back[i].style.fill = "#333333";
		}
		for(let h = 0; h < hlabel_hon.length; h++){
			hlabel_hon[h].style.fill = "#c5a865"; //ゴールド
		}
		for(let l = 0; l < hlabel_logo.length; l++){
			hlabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}	
	} else if (label_R == "H6　濃ピンク×ゴールドラメ"){
		for(let i = 0; i < hlabel_back.length; i++){
			hlabel_back[i].style.fill = "#ff69b4";
		}
		for(let h = 0; h < hlabel_hon.length; h++){
			hlabel_hon[h].style.fill = "#c5a865"; //ゴールド
		}
		for(let l = 0; l < hlabel_logo.length; l++){
			hlabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}	
	} else if (label_R == "H7　濃グリーン×ゴールドラメ"){
		for(let i = 0; i < hlabel_back.length; i++){
			hlabel_back[i].style.fill = "#2f4f4f";
		}
		for(let h = 0; h < hlabel_hon.length; h++){
			hlabel_hon[h].style.fill = "#c5a865"; //ゴールド
		}
		for(let l = 0; l < hlabel_logo.length; l++){
			hlabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}	
	} else if (label_R == "H8　パープル×ゴールドラメ"){
		for(let i = 0; i < hlabel_back.length; i++){
			hlabel_back[i].style.fill = "#800080";
		}
		for(let h = 0; h < hlabel_hon.length; h++){
			hlabel_hon[h].style.fill = "#c5a865"; //ゴールド
		}
		for(let l = 0; l < hlabel_logo.length; l++){
			hlabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}	
	} else if (label_R == "H9　ホワイト×ゴールドラメ"){
		for(let i = 0; i < hlabel_back.length; i++){
			hlabel_back[i].style.fill = "#e2e7eb";
		}
		for(let h = 0; h < hlabel_hon.length; h++){
			hlabel_hon[h].style.fill = "#c5a865"; //ゴールド
		}
		for(let l = 0; l < hlabel_logo.length; l++){
			hlabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}	
	} 
	//KラベルGラベルの色
	else if (label_R == "K7　ネイビー×ゴールドラメ"){
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#c5a865"; //ゴールド
		}
	} else if(label_R == "K9　ブラック×ゴールドラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#2c3438"; //ブラック
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#c5a865"; //ゴールド
		}
	} else if(label_R == "K11　ネイビー×水色ラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#03a9f4"; //水色ラメ
			}
	} else if(label_R == "K12　ネイビー×ピンクラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#f39df8"; //ピンクラメ
		}
	} else if(label_R == "K13　黒×赤") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#2c3438"; //ブラック
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#cc0000"; //赤
			}
	} else if(label_R == "K14　レッド×ゴールドラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#cc0000"; //赤
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#c5a865"; //ゴールド
			}
	} else if(label_R == "K15　ブルー×ゴールドラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#0845be"; //ブルー
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill ="#c5a865"; //ゴールド
			}
	} else if(label_R == "K16　水色×ゴールドラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#00a4d6"; //水色
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill ="#c5a865"; //ゴールド
		}
	} else if(label_R == "K17　濃ピンク×ゴールドラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#d62662"; //濃いピンク
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill ="#c5a865"; //ゴールド
		}
	} else if(label_R == "K18　濃グリーン×ゴールドラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#1b574c"; //濃グリーン
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill ="#c5a865"; //ゴールド
		}
	} else if(label_R == "K22　パープル×ゴールドラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#350886"; //パープル
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill ="#c5a865"; //ゴールド
		}
	} else if(label_R == "K24　ライトゴールド×Dブラウン") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#b39978"; //Lゴールド
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill ="#330d0d"; //ダークブラウン
		}	
	} else if(label_R == "K1　レッド×ホワイト") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#cc0000"; //レッド
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#e2e7eb"  //ホワイト
		}
	} else if(label_R == "K2　ブルー×ホワイト") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#210ed6"; //ブルー
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#e2e7eb"  //ホワイト
			}
	} else if(label_R == "K3　水色×ホワイト"){
			for(let i = 0; i < klabel_huti.length; i++){
				klabel_huti[i].style.fill = "#5bb8e6"; //水色
			}
			for(let i = 0; i < klabel_logo.length; i++) {
				klabel_logo[i].style.fill = "#e2e7eb"  //ホワイト
				}
	} else if(label_R == "K4　ネイビー×ホワイト") {
			for(let i = 0; i < klabel_huti.length; i++){
				klabel_huti[i].style.fill = "#221e49"; //ネイビー
			}
			for(let i = 0; i < klabel_logo.length; i++) {
				klabel_logo[i].style.fill = "#e2e7eb"  //ホワイト
				}
	} else if(label_R == "K5　濃いピンク×ホワイト") {
			for(let i = 0; i < klabel_huti.length; i++){
				klabel_huti[i].style.fill = "#db28b4"; //ピンク
			}
			for(let i = 0; i < klabel_logo.length; i++) {
				klabel_logo[i].style.fill = "#e2e7eb"  //ホワイト
				}
	} else if(label_R == "K6　濃グリーン×ホワイト") {
			for(let i = 0; i < klabel_huti.length; i++){
				klabel_huti[i].style.fill = "#18554a"; //濃いグリーン
			}
			for(let i = 0; i < klabel_logo.length; i++) {
				klabel_logo[i].style.fill = "#e2e7eb"  //ホワイト
				}
	} else if(label_R == "K8　ネイビー×シルバーラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#dfdfdf"; //シルバー
			}
	} else if(label_R == "K10　黒×シルバーラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#2c3438"; //ブラック
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#dfdfdf"; //シルバー
			}
	} else if(label_R == "K19　ホワイト×レッドラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#ffffff"  //ホワイト
		}for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#cc0000"; //赤
			}
	} else if(label_R == "K20　ホワイト×ブルーラメ") {
			for(let i = 0; i < klabel_huti.length; i++){
				klabel_huti[i].style.fill = "#ffffff"  //ホワイト
			}
			for(let i = 0; i < klabel_logo.length; i++) {
				klabel_logo[i].style.fill = "#1540ab"; //ブルー
				}
	} else if(label_R == "K21　ホワイト×グリーンラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#ffffff"  //ホワイト
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#11612c"; //グリーン
			}
	} else if(label_R == "K23　ホワイト×ゴールドラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#ffffff"  //ホワイト
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#f9f247"; //ゴールド
			}
	} else if(label_R == "G1　グレー×水色") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#e2e7eb"  //グレー
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#5bb8e6"; //水色
			}
	} else if(label_R == "G2　グレー×グリーン") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#8bc34a"; //パステルグリーン
			}
	} else if(label_R == "G3　グレー×イエロー") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#ffc107"; //濃いイエロー
			}	
	} else if(label_R == "G4　グレー×レッド") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#cc0000"; //赤
			}
	} else if(label_R == "G5　グレー×濃ピンク") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#e44cb4"; //ピンク
			}	
	} else if(label_R == "G6　グレー×オレンジ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#e17039"; //オレンジ
			}	
	} else if(label_R == "G7　グレー×ネイビー") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#221e49"; //ネイビー
			}	
	} else if(label_R == "G8　グレー×パープル") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#4a2291"; //濃いめパープル
			}
	} else if(label_R == "G9　濃グレー×ブラックラメ") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#666666"  //濃グレー
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#2c3438"; //ブラック
			}	
	} else if(label_R == "G10　グレー×ブルー") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#b3b3b3"  //グレー
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#004d99"; //ブルー
			}
	} else if(label_R == "SA1　黒×赤×シルバーラメ(シリコン)") {
		for(let i = 0; i < klabel_huti.length; i++){
			klabel_huti[i].style.fill = "#660000"  //赤黒
		}
		for(let i = 0; i < klabel_logo.length; i++) {
			klabel_logo[i].style.fill = "#e2e7eb"; //シルヴァー
			}	
			console.log("SA1です");	
	} 
	//Lラベルの色
	else if(label_R == "L2　赤×ゴールドラメ/ネイビー"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#c5a865"; //ゴールド
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#cc0000"; //赤
		}
	} else if(label_R == "L4　ブルー×ゴールドラメ/赤"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#cc0000"; //赤
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#c5a865"; //ゴールド
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#1237b1"; //ブルー
		}
	} else if(label_R == "L6　ネイビー×ゴールドラメ/赤"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#cc0000"; //赤
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#c5a865"; //ゴールド
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#c5a865"; //ゴールド
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#221e49"; //ネイビー
		}
	} else if(label_R == "L11　ピンク×ピンク/赤"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#cc0000"; //赤
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#facefd"; //ピンク
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#cc0000"; //赤
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#fab5ff"; //ピンク
		}
	} else if(label_R == "L1　赤×白/ネイビー"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#cc0000"; //赤
		}
	} else if(label_R == "B7　黒×黒/ゴールドラメ"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#ffd700"; //ゴールド
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#2c3438"; //ブラック
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#ffd700"; //ゴールド
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#2c3438"; //ブラック
		}
	} else if(label_R == "L3　ブルー×白/赤"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#cc0000"; //赤
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#0f25a1"; //ブルー
		}
	} else if(label_R == "L5　ネイビー×白/赤"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#cc0000"; //赤
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#221e49"; //ネイビー
		}
	} else if(label_R == "L7　水色×白/ネイビー"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#5bb8e6"; //水色
		}
	} else if(label_R == "L8　濃グリーン×白/ネイビー"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#18554a"; //濃いグリーン
		}
	} else if(label_R == "L9　イエロー×白/ネイビー"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#ffeb3b"; //イエロー
		}
	} else if(label_R == "L10　オレンジ×白/ネイビー"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#221e49"; //ネイビー
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#e2e7eb"  //ホワイト
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#e17039"; //オレンジ
		}
	} else if(label_R == "B8　黒×黒/シルバーラメ"){
		for(let i = 0; i < Llabel_huti.length; i++){
			Llabel_huti[i].style.fill = "#C0C0C0"; //シルバー
		}
		for(let l = 0; l < Llabel_logo.length; l++) {
			Llabel_logo[l].style.fill = "#2c3438"; //ブラック
		}
		for(let s = 0; s < Llabel_sen.length; s++) {
			Llabel_sen[s].style.fill = "#C0C0C0"  //シルバー
		}
		for(let b = 0; b < Llabel_back.length; b++) {
			Llabel_back[b].style.fill = "#2c3438"; //ブラック
		}
	}	
	//Mラベルの色
	else if(label_R == "M1　ブルー×ゴールドラメ/レッド"){
		for(let i = 0; i < Mlabel_logo.length; i++) {
			Mlabel_logo[i].style.fill = "#c5a865"; //ゴールド
		}
		for(let x = 0; x < Mlabel_sublogo.length; x++) {
			Mlabel_sublogo[x].style.fill = "#c5a865"; //ゴールド
		}
		for(let b = 0; b < Mlabel_back.length; b++) {
			Mlabel_back[b].style.fill = "#210ed6"; //ブルー
		}
		for(let b2 = 0; b2 < Mlabel_back2.length; b2++) {
			Mlabel_back2[b2].style.fill = "#210ed6"; //ブルー
		}
		for(let h2 = 0; h2 < Mlabel_huti2.length; h2++) {
			Mlabel_huti2[h2].style.fill = "#cc0000"; //赤
		}
	} else if(label_R == "M2　ネイビー×ゴールドラメ/レッド"){
		for(let i = 0; i < Mlabel_logo.length; i++) {
			Mlabel_logo[i].style.fill = "#c5a865"; //ゴールド
		}
		for(let x = 0; x < Mlabel_sublogo.length; x++) {
			Mlabel_sublogo[x].style.fill = "#c5a865"; //ゴールド
		}
		for(let b = 0; b < Mlabel_back.length; b++) {
			Mlabel_back[b].style.fill = "#221e49"; //ネイビー
		}
		for(let b2 = 0; b2 < Mlabel_back2.length; b2++) {
			Mlabel_back2[b2].style.fill = "#221e49"; //ネイビー
		}
		for(let h2 = 0; h2 < Mlabel_huti2.length; h2++) {
			Mlabel_huti2[h2].style.fill = "#cc0000"; //赤
		}
	} else if(label_R == "M3　ブラック×ゴールドラメ/レッド"){
		for(let i = 0; i < Mlabel_logo.length; i++) {
			Mlabel_logo[i].style.fill = "#c5a865"; //ゴールド
		}
		for(let x = 0; x < Mlabel_sublogo.length; x++) {
			Mlabel_sublogo[x].style.fill = "#c5a865"; //ゴールド
		}
		for(let b = 0; b < Mlabel_back.length; b++) {
			Mlabel_back[b].style.fill = "#2c3438"; //ブラック
		}
		for(let b2 = 0; b2 < Mlabel_back2.length; b2++) {
			Mlabel_back2[b2].style.fill = "#2c3438"; //ブラック
		}
		for(let h2 = 0; h2 < Mlabel_huti2.length; h2++) {
			Mlabel_huti2[h2].style.fill = "#cc0000"; //赤
		}
	} else if(label_R == "M4　ライトゴールド×ゴールドラメ/Dブラウン"){
		for(let i = 0; i < Mlabel_logo.length; i++) {
			Mlabel_logo[i].style.fill = "#c5a865"; //ゴールド
		}
		for(let x = 0; x < Mlabel_sublogo.length; x++) {
			Mlabel_sublogo[x].style.fill = "#332214"; //Dブラウン
		}
		for(let b = 0; b < Mlabel_back.length; b++) {
			Mlabel_back[b].style.fill = "#f5deb3"; //Lゴールド
		}
		for(let b2 = 0; b2 < Mlabel_back2.length; b2++) {
			Mlabel_back2[b2].style.fill = "#332214"; //Dブラウン
		}
		for(let h2 = 0; h2 < Mlabel_huti2.length; h2++) {
			Mlabel_huti2[h2].style.fill = "#deb06f"; //ゴールドラメ
		}
	} 
	//ABCラベルの色
	else if(label_R == "D　グレー×水色/紺"){
		for(let i = 0; i < Alabel_logo.length; i++) {
			Alabel_logo[i].style.fill = "#5bb8e6"; //水色
		}
		for(let b = 0; b < Alabel_back.length; b++) {
			Alabel_back[b].style.fill = "#dfdfdf"; //シルバー
		}
		for(let h = 0; h < Alabel_hon.length; h++) {
			Alabel_hon[h].style.fill = "#5bb8e6"; //水色
		}
		for(let hh = 0; hh < Alabel_honhuti.length; hh++) {
			Alabel_honhuti[hh].style.fill = "#2c3438"; //ブラック
		}
	} else if(label_R == "E　グレー×グリーン/紺") {
		for(let i = 0; i < Alabel_logo.length; i++) {
			Alabel_logo[i].style.fill = "#38ce0f"; //緑
		}
		for(let b = 0; b < Alabel_back.length; b++) {
			Alabel_back[b].style.fill = "#dfdfdf"; //シルバー
		}
		for(let h = 0; h < Alabel_hon.length; h++) {
			Alabel_hon[h].style.fill = "#38ce0f"; //緑
		}
		for(let hh = 0; hh < Alabel_honhuti.length; hh++) {
			Alabel_honhuti[hh].style.fill = "#2c3438"; //ブラック
		}
	} else if(label_R == "F　グレー×イエロー/黒") {
		for(let i = 0; i < Alabel_logo.length; i++) {
			Alabel_logo[i].style.fill = "#e3cc0c"; //イエロー
		}
		for(let b = 0; b < Alabel_back.length; b++) {
			Alabel_back[b].style.fill = "#dfdfdf"; //シルバー
		}
		for(let h = 0; h < Alabel_hon.length; h++) {
			Alabel_hon[h].style.fill = "#e3cc0c"; //イエロー
		}
		for(let hh = 0; hh < Alabel_honhuti.length; hh++) {
			Alabel_honhuti[hh].style.fill = "#2c3438"; //ブラック
		}
	} else if(label_R == "H　グレー×赤/ゴールド") {
		for(let i = 0; i < Alabel_logo.length; i++) {
			Alabel_logo[i].style.fill = "#cc0000"; //赤
		}
		for(let b = 0; b < Alabel_back.length; b++) {
			Alabel_back[b].style.fill = "#dfdfdf"; //シルバー
		}
		for(let h = 0; h < Alabel_hon.length; h++) {
			Alabel_hon[h].style.fill = "#cc0000"; //赤
		}
		for(let hh = 0; hh < Alabel_honhuti.length; hh++) {
			Alabel_honhuti[hh].style.fill = "#e3cc0c"; //イエロー
		}
	} else if(label_R == "J　グレー×ピンク/紺") {
		for(let i = 0; i < Alabel_logo.length; i++) {
			Alabel_logo[i].style.fill = "#ff568f"; //ピンク
		}
		for(let b = 0; b < Alabel_back.length; b++) {
			Alabel_back[b].style.fill = "#dfdfdf"; //シルバー
		}
		for(let h = 0; h < Alabel_hon.length; h++) {
			Alabel_hon[h].style.fill = "#ff568f"; //ピンク
		}
		for(let hh = 0; hh < Alabel_honhuti.length; hh++) {
			Alabel_honhuti[hh].style.fill = "#2c3438"; //ブラック
		}
	} else if(label_R == "U　グレー×オレンジ") {
		for(let i = 0; i < Alabel_logo.length; i++) {
			Alabel_logo[i].style.fill = "#e17039"; //オレンジ
		}
		for(let b = 0; b < Alabel_back.length; b++) {
			Alabel_back[b].style.fill = "#dfdfdf"; //シルバー
		}
		for(let h = 0; h < Alabel_hon.length; h++) {
			Alabel_hon[h].style.fill = "#e17039"; //オレンジ
		}
		for(let hh = 0; hh < Alabel_honhuti.length; hh++) {
			Alabel_honhuti[hh].style.fill = "#2c3438"; //ブラック
		}
	} else {
		//(label_R == "V　ライトゴールド/Dブラウン×ゴールドラメ")
		for(let i = 0; i < Alabel_logo.length; i++) {
			Alabel_logo[i].style.fill = "#332214"; //ダークブラウン
		}
		for(let b = 0; b < Alabel_back.length; b++) {
			Alabel_back[b].style.fill = "#e6d5b8"; //ライトゴールド
		}
		for(let h = 0; h < Alabel_hon.length; h++) {
			Alabel_hon[h].style.fill = "#332214"; //ダークブラウン
		}
		for(let hh = 0; hh < Alabel_honhuti.length; hh++) {
			Alabel_honhuti[hh].style.fill = "#deb06f"; //ゴールドラメ
		}
	} 

	//「ラベル」の枠を表示させる
	//FM5.7.8型の場合
	if ( (type[0].match(/FM5型/) || type[0].match(/FM7型/)||type[0].match(/FM8型/)) && (label_R.match(/H\d/)) ) {
			//Rラベル　クリア
			rlabel_Clear();
			//Fラベル FM1　クリア
			flabelIn1_Clear(); 
			Hlabel_F.style.display ="block";
			Klabel_F.style.display ="none";
			Llabel_F.style.display ="none";
			Mlabel_F.style.display ="none";
			ABClabel_F.style.display ="none";
	}else if  ( ( type[0].match(/FM5型/) || type[0].match(/FM7型/)||type[0].match(/FM8型/) ) && ( label_R.match(/K\d*/) || label_R.match(/G\d*/) || label_R.match(/SA\d/) ) ){
		//Rラベル　クリア
		rlabel_Clear();
		//Fラベル FM1　クリア
		flabelIn1_Clear(); 
		Hlabel_F.style.display ="none";
		Klabel_F.style.display ="block";
		Llabel_F.style.display ="none";
		Mlabel_F.style.display ="none";
		ABClabel_F.style.display ="none";
	}else if   ( (type[0].match(/FM5型/) || type[0].match(/FM7型/)||type[0].match(/FM8型/) ) &&  (label_R.match(/L\d*/) || label_R.match(/B\d/) ) ){
		//Rラベル　クリア
		rlabel_Clear();
		//Fラベル FM1　クリア
		flabelIn1_Clear(); 
		Hlabel_F.style.display ="none";
		Klabel_F.style.display ="none";
		Llabel_F.style.display ="block";
		Mlabel_F.style.display ="none";
		ABClabel_F.style.display ="none";
	}else if  ( (type[0].match(/FM5型/) || type[0].match(/FM7型/)||type[0].match(/FM8型/) ) &&  (label_R.match(/M\d/) ) ){
		//Rラベル　クリア
		rlabel_Clear();
		//Fラベル FM1　クリア
		flabelIn1_Clear(); 
		Hlabel_F.style.display ="none";
		Klabel_F.style.display ="none";
		Llabel_F.style.display ="none";
		Mlabel_F.style.display ="block";
		ABClabel_F.style.display ="none";
	}else if  ( (type[0].match(/FM5型/) || type[0].match(/FM7型/)||type[0].match(/FM8型/) ) &&  (label_R.match(/D/)|| label_R.match(/E/)|| label_R.match(/F/)|| label_R.match(/H/)|| label_R.match(/J/)|| label_R.match(/U/)|| label_R.match(/V/) ) ){
		//Rラベル　クリア
		rlabel_Clear();
		//Fラベル FM1　クリア
		flabelIn1_Clear(); 
		Hlabel_F.style.display ="none";
		Klabel_F.style.display ="none";
		Llabel_F.style.display ="none";
		Mlabel_F.style.display ="none";
		ABClabel_F.style.display ="block";
	

	}
	//FM1型の場合
	else if	((type[0].match(/FM1型/)) && (label_R.match(/H\d/)) ){
		//Rラベルクリア
		rlabel_Clear();
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		Hlabel_FM1.style.display ="block";
		Klabel_FM1.style.display ="none";
		Llabel_FM1.style.display ="none";
		Mlabel_FM1.style.display ="none";
		ABClabel_FM1.style.display ="none";
	}else if  ((type[0].match(/FM1型/)) && (label_R.match(/K\d*/) || label_R.match(/G\d*/)|| label_R.match(/SA\d/)) ){
		//Rラベルクリア
		rlabel_Clear();
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		Hlabel_FM1.style.display ="none";
		Klabel_FM1.style.display ="block";
		Llabel_FM1.style.display ="none";
		Mlabel_FM1.style.display ="none";
		ABClabel_FM1.style.display ="none";
	}else if  ((type[0].match(/FM1型/)) && (label_R.match(/L\d*/) || label_R.match(/B\d/)) ){
		//Rラベルクリア
		rlabel_Clear();
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		Hlabel_FM1.style.display ="none";
		Klabel_FM1.style.display ="none";
		Llabel_FM1.style.display ="block";
		Mlabel_FM1.style.display ="none";
		ABClabel_FM1.style.display ="none";
	}else if  ((type[0].match(/FM1型/)) && (label_R.match(/M\d/)) ){
		//Rラベルクリア
		rlabel_Clear();
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		Hlabel_FM1.style.display ="none";
		Klabel_FM1.style.display ="none";
		Llabel_FM1.style.display ="none";
		Mlabel_FM1.style.display ="block";
		ABClabel_FM1.style.display ="none";
	}else if  ((type[0].match(/FM1型/)) && (label_R.match(/D/)|| label_R.match(/E/)|| label_R.match(/F/)|| label_R.match(/H/)|| label_R.match(/J/)|| label_R.match(/U/)|| label_R.match(/V/)) ){
		//Rラベルクリア
		rlabel_Clear();
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		Hlabel_FM1.style.display ="none";
		Klabel_FM1.style.display ="none";
		Llabel_FM1.style.display ="none";
		Mlabel_FM1.style.display ="none";
		ABClabel_FM1.style.display ="block";
	}
	//レギュラーの場合
	else if (label_R.match(/H\d/)){
		//「H+数字ラベル」と「H」のみのラベルがあり動かないため正規表現で区別。
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		//Fラベル FM1　クリア
		flabelIn1_Clear(); 
		// js_label_img.style.display = "block";
		Hlabel_R.style.display ="block";
		Klabel_R.style.display ="none";
		Llabel_R.style.display ="none";
		Mlabel_R.style.display ="none";
		ABClabel_R.style.display ="none";
	}else if  (label_R.match(/K\d*/) || label_R.match(/G\d*/) || label_R.match(/SA\d/)){
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		//Fラベル FM1　クリア
		flabelIn1_Clear(); 
		Hlabel_R.style.display ="none";
		Klabel_R.style.display ="block";
		Llabel_R.style.display ="none";
		Mlabel_R.style.display ="none";
		ABClabel_R.style.display ="none";
	}else if  (label_R.match(/L\d*/) || label_R.match(/B\d/)){
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		//Fラベル FM1　クリア
		flabelIn1_Clear(); 
		Hlabel_R.style.display ="none";
		Klabel_R.style.display ="none";
		Llabel_R.style.display ="block";
		Mlabel_R.style.display ="none";
		ABClabel_R.style.display ="none";
	}else if  (label_R.match(/M\d/)){
		//Fラベル FM1以外　クリア
		flabelQut1_Clear();
		//Fラベル FM1　クリア
		flabelIn1_Clear(); 
		Hlabel_R.style.display ="none";
		Klabel_R.style.display ="none";
		Llabel_R.style.display ="none";
		Mlabel_R.style.display ="block";
		ABClabel_R.style.display ="none";
	}else if  (label_R.match(/D/)|| label_R.match(/E/)|| label_R.match(/F/)|| label_R.match(/H/)|| label_R.match(/J/)|| label_R.match(/U/)|| label_R.match(/V/)){
			//Fラベル FM1以外　クリア
			flabelQut1_Clear();
			//Fラベル FM1　クリア
			flabelIn1_Clear(); 
			Hlabel_R.style.display ="none";
			Klabel_R.style.display ="none";
			Llabel_R.style.display ="none";
			Mlabel_R.style.display ="none";
			ABClabel_R.style.display ="block";
	}else {
		console.log("エラー");
	}
	
	

	//「ラベル」によって番号刺繍項目を表示させる	
	if(label_R.match(/K\d*/) || label_R.match(/G\d*/) || label_R.match(/SA\d/)){
		num_EmbContents.style.display = "block";
	}else{
		num_EmbContents.style.display = "none";
	}
			
});
// 8【画像】【カラー】選択した「指カバー」の表示とカラー設定 // // // // // //  
selectCover.addEventListener("change", () => {
	if(selectCover.value != '無し'){
		selectCover2.disabled = true;
		selectCover3.disabled = true;
		//どの画像を表示にするか
		fingerImg[0].style.display = "block";
		fingerImg[1].style.display = "none";
		fingerImg[2].style.display = "none";
		//画像に色
		let fIA = fingerImgA;
		selectCover.value == "Fオレンジ" ? fIA.style.fill = "#f13421":
		selectCover.value == "ピンク" ? fIA.style.fill = "#e3274a":
		selectCover.value == "ブラック" ? fIA.style.fill = "#000000":
		selectCover.value == "レッド" ? fIA.style.fill = "#DA0000":
		selectCover.value == "ブルー" ? fIA.style.fill = "#174ca8":
		selectCover.value == "Gイエロー" ? fIA.style.fill = "#ddad0d":
		selectCover.value == "KSブラック" ? fIA.style.fill = "#292327":
		selectCover.value == "タン" ? fIA.style.fill = "#de7e1a":
		selectCover.value == "KSオレンジ" ? fIA.style.fill = "#c94908":
		selectCover.value == "ウッド" ? fIA.style.fill = "#8b1f1c":
		selectCover.value == "トレンチ" ? fIA.style.fill = "#e5c48e":
		selectCover.value == "Dグレー" ? fIA.style.fill = "#817076":
		selectCover.value == "ホワイト" ? fIA.style.fill = "#e7e6eb":
		selectCover.value == "グリーン" ? fIA.style.fill = "#0e4a2e":
		selectCover.value == "水色" ? fIA.style.fill = "#419cb1":
		fIA.style.fill = "#6c2735";  // "バーガンディ" 
	}else{
		selectCover2.disabled = false;
		selectCover3.disabled = false;
		fingerImg[0].style.display = "none";
		fingerImg[1].style.display = "none";
		fingerImg[2].style.display = "none";
	}
});
selectCover2.addEventListener("change", () => {
	if(selectCover2.value != '無し'){
		selectCover.disabled = true;
		selectCover3.disabled = true;
		//どの画像を表示するか
		fingerImg[0].style.display = "none";
		fingerImg[1].style.display = "block";
		fingerImg[2].style.display = "none";
		// 画像に色
		let fIB = fingerImgB;
		selectCover2.value == "Fオレンジ" ? fIB.style.fill = "#f13421":
		selectCover2.value == "ピンク" ? fIB.style.fill = "#e3274a":
		selectCover2.value == "ブラック" ? fIB.style.fill = "#000000":
		selectCover2.value == "レッド" ? fIB.style.fill = "#DA0000":
		selectCover2.value == "ブルー" ? fIB.style.fill = "#174ca8":
		selectCover2.value == "Gイエロー" ? fIB.style.fill = "#ddad0d":
		selectCover2.value == "KSブラック" ? fIB.style.fill = "#292327":
		selectCover2.value == "タン" ? fIB.style.fill = "#de7e1a":
		selectCover2.value == "KSオレンジ" ? fIB.style.fill = "#c94908":
		selectCover2.value == "ウッド" ? fIB.style.fill = "#8b1f1c":
		selectCover2.value == "トレンチ" ? fIB.style.fill = "#e5c48e":
		selectCover2.value == "Dグレー" ? fIB.style.fill = "#817076":
		selectCover2.value == "ホワイト" ? fIB.style.fill = "#e7e6eb":
		selectCover2.value == "グリーン" ? fIB.style.fill = "#0e4a2e":
		selectCover2.value == "水色" ? fIB.style.fill = "#419cb1":
		fIB.style.fill = "#6c2735";  //"バーガンディ" ?
	}else{
		selectCover.disabled = false;
		selectCover3.disabled = false;
		fingerImg[0].style.display = "none";
		fingerImg[1].style.display = "none";
		fingerImg[2].style.display = "none";
	}
});
selectCover3.addEventListener("change", () => {
	if(selectCover3.value != '無し'){
		selectCover.disabled = true;
		selectCover2.disabled = true;
		//どの画像を表示にするか
		fingerImg[0].style.display = "none";
		fingerImg[1].style.display = "none";
		fingerImg[2].style.display = "block";
		//画像に色
		let fIO = fingerImgO;
		selectCover3.value == "Fオレンジ" ? fIO.style.fill = "#f13421":
		selectCover3.value == "ピンク" ? fIO.style.fill = "#e3274a":
		selectCover3.value == "ブラック" ? fIO.style.fill = "#000000":
		selectCover3.value == "レッド" ? fIO.style.fill = "#DA0000":
		selectCover3.value == "ブルー" ? fIO.style.fill = "#174ca8":
		selectCover3.value == "Gイエロー" ? fIO.style.fill = "#ddad0d":
		selectCover3.value == "KSブラック" ? fIO.style.fill = "#292327":
		selectCover3.value == "タン" ? fIO.style.fill = "#de7e1a":
		selectCover3.value == "KSオレンジ" ? fIO.style.fill = "#c94908":
		selectCover3.value == "ウッド" ? fIO.style.fill = "#8b1f1c":
		selectCover3.value == "トレンチ" ? fIO.style.fill = "#e5c48e":
		selectCover3.value == "Dグレー" ? fIO.style.fill = "#817076":
		selectCover3.value == "ホワイト" ? fIO.style.fill = "#e7e6eb":
		selectCover3.value == "グリーン" ? fIO.style.fill = "#0e4a2e":
		selectCover3.value == "水色" ? fIO.style.fill = "#419cb1":
		fIO.style.fill = "#6c2735";  //"バーガンディ"  
	}else{
		selectCover.disabled = false;
		selectCover2.disabled = false;
		fingerImg[0].style.display = "none";
		fingerImg[1].style.display = "none";
		fingerImg[2].style.display = "none";
	}
});
// 9【画像】選んだ芯トジの画像を表示// // // // // // // // //
const CoreChange = () => {
	if(stList[0].checked){
		coreImg[0].style.display ="block";
		coreImg[1].style.display ="none";
		coreImg[2].style.display ="none";
	} else if(stList[1].checked) {
		coreImg[0].style.display ="none";
		coreImg[1].style.display ="block";
		coreImg[2].style.display ="none";
	} else if(stList[2].checked) {
		coreImg[0].style.display ="none";
		coreImg[1].style.display ="none";
		coreImg[2].style.display ="block";
	}
}
//10　刺繍の動き// // // // // // // // // // // // // // // 
//10-1 通常刺繍
class Embro{
	constructor(obj){
		const ePlace = document.querySelector(obj.embroPlace);			
		const eColor= document.querySelector(obj.embroColor);	
		const eHuti = document.querySelector(obj.embroHuti);
		const eText = document.querySelector(obj.embroText);	

		ePlace.addEventListener("change",() =>{
			eColor.selectedIndex = 0;
			eHuti.selectedIndex = 0;
			eText.value = '';
	
			if((ePlace.value.indexOf( 'ホーン' ) !== -1 || ePlace.value.indexOf( 'ロゴ' ) !== -1) && (ePlace.value.indexOf( '影付' ) !== -1  || ePlace.value.indexOf( 'フチ付' ) !== -1)){
				//1
				eColor.disabled = false;
				eHuti.disabled = false;
				eText.disabled = true;
				
			}else if((ePlace.value.indexOf( 'ホーン' ) !== -1　 || ePlace.value.indexOf( 'ロゴ' ) !== -1) && !(ePlace.value.indexOf( '影付' ) !== -1  || ePlace.value.indexOf( 'フチ付' ) !== -1)){
				//2
				eColor.disabled = false;
				eHuti.disabled = true;
				eText.disabled = true;
	
			}else if( !(ePlace.value.indexOf( 'ホーン' ) !== -1　 || ePlace.value.indexOf( 'ロゴ' ) !== -1 )&& (ePlace.value.indexOf( '影付' ) !== -1  || ePlace.value.indexOf( 'フチ付' ) !== -1)){
				//3
				eColor.disabled = false;
				eHuti.disabled = false;
				eText.disabled = false;
	
			}else if(ePlace.value.indexOf( '不要,0' ) !== -1){
				eColor.disabled = true;
				eHuti.disabled = true;
				eText.disabled = true;
				eColor.selectedIndex = 0;
				eHuti.selectedIndex = 0;
				eText.value = '';
	
			}else {
				eColor.disabled = false;
				eHuti.disabled = true;
				eText.disabled = false;
			}
		});
	}
}
//親指部
const Embro1 = new Embro({
 embroPlace: '[name="親指部・刺繍書体*7"]',
 embroColor: '[name="親指部・刺繍カラー*1"]',
 embroHuti: '[name="親指部・刺繍カゲ・フチカラー*1"]',
 embroText: '[name="親指部・刺繍文字*1"]'
});
//平裏上部
const Embro2 = new Embro({
	embroPlace: '[name="平裏部上段・刺繍書体*8"]',
	embroColor: '[name="平裏部上段・刺繍カラー*1"]',
	embroHuti: '[name="平裏部上段・刺繍カゲ・フチカラー*1"]',
	embroText: '[name="平裏部上段・刺繍文字*1"]'
});
//平裏下部
const Embro3 = new Embro({
	embroPlace: '[name="平裏部下段・刺繍書体*9"]',
	embroColor: '[name="平裏部下段・刺繍カラー*1"]',
	embroHuti: '[name="平裏部下段・刺繍カゲ・フチカラー*1"]',
	embroText: '[name="平裏部下段・刺繍文字*1"]'
});
//平裏下部
const Embro4 = new Embro({
	embroPlace: '[name="小指部・刺繍書体*10"]',
	embroColor: '[name="小指部・刺繍カラー*1"]',
	embroHuti: '[name="小指部・刺繍カゲ・フチカラー*1"]',
	embroText: '[name="小指部・刺繍文字*1"]'
});

//10-2丸抜き刺繍
maruEmbro_part.addEventListener("change", () => {
		maruEmbro.selectedIndex = 0;
		maruEmbro_base.selectedIndex = 0;
		maruEmbro_color.selectedIndex = 0;
		maruEmbro_huti.selectedIndex = 0;
		maruEmbro_text.value = '';
		initMaruEmbro_move();

		if(maruEmbro_part.value == '親指部' || maruEmbro_part.value == 'ウェブ部（W-18・W-38のみ）' ){
			maruEmbro.disabled = false;
			maruEmbro.onchange = () => {
				maruEmbro_base.selectedIndex = 0;
				maruEmbro_color.selectedIndex = 0;
				maruEmbro_huti.selectedIndex = 0;
				maruEmbro_text.value = '';

				if(maruEmbro.value.indexOf( 'マーク' ) !== -1  && maruEmbro.value.indexOf( '影付' ) !== -1 ){
					maruEmbro_base.disabled = false;
					maruEmbro_color.disabled = false;
					maruEmbro_huti.disabled = false;
					maruEmbro_text.disabled = true;
					maruEmbro_text.value = '';
		
				}else if(maruEmbro.value.indexOf( 'マーク' ) !== -1 && !maruEmbro.value.indexOf( '影付' ) !== -1 ){
					maruEmbro_base.disabled = false;
					maruEmbro_color.disabled = false;
					maruEmbro_huti.disabled = true;
					maruEmbro_text.disabled = true;
					maruEmbro_text.value = '';

				}else if(!maruEmbro.value.indexOf('マーク') !== -1 && maruEmbro.value.indexOf( '影付' ) !== -1){
					maruEmbro_base.disabled = false;
					maruEmbro_color.disabled = false;
					maruEmbro_huti.disabled = false;
					maruEmbro_text.disabled = false;	
		

				}else if(maruEmbro.value.indexOf( '不要,0' ) !== -1){
					maruEmbro_base.disabled = true;
					maruEmbro_color.disabled = true;
					maruEmbro_huti.disabled = true;
					maruEmbro_text.disabled = true;
					maruEmbro_base.selectedIndex = 0;
					maruEmbro_color.selectedIndex = 0;
					maruEmbro_huti.selectedIndex = 0;
					maruEmbro_text.value = '';

				}else{
					maruEmbro_base.disabled = false;
					maruEmbro_color.disabled = false;
					maruEmbro_huti.disabled = true;
					maruEmbro_text.disabled = false;
					maruEmbro_huti.selectedIndex = 0;

				}
			}
		}else{
			maruEmbro.selectedIndex = 0;
			maruEmbro_base.selectedIndex = 0;
			maruEmbro_color.selectedIndex = 0;
			maruEmbro_huti.selectedIndex = 0;
			maruEmbro_text.value = '';
			initMaruEmbro_move();

		}
});
//10-3WEB刺繍
webEmbro.addEventListener("change", () => {

		webEmbro_color.selectedIndex = 0;
		webEmbro_huti.selectedIndex = 0;
		// webEmbro_text.value = '無し';
		initWebEmbro_move();

		if((webEmbro.value.indexOf( 'ホーン' ) !== -1 || webEmbro.value.indexOf( 'ロゴ' ) !== -1) && (webEmbro.value.indexOf( '影付' ) !== -1  || webEmbro.value.indexOf( 'フチ付' ) !== -1)){
			//1
			webEmbro_color.disabled = false;
			webEmbro_huti.disabled = false;
			webEmbro_text.disabled = true;
			
		}else if((webEmbro.value.indexOf( 'ホーン' ) !== -1　 || webEmbro.value.indexOf( 'ロゴ' ) !== -1) && !(webEmbro.value.indexOf( '影付' ) !== -1  || webEmbro.value.indexOf( 'フチ付' ) !== -1)){
			//2
			webEmbro_color.disabled = false;
			webEmbro_huti.disabled = true;
			webEmbro_text.disabled = true;
	
		}else if( !(webEmbro.value.indexOf( 'ホーン' ) !== -1　 || webEmbro.value.indexOf( 'ロゴ' ) !== -1 )&& (webEmbro.value.indexOf( '影付' ) !== -1  || webEmbro.value.indexOf( 'フチ付' ) !== -1)){
			//3
			webEmbro_color.disabled = false;
			webEmbro_huti.disabled = false;
			webEmbro_text.disabled = false;
	
		}else if(webEmbro.value.indexOf( '不要,0' ) !== -1){
			initWebEmbro_move ();
			webEmbro_color.selectedIndex = 0;
			webEmbro_huti.selectedIndex = 0;
			webEmbro_text.value = '';
	
		}else {
			webEmbro_color.disabled = false;
			webEmbro_huti.disabled = true;
			webEmbro_text.disabled = false;
		}
});
//10-4番号刺繍
numEmbro.addEventListener("change", () => {
	// numEmbro_text.value = '無し';
		initNumEmbro_move();
		numEmbro_color.selectedIndex = 0;

	if(numEmbro.value.indexOf( '不要,0' ) !== -1){
		initNumEmbro_move();
		numEmbro_color.selectedIndex = 0;
		numEmbro_text.value = '';
	}else{
		numEmbro_color.disabled = false;
		numEmbro_text.disabled = false;
	}
});

// 「戻る」時に、値をフォームに読込///////////////////////////////
$(function () {
	var f = 'form[action*="order-s.cgi"]'; //対象のフォームを特定
	var kubota = "simigloveorder"; //sessionStorage内の名前

		window.addEventListener("pageshow", function () {
		if (performance.getEntriesByType("navigation").map(function (p) { return p.type; }).join() === "back_forward") {
		JSON.parse(sessionStorage.getItem(kubota)).forEach(function (nv) {
		document.querySelector(f)[nv.name].value = nv.value;
		});

		// 「戻る」を押した後の項目の制御ここから

			// 「2色」以上選択時
			if(document.querySelector(f)["本体カラー*3"].value == "2色以上"){
				changeBoxColor("block");
			} else if(document.querySelector(f)["本体カラー*3"].value !== " ") {
				changeBoxColor("none");
			}

			//基本モデル選択時（プルダウン・ラジオボタンなど）
			$(document.getElementsByClassName('基本モデル*1')).trigger('change');
			$('input[name*="ウェブスタイル*4"]:checked').trigger('click');
			$('input[name*="バックスタイル*5"]:checked').trigger('click');
			$('input[name*="芯トジ形態*6"]:checked').trigger('click');

			//革ヒモ（画像も保持）
			if(document.getElementById('皮ひもカラー*1').selectedIndex > 0) document.getElementById('皮ひもカラー*1').dispatchEvent(new Event('change'));
			//ハミダシ（画像も保持）
			if(document.getElementById('ハミダシカラー*1').selectedIndex > 0) document.getElementById('ハミダシカラー*1').dispatchEvent(new Event('change'));
			//ヘリ皮（画像も保持）
			if(document.getElementById('ヘリ皮カラー*1').selectedIndex > 0) document.getElementById('ヘリ皮カラー*1').dispatchEvent(new Event('change'));
			//ステッチ（画像も保持）
			if(document.getElementById('ステッチカラー*1').selectedIndex > 0) document.getElementById('ステッチカラー*1').dispatchEvent(new Event('change'));
			//裏革素材（画像も保持）
			if(document.getElementById('裏革素材・カラー*1').selectedIndex > 0) document.getElementById('裏革素材・カラー*1').dispatchEvent(new Event('change'));
			//ラベル（画像も保持）
			if(document.getElementById('ラベル*1').selectedIndex > 0) document.getElementById('ラベル*1').dispatchEvent(new Event('change'));
			// 指カバー・指あて(画像も保持)
			if(document.getElementById('指カバーAカラー').selectedIndex > 0) document.getElementById('指カバーAカラー').dispatchEvent(new Event('change'));
			if(document.getElementById('指カバーBカラー').selectedIndex > 0) document.getElementById('指カバーBカラー').dispatchEvent(new Event('change'));
			if(document.getElementById('指あてカラー').selectedIndex > 0) document.getElementById('指あてカラー').dispatchEvent(new Event('change'));

			}
		});
						// 「戻る」を押した後の項目の制御ここまで
		$(f).change(function () {
			sessionStorage.setItem(kubota, JSON.stringify($(this).serializeArray()));
			});

});



