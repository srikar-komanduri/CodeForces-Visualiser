import React from "react"


const Tables = (props) =>{  
  let data = props.res 
  const {data2} = props;
  let contests = []
  let attempts = []
  let solved = []    
  let totalattempts = []
  let maxattempts = []
  let maxattemptsval = 0
  let acinoneattempt = []
  let acin_onecount=0;
  let now = new Date().getTime();
  let lastonline = data2.lastOnlineTimeSeconds*1000;
  let dateregistered = new Date(data2.registrationTimeSeconds*1000).toDateString();
  for(let i=0;i<props.res.length;i++){
      totalattempts.push(data[i].contestId+data[i].problem.index)
      if(contests.indexOf(data[i].contestId)===-1 && data[i].author.participantType==="CONTESTANT"){
          contests.push(data[i].contestId)
      }

      if(attempts.indexOf(data[i].contestId+data[i].problem.index)===-1){
          if(data[i].verdict==="OK")
              solved.push(data[i].contestId+data[i].problem.index)
          attempts.push(data[i].contestId+data[i].problem.index)
      }    
  }

  
  for(let i=0;i<attempts.length;i++)
      maxattempts.push(0);
  for(let i=0;i<totalattempts.length;i++){
      let ind = attempts.indexOf(totalattempts[i])
      maxattempts[ind]+=1;
  }
  
  for(let i=0;i<maxattempts.length;i++){
      if (maxattempts[i] > maxattemptsval){
          maxattemptsval = maxattempts[i];
      }
  }

  for(let i=0;i<solved.length;i++)
      acinoneattempt.push(0);
  for(let i=0;i<data.length;i++){
      let ind = solved.indexOf(data[i].contestId+data[i].problem.index)
      if(ind>-1 && data[i].verdict!=="OK"){
          acinoneattempt[ind]+=1;
      }
  }
  
  for(let i=0;i<acinoneattempt.length;i++){
      if(acinoneattempt[i]===0)
          acin_onecount+=1;
  }

  



  return(
      <div className="">
          <table className="">
      <thead>
        <tr>
          <th className="tabletitle">Few Interesting Facts About you</th>
            <th></th>
            
        </tr>
      </thead>

      <tbody>
      <tr>
          <td><b>Registered </b></td>
          <td>{dateregistered}</td>
          
        </tr>
        <tr>
          <td><b>Last online</b></td>
          <td>Online now</td>
          
        </tr>
        <tr>
          <td><b>Number of Contests partcipated </b></td>
          <td>{contests.length}</td>
          
        </tr>
        <tr>
          <td><b>Total Unique Problems Tried</b></td>
          <td>{attempts.length}</td>
          
        </tr>
        <tr>
          <td><b>Total Unique problems solved</b></td>
          <td>{solved.length} ({Math.round((100)*(solved.length)/(attempts.length))}%)</td>
        </tr>
        <tr>
          <td><b>Average Attemps per problem</b></td>
          <td>{((data.length)/solved.length).toFixed(2)}</td>
        </tr>
        <tr>
          <td><b>Maximum Attemps for a problem</b></td>
          <td>{maxattemptsval}</td>
        </tr>
        <tr>
          <td><b>AC in one attempt</b></td>
          <td>{acin_onecount}({Math.round((100*acin_onecount)/(solved.length))}%)</td>
        </tr>

      </tbody>
    </table>            
      </div>
  )
}


export default  Tables

