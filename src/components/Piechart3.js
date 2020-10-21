import React,{Component} from "react";
import {Pie} from 'react-chartjs-2';


var d=[];
var dd=[];

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
  let state2 = {
    labels: ["GNU C11","Clang++17 Diagnostics","GNU C++11","GNU C++14","GNU C++17",
    "MS C++","MS C++ 2017","GNU C++17 (64)","Mono C#","D","Go","Haskell","Java 11",
    "Java 8","Kotlin","Ocaml","Delphi","FPC","PascalABC.NET","Perl","PHP","Python 2",
    "Python 3","PyPy 2","PyPy 3","Ruby","Rust","Scala","JavaScript","Node.js"],
    datasets: [
      {
        label: '',
        backgroundColor: [],
        hoverBackgroundColor: [],
        data: [0,0,0,0]
      }
    ]
  }  

export default class PieChart3 extends Component{
    
    
    
    set =() =>{
        let datasets = [{
            label: 'Submissions',
            backgroundColor: [
              '#B21F00','#C9DE00','#2FDE00',
              '#00A6B4','#6800B4','#45BCD3'
            ],
            hoverBackgroundColor: [
            '#501800','#4B5000','#175000',
            '#003350','#35014F','#131CD3'            
            ],
            data: [0,0,0,0,0,0]
          }
        ]
        let datasets2 = [{
            label: 'Languages',
            backgroundColor: [
              '#B21F00','#C9AA00','#2FDE00','#C0A6B4',
              '#BC1F00','#C9AE00','#2FCAB0','#00AAB4',
              '#B21A00','#C1DE00','#AFDE00','#CBA6B4',
              '#BCVF00','#CDDC00','#2FDEA0','#00ABEB',
              '#B34F0D','#C12E00','#3CAE00','#BCAAB4',
              '#B56FDA','#C9DE00','#2FAAA0','#00BCB4',
              '#B2EFF0','#BBDE00','#2FDBB0','#AAA6B4',
              '#DC1FC0','#CCDECC',
            ],
              
            hoverBackgroundColor: [
            '#501800','#4B5000','#175000','#003350',
            '#501800','#4B5000','#175000','#003350',
            '#501800','#4B5000','#175000','#003350',
            '#501800','#4B5000','#175000','#003350',
            '#501800','#4B5000','#175000','#003350',
            '#501800','#4B5000'
            ],
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          }
        ]
        
        let verdicts=["WRONG_ANSWER" ,"COMPILATION_ERROR","OK", "TIME_LIMIT_EXCEEDED",
                        'RUNTIME_ERROR','MEMORY_LIMIT_EXCEEDED']
        let lang = ["GNU C11","Clang++17 Diagnostics","GNU C++11","GNU C++14","GNU C++17",
            "MS C++","MS C++ 2017","GNU C++17 (64)","Mono C#","D","Go","Haskell","Java 11",
            "Java 8","Kotlin","Ocaml","Delphi","FPC","PascalABC.NET","Perl","PHP","Python 2",
            "Python 3","PyPy 2","PyPy 3","Ruby","Rust","Scala","JavaScript","Node.js"]
        
        for(let i=0;i<this.props.res.length;i++){ 
            let ind = verdicts.indexOf(this.props.res[i].verdict);
            datasets[0].data[ind]+=1;
            if(i%10==0)
                datasets[0].data[ind]+=3;
            let ind2 = lang.indexOf(this.props.res[i].programmingLanguage)
            
            datasets2[0].data[ind2]+=1;
            if(i%10==0)
                datasets2[0].data[ind2]+=3;
        }
        
        
        
        d = datasets[0].data
        dd = datasets2[0].data
        state.datasets[0].data = d
        state2.datasets[0].data=dd
        state.datasets[0].backgroundColor = datasets[0].backgroundColor;
        state.datasets[0].hoverBackgroundColor = datasets[0].hoverBackgroundColor;
        state2.datasets[0].backgroundColor = datasets2[0].backgroundColor;
        state2.datasets[0].hoverBackgroundColor = datasets2[0].hoverBackgroundColor;
    }

    render(){
      this.set();
        return(
            <div className="row">
              <div className="col s12 m6 l6">
                {}{}{}{}
                    <div class="card z-depth-4 cardsize">
                      <div class="card-content">
                        <span class="card-title">Your Submissions</span>
                        <p>
                        <Pie
                          data={state}
                          options={{
                              tooltips:{
                                  bodyFontSize : 20
                              },
                              title:{
                              display:false,
                              text:'',
                              fontSize:20
                              },
                              legend:{
                              display:false,
                              position:'right'
                              }
                          }}
                        />
                        </p>
                      </div>
                    </div>
                {}{}{}{}{}{}
              </div>
              <div className="col s12 m6 l6">
                {}{}{}{}
                    <div class="card z-depth-4 cardsize">
                      <div class="card-content">
                        <span class="card-title">Your Languages</span>
                        <p>
                        <Pie
                          data={state2}
                          options={{
                              tooltips:{
                                  bodyFontSize : 20
                              },
                              title:{
                              display:false,
                              text:'',
                              fontSize:20
                              },
                              legend:{
                              display:false,
                              position:'right'
                              }
                          }}
                        />
                        </p>
                      </div>
                    </div>
                {}{}{}{}{}{}
              
              </div>

            </div>    
                
            
        )

    }
    
}






