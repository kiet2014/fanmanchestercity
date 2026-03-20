import type React from 'react'
import './App.css'

const subCities = ['#PepTactics', '#HaalandGoals', '#TransferRumors', '#AcademyGems']

const menu = [
  { icon: '🧠', label: 'Thảo luận', badge: 'Live' },
  { icon: '🎛️', label: 'Quản lý', badge: 'Sa bàn' },
  { icon: '💸', label: 'Thị trường', badge: '12 mới' },
  { icon: '📡', label: 'Trực tiếp', badge: 'Matchday' },
]

const posts = [
  {
    title: 'Pep đảo cánh phút 62 mở toang half-space',
    flair: 'Tactical Genius',
    upvotes: 482,
    comments: 118,
    type: 'video',
    media: 'Haaland bật cao đánh đầu • Auto-play',
    sub: '#PepTactics',
  },
  {
    title: 'Album: Check-in Etihad đêm Derby',
    flair: 'Local Cityzen',
    upvotes: 210,
    comments: 67,
    type: 'gallery',
    media: '12 ảnh • vuốt để xem',
    sub: '#Matchday',
  },
  {
    title: 'Audio bình luận 5s: GOAL FOR THE CITYZENS!',
    flair: 'Blue Voice',
    upvotes: 156,
    comments: 33,
    type: 'audio',
    media: 'Audio snippet',
    sub: '#LiveThread',
  },
]

const ticker = [
  'Foden +5% Blue Money',
  'Rodri ký mới 2029 • hệ số lương +1.2',
  'Akanji clean sheet xG chain +0.3',
  'KDB trở lại team tập full',
  'Haaland header prop mở ở 1.85',
]

const events = [
  { minute: "12'", detail: 'GOAL — Haaland (header, assist KDB)' },
  { minute: "34'", detail: 'Sub: Stones ↔ Akanji' },
  { minute: "55'", detail: 'xG Live: 1.42 vs 0.23' },
]

const leaderboard = [
  { name: 'SkyBlueWhale', value: '92.4k BM' },
  { name: 'EtihadTycoon', value: '88.1k BM' },
  { name: 'PepLabrador', value: '80.3k BM' },
]

const quests = [
  'Xem highlight mới • +50 Blue Money',
  'Bình luận 3 chủ đề nóng • +25',
  'Dự đoán: Haaland ghi bàn bằng đầu • +70 nếu đúng',
]

const tacticalLinks = [
  'Kéo KDB - Haaland để sáng liên kết',
  '3-2-5 rest-defense sẵn sàng',
  'Replay bàn thắng 3D sau mô phỏng',
]

const wallpaperSchedule = [
  'Matchday-2h: Video South Stand khói xanh',
  'Post-win: Gradient Sky Blue + pháo giấy',
  'Derby: Chuyển sang “Rực lửa” auto',
]

