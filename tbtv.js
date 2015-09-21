// arrays
var cartoon90s = [
	'arnold.gif',
	'arnoldy.gif',
	'arth.gif',
	'bart.gif',
	'bbutt.gif',
	'bpj.gif',
	'bubbles.gif',
	'bugsb.gif',
	'burns.gif',
	'cbrown.gif',
	'chuck.gif',
	'ctcd.gif',
	'ctcd2.gif',
	'ctcd3.gif',
	'cynthia.gif',
	'daria.gif',
	'deedee.gif',
	'dex.gif',
	'dexter.gif',
	'ed.gif',
	'garfield.gif',
	'ghostb.gif',
	'hank.gif',
	'helg.gif',
	'helga.gif',
	'heyarn.gif',
	'jerry.gif',
	'kim.gif',
	'nigel.gif',
	'pat.gif',
	'pfam.gif',
	'ppuff.gif',
	'ppufffam.gif',
	'ren.gif',
	'renstimp.gif',
	'reptar.gif',
	'rocky.gif',
	'rugrat.gif',
	'scoob.gif',
	'sponge.gif',
	'squiddy.gif',
	'taz.gif',
	'tom.gif',
	'ttoon.gif'
]

var basePath="toons/images/";

function imgRandom() {
    for (var i = 0; i < 1; i++) {
        var rand = cartoon90s[Math.floor(Math.random() * cartoon90s.length)];
        var image = new Image();
        image.src = basePath+rand;
        document.body.appendChild(image);
    }
}







































