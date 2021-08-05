import React from 'react';
import './Left.css';

const blogMock = {
    "_id":
    {
        "$oid":"6108d96ef828fb3e382036fc"
    },
    "views":
    {
        "$numberInt":"0"
    },
    "image_url":"http://placeimg.com/640/480",
    "tags":["Kotlin"],
    "read_time": 9,
    "title":"National Implementation Liaison",
    "preface":"Laborum corrupti earum occaecati qui non quos quia non. Et et et voluptates itaque quia numquam at. Ab deserunt quia voluptatem repellat eius qui. Cumque vel ut dolore sunt ut consequatur dolore. Tenetur et nam atque natus perspiciatis unde et optio sed.",
    "content":[
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
    "comments":[],
    "createdAt":{
        "$date":{
            "$numberLong":"1627969905777"
        }
    },
    "updatedAt":{
        "$date":{
            "$numberLong":"1627969905777"
        }
    },
    "__v":{
        "$numberInt":"0"
    }
}

const Left = () => {
    return (
        <div className="ml4 pointer">
            <img className="br4" src="https://www.skrill.com/fileadmin/_processed_/1/7/csm_Online_poker_setup_header_7b6e83d4a6.jpg" width="100%" alt={"not visible"} />
            <div>
                <h1 style={{
                    textAlign: "left", marginBottom: "10px"
                }}> Why Is It Essential To Have Responsive Web Design </h1>
                < div className="f6 light-silver" style={{ textAlign: "left", fontWeight: "bold" }}> 2 DAYS AGO • 2 MIN AGO • <span className="blue"> WEB DESIGN </span> </div>
                <p className="f4 pt2" style={{
                    textAlign: "left"
                }}>Every website has a different purpose and thus requires specific characteristics. As the purpose of a website os different, the design requirement is also different. For example, a law firm's website will not</p>
            </div>
        </div >
    );
}

export default Left;