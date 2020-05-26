import React  from "react";
import {Bar,Chart} from "react-chartjs-2"; 

const Levels = (props) =>{
    
    let levels =[800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,
        2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500]
    let leveldata = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;
    for(let i=0;i<props.res.length;i++){
        let x = props.res[i].problem.index
        let y = props.res[i]
        if(y.verdict==="OK"){
            let ind = levels.indexOf(y.problem.rating)
            leveldata[ind]+=1;
        }
        
        if((x==="A" || x==="A1"|| x==="A2") && y.verdict==="OK"){
            a+=1;
        }
        if((x==="B" || x==="B1"|| x==="B2") && y.verdict==="OK"){
            b+=1;
        }
        if((x==="C" || x==="C1"|| x==="C2") && y.verdict==="OK"){
            c+=1;
        }
        if((x==="D" || x==="D1"|| x==="D2") && y.verdict==="OK"){
            d+=1;
        }
        if((x==="E" || x==="E1"|| x==="E2") && y.verdict==="OK"){
            e+=1;
        }
        if((x==="F" || x==="F1"|| x==="F2") && y.verdict==="OK"){
            f+=1;
        }
        if((x==="G" || x==="G1"|| x==="G2") && y.verdict==="OK"){
            g+=1;
        }
        if((x==="H" || x==="H1"|| x==="H2") && y.verdict==="OK"){
            h+=1;
        }
        if((x==="I" || x==="I1"|| x==="I2") && y.verdict==="OK"){
            i+=1;
        }
        if((x==="J" || x==="J1"|| x==="J2") && y.verdict==="OK"){
            j+=1;
        }
    }
    let mydata = [a,b,c,d,e,f,g,h,i,j]
       
    
    return(
        <div>
            <Bar
        data={{
          labels: ["A","B","C","D","E","F","G","H","I"],
          datasets: [
            {
              label: 'Solved Problems',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)',
               'rgba(255, 0, 0, 0.5)','rgba(0, 134, 255, 0.5)','rgba(65, 154, 25, 0.5)',
                'rgba(112, 255, 0, 0.5)','rgba(31, 43, 25, 0.5)','rgba(12,100, 5, 0.5)',
                'rgba(123, 123, 123, 0.5)'],
              data: mydata,
            },
          ],
        }}
        options = {{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
                }]          
        }}}
      />

       <Bar
        data={{
          labels: [800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,
            2200,2300,2400,2500,2600,2700,2800,2900,3000,3100,3200,3300,3400,3500],
          datasets: [
            {
              label: "Solved Problems",
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)',
               'rgba(255, 0, 0, 0.5)','rgba(0, 134, 255, 0.5)','rgba(65, 154, 25, 0.5)',
                'rgba(112, 255, 0, 0.5)','rgba(31, 43, 25, 0.5)','rgba(12,100, 5, 0.5)',
                'rgba(123, 123, 123, 0.5)','rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)','rgba(0, 134, 255, 0.5)','rgba(65, 154, 25, 0.5)',
                 'rgba(112, 255, 0, 0.5)','rgba(31, 43, 25, 0.5)','rgba(12,100, 5, 0.5)',
                 'rgba(123, 123, 123, 0.5)','rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)',
                 'rgba(255, 0, 0, 0.5)','rgba(0, 134, 255, 0.5)','rgba(65, 154, 25, 0.5)',
                  'rgba(112, 255, 0, 0.5)','rgba(31, 43, 25, 0.5)','rgba(12,100, 5, 0.5)',
                  'rgba(123, 123, 123, 0.5)','rgba(13, 13, 13, 0.5)'],
              data: leveldata,
            },
          ],
        }}
        options = {{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
                }]          
        }}}
      />     
            
        </div>
        
    )
}


export default Levels;