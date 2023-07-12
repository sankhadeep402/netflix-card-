import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";





function App (){
    return(

        <>

        <h1 className="heading_style"> List of top 3 Netflix series in 2022</h1>
        <Card
    
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].links}
        />

        <Card
     imgsrc={Sdata[1].imgscr}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
        />

        <Card
             imgsrc={Sdata[1].imgscr}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
        />

        </>
    );
}

export default App;