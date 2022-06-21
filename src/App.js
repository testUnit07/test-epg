import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const App = ()=>{
  const [show, setShow] = useState(false)
  const [listData,setListData] = useState([]);
  const [channel,setChannel] = useState('');
  let col;

  const selectedChannel = (obj)=>{
    console.log('obj', obj)
    setChannel(obj)
  }

  useEffect(()=>{
    const url = 'https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web61144bb49d549&user_id=54343080&date_from=20220616200256&date_to=20220617200256&quantity=200'
    axios.get(url).then(res=>{
      console.log('res', res.data.response);
      setListData(res.data.response.channels);
    })

  },[])


  const showChanel = ()=>{
   setShow(!show)

  }

  const sizeCol = (l)=>{
    col=0
    console.log('l',l.duration.split(':'))
    let un = parseInt(l.duration.split(':')[0])

    col=un*2 - 1;

    let dos = parseInt(l.duration.split(':')[1])

    if( dos - 30===0){
      col+=1
    }
    if((dos-30)>15){
      col+=2;
    }

    

    
    
  }

  const Epg = ()=>{
    return (
      <div  style={{width:'100%', height:'100vh', position:"relative"}}>
        
      {channel ? <div style={{background:'black', height:'50vh', position:'relative'}}>
      <div style={{width:'40%', padding:'20px 0'}}>
       <h2 style={{color:'white'}}>{channel.ext_original_name}</h2>
       <p style={{color:'white'}}>{channel.date_begin.split(' ')[1]} - {channel.date_end.split(' ')[1]} {channel.duration.split(':')[0]} hr {channel.duration.split(':')[1]} min</p>
       <p style={{color:'white'}}>
         T5 -EP 12  {channel.description}
       </p>
       <p style={{color:'white'}}>
       Una medalla más, ash y su equipo se encuentran viajando por el rancho de los sauces, donde 
         ash librara su ultima batalla encontra del lider del gym victor, el cual se especialista en Pokemon tipo 
         acero.
       </p>
       
       
       </div> 
  
       <div onClick={showChanel}  className="btn-close" >
        <div  style={{display:"flex", alignItems:"center", justifyContent:"center", height:'40px', 
      width:'40px'}}>
  
        <h3>X</h3>
  
        </div>
  
      </div>
       
     </div> : ''
  }
  
    
    
    <div onClick={showChanel} className="btn-close" >
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:'40px', width:'40px'}}>
      <h3>X</h3>
  
      </div>
  
    </div>
    <div style={{position:"absolute", bottom:0}}>
      <div>
      <table>
  <thead>
  <tr>
  <th aria-controls="dtHorizontalVerticalExample">Hoy</th>
  <th aria-controls="dtHorizontalVerticalExample">20:00   20:30</th>
    <th aria-controls="dtHorizontalVerticalExample">20:30 21:00</th>
    <th aria-controls="dtHorizontalVerticalExample">21:00 21:30</th>    
    <th aria-controls="dtHorizontalVerticalExample">21:30 22:00</th>
    <th aria-controls="dtHorizontalVerticalExample">22:00 22:30</th>
    <th aria-controls="dtHorizontalVerticalExample">22:30 23:00</th>
    <th aria-controls="dtHorizontalVerticalExample">23:30 00:00</th>
    <th aria-controls="dtHorizontalVerticalExample">00:00 00:30</th>
    <th aria-controls="dtHorizontalVerticalExample">00:30 01:00</th>
    <th aria-controls="dtHorizontalVerticalExample">01:00 01:30</th>
    <th aria-controls="dtHorizontalVerticalExample">01:30 02:00</th>
    <th aria-controls="dtHorizontalVerticalExample">02:00 02:30</th>
    <th aria-controls="dtHorizontalVerticalExample">02:30 03:00</th>
    <th aria-controls="dtHorizontalVerticalExample">03:00 03:30</th>
    <th aria-controls="dtHorizontalVerticalExample">03:30 04:00</th>
    <th aria-controls="dtHorizontalVerticalExample">04:00 04:30</th>
    <th aria-controls="dtHorizontalVerticalExample">04:30 05:00</th>
    <th aria-controls="dtHorizontalVerticalExample">05:00 05:30</th>
    <th aria-controls="dtHorizontalVerticalExample">05:30 06:00</th>
    <th aria-controls="dtHorizontalVerticalExample">06:00 06:30</th>
    <th aria-controls="dtHorizontalVerticalExample">06:30 07:00</th>
    <th aria-controls="dtHorizontalVerticalExample">07:00 07:30</th>
    <th aria-controls="dtHorizontalVerticalExample">07:30 08:00</th>
    <th aria-controls="dtHorizontalVerticalExample">08:00 08:30</th>
    <th aria-controls="dtHorizontalVerticalExample">08:30 09:00</th>
    <th aria-controls="dtHorizontalVerticalExample">09:00 09:30</th>
    <th aria-controls="dtHorizontalVerticalExample">09:30 10:00</th>

    <th aria-controls="dtHorizontalVerticalExample">10:00  10:30</th>
    <th aria-controls="dtHorizontalVerticalExample">10:30 11:00</th>
    <th aria-controls="dtHorizontalVerticalExample">11:00 11:30</th>
    <th aria-controls="dtHorizontalVerticalExample">11:30 12:00</th>
    <th aria-controls="dtHorizontalVerticalExample">12:00 12:30</th>
    <th aria-controls="dtHorizontalVerticalExample">12:30 13:00</th>
    <th aria-controls="dtHorizontalVerticalExample">13:00 13:30</th>
    <th aria-controls="dtHorizontalVerticalExample">13:30 14:00</th>
    <th aria-controls="dtHorizontalVerticalExample">14:00 14:30</th>
    <th aria-controls="dtHorizontalVerticalExample">14:30 15:00</th>
    <th aria-controls="dtHorizontalVerticalExample">15:00 15:30</th>
    <th aria-controls="dtHorizontalVerticalExample">15:30 16:00</th>
    <th aria-controls="dtHorizontalVerticalExample">16:00 16:30</th>
    <th aria-controls="dtHorizontalVerticalExample">16:30 17:00</th>
    <th aria-controls="dtHorizontalVerticalExample">17:00 17:30</th>
    <th aria-controls="dtHorizontalVerticalExample">17:30 18:00</th>
    <th aria-controls="dtHorizontalVerticalExample">18:00 18:30</th>
    <th aria-controls="dtHorizontalVerticalExample">18:30 19:00</th>
    <th aria-controls="dtHorizontalVerticalExample">19:00 19:30</th>
    <th aria-controls="dtHorizontalVerticalExample">19:30 20:00</th>
    <th aria-controls="dtHorizontalVerticalExample">20:00 20:30</th>
    
    
  
  
  </tr>
  </thead>
  <tbody>
  
  {
  listData.map(l=>{
    console.log('nuevo canal')
  return(
    <tr>
  
  <td >
  
  <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:'200px'}}>
  <p style={{color:'white', marginRight:'5px'}}>{l.name}</p>
  <img 
  style={{width:'50px',height:'50px', borderRadius:'100px'}}
  src={l?.group.common.image_base_square} />
  </div>
  </td>
  {
  l.events.map(a=>{
    sizeCol(a)
    console.log('actual col number', col)

  return (
    <td data-colspan={col} onMouseEnter={()=>selectedChannel(a)} className="hoverDescrip">
      <div>
        <p style={{color:'white'}}>{a.ext_original_name}</p>
        <p style={{color:'white'}}>{a.date_begin.split(' ')[1]} - {a.date_end.split(' ')[1]}</p>
      </div>
    </td>
  
    
  )
  })
  }
  
  
  </tr>
  
  
  
  )
  })
  }
  
  
  
  
  </tbody>
  </table>
      </div>
   
  
    </div>
  
  
  
  </div>
    )
  
  }
  

  return (
<>
      {
      show ?       <Epg  />
      :
      <div className='btnContainer'>
        <div onClick={showChanel} style={{background:'black', width:'220px', padding:'20px', borderRadius:'5px'}}>
      <h1>Mostrar EPG</h1>

    </div>
      </div>
      
    }
    
    </>

  )
}

export default App;
