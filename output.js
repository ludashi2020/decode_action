//Wed Feb 19 2025 03:26:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x3c0f35 = new Vue({
  "el": "#check",
  "data": {
    "ip": window.ip,
    "ipnum": window.ipnum,
    "asndomain": window.asndomain,
    "orgdomain": window.orgdomain,
    "rdns": window.rdns,
    "copydata": "",
    "errorreport": false,
    "newaddr": "",
    "otherinfo": "",
    "otherinfotab": "idc",
    "showip": true,
    "showipnum": false
  },
  "created": function () {
    this.ip !== "" && (this.orgdomain == "" && axios({
      "method": "get",
      "url": "/ip/operator/" + window.ip
    }).then(_0x2141d9 => {
      this.orgdomain = _0x2141d9.data;
    }), this.rdns == "" && axios({
      "method": "get",
      "url": "/ip/getdns/" + window.ip
    }).then(_0x1861ab => {
      this.rdns = _0x1861ab.data;
    }), setTimeout(() => {
      this.showmap();
    }, 1000));
  },
  "methods": {
    "oncheckip": function () {
      checkip(this.ip);
    },
    "toimage": function () {
      domtoimage.toBlob(document.querySelector("#check>.container>.info")).then(function (_0x5a1759) {
        window.saveAs(_0x5a1759, "ip.png");
      }).catch(function (_0x2938a5) {
        console.log(_0x2938a5);
      });
    },
    "showmap"() {
      var _0x54d135 = new BMap.Map("bdmap");
      _0x54d135.centerAndZoom(new BMap.Point(window.longitude, window.latitude), 12);
      _0x54d135.addControl(new BMap.MapTypeControl({
        "mapTypes": [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
      }));
      _0x54d135.setCurrentCity("鍖椾含");
      _0x54d135.enableScrollWheelZoom(true);
    },
    "showErrorReport"() {
      this.errorreport = true;
      this.newaddr = "";
      this.otherinfo = "";
    },
    "closeErrorReport"() {
      this.errorreport = false;
    },
    "submitErrorReport"() {
      if (this.newaddr == "") {
        document.querySelector(".line-newaddr input").focus();
        return;
      }
      axios({
        "method": "get",
        "url": "/ip/errorreport",
        "params": {
          "ip": window.ip,
          "addr": window.loc,
          "newaddr": this.newaddr,
          "other": this.otherinfo
        }
      }).then(_0x40868f => {
        if (_0x40868f.data == "success") this.closeErrorReport(), setTimeout(() => alert("感谢你的提交，我们将尽快核实并修正该数据!"), 300);else alert(JSON.stringify(_0x40868f));
      });
    }
  }
});