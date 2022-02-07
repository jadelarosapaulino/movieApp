import { movie } from "./movie";

export class Generic {
  page: number = 1;
  results: movie[] = [];
  total_pages: number = 0;
  total_results: number = 0;
}
