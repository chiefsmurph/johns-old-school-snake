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

(function(){
function m(b){return b!=null?'"'+b+'"':'""'}
function C(b){if(typeof encodeURIComponent=="function"){return encodeURIComponent(b)}else{return escape(b)}}
function B(b,a,d){var f=a.indexOf("?");var e="https://web.archive.org/web/20060201010057/http://pagead2.googlesyndication.com/pagead/imp.gif?event=";e+=d;if(f!=-1&&f+1<a.length){e+="&"+a.substring(f+1)}var h='<img height="1" width="1" border="0" src='+m(e)+" />";b.write(h)}
function c(b,a){if(a){window.google_ad_url+="&"+b+"="+a}}
function g(b,a){if(a){c(b,C(a))}}
function l(b,a,d){if(a&&typeof a=="object"){a=a[d%a.length]}c("color_"+b,a)}
function E(b,a){var d=b.screen;var f=navigator.javaEnabled();var e=-a.getTimezoneOffset();if(d){c("u_h",d.height);c("u_w",d.width);c("u_ah",d.availHeight);c("u_aw",d.availWidth);c("u_cd",d.colorDepth)}c("u_tz",e);c("u_his",history.length);c("u_java",f);if(navigator.plugins){c("u_nplug",navigator.plugins.length)}if(navigator.mimeTypes){c("u_nmime",navigator.mimeTypes.length)}}
function y(b){b=b.toLowerCase();if(b.substring(0,3)!="ca-"){b="ca-"+b}return b}
function H(b,a,d){d=d.substring(0,1000);d=d.replace(/%\w?$/,"");if(b.google_ad_output=="js"&&(b.google_ad_request_done||b.google_radlink_request_done)){a.write('<script language="JavaScript1.1" src='+m(d)+"></"+"script>")}else if(b.google_ad_output=="html"){if(b.name=="google_ads_frame"){B(a,d,"reboundredirect")}else{a.write('<iframe name="google_ads_frame" width='+m(b.google_ad_width)+" height="+m(b.google_ad_height)+" frameborder="+m(b.google_ad_frameborder)+" src="+m(d)+' marginwidth="0"'+' marginheight="0"'+' vspace="0"'+' hspace="0"'+' allowtransparency="true"'+' scrolling="no">');B(a,d,"noiframe");a.write("</iframe>")}}}
function G(b){var a=null;b.google_ad_frameborder=a;b.google_ad_format=a;b.google_page_url=a;b.google_language=a;b.google_gl=a;b.google_country=a;b.google_region=a;b.google_city=a;b.google_hints=a;b.google_safe=a;b.google_encoding=a;b.google_ad_output=a;b.google_max_num_ads=a;b.google_ad_channel=a;b.google_contents=a;b.google_alternate_ad_url=a;b.google_alternate_color=a;b.google_color_bg=a;b.google_color_text=a;b.google_color_link=a;b.google_color_url=a;b.google_color_border=a;b.google_color_line=a;b.google_adtest=a;b.google_kw_type=a;b.google_kw=a;b.google_num_radlinks=a;b.google_max_radlink_len=a;b.google_rl_filtering=a;b.google_rl_mode=a;b.google_rt=a;b.google_ad_type=a;b.google_image_size=a;b.google_feedback=a;b.google_skip=a;b.google_page_location=a;b.google_referrer_url=a;b.google_ad_region=a;b.google_ad_section=a;b.google_bid=a;b.google_cpa_choice=a}
function A(){var b=null;var a=window;var d=document;var f=new Date();var e=f.getTime();var h=a.google_ad_format;if(a.google_cpa_choice){a.google_ad_url="https://web.archive.org/web/20060201010057/http://pagead2.googlesyndication.com/cpa/ads?";a.google_ad_url+="client="+escape(y(a.google_ad_client));a.google_ad_region="_google_cpa_region_";c("cpa_choice",a.google_cpa_choice)}else{a.google_ad_url="https://web.archive.org/web/20060201010057/http://pagead2.googlesyndication.com/pagead/ads?";a.google_ad_url+="client="+escape(y(a.google_ad_client))}var k=a.google_num_slots_by_client;var w=a.google_num_slots_by_channel;var j=a.google_prev_ad_formats_by_region;a.onerror=a.google_org_error_handler;if(a.google_ad_region==b&&a.google_ad_section!=b){a.google_ad_region=a.google_ad_section}var i=a.google_ad_region==b?"":a.google_ad_region;var q=false;if(h){q=h.indexOf("_0ads")>0}if(q){if(a.google_num_0ad_slots){a.google_num_0ad_slots=a.google_num_0ad_slots+1}else{a.google_num_0ad_slots=1}if(a.google_num_0ad_slots>1){return}}else if(!a.google_cpa_choice){if(a.google_num_ad_slots){a.google_num_ad_slots=a.google_num_ad_slots+1}else{a.google_num_ad_slots=1}if(a.google_num_slots_to_rotate){j[i]=b;if(a.google_num_slot_to_show==b){a.google_num_slot_to_show=e%a.google_num_slots_to_rotate+1}if(a.google_num_slot_to_show!=a.google_num_ad_slots){return}}else if(a.google_num_ad_slots>3&&i==""){return}}c("dt",f.getTime());c("hl",a.google_language);if(a.google_country){c("gl",a.google_country)}else{c("gl",a.google_gl)}c("gr",a.google_region);g("gcs",a.google_city);g("hints",a.google_hints);c("adsafe",a.google_safe);c("oe",a.google_encoding);c("lmt",a.google_last_modified_time);g("alternate_ad_url",a.google_alternate_ad_url);c("alt_color",a.google_alternate_color);c("skip",a.google_skip);var n=a.google_ad_client;if(!k[n]){k[n]=1;k.length+=1}else{k[n]+=1}if(j[i]){g("prev_fmts",j[i].toLowerCase());if(k.length>1){c("slot",k[n])}}if(h){g("format",h.toLowerCase());if(j[i]){j[i]=j[i]+","+h}else{j[i]=h}}c("num_ads",a.google_max_num_ads);c("output",a.google_ad_output);c("adtest",a.google_adtest);if(a.google_ad_channel){var r=a.google_ad_channel.toLowerCase();g("channel",r);var s="";var t=r.split("+");for(var o=0;o<t.length;o++){var p=t[o];if(!w[p]){w[p]=1}else{s+=p+"+"}}g("pv_ch",s)}g("url",a.google_page_url);l("bg",a.google_color_bg,e);l("text",a.google_color_text,e);l("link",a.google_color_link,e);l("url",a.google_color_url,e);l("border",a.google_color_border,e);l("line",a.google_color_line,e);c("kw_type",a.google_kw_type);g("kw",a.google_kw);g("contents",a.google_contents);c("num_radlinks",a.google_num_radlinks);c("max_radlink_len",a.google_max_radlink_len);c("rl_filtering",a.google_rl_filtering);c("rl_mode",a.google_rl_mode);c("rt",a.google_rt);c("ad_type",a.google_ad_type);c("image_size",a.google_image_size);c("region",a.google_ad_region);c("feedback_link",a.google_feedback);g("ref",a.google_referrer_url);g("loc",a.google_page_location);c("bid",a.google_bid);if(z(a,d)&&d.body){var u=d.body.scrollHeight;var v=d.body.clientHeight;if(v&&u){g("cc",Math.round(v*100/u))}}E(a,f);H(a,d,a.google_ad_url);G(a)}
function D(b,a,d){A();return true}
function z(b,a){return b.top.location==a.location}
function x(b,a){var d=a.documentElement;if(z(b,a))return false;if(b.google_ad_width&&b.google_ad_height){var f=1;var e=1;if(b.innerHeight){f=b.innerWidth;e=b.innerHeight}else if(d&&d.clientHeight){f=d.clientWidth;e=d.clientHeight}else if(a.body){f=a.body.clientWidth;e=a.body.clientHeight}if(e>2*b.google_ad_height||f>2*b.google_ad_width){return false}}return true}
function F(){var b=window;var a=document;var d=a.location;var f=a.referrer;var e=null;b.google_org_error_handler=b.onerror;b.onerror=D;if(b.google_ad_frameborder==e){b.google_ad_frameborder=0}if(b.google_ad_output==e){b.google_ad_output="html"}if(b.google_ad_format==e&&b.google_ad_output=="html"){b.google_ad_format=b.google_ad_width+"x"+b.google_ad_height}if(b.google_page_url==e){b.google_page_url=f;if(!x(b,a)){b.google_page_url=d;b.google_last_modified_time=Date.parse(a.lastModified)/1000;b.google_referrer_url=f}}else{b.google_page_location=f;if(!x(b,a)){b.google_page_location=d}}if(b.google_num_slots_by_channel==e){b.google_num_slots_by_channel=new Array()}if(b.google_num_slots_by_client==e){b.google_num_slots_by_client=new Array()}if(b.google_prev_ad_formats_by_region==e){b.google_prev_ad_formats_by_region=new Array()}}
F();A();

})()

}
/*
     FILE ARCHIVED ON 01:00:57 Feb 01, 2006 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:55:16 May 07, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.615
  exclusion.robots: 0.036
  exclusion.robots.policy: 0.025
  esindex: 0.011
  cdx.remote: 61.669
  LoadShardBlock: 4862.3 (6)
  PetaboxLoader3.datanode: 4608.035 (7)
  load_resource: 103.178
  PetaboxLoader3.resolve: 77.575
*/