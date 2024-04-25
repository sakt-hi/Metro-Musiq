import React from 'react'


const Home = () => {

   const schoolList = [
        {schoolId:'1001',schoolName:'ABC Matric Hr. Sec. School', schoolArea:'Pudhuvayal'},
        {schoolId:'1002',schoolName:'EFG Matric Hr. Sec. School', schoolArea:'Sekkalai'},
        {schoolId:'1003',schoolName:'PQR Matric Hr. Sec. School', schoolArea:'Managiri'},
        {schoolId:'1003',schoolName:'XYZ Matric Hr. Sec. School', schoolArea:'Ariyakudi'},
   ] 

   function extractFirstLetters(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(' ');
  
    // Extract the first letter of the first two words
    const firstLetters = words.slice(0).map(word => word.charAt(0));
  
    // Concatenate the first letters into a single string
    const result = firstLetters.join('');
  
    // Return the concatenated string
    return result;
  }
    
  return (
    <div className='home-container'>
        <div className="school-header">
            <p className='page-title'>Schools List</p>
            <div className="school-controls">
                <input type="text" placeholder='Search in schools list' name="" id="" />
                <button className='primary-button'>
                    <span class="material-symbols-outlined">add</span>
                    Add New School
                </button>
            </div>
        </div>
        <div className="list-wrap">
            {schoolList.map((item)=>(
                <div key={item.schoolId} className='school-list'>
                    <h2>{extractFirstLetters(item.schoolName)}</h2>
                    <li>{item.schoolName}</li>
                    <li>{item.schoolArea}</li>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home