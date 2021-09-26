import fakedata from './fakedata';
import image from './images/download.jpg';
import { useState } from 'react';
import '../src/App.css'
import { faLink } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [totalAmout, setTotalAmout] = useState(0);
  const [person, setPerson] = useState([]);
  const handleAddAmount = (name, amount) => {
    const newPerson = { name, amount };
    setPerson([...person, newPerson]);
    setTotalAmout(totalAmout + amount)
  }
  return (
    <div>
      <div className='text-center App-header mb-3'>
        <h1>Web Application Project</h1>
        <p><strong>Total Budget 1000k</strong></p>
      </div>
      <div className='row ms-3'>
        <div className='col-9'>
          <div className='row'>
            {
              fakedata.map(({ id, name, age, experience, role, amount }) => (
                <div key={id} className="card col-4">
                  <img src={image} className="card-img-top w-100" alt="web developer" />
                  <div className="card-body">
                    <h5 className="card-title">Name: {name} </h5>
                    <p className="card-text"> <strong> Role: {role} </strong> </p>
                    <p className="card-text"> <strong> Amount: {amount}k </strong> </p>
                    <p className="card-text"> <strong> Experience: {experience} years </strong> </p>
                    <p className="card-text"> <strong> Age: {age} years </strong> </p>
                    <button onClick={() => handleAddAmount(name, amount)} className="button-style"><i className="fa fa-save"></i> Add To Team</button>
                    <div className=" App-logo">
                      <a href="https://www.facebook.com/rana72989/"><i className="fa fa-facebook"></i></a>
                    </div>

                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='row'>
            {
              person.map((p, i) => (
                <div className='d-flex my-2 border' key={i}>
                  <img src={image} className="w-25" alt="web developer" />

                  <div>
                    <p>Name: {p.name}</p>
                    <p>Amount: {p.amount}k</p>
                  </div>
                </div>
              ))
            }
          </div>

          <h4 className="text-secondary ">Total Amount: {totalAmout}k </h4>
        </div>
      </div>
    </div >
  );
}

export default App;
