import React from 'react'
import axios from 'axios'

const CaseStudy = ({ caseStudyData }) => {
  return (
    <div>
      <h1>{caseStudyData?.attributes?.title}</h1>
      <p>{caseStudyData?.attributes?.content}</p>
    </div>
  )
}

export default CaseStudy

export async function getStaticProps({ params }) {
  const caseStudyRes = await axios.get(
    `http://localhost:1337/api/casestudies/${params.id}`
  )

  return {
    props: {
      caseStudyData: caseStudyRes.data,
    },
  }
}
