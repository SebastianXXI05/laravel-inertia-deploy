import { Link } from "@inertiajs/react"

export default ({ children }) => {
  return (
    <div>
      <header>
        <h2>Logo</h2>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
      { children }
    </div>
  )
}