import React from 'react';
import './Left.css';

const blogMock = [{
    _id:
    {
        "$oid":"6108d96ef828fb3e382036fc"
    },
    views:0,
    image_url:"http://placeimg.com/640/480",
    tags:["Kotlin"],
    read_time: 9,
    title:"National Implementation Liaison",
    preface:"Laborum corrupti earum occaecati qui non quos quia non. Et et et voluptates itaque quia numquam at. Ab deserunt quia voluptatem repellat eius qui. Cumque vel ut dolore sunt ut consequatur dolore. Tenetur et nam atque natus perspiciatis unde et optio sed.",
    content:[
    {
        "_id":{
            "$oid":"6108d96ef828fb3e382036fd"
        },
        "image":"http://placeimg.com/640/480",
        "para":"Aut odio ratione non maxime eius aperiam voluptas. Ex veritatis eius ut deserunt distinctio delectus ipsum. Delectus incidunt fugiat voluptas qui dolor culpa distinctio. Aliquid quos distinctio rem molestias dolor ut perferendis. Ex dolores ratione voluptas. Quis eum nemo aut."
    },
    {
        "_id":{
            "$oid":"6108d96ef828fb3e382036fe"
        },
        "image":"http://placeimg.com/640/480",
        "para":"Est repellat quia consequatur laborum necessitatibus. Reprehenderit sed hic. Placeat dolorem porro quisquam laborum ipsam. Quas minus maxime voluptatibus hic illo quaerat animi dolore ducimus."
    },
    {
        "_id":{
            "$oid":"6108d96ef828fb3e382036ff"
        },
        "image":"http://placeimg.com/640/480",
        "para":"Nulla nulla expedita laboriosam labore assumenda repellendus in rerum maiores. Dignissimos itaque tenetur aspernatur fugiat. Commodi voluptatem minima quia et modi deserunt occaecati est. Maiores a temporibus dolorum est dolorem rerum quam ut alias. Quia magni sequi dolore odio animi culpa accusantium est."
    },
    {
        "_id":{
            "$oid":"6108d96ef828fb3e38203700"
        },
        "image":"http://placeimg.com/640/480",
        "para":"Veniam amet vel voluptatem. Iste sequi voluptatibus dicta dolores non. Est voluptas nesciunt est. Nisi numquam accusantium libero aliquid quia hic accusamus."
    },
    {
        "_id":
        {
            "$oid":"6108d96ef828fb3e38203701"
        },
        "image":"http://placeimg.com/640/480",
        "para":"Voluptatibus aperiam maxime. Repellat nisi expedita non fuga in sint. Voluptatem quo et hic aperiam aut est sint."
    },
    {
        "_id":
        {
            "$oid":"6108d96ef828fb3e38203702"
        },
        "image":"http://placeimg.com/640/480",
        "para":"Voluptatum ut sit rerum perferendis optio adipisci. Perferendis qui ipsam commodi saepe aut sit. Nihil possimus ab et eius magni."
    }
    ],
    comments:[],
    createdAt:"2020-03-15T05:44:10.338Z"
}];

const Left = () => {
    return (
        <div className="ml4 pointer">
            {

            blogMock.map((item,index)=>{
                var time=item.createdAt.split('T');
                 var parts=time[0].toString().split('-');
                 var mydate = new Date(parts[0],parts[1] - 1,parts[2]);
                return(
                    <div>
                        <img className="br4" src={item.image_url} width="100%" alt={"not visible"} />
                        <div>
                            <h1 style={{
                                textAlign: "left", marginBottom: "10px"
                            }}> {item.title} </h1>
                             <h5 className="light-silver tl">{mydate.toDateString().toUpperCase()} •  {item.read_time} MIN READ • <span className="f" style={{color:"#00bbff"}}>{item.tags[0]}</span></h5>
                            <p className="f4 pt2" style={{
                                textAlign: "left"
                            }}>{item.preface}</p>
                        </div>
                    </div>
                )
            })
            }
        </div >
    );
}

export default Left;