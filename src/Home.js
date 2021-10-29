import React, { useState } from "react";
import Story from "./Story";

const Home = () => {
  const [stories, setStories] = useState([]);
  Story()
  .then(story => {
    setStories(story);
  })

  let number  = 1;
  
  return <React.Fragment>
          {
            stories.map(({ data: story }) => (
              <>
                <tr className="athing" id="28976526">
                  <td className="title" valign="top" align="right">
                    <span className="rank">{number++}.</span>
                  </td>
                  <td className="votelinks" valign="top">
                    <center>
                      <a id="up_28976526" href="vote?id=28976526&amp;how=up&amp;goto=news">
                        <div className="votearrow" title="upvote"></div>
                      </a>
                    </center>
                  </td>
                  <td className="title">
                    <a href="#" className="titlelink">{story.title}</a>
                    <span className="sitebit comhead"> (<a href="{url}"><span className="sitestr">{story.url}</span></a>)</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td class="subtext">
                    <span class="score" id="score_28976526">{story.score} points</span> by <a href="user?id=rdpintqogeogsaa" class="hnuser">{story.by}</a>
                    <span class="age" title="2021-10-24T10:19:21"><a href="item?id=28976526"> {story.time}</a></span>
                    <span id="unv_28976526"></span> | <a href="hide?id=28976526&amp;goto=news">hide</a> | <a href="item?id=28976526">{story.descendants}&nbsp;comments</a>
                  </td>
                </tr>
            </>
            ))
          }
        </React.Fragment>
}

export default Home;