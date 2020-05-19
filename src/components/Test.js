import React from 'react';
import {Pie} from 'react-chartjs-2';

var state = {
  labels: ['Wrong Answer', 'Compilation Error', 'Accepted',
           'Time Limit Exceeded', 'Runtime Error','Memory Limit Exceeded'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4',
        '#45BCD3'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F',
      '#131CD3'
      ],
      data: [10,20,30,40,50,60]
    }
  ]
}


state.datasets[0].data = [10,2,344,55,66,7]        


export default class Test extends React.Component {
    
    
  render() {  
    return (
      <div>
          
          <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Your Submissions',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        
        

        </div>
    );
  }
}
