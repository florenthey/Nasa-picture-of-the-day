import { QueryClient, QueryClientProvider } from "react-query";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Layout from "@components/core/Layout";

export default function App({ Component, pageProps }: any) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}
