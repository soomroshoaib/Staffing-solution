import { colors } from "@material-ui/core";
import React from "react"
import Third from "./Third";



const Home=()=>{
    return(
        <>

        <div className="mein-div">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div style={{marginTop:'200px', marginBottom:'150px', color:'white', }}>
                      <h1 style={{fontSize:'50px'}}>Staffing Solution Resume</h1>
                       <h1 style={{fontSize:'60px'}}>Search Millions of</h1>
                      <h1 style={{fontSize:'70px'}}> Resumes for Free </h1>

                      <a className="btn-get-started" href="/job"> <h2> Search Resumes </h2> </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container m-5">
            <div className="center-div">
                <div className="one">
               <div className="d-flex" style={{paddingTop:'50px', justifyContent:'space-around'}}>
               <div> <h4>  What: <br/> <input type="text" style={{backgroundColor:'rgb(231, 226, 226)' , border:'10px solid white'}}/> </h4></div>
                <div> <h4> where: <br/><input type="text" style={{backgroundColor:'rgb(231, 226, 226)', border:'10px solid white'}}/> </h4></div>
                <div className="three" style={{paddingTop:'37px'}}> 
                    <input type="text" placeholder="Find Resumes" style={{backgroundColor:'#3498db' , color:"white"}} />
                </div>
                </div> 
                    <div className="two"> 
                    <div className="container">
                          <div className="filing"> 
                    <h2>Sameer Asif</h2>
                    <h2>.Net  Developer </h2>
                    <h3>Pakistan, Karachi</h3>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="mob">
                        <h2>Work Experience</h2>
                        <hr />
                        <hr/>
                        <hr/>
                        <hr/>
                        <br/> 
                    </div>
                    </div>
                    </div>
                    <div className="buting" style={{textAlign:'center', marginTop:'20px', marginBottom:'20px',}}> 
                 <a className="btn-get-started" href="/Contact"> Contact Us </a>
                 </div>
                </div>
                <div className="last-div">
                  <div className="text">
                 <h5 className="lines m-5">VIEW ALL PRODUCT</h5>
                 </div>
                 <div className="coloum">
                 <h6 style={{backgroundColor:'white', color:"blue", border:'10px',width:'150px', height:"50px", textAlign:'center', alignItems:'center', marginLeft:'150px', marginTop:'50px'}}>Save Resumes </h6>
                 <h6 style={{backgroundColor:'white', color:"blue", border:'10px',width:'150px', height:"50px", textAlign:'center', alignItems:'center', marginLeft:'150px', marginTop:'50px'}}>Forward Resumes  </h6>
                 <h6 style={{backgroundColor:'white', color:"blue", border:'10px',width:'150px', height:"50px", textAlign:'center', alignItems:'center', marginLeft:'150px',  marginTop:'50px'}}> Email </h6>
                 <h6 style={{backgroundColor:'white', color:"blue", border:'10px',width:'150px', height:"50px", textAlign:'center', alignItems:'center', marginLeft:'150px', marginTop:'50px'}}>Download Resumes</h6>
                 </div>

                </div>
                
            </div>

                 <div className="container">
                 <Third />


                 </div>




        </div>




        </>

    )
}

export default Home;