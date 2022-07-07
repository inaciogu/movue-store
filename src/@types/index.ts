export interface IMovie {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  popularity: number;
  release_date: string;
}

export interface ICartItem extends IMovie {
  quantity: number;
}
