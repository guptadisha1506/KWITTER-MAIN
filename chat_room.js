const firebaseConfig = {
      apiKey: "AIzaSyAoHvMvzaqZuoRN_RlbzfPJ0tRiy8Kno24",
      authDomain: "kwitter-8e295.firebaseapp.com",
      databaseURL: "https://kwitter-8e295-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e295",
      storageBucket: "kwitter-8e295.appspot.com",
      messagingSenderId: "471314636919",
      appId: "1:471314636919:web:2f8aee8d5ee3b01433e672",
      measurementId: "G-1TQ5FQ1NX4"
    };
    
 // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function AddRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_name = childKey;
      //Start code
      console.log("Room Name- "+Room_name);
      row="<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#" +Room_name+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
});
});
}
      //End code
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}