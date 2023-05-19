import { Head } from "@inertiajs/react"
import Layout from "./Layout"

export default ({ users, errors }) => {

  console.log(errors)
  return (
    <Layout>
      <div>
        <Head title="Users" />
        <h1>List users</h1>
        <ul>
          {
            users.map((user, i) => <li key={i}>{user}</li>)
          }
        </ul>
      </div>
    </Layout>
  )
}