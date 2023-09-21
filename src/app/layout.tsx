import './globals.css'

// 
import RootTemplate from '../../core/template/root'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootTemplate>
      {children}
    </RootTemplate>
  )
}
