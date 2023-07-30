import React from 'react';
import ImgUpload from './ImgUpload';
import Edit from './edit';
import Profile from './Profile'
import Name from './name';
import Status from './status';
import './uplodingimage.css'
import ReactDOM from 'react-dom'
import Navbar from './navbar'


  class CardProfile extends React.Component {
    state = {
      file: '',
      imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
      name:'',
      status:'',
      active: 'edit'
    }
  
    photoUpload = e =>{
      e.preventDefault();
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
    }
    editName = e =>{
      const name = e.target.value;
      this.setState({
        name,
      });
    }
    
    editStatus = e => {
      const status = e.target.value;
      this.setState({
        status,
      });
    }
    
    handleSubmit= e =>{
      e.preventDefault();
      let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
      this.setState({
        active: activeP,
      })
    }
    
    render() {
      const {imagePreviewUrl, 
             name, 
             status, 
             active} = this.state;
      return (
        <div className='divProfil' >
          {(active === 'edit')?(
            <Edit onSubmit={this.handleSubmit}>
              <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl}/>
             
            </Edit>
          ):(
            <Profile 
              onSubmit={this.handleSubmit} 
              src={imagePreviewUrl} 
             />)}
             <div Style={"margin-top: 10%;"} >
             <Navbar/>
             </div>
          
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <CardProfile/>,
    document.getElementById('root')
  )
  export default CardProfile;