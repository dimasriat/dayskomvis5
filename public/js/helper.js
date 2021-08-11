function eId(i) {
	return document.getElementById(i);
}

function eClass(c) {
	return document.querySelectorAll("." + c);
}

function getPos(e) {
	let pos = {
		window: {
			x1: window.pageXOffset,
			y1: window.pageYOffset,
			w: window.innerWidth,
			h: window.innerHeight,
			x2: window.pageXOffset + window.innerWidth,
			y2: window.pageYOffset + window.innerHeight,
		},
		me: {
			x1: e.offsetLeft,
			y1: e.offsetTop,
			w: e.offsetWidth,
			h: e.offsetHeight,
			x2: e.offsetLeft + e.offsetWidth,
			y2: e.offsetTop + e.offsetHeight,
		},
	};
	pos = {
		...pos,
		meInWindow: {
			x1: pos.me.x1 - pos.window.x1,
			y1: pos.me.y1 - pos.window.y1,
			x2: pos.me.x1 - pos.window.x1 + pos.me.w,
			y2: pos.me.y1 - pos.window.y1 + pos.me.h,
		},
	};
	return pos;
}

function skuyInit() {
	/**
	 * yang ada class skuy nya berarti nanti dicek
	 * kalau ga muncul gaada class skuy-show
	 * untuk jenis efectnya ga ditentuin sama skuy dan skuy-show, tapi sama skuy-{effect}
	 */
	eClass("skuy").forEach((item) => {
		if (
			getPos(item).meInWindow.y1 + getPos(item).me.h / 2 <=
			(getPos(item).window.h * 3) / 4
		) {
			item.classList.add("skuy-show");
		} else {
			item.classList.remove("skuy-show");
		}
	});
}

window.addEventListener("load", skuyInit);
window.addEventListener("scroll", skuyInit);
