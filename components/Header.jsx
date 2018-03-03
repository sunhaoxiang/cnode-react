import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/topic-list">
          <a style={linkStyle}>Topic</a>
        </Link>
        <Link href="/topic-detail">
          <a style={linkStyle}>Detail</a>
        </Link>
    </div>
)

export default Header
