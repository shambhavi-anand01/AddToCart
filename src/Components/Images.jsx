import image from './image/image.jpg'

function Images(){
    return(
        <div>
            <h1>My Favorite Image</h1>
            < img src={image} 
                 alt="sample"
                 style={{ width: '300px', borderRadius: '10px' }} />
        </div>
    )

}
export default Images