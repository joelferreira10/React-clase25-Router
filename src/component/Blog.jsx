import React from "react";
import img1 from './img/carrousel-2.jpg'
import img2 from './img/meme-2.jpg'
function Blog(){
    return(
        <div className="container-fluid bg-warning p-3">
            <div className="px-2 py-3 bg-light">
                <h1 className="h1">Episodio especial "Noche de brujas VII" Octubre 27 1966</h1>
                <img src={img1}  width="500px"height="300px" alt="..." />
                <p className="p ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolor eos dolorem veniam tempore ipsa quas in quae accusamus delectus sequi, esse sit expedita iusto praesentium blanditiis debitis aut ipsam minima, perferendis impedit. Vel corporis consequuntur aliquid similique optio. Hic animi perspiciatis perferendis nisi eum minus, facilis obcaecati vel voluptates veritatis velit, mollitia quisquam maxime nihil assumenda nam sint. Doloribus, deleniti inventore. Officiis, hic ipsa! Tempore beatae, nam quod odit possimus placeat vero tenetur aut eum quia asperiores nostrum numquam obcaecati at. Officia, cum cumque earum, amet sunt explicabo doloremque consequuntur, accusantium quisquam magnam excepturi ea. Odio, qui saepe cupiditate perferendis quo facere harum quaerat, in ea a sequi deserunt reiciendis tenetur voluptates rerum recusandae. Eveniet illo at reiciendis quis.</p>
                <h1 className="h1">Episodio "Lucha por la educacion" Abril 16 1995</h1>
                <img src={img2} width="500px"height="300px" alt="..." />
                <p className="p ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolor eos dolorem veniam tempore ipsa quas in quae accusamus delectus sequi, esse sit expedita iusto praesentium blanditiis debitis aut ipsam minima, perferendis impedit. Vel corporis consequuntur aliquid similique optio. Hic animi perspiciatis perferendis nisi eum minus, facilis obcaecati vel voluptates veritatis velit, mollitia quisquam maxime nihil assumenda nam sint. Doloribus, deleniti inventore. Officiis, hic ipsa! Tempore beatae, nam quod odit possimus placeat vero tenetur aut eum quia asperiores nostrum numquam obcaecati at. Officia, cum cumque earum, amet sunt explicabo doloremque consequuntur, accusantium quisquam magnam excepturi ea. Odio, qui saepe cupiditate perferendis quo facere harum quaerat, in ea a sequi deserunt reiciendis tenetur voluptates rerum recusandae. Eveniet illo at reiciendis quis.</p>
            </div>
        </div>
    );
}

export default Blog;