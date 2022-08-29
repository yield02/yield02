import logo from './logo.svg';
import './App.css';
import { useState } from 'react'







function App() {
  



  const [job, setJob] = useState('')

  const [jobs, setJobs] = useState([])
  
  function handleDelete(props){
    setJobs(pre => {
      let newJobs;
      if(pre.length > 1) {
        newJobs = pre.filter(job => job !== props);
      }
      else {
        newJobs = []
      }
      return newJobs;
    })
  }

  console.log(jobs);

  function handdleOnclick() {
    setJobs(pre => {
      const newJobs = [...pre, job]
      return newJobs
    })
    setJob('')
  }
  return (
    <div className="App">
      <input
        value = {job} 
        onChange = {e => setJob(e.target.value)}
      
      />
      <button onClick = {job.length > 0 && handdleOnclick || null}>add</button>
      <ul>
        {jobs.map(job => (<li>{job}<button onClick = {e => handleDelete(job)}>X</button></li>))}
      </ul>
    </div>


  )
}

export default App;
