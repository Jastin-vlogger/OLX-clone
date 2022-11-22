import React,{useEffect,useState,useContext} from 'react';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FireBaseContext';

import './View.css';
function View() {
  const [userDetail,setuserDetail] = useState()
  const {postDetails} = useContext(PostContext)
  console.log(postDetails);
  const {Firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = postDetails
    console.log(userId);
    Firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(element => {
        setuserDetail(element.data())
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDetail && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetail.username}</p>
          <p>{userDetail.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
