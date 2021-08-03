import "./YouMightLikeSection.css";
import "tachyons";
const dataArray = [
    {
        imgUrl: "https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/06/cover-.jpg",
        heading: "The most Complex & Innovative Admin from Creative Tim - Soft UI Dashboard PRO.",
        currentDate: "JUN 22, 2021"
    }, 
    {
        imgUrl: "https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/05/color-psychology-1.jpg",
        heading: "How to Use Color Psychology to Improve Your Website Design",
        currentDate: "MAY 20, 2021"
    },
    {
        imgUrl: "https://www.creative-tim.com/blog/content/images/size/w960/wordpress/2021/05/kelly-sikkema-gcHFXsdcmJE-unsplash.jpg",
        heading: "10 UX Mistakes to Avoid When Designing an App",
        currentDate: "MAY 06, 2021"
    }
]

const YouMightLikeSection = () => {

    return ( 
        <section className="like-section">  
            <h3 className="like-section-heading">YOU MIGHT ALSO LIKE...</h3> 
            <div className="like-section-card-container">
                {
                    dataArray.map((item,index )=>{
                        return (
                            <div className="like-section-card " key={index}>
                                <div className="">
                                  <img className="like-section-card-image" src={item.imgUrl} alt="not visible" />                                
                                </div> 
                                <div className="like-sectiion-card-text-content">
                                    <p className="like-sectiion-card-heading">{item.heading}</p>
                                    <p className="like-sectiion-card-date">{item.currentDate}</p>
                                </div> 
                            </div>
                        )
                    })
                }
            </div>     
       </section> 
    )  
}

export default YouMightLikeSection;