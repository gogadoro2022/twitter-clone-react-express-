export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    const response = await fetch(`${this.baseURL}/tweets${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status !== 200) {
      console.log("뭔가 잘못됌");
      throw new Error();
    }
    return data;
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/tweets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, username: "ellie", name: "Ellie" }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      console.log("에러발생");
      throw new Error();
    }
    return data;
  }

  // 나중에 핀더북 게시물 작성할때 하게될 내용들

  async deleteTweet(tweetId) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 204) {
      throw new Error();
    }
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });
    const data = response.json();
    if (response.status !== 202) {
      throw new Error();
    }
    return data;
  }
}
