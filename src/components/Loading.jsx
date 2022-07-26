import loadingGif from './../assets/loading.gif'

const Loading = () => {
  return (
    
      <div className='d-flex justify-content-center align-items-center'>
        <h1><img className='imgDiv' src={loadingGif} alt="img" /></h1>
      </div>
    
  );
}

export default Loading