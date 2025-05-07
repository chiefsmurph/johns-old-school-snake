var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var google_ad_client = "pub-1736321574206681";
var google_ad_width = 728;
var google_ad_height = 90;
var google_ad_format = "728x90_as";
var google_safe = "high";
var adTotalS=0;

var adTotalSLoc;

var adTop;
var adNL=false;
var adTxt;
var adTxtTmp;
var adCls;
var adBtype;

wB();
findL();
wAd();

function wDoL(type,id){
	if (adBtype == "NS4"){
		if (type == "top"){
			document.write('<layer name="'+ id +'" top="0" left="'+ (window.innerWidth - 140) +'" width="120" height="650" visibility="hidden">'+adTxt);
			wCls();
		}else{
			document.write('</layer>');
		}		
	}else{
		if (adHB){
			if (type == "top"){
				document.write('<div id="'+ id +'" style="z-index:999; visibility:hidden; display:none;">'+adTxt);
			}else{
				document.write('</div>');
			}
		}else{
			if (type == "top"){
				document.write('<div id="'+ id +'" style="position:absolute; top:0; right:1; z-index:999; visibility:hidden;">'+adTxt);
			}else{
				document.write('</div>');
			}
		}
	}
}


function wAd(){
	switch(google_language){
		case"en":
			if (adHB){
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>';	
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinksterad2.js"></scr'+'ipt>';
			}else{
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
			}
			break
		case"de":
			if (adHB){
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>';	
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinksterad2.js"></scr'+'ipt>';
			}else{
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
			}	
			break	
		case"fr":
			if (adHB){
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>';	
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinksterad2.js"></scr'+'ipt>';
			}else{
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
			}		
			break
		case"it":
			if (adHB){
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinksterad2.js"></scr'+'ipt>';
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinksterad2.js"></scr'+'ipt>';
			}else{
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
			}
			break		
		case"es":
			if (adHB){
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>';	
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinksterad2.js"></scr'+'ipt>';
			}else{
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
			}
			break		
		default:
			if (adHB){
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://pagead2.googlesyndication.com/pagead/show_ads.js"></scr'+'ipt>';
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinksterad2.js"></scr'+'ipt>';
			}else{
				adTxt='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
				adTxtTmp='<scr'+'ipt type="text/javascript" src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/brinkad.js"></scr'+'ipt>';
			}
			break		
	
	}
	
}


function wCls(adId){
	switch(google_language){
		case"en":
			if (adHB){
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td height="1"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=871607756398663886017" width="1" height="1" border="0"></td>' +
							'</tr>' +
						'</table>');
			}else{
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td align="right"><a href="javascript:clA(\'' + adId + '\');" onclick="clA(\'' + adId + '\');"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=533613417171983841522" width="45" height="13" border="0"></a></td>' +
							'</tr>' +
						'</table>');
			}
			break
		case"de":
			if (adHB){
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td height="1"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=264448475421492116669" width="1" height="1" border="0"></td>' +
							'</tr>' +
						'</table>');
			}else{
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td align="right"><a href="javascript:clA(\'' + adId + '\');" onclick="clA(\'' + adId + '\');"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=533613417171983841522" width="45" height="13" border="0"></a></td>' +
							'</tr>' +
						'</table>');
			}
			break		
		case"fr":
			if (adHB){
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td height="1"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=465003832129871041657" width="1" height="1" border="0"></td>' +
							'</tr>' +
						'</table>');
			}else{
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td align="right"><a href="javascript:clA(\'' + adId + '\');" onclick="clA(\'' + adId + '\');"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=533613417171983841522" width="45" height="13" border="0"></a></td>' +
							'</tr>' +
						'</table>');
			}
			break		
		case"it":
			if (adHB){
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td height="1"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=889227032831627440506" width="1" height="1" border="0"></td>' +
							'</tr>' +
						'</table>');
			}else{
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td align="right"><a href="javascript:clA(\'' + adId + '\');" onclick="clA(\'' + adId + '\');"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=533613417171983841522" width="45" height="13" border="0"></a></td>' +
							'</tr>' +
						'</table>');
			}
			break		
		case"es":
			if (adHB){
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td height="1"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=126130583166859918060" width="1" height="1" border="0"></td>' +
							'</tr>' +
						'</table>');
			}else{
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td align="right"><a href="javascript:clA(\'' + adId + '\');" onclick="clA(\'' + adId + '\');"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=533613417171983841522" width="45" height="13" border="0"></a></td>' +
							'</tr>' +
						'</table>');
			}break		
		default:
			if (adHB){
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td height="1"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=889227032831627440506" width="1" height="1" border="0"></td>' +
							'</tr>' +
						'</table>');
			}else{
				document.write('<table border="0" cellpadding="0" cellspacing="0" width="120" ID="Table1">' +
							'<tr>' +
							'<td align="right"><a href="javascript:clA(\'' + adId + '\');" onclick="clA(\'' + adId + '\');"><img src="https://web.archive.org/web/20060202025949/http://www.brinkster.com/rd.aspx?r=533613417171983841522" width="45" height="13" border="0"></a></td>' +
							'</tr>' +
						'</table>');
			}
			break		
	
	}

}

