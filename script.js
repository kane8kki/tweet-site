// Importez les modules Firebase nécessaires
const firebaseConfig = {
  apiKey: "AIzaSyA8yeNUorIIlttsqEYISsGYYWojYt2rHtc",
  authDomain: "my-awesome-site-c48bb.firebaseapp.com",
  projectId: "my-awesome-site-c48bb",
  storageBucket: "my-awesome-site-c48bb.appspot.com",
  messagingSenderId: "859728588693",
  appId: "1:859728588693:web:b7e90954682703fac9909c"
};

// Initialisez votre application Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Récupérez une référence à la base de données
const database = firebase.database();
const tweetsRef = database.ref('tweets');

function sendTweet() {
  var pseudo = document.getElementById("pseudo").value;
  var content = document.getElementById("tweet-content").value;

  console.log("Pseudo:", pseudo);
  console.log("Content:", content);

  if (pseudo && content) {
    // Envoyez le tweet à la base de données Firebase
    tweetsRef.push({ pseudo: pseudo, content: content });

    // Effacez les champs de saisie après le tweet
    document.getElementById("pseudo").value = "";
    document.getElementById("tweet-content").value = "";
  }
}

// Écoutez les changements dans la base de données et mettez à jour l'affichage
tweetsRef.on('value', (snapshot) => {
  console.log("Snapshot:", snapshot.val());
  var tweetList = document.getElementById("tweet-list");
  tweetList.innerHTML = '';

  snapshot.forEach((childSnapshot) => {
    var tweet = childSnapshot.val();
    var tweetElement = document.createElement("div");
    tweetElement.className = "tweet";
    tweetElement.innerHTML = `<strong>${tweet.pseudo}:</strong> ${tweet.content}`;

    tweetList.appendChild(tweetElement);
  });
});
