import { Genre } from "./genre"
import { Production_Companies } from "./production-companies";
import { Production_Countries } from "./production-countries";
import { Spoken_Languages } from "./spoken-languages";

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {};
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: Production_Companies[];
  production_countries: Production_Countries[];
  release_date: string;
  revenue: 0;
  runtime: 105;
  spoken_languages: Spoken_Languages [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: number
}