function findL(){
	var win;
	win = findP(window);
	loopF(win);
}

function showA(divID) {
	var pwin;
	pwin = window.parent;
	if(pwin.document.layers){
		if (pwin.document.layers[divID]){
			if (pwin.document.layers[divID].visibility=="visible"){
				return;
			}
		}
	}else if (pwin.document.getElementById){
		if (pwin.document.getElementById(divID)){
			if (pwin.document.getElementById(divID).style.visibility=="visible"){
				return;
			}
		}
	}else if (pwin.document.getElementById && !adTotalSLoc.document.all){
		if (pwin.document.getElementById(divID)){
			if (pwin.document.getElementById(divID).style.visibility=="visible"){
				return;
			}
		}
	}else if (pwin.document.all){
		if (pwin.document.all(divID)){
			if (pwin.document.all(divID).style.visibility=="visible"){
				return;
			}	
		}
	}
	if(!adNL){
		if(adTotalSLoc.document.layers){
			adTotalSLoc.document.layers[divID].visibility="visible";
		}else if (adTotalSLoc.document.getElementById){
			adTotalSLoc.document.getElementById(divID).style.display="";
			adTotalSLoc.document.getElementById(divID).style.visibility="visible";
		}else if (adTotalSLoc.document.getElementById && !adTotalSLoc.document.all){
			adTotalSLoc.document.getElementById(divID).style.display="";
			adTotalSLoc.document.getElementById(divID).style.visibility="visible";
		}else if (adTotalSLoc.document.all){
			adTotalSLoc.document.all(divID).style.display="";
			adTotalSLoc.document.all(divID).style.visibility="visible";	
		}else{
		}
	}
}

function clA(divID) {
	if (document.getElementById){
		document.getElementById(divID).style.visibility="hidden";
	}else if (document.layers){
		document.layers[divID].visibility="hidden";
	}else if (document.all){
		document.all(divID).style.visibility="hidden";	
	}
}

function findP(w) {
	if (parent != w) {
		return findP(parent);
	} else {
		return w;
	}
}

function loopF(win){
	var i=0;
	if (adBtype == "NS6+" || adBtype == "IE5+"){
		if (win.frames.length==0){
			setF(win);
			return;
		}
		for(i=0;i<win.frames.length;i++){
			try{
				if(win.frames[i].frames.length>0){
					loopF(win.frames[i]);
				} else {
					setF(win.frames[i]);
				}
			}catch(error){
				setF(win.frames[i]);
			}
		}
		return;
	}else{
		if (win.frames.length==0){
			setF(win);
			return;
		}
		for(i=0;i<win.frames.length;i++){
			if(win.frames[i].frames.length>0){
				loopF(win.frames[i]);
			} else {
				setF(win.frames[i]);
			}
		}
		return;
	}
}

function setF(win){
	var total=0;
	if (adBtype == "NS6+"){
		try{
			if (typeof win.location.href != 'string'){}
		}catch(error){
			return;	
		}
	}else if (adBtype == "IE4" || adBtype == "IE5+"){
		if (typeof win.document == 'unknown'){
			return;
		}
	}
	if (!win){
		win=self;
	}
	if (adBtype == "NS4"){
		if (win.document){
			total=(win.innerWidth*win.innerHeight);
		}else{
			total = 0;
			adNL=true;
			return;
		}
	}else if (adBtype == "NS6+"){
		if (win.document.body){
			total=(win.innerWidth*win.innerHeight);
		} else {
			total = 0;
			adNL=true;
			return;
		}
	}else{
		if (win.document.body){
			total=(win.document.body.clientWidth*win.document.body.clientHeight);
		} else {
			total = 0;
			adNL=true;
			return;
		}
	}
	if(total>=adTotalS){
		adTotalS=total;
		adTotalSLoc=win;
	}
}

function wB(){
	if (document.getElementById && !document.all){
		adBtype = "NS6+";
		return;
	}else if (document.getElementById && document.all){
		adBtype = "IE5+";
		return;
	}else if (document.all){
		adBtype = "IE4";
		return;
	}else if (document.layers){
		adBtype = "NS4";
		return;
	}
}


}
/*
     FILE ARCHIVED ON 02:59:49 Feb 02, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:55:10 May 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.682
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.011
  esindex: 0.013
  cdx.remote: 17.16
  LoadShardBlock: 310.159 (3)
  PetaboxLoader3.datanode: 170.181 (4)
  PetaboxLoader3.resolve: 276.985 (2)
  load_resource: 496.924
*/