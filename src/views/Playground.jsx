import { useEffect, useState } from "react"
import Chatbox from "../components/Chatbox"
import User1 from "../components/User1"
import { useNavigate } from "react-router"
import { socket } from "../socket/socket"


export default function PlayGround() {
  const navigate = useNavigate()  
  const [players, setPlayers] = useState([])




  useEffect(() => {
    if (!localStorage.username) {
      navigate('/');
    }

    socket.auth = {
      username: localStorage.username
    }
    socket.connect()
    socket.on('play', player => {
      setPlayers(player)
      if(players.length < 2){

        navigate('/')
      }
    })
    return () => {
      socket.off('play')
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log(players);
    


  })




  return (
    <div className="fixed container mx-auto p-4 h-screen bg-gray-900 text-gray-200 mt-16">
      <div className="bg-gray-800 rounded-lg shadow-md p-4">
        <User1 />
      </div>
      <Chatbox />
    </div>
  );
}