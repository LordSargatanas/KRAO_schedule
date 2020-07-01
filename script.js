const t1="schedule";
const get_schedule=document.getElementById(t1);
const tr="tr";
const th="th";
const td="td";
const _="_";
const button="button";




function create_element(a1,a2,a3,a4) { 
	// id-места, тег создаваемого элемента, новый id, новый class
	let get_el=document.getElementById(a1);
	let cr_el=document.createElement(a2);
	cr_el.id=(a3);
	cr_el.className=(a4);
	get_el.appendChild(cr_el);

}
function create_text(a1,a2){
	let get_el_id=document.getElementById(a1);
	let cr_text=document.createTextNode(a2);
	get_el_id.appendChild(cr_text);

}
// for (i=1,x=6;i<=x;i++) {
// 	let schedule_id="schedule";
// 	let tr1_1="tr";
// 	let tr_i="tr"+i;
// 	let classn="schedule_tr"+i;
// 	create_element(schedule_id, tr1_1, tr_i, classn);

// }

const text_tr1=[
	"<span class='span_d_of_w'>День <br> недели</span>",//0
	"Время",											//1
	"ауд",												//2
	"1 курс",											//3
	,													//4
	"2 курс",											//5
	,													//6
	"3 курс",											//7
	,													//8
	"4 курс"											//9
];		
const text_week=[
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница"
];
const columns_names=[
	"week",
	"time",
	"course1",
	"cabinet1",
	"course2",
	"cabinet2",
	"course3",
	"cabinet3",
	"course4",
	"cabinet4",
];
const day_of_week=[
	"les",		//lesson - урок, занятие
	"mon",		//monday - понедельник
	"tue",		//tuesday - вторник
	"wed",		//wednesday - среда
	"thu",		//thursday - четверг
	"fri",		//friday - пятница
];

function ful_tab_load(){
	load_head_tab();
	week_load_tab();
}
function load_head_tab() {
	let tag=tr;		
	let q1=10; // количество th (столбцов)
	let n_id_tr=tag+"_head";
	let n_class=t1+_+tag+"_head";
	create_element(t1,tag,n_id_tr,n_class);
	for(q=1;q<=q1;q++){
		get_id_tr=tr+"_head";
		tag=th;
		n_id_th=get_id_tr+_+columns_names[q-1];
		// create_element(get_id,tag,n_id,n_class);
		if(q<=2){
			n_class=t1+_+get_id_tr+_+columns_names[q-1];
			create_element(get_id_tr,th,n_id_th,n_class);
			if(q==1){
				document.getElementById(n_id_th).innerHTML=(text_tr1[q-1]);
			}else{
				create_text(n_id_th,text_tr1[q-1]);
			}
		}else{
			n_class=t1+_+get_id_tr+_+columns_names[q-1];
			create_element(get_id_tr,th,n_id_th,n_class);
			if(q>=3&&(q%2!==0)){	// создание столбца "№ курс"
				// n_class=t1+_+get_id_tr+_+columns_names[q-1];
				// create_element(get_id_tr,th,n_id_th,n_class);
				// create_element(n_id_th,button,n_id_th+_+button,n_class+_+button);
									//создание кнопки внутри заголовка столбца
				create_text(n_id_th,text_tr1[q]); // +_+button
			} else{					// создание столбцов "кабинет"
				// n_class=t1+_+get_id_tr+_+columns_names[q-1];
				// create_element(get_id_tr,th,n_id_th,n_class);
				create_text(n_id_th,text_tr1[2]);
			}
		}
	}
}
function week_load_tab(){
	l1=5;
	for(z=1;z<=5;z++){					// создание 5 ячеек учебных дней недели
		for(l=1;l<=l1;l++){				// создание внутри каждой ячейки по 5 предметов
			let n_id_tr=tr+_+day_of_week[z]+_+day_of_week[0]+l;
			if(l==1){
				n_class_tr=t1+_+tr+"1_2";
			} else{
				n_class_tr=t1+_+tr+_+"2";
			}
			create_element(t1,tr,n_id_tr,n_class_tr);
			for(q=1;q<=10;q++){			// создание TH/TD внутри каждой строки
				if(q==1){
					if (l==1){
						n_id_q=n_id_tr+_+columns_names[0];
						n_class_q=t1+_+tr+_+columns_names[0];
						create_element(n_id_tr,th,n_id_q,n_class_q);
						let get_n_id_q=document.getElementById(n_id_q);
						get_n_id_q.rowSpan=l1;
						let n_span='<span class="week_span">';
						let n_span1="</span>";
						get_n_id_q.innerHTML=(n_span+text_week[z-1]+n_span1);
					}
					
				}else if(q==2){
					n_id_q=day_of_week[z]+_+day_of_week[0]+l+_+columns_names[q-1];
					n_class_q=t1+_+tr+_+columns_names[1];
					create_element(n_id_tr,th,n_id_q,n_class_q);

				}else{
					n_class_q=t1+_+tr+_+columns_names[q-1];
					n_id_q=day_of_week[z]+_+day_of_week[0]+l+_+columns_names[q-1];
					create_element(n_id_tr,td,n_id_q,n_class_q);
				}
			}
		}
		
	}
	
}


