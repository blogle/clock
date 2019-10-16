Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

function updateClock() {
    var now = new Date(),
        clockVals = {
            h: now.getHours().pad(2),
            m: now.getMinutes().pad(2),
            s: now.getSeconds().pad(2),
            mi: now.getMilliseconds().pad(3)
        };

  Object.keys(clockVals).forEach(function (key) {
    document.getElementById(key).firstChild.nodeValue = clockVals[key];
  });
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
