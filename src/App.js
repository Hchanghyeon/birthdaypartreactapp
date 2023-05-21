import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState({});
  useEffect( () => {
     fetch("/api/test").then( (res) => {return res.json();}).then((data) => {setMsg(data); console.log("완료")});
  }, [])

  return (
    <div className="App">
      {msg.id}
      {msg.name}
      {msg.birthday}
    </div>
  );
}

export default App;
