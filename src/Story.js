import axios from 'axios';

const Story = async () => {
  try {
    const { data: idStory } = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`);
    const stories = await Promise.all(idStory.slice(0, 30).map(getDetailStory));
    return stories;
  } catch {
    console.log("Error");
  }
}

const getDetailStory = async (id) => {
  try {
    const story = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    return story;
  } catch {
    console.log("Error");
  }
}

export default Story;