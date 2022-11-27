export default class TweetService {
  tweets = [
    {
      id: 1,
      text: '트위터 클론코딩중...',
      createdAt: '2022-05-09',
      name: 'Geon',
      username: 'godo',
      url: 'https://blog.kakaocdn.net/dn/YtViG/btqYfXsu2Nw/FPDeY2z417qqkus2uneEY1/img.jpg',
    },
  ];

  async getTweets(username) {
    return username
      ? this.tweets.filter((tweet) => tweet.username === username)
      : this.tweets
  }

  async postTweet(text) {
    const tweet = {
      id: Date.now(),
      createdAt: new Date(),
      name: 'Ellie',
      username: 'ellie',
      text,
    };
    this.tweets.push(tweet);
    return tweet;
  }

  // 나중에 핀더북 게시물 작성할때 하게될 내용들

  async deleteTweet(tweetId) {
    this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
  }

  async updateTweet(tweetId, text) {
    const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      throw new Error('tweet not found');
    }
    tweet.text = text;
    return tweet;
  }
}