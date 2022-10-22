import {useRouter} from "next/router";
import {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import Seo from "../../components/Seo";

type MovieDetailParams = [string, string] | [];

const Detail = ({ params } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [title, id] = (router.query.params || []) as MovieDetailParams;
  return (
    <div>
      <Seo title={title || ""} />
      <h4>{title || "Loading...."}</h4>
    </div>
  )
}

export default Detail;

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const params = ctx.params;
  return {
    props: {
      params
    },
  }
}