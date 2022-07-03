import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Side.css';
import Music from './Music';

function Side() {

        var [search,setsearch] = useState("");

        function click()
        {
            setsearch(<div>
                        <input type="search" id="form1" className="form-control"
                         placeholder="Search" aria-label="Search" />
                        <button type="submit" className='btn btn-outline-success btn-sm'>Click here</button>
                    </div>
            );
        }
        


        return(
            <div className='row'>
                <div className='col-2 bg-info' id="side1">
                    <div className='row row-col-4'>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                        <p className='text-light'>Home</p>
                        <p className='text-light' onClick={click}>Search{search}</p>
                        <p className='text-light'>Favourities</p>
                        <p className='text-light'>Playlistis</p>
                    </div>
                </div>
                
                <div className='col-10'>

                    <div className='col-12' id="side2" >
                        <img id="img1" src="https://img.freepik.com/free-vector/music-background-with-equalizer-speaker_1017-32860.jpg?w=2000"/>
                    </div>

                    <div className='col-12' id="side3">
                        <p>RELEASED THIS WEEK <hr id="line"/></p>
                        <Music></Music>
                    </div>


                </div>
                
               

            </div>
        );
};

export default Side;
