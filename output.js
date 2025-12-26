//Fri Dec 26 2025 01:25:45 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
eval(function (_0x55f3cb, _0x1f3ed0, _0x52f526, _0x311698, _0x116fc4, _0x185b33) {
  _0x116fc4 = String;
  if (!"".replace(/^/, String)) {
    for (; _0x52f526--;) _0x185b33[_0x52f526] = _0x311698[_0x52f526] || _0x52f526;
    _0x311698 = [function (_0x1409af) {
      return _0x185b33[_0x1409af];
    }];
    _0x116fc4 = function () {
      return "\\w+";
    };
    _0x52f526 = 1;
  }
  for (; _0x52f526--;) _0x311698[_0x52f526] && (_0x55f3cb = _0x55f3cb.replace(new RegExp("\\b" + _0x116fc4(_0x52f526) + "\\b", "g"), _0x311698[_0x52f526]));
  return _0x55f3cb;
}("(()=>{1 0(){2(()=>{3(\"4\")()},5)}6{0()}7(8){}})();", 9, 9, "block function setInterval Function debugger 50 try catch err".split(" "), 0, {}));
jQuery.cookie = function (_0x40db46, _0x40061c, _0x52e6b7) {
  if (1 < arguments.length && "[object Object]" !== String(_0x40061c)) {
    _0x52e6b7 = jQuery.extend({}, _0x52e6b7);
    if (null === _0x40061c || undefined === _0x40061c) _0x52e6b7.expires = -1;
    if ("number" === typeof _0x52e6b7.expires) {
      var _0x1ed552 = _0x52e6b7.expires,
        _0x326042 = _0x52e6b7.expires = new Date();
      _0x326042.setDate(_0x326042.getDate() + _0x1ed552);
    }
    _0x40061c = String(_0x40061c);
    return document.cookie = [encodeURIComponent(_0x40db46), "=", _0x52e6b7.raw ? _0x40061c : encodeURIComponent(_0x40061c), _0x52e6b7.expires ? "; expires=" + _0x52e6b7.expires.toUTCString() : "", _0x52e6b7.path ? "; path=" + _0x52e6b7.path : "", _0x52e6b7.domain ? "; domain=" + _0x52e6b7.domain : "", _0x52e6b7.secure ? "; secure" : ""].join("");
  }
  _0x52e6b7 = _0x40061c || {};
  _0x326042 = _0x52e6b7.raw ? function (_0x37dbe7) {
    return _0x37dbe7;
  } : decodeURIComponent;
  return (_0x1ed552 = new RegExp("(?:^|; )" + encodeURIComponent(_0x40db46) + "=([^;]*)").exec(document.cookie)) ? _0x326042(_0x1ed552[1]) : null;
};
var surl = "https://s1.filec.top",
  turl = "https://asset.3400.org",
  BaiduSuggestion = {
    "bind": function () {
      return false;
    }
  },
  path_name = location.pathname,
  ad_url = $.cookie("ad_url"),
  app_down = $.cookie("app_down");
mem_tip = $.cookie("mem_tip");
window.onload = function () {};
function writeJs(_0x43dc6a) {
  document.write("<script src=\"" + _0x43dc6a + "\" > </script>");
}
$(function () {
  $.ajaxSetup({
    "cache": true
  });
  $.getScript("https://s0.pstatp.com/cdn/expire-1-M/layer/3.1.1/layer.min.js").done(function () {
    1 != mem_tip && layer.open({
      "type": 1,
      "btn": ["已牢记", "下载app"],
      "area": "325px",
      "title": "网址被屏蔽提升",
      "anim": 1,
      "yes": function (_0x222c80, _0x5a9013) {
        $.cookie("mem_tip", "1", {
          "path": "/",
          "expires": 7
        });
        layer.close(_0x222c80);
      },
      "btn2": function (_0x5e6eb1, _0x17c8e7) {
        window.open(turl + "/down.php");
      },
      "content": "<div class=\"app-content\"style=\"padding:10px;font-size:14px;\">当前网络屏蔽严重，无法访问请尝试如下方法：<br />1.<span style=\"color:#009900;\">修改默认dns</span>，推荐alidns或114dns<br />2.访问 <span style=\"color:#003399;\">bashi5.com</span> 或 <span style=\"color:#CC33E5;\">12580.org</span> 或 <span style=\"color:#64451D;\">cldq.cc</span> 进入地址导航<br />3.下方下载<span>app</span>，<span style=\"color:#006600;\">app可以零权限运行</span>，请放心安装<br />4.发送任何邮件至<a href=\"mailto:888@clb.biz\">888@clb.biz</a>，这是最稳定的方式，请牢记！！！<br />如您看到此页面，请<span style=\"color:#99BB00;\">截图保存</span>，我们会竭力保障网站可用，感恩共同走过的十年！💗💗💗 <br />网站无广告，出现广告则为运营商劫持加入，请<span style=\"color:red;\">注意甄别！</span>️</div>"
    });
  });
});
function rand_num(_0x2f039c) {
  return Math.round(Math.random() * (_0x2f039c - 1));
}
function is_mobile() {
  return navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i);
}
function is_ad() {
  return 1;
}
is_ad() && $(".yunbo").click(function () {
  var _0x593e43 = $("#down-url").attr("href").replace("magnet:?xt=urn:btih:", "");
  window.open("https://offurl.5338.org/?h=" + _0x593e43);
  return false;
});
if (is_mobile() && "/" != path_name) {
  $("#footer,#Bottom_bottom,.footer").css("margin-bottom", 220);
  var m_pv = [surl + "/sda.js", surl + "/svi.js"];
  m_pv_index = rand_num(m_pv.length);
  writeJs(surl + "/ppm.js");
  writeJs(m_pv[m_pv_index]);
}
if ("/" != path_name && !is_mobile()) {
  var p_pv = [surl + "/pps.js", ""];
  p_pv_index = rand_num(p_pv.length);
  writeJs(p_pv[p_pv_index]);
}
_0xodx = "jsjiami.com.v6";