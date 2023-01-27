import React, {useState} from 'react'
import { toast } from 'react-toastify';

function HeadTail(props) {

const [select,setSelect] = useState({
  value:''
});
const [show,setShow] = useState(false)

const submitHandler = async (e) => {
  e.preventDefault();
  console.log(`data =`, select);
  if(select.name !== ""){
    setShow(true)
  }else{
    alert("error")
  }
      
}

const readValue = async (e) => {
    // console.log("e.target.value", e.target.value)
        setSelect({
          ...select,[e.target.name]:e.target.value
        })
    }

  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-12 text-center'>
            <h3 className='display-7 text-sucess'>Head And Tail Page</h3>
            
        </div>
    </div>

    <div class="card">
      <div className="card-header">
        <h5 class="text-center">Head And Tail</h5>
      </div>
    <div class="card-body">
        <form action="" onSubmit={submitHandler}>
            <div class="d-grid gap-2 col-6 mx-auto">

                <select class="form-select" name='value' id='head' value={select.name} onChange={readValue} aria-label="Default select example">
                <option selected>Select a Value</option>
                <option value='H'>H</option>
                <option value='T'>T</option>
                </select>

                <button class="btn btn-primary" type="submit" value='Submit' >Submit</button>
            </div> 

            <div>
              {
                show ?
                <ul style={{listStyle:'none'}}>
                  <li>{select.value}</li>
                </ul>
             : "" }
            </div>
            
        </form>
      </div>
    </div>
  
</div>
  )
}

export default HeadTail
