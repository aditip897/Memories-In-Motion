import "./TitleForm.css";

import { useNavigate } from 'react-router-dom';

export default function TitleForm() {

  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Scrapbook');
    };


  return (
    <div class="form-container">
      <form class="register-form">
        <input
          id="title"
          class="form-field"
          type="text"
          placeholder="Enter your scrapbook titile"
          name="Title"
        />
       
        <input
          id="Journal"
          class="form-field"
          type="text"
          placeholder="Enter a few words to describe your thoughts"
          name="journal"
        />
        
       
      
        <button class = 'form-field' onClick={handleClick} >
            Create a New Memory Book
        </button>



      </form>
    </div>
  );
}