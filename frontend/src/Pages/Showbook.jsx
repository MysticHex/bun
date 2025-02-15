import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Spinner from '../../components/Spinner';
import BackButton from '../../components/BackButton';
import { useParams } from 'react-router-dom';

const Showbook = () => {
  const [books,setBooks]=useState([]);
  const [loading,setLoading]=useState(false);
  const { id }=useParams();

  useEffect(()=>{
    setLoading(true);
    axios
    .get(`http://localhost:5500/books/${id}`)
    .then((response)=>{
      setBooks(response.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    })
    },[id])

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner/>
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Id</span>
            <span>{books._id}</span> 
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">title</span>
            <span>{books.title}</span> 
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">author</span>
            <span>{books.author}</span> 
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">publish year</span>
            <span>{books.publishYear}</span> 
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Created At</span>
            <span>{new Date(books.createdAt).toString()}</span> 
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500 ">Update At</span>
            <span>{new Date(books.updatedAt).toString()}</span> 
          </div>
        </div>
      )}
    </div>
  )
}

export default Showbook