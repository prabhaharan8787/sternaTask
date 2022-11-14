import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export function Student(){
    const click = async (event) => {
        event.preventDefault();
      
        let a=document.getElementById('name').value;
        let b=document.getElementById('roll').value;
        let c=document.getElementById('birth').value;
        let d=document.getElementById('address').value;
        let e=document.getElementById('phone').value;

        // <tr>+= "<tr><td>" + a + "</td><td>" + b + "</td><td>" + c + "</td><td>" + d + "</td><td>" + e+ "</td> </tr>" </tr>;
        //    c1.appendchild(tr)
      
    
       
    //     var x=node1.textContent=a;
    //    var y= node1.textContent=b;
    //    let z= node1.textContent=c;
    //   var w=  node1.textContent=d;
    //   var A=  node1.textContent=e;
   



    // Map.a,b,c,d,e=(index,value)=>
    // {
    //     var tr = document.createElement("tr");
    //     var td=document.createElement('td');

    //     var k=+"<td>"+value+"</td>";
    //     var l=<td>''</td>
    //     td.appendChild(tr);
    //     tr.appendChild(c1);
    // }
     
    for(let i of (a,b,c,d,e))
    {
        var tr = document.createElement("tr");
        var td=document.createElement('td');

        var k=+"<td>"+i+"</td>";
     
        k.appendChild(td);
        tr.appendChild(td);
        
    }
  

        
 
    

    }
    return(

        <div>

            <div className="conatiner">
                <div className="row">
                    <div className="col-lg-3">
                        &nbsp;
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={click}>
                            <h1>Student_info</h1>
                            <div className="table table-responsive">
                                <thead>
                                    <tr>
                                        <td> <label>Studentname</label></td>
                                    
                                        <td>
                                        <input type='text' name='name' id='name' className='form-control'/>
                                        </td>
                                     </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                    <label>Roll num</label>
                                    
                                        <td>
                                        <input type='text' name='roll' id='roll' className='form-control'/>
                                        </td>
                                    </tr>
                                    <tr>
                                    <label>Date of birth</label>
                                    
                                        <td>
                                        <input type='number' name='birth' id='birth' className='form-control'/>
                                        </td>
                                    </tr>
                                    <tr>
                                    <label>Address</label>
                                    
                                        <td>
                                        <input type='text' name='address' id='address' className='form-control'/>
                                        </td>
                                    </tr>
                                    <tr>
                                    <label>Mobile</label>
                                    
                                        <td>
                                        <input type='number' name='phone' id='phone' className='form-control'/>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td colSpan={2}><button className="btn btn-primary" id='click' name='submit'>click</button></td>
                                    </tr>


                                 </tbody>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3">
                    &nbsp;
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                <div className="table table-responsive">
                    <thead>
                        <tr>
                            <td>
                                Student name
                            </td>
                            <td>
                                roll
                            </td>
                            <td>
                                Date of birth
                            </td>
                            <td>
                                Address
                            </td>
                            <td>
                                mobile
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  id="c1">

                        </tr>
                        {/* <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr> */}
                    </tbody>
                </div>
                </div>
                <div className="col-lg-3">
                    <button className="btn btn-danger">delete</button>
                    <button className="btn btn-info">update</button>
                </div>
                </div>
            </div>

        </div>
    
    )
}
