export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="status-left">
          <span className="status-item status-branch">⎇ main</span>
          <span className="status-item">carlos@dev:~</span>
          <span className="status-item">● 0 errors</span>
        </div>
        <div className="status-right">
          <span className="status-item">JSX</span>
          <span className="status-item">React + Vite</span>
          <span className="status-item">UTF-8</span>
          <span className="status-item">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
