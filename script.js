// ...

// Ajoutez cette fonction pour rafraîchir la page lorsqu'on clique sur le logo
function refreshPage() {
  window.location.reload();
}

// ...

function sendTweet() {
  var pseudo = document.getElementById("pseudo").value;
  var content = document.getElementById("tweet-content").value;

  if (pseudo && content) {
    var tweetList = document.getElementById("tweet-list");

    var tweetElement = document.createElement("div");
    tweetElement.className = "tweet";
    tweetElement.innerHTML = `<strong>${pseudo}:</strong> ${content}`;

    tweetList.appendChild(tweetElement);

    // Clear input fields after tweeting
    document.getElementById("pseudo").value = "";
    document.getElementById("tweet-content").value = "";
  }
}
