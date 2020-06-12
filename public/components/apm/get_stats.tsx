import { fetchSoon } from "../search_bar/fetch_results";


export const getStats = {
  getTotalThroughput: (set) => {
    fetchSoon('select Sum(bytes) from kibana_sample_data_logs', 'SQL',
      (json) => {
        set(json.datarows[0][0])
      }
    );
  }
}