// get_schedule.style.borderBottomWidth="3px";		//нижняя граница


// кнопки скрытия/открытия столбцов с курсами

const id_btn="tr_head_course";
// for(i=1;i<=4;i++){
// 	get_id_btn=document.getElementById(id_btn+i);
// 	let courseN="course+"i"+_show()";
// 	get_id_btn.onclick=courseN;
// }
// document.getElementById("tr_head_course1").onclick=course1_show();
function course1_show(){
	let get_class_colums=document.getElementsByClassName("schedule_tr_head_course1");
	for (i=0;i<=get_class_colums.lenght;i++){
		get_class_colums[i].style.display="none";
	}
}

// отображение Базы данных
const query_n=[
		'SELECT',	//0
		'FROM',		//1
		'WHERE'		//2
	];
const class_name='schedule_tr_';
function show_db(){
	
	for(i1=1;i1<=columns_names.lenght;i1++){
		var get_class=getElementsByClassName(class_name+columns_names[i1]);
		for(i2=0;i2<=get_class.lenght;i2++){
			get_class[i2].innerHTML=(1);
		}
	}
	
}

// Админка (пытка-попытка)
var admin_mod=false;
// ad_ch();
// function ad_mo(a){
// 	if(a==1){
// 		admin_mod=true;
// 		document.getElementById("ad_bu").innerHTML="Выход";
// 	}else if(a==0){
// 		admin_mod=false;
// 		document.getElementById("ad_bu").innerHTML="Авторизация";
// 	}
// }
// function ad_ch(){
// 	if(admin_mod==false){
// 		var ad_v=document.getElementById("ad_bu");
// 		// ad_v.mane="Авторизация";
// 		// create_text("ad_bu","Авторизация");
// 		ad_v.innerHTML="Авторизация";
// 		ad_v.onclick=ad_mo(1);
// 	}else if (admin_mod==true){
// 		// create_text("ad_bu","Выход");
// 		ad_v.innerHTML="Выход";
// 		ad_v.onclick=ad_mo(0);
// 	}
// }

//php


// JSON запросы
var requestURL='https://drive.google.com/file/d/1HFOk-ZN0wK7sUvGaVgasR7PBaDyhDZhv/view?usp=sharing';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

	var a_u=request.response;
	// alert(a_u['username']);


var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var superHeroes = request.response;
  alert(superHeroes['squadName']);
}
// function populateHeader(jsonObj){
//  alert(jsonObj['user_name'])
// }
// var mydata = JSON.parse(schedule.json);
// var requestJSON=require('schedule.json');
// alert(mydata.administrator.user_name);