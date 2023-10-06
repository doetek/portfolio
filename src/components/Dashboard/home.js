
// import { useRef, useState } from 'react';
// import Axios from 'axios';

// // Make sure you have the correct URL here
// Axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN || 'http://localhost:5000'; 

// const Home = () => {
//   const form = useRef();

//   const [name, setName] = useState('');
//   const [url, setUrl] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState('');

//   const submitPortfolio = async (e) => {
//     e.preventDefault();

  
//     try {
//       const { data } = await Axios.post('/api/portfolios/portfolio', {
//         name,
//         url,
//         description,
//         image,
//       });
  
      
//     } catch (err) {
//       // showToast(getError(err), 'error');
//       // Handle server errors here if needed
//     // } finally {
//     //   setIsLoading(false); // Stop loading spinner
//     // }
//   };

//   }
  

//   return (
//     <div className="dashboard">
//       <form ref={form} onSubmit={submitPortfolio}>
//         <p>
//           <input type="text" placeholder="Name"
//           onChange={(e) => setName(e.target.value)} />
//         </p>
//         <p>
//           <textarea placeholder="Description" 
//            onChange={(e) => setDescription(e.target.value)}/>
//         </p>
//         <p>
//           <input type="text" placeholder="Url"
//            onChange={(e) => setUrl(e.target.value)} />
//         </p>
//         <p>
//           <input type="file" name="image" placeholder="Image"
//            onChange={(e) => setImage(e.target.value)} />
//         </p>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Home;

import { useRef, useState } from 'react';
import Axios from 'axios';

// Make sure you have the correct URL here
Axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN || 'http://localhost:5000'; 

const Home = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // Change the initial state of image to null
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const submitPortfolio = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('url', url);
      formData.append('description', description);
      formData.append('image', image); // Append the image file to the formData

      const { data } = await Axios.post('/api/portfolios/portfolio', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to 'multipart/form-data'
        },
      });

      setSuccess('Portfolio added successfully'); // Set success message on successful response
      // Handle the response here if needed
    } catch (err) {
      console.error('Error:', err);
      setError('Error adding portfolio'); // Set error message on server error
      // Handle server errors here if needed
    }
  };

  return (
    <div className="dashboard">
      {error && <div className="error">{error}</div>} {/* Display error message if error exists */}
      {success && <div className="success">{success}</div>} {/* Display success message if success exists */}
      <form ref={form} onSubmit={submitPortfolio}>
        <p>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </p>
        <p>
          <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        </p>
        <p>
          <input type="text" placeholder="Url" onChange={(e) => setUrl(e.target.value)} />
        </p>
        <p>
          <input type="file" name="image" placeholder="Image" onChange={(e) => setImage(e.target.files[0])} /> {/* Use e.target.files[0] to access the file object */}
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;

