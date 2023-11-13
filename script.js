var elem = document.getElementById("myvideo");
let results = await axios({ url: 'OPENME.html', method: 'GET', responseType: 'blob' });


function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function buttonClicked() {
    openFullscreen()
window.location.href = "virus.html";
  reult;
}
