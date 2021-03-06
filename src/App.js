import React,{useEffect,useState,Component} from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import Widgets from "./Widgets";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import {useStateValue} from "./Stateprovider";
import Profile from "./Profile";
import Explore from "./Explore";
import ChatPage from "./ChatPage";
import Chat from "./Chat";
import Followers from "./Followers";
import Following from "./Following";
import EditProfile from "./EditProfile";
import { db } from "./firebase";
import AddnewChat from "./AddnewChat";
import Notifications from "./Notifications";
import Register from "./Register";
import ProfileMain from "./ProfileMain";
import PostPop from "./PostPop";
import ForgotPassword from "./ForgotPassword"
import Reset from "./Reset"
// import Games from "./Games"



function App() {
  const[{user},dispatch]=useStateValue();
  const [loaded,setLoaded]=useState(false)
 
  

  useEffect(()=>{
    let isSubscribed=true
    if(isSubscribed){
auth.onAuthStateChanged((authUser)=>{
  // console.log('the user is:',authUser);
  if(authUser){
setLoaded(true)
         dispatch({
           type:'SET_USER',
           user:authUser})
  }else{
    setLoaded(true)
dispatch({
  type:'SET_USER',
  user:null})
  }
})
    }
    return () => isSubscribed = false
  },[user])

  
  useEffect(()=>{
if(user){

 db.collection('users').where('userId', '==', user.uid)
.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       // console.log( doc.data());
        dispatch({
                  type:'SET_PROFILE',
                  profile:doc.data(),
                 }
                )
    });
}).catch((error)=>console.log(error));
}
            

              
  },[user])

if(!user&&!loaded){
  <div style={{flex:1,justifyContent:'center'}}>
    Loading..
  </div>
}

return (
    <Router>
    <div className="app">
      
        
          <Switch>

            <Route path="/messages/:roomId">
             <Sidebar />
              <Chat/>
             <Widgets/>
            </Route>

            <Route path="/post/:nam/:tok">
             <Sidebar />
              <PostPop/>
             <Widgets/>
            </Route>

            <Route path="/addnewchat">
             <Sidebar />
              <AddnewChat/>
             <Widgets/>
            </Route>

            <Route path="/notifications">
             <Sidebar />
              <Notifications/>
             <Widgets/>
            </Route>
           
        <Route exact path="/login">
        <Login/>
        </Route>

        <Route exact path="/register">
        <Register/>
        </Route>

        <Route exact path="/forgotpassword">
        <ForgotPassword/>
        </Route>

        

        
       

        <Route path="/profile/followers/:pName">
        <Sidebar />
        <Followers />
        <Widgets/>
        </Route>

        

        <Route path="/profile/following/:pName">
        <Sidebar />
        <Following />
        <Widgets/>
        </Route>

        <Route  path="/profile/:pName/edit">
        <Sidebar />
        <EditProfile />
        <Widgets/>
        </Route>

        

        <Route  path="/profile/:pName">
        <Sidebar />
        <ProfileMain />
        <Widgets/>
        </Route>


         

         

        <Route path="/explore">
        <Sidebar />
        <Explore />
        <Widgets/>
        </Route>

         <Route path="/chat">
        <Sidebar />
        <ChatPage />
        <Widgets/>
        </Route>

        {/* <Route path="/games">
        <Sidebar />
        <Games />
        <Widgets/>
        </Route> */}

        <Route path="/">
        <Sidebar />
        <Feed />
        <Widgets/>
        </Route>

        <Route  path="/__/auth/action">
        <Reset/>
        </Route>

        </Switch>
        
      
    </div>
    </Router>
  )
}

export default App
