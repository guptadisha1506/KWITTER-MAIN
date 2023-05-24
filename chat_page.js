//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
       document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log (message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
row="<h4>"+name+"<img class='user_tick' src='tick.png' ></h4>"+
"<h4 class='message_h4'>"+message+"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value= '"+like+"' onclick='updatelike(this.id)'>"+
"<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value="";
}
function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      likes_in_number=Number(likes)+1;
      console.log(likes_in_number);
      firebase.database().ref(room_name).child(message_id).update({like:likes_in_number});
}