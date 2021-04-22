export module Models {

  export class Anime {

    constructor (

      public mal_id: number,
      public url: string,
      public image_url: string,
      public title: string,
      public airing: boolean,
      public synopsis: string,
      public type: string,
      public episodes: number,
      public score: number,
      public members: number,
      public rated: string,
      public start_date?: Date,
      public end_date?: Date,

    ) {}

  }

  export class Animes {

    constructor (

      public request_hash: string,
      public request_cached: boolean,
      public request_cache_expiry: number,
      public results: Anime[],
      public last_page: number,

    ) {}

  }

}

export default Models;
