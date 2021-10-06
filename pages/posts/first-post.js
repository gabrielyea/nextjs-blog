import Link from "next/link"
import Head from "next/dist/shared/lib/head"
import Layout from "../../components/layout"

export default function FirstPost(){
  return (
    <Layout>
    <Head>
      <title>
        First Post
      </title>
    </Head>
    <hi>First Post</hi>
    <h2>
      <Link href="/">
        <a> Back to home </a>
      </Link>
    </h2>
    </ Layout>
  )
}