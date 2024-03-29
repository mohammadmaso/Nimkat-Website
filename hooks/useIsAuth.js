import { useMeQuery } from "../graphql/generated/types";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useIsAuth(props) {
  const { data, loading } = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !data?.me) {
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};

