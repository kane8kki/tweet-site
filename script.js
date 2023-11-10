// Configurez votre application Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
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