function App() {
  return (
    <div className="page">
      <div className="video-haze" />

      <div className="grid">
        <section className="hero card highlight">
          <div className="hero-left">
            <h1>Digital Etihad Empire</h1>
            <p className="subline">
              The Blue Thread · City Tycoon · Tactical Board · Cinematic Night Mode
            </p>
          </div>
          <div className="hero-actions">
            <button className="btn">Bắt đầu thảo luận</button>
            <button className="btn secondary">Mở quản lý đội</button>
          </div>
        </section>

        {/* Command Center */}
        <div className="column">
          <div className="card highlight">
            <div className="card-title">
              <span>Command Center</span>
              <span className="pill">Profile</span>
            </div>
            <div className="profile">
              <div className="avatar" />
              <div>
                <div style={{ fontWeight: 700 }}>Elite Cityzen</div>
                <div style={{ color: '#a9c7ff', fontSize: 14 }}>Blue Money: 7,420</div>
                <div className="progress" style={{ '--value': '68%' } as React.CSSProperties}>
                  <span />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <span>Menu động</span>
              <span className="pill">Hover</span>
            </div>
            <div className="menu">
              {menu.map((item) => (
                <div key={item.label} className="menu-item">
                  <span>{item.icon} {item.label}</span>
                  <span className="badge">{item.badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <span>Top Sub-Cities</span>
              <span className="pill">Hot</span>
            </div>
            <div className="list">
              {subCities.map((sub) => (
                <div key={sub} className="list-item">
                  <span className="chip">#{sub.replace('#', '')}</span>
                  <span style={{ fontWeight: 600 }}>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <span>Nhiệm vụ hôm nay</span>
              <span className="pill">Quest</span>
            </div>
            <div className="list">
              {quests.map((q) => (
                <div key={q} className="list-item">
                  <span>✅</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stadium Feed */}
        <div className="column">
          <div className="card highlight">
            <div className="card-title">
              <span>The Stadium Feed</span>
              <span className="pill">Live thread</span>
            </div>
            <div className="feed">
              {posts.map((post) => (
                <div key={post.title} className="card" style={{ padding: 14 }}>
                  <div className="post">
                    <div className="vote">{post.upvotes}</div>
                    <div>
                      <div style={{ fontWeight: 700 }}>{post.title}</div>
                      <div style={{ color: '#8dbbf5', fontSize: 14 }}>
                        {post.sub} • {post.comments} bình luận
                      </div>
                      <div className="media-tile">
                        <div className="media-caption">
                          {post.media} · {post.type.toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <div className="flair">{post.flair}</div>
                  </div>
                  <div className="ticker">
                    <div className="ticker-line">
                      {ticker.concat(ticker).map((item, idx) => (
                        <span key={`${item}-${idx}`}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <span>Thẻ cầu thủ nổi bật</span>
              <span className="pill">Mua ngay</span>
            </div>
            <div className="board">
              {['Phil Foden • Iconic', 'KDB • Gold', 'Kompany • Iconic', 'Haaland • Gold', 'Aguero • Iconic', 'Dias • Silver'].map((p) => (
                <div key={p} className="menu-item" style={{ borderStyle: 'dashed' }}>
                  <span>{p}</span>
                  <span className="badge">+5%</span>
                </div>
              ))}
            </div>
            <div className="notice" style={{ marginTop: 12 }}>
              Upvote đổi thành Blue Money → bấm “Mua ngay” mà không rời feed.
            </div>
          </div>

          <div className="card highlight">
            <div className="card-title">
              <span>The Tactical Board 3D</span>
              <span className="pill">Drag & Drop</span>
            </div>
            <div className="glass">
              <div className="link-line">🟦 Sa bàn Etihad ảo • kéo thẻ vào vị trí</div>
              <div className="link-line">💡 Liên kết KDB ↔ Haaland sáng rực</div>
              <div className="link-line">🎞️ Replay bàn thắng 3D sau mô phỏng</div>
            </div>
            <div className="board">
              {tacticalLinks.map((item) => (
                <div key={item} className="list-item">
                  <span>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Match & Market Live */}
        <div className="column right">
          <div className="card highlight">
            <div className="card-title">
              <span>Match & Market Live</span>
              <span className="pill">Realtime</span>
            </div>
            <div className="scoreboard">
              <span style={{ textAlign: 'right' }}>City</span>
              <span className="score">2 - 0</span>
              <span>Visitors</span>
            </div>
            <div style={{ color: '#8dbbf5', fontSize: 13, marginTop: 6 }}>65’ • Etihad • xG 1.42 vs 0.23</div>
            <div className="event-list">
              {events.map((e) => (
                <div key={e.detail} className="event">
                  <span>{e.minute}</span>
                  <span>{e.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <span>Market Ticker</span>
              <span className="pill">Blue Money</span>
            </div>
            <div className="ticker">
              <div className="ticker-line">
                {ticker.concat(ticker).map((item, idx) => (
                  <span key={`${item}-${idx}`}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <span>Leaderboard Tycoon</span>
              <span className="pill">Top 3</span>
            </div>
            <div className="leaderboard">
              {leaderboard.map((u) => (
                <div key={u.name} className="leader">
                  <span>{u.name}</span>
                  <span style={{ color: '#ffdf7b' }}>{u.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <span>Blue Moon Radio</span>
              <span className="pill">On Air</span>
            </div>
            <div className="radio">
              <div className="avatar" style={{ width: 48, height: 48 }} />
              <div>
                <div style={{ fontWeight: 700 }}>Bluemoon Podcast Mini</div>
                <div style={{ color: '#a9c7ff', fontSize: 13 }}>“Goal rush” 3 phút</div>
              </div>
              <div className="audio-chip">▶ Play</div>
            </div>
          </div>
        </div>

        {/* Admin & Wallpaper */}
        <div className="card highlight" style={{ gridColumn: '1 / -1' }}>
          <div className="card-title">
            <span>The Pep’s Office / Admin Control</span>
            <span className="pill">Mod-Eye</span>
          </div>
          <div className="admin-toolbar">
            <span className="tag">Quick Post</span>
            <span className="tag">Emergency Match-Mode</span>
            <span className="tag">Spotlight Pin</span>
            <span className="tag">Report Queue</span>
          </div>
          <div className="glass" style={{ marginTop: 12 }}>
            <div className="card-title" style={{ padding: 0 }}>
              <span>Dynamic Wallpaper Manager</span>
              <span className="pill">Scheduler</span>
            </div>
            <div className="list" style={{ marginTop: 10 }}>
              {wallpaperSchedule.map((item) => (
                <div key={item} className="list-item">
                  <span>🖼️</span>
                  <span>{item}</span>
                  <span className="badge">Auto</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
