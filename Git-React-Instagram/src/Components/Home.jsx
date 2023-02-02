import React from "react";
import "./css/Home.css";
import UserStory from "./UserStory";
class Home extends React.Component {
  render() {
    return (
      <div className="section-home">
        <div class="ui icon input" style={{width: '300px',marginTop : '30px'}}>
  <input type="text" placeholder="Search..." fdprocessedid="b4r55o" />
  <i class="circular search link icon"></i>

</div>

         <h2>STORIES</h2>
      <div className="group">
      
        <UserStory name="niharika"
         img="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg"/>
        <UserStory name="Saanvika" 
        img="https://media.istockphoto.com/id/1220976906/photo/beautiful-smiling-woman-portrait-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=MuBU_PJlZJBkVx1QA-c4lUaMH0P8XMNl-srFIIKvCCk="/>
        <UserStory name="Aadvitha"
         img="https://media.istockphoto.com/id/1134068203/photo/glowing-face-of-beautiful-girl.jpg?b=1&s=170667a&w=0&k=20&c=zNGwqlBynEUNmBwlmIG8gQk0Gx_1-Edh1tSDvSFbmE0="/>
        <UserStory name="Aparna" 
        img="https://media.istockphoto.com/id/1022159730/photo/beautiful-cute-indian-girl.jpg?b=1&s=170667a&w=0&k=20&c=_1RJRSkyGZwc-c3gxGtmj9uUQbCTg3Op895x5M7Km3Q="/>
        <UserStory name="Padma sri"
         img="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg"/>
        <UserStory name="Charitha" 
        img="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg"/>
        <UserStory name="niharika"
         img="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg"/>
         <UserStory name="Srija"
         img="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056__340.jpg"/>
         <UserStory name="SSR" img="https://media.istockphoto.com/id/1335722061/photo/young-man-checking-skin-condition.jpg?b=1&s=170667a&w=0&k=20&c=j36R7sAxsHRuF4Co0-GSqQUaRWBqFNttO0fdysfLZ8Q="/>
         </div>
         <h2>FEED</h2>
          <div className="SectionImages">
           <img src="https://cdn.pixabay.com/photo/2020/01/31/05/53/cut-out-4807171__340.jpg" alt="" />
           <img src="https://media.istockphoto.com/id/970061166/photo/vegetables-and-salad-in-decorative-vertical-garden-and-raised-bed.jpg?b=1&s=170667a&w=0&k=20&c=TLqRybkVMD2CNsogfjw_Lt3iJthFr4hiTm5x7zJ3KEw=" alt="" />
          </div>



          <div class="ui large feed">
  <div class="event">
    <div class="label">
      <img src="https://cdn.pixabay.com/photo/2020/01/31/05/53/cut-out-4807171__340.jpg" />
    </div>
    <div class="content">
      <div class="summary">
        <a class="user">
          Elliot Fu
        </a> added you as a friend
        <div class="date">
          1 Hour Ago
        </div>
      </div>
      <div class="meta">
        <a class="like">
          <i class="like icon"></i> 4 Likes
        </a>
      </div>
    </div>
  </div>
  <div class="event">
    <div class="label">
      <i class="pencil icon"></i>
    </div>
    <div class="content">
      <div class="summary">
        You submitted a new post to the page
        <div class="date">
          3 days ago
        </div>
      </div>
      <div class="extra text">
        I'm having a BBQ this weekend. Come by around 4pm if you can.
      </div>
      <div class="meta">
        <a class="like">
          <i class="like icon"></i> 11 Likes
        </a>
      </div>
    </div>
  </div>
  <div class="event">
    <div class="label">
      <img src="https://cdn.pixabay.com/photo/2016/08/22/05/34/little-girl-1611389__340.jpg" />
    </div>
    <div class="content">
      <div class="date">
        4 days ago
      </div>
      <div class="summary">
        <a>Helen Troy</a> added <a>2 new illustrations</a>
      </div>
      <div class="extra images">
        <a><img src="https://cdn.pixabay.com/photo/2016/08/22/07/13/siamese-1611434__340.jpg" /></a>
        <a><img src="https://cdn.pixabay.com/photo/2017/08/16/23/54/daisy-2649558_960_720.jpg" /></a>
      </div>
      <div class="meta">
        <a class="like">
          <i class="like icon"></i> 1 Like
        </a>
      </div>
    </div>
  </div>
</div>
          </div>

    
    );
  }
}
export default Home;
