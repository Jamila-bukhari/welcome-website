const Gallery =()=>{
    const s1 = {
            "width": "100%",
            "height": "150px",
           "background-color": "#ff0000",
            
            "overflow": "visible",
            "white-space":"nowrap"
        };

    const s2 =  {
        "display": "inline-block",
        "margin":"10px"
    }    
    const s3 ={
        "height":"100px"
    }
    
    return(


<div id="carousel" className={s1}>
    <div class="slide" style={s2}>
        <img src="https://www.consultsynergy.ae/wp-content/uploads/2020/02/project-management-as-a-service-in-dubai-1024x578.jpg"style={s3}/>
    </div>
    <div class="slide"style={s2}>
        <img src="https://ccprojectservices.eu/resources/13dce58305349c/2ea7b13785.jpg"style={s3}/>
    </div>
    <div class="slide"style={s2}>
        <img src="https://www.alareebict.com/wp-content/uploads/2020/03/Project-Management.jpg"style={s3}/>
    </div>
    <div class="slide"style={s2}>
        <img src="https://lancaster.unl.edu/4h/images/TeenCouncilCommunityService.jpg"style={s3}/>
    </div>
   
</div>

    )
}
export default Gallery