const doParticles = true;

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

if (doParticles) {
  const particleOptions = getWidth() < 400 ? {minPixel: 1, maxPixel: 2, total: 20} : {minPixel: 1, maxPixel: 3, total: 40};
  $.firefly(particleOptions);
}

let t;
$(document).ready(() => {
  t = $(".ip").html();
});

$(document).on("click", ".ip", () => {
  const copy = document.createElement("textarea");
  copy.style.position = "absolute";
  copy.style.left = "-99999px";
  document.body.appendChild(copy);
  copy.textContent = t;
  copy.select();
  document.execCommand("copy");
  $(".ip").html("<span class='extrapad'>IP已成功复制~</span>");
  setTimeout(() => {
    $(".ip").html(t);
    copy.parentNode.removeChild(copy);
  }, 800);
});

$(document).ready(() => {
  const ip = $(".sip").attr("data-ip");
  const port = $(".sip").attr("data-port");

  const fetchPlayerCount = () => {
    $.get(`https://mcapi.us/server/status?ip=${ip}&port=${port}`, (result) => {
      $(".sip").html(result.online ? result.players.now : "Server isn't online!");
    });
  };

  fetchPlayerCount();
  setInterval(fetchPlayerCount, 3000);
});
