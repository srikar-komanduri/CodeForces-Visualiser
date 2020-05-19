import React,{Component} from "react";
import {Pie} from 'react-chartjs-2';
import Test from "./Test";

var d=[];

let state = {
    labels: ['Wrong Answer', 'Compilation Error', 'Accepted',
             'Time Limit Exceeded', 'Runtime Error','Memory Limit Exceeded'],
    datasets: [
      {
        label: '',
        backgroundColor: [],
        hoverBackgroundColor: [],
        data: [0,0,0,0,0,0]
      }
    ]
  }

export default class PieChart1 extends Component{
    
    
    set =() =>{
        let datasets = [{
            label: 'Submissions',
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
            data: [0,0,0,0,0,0]
          }
        ]
        let count_AC=0,count_WA=0,count_TLE=0,count_CE=0,count_RTE=0,count_MLE=0;
        for(let i=0;i<this.props.res.length;i++){
            if(this.props.res[i].verdict==="OK"){
                count_AC+=1;
            }
            else if(this.props.res[i].verdict==="WRONG_ANSWER"){
                count_WA+=1;
            }
            else if(this.props.res[i].verdict==="TIME_LIMIT_EXCEEDED"){
                count_TLE+=1;
            }
            else if(this.props.res[i].verdict==="COMPILATION_ERROR"){
                count_CE+=1;
            }
            else if(this.props.res[i].verdict==="RUNTIME_ERROR"){
                count_RTE+=1;
            }
            else if(this.props.res[i].verdict==="MEMORY_LIMIT_EXCEEDED"){

                count_MLE+=1;
            }
            
        }
        
        datasets[0].data=[count_WA,count_CE,count_AC,count_TLE,count_RTE,count_MLE]
        d = datasets[0].data
        state.datasets[0].data = d
        state.datasets[0].backgroundColor = datasets[0].backgroundColor;
        state.datasets[0].hoverBackgroundColor = datasets[0].hoverBackgroundColor;
        
    }

    render(){
        return(
            <div>
                {this.set()}
                
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
        )

    }
    
}






