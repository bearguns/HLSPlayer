export class Video {

  streamSrc: string;
  title: string;
  description: string;
  author: string;

  constructor(streamSrc: string, title: string, description: string, author: string) {
    this.streamSrc = streamSrc;
    this.title = title;
    this.description = description;
    this.author = author;
  }
}
