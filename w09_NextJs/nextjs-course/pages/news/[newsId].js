// our-domain.com/news/something-important

import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send fetch to backend with newsId

  return <h1>The Detail Page</h1>;
}
